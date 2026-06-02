// ============================================================
// Fukuoka Trip Planner - planner.js
// All dynamic guide generation logic
// Depends on data.js globals: locations, weatherData (optional),
//   foodGuide (optional), budgetData (optional), itineraryTemplates (optional)
// If data.js doesn't provide planner-specific data, we define defaults below.
// ============================================================

(function () {
    'use strict';

    // ============================
    // DEFAULT DATA (used if data.js does not provide them)
    // ============================

    // --- Weather Data (by month 1-12) ---
    if (typeof window.weatherData === 'undefined') {
        window.weatherData = {
            1:  { month: '1월', avgTemp: 6.6,  high: 9.9,  low: 3.5,  rainfall: 68,  description: '겨울철이지만 한국보다 온화합니다. 두꺼운 코트와 머플러를 준비하세요.', packing: ['두꺼운 코트', '머플러/장갑', '기모 안감 옷', '보습 크림'] },
            2:  { month: '2월', avgTemp: 7.4,  high: 10.8, low: 4.1,  rainfall: 71,  description: '아직 쌀쌀하지만 매화가 피기 시작합니다. 다자이후 매화 축제 시즌!', packing: ['두꺼운 외투', '니트/스웨터', '머플러', '우산'] },
            3:  { month: '3월', avgTemp: 10.4, high: 14.3, low: 6.8,  rainfall: 112, description: '봄이 시작되고 벚꽃 시즌이 다가옵니다. 가벼운 겉옷이 필요합니다.', packing: ['가벼운 자켓', '긴팔 셔츠', '얇은 니트', '우산'] },
            4:  { month: '4월', avgTemp: 15.1, high: 19.5, low: 11.2, rainfall: 117, description: '벚꽃 만개! 마이즈루 공원과 니시 공원에서 하나미를 즐기세요.', packing: ['가디건/자켓', '긴팔 셔츠', '얇은 바지', '우산'] },
            5:  { month: '5월', avgTemp: 19.4, high: 23.7, low: 15.6, rainfall: 142, description: '쾌적한 날씨로 여행 최적기입니다. 가벼운 옷차림이 좋습니다.', packing: ['반팔/긴팔', '얇은 가디건', '편한 운동화', '자외선 차단제'] },
            6:  { month: '6월', avgTemp: 23.0, high: 26.9, low: 20.0, rainfall: 254, description: '장마 시즌입니다. 비가 자주 오니 우산과 방수 신발은 필수!', packing: ['우산/우비', '방수 신발', '반팔', '제습용품'] },
            7:  { month: '7월', avgTemp: 27.2, high: 31.1, low: 24.3, rainfall: 277, description: '무더운 여름! 하카타 기온 야마카사 축제(7/1~15)가 열립니다.', packing: ['반팔/반바지', '선글라스', '자외선 차단제', '부채/손선풍기'] },
            8:  { month: '8월', avgTemp: 27.8, high: 31.8, low: 24.7, rainfall: 172, description: '가장 더운 달입니다. 수분 보충을 자주 하고 실내 관광을 병행하세요.', packing: ['반팔/반바지', '모자', '자외선 차단제', '물병'] },
            9:  { month: '9월', avgTemp: 24.4, high: 28.3, low: 21.1, rainfall: 178, description: '아직 더위가 남아있지만 점차 선선해집니다. 태풍 시즌에 유의하세요.', packing: ['반팔/긴팔', '얇은 겉옷', '우산', '자외선 차단제'] },
            10: { month: '10월', avgTemp: 19.2, high: 23.4, low: 15.3, rainfall: 73,  description: '가을 여행 최적기! 쾌적한 날씨에 단풍이 아름답습니다.', packing: ['긴팔 셔츠', '가디건/자켓', '편한 운동화', '가벼운 스카프'] },
            11: { month: '11월', avgTemp: 13.8, high: 17.8, low: 10.0, rainfall: 85,  description: '단풍 시즌 절정! 다자이후와 유후인의 단풍이 특히 아름답습니다.', packing: ['자켓/코트', '긴팔', '니트/스웨터', '가벼운 머플러'] },
            12: { month: '12월', avgTemp: 8.6,  high: 12.1, low: 5.3,  rainfall: 59,  description: '겨울 시작이지만 크리스마스 일루미네이션이 아름답습니다.', packing: ['두꺼운 코트', '니트/스웨터', '머플러/장갑', '보습 크림'] }
        };
    }

    // --- Food Guide ---
    if (typeof window.foodGuide === 'undefined') {
        window.foodGuide = [
            { icon: '🍜', name: '하카타 라멘', description: '돼지뼈 육수의 진한 국물과 가는 면이 특징. 카에다마(면 추가)는 필수!' },
            { icon: '🥟', name: '히토쿠치 교자', description: '한 입 크기의 바삭한 군만두. 야타이(포장마차)에서 꼭 맛보세요.' },
            { icon: '🐡', name: '모츠나베', description: '소 곱창을 넣고 끓인 전골. 겨울철 인기 메뉴로 콜라겐이 풍부합니다.' },
            { icon: '🍢', name: '야키토리', description: '후쿠오카식 닭꼬치. 특히 가와(닭껍질)는 현지인 추천 메뉴!' },
            { icon: '🍓', name: '아마오 딸기', description: '후쿠오카 특산 딸기. 겨울~봄 시즌에 딸기 디저트를 놓치지 마세요.' },
            { icon: '🍵', name: '우메가에모치', description: '다자이후 텐만구 명물 매화떡. 따뜻할 때 먹으면 최고!' }
        ];
    }

    // --- Budget Data ---
    if (typeof window.budgetData === 'undefined') {
        window.budgetData = {
            accommodation: {
                budget: 5000,    // per night per room (business hotel)
                mid: 10000,      // per night per room (mid-range)
                premium: 25000   // per night per room (premium)
            },
            transport: {
                airport_to_hakata: 260,
                fukuoka_subway_pass: 640,
                nishitetsu_bus: 190,
                daily_transport: 1000,   // average daily transport cost
                dazaifu_round_trip: 820
            },
            food: {
                adult_per_day: 3500,
                child_per_day: 2000,
                infant_per_day: 500
            },
            attractions: {
                daily_average: 800     // average per person per day
            }
        };
    }

    // --- Itinerary Templates (keyed by nights: 2-7) ---
    if (typeof window.itineraryTemplates === 'undefined') {
        window.itineraryTemplates = {};

        // Helper to build templates
        window.itineraryTemplates[2] = {
            nights: 2,
            days: [
                {
                    day: 1, title: '하카타 도착 & 시내 탐방',
                    summary: '후쿠오카 공항 도착 후 하카타역 주변과 나카스 야타이를 즐기는 첫째 날',
                    timeline: [
                        { time: '11:00', icon: '✈️', activity: '후쿠오카 공항 도착', details: '입국 수속 후 지하철로 하카타역 이동 (5분, 260엔)', childNote: '공항 내 유아 휴게실 이용 가능' },
                        { time: '12:00', icon: '🏨', activity: '호텔 체크인 & 짐 보관', details: '하카타역 주변 호텔에 짐을 맡기고 가볍게 출발', childNote: '' },
                        { time: '12:30', icon: '🍜', activity: '하카타 라멘 점심', details: '하카타역 지하 라멘 스트리트에서 본고장 돈코츠 라멘 맛보기', childNote: '어린이용 라멘(오코사마 라멘) 주문 가능' },
                        { time: '14:00', icon: '🛍️', activity: '캐널시티 하카타', details: '쇼핑몰 둘러보기, 분수 쇼 관람, 면세 쇼핑', childNote: '키즈 놀이 공간 및 수유실 있음' },
                        { time: '16:00', icon: '⛩️', activity: '쿠시다 신사', details: '하카타의 총 진수사(총 수호신사). 기온 야마카사의 거대 장식 수레 상설 전시', childNote: '' },
                        { time: '17:30', icon: '🏨', activity: '호텔 휴식', details: '잠시 쉬고 저녁 외출 준비', childNote: '아이와 함께라면 일찍 나가는 것 추천' },
                        { time: '19:00', icon: '🏮', activity: '나카스 야타이 (포장마차)', details: '나카스강변 포장마차에서 교자, 라멘, 야키토리 등 길거리 음식 즐기기', childNote: '야타이는 좌석이 좁아 유아 동반 시 주의' }
                    ]
                },
                {
                    day: 2, title: '텐진 쇼핑 & 오호리 공원',
                    summary: '후쿠오카 최대 번화가 텐진과 아름다운 오호리 공원 산책',
                    timeline: [
                        { time: '09:00', icon: '🍳', activity: '호텔 조식 또는 카페 아침', details: '텐진 지역 카페에서 여유로운 아침 식사', childNote: '' },
                        { time: '10:00', icon: '🛍️', activity: '텐진 지하상가 & 쇼핑', details: '일본 최대 규모 지하상가에서 쇼핑. 텐진코어, 미츠코시 백화점 등', childNote: '' },
                        { time: '12:00', icon: '🍱', activity: '텐진 점심', details: '텐진 맛집 탐방. 모츠나베 또는 우동 추천', childNote: '패밀리 레스토랑(가스토, 로얄호스트) 이용 추천' },
                        { time: '13:30', icon: '🌳', activity: '오호리 공원 산책', details: '후쿠오카의 센트럴파크. 호수 둘레길 산책과 보트 체험', childNote: '놀이터와 넓은 잔디밭이 있어 아이들이 뛰놀기 좋음' },
                        { time: '15:00', icon: '🏯', activity: '후쿠오카성터 (마이즈루 공원)', details: '오호리 공원에서 도보 이동. 전망대에서 시내 전경 감상', childNote: '' },
                        { time: '16:30', icon: '🧳', activity: '공항 이동 & 쇼핑', details: '하카타역으로 돌아와 하카타 마루이/아뮤 플라자에서 마지막 기념품 쇼핑', childNote: '' },
                        { time: '18:30', icon: '✈️', activity: '후쿠오카 공항 출발', details: '지하철로 공항 이동 후 출국 수속', childNote: '공항 내 면세점에서 로이스 초콜릿 추천' }
                    ]
                },
                {
                    day: 3, title: '귀국',
                    summary: '아침에 공항으로 이동하여 귀국 (일찍 출발하는 경우)',
                    timeline: [
                        { time: '08:00', icon: '🍳', activity: '호텔 조식', details: '여유로운 아침 식사 후 체크아웃', childNote: '' },
                        { time: '09:30', icon: '✈️', activity: '공항 이동', details: '하카타역에서 지하철로 공항 이동 (5분)', childNote: '' },
                        { time: '10:00', icon: '🛒', activity: '공항 면세 쇼핑', details: '후쿠오카 공항 면세점에서 마지막 쇼핑', childNote: '' },
                        { time: '12:00', icon: '✈️', activity: '출발', details: '안녕 후쿠오카! 다음에 또 만나요!', childNote: '' }
                    ]
                }
            ]
        };

        window.itineraryTemplates[3] = {
            nights: 3,
            days: [
                {
                    day: 1, title: '하카타 도착 & 시내 거점',
                    summary: '공항에서 렌터카 픽업, 하카타 호텔 정박 후 실내 위주로 가볍게. 저녁은 도심 크리스마스 마켓',
                    timeline: [
                        { time: '11:00', icon: '✈️', activity: '후쿠오카 공항 도착 & 렌터카 픽업', details: '입국 수속 + 렌터카 6~7인승 픽업·카시트 장착에 60~90분(완료 12:00~12:30). 공항→하카타 호텔 차로 약 15분, 시내 본격 일정은 13:00경 시작', childNote: '공항 내 수유실·유아 휴게실 이용. 첫날은 무리하지 않음(노부모·유아 비행 피로)' },
                        { time: '12:00', icon: '🏨', activity: '하카타 호텔 체크인', details: '하카타역 인근 호텔 체크인, 호텔 주차장에 차 2박 정박. 도심 주차난이라 이후 시내 이동은 주차 가능처 중심', childNote: '짐 정리, 유아 용품 정돈. 노부모 잠시 휴식' },
                        { time: '13:00', icon: '🍜', activity: '하카타 라멘 점심', details: '호텔 도보권 또는 하카타역 라멘 스트리트. 차 두고 도보', childNote: '어린이용 순한 면 선택 가능, 좌석 넓은 식당 우선' },
                        { time: '14:30', icon: '🛍️', activity: '캐널시티 하카타', details: '호텔에서 차로 5분 또는 도보 10분, 자체 주차장 보유. 실내 복합몰, 운하 분수쇼(매시)로 겨울에도 무난', childNote: '키즈 놀이공간·수유실. 유아차 자유, 노부모 앉을 곳 많음' },
                        { time: '16:00', icon: '⛩️', activity: '쿠시다 신사', details: '캐널시티에서 도보 7분(차로 3분). 짧은 평지 참배 약 40분', childNote: '유아차 접근 무난, 노부모도 평지라 부담 없음' },
                        { time: '17:00', icon: '🏨', activity: '호텔 복귀 & 휴식', details: '도보/차 5분. 야간 외출 전 방한 채비', childNote: '유아 저녁잠 대비 잠깐 쉬기, 노부모 체력 회복' },
                        { time: '18:30', icon: '🎄', activity: '후쿠오카 크리스마스 마켓 (야간)', details: '호텔에서 차로 10분, 시청 인근 공영/제휴 주차장(주차 확인 필요). 후레아이광장 일루미네이션·먹거리 부스', childNote: '방한 후 30~40분 짧게. 유아차에 담요, 노부모는 추우면 실내 카페에서 교대 대기' }
                    ]
                },
                {
                    day: 2, title: '시사이드 가족 코스 & 온천',
                    summary: '실내 대형 수족관 마린월드 후 같은 권역 테리하 스파에서 한낮 온천 재충전, 저녁 후쿠오카 타워 크리스마스 트리',
                    timeline: [
                        { time: '09:00', icon: '🍳', activity: '호텔 조식 & 출발', details: '천천히 조식 후 호텔 주차장에서 출차', childNote: '유아 오전 컨디션 좋을 때 핵심 명소부터' },
                        { time: '09:40', icon: '🐬', activity: '마린월드 우미노나카미치', details: '하카타에서 차로 약 35분(북쪽 우미노나카미치 반도), 전용 주차장. 실내 대형 수족관, 돌고래·바다사자 쇼', childNote: '3세 이하 무료, 2살 유아 강점. 실내라 겨울·우천 무관. 유아차 대여·수유실' },
                        { time: '12:00', icon: '♨️', activity: '테리하 스파 리조트 (점심·온천)', details: '마린월드에서 차로 약 10분(같은 아일랜드시티 권역), 전용 주차장. 점심 후 천연 온천·키즈룸에서 유아 낮잠·노부모 휴식. 시내 복귀 차로 약 25분', childNote: '키즈&패밀리룸·유아 입욕 가능, 노부모 온천 휴식. 가장 편한 한낮 재충전' },
                        { time: '15:30', icon: '🗼', activity: '후쿠오카 타워 (야간 크리스마스 트리)', details: '테리하에서 차로 약 25분, 타워 주차장. 실내 전망대 + 12월 108m 외벽 크리스마스 트리 점등(일몰 후)', childNote: '전망대 실내라 따뜻. 야경·트리 유아도 좋아함, 노부모 엘리베이터' },
                        { time: '18:00', icon: '🍲', activity: '모츠나베 저녁', details: '타워에서 차로 약 10분, 나기사마치 모츠나베 거리. 겨울 따뜻한 곱창전골. 식후 호텔 차로 15분', childNote: '순한 맛 선택 시 유아도 가능. 좌식/입식 확인' }
                    ]
                },
                {
                    day: 3, title: '다자이후 & 유후인 이동',
                    summary: '짐 옮기는 날. 시내 체크아웃 후 길목 다자이후를 반나절, 오후 유후인 이동·온천 1박',
                    timeline: [
                        { time: '08:30', icon: '🍳', activity: '조식 & 체크아웃', details: '호텔 조식 후 체크아웃, 짐 전부 차에 적재(유후인까지 정박 없음)', childNote: '이동 많은 날이라 아침 여유 있게, 유아 컨디션 살피기' },
                        { time: '09:30', icon: '🚗', activity: '다자이후로 이동', details: '하카타에서 차로 약 40분(도로 약 15km). 텐만구 인근 공영/민영 주차장', childNote: '차 안 간식·놀이, 멀미 대비' },
                        { time: '10:15', icon: '⛩️', activity: '다자이후 텐만구', details: '주차 후 평지 참배길 산책. 12월은 매화 전이라 참배·분위기 위주', childNote: '유아차 무난한 평지, 노부모 천천히' },
                        { time: '11:00', icon: '🍵', activity: '참배길 & 우메가에모치', details: '텐만구 앞 짧은 평지. 매화떡·구마 겐고 스타벅스·기념품', childNote: '먹거리로 유아 달래기 좋음, 앉을 카페 많음' },
                        { time: '11:45', icon: '🏛️', activity: '규슈국립박물관', details: '텐만구에서 에스컬레이터·무빙워크로 연결(노부모 동선 편함). 실내 체험전시', childNote: '어린이 체험관 아지파 무료, 유아 인기. 실내라 따뜻' },
                        { time: '13:00', icon: '🍱', activity: '다자이후 점심', details: '참배길 식당에서 향토 요리·소바. 식후 출발 준비', childNote: '식후 화장실·기저귀 정비 후 장거리 이동 대비' },
                        { time: '14:00', icon: '🚗', activity: '유후인으로 이동', details: '다자이후에서 차로 1h20~1h40(도로 약 95km, 산길 포함, 오이타 방면 남동). 휴게소 1회 정차 권장. 체크인 16:00 기준 14:00 출발', childNote: '유아 낮잠 슬롯과 겹침 — 차에서 재우기 최적, 노부모 좌석 휴식' },
                        { time: '16:00', icon: '🏨', activity: '유후인 료칸 체크인', details: '유후인 역 일대 료칸. 료칸 주차장에 차 보관', childNote: '도착 즉시 짐 풀고 따뜻한 실내 휴식' },
                        { time: '16:30', icon: '♨️', activity: '료칸 온천 & 휴식', details: '도보권. 객실/대욕장 온천으로 이동 피로 풀기', childNote: '유아는 가족탕·객실 노천 활용, 노부모 온천으로 체력 회복' },
                        { time: '18:30', icon: '🍲', activity: '료칸 가이세키 저녁', details: '료칸 내 식사. 이동 없는 저녁으로 하루 마무리', childNote: '유아식 가능 여부 사전 확인, 노부모 좌식 부담 시 입식 요청' }
                    ]
                },
                {
                    day: 4, title: '유후인 아침 산책 & 귀국',
                    summary: '유후인 도보축을 아침에 천천히, 점심 후 공항 이동·렌터카 반납·귀국',
                    timeline: [
                        { time: '08:00', icon: '🍳', activity: '료칸 조식 & 체크아웃', details: '여유로운 조식 후 체크아웃, 짐 차에 적재', childNote: '마지막 날 아침 천천히' },
                        { time: '09:00', icon: '🌫️', activity: '유후인 긴린코 (금린호)', details: '료칸에서 차로 5분 또는 도보. 12월 아침 물안개가 환상적. 짧은 평지 산책 30분', childNote: '유아차 무난, 노부모 평지 호반 산책' },
                        { time: '09:45', icon: '🛍️', activity: '유노츠보 거리', details: '긴린코에서 도보로 이어지는 메인 도보축. 카페·먹거리·잡화', childNote: '평지 도보, 유아차 가능. 중간 앉을 카페' },
                        { time: '11:00', icon: '♨️', activity: '유후인 역 족욕 & 기념품', details: '유노츠보 끝 유후인 역. 역 앞 족욕으로 마무리, 렌터카 기준점', childNote: '족욕은 유아·노부모 모두 부담 없는 온천 체험' },
                        { time: '11:45', icon: '🍱', activity: '유후인 점심', details: '역 인근 식당에서 가볍게. 식후 장거리 이동 대비 정비', childNote: '화장실·기저귀 정비 후 출발' },
                        { time: '13:00', icon: '🚗', activity: '공항으로 이동', details: '유후인→후쿠오카 공항 차로 약 1h10m(도로 약 110km). 휴게소 1회 정차. 귀국편 17시 이후라 오후 일찍 출발해 반납·국제선 수속 버퍼 2h+ 확보', childNote: '오후 이동이라 유아 낮잠 유도, 노부모 서두르지 않게 시간 여유' },
                        { time: '14:30', icon: '✈️', activity: '공항 렌터카 반납 & 귀국', details: '공항 렌터카 영업소 반납(주유 확인). 국제선 수속 버퍼 2h+ 확보 후 출국 수속·면세 쇼핑(17시 이후 출발)', childNote: '공항 수유실·유아 휴게실, 노부모 탑승 전 휴식' }
                    ]
                }
            ]
        };

        window.itineraryTemplates[4] = {
            nights: 4,
            days: [
                {
                    day: 1, title: '하카타 도착 & 시내 탐방',
                    summary: '공항 도착 후 하카타역 주변 탐색, 저녁은 야타이에서',
                    timeline: [
                        { time: '11:00', icon: '✈️', activity: '후쿠오카 공항 도착', details: '입국 수속 후 지하철로 하카타역 이동', childNote: '공항 내 유아 휴게실 이용 가능' },
                        { time: '12:00', icon: '🏨', activity: '호텔 체크인', details: '하카타역 주변 호텔에 짐 맡기기', childNote: '' },
                        { time: '13:00', icon: '🍜', activity: '하카타 라멘 점심', details: '하카타역 라멘 스트리트에서 본고장 돈코츠 라멘', childNote: '' },
                        { time: '14:30', icon: '🛍️', activity: '캐널시티 하카타', details: '쇼핑, 분수 쇼 관람, 캐릭터숍', childNote: '키즈 공간 있음' },
                        { time: '16:30', icon: '⛩️', activity: '쿠시다 신사', details: '하카타 총 수호 신사. 기온 야마카사 장식 수레 관람', childNote: '' },
                        { time: '19:00', icon: '🏮', activity: '나카스 야타이', details: '나카스강변 포장마차에서 교자, 라멘, 야키토리', childNote: '유아 동반 시 일찍 방문 추천' }
                    ]
                },
                {
                    day: 2, title: '다자이후 & 텐진',
                    summary: '오전 다자이후 관광, 오후 텐진 쇼핑',
                    timeline: [
                        { time: '08:30', icon: '🍳', activity: '아침 식사', details: '호텔 조식', childNote: '' },
                        { time: '09:30', icon: '🚃', activity: '다자이후 이동', details: '니시테츠 텐진역에서 다자이후행 (약 40분)', childNote: '' },
                        { time: '10:30', icon: '⛩️', activity: '다자이후 텐만구', details: '학문의 신을 모신 신사. 본전까지 참배', childNote: '' },
                        { time: '11:30', icon: '🍵', activity: '우메가에모치 & 참배길', details: '매화떡과 기념품 쇼핑', childNote: '' },
                        { time: '12:30', icon: '🏛️', activity: '규슈국립박물관', details: '아시아 문화 전시. 어린이 체험관 있음', childNote: '아지파(어린이 체험관) 무료' },
                        { time: '14:00', icon: '🚃', activity: '텐진 이동', details: '니시테츠 열차로 텐진 복귀', childNote: '' },
                        { time: '15:00', icon: '🛍️', activity: '텐진 쇼핑', details: '텐진 지하상가, 다이마루, 파르코 쇼핑', childNote: '' },
                        { time: '18:00', icon: '🍲', activity: '모츠나베 저녁', details: '텐진 인근 모츠나베 전문점', childNote: '' }
                    ]
                },
                {
                    day: 3, title: '시사이드 & 마리노아시티',
                    summary: '해변과 아울렛 쇼핑을 즐기는 여유로운 하루',
                    timeline: [
                        { time: '09:00', icon: '🍳', activity: '조식', details: '호텔 조식 후 출발', childNote: '' },
                        { time: '10:00', icon: '🏖️', activity: '모모치 해변 & 후쿠오카 타워', details: '해변 산책과 234m 전망대에서 파노라마 뷰', childNote: '해변 놀이 가능' },
                        { time: '12:00', icon: '🍱', activity: '시사이드 점심', details: '마리존 또는 인근 레스토랑에서 해산물 요리', childNote: '' },
                        { time: '13:30', icon: '🛍️', activity: '마리노아시티 후쿠오카', details: '규슈 최대 아울렛몰. 브랜드 할인 쇼핑', childNote: '놀이시설과 관람차 있음' },
                        { time: '16:30', icon: '🌳', activity: '오호리 공원', details: '호수 산책, 보트 체험, 일본 정원', childNote: '놀이터에서 아이 놀기' },
                        { time: '18:30', icon: '🍣', activity: '저녁 식사', details: '하카타역 주변 회전초밥 또는 이자카야', childNote: '' }
                    ]
                },
                {
                    day: 4, title: '후쿠오카성 & 하카타 전통',
                    summary: '후쿠오카의 역사와 전통을 느끼는 마지막 관광일',
                    timeline: [
                        { time: '09:00', icon: '🍳', activity: '조식', details: '호텔 조식', childNote: '' },
                        { time: '10:00', icon: '🏯', activity: '후쿠오카성터 (마이즈루 공원)', details: '성터 산책과 전망대에서 시내 전경', childNote: '' },
                        { time: '11:30', icon: '🎭', activity: '하카타 마치야 향토관', details: '하카타 전통 문화 체험. 하카타오리 직조 체험', childNote: '체험 프로그램 아이도 참여 가능' },
                        { time: '13:00', icon: '🍜', activity: '점심', details: '마지막 하카타 라멘 또는 우동', childNote: '' },
                        { time: '14:30', icon: '🛍️', activity: '하카타역 기념품', details: '아뮤 플라자, 하카타 한큐에서 기념품 쇼핑', childNote: '' },
                        { time: '16:30', icon: '✈️', activity: '공항 이동 & 귀국', details: '지하철로 공항 이동 후 출국', childNote: '' }
                    ]
                },
                {
                    day: 5, title: '귀국',
                    summary: '여유 있는 아침 후 출발',
                    timeline: [
                        { time: '08:00', icon: '🍳', activity: '아침 식사 & 체크아웃', details: '호텔 조식 후 체크아웃', childNote: '' },
                        { time: '09:30', icon: '✈️', activity: '공항 이동', details: '하카타역에서 지하철로 이동', childNote: '' },
                        { time: '10:00', icon: '🛒', activity: '면세 쇼핑', details: '공항 면세점에서 마지막 쇼핑', childNote: '' },
                        { time: '12:00', icon: '✈️', activity: '출발', details: '또 만나요 후쿠오카!', childNote: '' }
                    ]
                }
            ]
        };

        window.itineraryTemplates[5] = {
            nights: 5,
            days: [
                {
                    day: 1, title: '하카타 도착 & 시내 탐방',
                    summary: '후쿠오카 도착, 하카타역 주변과 야타이 체험',
                    timeline: [
                        { time: '11:00', icon: '✈️', activity: '후쿠오카 공항 도착', details: '입국 후 지하철로 하카타역 이동 (5분)', childNote: '공항 유아 휴게실 이용 가능' },
                        { time: '12:30', icon: '🍜', activity: '하카타 라멘 점심', details: '이치란 본점 또는 하카타역 라멘 스트리트', childNote: '' },
                        { time: '14:00', icon: '🛍️', activity: '캐널시티 하카타', details: '쇼핑과 분수 쇼 관람', childNote: '' },
                        { time: '16:00', icon: '⛩️', activity: '쿠시다 신사', details: '하카타 총 수호 신사 참배', childNote: '' },
                        { time: '19:00', icon: '🏮', activity: '나카스 야타이', details: '포장마차 거리에서 저녁', childNote: '' }
                    ]
                },
                {
                    day: 2, title: '다자이후 & 텐진',
                    summary: '다자이후 관광 후 텐진 쇼핑',
                    timeline: [
                        { time: '09:00', icon: '🚃', activity: '다자이후 이동', details: '니시테츠 텐진역에서 출발', childNote: '' },
                        { time: '10:00', icon: '⛩️', activity: '다자이후 텐만구', details: '학문의 신 참배, 매화떡 맛보기', childNote: '' },
                        { time: '12:00', icon: '🏛️', activity: '규슈국립박물관', details: '아시아 문화 전시 관람', childNote: '아지파 어린이 체험관 무료' },
                        { time: '14:00', icon: '🚃', activity: '텐진 복귀', details: '니시테츠 열차 이용', childNote: '' },
                        { time: '15:00', icon: '🛍️', activity: '텐진 쇼핑', details: '지하상가, 다이마루 백화점', childNote: '' },
                        { time: '18:30', icon: '🍲', activity: '모츠나베 저녁', details: '텐진 인근 모츠나베 전문점', childNote: '' }
                    ]
                },
                {
                    day: 3, title: '유후인 당일치기',
                    summary: '온천 마을 유후인에서 힐링하는 하루',
                    timeline: [
                        { time: '08:00', icon: '🚃', activity: '유후인 이동', details: 'JR 하카타역에서 유후인노모리 특급열차 (약 2시간)', childNote: '열차 내 전망 좌석과 매점 있음' },
                        { time: '10:30', icon: '🌿', activity: '유후인 도착 & 유노쓰보 거리', details: '역에서 긴린코까지 이어지는 아기자기한 상점가 산책', childNote: '' },
                        { time: '12:00', icon: '🍱', activity: '유후인 점심', details: '유후인 소고기 요리 또는 향토 요리', childNote: '' },
                        { time: '13:30', icon: '🏞️', activity: '긴린코 호수', details: '안개가 피어오르는 신비로운 호수 산책', childNote: '' },
                        { time: '14:30', icon: '♨️', activity: '유후인 온천', details: '당일치기 온천(히가에리 온천) 체험', childNote: '가족탕(카조쿠부로) 이용 추천' },
                        { time: '16:30', icon: '🚃', activity: '후쿠오카 복귀', details: 'JR 유후인역에서 하카타로', childNote: '' },
                        { time: '19:00', icon: '🍣', activity: '저녁 식사', details: '하카타역 주변 이자카야 또는 스시', childNote: '' }
                    ]
                },
                {
                    day: 4, title: '시사이드 & 아울렛',
                    summary: '후쿠오카 타워, 해변, 아울렛 쇼핑',
                    timeline: [
                        { time: '09:30', icon: '🏖️', activity: '모모치 해변 산책', details: '해변 산책과 사진 촬영', childNote: '모래놀이 가능' },
                        { time: '10:30', icon: '🗼', activity: '후쿠오카 타워', details: '234m 전망대에서 파노라마 뷰', childNote: '' },
                        { time: '12:00', icon: '🍱', activity: '시사이드 점심', details: '로봇 스퀘어 인근 레스토랑', childNote: '' },
                        { time: '13:30', icon: '🛍️', activity: '마리노아시티', details: '규슈 최대 아울렛몰에서 쇼핑', childNote: '관람차 탑승 가능' },
                        { time: '16:30', icon: '🌳', activity: '오호리 공원', details: '호수 산책, 일본 정원', childNote: '놀이터 있음' },
                        { time: '18:30', icon: '🍢', activity: '야키토리 저녁', details: '후쿠오카식 닭꼬치 전문점', childNote: '' }
                    ]
                },
                {
                    day: 5, title: '후쿠오카 문화 & 마지막 쇼핑',
                    summary: '역사 탐방과 마지막 기념품 쇼핑',
                    timeline: [
                        { time: '09:00', icon: '🏯', activity: '후쿠오카성터', details: '마이즈루 공원 내 성터 산책', childNote: '' },
                        { time: '10:30', icon: '🎭', activity: '하카타 전통공예관', details: '하카타 인형, 하카타오리 직조 체험', childNote: '' },
                        { time: '12:00', icon: '🍜', activity: '마지막 라멘', details: '아직 못 가본 라멘집 방문', childNote: '' },
                        { time: '13:30', icon: '🛍️', activity: '하카타역 쇼핑', details: '아뮤 플라자, 한큐 백화점 기념품', childNote: '' },
                        { time: '16:00', icon: '✈️', activity: '공항 이동 & 귀국', details: '후쿠오카 공항에서 출발', childNote: '' }
                    ]
                },
                {
                    day: 6, title: '귀국',
                    summary: '여유 있는 아침 후 출발',
                    timeline: [
                        { time: '08:00', icon: '🍳', activity: '아침 & 체크아웃', details: '호텔 조식 후 체크아웃', childNote: '' },
                        { time: '09:30', icon: '✈️', activity: '공항 이동', details: '지하철 이동', childNote: '' },
                        { time: '10:00', icon: '🛒', activity: '면세 쇼핑', details: '마지막 쇼핑', childNote: '' },
                        { time: '12:00', icon: '✈️', activity: '출발', details: '다음에 또 만나요!', childNote: '' }
                    ]
                }
            ]
        };

        window.itineraryTemplates[6] = {
            nights: 6,
            days: [
                {
                    day: 1, title: '하카타 도착 & 야타이',
                    summary: '도착 후 하카타 탐방과 야타이 체험',
                    timeline: [
                        { time: '11:00', icon: '✈️', activity: '공항 도착', details: '지하철로 하카타역 이동', childNote: '' },
                        { time: '12:30', icon: '🍜', activity: '라멘 점심', details: '하카타역 라멘 스트리트', childNote: '' },
                        { time: '14:00', icon: '🛍️', activity: '캐널시티 하카타', details: '쇼핑과 분수 쇼', childNote: '' },
                        { time: '16:00', icon: '⛩️', activity: '쿠시다 신사', details: '하카타 총 수호 신사', childNote: '' },
                        { time: '19:00', icon: '🏮', activity: '나카스 야타이', details: '포장마차 저녁', childNote: '' }
                    ]
                },
                {
                    day: 2, title: '다자이후 & 텐진',
                    summary: '다자이후 문화 탐방과 텐진 쇼핑',
                    timeline: [
                        { time: '09:00', icon: '🚃', activity: '다자이후 이동', details: '니시테츠 전철 이용', childNote: '' },
                        { time: '10:00', icon: '⛩️', activity: '다자이후 텐만구', details: '학문의 신 참배', childNote: '' },
                        { time: '11:30', icon: '🏛️', activity: '규슈국립박물관', details: '아시아 문화 전시', childNote: '아지파 어린이 체험관' },
                        { time: '13:00', icon: '🍱', activity: '참배길 점심', details: '우메가에모치와 향토 요리', childNote: '' },
                        { time: '14:30', icon: '🌿', activity: '고묘젠지', details: '이끼 정원 힐링', childNote: '' },
                        { time: '16:00', icon: '🛍️', activity: '텐진 쇼핑', details: '지하상가, 백화점', childNote: '' },
                        { time: '19:00', icon: '🍲', activity: '모츠나베 저녁', details: '텐진 인근 전문점', childNote: '' }
                    ]
                },
                {
                    day: 3, title: '유후인 당일치기',
                    summary: '온천 마을 유후인 힐링 여행',
                    timeline: [
                        { time: '08:00', icon: '🚃', activity: '유후인 이동', details: '유후인노모리 특급열차 (약 2시간)', childNote: '' },
                        { time: '10:30', icon: '🌿', activity: '유노쓰보 거리', details: '아기자기한 상점가 산책', childNote: '' },
                        { time: '12:00', icon: '🍱', activity: '유후인 점심', details: '유후인 소고기 또는 향토 요리', childNote: '' },
                        { time: '13:30', icon: '🏞️', activity: '긴린코 호수', details: '신비로운 호수 산책', childNote: '' },
                        { time: '14:30', icon: '♨️', activity: '온천 체험', details: '당일치기 온천', childNote: '가족탕 추천' },
                        { time: '17:00', icon: '🚃', activity: '후쿠오카 복귀', details: 'JR 열차 이용', childNote: '' },
                        { time: '19:30', icon: '🍣', activity: '저녁', details: '하카타역 주변 스시', childNote: '' }
                    ]
                },
                {
                    day: 4, title: '키타큐슈 당일치기',
                    summary: '모지코 레트로 지구와 키타큐슈 관광',
                    timeline: [
                        { time: '08:30', icon: '🚃', activity: '모지코 이동', details: 'JR 하카타역에서 모지코역 (약 1시간 30분)', childNote: '' },
                        { time: '10:00', icon: '🏛️', activity: '모지코 레트로 지구', details: '근대 건축물이 아름다운 항구 마을 산책', childNote: '' },
                        { time: '11:00', icon: '🍛', activity: '야키카레 점심', details: '모지코 명물 구운 카레', childNote: '' },
                        { time: '12:30', icon: '🌉', activity: '간몬 해협', details: '간몬 해저 터널 걸어서 시모노세키(혼슈) 건너기', childNote: '약 780m, 아이와 함께 걷기 좋음' },
                        { time: '14:00', icon: '🚃', activity: '고쿠라 이동', details: 'JR 모지코에서 고쿠라역', childNote: '' },
                        { time: '14:30', icon: '🏯', activity: '고쿠라성', details: '에도시대 성곽과 정원 관람', childNote: '' },
                        { time: '16:00', icon: '🛍️', activity: '고쿠라 상점가', details: '탄가시장에서 간식 쇼핑', childNote: '' },
                        { time: '17:30', icon: '🚃', activity: '후쿠오카 복귀', details: 'JR 신칸센 또는 재래선', childNote: '' },
                        { time: '19:00', icon: '🍢', activity: '야키토리 저녁', details: '후쿠오카식 닭꼬치', childNote: '' }
                    ]
                },
                {
                    day: 5, title: '시사이드 & 이토시마',
                    summary: '해변과 인스타 명소 이토시마 드라이브',
                    timeline: [
                        { time: '09:00', icon: '🗼', activity: '후쿠오카 타워', details: '234m 전망대 방문', childNote: '' },
                        { time: '10:30', icon: '🏖️', activity: '모모치 해변', details: '해변 산책과 사진', childNote: '' },
                        { time: '12:00', icon: '🚃', activity: '이토시마 이동', details: 'JR 치쿠젠마에바루역까지 30분', childNote: '' },
                        { time: '12:30', icon: '🍱', activity: '이토시마 점심', details: '해변 카페에서 해산물 런치', childNote: '' },
                        { time: '14:00', icon: '📸', activity: '이토시마 명소', details: '후타미가우라 부부바위, 야시나무 로드', childNote: '' },
                        { time: '16:30', icon: '🚃', activity: '후쿠오카 복귀', details: 'JR 열차 이용', childNote: '' },
                        { time: '18:00', icon: '🍜', activity: '저녁', details: '마지막 라멘 또는 이자카야', childNote: '' }
                    ]
                },
                {
                    day: 6, title: '오호리 공원 & 마지막 쇼핑',
                    summary: '여유로운 공원 산책과 기념품 쇼핑',
                    timeline: [
                        { time: '09:00', icon: '🌳', activity: '오호리 공원', details: '호수 산책과 일본 정원', childNote: '놀이터에서 마지막 놀기' },
                        { time: '11:00', icon: '🏯', activity: '후쿠오카성터', details: '마이즈루 공원 산책', childNote: '' },
                        { time: '12:00', icon: '🍱', activity: '점심', details: '오호리 공원 카페', childNote: '' },
                        { time: '13:30', icon: '🛍️', activity: '마리노아시티', details: '아울렛 쇼핑', childNote: '' },
                        { time: '16:00', icon: '🧳', activity: '기념품 정리', details: '하카타역에서 마지막 기념품', childNote: '' },
                        { time: '18:00', icon: '✈️', activity: '공항 이동 & 귀국', details: '지하철로 공항 이동', childNote: '' }
                    ]
                },
                {
                    day: 7, title: '귀국',
                    summary: '여유 있는 아침 후 출발',
                    timeline: [
                        { time: '08:00', icon: '🍳', activity: '아침 & 체크아웃', details: '호텔 조식', childNote: '' },
                        { time: '09:30', icon: '✈️', activity: '공항 이동', details: '지하철 이동', childNote: '' },
                        { time: '10:00', icon: '🛒', activity: '면세 쇼핑', details: '마지막 쇼핑', childNote: '' },
                        { time: '12:00', icon: '✈️', activity: '출발', details: '다음에 또!', childNote: '' }
                    ]
                }
            ]
        };

        window.itineraryTemplates[7] = {
            nights: 7,
            days: [
                {
                    day: 1, title: '하카타 도착 & 야타이',
                    summary: '후쿠오카 도착, 하카타 탐방',
                    timeline: [
                        { time: '11:00', icon: '✈️', activity: '공항 도착', details: '지하철로 하카타역 이동', childNote: '' },
                        { time: '12:30', icon: '🍜', activity: '라멘 점심', details: '이치란 본점 방문', childNote: '' },
                        { time: '14:00', icon: '🛍️', activity: '캐널시티', details: '쇼핑과 분수 쇼', childNote: '키즈 공간 있음' },
                        { time: '16:00', icon: '⛩️', activity: '쿠시다 신사', details: '하카타 총 수호 신사', childNote: '' },
                        { time: '19:00', icon: '🏮', activity: '야타이', details: '나카스 포장마차 저녁', childNote: '' }
                    ]
                },
                {
                    day: 2, title: '다자이후 종일',
                    summary: '다자이후의 신사, 박물관, 정원을 천천히 둘러보기',
                    timeline: [
                        { time: '09:00', icon: '🚃', activity: '다자이후 이동', details: '니시테츠 전철', childNote: '' },
                        { time: '10:00', icon: '⛩️', activity: '다자이후 텐만구', details: '본전 참배와 정원 산책', childNote: '' },
                        { time: '11:30', icon: '🍵', activity: '참배길 산책', details: '우메가에모치와 기념품', childNote: '' },
                        { time: '12:30', icon: '🏛️', activity: '규슈국립박물관', details: '아시아 문화 전시', childNote: '아지파 체험관' },
                        { time: '14:30', icon: '🌿', activity: '고묘젠지', details: '이끼 정원 힐링', childNote: '' },
                        { time: '15:30', icon: '☕', activity: '스타벅스 다자이후점', details: '쿠마 켄고 설계의 독특한 건축', childNote: '' },
                        { time: '17:00', icon: '🚃', activity: '후쿠오카 복귀', details: '텐진에서 저녁', childNote: '' },
                        { time: '18:30', icon: '🍲', activity: '모츠나베', details: '텐진 모츠나베 전문점', childNote: '' }
                    ]
                },
                {
                    day: 3, title: '유후인 당일치기',
                    summary: '온천 마을 유후인 힐링',
                    timeline: [
                        { time: '08:00', icon: '🚃', activity: '유후인 이동', details: '유후인노모리 특급 (2시간)', childNote: '' },
                        { time: '10:30', icon: '🌿', activity: '유노쓰보 거리', details: '상점가 산책', childNote: '' },
                        { time: '12:00', icon: '🍱', activity: '점심', details: '유후인 소고기', childNote: '' },
                        { time: '13:30', icon: '🏞️', activity: '긴린코', details: '호수 산책', childNote: '' },
                        { time: '15:00', icon: '♨️', activity: '온천', details: '당일치기 온천', childNote: '가족탕 추천' },
                        { time: '17:00', icon: '🚃', activity: '복귀', details: 'JR 이용', childNote: '' },
                        { time: '19:30', icon: '🍣', activity: '저녁', details: '스시 또는 이자카야', childNote: '' }
                    ]
                },
                {
                    day: 4, title: '벳푸 당일치기',
                    summary: '지옥온천 순례와 벳푸 온천 체험',
                    timeline: [
                        { time: '08:00', icon: '🚃', activity: '벳푸 이동', details: 'JR 소닉 특급 (약 2시간)', childNote: '' },
                        { time: '10:00', icon: '♨️', activity: '지옥온천 순례', details: '우미지고쿠, 치노이게지고쿠 등 7개 지옥온천', childNote: '아이들이 신기해하는 명소' },
                        { time: '12:30', icon: '🍱', activity: '벳푸 점심', details: '지옥 찜 요리(지고쿠무시) 체험', childNote: '' },
                        { time: '14:00', icon: '♨️', activity: '온천 체험', details: '벳푸 모래찜질 온천(스나유) 또는 노천탕', childNote: '가족탕 있음' },
                        { time: '16:00', icon: '🛍️', activity: '벳푸 산책', details: '벳푸역 주변 상점가', childNote: '' },
                        { time: '17:00', icon: '🚃', activity: '후쿠오카 복귀', details: 'JR 소닉 이용', childNote: '' },
                        { time: '19:30', icon: '🍢', activity: '저녁', details: '야키토리 전문점', childNote: '' }
                    ]
                },
                {
                    day: 5, title: '키타큐슈 & 모지코',
                    summary: '레트로 항구 마을과 간몬 해협',
                    timeline: [
                        { time: '08:30', icon: '🚃', activity: '모지코 이동', details: 'JR 하카타에서 모지코역', childNote: '' },
                        { time: '10:00', icon: '🏛️', activity: '모지코 레트로', details: '근대 건축물 산책', childNote: '' },
                        { time: '11:00', icon: '🍛', activity: '야키카레', details: '모지코 명물 구운 카레', childNote: '' },
                        { time: '12:30', icon: '🌉', activity: '간몬 해저 터널', details: '혼슈까지 걸어서 건너기', childNote: '' },
                        { time: '14:00', icon: '🏯', activity: '고쿠라성', details: '에도시대 성곽 관람', childNote: '' },
                        { time: '16:00', icon: '🛍️', activity: '탄가시장', details: '재래시장 간식 투어', childNote: '' },
                        { time: '17:30', icon: '🚃', activity: '복귀', details: 'JR 이용', childNote: '' },
                        { time: '19:00', icon: '🍜', activity: '저녁', details: '라멘 또는 우동', childNote: '' }
                    ]
                },
                {
                    day: 6, title: '이토시마 & 시사이드',
                    summary: '인스타 명소 이토시마와 해변 드라이브',
                    timeline: [
                        { time: '09:00', icon: '🚃', activity: '이토시마 이동', details: 'JR 치쿠젠마에바루역 (30분)', childNote: '' },
                        { time: '10:00', icon: '📸', activity: '이토시마 명소', details: '후타미가우라, 야시나무 로드, 런던버스 카페', childNote: '' },
                        { time: '12:00', icon: '🍱', activity: '해변 카페 점심', details: '해산물 런치', childNote: '' },
                        { time: '14:00', icon: '🚃', activity: '후쿠오카 복귀', details: 'JR 이용', childNote: '' },
                        { time: '15:00', icon: '🗼', activity: '후쿠오카 타워', details: '전망대에서 석양 감상', childNote: '' },
                        { time: '16:30', icon: '🏖️', activity: '모모치 해변', details: '해변 산책', childNote: '' },
                        { time: '18:00', icon: '🛍️', activity: '마리노아시티', details: '아울렛 쇼핑', childNote: '' },
                        { time: '20:00', icon: '🍣', activity: '저녁', details: '하카타역 주변 스시', childNote: '' }
                    ]
                },
                {
                    day: 7, title: '오호리 공원 & 마지막 쇼핑',
                    summary: '여유로운 공원 산책과 기념품 쇼핑 후 귀국',
                    timeline: [
                        { time: '09:00', icon: '🌳', activity: '오호리 공원', details: '호수 산책과 일본 정원', childNote: '' },
                        { time: '10:30', icon: '🏯', activity: '후쿠오카성터', details: '마이즈루 공원 전경', childNote: '' },
                        { time: '12:00', icon: '🍱', activity: '점심', details: '오호리 공원 카페', childNote: '' },
                        { time: '13:30', icon: '🛍️', activity: '하카타역 기념품', details: '아뮤 플라자, 한큐 백화점', childNote: '' },
                        { time: '16:00', icon: '✈️', activity: '공항 이동 & 귀국', details: '지하철로 공항 이동', childNote: '' }
                    ]
                },
                {
                    day: 8, title: '귀국',
                    summary: '여유 있는 아침 후 출발',
                    timeline: [
                        { time: '08:00', icon: '🍳', activity: '아침 & 체크아웃', details: '호텔 조식', childNote: '' },
                        { time: '09:30', icon: '✈️', activity: '공항 이동', details: '지하철 이동', childNote: '' },
                        { time: '10:00', icon: '🛒', activity: '면세 쇼핑', details: '마지막 쇼핑', childNote: '' },
                        { time: '12:00', icon: '✈️', activity: '출발', details: '후쿠오카 안녕!', childNote: '' }
                    ]
                }
            ]
        };
    }

    // ============================
    // DOM REFERENCES
    // ============================
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const nightsDisplay = document.getElementById('nights-display');
    const validationMsg = document.getElementById('validation-msg');
    const generateBtn = document.getElementById('generate-btn');
    const guideContainer = document.getElementById('guide-container');

    const adultsValueEl = document.getElementById('adults-value');
    const childrenValueEl = document.getElementById('children-value');
    const infantsValueEl = document.getElementById('infants-value');

    // ============================
    // STATE
    // ============================
    let adults = 2;
    let children = 0;
    let infants = 0;
    let budgetChart = null;

    // ============================
    // UTILITY
    // ============================
    function formatNumber(n) {
        return n.toLocaleString('ko-KR');
    }

    function calculateNights(startStr, endStr) {
        const diff = new Date(endStr) - new Date(startStr);
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }

    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

    function formatDate(d) {
        return d.getFullYear() + '. ' + (d.getMonth() + 1) + '. ' + d.getDate() + ' (' + dayNames[d.getDay()] + ')';
    }

    // Set minimum date to today
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    startDateInput.setAttribute('min', todayStr);
    endDateInput.setAttribute('min', todayStr);

    // ============================
    // DATE HANDLING
    // ============================
    function updateNightsDisplay() {
        if (!startDateInput.value || !endDateInput.value) {
            nightsDisplay.innerHTML = '';
            validationMsg.textContent = '';
            generateBtn.disabled = true;
            return;
        }
        const nights = calculateNights(startDateInput.value, endDateInput.value);
        if (nights < 2) {
            nightsDisplay.innerHTML = '';
            validationMsg.textContent = '최소 2박 이상 선택해주세요.';
            generateBtn.disabled = true;
        } else if (nights > 7) {
            nightsDisplay.innerHTML = '';
            validationMsg.textContent = '최대 7박까지 지원합니다.';
            generateBtn.disabled = true;
        } else {
            nightsDisplay.innerHTML = '<span class="nights-badge">🌙 ' + nights + '박 ' + (nights + 1) + '일</span>';
            validationMsg.textContent = '';
            generateBtn.disabled = false;
        }
    }

    startDateInput.addEventListener('change', function () {
        // Auto-set end date minimum
        if (startDateInput.value) {
            const minEnd = new Date(startDateInput.value);
            minEnd.setDate(minEnd.getDate() + 2);
            endDateInput.setAttribute('min', minEnd.toISOString().split('T')[0]);
        }
        updateNightsDisplay();
    });
    endDateInput.addEventListener('change', updateNightsDisplay);

    // ============================
    // COUNTER CONTROLS
    // ============================
    function setupCounter(type, min, max) {
        var valueEl, currentVal;
        if (type === 'adults') { valueEl = adultsValueEl; currentVal = function () { return adults; }; }
        else if (type === 'children') { valueEl = childrenValueEl; currentVal = function () { return children; }; }
        else { valueEl = infantsValueEl; currentVal = function () { return infants; }; }

        var minusBtn = document.getElementById(type + '-minus');
        var plusBtn = document.getElementById(type + '-plus');

        function updateDisplay() {
            var val = currentVal();
            valueEl.textContent = val;
            minusBtn.disabled = val <= min;
            plusBtn.disabled = val >= max;
        }

        minusBtn.addEventListener('click', function () {
            if (type === 'adults' && adults > min) { adults--; }
            else if (type === 'children' && children > min) { children--; }
            else if (type === 'infants' && infants > min) { infants--; }
            updateDisplay();
        });

        plusBtn.addEventListener('click', function () {
            if (type === 'adults' && adults < max) { adults++; }
            else if (type === 'children' && children < max) { children++; }
            else if (type === 'infants' && infants < max) { infants++; }
            updateDisplay();
        });

        updateDisplay();
    }

    setupCounter('adults', 1, 10);
    setupCounter('children', 0, 10);
    setupCounter('infants', 0, 5);

    // ============================
    // SAVE / RESTORE HELPERS
    // ============================
    var STORAGE_KEY = 'fukuoka_guide_settings';

    function saveToLocalStorage() {
        var data = {
            startDate: startDateInput.value,
            endDate: endDateInput.value,
            adults: adults,
            children: children,
            infants: infants
        };
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
    }

    function loadFromLocalStorage() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (e) { return null; }
    }

    function clearLocalStorage() {
        try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    }

    function buildShareURL() {
        var params = new URLSearchParams();
        params.set('s', startDateInput.value);
        params.set('e', endDateInput.value);
        params.set('a', adults);
        if (children > 0) params.set('c', children);
        if (infants > 0) params.set('i', infants);
        return window.location.origin + window.location.pathname + '?' + params.toString();
    }

    function getURLParams() {
        var params = new URLSearchParams(window.location.search);
        var s = params.get('s');
        var e = params.get('e');
        if (!s || !e) return null;
        return {
            startDate: s,
            endDate: e,
            adults: parseInt(params.get('a')) || 1,
            children: parseInt(params.get('c')) || 0,
            infants: parseInt(params.get('i')) || 0
        };
    }

    function applySettings(data) {
        startDateInput.value = data.startDate;
        endDateInput.value = data.endDate;
        adults = Math.max(1, Math.min(10, data.adults));
        children = Math.max(0, Math.min(10, data.children));
        infants = Math.max(0, Math.min(5, data.infants));
        document.getElementById('adults-value').textContent = adults;
        document.getElementById('children-value').textContent = children;
        document.getElementById('infants-value').textContent = infants;
        updateNightsDisplay();
    }

    // ============================
    // GENERATE BUTTON
    // ============================
    generateBtn.addEventListener('click', function () {
        var startDate = new Date(startDateInput.value);
        var endDate = new Date(endDateInput.value);
        var nights = calculateNights(startDateInput.value, endDateInput.value);

        generateGuide(startDate, endDate, nights, adults, children, infants);
        saveToLocalStorage();

        if (heroSection) heroSection.classList.add('hidden');
        guideContainer.classList.remove('hidden');
        // Smooth scroll to guide
        setTimeout(function () {
            guideContainer.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    });

    // ============================
    // SHARE & RESET BUTTONS
    // ============================
    var shareBtn = document.getElementById('share-btn');
    var resetBtn = document.getElementById('reset-btn');
    var shareToast = document.getElementById('share-toast');

    if (shareBtn) {
        shareBtn.addEventListener('click', function () {
            var url = buildShareURL();
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(url).then(function () {
                    showToast();
                });
            } else {
                // Fallback
                var ta = document.createElement('textarea');
                ta.value = url;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
                showToast();
            }
        });
    }

    var editSettingsBtn = document.getElementById('edit-settings-btn');
    if (editSettingsBtn) {
        editSettingsBtn.addEventListener('click', function () {
            if (heroSection) {
                heroSection.classList.remove('hidden');
                heroSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', function () {
            clearLocalStorage();
            history.replaceState(null, '', window.location.pathname);
            window.location.reload();
        });
    }

    function showToast() {
        if (!shareToast) return;
        shareToast.classList.remove('hidden');
        setTimeout(function () {
            shareToast.classList.add('hidden');
        }, 2000);
    }

    // ============================
    // AUTO-RESTORE ON PAGE LOAD
    // ============================
    var heroSection = document.querySelector('.hero-section');

    (function autoRestore() {
        // URL params take priority over localStorage
        var params = getURLParams();
        var saved = params || loadFromLocalStorage();
        if (!saved) return;

        applySettings(saved);

        var nights = calculateNights(saved.startDate, saved.endDate);
        if (nights >= 2 && nights <= 7) {
            generateGuide(new Date(saved.startDate), new Date(saved.endDate), nights, adults, children, infants);
            guideContainer.classList.remove('hidden');
            if (heroSection) heroSection.classList.add('hidden');
        }
    })();

    // ============================
    // MAIN GENERATE FUNCTION
    // ============================
    function generateGuide(startDate, endDate, nights, adults, children, infants) {
        var template = window.itineraryTemplates[nights];
        if (!template) {
            // Fallback: use closest available
            var keys = Object.keys(window.itineraryTemplates).map(Number).sort(function (a, b) { return a - b; });
            var closest = keys.reduce(function (prev, curr) {
                return Math.abs(curr - nights) < Math.abs(prev - nights) ? curr : prev;
            });
            template = window.itineraryTemplates[closest];
        }

        renderOverview(startDate, endDate, nights, adults, children, infants);
        renderInfoCards(startDate);
        renderItinerary(startDate, template, nights, infants);
        renderBudget(nights, adults, children, infants);
        renderAttractions();
        renderFoodGuide();
        renderTransportGuide(nights);
        renderAccommodationGuide();
        setupSectionNav();
    }

    // ============================
    // RENDER: Overview
    // ============================
    function renderOverview(startDate, endDate, nights, adults, children, infants) {
        var container = document.getElementById('overview-content');
        var partyText = '성인 ' + adults + '명';
        if (children > 0) partyText += ', 아동 ' + children + '명';
        if (infants > 0) partyText += ', 영유아 ' + infants + '명';
        var totalPeople = adults + children + infants;

        container.innerHTML =
            '<div class="overview-stats">' +
                '<div class="overview-stat">' +
                    '<span class="stat-label">출발일</span>' +
                    '<span class="stat-value">' + formatDate(startDate) + '</span>' +
                '</div>' +
                '<div class="overview-stat">' +
                    '<span class="stat-label">귀국일</span>' +
                    '<span class="stat-value">' + formatDate(endDate) + '</span>' +
                '</div>' +
                '<div class="overview-stat">' +
                    '<span class="stat-label">여행 기간</span>' +
                    '<span class="stat-value" style="color: var(--primary-color);">' + nights + '박 ' + (nights + 1) + '일</span>' +
                '</div>' +
                '<div class="overview-stat">' +
                    '<span class="stat-label">여행 인원</span>' +
                    '<span class="stat-value">' + partyText + ' (총 ' + totalPeople + '명)</span>' +
                '</div>' +
            '</div>';
    }

    // ============================
    // RENDER: Info Cards
    // ============================
    function renderInfoCards(startDate) {
        var container = document.getElementById('info-content');
        var month = startDate.getMonth() + 1;
        var weather = window.weatherData[month];
        var bd = window.budgetData;

        var packingHtml = '';
        if (weather.packing && weather.packing.length > 0) {
            packingHtml = '<div style="margin-top: 1rem;"><p style="font-weight: 600; margin-bottom: 0.5rem;">준비물 체크리스트:</p><ul class="info-card-list">';
            weather.packing.forEach(function (item) {
                packingHtml += '<li>' + item + '</li>';
            });
            packingHtml += '</ul></div>';
        }

        var foodHtml = '';
        window.foodGuide.forEach(function (f) {
            foodHtml +=
                '<div style="padding: 0.75rem; background: rgba(255,255,255,0.05); border-radius: 8px; transition: all 0.2s;"' +
                ' onmouseover="this.style.background=\'rgba(249,115,22,0.1)\';this.style.transform=\'translateX(4px)\'"' +
                ' onmouseout="this.style.background=\'rgba(255,255,255,0.05)\';this.style.transform=\'none\'">' +
                    '<p style="font-weight: 600; color: var(--text-primary);">' + f.icon + ' ' + f.name + '</p>' +
                    '<p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 2px;">' + f.description + '</p>' +
                '</div>';
        });

        container.innerHTML =
            '<div class="info-grid">' +
                // Weather Card
                '<div class="info-card">' +
                    '<h3 class="info-card-title"><span class="info-card-icon">🌦️</span> ' + weather.month + ' 날씨와 옷차림</h3>' +
                    '<div class="info-card-content">' +
                        '<p style="margin-bottom: 1rem;">' + weather.description + '</p>' +
                        '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.9rem;">' +
                            '<div style="padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 8px;">🌡️ 평균 <strong>' + weather.avgTemp + '℃</strong></div>' +
                            '<div style="padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 8px;">☀️ 최고 <strong>' + weather.high + '℃</strong></div>' +
                            '<div style="padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 8px;">❄️ 최저 <strong>' + weather.low + '℃</strong></div>' +
                            '<div style="padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 8px;">🌧️ 강수량 <strong>' + weather.rainfall + 'mm</strong></div>' +
                        '</div>' +
                        packingHtml +
                    '</div>' +
                '</div>' +
                // Transport Card
                '<div class="info-card">' +
                    '<h3 class="info-card-title"><span class="info-card-icon">🚇</span> 교통 안내</h3>' +
                    '<div class="info-card-content">' +
                        '<p style="margin-bottom: 1rem;">후쿠오카 공항에서 하카타역까지 지하철로 단 5분! 시내는 지하철과 버스로 편리하게 이동할 수 있습니다.</p>' +
                        '<ul class="info-card-list">' +
                            '<li>공항 → 하카타: 지하철 ' + formatNumber(bd.transport.airport_to_hakata) + '엔 (5분)</li>' +
                            '<li>지하철 1일권: ' + formatNumber(bd.transport.fukuoka_subway_pass) + '엔</li>' +
                            '<li>니시테츠 버스: 1회 ' + formatNumber(bd.transport.nishitetsu_bus) + '엔~</li>' +
                            '<li>다자이후 왕복: 약 ' + formatNumber(bd.transport.dazaifu_round_trip) + '엔</li>' +
                        '</ul>' +
                        '<div style="margin-top: 1rem; padding: 0.75rem; background: rgba(249,115,22,0.1); border-radius: 8px; font-size: 0.85rem;">' +
                            '💡 <strong>팁:</strong> 3일 이상 체류 시 후쿠오카 투어리스트 시티 패스(1일 1,590엔)를 추천합니다.' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                // Food Card
                '<div class="info-card">' +
                    '<h3 class="info-card-title"><span class="info-card-icon">🍜</span> 후쿠오카 미식 가이드</h3>' +
                    '<div class="info-card-content" style="display: flex; flex-direction: column; gap: 0.5rem;">' +
                        foodHtml +
                    '</div>' +
                '</div>' +
            '</div>';
    }

    // ============================
    // RENDER: Itinerary
    // ============================
    function renderItinerary(startDate, template, nights, infantsCount) {
        var navContainer = document.getElementById('day-nav');
        var contentContainer = document.getElementById('itinerary-content');

        navContainer.innerHTML = '';
        contentContainer.innerHTML = '';

        template.days.forEach(function (dayData, i) {
            var currentDate = new Date(startDate);
            currentDate.setDate(currentDate.getDate() + i);
            var dateStr = (currentDate.getMonth() + 1) + '/' + currentDate.getDate() + ' (' + dayNames[currentDate.getDay()] + ')';

            // Nav button
            var btn = document.createElement('button');
            btn.className = 'day-nav-btn' + (i === 0 ? ' active' : '');
            btn.setAttribute('data-day', i + 1);
            btn.textContent = (i + 1) + '일차';
            btn.addEventListener('click', function () {
                navContainer.querySelectorAll('.day-nav-btn').forEach(function (b) {
                    b.classList.remove('active');
                });
                btn.classList.add('active');
                var target = document.getElementById('day-' + (i + 1));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
            navContainer.appendChild(btn);

            // Day card with timeline
            var timelineHtml = '';
            dayData.timeline.forEach(function (item) {
                var childNoteHtml = '';
                if (infantsCount > 0 && item.childNote && item.childNote.trim() !== '') {
                    childNoteHtml =
                        '<div class="child-note">' +
                            '<span class="child-note-icon">👶</span> ' + item.childNote +
                        '</div>';
                }

                timelineHtml +=
                    '<div class="timeline-item">' +
                        '<div class="timeline-dot"></div>' +
                        '<span class="timeline-time">' + item.time + '</span>' +
                        '<div class="timeline-content">' +
                            '<p class="timeline-title">' + item.icon + ' ' + item.activity + '</p>' +
                            '<p class="timeline-description">' + item.details + '</p>' +
                            childNoteHtml +
                        '</div>' +
                    '</div>';
            });

            var dayEl = document.createElement('div');
            dayEl.id = 'day-' + (i + 1);
            dayEl.className = 'scroll-mt-24';
            dayEl.style.marginBottom = '2rem';
            dayEl.innerHTML =
                '<div class="day-card">' +
                    '<div class="day-title">' + dayData.day + '일차: ' + dayData.title + '</div>' +
                    '<p style="color: var(--text-muted); margin-bottom: 0.5rem; font-size: 0.9rem;">' + dateStr + '</p>' +
                    '<p style="color: var(--text-secondary); margin-bottom: 1.5rem;">' + dayData.summary + '</p>' +
                    '<div class="timeline-container">' +
                        timelineHtml +
                    '</div>' +
                '</div>';
            contentContainer.appendChild(dayEl);
        });
    }

    // ============================
    // RENDER: Budget
    // ============================
    function renderBudget(nights, adultsCount, childrenCount, infantsCount) {
        var container = document.getElementById('budget-content');
        var bd = window.budgetData;
        var totalPeople = adultsCount + childrenCount + infantsCount;
        var days = nights + 1;

        // Build the HTML skeleton
        container.innerHTML =
            '<div style="display: grid; grid-template-columns: 1fr; gap: 2rem;" class="budget-layout">' +
                // Left: Controls
                '<div class="budget-card" style="padding: 1.5rem;">' +
                    '<h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1.5rem;">예상 경비 조정</h3>' +

                    // Accommodation tier
                    '<div style="margin-bottom: 1.5rem;">' +
                        '<label style="display: block; font-size: 0.9rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.75rem;">🏨 숙박 등급</label>' +
                        '<div style="display: flex; gap: 0.5rem;" id="tier-group">' +
                            '<label style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem; border: 2px solid rgba(255,255,255,0.1); border-radius: 12px; cursor: pointer; transition: all 0.2s; font-size: 0.9rem; text-align: center;" class="tier-label" data-tier="budget">' +
                                '<input type="radio" name="accom-tier" value="budget" style="display:none;"> 비즈니스<br><span style="font-size:0.75rem; color: var(--text-muted);">' + formatNumber(bd.accommodation.budget) + '엔/박</span>' +
                            '</label>' +
                            '<label style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem; border: 2px solid var(--primary-color); border-radius: 12px; cursor: pointer; transition: all 0.2s; font-size: 0.9rem; text-align: center; background: rgba(249,115,22,0.1);" class="tier-label active" data-tier="mid">' +
                                '<input type="radio" name="accom-tier" value="mid" checked style="display:none;"> 중급<br><span style="font-size:0.75rem; color: var(--text-muted);">' + formatNumber(bd.accommodation.mid) + '엔/박</span>' +
                            '</label>' +
                            '<label style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem; border: 2px solid rgba(255,255,255,0.1); border-radius: 12px; cursor: pointer; transition: all 0.2s; font-size: 0.9rem; text-align: center;" class="tier-label" data-tier="premium">' +
                                '<input type="radio" name="accom-tier" value="premium" style="display:none;"> 프리미엄<br><span style="font-size:0.75rem; color: var(--text-muted);">' + formatNumber(bd.accommodation.premium) + '엔/박</span>' +
                            '</label>' +
                        '</div>' +
                    '</div>' +

                    // Food slider
                    '<div style="margin-bottom: 1.5rem;">' +
                        '<label style="display: block; font-size: 0.9rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.5rem;">🍜 식비 (1일 1인 성인 기준)</label>' +
                        '<input id="foodSlider" type="range" min="2000" max="8000" value="3500" step="500" style="width: 100%; accent-color: var(--primary-color);">' +
                        '<div style="text-align: right; font-size: 0.9rem; font-weight: 600; color: var(--primary-color);"><span id="foodValue">3,500</span>엔</div>' +
                    '</div>' +

                    // Shopping slider
                    '<div style="margin-bottom: 1.5rem;">' +
                        '<label style="display: block; font-size: 0.9rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.5rem;">🛍️ 쇼핑 & 기타 (총액/1인)</label>' +
                        '<input id="shoppingSlider" type="range" min="5000" max="100000" value="20000" step="5000" style="width: 100%; accent-color: var(--primary-color);">' +
                        '<div style="text-align: right; font-size: 0.9rem; font-weight: 600; color: var(--primary-color);"><span id="shoppingValue">20,000</span>엔</div>' +
                    '</div>' +

                    // Budget breakdown
                    '<div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1);">' +
                        '<div style="display: flex; flex-direction: column; gap: 0.75rem;">' +
                            '<div style="display: flex; justify-content: space-between; color: var(--text-secondary);"><span>🏨 숙박 (' + nights + '박)</span><span id="accom-cost" style="font-weight: 600; color: var(--text-primary);"></span></div>' +
                            '<div style="display: flex; justify-content: space-between; color: var(--text-secondary);"><span>🚇 교통</span><span id="transport-cost" style="font-weight: 600; color: var(--text-primary);"></span></div>' +
                            '<div style="display: flex; justify-content: space-between; color: var(--text-secondary);"><span>🎫 관광/입장료</span><span id="attraction-cost" style="font-weight: 600; color: var(--text-primary);"></span></div>' +
                            '<div style="display: flex; justify-content: space-between; color: var(--text-secondary);"><span>🍜 식비 (' + days + '일)</span><span id="food-cost" style="font-weight: 600; color: var(--text-primary);"></span></div>' +
                            '<div style="display: flex; justify-content: space-between; color: var(--text-secondary);"><span>🛍️ 쇼핑/기타</span><span id="shopping-cost" style="font-weight: 600; color: var(--text-primary);"></span></div>' +
                        '</div>' +
                        // Totals
                        '<div class="budget-total" style="margin-top: 1.5rem;">' +
                            '<div class="budget-total-label">1인 예상 경비 (항공권 제외)</div>' +
                            '<div class="budget-total-value" id="per-person-total"></div>' +
                        '</div>' +
                        '<div style="text-align: center; margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 12px;">' +
                            '<span style="color: var(--text-muted); font-size: 0.9rem;">전체 (' + totalPeople + '명) 예상 경비</span><br>' +
                            '<span id="total-budget" style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary);"></span>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                // Right: Chart
                '<div class="budget-card" style="padding: 1.5rem;">' +
                    '<h3 style="font-size: 1.1rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 1rem; text-align: center;">경비 비율</h3>' +
                    '<div class="chart-container" style="position: relative; width: 100%; max-width: 400px; margin: 0 auto; height: 320px;">' +
                        '<canvas id="budgetChart"></canvas>' +
                    '</div>' +
                '</div>' +
            '</div>';

        // Make layout 2-col on large screens
        var layoutEl = container.querySelector('.budget-layout');
        if (window.innerWidth >= 1024) {
            layoutEl.style.gridTemplateColumns = '1fr 1fr';
        }
        window.addEventListener('resize', function () {
            if (layoutEl) {
                layoutEl.style.gridTemplateColumns = window.innerWidth >= 1024 ? '1fr 1fr' : '1fr';
            }
        });

        // State for budget
        var currentTier = 'mid';
        var foodPerDay = 3500;
        var shoppingTotal = 20000;

        var foodSlider = document.getElementById('foodSlider');
        var shoppingSlider = document.getElementById('shoppingSlider');
        var foodValueEl = document.getElementById('foodValue');
        var shoppingValueEl = document.getElementById('shoppingValue');

        // Tier buttons
        var tierLabels = document.querySelectorAll('.tier-label');
        tierLabels.forEach(function (label) {
            label.addEventListener('click', function () {
                tierLabels.forEach(function (l) {
                    l.style.borderColor = 'rgba(255,255,255,0.1)';
                    l.style.background = 'transparent';
                    l.classList.remove('active');
                });
                label.style.borderColor = 'var(--primary-color)';
                label.style.background = 'rgba(249,115,22,0.1)';
                label.classList.add('active');
                currentTier = label.getAttribute('data-tier');
                label.querySelector('input').checked = true;
                updateBudgetCalc();
            });
        });

        // Sliders
        foodSlider.addEventListener('input', function () {
            foodPerDay = parseInt(this.value);
            foodValueEl.textContent = formatNumber(foodPerDay);
            updateBudgetCalc();
        });

        shoppingSlider.addEventListener('input', function () {
            shoppingTotal = parseInt(this.value);
            shoppingValueEl.textContent = formatNumber(shoppingTotal);
            updateBudgetCalc();
        });

        function updateBudgetCalc() {
            var accomPerNight = bd.accommodation[currentTier];
            // Accommodation: adults + children share rooms, infants free
            var accomPayingPeople = Math.ceil((adultsCount + childrenCount) / 2); // rooms needed (2 per room)
            var totalAccom = accomPerNight * accomPayingPeople * nights;

            // Transport per person (adults & children pay, infants free)
            var transportPerPerson = bd.transport.daily_transport * days + bd.transport.airport_to_hakata * 2;
            var totalTransport = transportPerPerson * (adultsCount + childrenCount);

            // Attractions per person per day
            var attractionPerPerson = bd.attractions.daily_average * days;
            var totalAttractions = attractionPerPerson * (adultsCount + childrenCount);

            // Food
            var adultFoodTotal = foodPerDay * days;
            var childFoodTotal = Math.round(foodPerDay * 0.6) * days; // children 60%
            var infantFoodTotal = bd.food.infant_per_day * days;
            var totalFood = (adultFoodTotal * adultsCount) + (childFoodTotal * childrenCount) + (infantFoodTotal * infantsCount);

            // Shopping
            var totalShopping = shoppingTotal * (adultsCount + childrenCount);

            // Per-person (adult) breakdown for display
            var perAdultAccom = Math.round(totalAccom / (adultsCount + childrenCount || 1));
            var perPersonTransport = transportPerPerson;
            var perPersonAttraction = attractionPerPerson;
            var perAdultFood = adultFoodTotal;
            var perPersonShopping = shoppingTotal;

            var perPersonTotal = perAdultAccom + perPersonTransport + perPersonAttraction + perAdultFood + perPersonShopping;
            var grandTotal = totalAccom + totalTransport + totalAttractions + totalFood + totalShopping;

            // Update display
            document.getElementById('accom-cost').textContent = formatNumber(totalAccom) + '엔';
            document.getElementById('transport-cost').textContent = formatNumber(totalTransport) + '엔';
            document.getElementById('attraction-cost').textContent = formatNumber(totalAttractions) + '엔';
            document.getElementById('food-cost').textContent = formatNumber(totalFood) + '엔';
            document.getElementById('shopping-cost').textContent = formatNumber(totalShopping) + '엔';
            document.getElementById('per-person-total').textContent = '~' + formatNumber(perPersonTotal) + '엔';
            document.getElementById('total-budget').textContent = '~' + formatNumber(grandTotal) + '엔';

            // Update chart
            updateChart(totalAccom, totalTransport, totalAttractions, totalFood, totalShopping);
        }

        function updateChart(accom, transport, attractions, food, shopping) {
            var ctx = document.getElementById('budgetChart');
            if (!ctx) return;

            var data = {
                labels: ['숙박', '교통', '관광/입장료', '식비', '쇼핑/기타'],
                datasets: [{
                    data: [accom, transport, attractions, food, shopping],
                    backgroundColor: [
                        'rgba(249, 115, 22, 0.8)',
                        'rgba(244, 114, 182, 0.8)',
                        'rgba(168, 85, 247, 0.8)',
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(34, 197, 94, 0.8)'
                    ],
                    borderColor: [
                        'rgba(249, 115, 22, 1)',
                        'rgba(244, 114, 182, 1)',
                        'rgba(168, 85, 247, 1)',
                        'rgba(59, 130, 246, 1)',
                        'rgba(34, 197, 94, 1)'
                    ],
                    borderWidth: 2,
                    hoverOffset: 8
                }]
            };

            var options = {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#cbd5e1',
                            padding: 16,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: {
                                family: "'Noto Sans KR', sans-serif",
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                var total = context.dataset.data.reduce(function (a, b) { return a + b; }, 0);
                                var pct = total > 0 ? Math.round((context.parsed / total) * 100) : 0;
                                return context.label + ': ' + formatNumber(context.parsed) + '엔 (' + pct + '%)';
                            }
                        },
                        backgroundColor: 'rgba(30, 41, 59, 0.95)',
                        titleColor: '#f1f5f9',
                        bodyColor: '#cbd5e1',
                        borderColor: 'rgba(249, 115, 22, 0.5)',
                        borderWidth: 1,
                        titleFont: { family: "'Noto Sans KR', sans-serif" },
                        bodyFont: { family: "'Noto Sans KR', sans-serif" }
                    }
                },
                cutout: '55%'
            };

            if (budgetChart) {
                budgetChart.data = data;
                budgetChart.update();
            } else {
                budgetChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: data,
                    options: options
                });
            }
        }

        // Initial calculation
        updateBudgetCalc();
    }

    // ============================
    // RENDER: Attractions
    // ============================
    function renderAttractions() {
        var container = document.getElementById('attractions-content');

        // Check if global locations exist (from data.js for the map)
        var locs = (typeof window.locations !== 'undefined' && Array.isArray(window.locations)) ? window.locations : null;

        if (locs && locs.length > 0) {
            // Filter popular categories
            var targetCategories = ['하카타', '텐진/나카스', '다자이후', '후쿠오카 시내'];
            var popular = locs.filter(function (l) {
                return targetCategories.indexOf(l.region || l.category) >= 0;
            }).slice(0, 12);

            // If not enough from target categories, add more
            if (popular.length < 6) {
                popular = locs.slice(0, 12);
            }

            var html = '<div class="attractions-grid">';
            popular.forEach(function (a) {
                var desc = a.description || '';
                if (desc.length > 80) desc = desc.substring(0, 80) + '...';
                var cat = a.region || a.category || '';
                var admission = a.admission || '무료';
                var imgSrc = a.imageQuery ? 'https://source.unsplash.com/featured/400x150/?' + encodeURIComponent(a.imageQuery) : '';
                html +=
                    '<div class="attraction-card">' +
                        (imgSrc ? '<img src="' + imgSrc + '" alt="' + a.name + '" class="attraction-card-image" loading="lazy" onerror="this.style.display=\'none\'">' : '') +
                        '<div class="attraction-card-header">' +
                            '<span class="attraction-card-icon">📍</span>' +
                            '<span class="attraction-card-title">' + a.name + '</span>' +
                        '</div>' +
                        '<span class="attraction-card-category">' + cat + '</span>' +
                        '<p class="attraction-card-description">' + desc + '</p>' +
                        '<div class="attraction-card-info">' +
                            '<span class="attraction-info-item"><span class="attraction-info-icon">💰</span> ' + admission + '</span>' +
                            (a.hours ? '<span class="attraction-info-item"><span class="attraction-info-icon">⏰</span> ' + a.hours + '</span>' : '') +
                        '</div>' +
                    '</div>';
            });
            html += '</div>';
            container.innerHTML = html;
        } else {
            // Fallback: render built-in popular attractions
            var fallbackAttractions = [
                { name: '캐널시티 하카타', category: '하카타', desc: '대형 복합 쇼핑몰. 분수 쇼와 면세 쇼핑을 즐길 수 있습니다.', admission: '무료', hours: '10:00~21:00' },
                { name: '쿠시다 신사', category: '하카타', desc: '하카타의 총 수호 신사. 기온 야마카사의 거대 장식 수레가 상설 전시되어 있습니다.', admission: '무료', hours: '04:00~22:00' },
                { name: '다자이후 텐만구', category: '다자이후', desc: '학문의 신 스가와라노 미치자네를 모신 신사. 매화와 녹음이 아름답습니다.', admission: '무료', hours: '06:00~19:00' },
                { name: '규슈국립박물관', category: '다자이후', desc: '아시아 문화 교류의 역사를 전시하는 대형 박물관입니다.', admission: '700엔', hours: '09:30~17:00' },
                { name: '후쿠오카 타워', category: '후쿠오카 시내', desc: '234m 높이의 해변 타워. 전망대에서 후쿠오카 시내를 한눈에 감상할 수 있습니다.', admission: '800엔', hours: '09:30~22:00' },
                { name: '오호리 공원', category: '후쿠오카 시내', desc: '후쿠오카의 센트럴파크. 호수 둘레길 산책과 일본 정원이 인기입니다.', admission: '무료 (정원 250엔)', hours: '상시 개방' },
                { name: '나카스 야타이', category: '텐진/나카스', desc: '나카스강변의 포장마차 거리. 라멘, 교자 등 현지 음식을 즐길 수 있습니다.', admission: '무료', hours: '18:00~02:00' },
                { name: '텐진 지하상가', category: '텐진/나카스', desc: '일본 최대 규모의 지하 상점가. 150여 개 상점이 입점해 있습니다.', admission: '무료', hours: '10:00~20:00' },
                { name: '마리노아시티', category: '후쿠오카 시내', desc: '규슈 최대의 아울렛 쇼핑몰. 관람차와 브랜드 할인 매장이 있습니다.', admission: '무료', hours: '10:00~21:00' },
                { name: '후쿠오카성터', category: '후쿠오카 시내', desc: '마이즈루 공원 내 위치한 성터. 벚꽃과 단풍 시즌에 특히 아름답습니다.', admission: '무료', hours: '상시 개방' },
                { name: '고묘젠지', category: '다자이후', desc: '아름다운 이끼 정원으로 유명한 선종 사찰. 조용한 힐링 명소입니다.', admission: '200엔', hours: '09:30~16:30' },
                { name: '모모치 해변', category: '후쿠오카 시내', desc: '인공 해변으로 후쿠오카 타워 바로 앞에 위치. 산책과 일몰이 아름답습니다.', admission: '무료', hours: '상시 개방' }
            ];

            var html = '<div class="attractions-grid">';
            fallbackAttractions.forEach(function (a) {
                html +=
                    '<div class="attraction-card">' +
                        '<div class="attraction-card-header">' +
                            '<span class="attraction-card-icon">📍</span>' +
                            '<span class="attraction-card-title">' + a.name + '</span>' +
                        '</div>' +
                        '<span class="attraction-card-category">' + a.category + '</span>' +
                        '<p class="attraction-card-description">' + a.desc + '</p>' +
                        '<div class="attraction-card-info">' +
                            '<span class="attraction-info-item"><span class="attraction-info-icon">💰</span> ' + a.admission + '</span>' +
                            '<span class="attraction-info-item"><span class="attraction-info-icon">⏰</span> ' + a.hours + '</span>' +
                        '</div>' +
                    '</div>';
            });
            html += '</div>';
            container.innerHTML = html;
        }
    }

    // ============================
    // RENDER: Food Guide
    // ============================
    function renderFoodGuide() {
        var container = document.getElementById('food-guide-content');
        if (!container) return;

        var rests = (typeof window.restaurants !== 'undefined' && Array.isArray(window.restaurants)) ? window.restaurants : null;
        if (!rests || rests.length === 0) {
            container.innerHTML = '<p style="color: var(--text-muted);">맛집 데이터를 불러오는 중...</p>';
            return;
        }

        // Get unique categories
        var categories = ['전체'];
        rests.forEach(function(r) {
            if (categories.indexOf(r.category) === -1) categories.push(r.category);
        });

        var html = '<div class="restaurant-filters" id="restaurant-filters">';
        categories.forEach(function(cat, idx) {
            html += '<button class="restaurant-filter-btn' + (idx === 0 ? ' active' : '') + '" data-category="' + cat + '">' + cat + '</button>';
        });
        html += '</div>';

        html += '<div class="restaurants-grid" id="restaurants-grid">';
        rests.forEach(function(r) {
            var desc = r.description || '';
            if (desc.length > 100) desc = desc.substring(0, 100) + '...';
            var imgSrc = r.imageQuery ? 'https://source.unsplash.com/featured/400x200/?' + encodeURIComponent(r.imageQuery) : '';

            html +=
                '<div class="restaurant-card" data-category="' + r.category + '" data-region="' + r.region + '">' +
                    (imgSrc ? '<img src="' + imgSrc + '" alt="' + r.name + '" class="attraction-card-image" loading="lazy" onerror="this.style.display=\'none\'">' : '') +
                    '<div class="restaurant-card-header">' +
                        '<span class="restaurant-card-category">' + r.category + '</span>' +
                        '<span class="restaurant-card-name">' + r.name + '</span>' +
                    '</div>' +
                    '<p class="restaurant-card-description">' + desc + '</p>' +
                    '<div class="restaurant-card-must-try">⭐ ' + r.mustTry + '</div>' +
                    '<div class="restaurant-card-meta">' +
                        '<span>⏰ ' + r.hours + '</span>' +
                        '<span>💴 ' + r.priceRange + '</span>' +
                        '<span>📍 ' + r.region + '</span>' +
                    '</div>' +
                '</div>';
        });
        html += '</div>';

        container.innerHTML = html;

        // Filter click handler
        document.querySelectorAll('.restaurant-filter-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.restaurant-filter-btn').forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');
                var cat = this.getAttribute('data-category');
                document.querySelectorAll('.restaurant-card').forEach(function(card) {
                    if (cat === '전체' || card.getAttribute('data-category') === cat) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ============================
    // RENDER: Transport Guide
    // ============================
    function renderTransportGuide(nights) {
        var container = document.getElementById('transport-guide-content');
        if (!container) return;

        var tg = (typeof window.transportGuide !== 'undefined') ? window.transportGuide : null;
        if (!tg) {
            container.innerHTML = '<p style="color: var(--text-muted);">교통 데이터를 불러오는 중...</p>';
            return;
        }

        var html = '';

        // Airport Access
        if (tg.airportAccess) {
            html += '<div class="transport-section-group">';
            html += '<h3 class="transport-section-title">✈️ 공항 → 시내 교통</h3>';
            html += '<table class="transport-table"><thead><tr><th>교통수단</th><th>목적지</th><th>소요시간</th><th>비용</th><th>배차간격</th></tr></thead><tbody>';
            tg.airportAccess.forEach(function(a) {
                html += '<tr>' +
                    '<td><strong>' + a.method + '</strong></td>' +
                    '<td>' + a.destination + '</td>' +
                    '<td class="highlight-cell">' + a.duration + '</td>' +
                    '<td class="highlight-cell">' + a.cost + '</td>' +
                    '<td>' + (a.frequency || '-') + '</td>' +
                '</tr>';
            });
            html += '</tbody></table>';
            if (tg.airportAccess[0] && tg.airportAccess[0].tip) {
                html += '<div class="transport-tip">💡 ' + tg.airportAccess[0].tip + '</div>';
            }
            html += '</div>';
        }

        // Transport Passes
        if (tg.passes) {
            html += '<div class="transport-section-group">';
            html += '<h3 class="transport-section-title">🎫 교통 패스 추천</h3>';
            if (nights) {
                html += '<div class="transport-tip" style="margin-bottom: 1rem;">💡 ' + nights + '박 여행에는 ';
                if (nights <= 2) html += '<strong>후쿠오카 투어리스트 시티패스</strong>가 가장 효율적입니다.';
                else if (nights <= 4) html += '<strong>SUNQ 패스 (북부규슈 3일권)</strong> 또는 <strong>JR 북부규슈 레일패스</strong>를 추천합니다.';
                else html += '<strong>JR 북부규슈 5일권</strong>과 <strong>SUNQ 패스</strong> 조합을 추천합니다.';
                html += '</div>';
            }
            html += '<div class="pass-cards">';
            tg.passes.forEach(function(p) {
                html +=
                    '<div class="pass-card">' +
                        '<div class="pass-card-name">🎫 ' + p.name + '</div>' +
                        '<div class="pass-card-price">' + p.price + '</div>' +
                        '<p class="pass-card-coverage">📍 ' + p.coverage + '</p>' +
                        '<p class="pass-card-recommended">✅ ' + p.recommended + '</p>' +
                        '<p class="pass-card-where">🏪 ' + p.where + '</p>' +
                    '</div>';
            });
            html += '</div></div>';
        }

        // Regional Routes
        if (tg.regionalRoutes) {
            html += '<div class="transport-section-group">';
            html += '<h3 class="transport-section-title">🚃 지역 간 이동 방법</h3>';
            tg.regionalRoutes.forEach(function(route) {
                html +=
                    '<div class="route-card">' +
                        '<div class="route-card-header">📍 ' + route.from + ' → ' + route.to + '</div>' +
                        '<div class="route-options">';
                route.options.forEach(function(opt) {
                    html +=
                        '<div class="route-option">' +
                            '<div class="route-option-method">🚌 ' + opt.method + '<br><span style="font-size:0.8rem;color:var(--text-muted);">' + opt.description + '</span></div>' +
                            '<div class="route-option-duration">⏱ ' + opt.duration + '</div>' +
                            '<div class="route-option-cost">' + opt.cost + '</div>' +
                        '</div>';
                });
                html += '</div></div>';
            });
            html += '</div>';
        }

        container.innerHTML = html;
    }

    // ============================
    // RENDER: Accommodation Guide
    // ============================
    function renderAccommodationGuide() {
        var container = document.getElementById('accommodation-guide-content');
        if (!container) return;

        var accs = (typeof window.accommodations !== 'undefined' && Array.isArray(window.accommodations)) ? window.accommodations : null;
        if (!accs || accs.length === 0) {
            container.innerHTML = '<p style="color: var(--text-muted);">숙소 데이터를 불러오는 중...</p>';
            return;
        }

        // Build filter buttons: type + price
        var types = ['전체', '호텔', '료칸', '게스트하우스'];
        var priceCategories = [
            { label: '전체', value: 'all' },
            { label: '절약형 (~¥8,000)', value: 'budget' },
            { label: '중급 (¥8,000~20,000)', value: 'mid' },
            { label: '프리미엄 (¥20,000~)', value: 'premium' }
        ];

        var html = '<div class="accommodation-filters" id="accommodation-type-filters">';
        types.forEach(function(t, idx) {
            html += '<button class="accommodation-filter-btn' + (idx === 0 ? ' active' : '') + '" data-type="' + t + '">' + t + '</button>';
        });
        html += '</div>';

        html += '<div class="accommodation-filters" id="accommodation-price-filters">';
        priceCategories.forEach(function(p, idx) {
            html += '<button class="accommodation-filter-btn' + (idx === 0 ? ' active' : '') + '" data-price="' + p.value + '">' + p.label + '</button>';
        });
        html += '</div>';

        html += '<div class="accommodations-grid" id="accommodations-grid">';
        accs.forEach(function(a) {
            var desc = a.description || '';
            if (desc.length > 100) desc = desc.substring(0, 100) + '...';
            var typeClass = a.type === '료칸' ? 'ryokan' : a.type === '게스트하우스' ? 'guesthouse' : 'hotel';
            var imgSrc = a.imageQuery ? 'https://source.unsplash.com/featured/400x200/?' + encodeURIComponent(a.imageQuery) : '';

            html +=
                '<div class="accommodation-card" data-type="' + a.type + '" data-price="' + (a.priceCategory || 'mid') + '" data-region="' + a.region + '">' +
                    (imgSrc ? '<img src="' + imgSrc + '" alt="' + a.name + '" class="attraction-card-image" loading="lazy" onerror="this.style.display=\'none\'">' : '') +
                    '<span class="accommodation-card-type ' + typeClass + '">' + a.type + '</span>' +
                    '<div class="accommodation-card-name">' + a.name + '</div>' +
                    '<div class="accommodation-card-price">' + a.priceRange + '</div>' +
                    '<p class="accommodation-card-description">' + desc + '</p>' +
                    (a.features ? '<div class="accommodation-card-features">' + a.features.map(function(f) { return '<span class="accommodation-feature-tag">' + f + '</span>'; }).join('') + '</div>' : '') +
                    (a.nearAttractions ? '<div class="accommodation-card-nearby"><strong>근처:</strong> ' + a.nearAttractions.join(', ') + '</div>' : '') +
                '</div>';
        });
        html += '</div>';

        container.innerHTML = html;

        // Filter handlers
        function filterAccommodations() {
            var activeType = document.querySelector('#accommodation-type-filters .accommodation-filter-btn.active');
            var activePrice = document.querySelector('#accommodation-price-filters .accommodation-filter-btn.active');
            var type = activeType ? activeType.getAttribute('data-type') : '전체';
            var price = activePrice ? activePrice.getAttribute('data-price') : 'all';

            document.querySelectorAll('.accommodation-card').forEach(function(card) {
                var typeMatch = (type === '전체') || card.getAttribute('data-type') === type;
                var priceMatch = (price === 'all') || card.getAttribute('data-price') === price;
                card.style.display = (typeMatch && priceMatch) ? '' : 'none';
            });
        }

        document.querySelectorAll('#accommodation-type-filters .accommodation-filter-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                document.querySelectorAll('#accommodation-type-filters .accommodation-filter-btn').forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');
                filterAccommodations();
            });
        });

        document.querySelectorAll('#accommodation-price-filters .accommodation-filter-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                document.querySelectorAll('#accommodation-price-filters .accommodation-filter-btn').forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');
                filterAccommodations();
            });
        });
    }

    // ============================
    // SECTION NAVIGATION - Active State
    // ============================
    function setupSectionNav() {
        var navLinks = document.querySelectorAll('.section-nav-link');
        var sections = ['info', 'itinerary', 'budget', 'attractions', 'food-guide', 'transport-guide', 'accommodation-guide'];

        // Intersection Observer
        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var id = entry.target.getAttribute('id');
                        navLinks.forEach(function (link) {
                            if (link.getAttribute('href') === '#' + id) {
                                link.classList.add('active');
                            } else {
                                link.classList.remove('active');
                            }
                        });
                    }
                });
            }, {
                rootMargin: '-20% 0px -60% 0px',
                threshold: 0
            });

            sections.forEach(function (id) {
                var el = document.getElementById(id);
                if (el) observer.observe(el);
            });
        }

        // Click handlers with smooth scroll
        navLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                var targetId = this.getAttribute('href').substring(1);
                var target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                navLinks.forEach(function (l) { l.classList.remove('active'); });
                this.classList.add('active');
            });
        });
    }

})();
