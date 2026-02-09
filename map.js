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
