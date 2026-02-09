// ============================================================
// Fukuoka Travel Guide - data.js
// Global data: locations (50+), regionCenters
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
    '벳푸': { center: [33.2846, 131.4914], zoom: 14 }
};

// All tourist locations
const locations = [
    // ────────────────────────────────────────
    // 하카타 (Hakata) — 8 spots
    // ────────────────────────────────────────
    {
        name: '캐널시티 하카타',
        lat: 33.5898,
        lng: 130.4110,
        region: '하카타',
        description: '대형 복합 쇼핑몰. 운하를 따라 조성된 분수 쇼가 매시간 열리며, 면세점과 라멘 스타디움이 인기입니다.',
        hours: '10:00~21:00 (레스토랑 ~23:00)',
        admission: '무료',
        website: 'https://canalcity.co.jp/',
        duration: 120,
        childFriendly: true,
        nearbyHotels: [
            { name: '그랜드 하얏트 후쿠오카', distance: '직결', price: '¥25,000~/박' },
            { name: '도미인 하카타 기온', distance: '도보 5분', price: '¥8,000~/박' }
        ]
    },
    {
        name: '쿠시다 신사',
        lat: 33.5912,
        lng: 130.4095,
        region: '하카타',
        description: '하카타의 총 수호 신사. 757년 창건으로 기온 야마카사 축제(7월)의 거대 장식 수레가 상설 전시되어 있습니다.',
        hours: '04:00~22:00',
        admission: '무료 (박물관 300엔)',
        website: 'https://www.hakatayamakasa.com/',
        duration: 40,
        childFriendly: true,
        nearbyHotels: [
            { name: '하카타 그린 호텔', distance: '도보 3분', price: '¥6,500~/박' }
        ]
    },
    {
        name: '하카타역',
        lat: 33.5898,
        lng: 130.4207,
        region: '하카타',
        description: '후쿠오카의 관문. JR 하카타시티 내 아뮤플라자, 한큐백화점, 옥상 정원 등 쇼핑과 맛집이 밀집해 있습니다.',
        hours: '10:00~21:00 (상점)',
        admission: '무료',
        website: 'https://www.jrhakatacity.com/',
        duration: 90,
        childFriendly: true,
        nearbyHotels: [
            { name: '호텔 닛코 후쿠오카', distance: '직결', price: '¥15,000~/박' },
            { name: 'JR규슈호텔 블로섬 하카타', distance: '직결', price: '¥10,000~/박' }
        ]
    },
    {
        name: '하카타 마치야 후루사토관',
        lat: 33.5920,
        lng: 130.4120,
        region: '하카타',
        description: '하카타의 전통 문화와 역사를 체험할 수 있는 민속 자료관. 하카타오리 직조 체험도 가능합니다.',
        hours: '10:00~18:00 (수요일 휴관)',
        admission: '200엔',
        duration: 45,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '도초지 (동장사)',
        lat: 33.5928,
        lng: 130.4130,
        region: '하카타',
        description: '806년 창건된 일본 최초의 진언종 사찰. 일본 최대 크기의 목조 좌불상(높이 10.8m)이 인상적입니다.',
        hours: '09:00~17:00',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '하카타 리버레인',
        lat: 33.5935,
        lng: 130.4060,
        region: '하카타',
        description: '나카스강변의 복합 문화시설. 하카타좌 극장, 후쿠오카 아시아미술관이 입점해 있습니다.',
        hours: '10:00~20:00',
        admission: '무료 (미술관 200엔)',
        website: 'https://www.riverwalk.co.jp/',
        duration: 60,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '스미요시 신사',
        lat: 33.5850,
        lng: 130.4118,
        region: '하카타',
        description: '일본 전국 스미요시 신사의 시초. 항해 안전의 신을 모시며 독특한 스미요시즈쿠리 양식의 본전이 특징입니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 25,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '하카타 포트타워',
        lat: 33.6060,
        lng: 130.4020,
        region: '하카타',
        description: '하카타 부두에 위치한 빨간 타워. 전망대에서 하카타만과 시내 전경을 무료로 감상할 수 있습니다.',
        hours: '10:00~22:00',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        nearbyHotels: []
    },

    // ────────────────────────────────────────
    // 텐진/나카스 (Tenjin/Nakasu) — 7 spots
    // ────────────────────────────────────────
    {
        name: '나카스 야타이 (포장마차)',
        lat: 33.5940,
        lng: 130.4020,
        region: '텐진/나카스',
        description: '나카스강변에 늘어선 후쿠오카 명물 포장마차 거리. 라멘, 교자, 오뎅 등을 현지 분위기 속에서 즐길 수 있습니다.',
        hours: '18:00~02:00 (날씨에 따라 변동)',
        admission: '무료 (음식 별도)',
        duration: 60,
        childFriendly: false,
        nearbyHotels: [
            { name: '니시테츠 인 나카스', distance: '도보 2분', price: '¥7,000~/박' }
        ]
    },
    {
        name: '텐진 지하상가',
        lat: 33.5895,
        lng: 130.3990,
        region: '텐진/나카스',
        description: '일본 최대 규모의 지하 상점가. 150여 개의 패션, 잡화, 맛집이 입점하며 우천 시 쇼핑에 최적입니다.',
        hours: '10:00~20:00',
        admission: '무료',
        website: 'https://www.tenchika.com/',
        duration: 90,
        childFriendly: true,
        nearbyHotels: [
            { name: '솔라리아 니시테츠호텔', distance: '직결', price: '¥12,000~/박' }
        ]
    },
    {
        name: '아크로스 후쿠오카',
        lat: 33.5888,
        lng: 130.4035,
        region: '텐진/나카스',
        description: '건물 외벽 전체가 녹지로 덮인 독특한 건축물. "스텝 가든"은 옥상까지 76종 37,000그루의 식물이 자랍니다.',
        hours: '10:00~18:00 (정원 상시)',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '텐진 중앙공원',
        lat: 33.5880,
        lng: 130.4000,
        region: '텐진/나카스',
        description: '텐진 중심부의 도심 공원. 벚꽃 시즌에 아름답고 주변에 카페와 레스토랑이 많아 산책하기 좋습니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 20,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '다이묘 에어리어',
        lat: 33.5870,
        lng: 130.3920,
        region: '텐진/나카스',
        description: '후쿠오카의 트렌디한 카페, 빈티지 숍, 갤러리가 모인 거리. 젊은 층에게 인기인 힙한 동네입니다.',
        hours: '11:00~22:00 (점포별 상이)',
        admission: '무료',
        duration: 60,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '이와타야 백화점',
        lat: 33.5900,
        lng: 130.3975,
        region: '텐진/나카스',
        description: '텐진의 랜드마크 백화점. 지하 식품관의 디저트와 디파지가 유명하며 면세 쇼핑이 가능합니다.',
        hours: '10:00~20:00',
        admission: '무료',
        website: 'https://www.iwataya-mitsukoshi.co.jp/',
        duration: 60,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '기린 맥주 공장 후쿠오카',
        lat: 33.5780,
        lng: 130.3830,
        region: '텐진/나카스',
        description: '기린 맥주의 제조 과정을 견학하고 시음할 수 있는 공장 투어. 사전 예약 필수입니다.',
        hours: '09:30~16:00 (월요일 휴관)',
        admission: '무료 (예약 필수)',
        website: 'https://www.kirin.co.jp/',
        duration: 75,
        childFriendly: false,
        nearbyHotels: []
    },

    // ────────────────────────────────────────
    // 다자이후 (Dazaifu) — 6 spots
    // ────────────────────────────────────────
    {
        name: '다자이후 텐만구',
        lat: 33.5194,
        lng: 130.5348,
        region: '다자이후',
        description: '학문의 신 스가와라노 미치자네를 모신 신사. 매화꽃 6,000그루가 유명하고, 합격 기원으로 많은 학생이 방문합니다.',
        hours: '06:00~19:00 (계절별 변동)',
        admission: '무료 (보물전 500엔)',
        website: 'https://www.dazaifutenmangu.or.jp/',
        duration: 60,
        childFriendly: true,
        nearbyHotels: [
            { name: '다자이후 호텔', distance: '도보 10분', price: '¥8,000~/박' }
        ]
    },
    {
        name: '규슈국립박물관',
        lat: 33.5180,
        lng: 130.5400,
        region: '다자이후',
        description: '아시아 문화 교류의 역사를 전시하는 대형 박물관. 체험형 전시관 "아지파"는 아이들에게 인기입니다.',
        hours: '09:30~17:00 (월요일 휴관)',
        admission: '700엔',
        website: 'https://www.kyuhaku.jp/',
        duration: 90,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '고묘젠지 (광명선사)',
        lat: 33.5175,
        lng: 130.5320,
        region: '다자이후',
        description: '아름다운 이끼 정원(일광정원)으로 유명한 선종 사찰. 석정과 이끼가 어우러진 고즈넉한 명소입니다.',
        hours: '09:30~16:30',
        admission: '200엔',
        duration: 30,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '다자이후 참배길',
        lat: 33.5192,
        lng: 130.5330,
        region: '다자이후',
        description: '텐만구로 이어지는 참배길. 우메가에모치(매화떡), 기념품점, 스타벅스 구마 겐고 디자인 매장이 있습니다.',
        hours: '09:00~18:00 (점포별 상이)',
        admission: '무료',
        duration: 40,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '간젠지 (관세음사)',
        lat: 33.5200,
        lng: 130.5280,
        region: '다자이후',
        description: '일본 최고(最古)의 범종이 있는 사찰. 국보 범종은 698년 제작된 것으로 역사적 가치가 높습니다.',
        hours: '09:00~17:00',
        admission: '무료',
        duration: 25,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '다자이후 정청 유적',
        lat: 33.5160,
        lng: 130.5210,
        region: '다자이후',
        description: '7세기 고대 규슈 통치기관의 유적. 넓은 잔디밭에 초석이 남아있으며 역사공원으로 조성되어 있습니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        nearbyHotels: []
    },

    // ────────────────────────────────────────
    // 후쿠오카 시내 (Fukuoka City) — 9 spots
    // ────────────────────────────────────────
    {
        name: '후쿠오카 타워',
        lat: 33.5935,
        lng: 130.3515,
        region: '후쿠오카 시내',
        description: '234m 높이의 해변 타워. 123m 전망대에서 후쿠오카 시내와 하카타만을 360도 파노라마로 감상할 수 있습니다.',
        hours: '09:30~22:00',
        admission: '800엔',
        website: 'https://www.fukuokatower.co.jp/',
        duration: 45,
        childFriendly: true,
        nearbyHotels: [
            { name: '힐튼 후쿠오카 시호크', distance: '도보 5분', price: '¥18,000~/박' }
        ]
    },
    {
        name: '오호리 공원',
        lat: 33.5867,
        lng: 130.3780,
        region: '후쿠오카 시내',
        description: '후쿠오카의 센트럴파크. 호수 둘레길(약 2km) 산책, 일본 정원, 보트 등을 즐길 수 있습니다.',
        hours: '상시 개방 (정원 09:00~17:00)',
        admission: '무료 (일본정원 250엔)',
        duration: 60,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '후쿠오카성터 (마이즈루 공원)',
        lat: 33.5855,
        lng: 130.3835,
        region: '후쿠오카 시내',
        description: '구로다 가문이 축성한 후쿠오카성의 유적. 천수대에서 시내 전망이 좋고 벚꽃 명소로도 유명합니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 40,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '마리노아시티 후쿠오카',
        lat: 33.5870,
        lng: 130.3225,
        region: '후쿠오카 시내',
        description: '규슈 최대의 아울렛 쇼핑몰. 대관람차(높이 60m)와 브랜드 할인 매장 170여 개가 입점해 있습니다.',
        hours: '10:00~21:00',
        admission: '무료 (관람차 500엔)',
        website: 'https://www.marinoacity.com/',
        duration: 120,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '모모치 해변',
        lat: 33.5940,
        lng: 130.3460,
        region: '후쿠오카 시내',
        description: '후쿠오카 타워 앞 인공 해변. 여름철 해수욕과 비치 바, 일몰 풍경이 아름다운 도심 해변입니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 40,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '후쿠오카시 미술관',
        lat: 33.5860,
        lng: 130.3770,
        region: '후쿠오카 시내',
        description: '오호리 공원 내 위치한 미술관. 달리, 미로 등 근현대 미술 컬렉션과 기획전이 열립니다.',
        hours: '09:30~17:30 (월요일 휴관)',
        admission: '200엔 (기획전 별도)',
        website: 'https://www.fukuoka-art-museum.jp/',
        duration: 60,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '하카타 모츠나베 거리 (나기사마치)',
        lat: 33.5815,
        lng: 130.3950,
        region: '후쿠오카 시내',
        description: '후쿠오카 명물 모츠나베(곱창전골) 전문점 밀집 지역. 야마나카, 이치류 등 유명 맛집이 모여 있습니다.',
        hours: '17:00~23:00 (점포별 상이)',
        admission: '무료 (음식 별도)',
        duration: 60,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '후쿠오카시 동식물원',
        lat: 33.5730,
        lng: 130.3860,
        region: '후쿠오카 시내',
        description: '약 100종의 동물과 2,600종의 식물을 보유한 시립 동식물원. 가족 단위 방문에 최적입니다.',
        hours: '09:00~17:00 (월요일 휴관)',
        admission: '성인 600엔, 고교생 300엔, 중학생 이하 무료',
        website: 'https://zoo.city.fukuoka.lg.jp/',
        duration: 120,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '노코노시마 아일랜드파크',
        lat: 33.6300,
        lng: 130.3200,
        region: '후쿠오카 시내',
        description: '하카타만에 떠 있는 능고노시마 섬의 자연 공원. 계절 꽃밭과 체험 프로그램이 인기입니다. 페리 10분.',
        hours: '09:00~17:30 (계절별 변동)',
        admission: '1,200엔 (페리 별도 왕복 460엔)',
        website: 'https://nokonoshima.com/',
        duration: 180,
        childFriendly: true,
        nearbyHotels: []
    },

    // ────────────────────────────────────────
    // 이토시마 (Itoshima) — 6 spots
    // ────────────────────────────────────────
    {
        name: '사쿠라이 후타미가우라 (부부바위)',
        lat: 33.5670,
        lng: 130.1480,
        region: '이토시마',
        description: '바다 위에 솟은 두 개의 바위를 시메나와(금줄)로 연결한 이토시마의 상징. 일몰 풍경이 절경입니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '이토시마 해변 (후타미가하마)',
        lat: 33.5650,
        lng: 130.1520,
        region: '이토시마',
        description: '백사장이 아름다운 이토시마의 대표 해변. 여름 해수욕과 서핑, 비치 카페가 인기입니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 60,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '런던버스 카페',
        lat: 33.5510,
        lng: 130.1740,
        region: '이토시마',
        description: '빨간 2층 런던버스를 개조한 해변 카페. SNS 포토스팟으로 유명하며 해변 뷰가 환상적입니다.',
        hours: '11:00~일몰',
        admission: '무료 (음료 별도)',
        duration: 40,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '시라이토 폭포',
        lat: 33.4700,
        lng: 130.1950,
        region: '이토시마',
        description: '낙차 약 24m의 아름다운 폭포. 여름에는 시원한 물줄기와 소면 나가시(흘림 국수)를 즐길 수 있습니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 45,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '이토시마 팜파크',
        lat: 33.5400,
        lng: 130.2100,
        region: '이토시마',
        description: '이토시마 농산물 직거래 시장과 체험 농장. 신선한 과일 따기와 수제 소시지 만들기 체험이 가능합니다.',
        hours: '09:00~17:00',
        admission: '무료 (체험 별도)',
        duration: 60,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '라이징(RAIZAN) 센뇨지',
        lat: 33.4880,
        lng: 130.2540,
        region: '이토시마',
        description: '천년 이상의 역사를 가진 사찰. 가을 단풍과 500년 된 대은행나무(천연기념물)가 유명합니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        nearbyHotels: []
    },

    // ────────────────────────────────────────
    // 키타큐슈 (Kitakyushu) — 7 spots
    // ────────────────────────────────────────
    {
        name: '모지코 레트로 지구',
        lat: 33.9500,
        lng: 130.9615,
        region: '키타큐슈',
        description: '메이지/다이쇼 시대의 서양식 건축물이 보존된 항구 지역. 야키카레(구운 카레)가 명물입니다.',
        hours: '상시 개방 (시설별 09:00~17:00)',
        admission: '무료 (시설별 입장료)',
        website: 'https://www.mojiko.info/',
        duration: 120,
        childFriendly: true,
        nearbyHotels: [
            { name: '프리미어 호텔 모지코', distance: '도보 1분', price: '¥12,000~/박' }
        ]
    },
    {
        name: '간몬 해협 인도 터널',
        lat: 33.9585,
        lng: 130.9590,
        region: '키타큐슈',
        description: '규슈와 혼슈를 잇는 해저 터널(780m). 도보로 걸어서 현 경계를 넘는 독특한 체험이 가능합니다.',
        hours: '06:00~22:00',
        admission: '무료 (자전거/원동기 20엔)',
        duration: 30,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '고쿠라성',
        lat: 33.8834,
        lng: 130.8752,
        region: '키타큐슈',
        description: '1602년 축성된 고쿠라번의 거성. 복원된 천수각 내부에서 역사 자료를 관람하고 전망을 즐길 수 있습니다.',
        hours: '09:00~18:00 (11~3월 ~17:00)',
        admission: '350엔',
        duration: 45,
        childFriendly: true,
        nearbyHotels: [
            { name: '리가 로얄 호텔 고쿠라', distance: '도보 5분', price: '¥10,000~/박' }
        ]
    },
    {
        name: '탄가 시장',
        lat: 33.8820,
        lng: 130.8780,
        region: '키타큐슈',
        description: '120년 역사의 전통 재래시장. 약 120개 점포에서 신선한 해산물과 로컬 먹거리를 즐길 수 있습니다.',
        hours: '10:00~18:00 (일요일 일부 휴업)',
        admission: '무료 (음식 별도)',
        duration: 60,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '가와치 후지 가든',
        lat: 33.8370,
        lng: 130.7880,
        region: '키타큐슈',
        description: '등나무 터널로 세계적으로 유명한 정원. 4~5월 등나무 시즌에는 몽환적인 보라색 터널이 펼쳐집니다.',
        hours: '09:00~18:00 (계절별 변동)',
        admission: '1,500엔 (시즌에 따라 변동)',
        website: 'https://kawachi-fujien.com/',
        duration: 60,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '스페이스 월드 부지 (더 아울렛)',
        lat: 33.8830,
        lng: 130.8120,
        region: '키타큐슈',
        description: '구 스페이스 월드 부지에 오픈한 대형 아울렛몰. 170여 개 브랜드와 엔터테인먼트 시설이 있습니다.',
        hours: '10:00~20:00',
        admission: '무료',
        duration: 120,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '토바타 기온 야마카사 지역',
        lat: 33.9030,
        lng: 130.8350,
        region: '키타큐슈',
        description: '7월 토바타 기온 오오야마카사 축제의 중심지. 거대 장식 수레와 빛의 피라미드가 장관입니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        nearbyHotels: []
    },

    // ────────────────────────────────────────
    // 유후인 (Yufuin) — 7 spots
    // ────────────────────────────────────────
    {
        name: '유후인 긴린코 (금린호)',
        lat: 33.2715,
        lng: 131.3740,
        region: '유후인',
        description: '유후다케 산기슭의 작은 호수. 아침 안개가 피어오르는 환상적인 풍경으로 유명합니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        nearbyHotels: [
            { name: '무소엔', distance: '도보 1분', price: '¥30,000~/박' }
        ]
    },
    {
        name: '유노츠보 거리',
        lat: 33.2680,
        lng: 131.3680,
        region: '유후인',
        description: '유후인역에서 긴린코까지 이어지는 메인 거리. 카페, 잡화점, 갤러리가 줄지어 산책하기 좋습니다.',
        hours: '09:00~18:00 (점포별 상이)',
        admission: '무료',
        duration: 60,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '유후인 플로랄 빌리지',
        lat: 33.2685,
        lng: 131.3660,
        region: '유후인',
        description: '영국 코츠월드 마을을 재현한 테마 빌리지. 동화 속 같은 돌집과 전문 숍이 매력적입니다.',
        hours: '09:30~17:30',
        admission: '무료',
        duration: 40,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '유후다케 등산로',
        lat: 33.2830,
        lng: 131.3900,
        region: '유후인',
        description: '표고 1,583m의 유후다케 등산. 정상에서 유후인 분지와 벳푸만의 절경을 감상할 수 있습니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 240,
        childFriendly: false,
        nearbyHotels: []
    },
    {
        name: '유후인 온천 (시타유)',
        lat: 33.2660,
        lng: 131.3700,
        region: '유후인',
        description: '유후인의 족욕탕과 당일치기 온천. 유노츠보 거리 곳곳에서 부담 없이 온천을 체험할 수 있습니다.',
        hours: '10:00~22:00 (시설별 상이)',
        admission: '200~800엔 (시설별)',
        duration: 45,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '유후인 역',
        lat: 33.2625,
        lng: 131.3610,
        region: '유후인',
        description: '구로카와 기쇼 설계의 세련된 역사. 역 앞 족욕탕과 아트홀 갤러리가 특색 있습니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 15,
        childFriendly: true,
        nearbyHotels: [
            { name: '유후인 호나미노사토', distance: '도보 3분', price: '¥15,000~/박' }
        ]
    },
    {
        name: '유후인 스테인드글라스 미술관',
        lat: 33.2700,
        lng: 131.3660,
        region: '유후인',
        description: '유럽 교회의 스테인드글라스를 전시하는 미술관. 예배당 분위기의 내부가 이색적입니다.',
        hours: '09:00~18:00',
        admission: '1,000엔',
        duration: 40,
        childFriendly: true,
        nearbyHotels: []
    },

    // ────────────────────────────────────────
    // 벳푸 (Beppu) — 8 spots
    // ────────────────────────────────────────
    {
        name: '벳푸 지옥 순례 (우미지고쿠)',
        lat: 33.3195,
        lng: 131.4730,
        region: '벳푸',
        description: '코발트 블루색의 "바다 지옥". 98도의 열탕에서 피어오르는 증기가 장관인 벳푸 대표 온천 명소입니다.',
        hours: '08:00~17:00',
        admission: '450엔 (7곳 통합권 2,200엔)',
        website: 'https://www.beppu-jigoku.com/',
        duration: 30,
        childFriendly: true,
        nearbyHotels: [
            { name: '벳푸 호텔 우미카제', distance: '도보 10분', price: '¥12,000~/박' }
        ]
    },
    {
        name: '벳푸 지옥 순례 (치노이케)',
        lat: 33.3260,
        lng: 131.4790,
        region: '벳푸',
        description: '일본 최고(最古)의 천연 지옥. 붉은색 열탕이 피의 연못처럼 보여 "혈지옥"이라 불립니다.',
        hours: '08:00~17:00',
        admission: '450엔 (통합권 포함)',
        duration: 25,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '벳푸 지옥 순례 (카마도)',
        lat: 33.3200,
        lng: 131.4735,
        region: '벳푸',
        description: '가마솥 모양의 조형물이 인상적인 "가마솥 지옥". 족욕탕과 증기 찜질 체험을 즐길 수 있습니다.',
        hours: '08:00~17:00',
        admission: '450엔 (통합권 포함)',
        duration: 30,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '다케가와라 온천',
        lat: 33.2798,
        lng: 131.5020,
        region: '벳푸',
        description: '1879년 개설된 역사적인 공중 온천. 모래찜질 체험(스나유)이 유명하며 독특한 전통 건물입니다.',
        hours: '06:30~22:30 (모래찜질 08:00~)',
        admission: '300엔 (모래찜질 1,500엔)',
        duration: 60,
        childFriendly: false,
        nearbyHotels: []
    },
    {
        name: '벳푸 타워',
        lat: 33.2790,
        lng: 131.5005,
        region: '벳푸',
        description: '높이 100m의 벳푸 랜드마크. 전망대에서 벳푸만과 온천 증기가 피어오르는 시가지를 조망할 수 있습니다.',
        hours: '09:00~22:00',
        admission: '200엔',
        duration: 25,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '묘반 온천 유노하나 고야',
        lat: 33.3220,
        lng: 131.4520,
        region: '벳푸',
        description: '300년 전통의 유노하나(입욕제) 제조 오두막. 노천 온천 "묘반 유노사토"도 함께 즐길 수 있습니다.',
        hours: '10:00~19:00',
        admission: '600엔',
        duration: 45,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '시다카 전망대',
        lat: 33.2920,
        lng: 131.4580,
        region: '벳푸',
        description: '표고 350m에 위치한 전망 명소. 벳푸 시가지와 온천 증기의 야경이 아름답습니다.',
        hours: '상시 개방',
        admission: '무료',
        duration: 30,
        childFriendly: true,
        nearbyHotels: []
    },
    {
        name: '벳푸 아쿠아마린',
        lat: 33.2840,
        lng: 131.5050,
        region: '벳푸',
        description: '해양생물을 관람할 수 있는 수족관. 세이우치(바다코끼리) 쇼와 체험 프로그램이 가족에게 인기입니다.',
        hours: '09:00~18:00',
        admission: '성인 2,600엔, 어린이 1,300엔',
        website: 'https://www.umitamago.jp/',
        duration: 90,
        childFriendly: true,
        nearbyHotels: []
    }
];
