# fukuoka-guide

빌드 도구 없는 순수 정적 웹 여행 가이드. `data.js`(명소·맛집·숙소 데이터) + `planner.js`(일정 템플릿) + `map.js`(지도). 일정은 알고리즘이 아니라 `window.itineraryTemplates[nights]`에 하드코딩된 큐레이션 템플릿이다.

## 하네스: 후쿠오카 가족 여행 가이드

**목표:** 명소 큐레이션과 일자별 동선 설계를 현지 가이드 관점의 에이전트 팀으로 처리해 `data.js`·`planner.js`에 반영한다.

**트리거:** 후쿠오카 여행지·일정·동선을 만들거나 고치는 요청(여행지 추려줘 / 동선 짜줘 / 이동 플랜 / 일정 다시 / 명소 추가·정리 / ○일차만 수정 등), 화면을 점검·개선하는 요청(UI 개선 / 화면 점검 / 모바일 레이아웃 / 지도 화면 버그 등) 시 `fukuoka-guide-orchestrator` 스킬을 사용하라. 단순 사실 질문이나 코드 구조 단순 질의는 직접 답한다.

**변경 이력:**
| 날짜 | 변경 내용 | 대상 | 사유 |
|------|----------|------|------|
| 2026-06-01 | 초기 구성 (에이전트 4 + 스킬 5) | 전체 | 가족 여행(유아·노부모·12월·렌터카) 큐레이션+동선 하네스 신규 구축 |
| 2026-06-04 | 좌표 ground-truth 검증 역량 추가 | skills/family-travel-qa, agents/family-qa | 명소 lat/lng의 실제 위치 정확도를 검증하는 절차 부재 (기존 QA는 명소 간 상대 거리만 점검) |
| 2026-10-22 | UI/UX 에이전트·스킬 추가, 오케스트레이터에 UI 트랙 추가 | agents/ui-ux-designer, skills/guide-ui-ux, skills/fukuoka-guide-orchestrator | 사용자 요청 "UI도 UI/UX 전문 에이전트를 만들어서 진행" — 지도 타일·경로·바텀시트·차트 등 화면 결함을 다룰 담당 부재 |
| 2026-10-22 | 기존 4 에이전트에 권한 범위·조사보고 원칙 추가, integrator에 결정적 검사 규율 추가, 오케스트레이터 `TeamCreate` 표기를 `Agent`+`name` 방식으로 교체 | agents/*, skills/fukuoka-guide-orchestrator | 하네스 감사에서 공통 규율 누락·없어진 API 표기 발견 |
