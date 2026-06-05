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
        hours: '10:00~18:00 (수요일 휴관)',
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
        description: '나카스강변의 복합 문화시설. 하카타좌 극장, 후쿠오카 아시아미술관이 입점해 있습니다.',
        hours: '10:00~20:00',
        admission: '무료 (미술관 200엔)',
        website: 'https://www.riverwalk.co.jp/',
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
        hours: '10:00~22:00',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        imageQuery: 'Hakata Port Tower Fukuoka',
        nearbyHotels: []
    },

    // ────────────────────────────────────────
    // 텐진/나카스 (Tenjin/Nakasu) — 8 spots
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
        website: 'https://www.iwataya-mitsukoshi.co.jp/',
        duration: 60,
        childFriendly: true,
        imageQuery: 'Iwataya department store Tenjin Fukuoka',
        nearbyHotels: []
    },
    {
        name: '기린 맥주 공장 후쿠오카',
        lat: 33.40995271177547,
        lng: 130.62618882094972,
        region: '아사쿠라',
        description: '기린 맥주의 제조 과정을 견학하고 시음할 수 있는 공장 투어. 사전 예약 필수입니다.',
        hours: '09:30~16:00 (월요일 휴관)',
        admission: '무료 (예약 필수)',
        website: 'https://www.kirin.co.jp/',
        duration: 75,
        childFriendly: false,
        imageQuery: 'Kirin Beer Factory Fukuoka tour',
        nearbyHotels: []
    },
    {
        name: '후쿠오카 크리스마스 마켓',
        lat: 33.59007,
        lng: 130.4014,
        region: '텐진/나카스',
        description: '12월 한정 크리스마스 마켓·일루미네이션. 후쿠오카 시청 앞 후레아이광장과 하카타역 광장을 중심으로 도심이 빛으로 이어집니다. 글뤼바인·먹거리 부스가 있어 가족 야간 코스로 좋습니다(유아·노부모는 방한 후 짧게).',
        hours: '12월 한정 (매년 11월 중순~12/25경), 평일 17:00~23:00 / 주말 12:00~23:00 (해마다 변동)',
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
        description: '아름다운 이끼 정원(일광정원)으로 유명한 선종 사찰. 석정과 이끼가 어우러진 고즈넉한 명소입니다.',
        hours: '09:30~16:30',
        admission: '200엔',
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
        admission: '800엔',
        website: 'https://www.fukuokatower.co.jp/',
        duration: 45,
        childFriendly: true,
        imageQuery: 'Fukuoka Tower',
        nearbyHotels: [
            { name: '힐튼 후쿠오카 시호크', distance: '도보 5분', price: '¥18,000~/박' }
        ]
    },
    {
        name: '오호리 공원',
        lat: 33.58586,
        lng: 130.37625,
        region: '후쿠오카 시내',
        description: '후쿠오카의 센트럴파크. 호수 둘레길(약 2km) 산책, 일본 정원, 보트 등을 즐길 수 있습니다.',
        hours: '상시 개방 (정원 09:00~17:00)',
        admission: '무료 (일본정원 250엔)',
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
        name: '마리노아시티 후쿠오카',
        lat: 33.59436,
        lng: 130.32275,
        region: '후쿠오카 시내',
        description: '규슈 최대의 아울렛 쇼핑몰. 대관람차(높이 60m)와 브랜드 할인 매장 170여 개가 입점해 있습니다.',
        hours: '10:00~21:00',
        admission: '무료 (관람차 500엔)',
        website: 'https://www.marinoacity.com/',
        duration: 120,
        childFriendly: true,
        imageQuery: 'Marinoa City Fukuoka outlet ferris wheel',
        nearbyHotels: []
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
        name: '하카타 모츠나베 거리 (나기사마치)',
        lat: 33.59264,
        lng: 130.39238,
        region: '후쿠오카 시내',
        description: '후쿠오카 명물 모츠나베(곱창전골) 전문점 밀집 지역. 야마나카, 이치류 등 유명 맛집이 모여 있습니다.',
        hours: '17:00~23:00 (점포별 상이)',
        admission: '무료 (음식 별도)',
        duration: 60,
        childFriendly: true,
        imageQuery: 'Motsunabe hot pot Fukuoka',
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
        admission: '1,200엔 (페리 별도 왕복 460엔)',
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
        description: '규슈 바다를 테마로 한 대형 수족관. 돌고래·바다사자 쇼와 대형 수조가 인기로, 실내라 겨울·우천에 강하고 2살 유아도 즐겁습니다(3세 이하 무료).',
        hours: '09:30~17:30 (계절별 변동, 겨울 단축 운영)',
        admission: '성인 2,500엔, 어린이 1,200엔 (3세 이하 무료)',
        website: 'https://marine-world.jp/',
        duration: 120,
        childFriendly: true,
        imageQuery: 'Marine World Uminonakamichi Fukuoka aquarium dolphin',
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
        name: '이토시마 팜파크',
        lat: 33.537449084146424,
        lng: 130.2527527153431,
        region: '이토시마',
        description: '이토시마 농산물 직거래 시장과 체험 농장. 신선한 과일 따기와 수제 소시지 만들기 체험이 가능합니다.',
        hours: '09:00~17:00',
        admission: '무료 (체험 별도)',
        duration: 60,
        childFriendly: true,
        imageQuery: 'Itoshima farm market Fukuoka',
        nearbyHotels: []
    },
    {
        name: '라이징(RAIZAN) 센뇨지',
        lat: 33.49461,
        lng: 130.22858,
        region: '이토시마',
        description: '천년 이상의 역사를 가진 사찰. 가을 단풍과 500년 된 대은행나무(천연기념물)가 유명합니다.',
        hours: '상시 개방',
        admission: '무료',
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
        description: '등나무 터널로 세계적으로 유명한 정원. 4~5월 등나무 시즌에는 몽환적인 보라색 터널이 펼쳐집니다.',
        hours: '09:00~18:00 (계절별 변동)',
        admission: '1,500엔 (시즌에 따라 변동)',
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
        admission: '450엔 (7곳 통합권 2,200엔)',
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
        admission: '450엔 (통합권 포함)',
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
        admission: '450엔 (통합권 포함)',
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
        hours: '09:00~22:00',
        admission: '200엔',
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
        name: '벳푸 아쿠아마린',
        lat: 33.258783,
        lng: 131.535636,
        region: '벳푸',
        description: '해양생물을 관람할 수 있는 수족관. 세이우치(바다코끼리) 쇼와 체험 프로그램이 가족에게 인기입니다.',
        hours: '09:00~18:00',
        admission: '성인 2,600엔, 어린이 1,300엔',
        website: 'https://www.umitamago.jp/',
        duration: 90,
        childFriendly: true,
        imageQuery: 'Umitamago aquarium Beppu',
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
        name: '이치란 본점',
        lat: 33.5912,
        lng: 130.4015,
        region: '하카타',
        category: '라멘',
        description: '돈코츠 라멘의 대명사. 1인석 칸막이에서 자신만의 맛을 커스터마이징할 수 있습니다.',
        hours: '24시간 영업',
        priceRange: '¥890~',
        mustTry: '천연 돈코츠 라멘',
        imageQuery: 'Ichiran Ramen Hakata'
    },
    {
        name: '하카타 잇코샤 본점',
        lat: 33.5905,
        lng: 130.4018,
        region: '하카타',
        category: '라멘',
        description: '진한 돈코츠 스프가 특징인 하카타 라멘 명가. 거품 스프의 농후한 맛이 일품입니다.',
        hours: '11:00~24:00',
        priceRange: '¥800~',
        mustTry: '돈코츠 라멘 (카타멘)',
        imageQuery: 'Hakata Ikkousha ramen Fukuoka'
    },
    {
        name: '신신라멘 텐진본점',
        lat: 33.5903,
        lng: 130.3985,
        region: '텐진/나카스',
        category: '라멘',
        description: '야타이 출신의 하카타 라멘 명점. 깔끔하면서도 깊은 맛의 돈코츠 스프가 특징입니다.',
        hours: '11:00~03:00',
        priceRange: '¥700~',
        mustTry: '하카타 라멘',
        imageQuery: 'ShinShin Ramen Tenjin Fukuoka'
    },
    {
        name: '이치후지 라멘',
        lat: 33.5890,
        lng: 130.4200,
        region: '하카타',
        category: '라멘',
        description: '하카타역 근처의 인기 라멘점. 부드럽고 크리미한 돈코츠 스프와 쫄깃한 호소멘이 조화롭습니다.',
        hours: '11:00~22:00',
        priceRange: '¥750~',
        mustTry: '특제 돈코츠 라멘',
        imageQuery: 'Ichifuji ramen Hakata tonkotsu'
    },
    {
        name: '하카타 다루마 라멘 본점',
        lat: 33.5918,
        lng: 130.3942,
        region: '텐진/나카스',
        category: '라멘',
        description: '1963년 창업의 전통 하카타 라멘. 초농후 돈코츠 스프와 자극적인 마늘 토핑이 인기입니다.',
        hours: '12:00~02:00',
        priceRange: '¥750~',
        mustTry: '라멘 + 교자 세트',
        imageQuery: 'Hakata Daruma Ramen Fukuoka'
    },
    {
        name: '나가하마 라멘 나카스점',
        lat: 33.5935,
        lng: 130.4050,
        region: '텐진/나카스',
        category: '라멘',
        description: '나가하마 발상의 원조 라멘. 가늘고 딱딱한 면(바리카타)과 담백한 돈코츠 스프의 조합이 특징입니다.',
        hours: '18:00~02:00',
        priceRange: '¥600~',
        mustTry: '나가하마 라멘 바리카타',
        imageQuery: 'Nagahama ramen Fukuoka'
    },

    // ────────────────────────────────────────
    // 모츠나베 (Motsunabe) — 4 places
    // ────────────────────────────────────────
    {
        name: '야마나카 아카사카점',
        lat: 33.5870,
        lng: 130.3960,
        region: '후쿠오카 시내',
        category: '모츠나베',
        description: '후쿠오카 모츠나베의 명가. 간장 베이스의 국물에 신선한 소 곱창과 니라, 양배추가 가득합니다.',
        hours: '17:00~23:00 (일요일 휴무)',
        priceRange: '¥1,500~',
        mustTry: '간장 모츠나베',
        imageQuery: 'Yamanaka motsunabe Fukuoka'
    },
    {
        name: '라쿠텐치 모츠나베',
        lat: 33.5845,
        lng: 130.3980,
        region: '후쿠오카 시내',
        category: '모츠나베',
        description: '미소(된장) 베이스 모츠나베가 인기인 현지 맛집. 〆(마무리)에 챠폰멘을 넣어 먹는 것이 정석입니다.',
        hours: '17:00~24:00',
        priceRange: '¥1,400~',
        mustTry: '미소 모츠나베',
        imageQuery: 'Motsunabe hot pot Fukuoka miso'
    },
    {
        name: '이치류 하카타점',
        lat: 33.5910,
        lng: 130.4170,
        region: '하카타',
        category: '모츠나베',
        description: '하카타역 근처의 인기 모츠나베 전문점. 투명한 시오(소금) 스프에 프리프리한 곱창이 들어갑니다.',
        hours: '11:30~14:00, 17:00~23:00',
        priceRange: '¥1,500~',
        mustTry: '시오 모츠나베',
        imageQuery: 'Ichiryu motsunabe Hakata'
    },
    {
        name: '오오야마 텐진점',
        lat: 33.5895,
        lng: 130.3965,
        region: '텐진/나카스',
        category: '모츠나베',
        description: '신선한 와규 곱창만 사용하는 프리미엄 모츠나베 전문점. 미즈타키(물닭)도 인기 메뉴입니다.',
        hours: '17:00~23:30',
        priceRange: '¥1,800~',
        mustTry: '특선 모츠나베 (간장)',
        imageQuery: 'Oyama motsunabe premium Tenjin'
    },

    // ────────────────────────────────────────
    // 교자 (Gyoza) — 3 places
    // ────────────────────────────────────────
    {
        name: '텐진 교자 하카타점',
        lat: 33.5900,
        lng: 130.4195,
        region: '하카타',
        category: '교자',
        description: '한 입 크기의 하카타 교자 전문점. 바삭한 겉면과 육즙 가득한 속이 매력적입니다.',
        hours: '11:00~23:00',
        priceRange: '¥500~',
        mustTry: '히토쿠치 교자 (한입 교자) 2인분',
        imageQuery: 'Hakata gyoza dumplings Fukuoka'
    },
    {
        name: '하카타 교자사 나카스점',
        lat: 33.5930,
        lng: 130.4040,
        region: '텐진/나카스',
        category: '교자',
        description: '나카스에서 인기인 교자 전문점. 유즈(유자) 후추를 곁들여 먹는 것이 이 집만의 스타일입니다.',
        hours: '12:00~24:00',
        priceRange: '¥550~',
        mustTry: '야키교자 + 유즈후추',
        imageQuery: 'Gyoza restaurant Nakasu Fukuoka'
    },
    {
        name: '야타이 교자 텐진점',
        lat: 33.5882,
        lng: 130.3950,
        region: '텐진/나카스',
        category: '교자',
        description: '야타이(포장마차) 스타일의 교자 전문점. 철판에 빙 둘러 구운 테츠나베 교자가 시그니처입니다.',
        hours: '18:00~01:00',
        priceRange: '¥600~',
        mustTry: '테츠나베 교자',
        imageQuery: 'Tetsunabe gyoza iron pan Fukuoka'
    },

    // ────────────────────────────────────────
    // 야키토리/꼬치 (Yakitori) — 3 places
    // ────────────────────────────────────────
    {
        name: '야키토리 바탄큐 하카타점',
        lat: 33.5895,
        lng: 130.4180,
        region: '하카타',
        category: '야키토리',
        description: '하카타역 앞의 인기 야키토리점. 비장탄으로 구운 닭꼬치와 돼지바라 꼬치가 일품입니다.',
        hours: '17:00~24:00',
        priceRange: '¥800~',
        mustTry: '닭껍질 꼬치 (카와)',
        imageQuery: 'Yakitori skewers Hakata Fukuoka'
    },
    {
        name: '텐진 호루몬 (곱창구이)',
        lat: 33.5888,
        lng: 130.3935,
        region: '텐진/나카스',
        category: '야키토리',
        description: '신선한 호루몬(곱창)을 숯불에 구워 먹는 전문점. 다이묘 에어리어에서 현지인에게 인기입니다.',
        hours: '17:00~23:00 (일요일 휴무)',
        priceRange: '¥1,200~',
        mustTry: '모둠 호루몬 세트',
        imageQuery: 'Horumon grilled offal Tenjin Fukuoka'
    },
    {
        name: '하카타 잇소',
        lat: 33.5908,
        lng: 130.4100,
        region: '하카타',
        category: '야키토리',
        description: '하카타 스타일의 야키토리 이자카야. 닭가슴살 타타키와 명란젓 계란말이가 인기입니다.',
        hours: '16:00~24:00',
        priceRange: '¥900~',
        mustTry: '치킨 나카카와 (닭날개 사이)',
        imageQuery: 'Hakata yakitori izakaya'
    },

    // ────────────────────────────────────────
    // 해산물/스시 (Seafood/Sushi) — 3 places
    // ────────────────────────────────────────
    {
        name: '야나기바시 연합시장',
        lat: 33.5868,
        lng: 130.4045,
        region: '텐진/나카스',
        category: '해산물',
        description: '후쿠오카의 부엌으로 불리는 전통 재래시장. 신선한 회와 해산물 덮밥을 아침부터 즐길 수 있습니다.',
        hours: '06:00~18:00 (일요일, 공휴일 휴무)',
        priceRange: '¥1,000~',
        mustTry: '해선덮밥 (카이센동)',
        imageQuery: 'Yanagibashi Market Fukuoka seafood'
    },
    {
        name: '겐카이 스시 하카타점',
        lat: 33.5902,
        lng: 130.4190,
        region: '하카타',
        category: '해산물',
        description: '현해탄에서 잡은 신선한 어패류를 사용하는 회전스시. 이카(오징어) 활어회가 명물입니다.',
        hours: '11:00~22:00',
        priceRange: '¥1,500~',
        mustTry: '이카 이키즈쿠리 (오징어 활어회)',
        imageQuery: 'Sushi Fukuoka Genkai fresh seafood'
    },
    {
        name: '우오마루 텐진점',
        lat: 33.5898,
        lng: 130.3972,
        region: '텐진/나카스',
        category: '해산물',
        description: '고마사바(참깨 고등어)와 이카 활어회가 유명한 해산물 이자카야. 후쿠오카 향토 해산물의 정수입니다.',
        hours: '17:00~23:00',
        priceRange: '¥2,000~',
        mustTry: '고마사바 (참깨 고등어 회)',
        imageQuery: 'Gomasaba sesame mackerel Fukuoka'
    },

    // ────────────────────────────────────────
    // 카페/디저트 (Cafe/Dessert) — 3 places
    // ────────────────────────────────────────
    {
        name: 'NO COFFEE',
        lat: 33.5865,
        lng: 130.3918,
        region: '텐진/나카스',
        category: '카페',
        description: '다이묘의 아이코닉한 카페. "NO COFFEE, NO LIFE" 슬로건의 굿즈와 스페셜티 커피가 유명합니다.',
        hours: '10:00~20:00',
        priceRange: '¥500~',
        mustTry: '드립 커피 + 오리지널 굿즈',
        imageQuery: 'NO COFFEE cafe Daimyo Fukuoka'
    },
    {
        name: '하코자키 소보로',
        lat: 33.6170,
        lng: 130.4260,
        region: '후쿠오카 시내',
        category: '카페',
        description: '후쿠오카에서 유명한 빵집 카페. 갓 구운 소보로빵과 크림빵이 오전에 품절되는 인기점입니다.',
        hours: '07:00~17:00 (품절 시 조기 마감)',
        priceRange: '¥300~',
        mustTry: '소보로빵 + 크림빵',
        imageQuery: 'Japanese bakery cafe Fukuoka bread'
    },
    {
        name: '무츠카도 카페',
        lat: 33.5880,
        lng: 130.3940,
        region: '텐진/나카스',
        category: '카페',
        description: '레트로 분위기의 다이묘 카페. 수제 푸딩과 나폴리탄 스파게티가 인기인 클래식 킷사텐 스타일입니다.',
        hours: '11:00~22:00',
        priceRange: '¥600~',
        mustTry: '가마쿠라 푸딩',
        imageQuery: 'Retro kissaten cafe Fukuoka pudding'
    },

    // ────────────────────────────────────────
    // 기타 (우동, 카레, 향토음식) — 3 places
    // ────────────────────────────────────────
    {
        name: '우에스트 우동 하카타역점',
        lat: 33.5892,
        lng: 130.4205,
        region: '하카타',
        category: '우동',
        description: '후쿠오카식 부드러운 우동 체인의 대표 브랜드. 하카타는 원래 라멘보다 우동의 고장이었습니다.',
        hours: '07:00~23:00',
        priceRange: '¥400~',
        mustTry: '고보텐 우동 (우엉튀김 우동)',
        imageQuery: 'Hakata udon noodles gobo tempura'
    },
    {
        name: '카레혼포 하카타역점',
        lat: 33.5896,
        lng: 130.4210,
        region: '하카타',
        category: '카레',
        description: '규슈 야채와 고기를 듬뿍 넣은 일본식 카레 전문점. 하카타역 지하에 위치해 접근성이 좋습니다.',
        hours: '11:00~22:00',
        priceRange: '¥800~',
        mustTry: '규슈 야채 카레',
        imageQuery: 'Japanese curry rice Hakata Fukuoka'
    },
    {
        name: '미즈타키 하카타 화선',
        lat: 33.5920,
        lng: 130.4080,
        region: '하카타',
        category: '향토음식',
        description: '후쿠오카 향토 요리 미즈타키(물닭국) 전문점. 백탁 닭국물에 신선한 닭고기를 퐁즈에 찍어 먹습니다.',
        hours: '17:00~22:00 (일요일 휴무)',
        priceRange: '¥3,500~',
        mustTry: '미즈타키 코스',
        imageQuery: 'Mizutaki chicken hot pot Hakata Fukuoka'
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
            cost: '260엔',
            frequency: '약 10분 간격',
            description: '국제선 터미널에서 직접 탑승 가능.'
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
            price: '1일권 1,050엔 (확장판 1,580엔)',
            coverage: '후쿠오카 시내 지하철, 버스 무제한 (확장판: 다자이후 포함)',
            recommended: '2박 이상 시내 관광 중심 여행',
            where: '하카타역, 텐진역 관광안내소'
        },
        {
            name: 'SUNQ 패스',
            price: '전 규슈 3일권 11,000엔 / 북부 규슈 3일권 9,000엔',
            coverage: '규슈 전역 고속버스 + 시내버스 무제한',
            recommended: '유후인, 벳푸 등 규슈 광역 여행',
            where: '하카타 버스터미널, 온라인 사전구매'
        },
        {
            name: 'JR 북부규슈 레일패스',
            price: '3일권 11,000엔 / 5일권 15,000엔',
            coverage: 'JR 규슈 북부 노선 (하카타~키타큐슈, 유후인, 벳푸 등)',
            recommended: '키타큐슈, 유후인, 벳푸 JR 이동 시',
            where: '하카타역 JR 티켓 오피스, 온라인'
        },
        {
            name: '니시테츠 버스 1일권',
            price: '900엔',
            coverage: '니시테츠 시내버스 무제한',
            recommended: '버스 3회 이상 이용 시',
            where: '니시테츠 텐진 고속버스터미널'
        },
        {
            name: 'FUKUOKA 1DAY PASS',
            price: '2,650엔',
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
                { method: '니시테츠 전철', duration: '약 40분', cost: '410엔', description: '텐진역 → 후츠카이치(환승) → 다자이후역. 관광열차 타비토(旅人)호 추천' },
                { method: '버스 (니시테츠)', duration: '약 40분', cost: '610엔', description: '하카타 버스터미널에서 직행 버스' }
            ]
        },
        {
            from: '하카타',
            to: '유후인',
            options: [
                { method: 'JR 특급 유후인노모리', duration: '약 2시간 15분', cost: '4,560엔', description: '하카타역 직행 관광열차. 예약 필수 (인기 많음)' },
                { method: '고속버스', duration: '약 2시간', cost: '2,900엔', description: '하카타 버스터미널에서 직행. SUNQ패스 이용 가능' }
            ]
        },
        {
            from: '하카타',
            to: '벳푸',
            options: [
                { method: 'JR 특급 소닉', duration: '약 2시간', cost: '5,580엔', description: '하카타역 직행. 30~60분 간격 운행' },
                { method: '고속버스', duration: '약 2시간 30분', cost: '3,250엔', description: '하카타 버스터미널에서 직행' }
            ]
        },
        {
            from: '하카타',
            to: '키타큐슈 (고쿠라)',
            options: [
                { method: '신칸센', duration: '약 15분', cost: '2,160엔', description: '가장 빠름. JR패스 이용 가능' },
                { method: 'JR 쾌속', duration: '약 1시간 20분', cost: '1,310엔', description: '저렴한 옵션. JR패스 이용 가능' }
            ]
        },
        {
            from: '하카타',
            to: '이토시마',
            options: [
                { method: 'JR 치쿠히선', duration: '약 35분', cost: '580엔', description: '하카타역 → 치쿠젠마에바루역. 이토시마 관광은 역에서 버스/렌터카 필요' },
                { method: '렌터카', duration: '약 40분', cost: '약 5,000엔~/일', description: '이토시마 내 이동이 자유로움. 가장 추천하는 방법' }
            ]
        },
        {
            from: '유후인',
            to: '벳푸',
            options: [
                { method: 'JR 보통열차', duration: '약 1시간', cost: '1,170엔', description: '유후인역 → 벳푸역' },
                { method: '버스', duration: '약 50분', cost: '1,000엔', description: '유후인 버스센터에서 가메노이 버스' }
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
        lat: 33.5898,
        lng: 130.4110,
        region: '하카타',
        type: '호텔',
        priceRange: '¥25,000~',
        priceCategory: 'premium',
        description: '캐널시티 하카타 직결 5성급 호텔. 최고급 시설과 서비스를 자랑합니다.',
        features: ['캐널시티 직결', '피트니스', '레스토랑', '룸서비스', '컨시어지'],
        nearAttractions: ['캐널시티 하카타', '쿠시다 신사', '나카스 야타이'],
        imageQuery: 'Grand Hyatt Fukuoka hotel'
    },
    {
        name: '호텔 닛코 후쿠오카',
        lat: 33.5900,
        lng: 130.4207,
        region: '하카타',
        type: '호텔',
        priceRange: '¥15,000~',
        priceCategory: 'mid',
        description: '하카타역 직결의 고급 호텔. 교통 접근성이 뛰어나며 비즈니스와 관광 모두에 편리합니다.',
        features: ['하카타역 직결', '조식 뷔페', '피트니스', '컨시어지', '공항 리무진 정차'],
        nearAttractions: ['하카타역', '캐널시티 하카타', '쿠시다 신사'],
        imageQuery: 'Hotel Nikko Fukuoka Hakata'
    },
    {
        name: 'JR규슈호텔 블로섬 하카타 중앙',
        lat: 33.5895,
        lng: 130.4200,
        region: '하카타',
        type: '호텔',
        priceRange: '¥10,000~',
        priceCategory: 'mid',
        description: '하카타역 바로 앞의 현대적인 비즈니스 호텔. 깔끔한 객실과 합리적인 가격이 장점입니다.',
        features: ['하카타역 도보 1분', '조식', '코인 세탁', 'Wi-Fi'],
        nearAttractions: ['하카타역', '캐널시티 하카타'],
        imageQuery: 'JR Kyushu Hotel Blossom Hakata'
    },
    {
        name: '도미인 하카타 기온',
        lat: 33.5905,
        lng: 130.4095,
        region: '하카타',
        type: '호텔',
        priceRange: '¥8,000~',
        priceCategory: 'mid',
        description: '옥상 천연 온천이 매력인 비즈니스 호텔. 무료 야식 라멘 서비스가 유명합니다.',
        features: ['옥상 천연온천', '무료 야식 라멘', '코인 세탁', 'Wi-Fi', '사우나'],
        nearAttractions: ['쿠시다 신사', '캐널시티 하카타', '나카스 야타이'],
        imageQuery: 'Dormy Inn Hakata Gion onsen'
    },
    {
        name: '위드 더 스타일 후쿠오카',
        lat: 33.5910,
        lng: 130.4155,
        region: '하카타',
        type: '호텔',
        priceRange: '¥20,000~',
        priceCategory: 'premium',
        description: '전 객실 16실의 부티크 호텔. 세련된 디자인과 옥상 풀, 프라이빗한 분위기가 특별합니다.',
        features: ['부티크 호텔', '옥상 수영장', '레스토랑', '바', '디자인 인테리어'],
        nearAttractions: ['하카타역', '캐널시티 하카타', '쿠시다 신사'],
        imageQuery: 'WITH THE STYLE Fukuoka boutique hotel'
    },
    {
        name: '하카타 그린 호텔 1호관',
        lat: 33.5915,
        lng: 130.4100,
        region: '하카타',
        type: '호텔',
        priceRange: '¥5,000~',
        priceCategory: 'budget',
        description: '쿠시다 신사 근처의 가성비 좋은 비즈니스 호텔. 깨끗하고 위치가 좋아 관광 거점으로 최적입니다.',
        features: ['Wi-Fi', '코인 세탁', '자동 체크인', '24시간 프론트'],
        nearAttractions: ['쿠시다 신사', '캐널시티 하카타', '하카타 마치야 후루사토관'],
        imageQuery: 'Hakata Green Hotel budget'
    },
    {
        name: '하카타 게스트하우스 타카타나',
        lat: 33.5888,
        lng: 130.4150,
        region: '하카타',
        type: '게스트하우스',
        priceRange: '¥3,000~',
        priceCategory: 'budget',
        description: '하카타역 도보 10분 거리의 아늑한 게스트하우스. 여행자들과 교류할 수 있는 라운지가 있습니다.',
        features: ['도미토리', '공용 라운지', '공용 주방', 'Wi-Fi', '짐 보관'],
        nearAttractions: ['하카타역', '스미요시 신사'],
        imageQuery: 'Hakata guesthouse hostel Fukuoka'
    },
    {
        name: '호스텔 히포 하카타',
        lat: 33.5878,
        lng: 130.4120,
        region: '하카타',
        type: '게스트하우스',
        priceRange: '¥3,500~',
        priceCategory: 'budget',
        description: '깔끔한 시설과 프라이버시 커튼이 있는 캡슐형 도미토리. 1인 여행자에게 인기입니다.',
        features: ['캡슐형 도미토리', '공용 주방', 'Wi-Fi', '짐 보관', '자전거 대여'],
        nearAttractions: ['캐널시티 하카타', '나카스 야타이'],
        imageQuery: 'Capsule hostel Hakata Fukuoka'
    },

    // ────────────────────────────────────────
    // 텐진 (Tenjin) — 5 accommodations
    // ────────────────────────────────────────
    {
        name: '솔라리아 니시테츠 호텔 후쿠오카',
        lat: 33.5893,
        lng: 130.3990,
        region: '텐진/나카스',
        type: '호텔',
        priceRange: '¥12,000~',
        priceCategory: 'mid',
        description: '텐진 지하상가 직결의 시티 호텔. 쇼핑과 교통의 중심지에 위치해 편리합니다.',
        features: ['텐진 지하상가 직결', '조식 뷔페', '레스토랑', 'Wi-Fi', '니시테츠 전철 연결'],
        nearAttractions: ['텐진 지하상가', '이와타야 백화점', '아크로스 후쿠오카'],
        imageQuery: 'Solaria Nishitetsu Hotel Fukuoka Tenjin'
    },
    {
        name: '니시테츠 인 텐진',
        lat: 33.5885,
        lng: 130.3975,
        region: '텐진/나카스',
        type: '호텔',
        priceRange: '¥7,000~',
        priceCategory: 'budget',
        description: '텐진 중심부의 합리적인 비즈니스 호텔. 니시테츠 그룹의 안정적인 서비스를 제공합니다.',
        features: ['텐진역 도보 3분', '조식', 'Wi-Fi', '코인 세탁', '자동 체크인'],
        nearAttractions: ['텐진 지하상가', '다이묘 에어리어', '텐진 중앙공원'],
        imageQuery: 'Nishitetsu Inn Tenjin budget hotel'
    },
    {
        name: '더 라이브리 후쿠오카',
        lat: 33.5875,
        lng: 130.3960,
        region: '텐진/나카스',
        type: '호텔',
        priceRange: '¥9,000~',
        priceCategory: 'mid',
        description: '다이묘 에어리어의 라이프스타일 호텔. 트렌디한 인테리어와 카페 라운지가 매력적입니다.',
        features: ['카페 라운지', '디자인 인테리어', 'Wi-Fi', '자전거 대여', '워크스페이스'],
        nearAttractions: ['다이묘 에어리어', '텐진 중앙공원', '텐진 지하상가'],
        imageQuery: 'The Lively Fukuoka lifestyle hotel'
    },
    {
        name: '니시테츠 그랜드 호텔',
        lat: 33.5890,
        lng: 130.3985,
        region: '텐진/나카스',
        type: '호텔',
        priceRange: '¥18,000~',
        priceCategory: 'premium',
        description: '텐진의 전통 명문 호텔. 1969년 개업 이래 후쿠오카의 대표 호텔로 사랑받고 있습니다.',
        features: ['레스토랑 3개', '바', '피트니스', '컨시어지', '연회장'],
        nearAttractions: ['텐진 지하상가', '이와타야 백화점', '아크로스 후쿠오카'],
        imageQuery: 'Nishitetsu Grand Hotel Fukuoka classic'
    },
    {
        name: '와이즈 아울 호스텔스 하카타',
        lat: 33.5920,
        lng: 130.4040,
        region: '텐진/나카스',
        type: '게스트하우스',
        priceRange: '¥3,200~',
        priceCategory: 'budget',
        description: '나카스 강변의 깨끗한 게스트하우스. 옥상 테라스에서 나카스 야경을 감상할 수 있습니다.',
        features: ['옥상 테라스', '도미토리/개인실', '공용 주방', 'Wi-Fi', '바 라운지'],
        nearAttractions: ['나카스 야타이', '하카타 리버레인', '캐널시티 하카타'],
        imageQuery: 'Wise Owl Hostels Hakata riverside'
    },

    // ────────────────────────────────────────
    // 유후인 (Yufuin) — 4 accommodations
    // ────────────────────────────────────────
    {
        name: '유후인 무소엔',
        lat: 33.2718,
        lng: 131.3738,
        region: '유후인',
        type: '료칸',
        priceRange: '¥30,000~',
        priceCategory: 'premium',
        description: '긴린코 호숫가에 위치한 최고급 료칸. 전 객실 노천 온천과 유후다케 조망을 갖추고 있습니다.',
        features: ['전 객실 노천온천', '긴린코 호숫가', '카이세키 요리', '유후다케 조망', '무료 셔틀'],
        nearAttractions: ['유후인 긴린코', '유노츠보 거리', '유후인 플로랄 빌리지'],
        imageQuery: 'Yufuin Musoen ryokan luxury onsen'
    },
    {
        name: '유후인 호나미노사토',
        lat: 33.2630,
        lng: 131.3615,
        region: '유후인',
        type: '료칸',
        priceRange: '¥15,000~',
        priceCategory: 'mid',
        description: '유후인역 근처의 정통 료칸. 가족 단위 노천온천과 지역 식재료를 활용한 요리가 좋습니다.',
        features: ['가족 노천온천', '가이세키 요리', '유후인역 도보 3분', '무료 주차'],
        nearAttractions: ['유후인 역', '유노츠보 거리', '유후인 긴린코'],
        imageQuery: 'Yufuin Honaminosato ryokan'
    },
    {
        name: '유후인 산쇼 료칸',
        lat: 33.2690,
        lng: 131.3690,
        region: '유후인',
        type: '료칸',
        priceRange: '¥20,000~',
        priceCategory: 'premium',
        description: '유노츠보 거리 근처의 전통 료칸. 수령 150년의 고민가를 활용한 독채 료칸으로 운치가 있습니다.',
        features: ['독채 스타일', '전용 노천온천', '고민가 건축', '가이세키 요리', '정원'],
        nearAttractions: ['유노츠보 거리', '유후인 플로랄 빌리지', '유후인 긴린코'],
        imageQuery: 'Yufuin traditional ryokan private onsen'
    },
    {
        name: '유후인 가든 호텔',
        lat: 33.2645,
        lng: 131.3630,
        region: '유후인',
        type: '호텔',
        priceRange: '¥10,000~',
        priceCategory: 'mid',
        description: '유후인역 도보 5분의 양식 호텔. 온천 대욕장과 유후다케 뷰가 있어 합리적인 유후인 숙박이 가능합니다.',
        features: ['온천 대욕장', '유후다케 뷰', '조식', 'Wi-Fi', '무료 주차'],
        nearAttractions: ['유후인 역', '유노츠보 거리'],
        imageQuery: 'Yufuin garden hotel mountain view'
    },

    // ────────────────────────────────────────
    // 벳푸 (Beppu) — 3 accommodations
    // ────────────────────────────────────────
    {
        name: '스기노이 호텔',
        lat: 33.3010,
        lng: 131.4750,
        region: '벳푸',
        type: '호텔',
        priceRange: '¥15,000~',
        priceCategory: 'mid',
        description: '벳푸만을 조망하는 대규모 리조트 호텔. 거대한 노천탕 "다나유"에서의 온천이 압권입니다.',
        features: ['대형 노천온천', '벳푸만 조망', '수영장', '뷔페 레스토랑', '무료 셔틀'],
        nearAttractions: ['벳푸 지옥 순례', '묘반 온천', '벳푸 타워'],
        imageQuery: 'Suginoi Hotel Beppu panoramic onsen'
    },
    {
        name: '벳푸 카메노이 호텔',
        lat: 33.2810,
        lng: 131.5010,
        region: '벳푸',
        type: '호텔',
        priceRange: '¥8,000~',
        priceCategory: 'mid',
        description: '벳푸역 근처의 클래식 온천 호텔. 1911년 창업의 역사를 가진 벳푸 대표 숙소입니다.',
        features: ['온천 대욕장', '벳푸역 도보 5분', '일본 정원', '조식 뷔페', '기념품샵'],
        nearAttractions: ['다케가와라 온천', '벳푸 타워', '벳푸 아쿠아마린'],
        imageQuery: 'Kamenoi Hotel Beppu classic onsen'
    },
    {
        name: '벳푸 게스트하우스 로쿠하치',
        lat: 33.2795,
        lng: 131.5025,
        region: '벳푸',
        type: '게스트하우스',
        priceRange: '¥3,500~',
        priceCategory: 'budget',
        description: '벳푸역 도보 3분의 아늑한 게스트하우스. 온천 순례를 위한 거점으로 여행자에게 인기입니다.',
        features: ['도미토리/개인실', '공용 주방', 'Wi-Fi', '온천 안내', '자전거 대여'],
        nearAttractions: ['다케가와라 온천', '벳푸 타워', '벳푸역'],
        imageQuery: 'Beppu guesthouse backpacker'
    },

    // ────────────────────────────────────────
    // 키타큐슈 (Kitakyushu) — 2 accommodations
    // ────────────────────────────────────────
    {
        name: '프리미어 호텔 모지코',
        lat: 33.9502,
        lng: 130.9610,
        region: '키타큐슈',
        type: '호텔',
        priceRange: '¥12,000~',
        priceCategory: 'mid',
        description: '모지코 레트로 지구 내 위치한 해변 호텔. 간몬 해협의 야경이 객실에서 감상됩니다.',
        features: ['간몬 해협 뷰', '레스토랑', '모지코 레트로 직결', 'Wi-Fi', '무료 주차'],
        nearAttractions: ['모지코 레트로 지구', '간몬 해협 인도 터널'],
        imageQuery: 'Premier Hotel Mojiko retro harbor'
    },
    {
        name: '리가 로얄 호텔 고쿠라',
        lat: 33.8838,
        lng: 130.8745,
        region: '키타큐슈',
        type: '호텔',
        priceRange: '¥10,000~',
        priceCategory: 'mid',
        description: '고쿠라성 근처의 시티 호텔. 고쿠라역 도보 5분으로 키타큐슈 관광 거점에 최적입니다.',
        features: ['고쿠라역 도보 5분', '레스토랑', '피트니스', 'Wi-Fi', '연회장'],
        nearAttractions: ['고쿠라성', '탄가 시장'],
        imageQuery: 'Rihga Royal Hotel Kokura Kitakyushu'
    },

    // ────────────────────────────────────────
    // 후쿠오카 시내 (Fukuoka City) — 2 accommodations
    // ────────────────────────────────────────
    {
        name: '힐튼 후쿠오카 시호크',
        lat: 33.5950,
        lng: 130.3530,
        region: '후쿠오카 시내',
        type: '호텔',
        priceRange: '¥18,000~',
        priceCategory: 'premium',
        description: '후쿠오카 타워 옆의 해변 리조트 호텔. PayPay 돔 직결로 야구 관전에도 편리합니다.',
        features: ['PayPay 돔 직결', '해변 뷰', '수영장', '피트니스', '레스토랑 5개'],
        nearAttractions: ['후쿠오카 타워', '모모치 해변', '마리노아시티'],
        imageQuery: 'Hilton Fukuoka Sea Hawk resort'
    },
    {
        name: '호텔 마리노아 리조트',
        lat: 33.5875,
        lng: 130.3230,
        region: '후쿠오카 시내',
        type: '호텔',
        priceRange: '¥8,000~',
        priceCategory: 'mid',
        description: '마리노아시티 아울렛 근처의 리조트 호텔. 대관람차 뷰와 쇼핑 접근성이 좋습니다.',
        features: ['마리노아시티 근접', '해변 뷰', '레스토랑', 'Wi-Fi', '무료 주차'],
        nearAttractions: ['마리노아시티 후쿠오카', '모모치 해변'],
        imageQuery: 'Marinoa resort hotel Fukuoka'
    },

    // ────────────────────────────────────────
    // 이토시마 (Itoshima) — 1 accommodation
    // ────────────────────────────────────────
    {
        name: '이토시마 비치 게스트하우스',
        lat: 33.5540,
        lng: 130.1760,
        region: '이토시마',
        type: '게스트하우스',
        priceRange: '¥4,000~',
        priceCategory: 'budget',
        description: '이토시마 해변 근처의 서퍼 친화적 게스트하우스. 해변까지 도보 3분으로 서핑과 바다를 즐기기에 최적입니다.',
        features: ['해변 도보 3분', '서핑보드 대여', '공용 주방', 'Wi-Fi', 'BBQ 시설'],
        nearAttractions: ['이토시마 해변', '런던버스 카페', '사쿠라이 후타미가우라'],
        imageQuery: 'Itoshima beach guesthouse surfing'
    }
];

// Expose data globals so planner.js (IIFE scope) can access them via window.*
window.locations = locations;
window.regionCenters = regionCenters;
window.restaurants = restaurants;
window.transportGuide = transportGuide;
window.accommodations = accommodations;
