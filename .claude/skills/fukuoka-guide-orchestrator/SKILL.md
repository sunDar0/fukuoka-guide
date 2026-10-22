---
name: fukuoka-guide-orchestrator
description: 후쿠오카 여행 가이드(data.js·planner.js·화면)의 명소 큐레이션, 일자별 동선 설계, UI/UX 점검·개선을 에이전트 팀으로 처리하는 오케스트레이터. "후쿠오카 여행지 추려줘", "동선 짜줘", "이동 플랜", "일정 다시 짜줘", "명소 추가/정리", "여행 가이드 업데이트", "정보 최신화", "동선 보완", "○일차만 다시"처럼 여행지·일정·동선을 만들거나 고치는 요청, 그리고 "UI 개선", "화면 점검", "모바일 레이아웃", "지도 화면 버그", "UX 다시 봐줘", "이전 UI 점검 이어서"처럼 화면을 점검·개선하는 요청에 반드시 이 스킬을 사용할 것. 단순 사실 질문(항공권 가격, 환율 등)이나 코드 구조 단순 질의는 직접 답한다.
---

# 후쿠오카 가이드 오케스트레이터

명소 큐레이션·동선 설계·화면 개선을 에이전트 팀으로 묶어 처리하는 워크플로우다. 개별 작업법은 각 스킬(fukuoka-curation, family-route-design, family-travel-qa, guide-integration, guide-ui-ux)이 담고, 여기서는 **누가 언제 어떤 순서로 협업하는가**를 정의한다.

**권한 경계**
```
읽기: 프로젝트 전체, 웹 검색
쓰기: _workspace/, data.js, planner.js, index.html, map.html, style.css, map.js, sw.js (에이전트별 범위는 각 정의의 「권한 범위」)
실행: node --check, node 조회 스크립트, python3 -m http.server, 브라우저 도구(claude-in-chrome), curl 조회
차단: git 커밋·푸시, 패키지 설치, 외부 서비스 가입·키 발급 (사용자 명시 지시 전용)
```

**결정적 검사:** `node --check data.js && node --check planner.js && node --check map.js && node --check sw.js`. 그 외 자동 테스트는 없다(화면은 브라우저 실측).

**내구성 단계:** 스킵 — 트랙 하나가 한 세션 안에 끝나는 길이이고, 단계별 산출물이 `_workspace/` 에 남아 Phase 0 판정으로 이어서 할 수 있다.

**실행 상한:** 재시도 3 회(에이전트당) · 트랙당 에이전트 호출 8 회 · 브라우저 도구 연속 실패 3 회에서 중단 후 사용자 보고.

## 실행 모드: 에이전트 팀 (데이터 트랙) / 서브 에이전트 (UI 트랙)

- **데이터 트랙**: 큐레이션("무엇을")과 동선("언제 어떻게")이 강결합이라 실시간 조율이 품질을 좌우한다. `Agent` 에 `name` 을 주어 팀원을 띄우고, 팀원은 `SendMessage` 로 직접 협상한다. 팀원 생성 프롬프트에 통신 상대 이름(`local-curator`, `route-planner`, `family-qa`, `integrator`)을 직접 적어준다.
- **UI 트랙**: 점검 → 개선 → 독립 검수가 순차이고 결과 전달만 필요하다. `Agent` 를 이름 없이 호출해 결과를 반환값으로 받는다. 독립 검수는 반드시 새 호출로 띄운다(개선한 인스턴스에 다시 묻지 않는다).

전원 `model: "opus"`.

## 팀 구성

| 에이전트 | 정의 | 스킬 | 트랙 |
|---|---|---|---|
| local-curator | `.claude/agents/local-curator.md` | fukuoka-curation | 데이터 |
| route-planner | `.claude/agents/route-planner.md` | family-route-design | 데이터 |
| family-qa | `.claude/agents/family-qa.md` | family-travel-qa | 데이터 |
| integrator | `.claude/agents/integrator.md` | guide-integration | 데이터 |
| ui-ux-designer | `.claude/agents/ui-ux-designer.md` | guide-ui-ux | UI |

## Phase 0: 컨텍스트 확인 (먼저 실행)

1. **트랙 판정**: 명소·일정·동선·요금 같은 내용 변경이면 데이터 트랙, 화면·레이아웃·조작·표시 버그면 UI 트랙. 둘 다면 데이터 트랙을 먼저 끝내고 UI 트랙을 돈다(화면이 새 데이터를 기준으로 점검돼야 한다).
2. **실행 모드 판정**: `_workspace/` 의 해당 트랙 산출물(데이터 `01~04`, UI `06~07`) 존재 여부로 정한다.
   - 산출물 없음 → **초기 실행**.
   - 산출물 있음 + 부분 수정 요청(예: "Day3만", "바텀시트만") → **부분 재실행**: 해당 에이전트만 재호출, 가리킨 부분만 수정.
   - 산출물 있음 + 새 조건 → **새 실행**: 기존 산출물을 `_workspace_prev/` 로 옮기고 처음부터.
3. 데이터 트랙은 여행 조건(가족 구성·시즌·이동 수단·거점·일수)을 한 줄로 정리해 모든 에이전트에 전달한다. 불명확하면 사용자에게 먼저 확인한다.

## 데이터 트랙 (파이프라인 + 팀 조율)

```
Phase 1  local-curator  → _workspace/01_curator_shortlist.md   (명소 풀 정리)
Phase 2  route-planner  → _workspace/02_route_plan.md          (일자별 동선)
         ↕ SendMessage: 동선상 빼기/추가를 curator와 실시간 협상
Phase 3  family-qa      → _workspace/03_qa_report.md           (01+02 1차 교차검증)
Phase 4  integrator     → data.js / planner.js 반영
Phase 5  family-qa      → 경계면 2차 검증 (incremental QA)
```

- Phase 3에서 차단급 결함이 나오면 해당 에이전트로 되돌려 수정 후 재검증한다.
- Phase 5 통과 후 사용자에게 결과와 변경 요약을 보고한다.

## UI 트랙 (생성-검증)

```
Phase U1  ui-ux-designer (점검 모드)  → _workspace/06_ui_audit.md
          리더: 항목을 사용자에게 보고하고 고칠 항목을 정한다
          (사용자가 고칠 항목을 이미 지정했으면 그 목록으로 바로 U2)
Phase U2  ui-ux-designer (개선 모드)  → 코드 수정 + _workspace/07_ui_changes.md
Phase U3  ui-ux-designer (새 호출, 점검 모드) → 06_ui_audit.md 에 "재검수" 절 추가
          리더: 타당한 지적만 U2 로 되돌린다 (재시도 상한 안에서)
```

- 데이터가 원인인 UI 문제는 데이터 트랙으로 넘긴다.
- HTML·CSS·JS 를 바꾼 회차는 `sw.js` 의 `CACHE_NAME` 이 한 번 올라갔는지 리더가 확인한다.

## 데이터 전달

- **파일 기반**(주 산출물): `_workspace/{단계}_{에이전트}_{산출물}.md`. 최종은 실제 소스 파일. 중간 파일은 보존(감사 추적).
- **태스크 기반**: `TaskCreate`로 단계·의존관계 추적.
- **메시지 기반**: 데이터 트랙의 `SendMessage`(curator↔route-planner 협상, family-qa 결함 통보).
- **반환값 기반**: UI 트랙의 각 호출 결과.

## 에러 핸들링

- 에이전트 실패 → 상한(3 회) 안에서 재시도. 재실패 시 그 결과 없이 진행하고 보고서에 누락을 명시한다.
- 상충 데이터(예: 큐레이션 가치 vs 동선 효율) → 삭제하지 않고 출처 병기 후 사용자 판단에 맡긴다.
- 차단급 QA 결함 미해소 → integrator는 해당 항목 반영을 보류한다.
- 브라우저 도구가 계속 실패 → 실측 못 한 항목을 "코드 기준, 재현 안 함" 으로 남기고 사용자에게 보고한다.

## 팀 크기

데이터 트랙 4명(소~중규모, 팀원당 작업 3~5개). UI 트랙은 한 번에 한 인스턴스. 작업이 더 커지면(여러 도시·여러 시즌 동시) 거점별로 route-planner를 분할 고려하되, 기본은 유지.

## 테스트 시나리오

**정상 흐름 (데이터)**: "12월에 유아·노부모와 렌터카로 3박4일, 시내 2박+온천 1박 동선 짜줘" → Phase 0 데이터 트랙·초기 실행 → curator가 겨울·가족 필터로 명소 정리 → route-planner가 렌터카 4일 동선 + itineraryTemplates[3] 재작성안 → family-qa 1차 검증 → integrator 반영 → family-qa 2차(node --check + 명소 매칭) → 보고.

**정상 흐름 (UI)**: "지도에서 필터 바꿔도 경로가 남아 있어, 고쳐줘" → Phase 0 UI 트랙, 항목 지정됨 → U2 개선(핸들러 수정, CACHE_NAME 올림, node --check, 실측 전·후 값) → U3 새 인스턴스가 같은 절차로 재현해 해소 확인 → 보고.

**에러 흐름**: route-planner가 Day3에 data.js에 없는 명소를 참조 → family-qa가 차단급으로 잡아 SendMessage → curator가 해당 명소 추가 또는 route-planner가 활동 교체 → 재검증 통과 후 진행.

**에러 흐름 (UI)**: U3 재검수에서 서비스 워커 캐시 때문에 옛 파일이 보여 "미해소" 판정 → 리더가 캐시 상태를 확인해 실측 조건 문제로 판정 → 탭을 닫고 다시 열어 재실측.

## 후속 작업

- "동선 다시", "○일차만 수정", "명소만 보완", "이전 결과 개선", "UI 점검 이어서", "그 화면만 다시" → Phase 0에서 트랙과 부분/새 실행 판정 후 해당 에이전트만 재호출.
- 같은 유형 피드백이 2회 이상 반복되면 해당 스킬·에이전트 정의 갱신을 사용자에게 제안한다.
