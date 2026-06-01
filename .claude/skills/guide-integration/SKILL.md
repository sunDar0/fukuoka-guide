---
name: guide-integration
description: 확정된 큐레이션·동선 결과를 후쿠오카 가이드의 data.js(locations)와 planner.js(itineraryTemplates)에 기존 코드 스타일을 지키며 반영한다. "반영해줘", "코드에 적용", "data.js 수정", "일정 템플릿 업데이트", "planner 반영"을 요청하거나, _workspace의 확정안을 실제 파일에 옮겨야 할 때 반드시 이 스킬을 사용할 것. 무엇을 바꿀지 결정하는 일은 fukuoka-curation·family-route-design이 담당하므로 그쪽과 구분한다.
---

# 가이드 코드 반영

확정안을 `data.js`/`planner.js`에 정확히 끼워 넣는 방법을 정의한다. 새 구조를 만들지 않고 기존 패턴을 따른다.

## 왜 반영을 따로 두는가

큐레이션·동선은 "무엇을"을 정하고, 반영은 "기존 코드에 어떻게"를 책임진다. 빌드 도구 없는 순수 정적 파일이라 문법 오류 하나가 곧 페이지 깨짐이다. 그래서 반영은 최소 변경 + 구문 검증을 원칙으로 분리한다.

## 대상 파일과 구조

### data.js — locations 배열
명소 객체 스키마(고정, 새 필드 금지):
```js
{ name, lat, lng, region, description, hours, admission, website, duration, childFriendly, imageQuery, nearbyHotels }
```
- 지역별로 `// ── 지역명 — N spots` 주석 블록 안에 모여 있다. 명소 추가 시 같은 지역 블록 안에, 기존 들여쓰기·따옴표 스타일대로 넣는다.
- 배열 끝 `window.locations = locations;` 등 노출부는 건드리지 않는다.

### planner.js — window.itineraryTemplates
- `itineraryTemplates[nights]` 객체 딕셔너리. 3박4일은 `itineraryTemplates[3]`(planner.js:119 부근).
- day 객체: `{ day, title, summary, timeline:[{ time, icon, activity, details, childNote }] }`.
- 재작성 시 해당 nights 블록만 교체한다. 다른 nights 템플릿, `weatherData`, `foodGuide`, `transportGuide`, `renderItinerary` 로직은 건드리지 않는다.

## 반영 원칙

- **최소 변경**: 확정안이 가리키는 객체·필드·day만 수정한다. 인접 코드 서식을 손대지 않는다.
- **스타일 일치**: 들여쓰기(스페이스 수), 작은따옴표, 후행 쉼표 유무를 주변 코드와 똑같이 맞춘다.
- **구문 검증 필수**: 수정 후 `node --check data.js`, `node --check planner.js`를 돌려 통과를 확인한다. 통과 못 하면 고치고 재검증.
- **새 추상화 금지**: 요청하지 않은 헬퍼·함수·설정을 추가하지 않는다.

## 반영 절차

1. `_workspace/01~03`의 확정·검수 통과 항목만 반영한다(차단급 미해소 항목은 보류).
2. data.js 명소부터: 추가/수정/삭제를 해당 지역 블록에서 Edit.
3. planner.js 템플릿: 대상 nights 블록을 재작성안대로 교체.
4. `node --check`로 두 파일 구문 검증.
5. 변경 범위를 family-qa에 전달해 경계면 재검증 요청.

## 검증 (빌드 없음)

번들러·테스트 러너가 없으므로:
- 구문: `node --check`.
- 실물: 브라우저로 `index.html`을 열어 3박4일·유아 포함 조건으로 일정 생성 → day-card 렌더, childNote 표시, 폰 폭에서 깨짐 없음을 육안 확인(필요 시 사용자에게 요청).

## 하지 않을 것

- 무엇을 바꿀지 스스로 결정하지 않는다. 모호하면 산출물 작성자에게 확인한다.
- 파일을 통째로 다시 쓰지 않는다. 해당 부분만 Edit한다.
- git 작업(commit/push)을 하지 않는다.
