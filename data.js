// ============================================================
// Fukuoka Travel Guide - data.js
// Global data: locations (50+), regionCenters, restaurants,
// transportGuide, accommodations
// Loaded before map.js and planner.js
// ============================================================

// Region center coordinates for map filtering
const regionCenters = {
    '하카타': { center: [33.5902, 130.4207], zoom: 15 },
    '텐진/나카스': { center: [33.5903, 130.3990], zoom: 15 },
    '다자이후': { center: [33.5194, 130.5350], zoom: 14 },
    '후쿠오카 시내': { center: [33.5800, 130.3600], zoom: 13 },
    '이토시마': { center: [33.5560, 130.1950], zoom: 12 },
    '키타큐슈': { center: [33.8834, 130.8752], zoom: 13 },
    '유후인': { center: [33.2667, 131.3697], zoom: 14 },
    '벳푸': { center: [33.2846, 131.4914], zoom: 14 },
    '아사쿠라': { center: [33.4100, 130.6262], zoom: 13 }
};

// All tourist locations
const locations = [
    // ────────────────────────────────────────
    // 하카타 (Hakata) — 8 spots
    // ────────────────────────────────────────
    {
        name: '캐널시티 하카타',
        lat: 33.59111,
        lng: 130.41056,
        region: '하카타',
        description: '대형 복합 쇼핑몰. 운하를 따라 조성된 분수 쇼가 매시간 열리며, 면세점과 라멘 스타디움이 인기입니다.',
        hours: '10:00~21:00 (레스토랑 ~23:00)',
        admission: '무료',
        website: 'https://canalcity.co.jp/',
        duration: 120,
        childFriendly: true,
        imageQuery: 'Canal City Hakata Fukuoka',
        nearbyHotels: [
            { name: '그랜드 하얏트 후쿠오카', distance: '직결', price: '¥25,000~/박' },
            { name: '도미인 하카타 기온', distance: '도보 5분', price: '¥8,000~/박' }
        ]
    },
    {
        name: '쿠시다 신사',
        lat: 33.59311,
        lng: 130.41069,
        region: '하카타',
        description: '하카타의 총 수호 신사. 757년 창건으로 기온 야마카사 축제(7월)의 거대 장식 수레가 상설 전시되어 있습니다.',
        hours: '04:00~22:00',
        admission: '무료 (박물관 300엔)',
        website: 'https://www.hakatayamakasa.com/',
        duration: 40,
        childFriendly: true,
        imageQuery: 'Kushida Shrine Fukuoka',
        nearbyHotels: [
            { name: '하카타 그린 호텔', distance: '도보 3분', price: '¥6,500~/박' }
        ]
    },
    {
        name: '하카타역',
        lat: 33.59,
        lng: 130.42061,
        region: '하카타',
        description: '후쿠오카의 관문. JR 하카타시티 내 아뮤플라자, 한큐백화점, 옥상 정원 등 쇼핑과 맛집이 밀집해 있습니다. 12월에는 역 앞 광장 일루미네이션이 저녁에 점등됩니다.',
        hours: '10:00~21:00 (상점)',
        admission: '무료',
        website: 'https://www.jrhakatacity.com/',
        duration: 90,
        childFriendly: true,
        imageQuery: 'Hakata Station Fukuoka',
        nearbyHotels: [
            { name: '호텔 닛코 후쿠오카', distance: '직결', price: '¥15,000~/박' },
            { name: 'JR규슈호텔 블로섬 하카타', distance: '직결', price: '¥10,000~/박' }
        ]
    },
    {
        name: '하카타 마치야 후루사토관',
        lat: 33.59365,
        lng: 130.41151,
        region: '하카타',
        description: '하카타의 전통 문화와 역사를 체험할 수 있는 민속 자료관. 하카타오리 직조 체험도 가능합니다.',
        hours: '10:00~18:00 (입관 17:30까지, 넷째 월요일 휴관·공휴일이면 다음 평일)',
        admission: '200엔',
        duration: 45,
        childFriendly: true,
        imageQuery: 'Hakata Machiya Folk Museum',
        nearbyHotels: []
    },
    {
        name: '도초지 (동장사)',
        lat: 33.59511,
        lng: 130.41411,
        region: '하카타',
        description: '806년 창건된 일본 최초의 진언종 사찰. 일본 최대 크기의 목조 좌불상(높이 10.8m)이 인상적입니다.',
        hours: '09:00~17:00',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        imageQuery: 'Tochoji Temple Fukuoka Buddha',
        nearbyHotels: []
    },
    {
        name: '하카타 리버레인',
        lat: 33.59544,
        lng: 130.40561,
        region: '하카타',
        description: "나카스강변의 복합 문화시설. 하카타좌 극장, 후쿠오카 아시아미술관이 입점해 있고, 5·6층 '후쿠오카 호빵맨 어린이 박물관'(10:00~17:00, 유료)은 비 오는 날 유아 동반 코스로 좋습니다.",
        hours: '10:00~20:00',
        admission: '무료 (미술관 200엔)',
        website: 'https://riverain.co.jp/',
        duration: 60,
        childFriendly: true,
        imageQuery: 'Hakata Riverain Fukuoka',
        nearbyHotels: []
    },
    {
        name: '스미요시 신사',
        lat: 33.58575,
        lng: 130.41375,
        region: '하카타',
        description: '일본 전국 스미요시 신사의 시초. 항해 안전의 신을 모시며 독특한 스미요시즈쿠리 양식의 본전이 특징입니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 25,
        childFriendly: true,
        imageQuery: 'Sumiyoshi Shrine Hakata Fukuoka',
        nearbyHotels: []
    },
    {
        name: '하카타 포트타워',
        lat: 33.60417,
        lng: 130.39778,
        region: '하카타',
        description: '하카타 부두에 위치한 빨간 타워. 전망대에서 하카타만과 시내 전경을 무료로 감상할 수 있습니다.',
        hours: '10:00~20:00 (입장 19:40까지, 수요일 휴관·공휴일이면 다음 평일, 12/29~1/3 휴관)',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        imageQuery: 'Hakata Port Tower Fukuoka',
        nearbyHotels: []
    },

    // ────────────────────────────────────────
    // 텐진/나카스 (Tenjin/Nakasu) — 7 spots
    // ────────────────────────────────────────
    {
        name: '나카스 야타이 (포장마차)',
        lat: 33.5914,
        lng: 130.4071,
        region: '텐진/나카스',
        description: '나카스강변에 늘어선 후쿠오카 명물 포장마차 거리. 라멘, 교자, 오뎅 등을 현지 분위기 속에서 즐길 수 있습니다.',
        hours: '18:00~02:00 (날씨에 따라 변동)',
        admission: '무료 (음식 별도)',
        duration: 60,
        childFriendly: false,
        imageQuery: 'Yatai food stall Fukuoka Nakasu',
        nearbyHotels: [
            { name: '니시테츠 인 나카스', distance: '도보 2분', price: '¥7,000~/박' }
        ]
    },
    {
        name: '텐진 지하상가',
        lat: 33.58964,
        lng: 130.3997,
        region: '텐진/나카스',
        description: '일본 최대 규모의 지하 상점가. 150여 개의 패션, 잡화, 맛집이 입점하며 우천 시 쇼핑에 최적입니다.',
        hours: '10:00~20:00',
        admission: '무료',
        website: 'https://www.tenchika.com/',
        duration: 90,
        childFriendly: true,
        imageQuery: 'Tenjin underground shopping Fukuoka',
        nearbyHotels: [
            { name: '솔라리아 니시테츠호텔', distance: '직결', price: '¥12,000~/박' }
        ]
    },
    {
        name: '아크로스 후쿠오카',
        lat: 33.59147,
        lng: 130.40233,
        region: '텐진/나카스',
        description: '건물 외벽 전체가 녹지로 덮인 독특한 건축물. "스텝 가든"은 옥상까지 76종 37,000그루의 식물이 자랍니다. 12월에는 야간 일루미네이션이 점등되며, 스텝 가든 야외 등반은 겨울엔 생략을 권장합니다.',
        hours: '10:00~18:00 (정원 상시)',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        imageQuery: 'ACROS Fukuoka green building',
        nearbyHotels: []
    },
    {
        name: '텐진 중앙공원',
        lat: 33.59114,
        lng: 130.40331,
        region: '텐진/나카스',
        description: '텐진 중심부의 도심 공원. 벚꽃 시즌에 아름답고 주변에 카페와 레스토랑이 많아 산책하기 좋습니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 20,
        childFriendly: true,
        imageQuery: 'Tenjin Central Park Fukuoka cherry blossom',
        nearbyHotels: []
    },
    {
        name: '다이묘 에어리어',
        lat: 33.5887,
        lng: 130.3915,
        region: '텐진/나카스',
        description: '후쿠오카의 트렌디한 카페, 빈티지 숍, 갤러리가 모인 거리. 젊은 층에게 인기인 힙한 동네입니다.',
        hours: '11:00~22:00 (점포별 상이)',
        admission: '무료',
        duration: 60,
        childFriendly: true,
        imageQuery: 'Daimyo street Fukuoka cafe',
        nearbyHotels: []
    },
    {
        name: '이와타야 백화점',
        lat: 33.58886,
        lng: 130.39725,
        region: '텐진/나카스',
        description: '텐진의 랜드마크 백화점. 지하 식품관의 디저트와 디파지가 유명하며 면세 쇼핑이 가능합니다.',
        hours: '10:00~20:00',
        admission: '무료',
        website: 'https://www.iwataya-mitsukoshi.mistore.jp/iwataya.html',
        duration: 60,
        childFriendly: true,
        imageQuery: 'Iwataya department store Tenjin Fukuoka',
        nearbyHotels: []
    },
    {
        name: '후쿠오카 크리스마스 마켓',
        lat: 33.59007,
        lng: 130.4014,
        region: '텐진/나카스',
        description: "11~12월 한정 크리스마스 마켓·일루미네이션(공식 행사명 '크리스마스 어드벤트'). 후쿠오카 시청 앞 후레아이광장과 하카타역 광장을 중심으로 도심이 빛으로 이어집니다. 글뤼바인·먹거리 부스가 있어 가족 야간 코스로 좋습니다(유아·노부모는 방한 후 짧게).",
        hours: '매년 11월 초~12/25 (회장별로 다르고 일부는 1월 초까지). 2026 일정은 공식 발표 확인',
        admission: '무료 (음식·음료 별도)',
        website: 'https://www.crossroadfukuoka.jp/kr/event/13738',
        duration: 60,
        childFriendly: true,
        imageQuery: 'Fukuoka Christmas Market illumination Tenjin Hakata',
        nearbyHotels: []
    },

    // ────────────────────────────────────────
    // 다자이후 (Dazaifu) — 6 spots
    // ────────────────────────────────────────
    {
        name: '다자이후 텐만구',
        lat: 33.52153,
        lng: 130.53486,
        region: '다자이후',
        description: '학문의 신 스가와라노 미치자네를 모신 신사. 매화꽃 6,000그루가 유명하고, 합격 기원으로 많은 학생이 방문합니다.',
        hours: '06:00~19:00 (계절별 변동)',
        admission: '무료 (보물전 500엔)',
        website: 'https://www.dazaifutenmangu.or.jp/',
        duration: 60,
        childFriendly: true,
        imageQuery: 'Dazaifu Tenmangu Shrine',
        nearbyHotels: [
            { name: '다자이후 호텔', distance: '도보 10분', price: '¥8,000~/박' }
        ]
    },
    {
        name: '규슈국립박물관',
        lat: 33.51835,
        lng: 130.53846,
        region: '다자이후',
        description: '아시아 문화 교류의 역사를 전시하는 대형 박물관. 체험형 전시관 "아지파"는 아이들에게 인기입니다.',
        hours: '09:30~17:00 (월요일 휴관)',
        admission: '700엔',
        website: 'https://www.kyuhaku.jp/',
        duration: 90,
        childFriendly: true,
        imageQuery: 'Kyushu National Museum Dazaifu',
        nearbyHotels: []
    },
    {
        name: '고묘젠지 (광명선사)',
        lat: 33.5182,
        lng: 130.5339,
        region: '다자이후',
        description: '아름다운 이끼 정원(일광정원)으로 유명한 선종 사찰. 석정과 이끼가 어우러진 고즈넉한 명소입니다. 최근 내부 관람을 받지 않는다는 안내가 있어, 일정에는 넣지 않고 다자이후 산책 중 외관만 보는 곳으로 둡니다.',
        hours: '09:30~16:30',
        admission: '200엔 (2026 기준 내부 관람 중단 안내가 있음 — 방문 전 전화 확인 092-922-4053)',
        duration: 30,
        childFriendly: true,
        imageQuery: 'Komyozenji Temple moss garden Dazaifu',
        nearbyHotels: []
    },
    {
        name: '다자이후 참배길',
        lat: 33.51954,
        lng: 130.5335,
        region: '다자이후',
        description: '텐만구로 이어지는 참배길. 우메가에모치(매화떡), 기념품점, 스타벅스 구마 겐고 디자인 매장이 있습니다.',
        hours: '09:00~18:00 (점포별 상이)',
        admission: '무료',
        duration: 40,
        childFriendly: true,
        imageQuery: 'Dazaifu Tenmangu approach shopping street',
        nearbyHotels: []
    },
    {
        name: '간젠지 (관세음사)',
        lat: 33.515,
        lng: 130.5215,
        region: '다자이후',
        description: '일본 최고(最古)의 범종이 있는 사찰. 국보 범종은 698년 제작된 것으로 역사적 가치가 높습니다.',
        hours: '09:00~17:00',
        admission: '무료',
        duration: 25,
        childFriendly: true,
        imageQuery: 'Kanzenji Temple Dazaifu bell',
        nearbyHotels: []
    },
    {
        name: '다자이후 정청 유적',
        lat: 33.5147,
        lng: 130.5151,
        region: '다자이후',
        description: '7세기 고대 규슈 통치기관의 유적. 넓은 잔디밭에 초석이 남아있으며 역사공원으로 조성되어 있습니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        imageQuery: 'Dazaifu government ruins historical park',
        nearbyHotels: []
    },

    // ────────────────────────────────────────
    // 후쿠오카 시내 (Fukuoka City) — 11 spots
    // ────────────────────────────────────────
    {
        name: '후쿠오카 타워',
        lat: 33.59308,
        lng: 130.35139,
        region: '후쿠오카 시내',
        description: '234m 높이의 해변 타워. 123m 전망대에서 후쿠오카 시내와 하카타만을 360도 파노라마로 감상할 수 있습니다. 12월에는 외벽에 대형 크리스마스 트리 일루미네이션이 점등돼 야경 명소가 됩니다.',
        hours: '09:30~22:00',
        admission: '성인 1,000엔 / 초·중학생 500엔 / 4세 이상 200엔',
        website: 'https://www.fukuokatower.co.jp/',
        duration: 45,
        childFriendly: true,
        imageQuery: 'Fukuoka Tower',
        nearbyHotels: [
            { name: '힐튼 후쿠오카 시호크', distance: '도보 5분', price: '¥12,000~/박 (시기별 변동 큼)' }
        ]
    },
    {
        name: '오호리 공원',
        lat: 33.58586,
        lng: 130.37625,
        region: '후쿠오카 시내',
        description: '후쿠오카의 센트럴파크. 호수 둘레길(약 2km)은 평탄해 유아차·노부모 산책에 좋고, 보트와 어린이 놀이터가 있습니다. 공원 안 일본정원은 2027-03-31 이후 개수 공사로 임시 휴원 예정입니다.',
        hours: '상시 개방 (정원 09:00~17:00)',
        admission: '무료 (일본정원 별도. 2026-08~12 야간 행사 기간엔 야간 별도 요금)',
        duration: 60,
        childFriendly: true,
        imageQuery: 'Ohori Park Fukuoka lake',
        nearbyHotels: []
    },
    {
        name: '후쿠오카성터 (마이즈루 공원)',
        lat: 33.58438,
        lng: 130.3831,
        region: '후쿠오카 시내',
        description: '구로다 가문이 축성한 후쿠오카성의 유적. 천수대에서 시내 전망이 좋고 벚꽃 명소로도 유명합니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 40,
        childFriendly: true,
        imageQuery: 'Fukuoka Castle ruins Maizuru Park',
        nearbyHotels: []
    },
    {
        name: 'MARK IS 후쿠오카 모모치',
        lat: 33.59234,
        lng: 130.36389,
        region: '후쿠오카 시내',
        description: 'PayPay돔 옆 대형 실내 쇼핑몰. 후쿠오카 타워·모모치 해변과 걸어서 이어지는 시사이드 권역이라 비 오는 날이나 해변 산책 뒤에 들르기 좋습니다. 키즈 놀이시설과 푸드코트가 있어 아이 동반에 편하고, 주차장도 넓습니다(돔 행사일은 혼잡).',
        hours: '10:00~21:00 (레스토랑 11:00~22:00)',
        admission: '무료',
        website: 'https://www.mec-markis.jp/fukuoka-momochi/',
        duration: 90,
        childFriendly: true,
        imageQuery: 'MARK IS Fukuoka Momochi shopping mall',
        nearbyHotels: [
            { name: '힐튼 후쿠오카 시호크', distance: '도보 7분', price: '¥12,000~/박 (시기별 변동 큼)' }
        ]
    },
    {
        name: '모모치 해변',
        lat: 33.59543,
        lng: 130.35516,
        region: '후쿠오카 시내',
        description: '후쿠오카 타워 앞 인공 해변. 여름철 해수욕과 비치 바, 일몰 풍경이 아름다운 도심 해변입니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 40,
        childFriendly: true,
        imageQuery: 'Momochi Beach Fukuoka sunset',
        nearbyHotels: []
    },
    {
        name: '후쿠오카시 미술관',
        lat: 33.58394,
        lng: 130.37973,
        region: '후쿠오카 시내',
        description: '오호리 공원 내 위치한 미술관. 달리, 미로 등 근현대 미술 컬렉션과 기획전이 열립니다.',
        hours: '09:30~17:30 (월요일 휴관)',
        admission: '200엔 (기획전 별도)',
        website: 'https://www.fukuoka-art-museum.jp/',
        duration: 60,
        childFriendly: true,
        imageQuery: 'Fukuoka Art Museum',
        nearbyHotels: []
    },
    {
        name: '후쿠오카시 동식물원',
        lat: 33.57239,
        lng: 130.39058,
        region: '후쿠오카 시내',
        description: '약 100종의 동물과 2,600종의 식물을 보유한 시립 동식물원. 가족 단위 방문에 최적입니다.',
        hours: '09:00~17:00 (월요일 휴관)',
        admission: '성인 600엔, 고교생 300엔, 중학생 이하 무료',
        website: 'https://zoo.city.fukuoka.lg.jp/',
        duration: 120,
        childFriendly: true,
        imageQuery: 'Fukuoka Zoo botanical garden',
        nearbyHotels: []
    },
    {
        name: '노코노시마 아일랜드파크',
        lat: 33.63252,
        lng: 130.30108,
        region: '후쿠오카 시내',
        description: '하카타만에 떠 있는 능고노시마 섬의 자연 공원. 계절 꽃밭과 체험 프로그램이 인기입니다. 페리 10분.',
        hours: '09:00~17:30 (계절별 변동)',
        admission: '성인 1,500엔, 초·중학생 800엔, 3세 이상 500엔 (페리 별도, 페리 요금 확인 필요)',
        website: 'https://nokonoshima.com/',
        duration: 180,
        childFriendly: true,
        imageQuery: 'Nokonoshima Island Park Fukuoka flowers',
        nearbyHotels: []
    },
    {
        name: '마린월드 우미노나카미치',
        lat: 33.66083,
        lng: 130.36333,
        region: '후쿠오카 시내',
        description: '규슈 바다를 테마로 한 대형 수족관. 돌고래·바다사자 쇼와 대형 수조가 인기로, 실내라 겨울·우천에 강하고 2살 유아도 즐겁습니다(3세 미만 무료). 단 2027-01-12~04-09 에는 돌고래·바다사자 쇼가 일시 중단됩니다.',
        hours: '09:30~17:30 (입관 16:30까지. 12~2월 10:00~17:00, 2027-01-18~21 휴관)',
        admission: '성인 2,500엔 / 65세 이상 2,200엔 / 초·중학생 1,200엔 / 3세 이상 미취학 700엔 (3세 미만 무료)',
        website: 'https://marine-world.jp/',
        duration: 120,
        childFriendly: true,
        imageQuery: 'Marine World Uminonakamichi Fukuoka aquarium dolphin',
        nearbyHotels: []
    },
    {
        name: '우미노나카미치 해변공원',
        lat: 33.66448,
        lng: 130.36564,
        region: '후쿠오카 시내',
        description: '마린월드 바로 옆 국영 해변공원. 넓은 잔디광장·대형 놀이기구·동물 공원·계절 꽃밭(봄 네모필라, 가을 코스모스 등)이 있어 아이와 하루 놀기 좋습니다. 공원이 매우 넓어 노부모는 대여 자전거나 원내 순환 버스를 쓰는 편이 편합니다. JR 우미노나카미치역 바로 앞.',
        hours: '09:30~17:30 (11월 ~17:00, 최종 입장 1시간 전. 12~2월 시간·휴원일은 공식 확인)',
        admission: '15세 이상 450엔, 65세 이상 210엔, 중학생 이하 무료',
        website: 'https://uminaka-park.jp/',
        duration: 180,
        childFriendly: true,
        imageQuery: 'Uminonakamichi Seaside Park Fukuoka flower',
        nearbyHotels: []
    },
    {
        name: '테리하 스파 리조트',
        lat: 33.66579,
        lng: 130.41642,
        region: '후쿠오카 시내',
        description: '아일랜드시티에 자리한 대형 천연 온천·찜질 복합시설. 여러 노천탕과 키즈&패밀리룸을 갖춰 가족이 종일 머물기 좋습니다. 마린월드와 같은 권역이라 묶어 다니기 편하고, 추운 겨울 한낮 재충전 코스로 제격입니다.',
        hours: '08:00~익일 01:00 (대욕장 ~익일 02:00)',
        admission: '입욕 성인 ¥850~, 3세~초등 ¥590~ (스파+암반욕 별도, 요금 변동 확인)',
        website: 'https://terihaspa.jp/',
        duration: 150,
        childFriendly: true,
        imageQuery: 'Teriha Spa Resort Fukuoka Island City onsen',
        nearbyHotels: []
    },

    // ────────────────────────────────────────
    // 이토시마 (Itoshima) — 6 spots
    // ────────────────────────────────────────
    {
        name: '사쿠라이 후타미가우라 (부부바위)',
        lat: 33.64047,
        lng: 130.19664,
        region: '이토시마',
        description: '바다 위에 솟은 두 개의 바위를 시메나와(금줄)로 연결한 이토시마의 상징. 일몰 풍경이 절경입니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        imageQuery: 'Sakurai Futamigaura couple rocks Itoshima sunset',
        nearbyHotels: []
    },
    {
        name: '이토시마 해변 (후타미가하마)',
        lat: 33.633,
        lng: 130.1846,
        region: '이토시마',
        description: '백사장이 아름다운 이토시마의 대표 해변. 여름 해수욕과 서핑, 비치 카페가 인기입니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 60,
        childFriendly: true,
        imageQuery: 'Itoshima beach Fukuoka',
        nearbyHotels: []
    },
    {
        name: '런던버스 카페',
        lat: 33.60938,
        lng: 130.16181,
        region: '이토시마',
        description: '빨간 2층 런던버스를 개조한 해변 카페. SNS 포토스팟으로 유명하며 해변 뷰가 환상적입니다.',
        hours: '11:00~일몰',
        admission: '무료 (음료 별도)',
        duration: 40,
        childFriendly: true,
        imageQuery: 'London Bus Cafe Itoshima beach',
        nearbyHotels: []
    },
    {
        name: '시라이토 폭포',
        lat: 33.48028,
        lng: 130.17556,
        region: '이토시마',
        description: '낙차 약 24m의 아름다운 폭포. 여름에는 시원한 물줄기와 소면 나가시(흘림 국수)를 즐길 수 있습니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 45,
        childFriendly: true,
        imageQuery: 'Shiraito Falls Itoshima waterfall',
        nearbyHotels: []
    },
    {
        name: '팜파크 이토코쿠',
        lat: 33.537449084146424,
        lng: 130.2527527153431,
        region: '이토시마',
        description: '이토시마시 농업공원(정식명 ファームパーク伊都国). 농산물·가공품 직판장과 계절 농업 체험 강좌가 있는 체험형 공원으로, 잔디 광장이 넓어 아이 동반에 좋습니다. 체험 종류·일정은 시기별로 달라 공식 사이트 확인.',
        hours: '09:00~17:00 (월요일 휴원, 공휴일이면 다음 날)',
        admission: '입원 무료 (체험·판매 별도)',
        website: 'https://itokoku-official.net/',
        duration: 60,
        childFriendly: true,
        imageQuery: 'Itoshima farm market Fukuoka',
        nearbyHotels: []
    },
    {
        name: '라이잔 센뇨지',
        lat: 33.49461,
        lng: 130.22858,
        region: '이토시마',
        description: '정식명 라이잔 센뇨지 다이히오인(雷山千如寺大悲王院). 수령 약 400년 큰 단풍나무가 11월 중순~하순 절정이라 단풍철 혼잡이 심합니다. 산중턱 사찰이라 경내에 계단이 있어 노부모는 천천히, 유아차는 어렵습니다.',
        hours: '09:00~16:30 (경내 관람 접수)',
        admission: '고교생 이상 500엔, 중학생 이하 무료 (11월 한 달은 입산료 성인 200엔 별도, 바깥 정원·큰 단풍나무만 보면 자율 헌금)',
        duration: 30,
        childFriendly: true,
        imageQuery: 'Raizan Sennyoji Temple autumn leaves Itoshima',
        nearbyHotels: []
    },

    // ────────────────────────────────────────
    // 키타큐슈 (Kitakyushu) — 7 spots
    // ────────────────────────────────────────
    {
        name: '모지코 레트로 지구',
        lat: 33.9451,
        lng: 130.9615,
        region: '키타큐슈',
        description: '메이지/다이쇼 시대의 서양식 건축물이 보존된 항구 지역. 야키카레(구운 카레)가 명물입니다.',
        hours: '상시 개방 (시설별 09:00~17:00)',
        admission: '무료 (시설별 입장료)',
        website: 'https://www.mojiko.info/',
        duration: 120,
        childFriendly: true,
        imageQuery: 'Mojiko Retro district Kitakyushu',
        nearbyHotels: [
            { name: '프리미어 호텔 모지코', distance: '도보 1분', price: '¥12,000~/박' }
        ]
    },
    {
        name: '간몬 해협 인도 터널',
        lat: 33.9636,
        lng: 130.9599,
        region: '키타큐슈',
        description: '규슈와 혼슈를 잇는 해저 터널(780m). 도보로 걸어서 현 경계를 넘는 독특한 체험이 가능합니다.',
        hours: '06:00~22:00',
        admission: '무료 (자전거/원동기 20엔)',
        duration: 30,
        childFriendly: true,
        imageQuery: 'Kanmon Pedestrian Tunnel undersea Kitakyushu',
        nearbyHotels: []
    },
    {
        name: '고쿠라성',
        lat: 33.8844,
        lng: 130.8743,
        region: '키타큐슈',
        description: '1602년 축성된 고쿠라번의 거성. 복원된 천수각 내부에서 역사 자료를 관람하고 전망을 즐길 수 있습니다.',
        hours: '09:00~18:00 (11~3월 ~17:00)',
        admission: '350엔',
        duration: 45,
        childFriendly: true,
        imageQuery: 'Kokura Castle Kitakyushu',
        nearbyHotels: [
            { name: '리가 로얄 호텔 고쿠라', distance: '도보 5분', price: '¥10,000~/박' }
        ]
    },
    {
        name: '탄가 시장',
        lat: 33.8814,
        lng: 130.8794,
        region: '키타큐슈',
        description: '120년 역사의 전통 재래시장. 약 120개 점포에서 신선한 해산물과 로컬 먹거리를 즐길 수 있습니다.',
        hours: '10:00~18:00 (일요일 일부 휴업)',
        admission: '무료 (음식 별도)',
        duration: 60,
        childFriendly: true,
        imageQuery: 'Tanga Market Kitakyushu seafood',
        nearbyHotels: []
    },
    {
        name: '가와치 후지 가든',
        lat: 33.8322,
        lng: 130.7922,
        region: '키타큐슈',
        description: '등나무 터널로 세계적으로 유명한 정원. 4~5월 등나무 시즌에는 몽환적인 보라색 터널이 펼쳐집니다. 등나무·단풍 시즌 외에는 문을 닫아 그 밖의 달엔 일정에 넣지 않습니다.',
        hours: '등나무(4월 중순~5월 초)·단풍(11월 중순~12월 초) 시즌에만 개원, 09:00~17:00 전후',
        admission: '등나무 시즌: 사전 예약권 600엔 + 개화 상황에 따라 현장 추가 0/500/1,000엔(합계 600~1,600엔, 중학생 이상 성인 요금, 어른 1명당 초등학생 이하 2명 무료) / 단풍 시즌 500엔',
        website: 'https://kawachi-fujien.com/',
        duration: 60,
        childFriendly: true,
        imageQuery: 'Kawachi Wisteria Garden Kitakyushu tunnel',
        nearbyHotels: []
    },
    {
        name: '스페이스 월드 부지 (더 아울렛)',
        lat: 33.8735,
        lng: 130.8116,
        region: '키타큐슈',
        description: '구 스페이스 월드 부지에 오픈한 대형 아울렛몰. 170여 개 브랜드와 엔터테인먼트 시설이 있습니다.',
        hours: '10:00~20:00',
        admission: '무료',
        duration: 120,
        childFriendly: true,
        imageQuery: 'The Outlets Kitakyushu shopping',
        nearbyHotels: []
    },
    {
        name: '토바타 기온 야마카사 지역',
        lat: 33.894,
        lng: 130.826,
        region: '키타큐슈',
        description: '7월 토바타 기온 오오야마카사 축제의 중심지. 거대 장식 수레와 빛의 피라미드가 장관입니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        imageQuery: 'Tobata Gion Yamakasa festival Kitakyushu',
        nearbyHotels: []
    },

    // ────────────────────────────────────────
    // 유후인 (Yufuin) — 7 spots
    // ────────────────────────────────────────
    {
        name: '유후인 긴린코 (금린호)',
        lat: 33.26672,
        lng: 131.36904,
        region: '유후인',
        description: '유후다케 산기슭의 작은 호수. 아침 안개가 피어오르는 환상적인 풍경으로 유명합니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        imageQuery: 'Kinrinko Lake Yufuin morning mist',
        nearbyHotels: [
            { name: '무소엔', distance: '도보 1분', price: '¥30,000~/박' }
        ]
    },
    {
        name: '유노츠보 거리',
        lat: 33.2672,
        lng: 131.3648,
        region: '유후인',
        description: '유후인역에서 긴린코까지 이어지는 메인 거리. 카페, 잡화점, 갤러리가 줄지어 산책하기 좋습니다.',
        hours: '09:00~18:00 (점포별 상이)',
        admission: '무료',
        duration: 60,
        childFriendly: true,
        imageQuery: 'Yunotsubo Street Yufuin shops',
        nearbyHotels: []
    },
    {
        name: '유후인 플로랄 빌리지',
        lat: 33.26751,
        lng: 131.3656,
        region: '유후인',
        description: '영국 코츠월드 마을을 재현한 테마 빌리지. 동화 속 같은 돌집과 전문 숍이 매력적입니다.',
        hours: '09:30~17:30',
        admission: '무료',
        duration: 40,
        childFriendly: true,
        imageQuery: 'Yufuin Floral Village Cotswold',
        nearbyHotels: []
    },
    {
        name: '유후다케 등산로',
        lat: 33.28229,
        lng: 131.39024,
        region: '유후인',
        description: '표고 1,583m의 유후다케 등산. 정상에서 유후인 분지와 벳푸만의 절경을 감상할 수 있습니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 240,
        childFriendly: false,
        imageQuery: 'Mount Yufu hiking trail Yufuin',
        nearbyHotels: []
    },
    {
        name: '유후인 온천 (시타유)',
        lat: 33.26603,
        lng: 131.36861,
        region: '유후인',
        description: '유후인의 족욕탕과 당일치기 온천. 유노츠보 거리 곳곳에서 부담 없이 온천을 체험할 수 있습니다.',
        hours: '10:00~22:00 (시설별 상이)',
        admission: '200~800엔 (시설별)',
        duration: 45,
        childFriendly: true,
        imageQuery: 'Yufuin onsen hot spring',
        nearbyHotels: []
    },
    {
        name: '유후인 역',
        lat: 33.26261,
        lng: 131.35513,
        region: '유후인',
        description: '구로카와 기쇼 설계의 세련된 역사. 역 앞 족욕탕과 아트홀 갤러리가 특색 있습니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 15,
        childFriendly: true,
        imageQuery: 'Yufuin Station building',
        nearbyHotels: [
            { name: '유후인 호나미노사토', distance: '도보 3분', price: '¥15,000~/박' }
        ]
    },
    {
        name: '유후인 스테인드글라스 미술관',
        lat: 33.26073502567567,
        lng: 131.36521342698535,
        region: '유후인',
        description: '유럽 교회의 스테인드글라스를 전시하는 미술관. 예배당 분위기의 내부가 이색적입니다.',
        hours: '09:00~18:00',
        admission: '1,000엔',
        duration: 40,
        childFriendly: true,
        imageQuery: 'Yufuin Stained Glass Museum',
        nearbyHotels: []
    },

    // ────────────────────────────────────────
    // 벳푸 (Beppu) — 8 spots
    // ────────────────────────────────────────
    {
        name: '벳푸 지옥 순례 (우미지고쿠)',
        lat: 33.3162,
        lng: 131.4688,
        region: '벳푸',
        description: '코발트 블루색의 "바다 지옥". 98도의 열탕에서 피어오르는 증기가 장관인 벳푸 대표 온천 명소입니다.',
        hours: '08:00~17:00',
        admission: '1곳 약 500엔 (7곳 공통권 2,400엔, 요금 개정이 잦아 현장 확인)',
        website: 'https://www.beppu-jigoku.com/',
        duration: 30,
        childFriendly: true,
        imageQuery: 'Umi Jigoku sea hell Beppu blue',
        nearbyHotels: [
            { name: '벳푸 호텔 우미카제', distance: '도보 10분', price: '¥12,000~/박' }
        ]
    },
    {
        name: '벳푸 지옥 순례 (치노이케)',
        lat: 33.32719,
        lng: 131.47812,
        region: '벳푸',
        description: '일본 최고(最古)의 천연 지옥. 붉은색 열탕이 피의 연못처럼 보여 "혈지옥"이라 불립니다.',
        hours: '08:00~17:00',
        admission: '약 500엔 (7곳 공통권 포함)',
        duration: 25,
        childFriendly: true,
        imageQuery: 'Chinoike Jigoku blood hell Beppu red',
        nearbyHotels: []
    },
    {
        name: '벳푸 지옥 순례 (카마도)',
        lat: 33.31645,
        lng: 131.47245,
        region: '벳푸',
        description: '가마솥 모양의 조형물이 인상적인 "가마솥 지옥". 족욕탕과 증기 찜질 체험을 즐길 수 있습니다.',
        hours: '08:00~17:00',
        admission: '약 500엔 (7곳 공통권 포함)',
        duration: 30,
        childFriendly: true,
        imageQuery: 'Kamado Jigoku cooking hell Beppu steam',
        nearbyHotels: []
    },
    {
        name: '다케가와라 온천',
        lat: 33.27745,
        lng: 131.50598,
        region: '벳푸',
        description: '1879년 개설된 역사적인 공중 온천. 모래찜질 체험(스나유)이 유명하며 독특한 전통 건물입니다.',
        hours: '06:30~22:30 (모래찜질 08:00~)',
        admission: '300엔 (모래찜질 1,500엔)',
        duration: 60,
        childFriendly: false,
        imageQuery: 'Takegawara Onsen Beppu sand bath',
        nearbyHotels: []
    },
    {
        name: '벳푸 타워',
        lat: 33.28167,
        lng: 131.50578,
        region: '벳푸',
        description: '높이 100m의 벳푸 랜드마크. 전망대에서 벳푸만과 온천 증기가 피어오르는 시가지를 조망할 수 있습니다.',
        hours: '09:00~21:30 (최종 입장 21:00)',
        admission: '전망대 성인 800엔 / 중·고생 600엔 / 4세~초등 400엔',
        duration: 25,
        childFriendly: true,
        imageQuery: 'Beppu Tower observation',
        nearbyHotels: []
    },
    {
        name: '묘반 온천 유노하나 고야',
        lat: 33.31785,
        lng: 131.45184,
        region: '벳푸',
        description: '300년 전통의 유노하나(입욕제) 제조 오두막. 노천 온천 "묘반 유노사토"도 함께 즐길 수 있습니다.',
        hours: '10:00~19:00',
        admission: '600엔',
        duration: 45,
        childFriendly: true,
        imageQuery: 'Myoban Onsen yunohana hut Beppu',
        nearbyHotels: []
    },
    {
        name: '시다카 전망대',
        lat: 33.26345,
        lng: 131.45554,
        region: '벳푸',
        description: '표고 350m에 위치한 전망 명소. 벳푸 시가지와 온천 증기의 야경이 아름답습니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        imageQuery: 'Shidaka Observatory Beppu night view',
        nearbyHotels: []
    },
    {
        name: '우미타마고 수족관',
        lat: 33.258783,
        lng: 131.535636,
        region: '벳푸',
        description: "오이타 마린팰리스 수족관 '우미타마고'. 해양생물을 관람할 수 있는 수족관. 세이우치(바다코끼리) 쇼와 체험 프로그램이 가족에게 인기입니다.",
        hours: '09:00~18:00',
        admission: '성인 3,000엔, 초·중학생 1,500엔, 4세 이상 1,000엔 (공식 사이트 미확인)',
        website: 'https://www.umitamago.jp/',
        duration: 90,
        childFriendly: true,
        imageQuery: 'Umitamago aquarium Beppu',
        nearbyHotels: []
    },

    // ────────────────────────────────────────
    // 아사쿠라 (Asakura) — 2 spots
    // ────────────────────────────────────────
    {
        name: '기린 맥주 공장 후쿠오카',
        lat: 33.40995271177547,
        lng: 130.62618882094972,
        region: '아사쿠라',
        description: '기린 맥주의 제조 과정을 견학하고 시음할 수 있는 공장 투어. 사전 예약 필수입니다.',
        hours: '09:30~16:00 (휴관일은 공식 영업일 캘린더 확인)',
        admission: '20세 이상 1,000엔 (2026-10-01~, 예약 필수, 시음 포함). 20세 미만 동반 요금은 공식 확인',
        website: 'https://www.kirin.co.jp/',
        duration: 75,
        childFriendly: false,
        imageQuery: 'Kirin Beer Factory Fukuoka tour',
        nearbyHotels: []
    },
    {
        name: '아키즈키 성하마을',
        lat: 33.46951,
        lng: 130.69357,
        region: '아사쿠라',
        description: "'지쿠젠의 작은 교토' 로 불리는 옛 성하마을. 성터로 이어지는 스기노바바 길은 3월 하순~4월 초 약 500m 벚꽃 터널, 11월 하순~12월 초 성터 구로몬 주변 단풍이 명소입니다. 길이 완만해 노부모 산책에 좋지만 차도 다니는 길이라 유아차는 주의. 대중교통이 불편해 렌터카 일정에 맞습니다.",
        hours: '상시 개방 (상점은 대체로 낮 시간, 점포별 상이)',
        admission: '무료 (아키즈키 주차장 보통차 400엔)',
        website: 'https://www.crossroadfukuoka.jp/spot/12807',
        duration: 90,
        childFriendly: true,
        imageQuery: 'Akizuki castle town Asakura cherry blossom',
        nearbyHotels: []
    }
];

// ============================================================
// Restaurants (25+ across all regions)
// ============================================================
const restaurants = [
    // ────────────────────────────────────────
    // 라멘 (Ramen) — 6 shops
    // ────────────────────────────────────────
    {
        name: '이치란 본사총본점',
        lat: 33.59323,
        lng: 130.40465,
        region: '텐진/나카스',
        category: '라멘',
        description: '1인 칸막이석에서 맛·면 굵기를 골라 주문하는 돈코츠 라멘 체인의 본점. 나카스카와바타역 바로 앞이라 늦은 시간에도 들르기 쉽습니다. 칸막이석이라 아이와 나란히 앉기는 불편할 수 있어요.',
        hours: '24시간 영업',
        priceRange: '¥980~',
        mustTry: '천연 돈코츠 라멘',
        imageQuery: 'Ichiran Ramen main store Nakasu Fukuoka'
    },
    {
        name: '하카타 잇코샤 총본점',
        lat: 33.58821,
        lng: 130.41711,
        region: '하카타',
        category: '라멘',
        description: '거품이 일 만큼 진한 돈코츠 스프로 알려진 하카타 라멘집. 하카타역 하카타 출구에서 걸어서 5분 안쪽입니다.',
        hours: '11:00~24:00 (일요일 ~21:00)',
        priceRange: '¥900~ (확인 필요)',
        mustTry: '돈코츠 라멘 (카타멘)',
        imageQuery: 'Hakata Ikkousha ramen main store'
    },
    {
        name: '신신라멘 텐진본점',
        lat: 33.59277,
        lng: 130.39685,
        region: '텐진/나카스',
        category: '라멘',
        description: '야타이에서 시작한 하카타 라멘집. 깔끔한 돈코츠 스프와 가는 면이 특징이고, 새벽까지 열어 야식으로 찾는 사람이 많습니다.',
        hours: '11:00~익일 03:00 (수요일·셋째 화요일 휴무)',
        priceRange: '¥820~',
        mustTry: '하카타 라멘',
        imageQuery: 'ShinShin Ramen Tenjin Fukuoka'
    },
    {
        name: '하카타 잇소 하카타역 동쪽 본점',
        lat: 33.58639,
        lng: 130.42519,
        region: '하카타',
        category: '라멘',
        description: '거품이 덮인 크리미한 돈코츠 스프로 줄 서는 라멘집. 하카타역 지쿠시 출구에서 걸어서 6분. 식사 시간대에는 대기가 길어 아이와 함께라면 개점 직후가 낫습니다.',
        hours: '11:00~24:00 (부정기 휴무)',
        priceRange: '¥900~',
        mustTry: '라멘 (아지타마 추가)',
        imageQuery: 'Hakata Issou ramen tonkotsu'
    },
    {
        name: '하카타 다루마 총본점',
        lat: 33.58528,
        lng: 130.40605,
        region: '텐진/나카스',
        category: '라멘',
        description: '1963년 창업한 진한 돈코츠 라멘집. 와타나베도리역에서 걸어서 5분이고 교자·볶음밥도 함께 냅니다.',
        hours: '11:30~익일 01:00',
        priceRange: '¥800~',
        mustTry: '라멘 + 교자',
        imageQuery: 'Hakata Daruma Ramen Fukuoka'
    },
    {
        name: '원조 라멘 나가하마야',
        lat: 33.59183,
        lng: 130.38533,
        region: '후쿠오카 시내',
        category: '라멘',
        description: '나가하마 라멘 계열의 24시간 라멘집. 한 그릇이 싸고 빨리 나오며, "카에다마(면 추가)" 로 양을 늘리는 나가하마식 주문이 재미있습니다. 아카사카역에서 걸어서 8분.',
        hours: '24시간 영업',
        priceRange: '¥600~',
        mustTry: '라멘 바리카타 + 카에다마',
        imageQuery: 'Nagahama ramen Fukuoka tonkotsu'
    },

    // ────────────────────────────────────────
    // 모츠나베 (Motsunabe) — 4 shops
    // ────────────────────────────────────────
    {
        name: '하카타 모츠나베 야마나카 아카사카점',
        lat: 33.58743,
        lng: 130.39090,
        region: '후쿠오카 시내',
        category: '모츠나베',
        description: '된장 모츠나베로 이름난 야마나카의 아카사카 지점. 아카사카역에서 걸어서 3분이고, 저녁에는 예약하는 편이 안전합니다.',
        hours: '16:00~23:00 (금·토 ~23:30, 토·일 점심 12:00~14:00, 연말연시 휴무)',
        priceRange: '¥1,500~',
        mustTry: '미소 모츠나베',
        imageQuery: 'Yamanaka motsunabe Fukuoka'
    },
    {
        name: '원조 모츠나베 라쿠텐치 텐진본점',
        lat: 33.59106,
        lng: 130.40034,
        region: '텐진/나카스',
        category: '모츠나베',
        description: '부추를 산처럼 쌓아 올리는 간장 모츠나베 체인의 텐진 본점. 텐진역에서 가깝고 휴무일이 없어 일정 짜기 편합니다.',
        hours: '17:00~24:00 (무휴)',
        priceRange: '¥1,628~ (1인분)',
        mustTry: '간장 모츠나베',
        imageQuery: 'Rakutenchi motsunabe Tenjin'
    },
    {
        name: '하카타 모츠나베 마에다야 총본점',
        lat: 33.58763,
        lng: 130.42557,
        region: '하카타',
        category: '모츠나베',
        description: '하카타역 지쿠시 출구 쪽의 모츠나베 전문점. 시오·미소·간장 세 가지 스프에 오징어 활어회 코스도 있습니다.',
        hours: '17:00~24:00 (토·일·공휴일 점심 11:00~14:30, 부정기 휴무)',
        priceRange: '1인 ¥4,000 안팎 (저녁)',
        mustTry: '시오 모츠나베',
        imageQuery: 'Maedaya motsunabe Hakata'
    },
    {
        name: '하카타 모츠나베 오오야마 텐진 파르코점',
        lat: 33.59042,
        lng: 130.39890,
        region: '텐진/나카스',
        category: '모츠나베',
        description: '된장 모츠나베가 간판인 오오야마의 파르코 식당가 지점. 텐진역·니시테츠후쿠오카역에서 바로라 비 오는 날이나 아이 동반 저녁에 편합니다.',
        hours: '11:00~24:30 (확인 필요)',
        priceRange: '¥1,800~ (1인분) (확인 필요)',
        mustTry: '미소 모츠나베',
        imageQuery: 'Oyama motsunabe Fukuoka miso'
    },

    // ────────────────────────────────────────
    // 교자 (Gyoza) — 3 shops
    // ────────────────────────────────────────
    {
        name: '아사히켄 에키마에 본점',
        lat: 33.59063,
        lng: 130.41661,
        region: '하카타',
        category: '교자',
        description: '한입 크기 야키교자와 데바사키(닭날개)로 알려진 노포. 오후 3시에 열고 좌석이 좁아 저녁 시간대엔 금방 찹니다.',
        hours: '15:00~24:00 (일요일 휴무)',
        priceRange: '¥360~ (10개)',
        mustTry: '야키교자 + 데바사키',
        imageQuery: 'Asahiken gyoza Hakata'
    },
    {
        name: '호운테이 나카스 본점',
        lat: 33.59170,
        lng: 130.40811,
        region: '텐진/나카스',
        category: '교자',
        description: '1949년 나카스에서 시작해 하카타 "히토쿠치 교자(한입 교자)" 의 원조로 꼽히는 가게. 저녁 영업만 합니다.',
        hours: '17:30~24:00 (일요일·공휴일 ~21:00)',
        priceRange: '1인 ¥1,500 안팎',
        mustTry: '히토쿠치 교자',
        imageQuery: 'Houuntei gyoza Nakasu'
    },
    {
        name: '교자노 테무진 다이묘점',
        lat: 33.58688,
        lng: 130.39485,
        region: '텐진/나카스',
        category: '교자',
        description: '다이묘 골목의 한입 교자 전문점. 바삭한 야키교자에 유즈코쇼를 곁들여 먹습니다.',
        hours: '17:00~익일 02:00 (화요일 휴무)',
        priceRange: '¥580~ (10개)',
        mustTry: '야키교자',
        imageQuery: 'Temujin gyoza Daimyo Fukuoka'
    },

    // ────────────────────────────────────────
    // 야키토리 (Yakitori) — 3 shops
    // ────────────────────────────────────────
    {
        name: '덴카노 야키토리 노부히데 본점',
        lat: 33.59621,
        lng: 130.40642,
        region: '하카타',
        category: '야키토리',
        description: '나카스카와바타역 출구 바로 앞의 야키토리집. 양배추를 곁들이는 하카타식 꼬치에 돼지 삼겹 말이(바라) 메뉴가 많습니다.',
        hours: '16:30~익일 01:00',
        priceRange: '¥240~ (1개)',
        mustTry: '바라 (돼지 삼겹 꼬치)',
        imageQuery: 'Yakitori Nobuhide Hakata'
    },
    {
        name: '철판구이 텐진 호르몬 총본점',
        lat: 33.59042,
        lng: 130.39890,
        region: '텐진/나카스',
        category: '야키토리',
        description: '눈앞 철판에서 곱창을 구워 주는 정식집. 솔라리아 스테이지 지하 2층이라 역에서 바로 들어갈 수 있고 점심 영업도 합니다.',
        hours: '영업시간 확인 필요',
        priceRange: '¥1,580~ (정식)',
        mustTry: '호르몬 정식',
        imageQuery: 'Tenjin Horumon teppanyaki Fukuoka'
    },
    {
        name: '다케노야 아뮤플라자 하카타점',
        lat: 33.58991,
        lng: 130.42040,
        region: '하카타',
        category: '야키토리',
        description: '후쿠오카 야키토리 체인 다케노야의 하카타역 빌딩 10층 지점. 점심부터 열고 식당가라 아이와 함께 들르기 쉽습니다.',
        hours: '11:00~22:00',
        priceRange: '¥2,000~ (확인 필요)',
        mustTry: '도리카와 (닭껍질 꼬치)',
        imageQuery: 'Takenoya yakitori Hakata station'
    },

    // ────────────────────────────────────────
    // 해산물 (Seafood) — 3 shops
    // ────────────────────────────────────────
    {
        name: '야나기바시 연합시장',
        lat: 33.58290,
        lng: 130.40830,
        region: '텐진/나카스',
        category: '해산물',
        description: '"하카타의 부엌" 이라 불리는 100m 남짓 아케이드 시장. 시장 안 식당에서 해선동을 먹을 수 있지만 점심엔 줄이 깁니다. 일요일·공휴일은 쉬어요.',
        hours: '08:00~저녁 (점포별 상이, 일요일·공휴일 휴무)',
        priceRange: '¥1,500~',
        mustTry: '해선덮밥 (카이센동)',
        imageQuery: 'Yanagibashi Market Fukuoka seafood'
    },
    {
        name: '가와타로 하카타역점',
        lat: 33.58907,
        lng: 130.41899,
        region: '하카타',
        category: '해산물',
        description: '오징어 활어회(이카 이키즈쿠리)로 유명한 가와타로의 하카타역 지점. 수조에서 바로 건진 오징어를 투명한 채로 내고, 남은 다리는 튀김으로 다시 내줍니다.',
        hours: '12:00~13:30, 17:00~21:30 (품절 시 종료)',
        priceRange: '¥4,180~ (점심 정식)',
        mustTry: '이카 이키즈쿠리 (오징어 활어회)',
        imageQuery: 'Kawataro squid ikizukuri Hakata'
    },
    {
        name: '하카타 고마사바야',
        lat: 33.59098,
        lng: 130.39298,
        region: '텐진/나카스',
        category: '해산물',
        description: '나가하마 시장에서 들여온 고등어로 고마사바(참깨 간장 고등어회)를 내는 식권제 정식집. 회전이 빨라 줄이 있어도 금방 들어갑니다.',
        hours: '영업시간 확인 필요',
        priceRange: '¥1,000~',
        mustTry: '고마사바 동 (참깨 고등어 덮밥)',
        imageQuery: 'Gomasaba sesame mackerel Fukuoka'
    },

    // ────────────────────────────────────────
    // 카페 (Cafe) — 3 shops
    // ────────────────────────────────────────
    {
        name: 'NO COFFEE',
        lat: 33.57658,
        lng: 130.40022,
        region: '후쿠오카 시내',
        category: '카페',
        description: '"NO COFFEE NO LIFE" 로고 굿즈로 유명한 히라오의 커피 가게. 텐진에서 니시테츠 히라오역으로 한 정거장, 역에서 걸어서 갑니다.',
        hours: '10:00~19:00 (토·일·공휴일 ~18:00, 월요일 휴무)',
        priceRange: '¥500~',
        mustTry: '드립 커피 + 오리지널 굿즈',
        imageQuery: 'NO COFFEE cafe Hirao Fukuoka'
    },
    {
        name: '스타벅스 오호리 공원점',
        lat: 33.58684,
        lng: 130.37820,
        region: '후쿠오카 시내',
        category: '카페',
        description: '오호리 공원 호숫가에 있는 스타벅스. 호수를 보는 테라스석이 있어 공원 산책 중 아이·어르신과 쉬어 가기 좋습니다.',
        hours: '영업시간 확인 필요',
        priceRange: '¥500~',
        mustTry: '시즌 프라푸치노',
        imageQuery: 'Starbucks Ohori Park Fukuoka lake'
    },
    {
        name: '마누 커피 다이묘점',
        lat: 33.58643,
        lng: 130.39711,
        region: '텐진/나카스',
        category: '카페',
        description: '후쿠오카 로스터리 마누 커피의 다이묘 지점. 밤늦게까지 열어 저녁 식사 뒤 들르기 좋습니다. 좌석이 많지 않아요.',
        hours: '09:00~익일 01:00',
        priceRange: '¥500~',
        mustTry: '카페라테',
        imageQuery: 'Manu Coffee Daimyo Fukuoka'
    },

    // ────────────────────────────────────────
    // 기타 (Other) — 4 shops
    // ────────────────────────────────────────
    {
        name: '마키노 우동 하카타 버스터미널점',
        lat: 33.59127,
        lng: 130.41908,
        region: '하카타',
        category: '우동',
        description: '먹는 동안 면이 국물을 빨아들여 계속 불어나는 부드러운 후쿠오카식 우동. 하카타 버스터미널 지하 1층이라 이동 전 빠르게 먹기 좋고, 아이도 먹기 쉬운 부드러운 면입니다.',
        hours: '영업시간 확인 필요',
        priceRange: '¥600~',
        mustTry: '고보텐 우동 (우엉튀김 우동)',
        imageQuery: 'Makino udon Hakata gobo ten'
    },
    {
        name: '카레혼포 하카타 본점',
        lat: 33.59371,
        lng: 130.40962,
        region: '하카타',
        category: '카레',
        description: '가와바타 상점가 안의 야키카레(오븐에 구운 카레) 집. 쿠시다 신사·캐널시티와 가까워 점심 동선에 넣기 쉽습니다. 영업시간·휴무일은 출처마다 달라 방문 전 확인이 필요합니다.',
        hours: '11:00~16:30 (품절 시 종료, 목요일 휴무) (확인 필요)',
        priceRange: '¥1,000~',
        mustTry: '야키카레',
        imageQuery: 'Yaki curry baked curry Fukuoka'
    },
    {
        name: '하카타 하나미도리 하카타역앞점',
        lat: 33.58846,
        lng: 130.41685,
        region: '하카타',
        category: '향토음식',
        description: '자사 브랜드 닭으로 끓이는 미즈타키(닭백숙 전골) 전문점. 점심 정식이 있어 저녁 코스보다 부담이 적고, 맑은 국물이라 아이·어르신 모두 먹기 편합니다.',
        hours: '11:30~15:00, 17:00~23:00 (일요일·공휴일 ~22:00)',
        priceRange: '점심 ¥1,500~',
        mustTry: '미즈타키',
        imageQuery: 'Hanamidori mizutaki Hakata'
    }
];

// ============================================================
// Transport Guide
// ============================================================
const transportGuide = {
    airportAccess: [
        {
            method: '지하철 (공항선)',
            destination: '하카타역',
            duration: '5분',
            cost: '260엔',
            frequency: '약 7~8분 간격',
            description: '가장 빠르고 편리한 방법. 국내선 터미널 지하에서 바로 탑승.',
            tip: '국제선에서는 무료 셔틀버스로 국내선 이동 후 지하철 탑승 (약 15분 소요)'
        },
        {
            method: '지하철 (공항선)',
            destination: '텐진역',
            duration: '11분',
            cost: '260엔',
            frequency: '약 7~8분 간격',
            description: '텐진 방면도 환승 없이 직행.'
        },
        {
            method: '버스 (니시테츠)',
            destination: '하카타역',
            duration: '15~20분',
            cost: '400엔 (신용카드·교통계 IC 결제 380엔)',
            frequency: '약 10분 간격',
            description: '국제선 터미널 6·7번 승강장에서 탑승, 하카타역 지쿠시 출구 쪽 도착. 완전 캐시리스 실증 운행 중이라 현금으로는 탈 수 없습니다. 신용카드 터치 결제나 교통계 IC 카드를 준비하세요.'
        },
        {
            method: '특급버스 (니시테츠)',
            destination: '텐진 (니시테츠 텐진 고속버스터미널)',
            duration: '약 30~40분',
            cost: '500엔 (교통계 IC 결제 480엔), 어린이 250엔',
            frequency: '1일 17왕복',
            description: '국제선 터미널 8번 승강장에서 텐진까지 논스톱(2026-04 신설). 국내선 환승 없이 큰 짐 그대로 탈 수 있습니다.',
            tip: '신용카드 결제는 안 됩니다. 현금 또는 교통계 IC 카드를 준비하세요(20엔 할인은 교통계 IC 만). 하카타역행 공항버스는 반대로 현금 불가·카드 가능이라 결제 방식이 다릅니다. SUNQ 패스는 쓸 수 있지만 그 밖의 프리 승차권은 안 되고, 유아 1명은 무료(좌석을 쓰면 어린이 요금)'
        },
        {
            method: '택시',
            destination: '하카타역',
            duration: '10~15분',
            cost: '약 1,500엔',
            frequency: '상시',
            description: '짐이 많거나 심야 도착 시 편리. 4인까지 동일 요금.'
        }
    ],
    passes: [
        {
            name: '후쿠오카 투어리스트 시티패스',
            price: '1일권 2,500엔 (어린이 1,250엔) / 다자이후 포함 2,800엔 (어린이 1,400엔)',
            coverage: "시내 지하철·니시테츠 버스·니시테츠 전철(시내 구간) 1일 무제한 (다자이후판은 니시테츠 다자이후까지. 다자이후 라이너 버스 '旅人' 제외)",
            recommended: '하루에 버스·전철을 많이 갈아타는 날만. 지하철 위주면 지하철 1일권(640엔)이 훨씬 쌉니다',
            where: '하카타역, 텐진역 관광안내소'
        },
        {
            name: 'SUNQ 패스',
            price: '전 규슈+시모노세키 3일 14,000엔(디지털 12,000엔) / 북부 규슈+시모노세키 3일 12,000엔(디지털 10,000엔)',
            coverage: '규슈 전역 고속버스 + 시내버스 무제한',
            recommended: '유후인, 벳푸 등 규슈 광역 여행',
            where: '하카타 버스터미널, 온라인 사전구매'
        },
        {
            name: 'JR 북부규슈 레일패스',
            price: '3일권 15,000엔 / 5일권 17,000엔 (6~11세 반액, 외국인 여행자 전용)',
            coverage: 'JR 규슈 북부 노선 (유후인·벳푸 등). 하카타~고쿠라 신칸센(JR서일본)은 제외',
            recommended: '키타큐슈, 유후인, 벳푸 JR 이동 시',
            where: '하카타역 JR 티켓 오피스, 온라인'
        },
        {
            name: '니시테츠 버스 후쿠오카 시내 1일 프리 승차권',
            price: '1,200엔',
            coverage: '니시테츠 시내버스 무제한',
            recommended: '버스 3회 이상 이용 시',
            where: '니시테츠 텐진 고속버스터미널'
        },
        {
            name: 'FUKUOKA 1DAY PASS',
            price: '2,650엔 (2026 판매가 미확인)',
            coverage: '후쿠오카 시내 + 다자이후 + 야나가와 니시테츠 전선',
            recommended: '다자이후 + 야나가와 당일치기',
            where: '니시테츠 텐진역'
        }
    ],
    regionalRoutes: [
        {
            from: '하카타/텐진',
            to: '다자이후',
            options: [
                { method: '니시테츠 전철', duration: '약 40분', cost: '480엔', description: '텐진역 → 후츠카이치(환승) → 다자이후역. 관광열차 타비토(旅人)호 추천' },
                { method: '버스 (니시테츠)', duration: '약 40분', cost: '610엔 (확인 필요)', description: "하카타 버스터미널에서 직행하는 다자이후 라이너 '旅人'. 캐시리스 전용 운행(교통계 IC·터치 결제) 안내가 있어 현금은 확인 필요" }
            ]
        },
        {
            from: '하카타',
            to: '유후인',
            options: [
                { method: 'JR 특급 유후인노모리', duration: '약 2시간 15분', cost: '6,130엔 (지정석, 통상기. 성수기 +200~400엔)', description: '하카타역 직행 관광열차. 예약 필수 (인기 많음)' },
                { method: '고속버스', duration: '약 2시간', cost: '약 3,000~3,250엔 (승하차지별 상이)', description: '하카타 버스터미널에서 직행. SUNQ패스 이용 가능' }
            ]
        },
        {
            from: '하카타',
            to: '벳푸',
            options: [
                { method: 'JR 특급 소닉', duration: '약 2시간', cost: '자유석 6,380엔 / 지정석 6,910엔 (통상기)', description: '하카타역 직행. 30~60분 간격 운행' },
                { method: '고속버스', duration: '약 2시간 30분', cost: '3,250엔 (확인 필요)', description: '하카타 버스터미널에서 직행' }
            ]
        },
        {
            from: '하카타',
            to: '키타큐슈 (고쿠라)',
            options: [
                { method: '신칸센', duration: '약 15분', cost: '2,160엔', description: '가장 빠름. JR서일본 구간이라 JR 북부규슈 레일패스로는 탈 수 없음' },
                { method: 'JR 쾌속', duration: '약 1시간 20분', cost: '1,310엔 (확인 필요)', description: '저렴한 옵션. JR패스 이용 가능' }
            ]
        },
        {
            from: '하카타',
            to: '이토시마',
            options: [
                { method: 'JR 치쿠히선', duration: '약 35분', cost: '580엔 (확인 필요)', description: '하카타역 → 치쿠젠마에바루역. 이토시마 관광은 역에서 버스/렌터카 필요' },
                { method: '렌터카', duration: '약 40분', cost: '약 8,000엔~/일 (소형~중형, 면책보상 포함)', description: '이토시마 내 이동이 자유로움. 가장 추천하는 방법' }
            ]
        },
        {
            from: '유후인',
            to: '벳푸',
            options: [
                { method: 'JR 보통열차', duration: '약 1시간', cost: '1,170엔 (확인 필요)', description: '유후인역 → 오이타역 환승 → 벳푸역' },
                { method: '버스', duration: '약 50분', cost: '1,000엔 (확인 필요)', description: '유후인 버스센터에서 가메노이 버스' }
            ]
        }
    ]
};

// ============================================================
// Accommodations (25 across all regions)
// ============================================================
const accommodations = [
    // ────────────────────────────────────────
    // 하카타 (Hakata) — 8 accommodations
    // ────────────────────────────────────────
    {
        name: '그랜드 하얏트 후쿠오카',
        lat: 33.58985,
        lng: 130.41039,
        region: '하카타',
        type: '호텔',
        priceRange: '¥27,500~',
        priceCategory: 'premium',
        description: '캐널시티 하카타와 붙어 있는 고급 호텔. 쇼핑몰과 바로 이어져 비 오는 날 아이와 움직이기 편하고, 나카스·쿠시다 신사까지 걸어갈 수 있습니다.',
        features: ['캐널시티 직결', '피트니스', '레스토랑', '룸서비스', '컨시어지'],
        nearAttractions: ['캐널시티 하카타', '쿠시다 신사', '나카스 야타이 (포장마차)'],
        imageQuery: 'Grand Hyatt Fukuoka hotel'
    },
    {
        name: '호텔 닛코 후쿠오카',
        lat: 33.59156,
        lng: 130.41745,
        region: '하카타',
        type: '호텔',
        priceRange: '¥20,000~ (확인 필요)',
        priceCategory: 'mid',
        description: '하카타역 하카타 출구 앞 대형 호텔. 역과 지하로 이어져 짐이 많은 날이나 공항 이동(지하철 2정거장)에 편합니다.',
        features: ['하카타역 지하 연결', '조식 뷔페', '피트니스', '컨시어지'],
        nearAttractions: ['하카타역', '도초지 (동장사)', '쿠시다 신사'],
        imageQuery: 'Hotel Nikko Fukuoka Hakata'
    },
    {
        name: 'JR규슈호텔 블로섬 하카타 중앙',
        lat: 33.59001,
        lng: 130.41805,
        region: '하카타',
        type: '호텔',
        priceRange: '¥16,000~',
        priceCategory: 'mid',
        description: '하카타역 하카타 출구에서 걸어서 2~3분인 JR규슈 계열 호텔. 신칸센·JR 특급으로 근교를 오가는 일정에 맞습니다.',
        features: ['하카타역 도보 3분', '조식', '코인 세탁', 'Wi-Fi'],
        nearAttractions: ['하카타역', '스미요시 신사', '캐널시티 하카타'],
        imageQuery: 'JR Kyushu Hotel Blossom Hakata Chuo'
    },
    {
        name: '도미인 하카타 기온',
        lat: 33.59354,
        lng: 130.41304,
        region: '하카타',
        type: '호텔',
        priceRange: '¥16,500~',
        priceCategory: 'mid',
        description: '지하철 기온역에서 걸어서 1~2분인 천연온천 대욕장 호텔. 쿠시다 신사·하카타 마치야 후루사토관이 걸어서 3분 거리라 구시가지 산책 거점으로 좋습니다.',
        features: ['천연온천 대욕장', '사우나', '코인 세탁', 'Wi-Fi'],
        nearAttractions: ['하카타 마치야 후루사토관', '도초지 (동장사)', '쿠시다 신사'],
        imageQuery: 'Dormy Inn Hakata Gion onsen'
    },
    {
        name: '위드 더 스타일 후쿠오카',
        lat: 33.58497,
        lng: 130.42192,
        region: '하카타',
        type: '호텔',
        priceRange: '¥30,000~ (확인 필요)',
        priceCategory: 'premium',
        description: '하카타역 지쿠시 출구에서 걸어서 7분인 디자인 부티크 호텔. 중정에 물 테라스와 풀이 있는 조용한 리조트 분위기입니다.',
        features: ['부티크 호텔', '중정 풀', '레스토랑', '바', '디자인 인테리어'],
        nearAttractions: ['하카타역', '스미요시 신사'],
        imageQuery: 'WITH THE STYLE Fukuoka boutique hotel'
    },
    {
        name: '하카타 그린 호텔 1호관',
        lat: 33.59181,
        lng: 130.42213,
        region: '하카타',
        type: '호텔',
        priceRange: '¥16,000~ (2인 1실)',
        priceCategory: 'budget',
        description: '하카타역 지쿠시 출구에서 걸어서 1분인 비즈니스호텔(2024년 8월 개축). 역 바로 앞이라 이른 출발·늦은 도착 일정에 맞습니다.',
        features: ['하카타역 도보 1분', 'Wi-Fi', '코인 세탁', '24시간 프런트'],
        nearAttractions: ['하카타역', '도초지 (동장사)'],
        imageQuery: 'Hakata Green Hotel Ichigokan'
    },
    {
        name: 'WeBase 하카타',
        lat: 33.59552,
        lng: 130.40842,
        region: '하카타',
        type: '게스트하우스',
        priceRange: '¥8,000~ (2인 1실)',
        priceCategory: 'budget',
        description: '도미토리부터 개인실까지 7가지 방이 있는 호스텔. 나카스카와바타역 7번 출구에서 걸어서 3분이고, 가족이 개인실로 묵기에도 무난합니다.',
        features: ['도미토리/개인실', '공용 라운지', 'Wi-Fi', '짐 보관'],
        nearAttractions: ['하카타 리버레인', '쿠시다 신사', '나카스 야타이 (포장마차)'],
        imageQuery: 'WeBase Hakata hostel'
    },
    {
        name: '후쿠오카 하나 호스텔',
        lat: 33.59284,
        lng: 130.40945,
        region: '하카타',
        type: '게스트하우스',
        priceRange: '¥3,500~ (도미토리 1인) (확인 필요)',
        priceCategory: 'budget',
        description: '가와바타 상점가 옆 호스텔. 다다미에 이불을 까는 일본식 개인실과 2층 침대 도미토리가 있고, 쿠시다 신사·캐널시티까지 걸어서 2~3분입니다.',
        features: ['다다미 개인실', '도미토리', '공용 주방', 'Wi-Fi'],
        nearAttractions: ['쿠시다 신사', '캐널시티 하카타', '나카스 야타이 (포장마차)'],
        imageQuery: 'Fukuoka Hana Hostel'
    },

    // ────────────────────────────────────────
    // 텐진 (Tenjin) — 4 accommodations
    // ────────────────────────────────────────
    {
        name: '솔라리아 니시테츠 호텔 후쿠오카',
        lat: 33.58892,
        lng: 130.39885,
        region: '텐진/나카스',
        type: '호텔',
        priceRange: '¥26,000~',
        priceCategory: 'premium',
        description: '니시테츠 후쿠오카(텐진)역 빌딩 위의 호텔. 텐진 지하상가와 바로 이어지고 다자이후행 니시테츠 열차를 건물에서 탈 수 있습니다.',
        features: ['텐진 지하상가 직결', '니시테츠 전철 연결', '조식 뷔페', '레스토랑', 'Wi-Fi'],
        nearAttractions: ['텐진 지하상가', '이와타야 백화점', '아크로스 후쿠오카'],
        imageQuery: 'Solaria Nishitetsu Hotel Fukuoka Tenjin'
    },
    {
        name: '니시테츠 인 텐진',
        lat: 33.58569,
        lng: 130.40173,
        region: '텐진/나카스',
        type: '호텔',
        priceRange: '¥8,000~ (확인 필요)',
        priceCategory: 'budget',
        description: '지하철 텐진미나미역에서 걸어서 5분인 비즈니스호텔. 텐진 쇼핑가와 야나기바시 시장 사이라 걸어서 다니기 좋습니다.',
        features: ['텐진미나미역 도보 5분', '조식', 'Wi-Fi', '코인 세탁', '유료 주차'],
        nearAttractions: ['텐진 지하상가', '이와타야 백화점', '텐진 중앙공원'],
        imageQuery: 'Nishitetsu Inn Tenjin hotel'
    },
    {
        name: '더 라이브리 후쿠오카 하카타',
        lat: 33.59394,
        lng: 130.40482,
        region: '텐진/나카스',
        type: '호텔',
        priceRange: '¥15,000~ (확인 필요)',
        priceCategory: 'mid',
        description: '나카스카와바타역 출구에서 걸어서 1분인 라이프스타일 호텔. 1층 카페 라운지가 있고, 나카스 강변 야타이 거리와 가깝습니다.',
        features: ['카페 라운지', '디자인 인테리어', 'Wi-Fi', '나카스카와바타역 도보 1분'],
        nearAttractions: ['하카타 리버레인', '나카스 야타이 (포장마차)', '아크로스 후쿠오카'],
        imageQuery: 'The Lively Fukuoka Hakata hotel Nakasu'
    },
    {
        name: '니시테츠 그랜드 호텔',
        lat: 33.58984,
        lng: 130.39545,
        region: '텐진/나카스',
        type: '호텔',
        priceRange: '¥17,000~',
        priceCategory: 'premium',
        description: '1969년 문을 연 텐진의 클래식 호텔. 이와타야 백화점·다이묘 골목과 붙어 있어 쇼핑과 식사 동선이 짧습니다.',
        features: ['레스토랑', '바', '피트니스', '컨시어지'],
        nearAttractions: ['이와타야 백화점', '다이묘 에어리어', '텐진 지하상가'],
        imageQuery: 'Nishitetsu Grand Hotel Fukuoka'
    },

    // ────────────────────────────────────────
    // 유후인 (Yufuin) — 4 accommodations
    // ────────────────────────────────────────
    {
        name: '야마노 호텔 무소엔',
        lat: 33.25308,
        lng: 131.35494,
        region: '유후인',
        type: '료칸',
        priceRange: '1인 2식 ¥28,000~',
        priceCategory: 'premium',
        description: '유후인역 남쪽 언덕 위 온천 료칸. 유후다케를 정면으로 보는 대형 노천탕이 유명합니다. 긴린코·유노츠보 거리와는 떨어져 있어 차나 송영으로 움직입니다.',
        features: ['유후다케 조망 대형 노천탕', '가이세키 요리', '당일 입욕 가능', '주차'],
        nearAttractions: ['유후인 역', '유후인 스테인드글라스 미술관', '유노츠보 거리'],
        imageQuery: 'Yufuin Musouen ryokan open air bath'
    },
    {
        name: '유후인 산스이칸',
        lat: 33.25936,
        lng: 131.35698,
        region: '유후인',
        type: '료칸',
        priceRange: '1인 2식 ¥17,600~',
        priceCategory: 'mid',
        description: '유후인역에서 걸어서 8분인 대형 온천 료칸. 유후다케가 보이는 노천탕과 뷔페식 식사라 아이·어르신 동반 가족이 묵기 무난합니다.',
        features: ['유후다케 조망 노천탕', '대욕장·사우나', '뷔페 식사', '역 도보 8분'],
        nearAttractions: ['유후인 역', '유후인 스테인드글라스 미술관', '유노츠보 거리'],
        imageQuery: 'Yufuin Sansuikan ryokan'
    },
    {
        name: '산소 무라타',
        lat: 33.27578,
        lng: 131.36975,
        region: '유후인',
        type: '료칸',
        priceRange: '1인 2식 ¥50,000~ (확인 필요)',
        priceCategory: 'premium',
        description: '옛 민가를 옮겨 지은 독채 12채로만 된 고급 료칸. 유노츠보 거리 북쪽 산자락의 조용한 곳에 있습니다.',
        features: ['전 객실 독채', '고민가 건축', '가이세키 요리', '정원'],
        nearAttractions: ['유노츠보 거리', '유후인 긴린코 (금린호)', '유후인 플로랄 빌리지'],
        imageQuery: 'Sanso Murata Yufuin ryokan'
    },
    {
        name: '유후인 호텔 슈호칸',
        lat: 33.25965,
        lng: 131.36369,
        region: '유후인',
        type: '호텔',
        priceRange: '1인 2식 ¥15,000~ (확인 필요)',
        priceCategory: 'mid',
        description: '4층 전망 대욕장에서 유후다케를 정면으로 보는 온천 호텔. 유후인역에서 걸어서 12분이고 역 송영과 무료 주차가 있습니다.',
        features: ['전망 대욕장', '노천탕·사우나', '역 송영', '무료 주차'],
        nearAttractions: ['유후인 스테인드글라스 미술관', '유노츠보 거리', '유후인 역'],
        imageQuery: 'Yufuin Hotel Shuhokan'
    },

    // ────────────────────────────────────────
    // 벳푸 (Beppu) — 3 accommodations
    // ────────────────────────────────────────
    {
        name: '스기노이 호텔',
        lat: 33.28417,
        lng: 131.47384,
        region: '벳푸',
        type: '호텔',
        priceRange: '1인 2식 ¥20,900~',
        priceCategory: 'mid',
        description: '벳푸만을 내려다보는 언덕 위 대형 온천 리조트. 계단식 노천탕 "다나유" 와 물놀이 시설이 있어 아이 동반 가족에게 인기입니다. 시내·지옥 순례까지는 차나 셔틀로 10분 안팎.',
        features: ['계단식 대형 노천탕', '벳푸만 조망', '물놀이 시설', '뷔페 레스토랑', '셔틀버스'],
        nearAttractions: ['벳푸 타워', '다케가와라 온천', '벳푸 지옥 순례 (우미지고쿠)'],
        imageQuery: 'Suginoi Hotel Beppu Tanayu'
    },
    {
        name: '카메노이 호텔 벳푸',
        lat: 33.27625,
        lng: 131.50011,
        region: '벳푸',
        type: '호텔',
        priceRange: '¥4,400~ (1인, 식사 없음)',
        priceCategory: 'mid',
        description: '벳푸역에서 걸어서 5분인 온천 호텔. 대욕장·노천탕이 있고 숙박객 주차가 무료(200대)라 렌터카 여행에 편합니다.',
        features: ['온천 대욕장·노천탕', '벳푸역 도보 5분', '무료 주차', '조식'],
        nearAttractions: ['다케가와라 온천', '벳푸 타워'],
        imageQuery: 'Kamenoi Hotel Beppu'
    },
    {
        name: 'PITO 벳푸 호스텔 & 카페',
        lat: 33.27813,
        lng: 131.50552,
        region: '벳푸',
        type: '게스트하우스',
        priceRange: '¥5,600~ (1실)',
        priceCategory: 'budget',
        description: '다케가와라 온천까지 걸어서 2분인 호스텔(옛 이름 Ourschestra). 도미토리와 개인실이 있고 벳푸역에서 걸어서 6~7분입니다.',
        features: ['도미토리/개인실', '1층 카페·바', 'Wi-Fi', '다케가와라 온천 도보 2분'],
        nearAttractions: ['다케가와라 온천', '벳푸 타워'],
        imageQuery: 'Beppu hostel Takegawara'
    },

    // ────────────────────────────────────────
    // 키타큐슈 (Kitakyushu) — 2 accommodations
    // ────────────────────────────────────────
    {
        name: '프리미어 호텔 모지코',
        lat: 33.94640,
        lng: 130.96228,
        region: '키타큐슈',
        type: '호텔',
        priceRange: '¥13,000~ (2인 1실)',
        priceCategory: 'mid',
        description: '모지코역에서 걸어서 2분, 간몬 해협 바로 앞의 호텔. 모지코 레트로 지구 한가운데라 야경을 보고 걸어서 돌아올 수 있습니다.',
        features: ['간몬 해협 뷰', '레스토랑', '모지코역 도보 2분', '유료 주차'],
        nearAttractions: ['모지코 레트로 지구', '간몬 해협 인도 터널'],
        imageQuery: 'Premier Hotel Mojiko'
    },
    {
        name: '리가 로얄 호텔 고쿠라',
        lat: 33.88874,
        lng: 130.88358,
        region: '키타큐슈',
        type: '호텔',
        priceRange: '¥15,000~ (확인 필요)',
        priceCategory: 'mid',
        description: '고쿠라역 신칸센 출구와 이어진 대형 호텔. 신칸센 이동 전후 숙박에 편하고 고쿠라성·탄가 시장까지 걸어서 15분 안팎입니다.',
        features: ['고쿠라역 직결', '레스토랑', '피트니스', 'Wi-Fi'],
        nearAttractions: ['탄가 시장', '고쿠라성'],
        imageQuery: 'Rihga Royal Hotel Kokura'
    },

    // ────────────────────────────────────────
    // 후쿠오카 시내 (Fukuoka City) — 3 accommodations
    // ────────────────────────────────────────
    {
        name: '힐튼 후쿠오카 시호크',
        lat: 33.59483,
        lng: 130.35921,
        region: '후쿠오카 시내',
        type: '호텔',
        priceRange: '¥12,000~',
        priceCategory: 'premium',
        description: '미즈호 PayPay 돔 옆 바닷가 대형 호텔. 실내 수영장이 있고 모모치 해변·후쿠오카 타워까지 걸어갈 수 있습니다. 시기별 요금 차이가 큽니다.',
        features: ['PayPay 돔 인접', '바다 전망', '수영장', '피트니스', '레스토랑'],
        nearAttractions: ['MARK IS 후쿠오카 모모치', '모모치 해변', '후쿠오카 타워'],
        imageQuery: 'Hilton Fukuoka Sea Hawk'
    },
    {
        name: '후쿠오카 프린스 호텔 모모치하마',
        lat: 33.59367,
        lng: 130.35094,
        region: '후쿠오카 시내',
        type: '호텔',
        priceRange: '¥20,000~ (확인 필요)',
        priceCategory: 'premium',
        description: '2026년 3월 문을 연 20층 호텔로 229실 전부 바다 전망입니다. 후쿠오카 타워·모모치 해변까지 걸어서 1분. 텐진에서 버스로 20분 정도라 대중교통 일정에선 이동 시간을 감안하세요.',
        features: ['전 객실 오션뷰', '후쿠오카 타워 도보 1분', '레스토랑', '유료 주차'],
        nearAttractions: ['후쿠오카 타워', '모모치 해변'],
        imageQuery: 'Fukuoka Prince Hotel Momochihama'
    },
    {
        name: 'UNPLAN 후쿠오카',
        lat: 33.59024,
        lng: 130.37999,
        region: '후쿠오카 시내',
        type: '게스트하우스',
        priceRange: '¥6,000~ (1실)',
        priceCategory: 'budget',
        description: '지하철 오호리코엔역 4번 출구에서 걸어서 1분인 호스텔. 도미토리와 개인실, 공용 주방이 있고 텐진까지 지하철 2정거장입니다.',
        features: ['도미토리/개인실', '공용 주방', '라운지', '코인 세탁'],
        nearAttractions: ['오호리 공원', '후쿠오카시 미술관', '후쿠오카성터 (마이즈루 공원)'],
        imageQuery: 'UNPLAN Fukuoka hostel'
    },

    // ────────────────────────────────────────
    // 이토시마 (Itoshima) — 1 accommodation
    // ────────────────────────────────────────
    {
        name: '이토시마 게스트하우스 마에바루주쿠 고토노하',
        lat: 33.55743,
        lng: 130.19847,
        region: '이토시마',
        type: '게스트하우스',
        priceRange: '¥4,000~ (확인 필요)',
        priceCategory: 'budget',
        description: 'JR 지쿠젠마에바루역 앞 빌딩 4층의 게스트하우스. 해변은 아니고 이토시마 관광의 출발 거점입니다. 후타미가우라·해변 카페까지는 차로 20~30분.',
        features: ['지쿠젠마에바루역 앞', '체크인 16:00~22:00', '연중무휴', 'Wi-Fi'],
        nearAttractions: ['런던버스 카페', '라이잔 센뇨지', '이토시마 해변 (후타미가하마)'],
        imageQuery: 'Itoshima guesthouse Maebaru'
    }
];

// Expose data globals so planner.js (IIFE scope) can access them via window.*
window.locations = locations;
window.regionCenters = regionCenters;
window.restaurants = restaurants;
window.transportGuide = transportGuide;
window.accommodations = accommodations;

// imageQuery에서 로컬 이미지 경로(images/{slug}.jpg)를 생성한다.
// 파일이 없으면 각 렌더의 onerror가 이미지 영역을 숨긴다(폴백 아이콘 없음).
window.imageSrc = function (q) {
    if (!q) return '';
    var slug = q.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return 'images/' + slug + '.jpg';
};
