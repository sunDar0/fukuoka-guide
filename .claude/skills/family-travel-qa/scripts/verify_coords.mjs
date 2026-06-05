#!/usr/bin/env node
// 좌표 ground-truth 검증 보조 — claimed vs verified 좌표의 직선 오차(m)를 계산하고 판정한다.
// 입력: JSON 배열 [{name, region?, claimed:[lat,lng], verified:[lat,lng]}]
//       (첫 인자가 파일 경로면 그 파일, 없으면 stdin)
// 출력: 명소별 오차(m) + 판정(FIX/MINOR/OK)과 요약.

import { readFileSync } from "node:fs";

const FIX_M = 500; // 초과면 반드시 수정
const MINOR_M = 150; // 초과면 선택 수정

function offsetMeters(a, b) {
  const R = 6371000;
  const toRad = (x) => (x * Math.PI) / 180;
  const dLat = toRad(b[0] - a[0]);
  const dLng = toRad(b[1] - a[1]);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a[0])) * Math.cos(toRad(b[0])) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function verdict(m) {
  if (m > FIX_M) return "FIX";
  if (m > MINOR_M) return "MINOR";
  return "OK";
}

const arg = process.argv[2];
const raw = arg ? readFileSync(arg, "utf8") : readFileSync(0, "utf8");
const records = JSON.parse(raw);

let fix = 0,
  minor = 0;
for (const r of records) {
  const m = offsetMeters(r.claimed, r.verified);
  const v = verdict(m);
  if (v === "FIX") fix++;
  if (v === "MINOR") minor++;
  const detail =
    v === "OK" ? "" : `  ${r.claimed.join(",")} -> ${r.verified.join(",")}`;
  console.log(`${v.padEnd(5)} ${String(Math.round(m)).padStart(6)} m  ${r.name}${detail}`);
}
console.log(
  `\n총 ${records.length}건 | FIX ${fix} | MINOR ${minor} | OK ${records.length - fix - minor}`
);
