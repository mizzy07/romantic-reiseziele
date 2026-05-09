const destinations = [
  {
    name: "Japan",
    region: "Kyoto, Tokio, Okinawa",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=82",
    season: "Mar – May / Sep – Nov",
    flightTime: "12h 30m",
    price: "€4,980",
    tags: ["Culture", "Romance"],
    rawTags: ["culture", "luxuswert"],
    pitch: "Temples, Onsen, cherry blossoms and quiet beach days in Okinawa.",
    activities: ["Onsen Spa", "Food Tour", "Temple walk", "Beach"],
    mustDo: ["Private Onsen night", "Kyoto at sunrise", "Okinawa island hopping"],
    romance: "Magical, elegant, unlike anything normal",
    thrill: "City lights, temples, food, island ending",
    costBreakdown: { flights: 1350, stay: 2200, activities: 700, food: 630, total: 4980 },
    vibeScore: 4.5
  },
  {
    name: "Thailand",
    region: "Krabi, Koh Lanta",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=82",
    season: "Nov – Apr",
    flightTime: "10h 30m",
    price: "€3,250",
    tags: ["Beach", "Adventure"],
    rawTags: ["strand", "abenteuer"],
    pitch: "Honeymoon vibes: Beach, spa, boat days, night markets.",
    activities: ["Longtail boat", "Couple Spa", "Snorkeling", "Streetfood"],
    mustDo: ["Private boat tour", "Jungle waterfall", "Night market date"],
    romance: "Warm, playful, sensual",
    thrill: "Islands, scooters, Thai food",
    costBreakdown: { flights: 1000, stay: 1400, activities: 400, food: 450, total: 3250 },
    vibeScore: 4
  },
  {
    name: "Punta Cana",
    region: "Caribbean",
    image: "./assets/destinations/punta-cana.jpg",
    season: "Dec – Apr",
    flightTime: "10h",
    price: "€3,950",
    tags: ["Beach", "All inclusive"],
    rawTags: ["strand", "luxuswert"],
    pitch: "Turquoise water, soft sand, completely uncomplicated relaxation.",
    activities: ["Sunset dinner", "Catamaran", "Beach riding", "Spa"],
    mustDo: ["Beach riding", "Saona Island", "Sunset Catamaran"],
    romance: "Tropical, soft, carefree",
    thrill: "Boats, music, Caribbean water",
    costBreakdown: { flights: 900, stay: 2400, activities: 350, food: 300, total: 3950 },
    vibeScore: 4
  },
  {
    name: "Zanzibar",
    region: "Tanzania",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=82",
    season: "Jun – Oct",
    flightTime: "8h 30m",
    price: "€4,300",
    tags: ["Beach", "Safari"],
    rawTags: ["strand", "abenteuer", "luxuswert"],
    pitch: "White beaches, spice island vibes, optional safari.",
    activities: ["Spice Tour", "Safari daytrip", "Dhow Sunset", "Snorkeling"],
    mustDo: ["Dhow Sunset", "Stone Town", "Spice Tour + Safari"],
    romance: "Exotic, warm, spicy",
    thrill: "Safari vibes, spices, Dhow",
    costBreakdown: { flights: 950, stay: 1800, activities: 650, food: 500, total: 3900 },
    vibeScore: 5
  },
  {
    name: "Paris",
    region: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=82",
    season: "Apr – Jun / Sep – Oct",
    flightTime: "3h 30m",
    price: "€2,250",
    tags: ["Romance", "Culture"],
    rawTags: ["luxuswert", "culture"],
    pitch: "Classic romance, boutique hotels, Seine, art, patisserie.",
    activities: ["Seine cruise", "Montmartre", "Fine Dining", "Museums"],
    mustDo: ["Seine at night", "Montmartre date", "Champagne evening"],
    romance: "Classic, elegant, cinematic",
    thrill: "Art, rooftops, patisserie",
    costBreakdown: { flights: 200, stay: 1200, activities: 300, food: 550, total: 2250 },
    vibeScore: 5
  },
  {
    name: "Greece / Crete",
    region: "Greece",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=82",
    season: "May – Oct",
    flightTime: "3h 30m",
    price: "€4,420",
    tags: ["Beach", "Romance"],
    rawTags: ["strand", "luxuswert"],
    pitch: "Sunsets, sea & timeless romance.",
    activities: ["Boat day", "Old-town", "Beach Club", "Sunset"],
    mustDo: ["Boat day to bays", "Sunset taverna", "Roadtrip"],
    romance: "Sunsets, sea, white houses",
    thrill: "Island hopping, beach clubs",
    costBreakdown: { flights: 860, stay: 2100, activities: 680, food: 560, total: 4420 },
    vibeScore: 5
  },
  {
    name: "Morocco",
    region: "Marrakech coast",
    image: "./assets/destinations/morocco.jpg",
    season: "Sep – Nov",
    flightTime: "3h 30m",
    price: "€2,900",
    tags: ["Culture", "Adventure"],
    rawTags: ["culture", "abenteuer"],
    pitch: "Riads, Hammam, desert, riding on the Atlantic.",
    activities: ["Hammam", "Desert dinner", "Riding", "Souks"],
    mustDo: ["Riad night", "Desert dinner", "Atlantic riding"],
    romance: "Oriental, fragrant, intense",
    thrill: "Souks, Hammam, desert",
    costBreakdown: { flights: 400, stay: 1500, activities: 500, food: 500, total: 2900 },
    vibeScore: 4.5
  },
  {
    name: "Albania Riviera",
    region: "Ksamil, Himare",
    image: "./assets/destinations/albania-riviera.jpg",
    season: "May – Sep",
    flightTime: "2h 15m",
    price: "€2,900",
    tags: ["Beach", "Nature"],
    rawTags: ["strand", "nature"],
    pitch: "Clear water, bays, roadtrip vibes.",
    activities: ["Bay roadtrip", "Boat", "Seafood", "Beach"],
    mustDo: ["Ksamil bays", "Himare roadtrip", "Seafood"],
    romance: "Young, wild, sunny",
    thrill: "Roadtrip, bays, clear water",
    costBreakdown: { flights: 300, stay: 1600, activities: 400, food: 600, total: 2900 },
    vibeScore: 4
  },
  {
    name: "Cape Verde",
    region: "Sal, Boa Vista",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=82",
    season: "Nov – Jun",
    flightTime: "6h",
    price: "€3,000",
    tags: ["Beach", "Relaxing"],
    rawTags: ["strand", "nature"],
    pitch: "Soft Atlantic beaches and easy island calm.",
    activities: ["Beach day", "Catamaran", "Spa", "Seafood"],
    mustDo: ["Sunset sail", "Beach picnic", "Salt lagoon swim"],
    romance: "Calm, sun-bleached, easy",
    thrill: "Atlantic waves, kite spots",
    costBreakdown: { flights: 700, stay: 1500, activities: 400, food: 400, total: 3000 },
    vibeScore: 4
  },
  {
    name: "Madeira",
    region: "Portugal",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8334b4?auto=format&fit=crop&w=1200&q=82",
    season: "Apr – Oct",
    flightTime: "4h",
    price: "€3,100",
    tags: ["Nature", "Adventure"],
    rawTags: ["nature", "abenteuer"],
    pitch: "Cliffs, levadas, ocean pools and quiet luxury.",
    activities: ["Levada hike", "Ocean pool", "Wine tasting", "Cable car"],
    mustDo: ["Sunrise at Pico do Arieiro", "Funchal old town", "Levada walk"],
    romance: "Misty mountains, ocean cliffs",
    thrill: "Hikes, viewpoints, atlantic vibes",
    costBreakdown: { flights: 500, stay: 1600, activities: 500, food: 500, total: 3100 },
    vibeScore: 4
  },
  {
    name: "Sri Lanka",
    region: "Galle, Ella, Mirissa",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=82",
    season: "Dec – Mar",
    flightTime: "10h",
    price: "€4,450",
    tags: ["Culture", "Nature", "Safari"],
    rawTags: ["culture", "abenteuer", "nature"],
    pitch: "Tea hills, beaches, ancient cities and gentle wildlife.",
    activities: ["Tea-train ride", "Safari", "Surf lesson", "Temple visit"],
    mustDo: ["Train Kandy → Ella", "Safari Yala", "Mirissa beach day"],
    romance: "Lush, slow, soulful",
    thrill: "Trains, jungle, surf",
    costBreakdown: { flights: 950, stay: 2000, activities: 800, food: 700, total: 4450 },
    vibeScore: 4.5
  },
  {
    name: "Egypt Red Sea",
    region: "Hurghada, El Gouna",
    image: "./assets/destinations/egypt-red-sea.jpg",
    season: "Mar – May / Sep – Nov",
    flightTime: "4h",
    price: "€3,150",
    tags: ["Beach", "Snorkeling"],
    rawTags: ["strand", "luxuswert"],
    pitch: "Warm sea, coral reefs, palm-lined coves.",
    activities: ["Snorkeling", "Desert tour", "Spa", "Catamaran"],
    mustDo: ["Reef snorkel", "Sunset desert", "Lazy beach day"],
    romance: "Warm, sun-soaked, easy",
    thrill: "Reefs, desert, water sports",
    costBreakdown: { flights: 500, stay: 1700, activities: 500, food: 450, total: 3150 },
    vibeScore: 4
  }
];

const carousel = document.getElementById('destinationCarousel');
const heroSummary = document.getElementById('heroSummary');
const itineraryDetails = document.getElementById('itineraryDetails');
const itineraryDropdownName = document.getElementById('itineraryDropdownName');
const budgetBars = document.getElementById('budgetBars');
const shortlistCandidates = document.getElementById('shortlistCandidates');
const shortlistBadge = document.getElementById('shortlistBadge');
const compareThumbs = document.getElementById('compareThumbs');
const compareTable = document.getElementById('compareTable');
const compareBadge = document.getElementById('compareBadge');

const liked = new Set(["Greece / Crete", "Japan", "Zanzibar"]);
let currentVibeFilter = "all";
let activeDestination = destinations.find(d => d.name === "Greece / Crete") || destinations[0];

// Vibe Filters
document.querySelectorAll('#vibeFilters .filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('#vibeFilters .filter-btn').forEach(b => b.classList.remove('is-active'));
    e.currentTarget.classList.add('is-active');
    currentVibeFilter = e.currentTarget.dataset.filter || "all";
    renderCarousel();
  });
});

function renderCarousel() {
  carousel.innerHTML = "";
  
  const filtered = destinations.filter(d => currentVibeFilter === "all" || d.rawTags.includes(currentVibeFilter));
  
  filtered.forEach((dest, index) => {
    const isLiked = liked.has(dest.name);
    const card = document.createElement('div');
    card.className = 'dest-card';
    card.innerHTML = `
      <div class="dest-img-wrap">
        <img src="${dest.image}" alt="${dest.name}" loading="${index < 3 ? 'eager' : 'lazy'}">
        <button class="card-heart ${isLiked ? 'is-liked' : ''}" data-name="${dest.name}">
          <svg viewBox="0 0 24 24" fill="${isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div class="dest-info">
        <div class="dest-title-row">
          <h3>${dest.name}</h3>
          <span class="dest-price">${dest.price}</span>
        </div>
        <span class="dest-tags">${dest.tags.join(', ')}</span>
        <div class="dest-meta">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          ${dest.flightTime}
        </div>
      </div>
    `;
    
    card.querySelector('.card-heart').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLike(dest.name);
    });
    
    card.addEventListener('mouseenter', () => setActiveDestination(dest));
    
    carousel.appendChild(card);
  });
}

function toggleLike(name) {
  if (liked.has(name)) {
    liked.delete(name);
  } else {
    liked.add(name);
  }
  renderCarousel();
  renderShortlist();
  renderCompare();
}

function setActiveDestination(dest) {
  activeDestination = dest;
  
  // Update Hero Summary
  heroSummary.innerHTML = `
    <div class="summary-content">
      <span class="region-label">${dest.name.toUpperCase()}</span>
      <h2>${dest.pitch}</h2>
      <button class="primary-action-btn">View this destination <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
    </div>
    <div class="pagination">
      <button><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
      <span>1 / ${destinations.length}</span>
      <button><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
    </div>
  `;
  
  // Update Itinerary
  itineraryDropdownName.innerHTML = `${dest.name} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
  itineraryDetails.innerHTML = `
    <img src="${dest.image}" alt="${dest.name}">
    <div class="day-info">
      <h4>Day 1 – Arrival & settle in</h4>
      <p>Land in ${dest.region} and enjoy a private transfer. Unwind and toast to the adventure ahead.</p>
      <ul class="day-highlights">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path></svg> Private transfer</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle></svg> Sunset dinner</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg> Boutique stay</li>
      </ul>
      <div class="day-cost">
        <span>Estimated cost for day</span>
        <strong>€${Math.round(dest.costBreakdown.stay / 7 + 100)}</strong>
      </div>
    </div>
  `;
}

function renderShortlist() {
  const count = liked.size;
  shortlistBadge.textContent = count;
  compareBadge.textContent = count;
  
  const picks = destinations.filter(d => liked.has(d.name)).slice(0, 4);
  shortlistCandidates.innerHTML = picks.map(d => `
    <div class="candidate">
      <img src="${d.image}" alt="${d.name}">
      <div class="info">
        <strong>${d.name}</strong>
        <span>Our pick</span>
      </div>
      <button class="vote-btn voted" onclick="toggleLike('${d.name}')">
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> 
        Vote
      </button>
    </div>
  `).join('');
}

function renderCompare() {
  const picks = destinations.filter(d => liked.has(d.name)).slice(0, 3);
  
  // Render Thumbs
  compareThumbs.innerHTML = picks.map(d => `
    <div class="thumb-card">
      <button class="remove-btn" onclick="toggleLike('${d.name}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
      <img src="${d.image}" alt="${d.name}">
      <span>${d.name}</span>
    </div>
  `).join('');

  if (picks.length === 0) {
    compareTable.innerHTML = `<p style="padding:20px;text-align:center;color:var(--muted)">No destinations selected for comparison.</p>`;
    budgetBars.innerHTML = '';
    return;
  }

  // Render Table
  const renderRow = (label, key, isHearts = false) => {
    return `
      <div class="table-row">
        <span class="row-label">${label}</span>
        ${picks.map(d => {
          if (isHearts) {
            const full = Math.floor(d.vibeScore);
            const half = d.vibeScore % 1 !== 0;
            const empty = 5 - full - (half ? 1 : 0);
            return `<span class="hearts-score">${'♥'.repeat(full)}${half ? '♥' : ''}<span class="empty-heart">${'♥'.repeat(empty)}</span></span>`;
          }
          if (key === 'total') return `<span>${d.price}</span>`;
          if (key === 'flightTime') return `<span>${d.flightTime}</span>`;
          if (key === 'season') return `<span>${d.season}</span>`;
          return `<span>€${d.costBreakdown[key]}</span>`;
        }).join('')}
      </div>
    `;
  };

  compareTable.innerHTML = `
    ${renderRow('Total (for 2)', 'total')}
    ${renderRow('Flights', 'flights')}
    ${renderRow('Stay (7 nights)', 'stay')}
    ${renderRow('Activities', 'activities')}
    ${renderRow('Food', 'food')}
    ${renderRow('Best time to go', 'season')}
    ${renderRow('Flight time', 'flightTime')}
    ${renderRow('Vibe match', 'vibeScore', true)}
  `;

  // Render Budget Chart
  const maxTotal = 5000;
  budgetBars.innerHTML = picks.map(d => {
    const c = d.costBreakdown;
    const pF = (c.flights / maxTotal) * 100;
    const pS = (c.stay / maxTotal) * 100;
    const pA = (c.activities / maxTotal) * 100;
    const pFo = (c.food / maxTotal) * 100;
    
    return `
      <div class="bar-group">
        <span class="bar-total">${d.price}</span>
        <div class="stacked-bar">
          <div class="bar-segment" style="height: ${pF}%; background: var(--chart-1);"></div>
          <div class="bar-segment" style="height: ${pS}%; background: var(--chart-2);"></div>
          <div class="bar-segment" style="height: ${pA}%; background: var(--chart-3);"></div>
          <div class="bar-segment" style="height: ${pFo}%; background: var(--chart-4);"></div>
        </div>
        <span class="bar-label">${d.name.replace(' / ', '<br>')}</span>
      </div>
    `;
  }).join('');
}

// Initialize
renderCarousel();
setActiveDestination(activeDestination);
renderShortlist();
renderCompare();
