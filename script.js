const destinations = [
  {
    name: "Japan",
    region: "Kyoto, Tokio, Okinawa",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=82",
    season: "August: lebendig und heiß · September: ruhiger",
    flight: "lang",
    score: "9.1",
    tags: ["abenteuer", "luxuswert"],
    pitch: "Tempel, Onsen, Kirschblüten und als Finale ein paar ruhige Strandtage auf Okinawa.",
    activities: ["Onsen-Spa", "Food-Tour", "Tempelwalk", "Okinawa-Strand"],
    mustDo: ["Private Onsen-Nacht", "Kyoto bei Sonnenaufgang", "Okinawa-Inselhopping"],
    romance: "Magisch, elegant, anders als alles Normale",
    thrill: "Stadtlichter, Tempel, Food, Inselabschluss"
  },
  {
    name: "Thailand",
    region: "Krabi, Koh Lanta, Chiang Mai",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=82",
    season: "August bis Mitte September: am besten Golfinseln",
    flight: "lang",
    score: "9.5",
    tags: ["strand", "abenteuer", "luxuswert"],
    pitch: "Viel Honeymoon-Gefühl: Strand, Spa, Bootstage, Nachtmärkte und Elefanten-Schutzgebiet.",
    activities: ["Private Longtail-Bootstour", "Couple Spa", "Schnorcheln", "Streetfood"],
    mustDo: ["Private Bootstour", "Dschungel-Wasserfall", "Nachtmarkt-Date"],
    romance: "Warm, verspielt, sinnlich und sehr vielseitig",
    thrill: "Inseln, Scooter, Thai Food, Wasserfälle"
  },
  {
    name: "Punta Cana",
    region: "Dominikanische Republik",
    image: "./assets/destinations/punta-cana.jpg",
    season: "August bis Mitte September: tropisch, warm, flexibel planen",
    flight: "lang",
    score: "8.8",
    tags: ["strand", "luxuswert"],
    pitch: "All-inclusive, türkises Wasser, weicher Sand und sehr unkompliziert, wenn Erholung das Hauptziel ist.",
    activities: ["Sunset-Dinner", "Katamaran", "Reiten am Strand", "Spa"],
    mustDo: ["Reiten am Strand", "Saona Island", "Katamaran bei Sunset"],
    romance: "Tropisch, weich, sorglos und sehr honeymoonig",
    thrill: "Boot, Musik, Strandritte, Karibik-Wasser"
  },
  {
    name: "Zanzibar",
    region: "Tansania",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=82",
    season: "August bis Mitte September: sehr gute Reisezeit",
    flight: "mittel",
    score: "9.3",
    tags: ["strand", "abenteuer", "luxuswert"],
    pitch: "Weiße Strände, Gewürzinsel-Vibes, Stone Town und optional Safari auf dem Festland.",
    activities: ["Spice Tour", "Safari-Daytrip", "Dhow Sunset", "Schnorcheln"],
    mustDo: ["Dhow Sunset Cruise", "Stone Town", "Spice Tour + Safari Blue"],
    romance: "Exotisch, warm, würzig und besonders",
    thrill: "Safari-Gefühl, Gewürze, Dhow, Mnemba-Schnorcheln"
  },
  {
    name: "Paris",
    region: "Frankreich",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=82",
    season: "Ende August bis Mitte September: romantisch",
    flight: "kurz",
    score: "8.6",
    tags: ["kurzflug"],
    pitch: "Klassische Romantik mit Boutique-Hotel, Seine, Kunst, Patisserie und vielleicht Champagne als Extra.",
    activities: ["Seine-Abendfahrt", "Montmartre", "Fine Dining", "Museumstag"],
    mustDo: ["Seine bei Nacht", "Montmartre-Date", "Champagne-Abend"],
    romance: "Klassisch, elegant, filmisch",
    thrill: "Kunst, Rooftops, Patisserie, Nachtspaziergänge"
  },
  {
    name: "Griechenland",
    region: "Kreta, Naxos, Paros",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=82",
    season: "Ende August bis Mitte September: perfekt",
    flight: "kurz",
    score: "9.2",
    tags: ["strand", "kurzflug", "luxuswert"],
    pitch: "Sonnenuntergänge, Inselhopping, klares Wasser und romantische Tavernen ohne Santorini-Premium.",
    activities: ["Bootstag", "Altstadtbummel", "Beach Club", "Sonnenuntergang"],
    mustDo: ["Bootstag zu Buchten", "Sunset-Taverne", "Naxos oder Kreta Roadtrip"],
    romance: "Sonnenuntergang, Meer, weiße Häuser, Tavernen",
    thrill: "Inselhopping, Beach Clubs, kleine Dörfer"
  },
  {
    name: "Albanische Riviera",
    region: "Ksamil, Himare, Saranda",
    image: "./assets/destinations/albania-riviera.jpg",
    season: "Ende August bis Mitte September: stark",
    flight: "kurz",
    score: "9.0",
    tags: ["strand", "kurzflug", "luxuswert"],
    pitch: "Klares Wasser, Buchten, Roadtrip-Gefühl und eine noch etwas geheimere Alternative zu vielen Mittelmeerinseln.",
    activities: ["Buchten-Roadtrip", "Boot", "Seafood", "Ksamil-Strand"],
    mustDo: ["Ksamil-Buchten", "Himare Roadtrip", "Seafood am Wasser"],
    romance: "Jung, wild, sonnig und überraschend schön",
    thrill: "Roadtrip, Buchtenjagd, klares Wasser"
  },
  {
    name: "Kap Verde",
    region: "Sal oder Boa Vista",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=82",
    season: "September: sonnig, windig, entspannt",
    flight: "mittel",
    score: "8.7",
    tags: ["strand", "luxuswert"],
    pitch: "Viel Sonne, lange Strände, gute Pauschalangebote und entspannte Resorts ohne Fernost-Fluglänge.",
    activities: ["Quad-Tour", "Reiten", "Stranddinner", "Schildkröten-Saison"],
    mustDo: ["Quad durch Dünen", "Reiten am Meer", "Schildkröten-Nacht"],
    romance: "Weite, Sonne, lange Strandtage",
    thrill: "Dünen, Wind, Quad, Schildkröten"
  },
  {
    name: "Madeira",
    region: "Portugal",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82",
    season: "August bis Mitte September: sehr schön",
    flight: "kurz",
    score: "8.9",
    tags: ["abenteuer", "kurzflug", "luxuswert"],
    pitch: "Nicht der klassische Sandstrand, aber unfassbar schön: Klippen, Naturpools, Walbeobachtung und Boutique-Hotels.",
    activities: ["Walbeobachtung", "Naturpools", "Levada-Walk", "Sunset-Drive"],
    mustDo: ["Walbeobachtung", "Naturpools", "Sunset Drive"],
    romance: "Dramatisch, grün, luxuriös natürlich",
    thrill: "Klippen, Meer, Wanderungen, Naturpools"
  },
  {
    name: "Sri Lanka",
    region: "Südküste, Ella, Yala",
    image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=82",
    season: "August bis Mitte September: Ostküste wählen",
    flight: "lang",
    score: "9.4",
    tags: ["strand", "abenteuer", "luxuswert"],
    pitch: "Strand, Teeberge, Zugfahrt und Safari in einem Trip. Sehr romantisch, aber abwechslungsreicher als reiner Resorturlaub.",
    activities: ["Safari", "Teeplantagen", "Zugfahrt", "Surfstrand"],
    mustDo: ["Yala Safari", "Zugfahrt durch Teeberge", "Ostküsten-Strand"],
    romance: "Abenteuerlich, weich, grün und wild",
    thrill: "Safari, Zug, Teeberge, Surfstrände"
  },
  {
    name: "Ägypten Red Sea",
    region: "Marsa Alam, El Gouna",
    image: "./assets/destinations/egypt-red-sea.jpg",
    season: "September: warmes Meer, sehr sonnig",
    flight: "kurz",
    score: "8.5",
    tags: ["strand", "kurzflug", "luxuswert"],
    pitch: "Kurzer Flug, tolle Resorts, Hausriffe, warme Abende und mit Glück Delfine oder Wüstentour.",
    activities: ["Schnorcheln", "Wüstendinner", "Spa", "Bootsausflug"],
    mustDo: ["Hausriff-Schnorcheln", "Wüstendinner", "Boot zu Delfinen"],
    romance: "Warm, einfach, Meer direkt vor der Tür",
    thrill: "Korallen, Wüste, Boot, Sternenhimmel"
  },
  {
    name: "Marokko",
    region: "Marrakesch, Essaouira, Agafay",
    image: "./assets/destinations/morocco.jpg",
    season: "September: besser als Hochsommer",
    flight: "kurz",
    score: "8.8",
    tags: ["abenteuer", "kurzflug", "luxuswert"],
    pitch: "Riads, Hammam, Wüste, Reiten am Atlantik und orientalische Abende mit kurzer Anreise.",
    activities: ["Hammam", "Agafay-Dinner", "Reiten", "Souks"],
    mustDo: ["Riad-Nacht", "Agafay-Wüstendinner", "Reiten am Atlantik"],
    romance: "Orientalisch, duftend, intensiv",
    thrill: "Souks, Hammam, Wüste, Pferde"
  }
];

const grid = document.querySelector("#destinationGrid");
const compareList = document.querySelector("#compareList");
const drawerCount = document.querySelector("#drawerCount");
const drawerThumbs = document.querySelector("#drawerThumbs");
const drawerTable = document.querySelector("#drawerTable");
const previewName = document.querySelector("#previewName");
const miniPlan = document.querySelector("#miniPlan");
const mustdoList = document.querySelector("#mustdoList");
const vibeCard = document.querySelector("#vibeCard");
const shortlistItems = document.querySelector("#shortlistItems");
const matchCount = document.querySelector("#matchCount");
const spotlight = document.querySelector("#spotlight");
const liked = new Set(["Griechenland", "Japan", "Zanzibar"]);
let currentFilter = "all";
let activeDestination = destinations.find((destination) => destination.name === "Griechenland") || destinations[0];

function renderCards() {
  grid.innerHTML = "";
  let visible = 0;

  destinations.forEach((destination, index) => {
    const isVisible = currentFilter === "all" || destination.tags.includes(currentFilter);
    if (isVisible) visible += 1;

    const article = document.createElement("article");
    article.className = `destination-card${isVisible ? "" : " is-hidden"}`;
    article.innerHTML = `
      <div class="card-image">
        <img src="${destination.image}" alt="${destination.name} romantisches Reiseziel" loading="${index < 3 ? "eager" : "lazy"}" onerror="this.closest('.card-image').classList.add('image-failed')">
        <button class="heart${liked.has(destination.name) ? " is-liked" : ""}" type="button" aria-label="${destination.name} merken" data-like="${destination.name}">♥</button>
      </div>
      <div class="card-body">
        <div class="card-title">
          <h3>${destination.name}</h3>
          <span class="score">${destination.score}</span>
        </div>
        <div class="card-meta">
          <span>${destination.region}</span>
          <span>${destination.season}</span>
        </div>
        <p>${destination.pitch}</p>
        <div class="activity-tags">
          ${destination.activities.map((activity) => `<span>${activity}</span>`).join("")}
        </div>
      </div>
    `;

    article.addEventListener("mouseenter", () => setActiveDestination(destination));
    article.addEventListener("focusin", () => setActiveDestination(destination));
    grid.appendChild(article);
  });

  matchCount.textContent = `${visible} Treffer`;
}

function setActiveDestination(destination) {
  activeDestination = destination;
  updateSpotlight(destination);
  renderPreview(destination);
}

function updateSpotlight(destination) {
  spotlight.innerHTML = `
    <img alt="" src="${destination.image}" onerror="this.closest('.spotlight').classList.add('image-failed')">
    <div>
      <span>Aktueller Favorit</span>
      <strong>${destination.name}</strong>
      <p>${destination.pitch}</p>
    </div>
  `;
}

function renderPreview(destination) {
  previewName.textContent = destination.name;
  miniPlan.innerHTML = `
    <div><span>Tag 1</span><strong>Ankommen</strong><p>${destination.region}</p></div>
    <div><span>Tag 2-3</span><strong>Romantik</strong><p>${destination.romance}</p></div>
    <div><span>Tag 4-6</span><strong>Action</strong><p>${destination.thrill}</p></div>
    <div><span>Finale</span><strong>Lieblingsmoment</strong><p>${destination.mustDo[0]}</p></div>
  `;
  mustdoList.innerHTML = destination.mustDo.map((item, index) => `
    <div><span>0${index + 1}</span><strong>${item}</strong></div>
  `).join("");
  vibeCard.innerHTML = `
    <img src="${destination.image}" alt="${destination.name}">
    <div>
      <strong>${destination.name}</strong>
      <p>${destination.pitch}</p>
      <span>${destination.activities.join(" · ")}</span>
    </div>
  `;
}

function renderComparison() {
  const picks = destinations.filter((destination) => liked.has(destination.name));
  drawerCount.textContent = String(picks.length);
  drawerThumbs.innerHTML = picks.slice(0, 3).map((destination) => `
    <figure>
      <img src="${destination.image}" alt="${destination.name}">
      <figcaption>${destination.name}</figcaption>
    </figure>
  `).join("");
  drawerTable.innerHTML = picks.slice(0, 3).map((destination) => `
    <div>
      <span>${destination.name}</span>
      <strong>${destination.season}</strong>
      <small>${destination.activities.slice(0, 2).join(" · ")}</small>
    </div>
  `).join("") || `<p>Noch keine Favoriten gewählt.</p>`;
  shortlistItems.innerHTML = picks.slice(0, 4).map((destination) => `
    <button type="button" data-jump="${destination.name}">
      <img src="${destination.image}" alt="">
      <span>${destination.name}</span>
      <strong>♥</strong>
    </button>
  `).join("") || `<span class="shortlist-empty">Noch keine Favoriten</span>`;

  if (!picks.length) {
    compareList.innerHTML = `<div class="empty-state">Noch keine Favoriten. Klick auf die Herzen bei den Zielen, die euch sofort anlächeln.</div>`;
    return;
  }

  compareList.innerHTML = picks.map((destination) => `
    <article class="compare-item">
      <strong>${destination.name}</strong>
      <span>${destination.season}</span>
      <span>${destination.activities.slice(0, 3).join(" · ")}</span>
    </article>
  `).join("");
}

document.querySelectorAll(".chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("is-active"));
    button.classList.add("is-active");
    currentFilter = button.dataset.filter;
    renderCards();
  });
});

document.addEventListener("click", (event) => {
  const jump = event.target.closest("[data-jump]");
  if (jump) {
    const destination = destinations.find((item) => item.name === jump.dataset.jump);
    if (destination) setActiveDestination(destination);
    document.querySelector("#top").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const button = event.target.closest("[data-like]");
  if (!button) return;
  const name = button.dataset.like;
  if (liked.has(name)) {
    liked.delete(name);
  } else {
    liked.add(name);
  }
  renderCards();
  renderComparison();
});

document.querySelector("#surpriseMe").addEventListener("click", () => {
  const pool = destinations.filter((destination) => currentFilter === "all" || destination.tags.includes(currentFilter));
  const destination = pool[Math.floor(Math.random() * pool.length)];
  setActiveDestination(destination);
  document.querySelector("#ziele").scrollIntoView({ behavior: "smooth", block: "start" });
});

renderCards();
renderComparison();
renderPreview(activeDestination);
