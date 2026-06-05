// Set dark theme
document.documentElement.setAttribute('data-theme', 'dark');

// Initialize map centered on Fukuoka
const map = L.map('map').setView([33.59, 130.40], 10);

// Add CartoDB Light tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

// Create marker cluster group
const markers = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: false,
    disableClusteringAtZoom: 15,
    maxClusterRadius: 60
});

// Custom icons
const defaultIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const selectedIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

let currentSelectedMarker = null;
let allMarkers = [];

// Create markers from locations data
locations.forEach(location => {
    const marker = L.marker([location.lat, location.lng], { icon: defaultIcon })
        .bindPopup(location.name);

    marker.locationData = location;

    marker.on('click', function() {
        selectMarker(this);
        showSingleLocationDetails(location);
    });

    allMarkers.push(marker);
    markers.addLayer(marker);
});

// Handle cluster clicks
markers.on('clusterclick', function(cluster) {
    const childMarkers = cluster.layer.getAllChildMarkers();
    const locationsInCluster = childMarkers.map(m => m.locationData);
    displayClusterLocations(locationsInCluster);
    map.flyToBounds(cluster.layer.getBounds().pad(0.2), { duration: 1 });
});

map.addLayer(markers);

// Select marker function
function selectMarker(marker) {
    if (currentSelectedMarker) {
        currentSelectedMarker.setIcon(defaultIcon);
    }
    marker.setIcon(selectedIcon);
    currentSelectedMarker = marker;
    map.flyTo(marker.getLatLng(), 16, {
        duration: 1
    });
}

// Show single location details
function showSingleLocationDetails(location) {
    const welcomeMessage = document.querySelector('.welcome-message');
    const infoContent = document.getElementById('info-content');

    welcomeMessage.classList.add('hidden');
    infoContent.classList.remove('hidden');

    let detailsHTML = `
        <h2>${location.name}</h2>
        <p class="location-category">${location.region}</p>
        <p class="location-description">${location.description}</p>
    `;

    if (location.hours) {
        detailsHTML += `
            <div class="location-info">
                <strong>⏰ 운영시간:</strong> ${location.hours}
            </div>
        `;
    }

    if (location.admission) {
        detailsHTML += `
            <div class="location-info">
                <strong>💴 입장료:</strong> ${location.admission}
            </div>
        `;
    }

    if (location.website) {
        detailsHTML += `
            <div class="location-info">
                <strong>🌐 웹사이트:</strong> <a href="${location.website}" target="_blank" rel="noopener noreferrer">방문하기</a>
            </div>
        `;
    }

    detailsHTML += `
        <div class="location-actions">
            <a href="https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}"
               target="_blank"
               rel="noopener noreferrer"
               class="maps-link">
                📍 Google Maps에서 보기
            </a>
        </div>
    `;

    if (location.nearbyHotels && location.nearbyHotels.length > 0) {
        detailsHTML += `
            <div class="nearby-hotels">
                <h3>🏨 근처 추천 숙소</h3>
                <ul class="hotels-list">
        `;
        location.nearbyHotels.forEach(hotel => {
            detailsHTML += `
                <li>
                    <strong>${hotel.name}</strong>
                    ${hotel.distance ? ` - ${hotel.distance}` : ''}
                    ${hotel.price ? `<br><span class="hotel-price">${hotel.price}</span>` : ''}
                </li>
            `;
        });
        detailsHTML += `
                </ul>
            </div>
        `;
    }

    infoContent.innerHTML = detailsHTML;
}

// Display cluster locations
function displayClusterLocations(locationsInCluster) {
    const welcomeMessage = document.querySelector('.welcome-message');
    const infoContent = document.getElementById('info-content');

    welcomeMessage.classList.add('hidden');
    infoContent.classList.remove('hidden');

    let listHTML = `
        <h2>이 지역의 명소들 (${locationsInCluster.length}개)</h2>
        <div class="locations-list">
    `;

    locationsInCluster.forEach(location => {
        listHTML += `
            <div class="location-item" data-lat="${location.lat}" data-lng="${location.lng}">
                <h3>${location.name}</h3>
                <p class="location-category">${location.region}</p>
                <p class="location-description">${location.description}</p>
            </div>
        `;
    });

    listHTML += '</div>';
    infoContent.innerHTML = listHTML;

    // Add click handlers to location items
    document.querySelectorAll('.location-item').forEach(item => {
        item.addEventListener('click', function() {
            const lat = parseFloat(this.getAttribute('data-lat'));
            const lng = parseFloat(this.getAttribute('data-lng'));
            const location = locations.find(loc => loc.lat === lat && loc.lng === lng);
            const marker = allMarkers.find(m => m.locationData === location);

            if (marker) {
                selectMarker(marker);
                showSingleLocationDetails(location);
            }
        });
    });
}

// Display filtered locations list
function displayFilteredLocationsList(filter, searchTerm = '') {
    const welcomeMessage = document.querySelector('.welcome-message');
    const infoContent = document.getElementById('info-content');

    let filteredLocations = locations;

    if (filter !== '전체') {
        filteredLocations = locations.filter(loc => loc.region === filter);
    }

    if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        filteredLocations = filteredLocations.filter(loc =>
            loc.name.toLowerCase().includes(searchLower) ||
            loc.description.toLowerCase().includes(searchLower)
        );
    }

    if (filteredLocations.length === 0) {
        welcomeMessage.classList.add('hidden');
        infoContent.classList.remove('hidden');
        infoContent.innerHTML = `
            <h2>검색 결과</h2>
            <p>검색 결과가 없습니다.</p>
        `;
        return;
    }

    welcomeMessage.classList.add('hidden');
    infoContent.classList.remove('hidden');

    let listHTML = `
        <h2>${filter === '전체' ? '전체 명소' : filter} ${searchTerm ? `"${searchTerm}" 검색 결과` : ''} (${filteredLocations.length}개)</h2>
        <div class="locations-list">
    `;

    filteredLocations.forEach(location => {
        listHTML += `
            <div class="location-item" data-lat="${location.lat}" data-lng="${location.lng}">
                <h3>${location.name}</h3>
                <p class="location-category">${location.region}</p>
                <p class="location-description">${location.description}</p>
            </div>
        `;
    });

    listHTML += '</div>';
    infoContent.innerHTML = listHTML;

    // Add click handlers to location items
    document.querySelectorAll('.location-item').forEach(item => {
        item.addEventListener('click', function() {
            const lat = parseFloat(this.getAttribute('data-lat'));
            const lng = parseFloat(this.getAttribute('data-lng'));
            const location = locations.find(loc => loc.lat === lat && loc.lng === lng);
            const marker = allMarkers.find(m => m.locationData === location);

            if (marker) {
                selectMarker(marker);
                showSingleLocationDetails(location);
            }
        });
    });
}

// Filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');

        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Clear search
        document.getElementById('search-input').value = '';

        // Reset current selected marker
        if (currentSelectedMarker) {
            currentSelectedMarker.setIcon(defaultIcon);
            currentSelectedMarker = null;
        }

        // Filter markers
        markers.clearLayers();
        if (filter === '전체') {
            allMarkers.forEach(marker => markers.addLayer(marker));
            map.setView([33.59, 130.40], 10);
        } else {
            const filteredMarkers = allMarkers.filter(marker =>
                marker.locationData.region === filter
            );
            filteredMarkers.forEach(marker => markers.addLayer(marker));

            // Fly to region center
            if (regionCenters[filter]) {
                map.flyTo(regionCenters[filter].center, regionCenters[filter].zoom, {
                    duration: 1.5
                });
            }
        }

        // Display filtered list
        displayFilteredLocationsList(filter);
    });
});

// Search functionality
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim();
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');

    if (searchTerm === '') {
        // Reset to current filter
        markers.clearLayers();
        if (activeFilter === '전체') {
            allMarkers.forEach(marker => markers.addLayer(marker));
        } else {
            const filteredMarkers = allMarkers.filter(marker =>
                marker.locationData.region === activeFilter
            );
            filteredMarkers.forEach(marker => markers.addLayer(marker));
        }

        if (activeFilter === '전체') {
            const welcomeMessage = document.querySelector('.welcome-message');
            const infoContent = document.getElementById('info-content');
            welcomeMessage.classList.remove('hidden');
            infoContent.classList.add('hidden');
        } else {
            displayFilteredLocationsList(activeFilter);
        }
        return;
    }

    const searchLower = searchTerm.toLowerCase();
    let filteredLocations = locations.filter(loc =>
        loc.name.toLowerCase().includes(searchLower) ||
        loc.description.toLowerCase().includes(searchLower)
    );

    if (activeFilter !== '전체') {
        filteredLocations = filteredLocations.filter(loc => loc.region === activeFilter);
    }

    // Update markers
    markers.clearLayers();
    const filteredMarkers = allMarkers.filter(marker =>
        filteredLocations.includes(marker.locationData)
    );
    filteredMarkers.forEach(marker => markers.addLayer(marker));

    // Display results
    displayFilteredLocationsList(activeFilter, searchTerm);
});

// Click welcome message to reset
document.querySelector('.welcome-message').addEventListener('click', function() {
    // Reset filter to 전체
    filterButtons.forEach(btn => btn.classList.remove('active'));
    filterButtons[0].classList.add('active');

    // Clear search
    searchInput.value = '';

    // Reset markers
    if (currentSelectedMarker) {
        currentSelectedMarker.setIcon(defaultIcon);
        currentSelectedMarker = null;
    }

    markers.clearLayers();
    allMarkers.forEach(marker => markers.addLayer(marker));

    // Reset map view
    map.setView([33.59, 130.40], 10);

    // Show welcome message
    this.classList.remove('hidden');
    document.getElementById('info-content').classList.add('hidden');
});

// ============================================================
// Route Optimization - Nearest Neighbor Algorithm
// ============================================================

let routePolyline = null;
let routeNumberMarkers = [];

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function nearestNeighborRoute(points) {
    if (points.length <= 1) return points;
    const visited = [points[0]];
    const remaining = points.slice(1);
    while (remaining.length > 0) {
        const last = visited[visited.length - 1];
        let nearestIdx = 0;
        let nearestDist = Infinity;
        remaining.forEach((p, i) => {
            const d = calculateDistance(last.lat, last.lng, p.lat, p.lng);
            if (d < nearestDist) {
                nearestDist = d;
                nearestIdx = i;
            }
        });
        visited.push(remaining.splice(nearestIdx, 1)[0]);
    }
    return visited;
}

function showOptimizedRoute() {
    clearRoute();
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    let targetLocations = locations;
    if (activeFilter !== '전체') {
        targetLocations = locations.filter(loc => loc.region === activeFilter);
    }
    if (targetLocations.length < 2) {
        alert('경로를 표시하려면 2개 이상의 명소가 필요합니다. 지역을 선택해주세요.');
        return;
    }
    const optimized = nearestNeighborRoute([...targetLocations]);
    const latlngs = optimized.map(loc => [loc.lat, loc.lng]);

    routePolyline = L.polyline(latlngs, {
        color: '#10b981',
        weight: 4,
        opacity: 0.8,
        dashArray: '10, 8',
        smoothFactor: 1
    }).addTo(map);

    optimized.forEach((loc, idx) => {
        const icon = L.divIcon({
            className: '',
            html: `<div class="route-number-icon">${idx + 1}</div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 14]
        });
        const marker = L.marker([loc.lat, loc.lng], { icon: icon }).addTo(map);
        marker.bindPopup(`<strong>${idx + 1}. ${loc.name}</strong><br>소요시간: 약 ${loc.duration || 30}분`);
        routeNumberMarkers.push(marker);
    });

    map.fitBounds(routePolyline.getBounds().pad(0.1));

    // Calculate total distance and show info
    let totalDist = 0;
    for (let i = 1; i < optimized.length; i++) {
        totalDist += calculateDistance(optimized[i-1].lat, optimized[i-1].lng, optimized[i].lat, optimized[i].lng);
    }
    let totalVisitTime = optimized.reduce((sum, loc) => sum + (loc.duration || 30), 0);

    const infoContent = document.getElementById('info-content');
    const welcomeMessage = document.querySelector('.welcome-message');
    welcomeMessage.classList.add('hidden');
    infoContent.classList.remove('hidden');
    infoContent.innerHTML = `
        <h2>🗺️ 추천 경로 (${activeFilter})</h2>
        <div class="route-info-panel">
            <p><strong>총 ${optimized.length}곳</strong> | 이동 거리 약 ${totalDist.toFixed(1)}km | 관광 시간 약 ${Math.floor(totalVisitTime/60)}시간 ${totalVisitTime%60}분</p>
        </div>
        <div class="locations-list" style="margin-top: 1rem;">
            ${optimized.map((loc, idx) => `
                <div class="location-item" data-lat="${loc.lat}" data-lng="${loc.lng}" style="display: flex; gap: 0.75rem; align-items: flex-start;">
                    <div class="route-number-icon" style="flex-shrink: 0;">${idx + 1}</div>
                    <div>
                        <h3>${loc.name}</h3>
                        <p class="location-category">${loc.region}</p>
                        <p style="font-size: 0.85rem; color: var(--text-muted);">⏱ ${loc.duration || 30}분${idx < optimized.length - 1 ? ' → 다음 장소까지 약 ' + calculateDistance(loc.lat, loc.lng, optimized[idx+1].lat, optimized[idx+1].lng).toFixed(1) + 'km' : ''}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    document.querySelectorAll('.location-item').forEach(item => {
        item.addEventListener('click', function() {
            const lat = parseFloat(this.getAttribute('data-lat'));
            const lng = parseFloat(this.getAttribute('data-lng'));
            map.flyTo([lat, lng], 16, { duration: 1 });
        });
    });

    document.getElementById('clear-route-btn').classList.remove('hidden');
    document.getElementById('show-route-btn').classList.add('active');
}

function clearRoute() {
    if (routePolyline) {
        map.removeLayer(routePolyline);
        routePolyline = null;
    }
    routeNumberMarkers.forEach(m => map.removeLayer(m));
    routeNumberMarkers = [];
    document.getElementById('clear-route-btn').classList.add('hidden');
    document.getElementById('show-route-btn').classList.remove('active');
}

document.getElementById('show-route-btn').addEventListener('click', showOptimizedRoute);
document.getElementById('clear-route-btn').addEventListener('click', function() {
    clearRoute();
    const welcomeMessage = document.querySelector('.welcome-message');
    const infoContent = document.getElementById('info-content');
    welcomeMessage.classList.remove('hidden');
    infoContent.classList.add('hidden');
});

// ============================================================
// Layer Toggle - Restaurants & Hotels markers
// ============================================================

const restaurantIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
});

const hotelIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
});

let restaurantMarkerGroup = L.markerClusterGroup({
    spiderfyOnMaxZoom: true, showCoverageOnHover: false,
    zoomToBoundsOnClick: false, disableClusteringAtZoom: 15, maxClusterRadius: 60
});

let hotelMarkerGroup = L.markerClusterGroup({
    spiderfyOnMaxZoom: true, showCoverageOnHover: false,
    zoomToBoundsOnClick: false, disableClusteringAtZoom: 15, maxClusterRadius: 60
});

function initRestaurantMarkers() {
    if (typeof restaurants === 'undefined') return;
    restaurants.forEach(r => {
        const marker = L.marker([r.lat, r.lng], { icon: restaurantIcon })
            .bindPopup(`<strong>🍜 ${r.name}</strong><br>${r.category} | ${r.priceRange}`);
        marker.locationData = r;
        marker.on('click', function() {
            showRestaurantDetails(r);
        });
        restaurantMarkerGroup.addLayer(marker);
    });
}

function initHotelMarkers() {
    if (typeof accommodations === 'undefined') return;
    accommodations.forEach(a => {
        const marker = L.marker([a.lat, a.lng], { icon: hotelIcon })
            .bindPopup(`<strong>🏨 ${a.name}</strong><br>${a.type} | ${a.priceRange}`);
        marker.locationData = a;
        marker.on('click', function() {
            showAccommodationDetails(a);
        });
        hotelMarkerGroup.addLayer(marker);
    });
}

function showRestaurantDetails(r) {
    const welcomeMessage = document.querySelector('.welcome-message');
    const infoContent = document.getElementById('info-content');
    welcomeMessage.classList.add('hidden');
    infoContent.classList.remove('hidden');

    const imgSrc = window.imageSrc(r.imageQuery);

    infoContent.innerHTML = `
        ${imgSrc ? `<div class="location-image-container"><img src="${imgSrc}" alt="${r.name}" class="location-image" loading="lazy" onerror="this.closest('.location-image-container').style.display='none'"></div>` : ''}
        <h2>${r.name}</h2>
        <p><span class="restaurant-card-category">${r.category}</span></p>
        <p class="location-description">${r.description}</p>
        <div class="restaurant-card-must-try">⭐ 대표메뉴: ${r.mustTry}</div>
        <div class="location-info"><strong>⏰ 영업시간:</strong> ${r.hours}</div>
        <div class="location-info"><strong>💴 가격대:</strong> ${r.priceRange}</div>
        <div class="location-info"><strong>📍 지역:</strong> ${r.region}</div>
        <div class="location-actions">
            <a href="https://www.google.com/maps/search/?api=1&query=${r.lat},${r.lng}" target="_blank" rel="noopener noreferrer" class="maps-link">📍 Google Maps에서 보기</a>
        </div>
    `;
}

function showAccommodationDetails(a) {
    const welcomeMessage = document.querySelector('.welcome-message');
    const infoContent = document.getElementById('info-content');
    welcomeMessage.classList.add('hidden');
    infoContent.classList.remove('hidden');

    const imgSrc = window.imageSrc(a.imageQuery);
    const typeClass = a.type === '료칸' ? 'ryokan' : a.type === '게스트하우스' ? 'guesthouse' : 'hotel';

    infoContent.innerHTML = `
        ${imgSrc ? `<div class="location-image-container"><img src="${imgSrc}" alt="${a.name}" class="location-image" loading="lazy" onerror="this.closest('.location-image-container').style.display='none'"></div>` : ''}
        <h2>${a.name}</h2>
        <p><span class="accommodation-card-type ${typeClass}">${a.type}</span></p>
        <p class="accommodation-card-price">${a.priceRange}</p>
        <p class="location-description">${a.description}</p>
        ${a.features ? `<div class="accommodation-card-features">${a.features.map(f => `<span class="accommodation-feature-tag">${f}</span>`).join('')}</div>` : ''}
        ${a.nearAttractions ? `<div class="accommodation-card-nearby"><strong>근처 관광지:</strong> ${a.nearAttractions.join(', ')}</div>` : ''}
        <div class="location-actions">
            <a href="https://www.google.com/maps/search/?api=1&query=${a.lat},${a.lng}" target="_blank" rel="noopener noreferrer" class="maps-link">📍 Google Maps에서 보기</a>
        </div>
    `;
}

// Initialize extra layers
initRestaurantMarkers();
initHotelMarkers();

// Layer toggle event listeners
const layerToggles = document.querySelectorAll('.layer-toggle');
layerToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const layer = this.getAttribute('data-layer');
        this.classList.toggle('active');
        const isActive = this.classList.contains('active');

        if (layer === 'attractions') {
            if (isActive) {
                map.addLayer(markers);
            } else {
                map.removeLayer(markers);
            }
        } else if (layer === 'restaurants') {
            if (isActive) {
                map.addLayer(restaurantMarkerGroup);
            } else {
                map.removeLayer(restaurantMarkerGroup);
            }
        } else if (layer === 'hotels') {
            if (isActive) {
                map.addLayer(hotelMarkerGroup);
            } else {
                map.removeLayer(hotelMarkerGroup);
            }
        }
    });
});

// ============================================================
// Mobile Bottom Sheet
// ============================================================

(function initBottomSheet() {
    const infoPanel = document.getElementById('info-panel');
    const handle = document.querySelector('.bottom-sheet-handle');
    if (!handle || !infoPanel) return;

    let startY = 0;
    let startTranslate = 0;
    let isDragging = false;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    handle.addEventListener('touchstart', function(e) {
        if (!isMobile()) return;
        isDragging = true;
        startY = e.touches[0].clientY;
        const transform = window.getComputedStyle(infoPanel).transform;
        if (transform && transform !== 'none') {
            const matrix = new DOMMatrix(transform);
            startTranslate = matrix.m42;
        } else {
            startTranslate = 0;
        }
        infoPanel.style.transition = 'none';
    });

    handle.addEventListener('touchmove', function(e) {
        if (!isDragging || !isMobile()) return;
        const currentY = e.touches[0].clientY;
        const diff = currentY - startY;
        const newTranslate = Math.max(0, startTranslate + diff);
        infoPanel.style.transform = `translateY(${newTranslate}px)`;
        e.preventDefault();
    }, { passive: false });

    handle.addEventListener('touchend', function() {
        if (!isDragging || !isMobile()) return;
        isDragging = false;
        infoPanel.style.transition = 'transform 0.3s ease';
        const transform = window.getComputedStyle(infoPanel).transform;
        const matrix = new DOMMatrix(transform);
        const currentY = matrix.m42;
        const panelHeight = infoPanel.offsetHeight;

        if (currentY > panelHeight * 0.4) {
            infoPanel.style.transform = `translateY(calc(100% - 60px))`;
        } else {
            infoPanel.style.transform = 'translateY(0)';
        }
    });

    // Tap handle to toggle
    handle.addEventListener('click', function() {
        if (!isMobile()) return;
        const transform = window.getComputedStyle(infoPanel).transform;
        const matrix = new DOMMatrix(transform);
        const currentY = matrix.m42;
        infoPanel.style.transition = 'transform 0.3s ease';
        if (currentY > 30) {
            infoPanel.style.transform = 'translateY(0)';
        } else {
            infoPanel.style.transform = `translateY(calc(100% - 60px))`;
        }
    });
})();

// Add image to location details
const originalShowSingleLocationDetails = showSingleLocationDetails;
showSingleLocationDetails = function(location) {
    originalShowSingleLocationDetails(location);
    const infoContent = document.getElementById('info-content');
    const imgSrc = window.imageSrc(location.imageQuery);
    if (imgSrc) {
        const imgHTML = `<div class="location-image-container"><img src="${imgSrc}" alt="${location.name}" class="location-image" loading="lazy" onerror="this.closest('.location-image-container').style.display='none'"></div>`;
        infoContent.insertAdjacentHTML('afterbegin', imgHTML);
    }
};
