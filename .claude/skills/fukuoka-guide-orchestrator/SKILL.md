---
name: fukuoka-guide-orchestrator
description: 후쿠오카 여행 가이드(data.js·planner.js)의 명소 큐레이션과 일자별 동선 설계를 에이전트 팀으로 처리하는 오케스트레이터. "후쿠오카 여행지 추려줘", "동선 짜줘", "이동 플랜", "일정 다시 짜줘", "명소 추가/정리", "여행 가이드 업데이트", "동선 보완", "○일차만 다시"처럼 이 프로젝트의 여행지·일정·동선을 만들거나 고치는 요청에 반드시 이 스킬을 사용할 것. 단순 사실 질문(항공권 가격, 환율 등)이나 코드 구조 단순 질의는 직접 답한다.
---

# 후쿠오카 가이드 오케스트레이터

명소 큐레이션과 동선 설계를 에이전트 팀으로 묶어 처리하는 워크플로우다. 개별 작업법은 각 스킬(fukuoka-curation, family-route-design, family-travel-qa, guide-integration)이 담고, 여기서는 **누가 언제 어떤 순서로 협업하는가**를 정의한다.

## 실행 모드: 에이전트 팀

큐레이션("무엇을")과 동선("언제 어떻게")이 강결합이라 실시간 조율이 품질을 좌우한다. `TeamCreate`로 팀을 만들고, 팀원은 `SendMessage`로 직접 협상한다. 전원 `model: "opus"`.

## 팀 구성

| 에이전트 | 정의 | 스킬 |
|---|---|---|
| local-curator | `.claude/agents/local-curator.md` | fukuoka-curation |
| route-planner | `.claude/agents/route-planner.md` | family-route-design |
| family-qa | `.claude/agents/family-qa.md` | family-travel-qa |
| integrator | `.claude/agents/integrator.md` | guide-integration |

## Phase 0: 컨텍스트 확인 (먼저 실행)

`_workspace/`와 그 산출물 존재 여부로 실행 모드를 정한다.
- `_workspace/` 없음 → **초기 실행**: Phase 1부터 전체.
- `_workspace/` 있음 + 사용자가 부분 수정 요청(예: "Day3만", "명소만") → **부분 재실행**: 해당 에이전트만 재호출, 산출물의 가리킨 부분만 수정.
- `_workspace/` 있음 + 새 조건 제공 → **새 실행**: 기존 `_workspace/`를 `_workspace_prev/`로 옮기고 처음부터.

여행 조건(가족 구성·시즌·이동 수단·거점·일수)을 한 줄로 정리해 모든 에이전트에 전달한다. 불명확하면 사용자에게 먼저 확인한다.

## 워크플로우 (파이프라인 + 팀 조율)

```
Phase 1  local-curator  → _workspace/01_curator_shortlist.md   (명소 풀 정리)
Phase 2  route-planner  → _workspace/02_route_plan.md          (4일 동선)
         ↕ SendMessage: 동선상 빼기/추가를 curator와 실시간 협상
Phase 3  family-qa      → _workspace/03_qa_report.md           (01+02 1차 교차검증)
Phase 4  integrator     → data.js / planner.js 반영
Phase 5  family-qa      → 경계면 2차 검증 (incremental QA)
```

- Phase 3에서 차단급 결함이 나오면 해당 에이전트로 되돌려 수정 후 재검증한다.
- Phase 5 통과 후 사용자에게 결과와 변경 요약을 보고한다.

## 데이터 전달

- **파일 기반**(주 산출물): `_workspace/{단계}_{에이전트}_{산출물}.md`. 최종은 `data.js`/`planner.js`. 중간 파일은 보존(감사 추적).
- **태스크 기반**: `TaskCreate`로 단계·의존관계 추적.
- **메시지 기반**: `SendMessage`로 curator↔route-planner 실시간 협상, family-qa의 결함 통보.

## 에러 핸들링

- 에이전트 실패 → 1회 재시도. 재실패 시 그 결과 없이 진행하고 보고서에 누락을 명시한다.
- 상충 데이터(예: 큐레이션 가치 vs 동선 효율) → 삭제하지 않고 출처 병기 후 사용자 판단에 맡긴다.
- 차단급 QA 결함 미해소 → integrator는 해당 항목 반영을 보류한다.

## 팀 크기

4명(소~중규모, 팀원당 작업 3~5개). 작업이 더 커지면(여러 도시·여러 시즌 동시) 거점별로 route-planner를 분할 고려하되, 기본은 4명 유지.

## 테스트 시나리오

**정상 흐름**: "12월에 유아·노부모와 렌터카로 3박4일, 시내 2박+온천 1박 동선 짜줘" → Phase 0 초기 실행 판정 → curator가 겨울·가족 필터로 명소 정리 → route-planner가 렌터카 4일 동선 + itineraryTemplates[3] 재작성안 → family-qa 1차 검증 → integrator 반영 → family-qa 2차(node --check + 명소 매칭) → 보고.

**에러 흐름**: route-planner가 Day3에 data.js에 없는 명소를 참조 → family-qa가 차단급으로 잡아 SendMessage → curator가 해당 명소 추가 또는 route-planner가 활동 교체 → 재검증 통과 후 진행.

## 후속 작업

- "동선 다시", "○일차만 수정", "명소만 보완", "이전 결과 개선" → Phase 0에서 부분/새 실행 판정 후 해당 에이전트만 재호출.
- 같은 유형 피드백이 2회 이상 반복되면 해당 스킬·에이전트 정의 갱신을 사용자에게 제안한다.
