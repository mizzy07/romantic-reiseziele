/* Für Maryem ♥ — Eine kleine Liebes-App von Mika. */

const destinations = [
  { name: "Japan", region: "Kyoto · Tokio · Okinawa", country: "Japan", image: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=82", season: "März – Mai · Sept – Nov", flightTime: "12h 30m", flightBucket: "long", tags: ["Kultur", "Romantik"], rawTags: ["culture", "luxuswert"], pitch: "Kirschblüten, leise Tempel, heiße Onsen — und am Ende ein paar Strandtage auf Okinawa.", why: "Als ob wir in einem Studio Ghibli-Film leben würden. Ich seh dich schon mit Kirschblüten im Haar.", quote: "„Wo der Tee dampft, vergisst die Zeit ihr Tempo.\"", mustDo: ["Kyoto bei Sonnenaufgang", "Privater Onsen-Abend", "Okinawa-Strandtag"], days: [{ tag: "Tag 1", title: "Ankommen in Tokio", desc: "Wir landen, kuscheln im Boutique-Hotel und essen Sushi an einer winzigen Bar.", chips: ["Sushi-Bar", "Skyline-Sicht", "Ruhe"] }, { tag: "Tag 2-3", title: "Kyoto, Hand in Hand", desc: "Tempel, Bambuswald, kleine Gassen — und der Onsen am Abend.", chips: ["Bambuswald", "Privater Onsen", "Tempel"] }, { tag: "Tag 4-6", title: "Okinawa-Strände", desc: "Türkisblaues Wasser, Schnorcheln, langsame Tage am Meer.", chips: ["Strand", "Schnorcheln", "Sunset"] }, { tag: "Finale", title: "Tokio-Lichter", desc: "Eine letzte Nacht in der Stadt — Skyline, Drinks, du.", chips: ["Skyline-Bar", "Spaziergang", "Abschied"] }], vibeScore: 4.5 },
  { name: "Thailand", region: "Krabi · Koh Lanta", country: "Thailand", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=82", season: "Nov – Apr", flightTime: "10h 30m", flightBucket: "long", tags: ["Strand", "Abenteuer"], rawTags: ["strand", "abenteuer"], pitch: "Honeymoon-Stimmung: weiße Strände, Longtailboote, Spa und Nachtmärkte.", why: "Du, ich, ein Boot und nirgendwo zu sein. Genau das.", quote: "„Manchmal ist das Meer der einzige Ort, der laut genug ist für unsere Stille.\"", mustDo: ["Privates Boot zu den Inseln", "Dschungel-Wasserfall", "Nachtmarkt-Date"], days: [{ tag: "Tag 1", title: "Ankommen in Krabi", desc: "Transfer zum Strand, Cocktails bei Sonnenuntergang.", chips: ["Sunset", "Cocktail", "Strand"] }, { tag: "Tag 2-3", title: "Inseln aus dem Boot", desc: "Privates Longtail-Boot zu versteckten Buchten.", chips: ["Boot", "Bucht", "Schnorcheln"] }, { tag: "Tag 4-6", title: "Dschungel & Spa", desc: "Wasserfall am Morgen, Couple-Spa am Abend.", chips: ["Wasserfall", "Spa", "Massage"] }, { tag: "Finale", title: "Nachtmarkt-Abschied", desc: "Streetfood, Lichter, deine Hand in meiner.", chips: ["Streetfood", "Lichter", "Romantik"] }], vibeScore: 4 },
  { name: "Punta Cana", region: "Dominikanische Republik", country: "Karibik", image: "./assets/destinations/punta-cana.jpg", season: "Dez – Apr", flightTime: "10h", flightBucket: "long", tags: ["Strand", "All-inclusive"], rawTags: ["strand", "luxuswert"], pitch: "Türkises Wasser, weicher Sand — komplett unkompliziertes Glück.", why: "Wir machen nichts. Wir machen alles. Wir machen uns. So.", quote: "„Karibik — wo das Meer dich umarmt wie ich.\"", mustDo: ["Reiten am Strand", "Saona Island", "Sunset-Catamaran"], days: [{ tag: "Tag 1", title: "Ankommen am Meer", desc: "Resort-Check-in, Welcome-Cocktail, erster Schritt im Sand.", chips: ["Cocktail", "Sand", "Sunset"] }, { tag: "Tag 2-3", title: "Saona Island", desc: "Bootstour zu der Insel, die aussieht wie ein Bildschirmschoner.", chips: ["Boot", "Insel", "Schwimmen"] }, { tag: "Tag 4-6", title: "Reiten & Spa", desc: "Sonnenaufgang am Strand, Pferde, am Abend Couple-Spa.", chips: ["Pferde", "Strand", "Spa"] }, { tag: "Finale", title: "Catamaran-Sunset", desc: "Letzter Abend auf dem Wasser, Champagner, Sterne.", chips: ["Champagner", "Sterne", "Wasser"] }], vibeScore: 4 },
  { name: "Sansibar", region: "Tansania", country: "Tansania", image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=82", season: "Jun – Okt", flightTime: "8h 30m", flightBucket: "medium", tags: ["Strand", "Safari"], rawTags: ["strand", "abenteuer", "luxuswert"], pitch: "Weiße Strände, Gewürzinsel-Vibe — und auf Wunsch Safari.", why: "Strand, Safari, Sterne. Drei S, eine Maryem.", quote: "„Wo die Gewürze duften, atmet das Herz tiefer.\"", mustDo: ["Dhow im Sonnenuntergang", "Stone Town", "Spice + Safari"], days: [{ tag: "Tag 1", title: "Ankommen in Stone Town", desc: "Spaziergang durch alte Gassen, Dachterrasse zum Sunset.", chips: ["Stone Town", "Dachterrasse", "Sunset"] }, { tag: "Tag 2-3", title: "Gewürze & Strand", desc: "Spice Tour am Vormittag, Strand am Nachmittag.", chips: ["Gewürze", "Strand", "Massage"] }, { tag: "Tag 4-6", title: "Mini-Safari", desc: "Tagesausflug zur Safari, abends zurück ans Meer.", chips: ["Safari", "Wildlife", "Lodge"] }, { tag: "Finale", title: "Dhow im Sunset", desc: "Letzte Bootstour, alter Holzsegler, Champagner.", chips: ["Dhow", "Champagner", "Sterne"] }], vibeScore: 5 },
  { name: "Paris", region: "Frankreich", country: "Frankreich", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=82", season: "Apr – Jun · Sept – Okt", flightTime: "1h 50m", flightBucket: "short", tags: ["Romantik", "Kultur"], rawTags: ["luxuswert", "culture"], pitch: "Klassische Romantik — Boutique-Hotels, Seine, Patisserie und Champagner.", why: "Weil ich seit immer mit dir auf der Pont Neuf stehen wollte.", quote: "„Paris ist nicht die Stadt der Liebe. Du bist es.\"", mustDo: ["Eiffelturm bei Nacht", "Montmartre-Date", "Champagner-Abend"], days: [{ tag: "Tag 1", title: "Ankommen in Paris", desc: "Boutique-Hotel im Marais, Spaziergang an der Seine.", chips: ["Marais", "Seine", "Wein"] }, { tag: "Tag 2-3", title: "Kunst & Cafés", desc: "Louvre, Orsay, Croissants in einem winzigen Café.", chips: ["Louvre", "Café", "Croissant"] }, { tag: "Tag 4-6", title: "Montmartre & Sterne", desc: "Hügel, kleine Gassen, Künstler, Wein.", chips: ["Montmartre", "Sacré-Cœur", "Wein"] }, { tag: "Finale", title: "Eiffelturm bei Nacht", desc: "Champagner, Lichter, du. Ende Film.", chips: ["Eiffelturm", "Champagner", "Nacht"] }], vibeScore: 5 },
  { name: "Griechenland / Kreta", region: "Kreta", country: "Griechenland", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=82", season: "Mai – Okt", flightTime: "3h 30m", flightBucket: "short", tags: ["Strand", "Romantik"], rawTags: ["strand", "luxuswert"], pitch: "Sonnenuntergänge, Meer & zeitlose Romantik — weiße Häuser, blaue Kuppeln.", why: "Ich versprech dir den Sonnenuntergang, wenn du mir den Tag versprichst.", quote: "„Die Ägäis trägt die Farbe deiner Augen.\"", mustDo: ["Bootstag in versteckten Buchten", "Sunset-Taverne", "Roadtrip"], days: [{ tag: "Tag 1", title: "Ankommen in Heraklion", desc: "Privater Transfer zum Boutique-Hotel am Meer. Sunset-Dinner.", chips: ["Privater Transfer", "Sunset-Dinner", "Boutique-Hotel"] }, { tag: "Tag 2-3", title: "Altstadt & Sunsets", desc: "Spaziergang durch die alten Gassen, kleine Tavernen, blaue Kuppeln.", chips: ["Altstadt", "Tavernen", "Sunset"] }, { tag: "Tag 4-6", title: "Bootstag", desc: "Privates Boot, versteckte Buchten, Picknick auf dem Wasser.", chips: ["Boot", "Bucht", "Picknick"] }, { tag: "Finale", title: "Sunset & Abschied", desc: "Letzte Sunset-Taverne, Wein, alles in deinen Augen.", chips: ["Sunset", "Wein", "Abschied"] }], vibeScore: 5 },
  { name: "Marokko", region: "Marrakesch · Atlantikküste", country: "Marokko", image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=82", season: "Sep – Nov", flightTime: "3h 30m", flightBucket: "short", tags: ["Kultur", "Abenteuer"], rawTags: ["culture", "abenteuer"], pitch: "Riads, Hammam, Wüste — und Reiten am Atlantik.", why: "Tausendundeine Nacht, aber wir sind die Geschichte.", quote: "„In der Wüste hört man das Herz deutlicher.\"", mustDo: ["Riad-Abend", "Wüsten-Dinner", "Reiten am Atlantik"], days: [{ tag: "Tag 1", title: "Riad in Marrakesch", desc: "Ankommen, Innenhof, Tee, Stille mitten im Trubel.", chips: ["Riad", "Tee", "Innenhof"] }, { tag: "Tag 2-3", title: "Souks & Hammam", desc: "Verlauf dich mit mir in den Souks. Abends Hammam.", chips: ["Souks", "Hammam", "Tee"] }, { tag: "Tag 4-6", title: "Wüste", desc: "Fahrt in die Wüste, Dinner unter Sternen, Camp.", chips: ["Wüste", "Sterne", "Camp"] }, { tag: "Finale", title: "Atlantik & Pferde", desc: "An der Küste reiten, Wellen, Salz, Sonnenuntergang.", chips: ["Atlantik", "Pferde", "Sunset"] }], vibeScore: 4.5 },
  { name: "Albanische Riviera", region: "Ksamil · Himare", country: "Albanien", image: "./assets/destinations/albania-riviera.jpg", season: "Mai – Sept", flightTime: "2h 15m", flightBucket: "short", tags: ["Strand", "Natur"], rawTags: ["strand", "nature"], pitch: "Klares Wasser, Buchten, Roadtrip-Vibe.", why: "Wenig Plan, viel wir. Wie früher, nur besser.", quote: "„Manche Buchten sind so still, dass man Liebe hört.\"", mustDo: ["Ksamil-Buchten", "Himare-Roadtrip", "Seafood am Hafen"], days: [{ tag: "Tag 1", title: "Ankommen in Saranda", desc: "Mietwagen, Küstenstraße, erste Bucht.", chips: ["Roadtrip", "Bucht", "Sunset"] }, { tag: "Tag 2-3", title: "Ksamil-Inseln", desc: "Klares Wasser, Schwimmen, frische Meeresfrüchte.", chips: ["Inseln", "Schwimmen", "Seafood"] }, { tag: "Tag 4-6", title: "Himare-Küste", desc: "Weiterfahrt nach Norden, versteckte Strände, Tavernen.", chips: ["Strände", "Tavernen", "Klippen"] }, { tag: "Finale", title: "Hafen-Abend", desc: "Frischer Fisch, lokaler Wein, am Hafen.", chips: ["Hafen", "Fisch", "Wein"] }], vibeScore: 4 },
  { name: "Kap Verde", region: "Sal · Boa Vista", country: "Kap Verde", image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=82", season: "Nov – Jun", flightTime: "6h", flightBucket: "medium", tags: ["Strand", "Entspannt"], rawTags: ["strand", "nature"], pitch: "Atlantik-Strände, Insel-Ruhe, Salz in der Luft.", why: "Hier hat das Meer kein Ende. Wir auch nicht.", quote: "„Salz, Sonne, deine Hand. Das reicht.\"", mustDo: ["Sunset-Sail", "Strand-Picknick", "Salz-Lagune"], days: [{ tag: "Tag 1", title: "Ankommen auf Sal", desc: "Resort am Meer, Welcome-Drink, Sand zwischen den Zehen.", chips: ["Resort", "Welcome", "Sand"] }, { tag: "Tag 2-3", title: "Strand-Tage", desc: "Faulenzen, schwimmen, lesen, du.", chips: ["Strand", "Buch", "Schwimmen"] }, { tag: "Tag 4-6", title: "Catamaran & Spa", desc: "Bootstour bei Sunset, am nächsten Tag Spa.", chips: ["Boot", "Sunset", "Spa"] }, { tag: "Finale", title: "Salz-Lagune", desc: "Schweben in der Lagune, Sand, Sonne.", chips: ["Lagune", "Schweben", "Sonne"] }], vibeScore: 4 },
  { name: "Madeira", region: "Portugal", country: "Portugal", image: "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=1200&q=82", season: "Apr – Okt", flightTime: "4h", flightBucket: "short", tags: ["Natur", "Abenteuer"], rawTags: ["nature", "abenteuer"], pitch: "Klippen, Levadas, Ozean-Pools — leise Eleganz im Atlantik.", why: "Ein Ort, an dem die Berge sich ins Meer verlieben.", quote: "„Jeder Pfad eine Geschichte, jede Aussicht ein Heiratsantrag.\"", mustDo: ["Sonnenaufgang Pico do Arieiro", "Funchal Altstadt", "Levada-Walk"], days: [{ tag: "Tag 1", title: "Funchal Altstadt", desc: "Bunte Türen, Wein, Aussicht auf den Hafen.", chips: ["Altstadt", "Wein", "Hafen"] }, { tag: "Tag 2-3", title: "Levada-Walks", desc: "Sanfte Wanderungen entlang der Wasserkanäle, Lorbeerwald.", chips: ["Levada", "Wasserfall", "Lorbeerwald"] }, { tag: "Tag 4-6", title: "Ozean-Pools", desc: "Schwimmen in natürlichen Pools, Atlantik direkt daneben.", chips: ["Ozean", "Pool", "Sunset"] }, { tag: "Finale", title: "Pico do Arieiro", desc: "Sonnenaufgang über den Wolken. Stille. Du.", chips: ["Sunrise", "Wolken", "Gipfel"] }], vibeScore: 4 },
  { name: "Sri Lanka", region: "Galle · Ella · Mirissa", country: "Sri Lanka", image: "https://images.unsplash.com/photo-1583249598754-b7a2f59651fb?auto=format&fit=crop&w=1200&q=82", season: "Dez – März", flightTime: "10h", flightBucket: "long", tags: ["Kultur", "Natur"], rawTags: ["culture", "abenteuer", "nature"], pitch: "Tee-Hügel, Strände, alte Städte und sanfte Wildnis.", why: "Bollywood-Tea-Train. Du am Fenster. Wind im Haar.", quote: "„Der Zug fährt langsam genug, dass man verlieben kann.\"", mustDo: ["Train Kandy → Ella", "Safari Yala", "Mirissa Beach"], days: [{ tag: "Tag 1", title: "Galle Old Town", desc: "Koloniale Mauern, kleine Boutiquen, Sunset auf der Mauer.", chips: ["Altstadt", "Boutique", "Sunset"] }, { tag: "Tag 2-3", title: "Tea-Train Kandy → Ella", desc: "Eine der schönsten Zugfahrten der Welt. Mit dir doppelt.", chips: ["Zug", "Tee", "Berge"] }, { tag: "Tag 4-6", title: "Safari Yala", desc: "Leoparden, Elefanten, Vögel. Lodge im Busch.", chips: ["Safari", "Lodge", "Wildlife"] }, { tag: "Finale", title: "Mirissa Beach", desc: "Surfen lernen, Strand, Kokoswasser. Süßes Ende.", chips: ["Surfen", "Strand", "Kokos"] }], vibeScore: 4.5 },
  { name: "Ägypten Rotes Meer", region: "Hurghada · El Gouna", country: "Ägypten", image: "./assets/destinations/egypt-red-sea.jpg", season: "März – Mai · Sep – Nov", flightTime: "4h", flightBucket: "short", tags: ["Strand", "Schnorcheln"], rawTags: ["strand", "luxuswert"], pitch: "Warmes Meer, Korallenriffe, palmengesäumte Buchten.", why: "Arabische Wärme, ein bisschen Heimatnähe — und Korallen.", quote: "„Das Rote Meer ist warm, weil ich an dich denke.\"", mustDo: ["Riff schnorcheln", "Wüsten-Sunset", "Strand-Tag"], days: [{ tag: "Tag 1", title: "El Gouna Lagunen", desc: "Boutique-Resort an der Lagune, abends Cocktails am Wasser.", chips: ["Lagune", "Resort", "Cocktail"] }, { tag: "Tag 2-3", title: "Riff-Schnorcheln", desc: "Boot raus, Korallen, Fische in allen Farben.", chips: ["Boot", "Korallen", "Fische"] }, { tag: "Tag 4-6", title: "Wüsten-Tour", desc: "Quad, Sterne, Beduinen-Tee. Ein anderer Planet.", chips: ["Quad", "Sterne", "Tee"] }, { tag: "Finale", title: "Catamaran", desc: "Letzter Tag auf dem Wasser, Sunset, du.", chips: ["Catamaran", "Sunset", "Champagner"] }], vibeScore: 4 }
];

const liked = new Set(["Griechenland / Kreta", "Japan", "Sansibar"]);
let currentVibeFilter = "all";
let currentFlightFilter = "any";
let activeDestination = destinations.find(d => d.name === "Griechenland / Kreta") || destinations[0];
let activeDayIndex = 0;
let activePlanIndex = 0;

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ROUTER */
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('is-active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('is-active');
  document.querySelectorAll('.side-nav a').forEach(a => {
    a.classList.toggle('is-active', a.dataset.page === page);
  });
  if (page === 'reiseziele') renderDestinationsGrid();
  if (page === 'vergleichen') renderComparePage();
  if (page === 'reiseplaene') renderPlans();
  if (page === 'erlebnisse') renderAllExperiences();
  if (page === 'favoriten') renderFavorites();
  if (page === 'abstimmen') renderVotes();
  if (page === 'liebesbriefe') renderLetters();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function readPageFromHash() { return (location.hash || '#entdecken').replace('#', '') || 'entdecken'; }
window.addEventListener('hashchange', () => navigateTo(readPageFromHash()));
document.addEventListener('click', (e) => {
  const a = e.target.closest('[data-nav], [data-page]');
  if (!a) return;
  const href = a.getAttribute('href');
  if (href && href.startsWith('#')) { e.preventDefault(); location.hash = href; }
});

/* FLOATING HEARTS */
function spawnFloatingHearts(n) {
  const wrap = document.querySelector('.floating-hearts');
  if (!wrap) return;
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span');
    s.textContent = '♥';
    s.style.left = (Math.random() * 100) + '%';
    s.style.fontSize = (16 + Math.random() * 24) + 'px';
    s.style.animationDuration = (14 + Math.random() * 18) + 's';
    s.style.animationDelay = (-Math.random() * 18) + 's';
    s.style.color = ['rgba(236,72,153,0.10)', 'rgba(239,68,68,0.10)', 'rgba(212,168,67,0.12)'][i % 3];
    wrap.appendChild(s);
  }
}
function burstHearts(x, y) {
  for (let i = 0; i < 8; i++) {
    const h = document.createElement('span');
    h.textContent = '♥';
    h.style.cssText = 'position:fixed;left:'+x+'px;top:'+y+'px;z-index:9999;color:hsl('+(340+Math.random()*30)+',80%,60%);font-size:'+(14+Math.random()*12)+'px;pointer-events:none;transition:transform 1s ease-out, opacity 1s ease-out;';
    document.body.appendChild(h);
    requestAnimationFrame(() => {
      const angle = (i / 8) * Math.PI * 2;
      const r = 60 + Math.random() * 40;
      h.style.transform = 'translate('+(Math.cos(angle)*r)+'px,'+(Math.sin(angle)*r-30)+'px) scale('+(0.5+Math.random())+')';
      h.style.opacity = '0';
    });
    setTimeout(() => h.remove(), 1100);
  }
}

/* FILTERS */
function bindFilters() {
  document.querySelectorAll('#vibeFilters .filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#vibeFilters .filter-btn').forEach(b => b.classList.remove('is-active'));
      e.currentTarget.classList.add('is-active');
      currentVibeFilter = e.currentTarget.dataset.filter || "all";
      renderCarousel();
    });
  });
  document.querySelectorAll('#flightFilters .filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#flightFilters .filter-btn').forEach(b => b.classList.remove('is-active'));
      e.currentTarget.classList.add('is-active');
      currentFlightFilter = e.currentTarget.dataset.flight || "any";
      renderCarousel();
    });
  });
}
function getFiltered() {
  return destinations.filter(d => {
    if (currentVibeFilter !== "all" && !d.rawTags.includes(currentVibeFilter)) return false;
    if (currentFlightFilter !== "any" && d.flightBucket !== currentFlightFilter) return false;
    return true;
  });
}

/* CAROUSEL */
const heartPath = 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z';
function heartSvg(filled) { return '<svg viewBox="0 0 24 24" fill="'+(filled?'currentColor':'none')+'" stroke="currentColor" stroke-width="2"><path d="'+heartPath+'"></path></svg>'; }

function renderCarousel() {
  const carousel = $('destinationCarousel');
  const filtered = getFiltered();
  if (filtered.length === 0) {
    carousel.innerHTML = '<div style="padding:40px;color:var(--muted);font-style:italic;font-family:Cormorant Garamond,serif;font-size:18px;">Keine Orte für diese Wahl. Probier einen anderen Vibe.</div>';
    return;
  }
  carousel.innerHTML = filtered.map((dest, index) => {
    const isLiked = liked.has(dest.name);
    return '<div class="dest-card" data-name="'+esc(dest.name)+'">'
      + '<div class="dest-img-wrap">'
      + '<img src="'+esc(dest.image)+'" alt="'+esc(dest.name)+'" loading="'+(index<4?'eager':'lazy')+'">'
      + '<button class="card-heart '+(isLiked?'is-liked':'')+'" data-heart="'+esc(dest.name)+'" aria-label="Zu Favoriten">'+heartSvg(isLiked)+'</button>'
      + '</div>'
      + '<div class="dest-info">'
      + '<div class="dest-title-row"><h3>'+esc(dest.name)+'</h3></div>'
      + '<span class="dest-tags">'+esc(dest.tags.join(' · '))+'</span>'
      + '<div class="dest-meta"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> '+esc(dest.flightTime)+'</div>'
      + '</div></div>';
  }).join('');
  carousel.querySelectorAll('[data-heart]').forEach(b => {
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      const name = b.dataset.heart;
      if (!liked.has(name)) { const r = b.getBoundingClientRect(); burstHearts(r.left + r.width/2, r.top + r.height/2); }
      toggleLike(name);
    });
  });
  carousel.querySelectorAll('.dest-card').forEach(c => {
    const dest = destinations.find(d => d.name === c.dataset.name);
    c.addEventListener('mouseenter', () => setActiveDestination(dest));
    c.addEventListener('click', () => setActiveDestination(dest));
  });
}

function toggleLike(name) {
  if (liked.has(name)) liked.delete(name); else liked.add(name);
  renderCarousel();
  renderShortlist();
  renderCompareDrawer();
  $('navFavoritesBadge').textContent = liked.size;
  if ($('page-favoriten').classList.contains('is-active')) renderFavorites();
  if ($('page-vergleichen').classList.contains('is-active')) renderComparePage();
  if ($('page-abstimmen').classList.contains('is-active')) renderVotes();
  if ($('page-reiseziele').classList.contains('is-active')) renderDestinationsGrid();
}

function setActiveDestination(dest) {
  activeDestination = dest;
  activeDayIndex = 0;
  renderHeroSummary();
  renderItineraryPreview();
  renderMood();
  renderExperiencesPreview();
}

/* HERO SUMMARY */
function renderHeroSummary() {
  const idx = destinations.findIndex(d => d.name === activeDestination.name);
  $('heroSummary').innerHTML =
    '<div class="summary-content">'
    + '<span class="region-label">'+esc(activeDestination.country)+'</span>'
    + '<h2>'+esc(activeDestination.pitch)+'</h2>'
    + '<a class="primary-action-btn" href="#reiseziele" data-nav>Diesen Ort ansehen <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>'
    + '</div>'
    + '<div class="pagination">'
    + '<button data-prev><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg></button>'
    + '<span>'+(idx+1)+' / '+destinations.length+'</span>'
    + '<button data-next><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button>'
    + '</div>';
  $('heroSummary').querySelector('[data-prev]').addEventListener('click', () => {
    setActiveDestination(destinations[(idx - 1 + destinations.length) % destinations.length]);
  });
  $('heroSummary').querySelector('[data-next]').addEventListener('click', () => {
    setActiveDestination(destinations[(idx + 1) % destinations.length]);
  });
}

/* ITINERARY PREVIEW */
function renderItineraryPreview() {
  $('itineraryDropdownName').innerHTML = esc(activeDestination.name) + ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>';
  const tabs = $('itineraryTabs');
  tabs.innerHTML = activeDestination.days.map((d, i) =>
    '<button class="day-tab '+(i===activeDayIndex?'is-active':'')+'" data-day="'+i+'"><strong>'+esc(d.tag)+'</strong><span>'+esc(d.title.split(' ').slice(0,2).join(' '))+'</span></button>'
  ).join('');
  tabs.querySelectorAll('.day-tab').forEach(b => {
    b.addEventListener('click', () => { activeDayIndex = parseInt(b.dataset.day, 10); renderItineraryPreview(); });
  });
  const day = activeDestination.days[activeDayIndex];
  $('itineraryDetails').innerHTML =
    '<img src="'+esc(activeDestination.image)+'" alt="'+esc(activeDestination.name)+'">'
    + '<div class="day-info">'
    + '<h4>'+esc(day.tag)+' – '+esc(day.title)+'</h4>'
    + '<p>'+esc(day.desc)+'</p>'
    + '<ul class="day-highlights">'+day.chips.map(c => '<li>'+heartSvg(true)+' '+esc(c)+'</li>').join('')+'</ul>'
    + '<div class="day-cost"><span>Beste Reisezeit</span><strong>'+esc(activeDestination.season)+'</strong></div>'
    + '</div>';
}

/* MOOD */
function renderMood() {
  $('moodDestName').textContent = activeDestination.country;
  $('moodContent').innerHTML =
    '<div class="mood-line"><div class="mood-icon">'+heartSvg(true)+'</div><div class="mood-text"><strong>Warum '+esc(activeDestination.name)+'</strong><span>'+esc(activeDestination.why)+'</span></div></div>'
    + '<div class="mood-line"><div class="mood-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div><div class="mood-text"><strong>Was wir machen</strong><span>'+esc(activeDestination.mustDo.join(' · '))+'</span></div></div>'
    + '<div class="mood-quote">'+esc(activeDestination.quote)+'</div>';
}

/* EXPERIENCES */
const experiencesPool = [
  { name: "Bootstag", place: "Griechenland", img: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=600&q=80" },
  { name: "Sunset-Dinner", place: "Paris", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" },
  { name: "Hammam", place: "Marokko", img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80" },
  { name: "Schnorcheln", place: "Ägypten", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80" },
  { name: "Tee-Train", place: "Sri Lanka", img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80" },
  { name: "Onsen", place: "Japan", img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=600&q=80" },
  { name: "Reiten am Strand", place: "Marokko", img: "https://images.unsplash.com/photo-1517840933437-c41356892b35?auto=format&fit=crop&w=600&q=80" },
  { name: "Levada-Walk", place: "Madeira", img: "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=600&q=80" },
  { name: "Wüsten-Sterne", place: "Marokko", img: "https://images.unsplash.com/photo-1548883354-7622dd811559?auto=format&fit=crop&w=600&q=80" },
  { name: "Catamaran-Sunset", place: "Karibik", img: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=600&q=80" },
  { name: "Altstadt-Spaziergang", place: "Kreta", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80" },
  { name: "Safari-Tag", place: "Sansibar", img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80" }
];
function renderExperiencesPreview() {
  $('experiencesPreview').innerHTML = experiencesPool.slice(0, 4).map(e =>
    '<div class="experience-item"><img src="'+esc(e.img)+'" alt="'+esc(e.name)+'" loading="lazy"><div class="exp-info"><h4>'+esc(e.name)+'</h4><span class="exp-place">'+esc(e.place)+'</span></div></div>'
  ).join('');
}
function renderAllExperiences() {
  $('experiencesAll').innerHTML = experiencesPool.map(e =>
    '<div class="experience-item"><img src="'+esc(e.img)+'" alt="'+esc(e.name)+'" loading="lazy"><div class="exp-info"><h4>'+esc(e.name)+'</h4><span class="exp-place">'+esc(e.place)+'</span></div></div>'
  ).join('');
}

/* SHORTLIST + DRAWER */
function renderShortlist() {
  $('shortlistBadge').textContent = liked.size;
  $('compareBadge').textContent = liked.size;
  const picks = destinations.filter(d => liked.has(d.name)).slice(0, 4);
  $('shortlistCandidates').innerHTML = picks.map(d =>
    '<div class="candidate"><img src="'+esc(d.image)+'" alt="'+esc(d.name)+'"><div class="info"><strong>'+esc(d.name)+'</strong><span>Unser Pick</span></div><button class="vote-btn voted" data-vote-name="'+esc(d.name)+'">'+heartSvg(true)+' Voten</button></div>'
  ).join('');
  $('shortlistCandidates').querySelectorAll('[data-vote-name]').forEach(b => {
    b.addEventListener('click', (e) => { e.preventDefault(); location.hash = '#abstimmen'; });
  });
}
function renderCompareDrawer() {
  const picks = destinations.filter(d => liked.has(d.name)).slice(0, 3);
  $('compareThumbs').innerHTML = picks.map(d =>
    '<div class="thumb-card"><button class="remove-btn" data-remove="'+esc(d.name)+'" aria-label="Entfernen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button><img src="'+esc(d.image)+'" alt="'+esc(d.name)+'"><span>'+esc(d.name)+'</span></div>'
  ).join('');
  $('compareThumbs').querySelectorAll('[data-remove]').forEach(b => {
    b.addEventListener('click', (e) => { e.stopPropagation(); toggleLike(b.dataset.remove); });
  });
  if (picks.length === 0) {
    $('compareTable').innerHTML = '<p style="padding:20px;text-align:center;color:var(--muted);font-style:italic;font-family:Cormorant Garamond,serif;">Noch keine Orte ausgewählt.</p>';
    return;
  }
  const row = (label, fn) => '<div class="table-row"><span class="row-label">'+label+'</span>'+picks.map(p => '<span>'+fn(p)+'</span>').join('')+'</div>';
  $('compareTable').innerHTML =
    row('Region', d => esc(d.country))
    + row('Beste Zeit', d => esc(d.season))
    + row('Flugzeit', d => esc(d.flightTime))
    + '<div class="table-row"><span class="row-label">Vibe-Match</span>' + picks.map(d => {
      const full = Math.floor(d.vibeScore);
      const half = d.vibeScore % 1 !== 0;
      const empty = 5 - full - (half ? 1 : 0);
      return '<span class="hearts-score">'+'♥'.repeat(full)+(half?'♥':'')+'<span class="empty-heart">'+'♥'.repeat(empty)+'</span></span>';
    }).join('') + '</div>';
}
$('clearCompare').addEventListener('click', () => {
  liked.clear();
  renderShortlist(); renderCompareDrawer(); renderCarousel();
  $('navFavoritesBadge').textContent = 0;
});

/* PAGE: REISEZIELE */
function renderDestinationsGrid() {
  $('destinationsGrid').innerHTML = destinations.map(d =>
    '<article class="dest-tile"><div class="dest-tile-img"><img src="'+esc(d.image)+'" alt="'+esc(d.name)+'" loading="lazy"><button class="card-heart '+(liked.has(d.name)?'is-liked':'')+'" data-heart="'+esc(d.name)+'">'+heartSvg(liked.has(d.name))+'</button></div>'
    + '<div class="dest-tile-body"><span class="region">'+esc(d.country)+'</span><h3>'+esc(d.name)+'</h3><p>'+esc(d.pitch)+'</p>'
    + '<div class="dest-tile-meta">'+d.tags.map(t => '<span class="chip">'+esc(t)+'</span>').join('')+'<span class="chip">'+esc(d.flightTime)+'</span><span class="chip">'+esc(d.season)+'</span></div></div></article>'
  ).join('');
  $('destinationsGrid').querySelectorAll('[data-heart]').forEach(b => {
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      const name = b.dataset.heart;
      if (!liked.has(name)) { const r = b.getBoundingClientRect(); burstHearts(r.left + r.width/2, r.top + r.height/2); }
      toggleLike(name);
    });
  });
}

/* PAGE: VERGLEICHEN */
function renderComparePage() {
  const picks = destinations.filter(d => liked.has(d.name));
  if (picks.length === 0) {
    $('comparePage').innerHTML = '<div class="compare-page-empty">Noch keine Favoriten — geh zurück und tipp ein paar Herzen an, mein Schatz.</div>';
    return;
  }
  let cells = '<div class="corner">Side<br/>by side</div>';
  picks.forEach(p => { cells += '<div class="compare-img-cell"><img src="'+esc(p.image)+'" alt="'+esc(p.name)+'"><span class="name">'+esc(p.name)+'</span></div>'; });
  const rows = [
    ["Region", d => esc(d.country)],
    ["Beste Reisezeit", d => esc(d.season)],
    ["Flugzeit", d => esc(d.flightTime)],
    ["Vibe", d => esc(d.tags.join(' · '))],
    ["Warum", d => esc(d.why)],
    ["Stimmung", d => esc(d.quote)],
    ["Must do", d => esc(d.mustDo.join(' · '))]
  ];
  rows.forEach(([label, fn]) => {
    cells += '<div class="label">'+label+'</div>';
    picks.forEach(p => { cells += '<div class="value">'+fn(p)+'</div>'; });
  });
  $('comparePage').innerHTML = '<div class="compare-grid" style="grid-template-columns: 160px repeat('+picks.length+', minmax(180px, 1fr));">'+cells+'</div>';
}

/* PAGE: REISEPLAENE */
const planDayImages = {
  "Japan": ["https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=900&q=80"],
  "Thailand": ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80"],
  "Punta Cana": ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=900&q=80"],
  "Sansibar": ["https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=900&q=80"],
  "Paris": ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80"],
  "Griechenland / Kreta": ["https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1580500550469-7be8d6f1b3a4?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=900&q=80"],
  "Marokko": ["https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1539020140153-e479b8c5e26c?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1548883354-7622dd811559?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1517840933437-c41356892b35?auto=format&fit=crop&w=900&q=80"],
  "Albanische Riviera": ["https://images.unsplash.com/photo-1605649461814-d3d4d3a0c0eb?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?auto=format&fit=crop&w=900&q=80"],
  "Kap Verde": ["https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=900&q=80"],
  "Madeira": ["https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1571893544028-06b07af6dade?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&w=900&q=80"],
  "Sri Lanka": ["https://images.unsplash.com/photo-1583249598754-b7a2f59651fb?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?auto=format&fit=crop&w=900&q=80"],
  "Ägypten Rotes Meer": ["https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1548883354-7622dd811559?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=900&q=80"]
};

function renderPlans() {
  const list = destinations;
  if (activePlanIndex >= list.length) activePlanIndex = 0;
  $('planSwitch').innerHTML = list.map((d, i) =>
    '<button class="'+(i===activePlanIndex?'is-active':'')+'" data-plan-idx="'+i+'">'+esc(d.name)+'</button>'
  ).join('');
  $('planSwitch').querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => { activePlanIndex = parseInt(b.dataset.planIdx, 10); renderPlans(); });
  });
  const dest = list[activePlanIndex];
  const imgs = planDayImages[dest.name] || [dest.image, dest.image, dest.image, dest.image];
  $('planTimeline').innerHTML =
    '<div class="plan-hero"><img src="'+esc(dest.image)+'" alt="'+esc(dest.name)+'"><div class="plan-hero-overlay"></div><div class="plan-hero-text"><span>'+esc(dest.country)+'</span><h2>'+esc(dest.name)+'</h2><p>'+esc(dest.pitch)+'</p></div></div>'
    + dest.days.map((d, i) =>
      '<div class="plan-day">'
      + '<div class="plan-day-tag">'+esc(d.tag)+'<span>'+esc(dest.country)+'</span></div>'
      + '<div class="plan-day-card">'
      + '<div class="plan-day-img"><img src="'+esc(imgs[i] || dest.image)+'" alt="'+esc(d.title)+'" loading="lazy"></div>'
      + '<div class="plan-day-body"><h3>'+esc(d.title)+'</h3><p>'+esc(d.desc)+'</p>'
      + '<ul>'+d.chips.map(c => '<li>'+esc(c)+'</li>').join('')+'</ul></div>'
      + '</div></div>'
    ).join('');
}

/* PAGE: FAVORITEN */
function renderFavorites() {
  const picks = destinations.filter(d => liked.has(d.name));
  if (picks.length === 0) {
    $('favoritesList').innerHTML = '<div class="fav-empty">Noch keine Favoriten — tipp die Herzen an, die dich rufen.</div>';
    return;
  }
  $('favoritesList').innerHTML = picks.map(d =>
    '<div class="fav-row"><img src="'+esc(d.image)+'" alt="'+esc(d.name)+'"><div class="fav-body"><h3>'+esc(d.name)+'</h3><p>'+esc(d.pitch)+'</p></div>'
    + '<div class="fav-actions"><button class="vote-btn voted" data-remove="'+esc(d.name)+'">'+heartSvg(true)+' Entfernen</button></div></div>'
  ).join('');
  $('favoritesList').querySelectorAll('[data-remove]').forEach(b => {
    b.addEventListener('click', () => toggleLike(b.dataset.remove));
  });
}

/* PAGE: ABSTIMMEN */
const votes = {};
function renderVotes() {
  const picks = destinations.filter(d => liked.has(d.name));
  if (picks.length === 0) {
    $('voteArena').innerHTML = '<div class="fav-empty">Wähl zuerst ein paar Favoriten, mein Herz.</div>';
    return;
  }
  const totals = picks.map(p => (votes[p.name]?.mika || 0) + (votes[p.name]?.maryem || 0));
  const maxTotal = Math.max(...totals);
  $('voteArena').innerHTML = picks.map((d) => {
    const v = votes[d.name] || {};
    const total = (v.mika || 0) + (v.maryem || 0);
    const pct = Math.round(total / 2 * 100);
    const leading = total > 0 && total === maxTotal;
    return '<div class="vote-card '+(leading?'is-leading':'')+'">'
      + '<div class="vote-card-img"><img src="'+esc(d.image)+'" alt="'+esc(d.name)+'"></div>'
      + '<div class="vote-card-body"><h3>'+esc(d.name)+'</h3><p class="why">'+esc(d.why)+'</p>'
      + '<div class="vote-bar"><div class="vote-bar-fill" style="width:'+pct+'%"></div></div>'
      + '<div class="vote-meta"><span>Mika '+(v.mika?'♥':'')+'</span><span>'+total+' Stimme'+(total===1?'':'n')+'</span><span>'+(v.maryem?'♥':'')+' Maryem</span></div>'
      + '<div class="vote-btns"><button class="vote-mika '+(v.mika?'is-on':'')+'" data-voter="mika" data-name="'+esc(d.name)+'">Mikas Stimme</button><button class="vote-maryem '+(v.maryem?'is-on':'')+'" data-voter="maryem" data-name="'+esc(d.name)+'">Maryems Stimme</button></div>'
      + '</div></div>';
  }).join('');
  $('voteArena').querySelectorAll('[data-voter]').forEach(b => {
    b.addEventListener('click', () => {
      const name = b.dataset.name;
      const voter = b.dataset.voter;
      votes[name] = votes[name] || {};
      votes[name][voter] = votes[name][voter] ? 0 : 1;
      const r = b.getBoundingClientRect();
      burstHearts(r.left + r.width/2, r.top + r.height/2);
      renderVotes();
    });
  });
}

/* PAGE: LIEBESBRIEFE */
const letters = [
  { title: "Wie alles begann", body: "Mein erster Satz zu dir war: „Ich kenne dich vom Abbacos.“ Du warst dort Hostess, ein Münchner Steakladen, hast mir eine Cola gebracht und hast keine Ahnung gehabt, dass dieser Moment ein ganzes Leben starten würde. Ein paar Monate später hat uns Samira wieder zusammengebracht — und seitdem bin ich nur noch verliebt. Janem, ich will dir das schönste Leben ermöglichen, das es gibt. Das ist kein Versprechen. Das ist mein einziger Plan.", sign: "— Mika, seit der Cola für immer dein", featured: true },
  { title: "Im Museum, vor allen", body: "Du hast mich gefragt, was das schönste im Museum ist. Es war voll. Alle haben gehört. Ich hab dich angeschaut und gesagt: „Du bist das schönste arabische Gemälde hier.“ Ich werde nie vergessen, wie du gelächelt hast. Manchmal sind die Wahrheiten zu groß, um sie leise zu sagen.", sign: "— Mika, der dich vor allen liebt", featured: true },
  { title: "Habibti, Janem", body: "Ich hab dir nie erzählt, wie oft ich nachts wach lag bevor wir uns kannten — und hab gehofft, dass es jemanden gibt, der mein Lachen versteht. Du bist diese Person. Bagdad und Kandahar lagen tausend Kilometer auseinander, aber dein Herz hat den Weg zu mir gefunden.", sign: "— Mika" },
  { title: "Mein Bollywood-Moment", body: "Manchmal denk ich an dich und es spielt ein Shah Rukh Khan-Lied im Kopf. Du bist mein „Tum hi ho\", mein „Suraj hua maddham\". Ich würde durch jeden Regen tanzen, wenn du am Ende stehst.", sign: "— Mika, dein SRK" },
  { title: "Disney, aber wahr", body: "Du sagst manchmal, du wärst nicht die Prinzessin im Film. Habibti, du bist die Prinzessin UND die Königin. Und ich bin froh, der Mann zu sein, der dir die Krone hochhält wenn keiner schaut.", sign: "— Dein Mika" },
  { title: "Wenn du müde bist", body: "An den Tagen, an denen alles zu viel ist — denk an diese App. Denk daran, dass irgendwo zwölf Orte warten, an denen niemand was von uns will. Nur das Meer, der Wind, und ich, der dich anschaut.", sign: "— Mika ♥" },
  { title: "Was ich nie laut sage", body: "Du hast mich verändert. Im Guten. Ich war jemand vor dir, und ich bin jemand mit dir, und der zweite gefällt mir besser. Danke, dass du geblieben bist. Janem, ich bleib auch.", sign: "— Immer dein, Mika" },
  { title: "Eine kleine Versprechung", body: "Egal welchen Ort du wählst — ich pack die Koffer. Ich buche die Flüge. Ich nehm dich an die Hand und sag dir am Flughafen-Gate, dass du heute schöner aussiehst als gestern. Du sagst nur ja.", sign: "— Dein Husband" }
];
function renderLetters() {
  $('lettersGrid').innerHTML = letters.map(l =>
    '<article class="letter '+(l.featured?'is-featured':'')+'">'
    + (l.featured ? '<span class="letter-pin">Unser Moment ♥</span>' : '')
    + '<h3>'+esc(l.title)+'</h3><p>'+esc(l.body)+'</p><span class="letter-sign">'+esc(l.sign)+'</span></article>'
  ).join('');
}

/* SURPRISE */
$('surpriseBtn').addEventListener('click', (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  burstHearts(r.left + r.width/2, r.top + r.height/2);
  setActiveDestination(destinations[Math.floor(Math.random() * destinations.length)]);
});

/* MUSIC PLAYER */
const songs = [
  { title: "Tum Hi Ho", yt: "Umqb9KENgmk" },     // Aashiqui 2 — Arijit Singh
  { title: "Indila — Love Story", yt: "ZAUMpz9OGqk" }
];
let activeSong = 0;
let musicOpen = false;

function loadSong(idx, autoplay) {
  activeSong = idx;
  const s = songs[idx];
  $('musicFrame').innerHTML = '<iframe src="https://www.youtube.com/embed/'+s.yt+'?autoplay='+(autoplay?1:0)+'&rel=0&modestbranding=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
  document.querySelectorAll('.music-tabs button').forEach((b,i) => b.classList.toggle('is-active', i===idx));
}

$('musicToggle').addEventListener('click', () => {
  musicOpen = !musicOpen;
  $('musicPanel').classList.toggle('is-hidden', !musicOpen);
  $('musicToggle').classList.toggle('is-playing', musicOpen);
  $('musicToggleLabel').textContent = musicOpen ? 'Musik läuft ♥' : 'Spiel unsere Lieder';
  if (musicOpen) loadSong(activeSong, true);
  else $('musicFrame').innerHTML = '';
});
document.querySelectorAll('.music-tabs button').forEach(b => {
  b.addEventListener('click', () => loadSong(parseInt(b.dataset.song,10), true));
});

/* SRK QUOTE TICKER */
const srkQuotes = [
  "„Don't underestimate the power of a common man.“",
  "„Bade bade deshon mein, aisi chhoti chhoti baatein hoti rehti hain.“",
  "„Kabhi kabhi jeetne ke liye kuch haarna padta hai.“",
  "„Pyaar dosti hai. Wenn du nicht meine beste Freundin bist, kann ich dich nicht lieben.“",
  "„K-K-K-Kiran… ich werde alle Ozeane überqueren, wenn du mein letzter Hafen bist.“",
  "„Picture abhi baaki hai, mere dost — und unsere ist die schönste.“",
  "„Tum hi ho — alles. Wirklich alles.“",
  "„Wenn du etwas wirklich willst, dann verschwört sich das ganze Universum.“",
  "„Manchmal sind Wahrheiten leise. Aber meine zu dir nicht.“",
  "„Hum ek baar jeete hain, ek baar marte hain — und einmal lieben wir. Diesmal du.“"
];
let srkIdx = 0;
function rotateSrk() {
  $('srkTicker').innerHTML = '<span class="srk-ticker-bubble">'+esc(srkQuotes[srkIdx])+'</span>';
  srkIdx = (srkIdx + 1) % srkQuotes.length;
}
$('srkTicker').addEventListener('click', () => {
  rotateSrk();
  if ('speechSynthesis' in window) {
    try {
      const u = new SpeechSynthesisUtterance(srkQuotes[srkIdx === 0 ? srkQuotes.length-1 : srkIdx-1].replace(/[„""]/g,''));
      u.lang = 'de-DE';
      u.rate = 0.95;
      u.pitch = 0.95;
      speechSynthesis.cancel();
      speechSynthesis.speak(u);
    } catch (e) { /* TTS optional */ }
  }
});

/* INIT */
spawnFloatingHearts(14);
bindFilters();
renderCarousel();
setActiveDestination(activeDestination);
renderShortlist();
renderCompareDrawer();
renderExperiencesPreview();
$('navFavoritesBadge').textContent = liked.size;
navigateTo(readPageFromHash());
rotateSrk();
setInterval(rotateSrk, 9000);
