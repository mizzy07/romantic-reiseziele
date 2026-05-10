/* ============================================================
   Für Maryem — Moonlit Velvet Letterpress
   Script v2 — extended destinations + routes + persistence
   ============================================================ */

(() => {
  'use strict';

  /* === DATA: destinations === */
  const IMG = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=82`;

  const destinations = [
    { id: 'santorini', name: 'Santorini', country: 'Griechenland', region: 'EUROPA', vibe: ['luxuswert','strand','culture'], flight: 'short',
      tagline: 'Weiße Wände, blaues Meer, ein Mann der dich anbetet.',
      summary: 'Caldera-Sonnenuntergänge in Oia, Wein in einem Cliff-Restaurant, Boote und stille Buchten — du in Weiß, ich an deiner Seite.',
      flightTime: '4h von Frankfurt', bestTime: 'Mai – Oktober', mood: 'Verträumt & cinematisch',
      hearts: 5, image: IMG('1613395877344-13d4a8e0d49e'),
      moodLines: [
        ['Aufwachen', 'In einer Cave-Suite, das Meer 200m unter uns'],
        ['Tagsüber', 'Boote, Vulkan-Inseln, Snorkel, Wein'],
        ['Abends', 'Sonnenuntergang in Oia – ich filme dich'],
        ['Nachts', 'Sterne, Hot Tub, du in meinem Pulli']
      ],
      mapBlurb: 'Du siehst aus wie aus einem Bollywood-Film, in dem ich der glücklichste Mann bin.'
    },
    { id: 'bali', name: 'Bali', country: 'Indonesien', region: 'ASIEN', vibe: ['nature','strand','luxuswert'], flight: 'long',
      tagline: 'Reisterrassen, Tempel, ein Pool ganz für uns.',
      summary: 'Ubuds grüne Hügel, Frühstück mit Affen, Spa-Tage, ein Bambus-Villa-Pool — Bali ist langsam und süß wie du.',
      flightTime: '15h via Doha', bestTime: 'April – Oktober', mood: 'Grün & spirituell',
      hearts: 4, image: IMG('1518548419970-58e3b4079ab2'),
      moodLines: [
        ['Aufwachen', 'Pool-Villa in Ubud, Vögel statt Wecker'],
        ['Tagsüber', 'Reisterrassen, Tempel, Wasserfälle'],
        ['Abends', 'Massage zu zweit – du schläfst halb ein'],
        ['Nachts', 'Cocktails am Strand, Feuer, du tanzt']
      ],
      mapBlurb: 'Bali heißt: jeder Atemzug erinnert mich, dass ich dich nie loslasse.'
    },
    { id: 'kyoto', name: 'Kyoto', country: 'Japan', region: 'ASIEN', vibe: ['culture','nature'], flight: 'long',
      tagline: 'Kirschblüten, Tempel, Tee zu zweit.',
      summary: 'Wir gehen in Kimonos durch Gion. Hand in Hand zu Bamboo Grove. Sushi am späten Abend in einer kleinen Gasse.',
      flightTime: '11h via Tokio', bestTime: 'März – April / November', mood: 'Poetisch & still',
      hearts: 5, image: IMG('1493976040374-85c8e12f0c0e'),
      moodLines: [
        ['Aufwachen', 'In einem Ryokan, Tatami unter den Füßen'],
        ['Tagsüber', 'Sakura, Bambus, goldene Tempel'],
        ['Abends', 'Tee-Zeremonie – du bist die Schönste'],
        ['Nachts', 'Onsen, Sushi-Counter, sanftes Licht']
      ],
      mapBlurb: 'Wenn Kirschblüten fallen, sehe ich nur dich.'
    },
    { id: 'maldives', name: 'Malediven', country: 'Malediven', region: 'OZEAN', vibe: ['strand','luxuswert'], flight: 'long',
      tagline: 'Türkis, Stille, eine Wasservilla nur für uns.',
      summary: 'Eine Wasservilla, ein Pool unter Sternen, dein Lachen über das Meer. Privater Sandbank-Picknick und Delfine bei Sonnenaufgang.',
      flightTime: '13h via Doha', bestTime: 'November – April', mood: 'Endlos & blau',
      hearts: 5, image: IMG('1514282401047-d79a71a590e8'),
      moodLines: [
        ['Aufwachen', 'In einer Wasservilla, das Meer unter dir'],
        ['Tagsüber', 'Schnorcheln zwischen Korallen & Schildkröten'],
        ['Abends', 'Dinner am Strand, Kerzen im Sand'],
        ['Nachts', 'Sterne ohne Ende, du in meinen Armen']
      ],
      mapBlurb: 'Auf den Malediven ist nur Wasser, Himmel — und du.'
    },
    { id: 'paris', name: 'Paris', country: 'Frankreich', region: 'EUROPA', vibe: ['culture','luxuswert'], flight: 'short',
      tagline: 'Eiffelturm, Croissants, ein Kuss auf der Brücke.',
      summary: 'Ich lade dich in ein altes Bistro ein, wir schlendern durch Le Marais, Macarons bei Ladurée, abends Seine-Boot mit einem Glas Rosé.',
      flightTime: '1.5h von Frankfurt', bestTime: 'April – Juni / September', mood: 'Klassisch & verliebt',
      hearts: 4, image: IMG('1502602898657-3e91760cbb34'),
      moodLines: [
        ['Aufwachen', 'Boutique-Hotel im Marais, Café au lait im Bett'],
        ['Tagsüber', 'Louvre, Tuileries, Sacré-Cœur'],
        ['Abends', 'Bistro, Wein, du im kleinen Schwarzen'],
        ['Nachts', 'Eiffelturm funkelt, ich küsse dich']
      ],
      mapBlurb: 'Paris ist nur Paris, weil ich dich an der Seine küssen darf.'
    },
    { id: 'marrakesh', name: 'Marrakesch', country: 'Marokko', region: 'AFRIKA', vibe: ['culture','luxuswert'], flight: 'short',
      tagline: 'Riads, Hammams, Sterne in der Wüste.',
      summary: 'Ein Riad mit Innenhof, Tagine zu zweit, ein Hammam, dann eine Nacht in einem Wüsten-Camp unter Millionen Sternen.',
      flightTime: '4h von Frankfurt', bestTime: 'März – Mai / Oktober', mood: 'Warm & duftend',
      hearts: 5, image: IMG('1597211833712-5e41faa202ea'),
      moodLines: [
        ['Aufwachen', 'Im Riad, Vögel im Innenhof'],
        ['Tagsüber', 'Souks, Gewürze, Lederläden'],
        ['Abends', 'Hammam, Henna, Rosenwasser'],
        ['Nachts', 'Sahara-Camp, Lagerfeuer, deine Augen']
      ],
      mapBlurb: 'In den Souks rieche ich Kardamom — und denke nur an dich.'
    },
    { id: 'capri', name: 'Capri & Amalfi', country: 'Italien', region: 'EUROPA', vibe: ['luxuswert','strand'], flight: 'short',
      tagline: 'Zitronen, Felsen, ein Sonnenuntergang in Positano.',
      summary: 'Limoncello in Capri, eine Boots-Tour zur Blauen Grotte, dann zurück nach Positano für Pasta mit Blick aufs Meer.',
      flightTime: '2h nach Neapel', bestTime: 'Mai – September', mood: 'Sonnig & sinnlich',
      hearts: 5, image: IMG('1512100356356-de1b84283e18'),
      moodLines: [
        ['Aufwachen', 'Cliff-Hotel in Positano, Bougainvillea am Balkon'],
        ['Tagsüber', 'Boot zur Blauen Grotte, Schwimmen im Mittelmeer'],
        ['Abends', 'Aperol auf der Terrasse, du in Weiß'],
        ['Nachts', 'Pasta, Wein, die Lichter der Amalfiküste']
      ],
      mapBlurb: 'Du sagst „Ti amo" und Italien wird zu unserem Filmset.'
    },
    { id: 'dubai', name: 'Dubai', country: 'VAE', region: 'NAH-OST', vibe: ['luxuswert','culture','abenteuer'], flight: 'medium',
      tagline: 'Wolkenkratzer, Wüste, Gold am Handgelenk.',
      summary: 'Burj Khalifa-Brunch, Wüsten-Safari mit Falke und Kamel, abends arabisches Dinner-Cruise — hier kennen wir die Sprache.',
      flightTime: '6h von Frankfurt', bestTime: 'Oktober – April', mood: 'Glamour & Wüste',
      hearts: 4, image: IMG('1512453979798-5ea266f8880c'),
      moodLines: [
        ['Aufwachen', 'Suite mit Marina-Blick'],
        ['Tagsüber', 'Wüsten-Safari, Sandboarding, Falknerei'],
        ['Abends', 'Dhow-Cruise, arabisches Dinner – wir reden Arabisch'],
        ['Nachts', 'Burj Khalifa Lounge, Skyline für dich']
      ],
      mapBlurb: 'Dubai spricht unsere Sprache — und schenkt sie uns zurück.'
    },
    { id: 'seychelles', name: 'Seychellen', country: 'Seychellen', region: 'OZEAN', vibe: ['strand','nature','luxuswert'], flight: 'long',
      tagline: 'Granitfelsen, Schildkröten, blau wie ein Traum.',
      summary: 'La Digue mit dem Fahrrad, Anse Source d\'Argent zum Sonnenuntergang, eine Nacht auf einer privaten Insel.',
      flightTime: '12h via Doha', bestTime: 'April – Mai / Oktober – November', mood: 'Tropisch & wild',
      hearts: 5, image: IMG('1589197331516-4d84b72ebde3'),
      moodLines: [
        ['Aufwachen', 'Bungalow am Strand, Palmen rauschen'],
        ['Tagsüber', 'Fahrrad-Touren über La Digue'],
        ['Abends', 'Anse Source d\'Argent, der schönste Strand'],
        ['Nachts', 'Frische Fisch-Dinner, Sterne, Meer']
      ],
      mapBlurb: 'Die Seychellen schauen mich an wie du am ersten Morgen.'
    },
    { id: 'venedig', name: 'Venedig', country: 'Italien', region: 'EUROPA', vibe: ['culture','luxuswert'], flight: 'short',
      tagline: 'Gondeln, Masken, ein Spiegelbild im Wasser.',
      summary: 'Gondelfahrt durch versteckte Kanäle, Aperitivo am Markusplatz, Cicchetti in einer Bacaro — Venedig spielt unsere Liebe für uns.',
      flightTime: '1.5h von Frankfurt', bestTime: 'April – Juni / September – Oktober', mood: 'Magisch & altweltlich',
      hearts: 4, image: IMG('1523906834658-6e24ef2386f9'),
      moodLines: [
        ['Aufwachen', 'Hotel mit Blick auf den Canal Grande'],
        ['Tagsüber', 'Gondelfahrt, Murano-Glas, Burano-Farben'],
        ['Abends', 'Bellini im Caffè Florian'],
        ['Nachts', 'Pasta in einer Gasse, Mondlicht im Kanal']
      ],
      mapBlurb: 'Venedig schwebt — wie ich, wenn du lachst.'
    },
    { id: 'tulum', name: 'Tulum', country: 'Mexiko', region: 'AMERIKA', vibe: ['strand','nature','abenteuer'], flight: 'long',
      tagline: 'Cenoten, Maya-Ruinen, ein Bohème-Strand.',
      summary: 'Wir schwimmen in türkisen Cenoten, klettern Maya-Ruinen am Meer und essen frischen Ceviche unter Palmen.',
      flightTime: '12h via Cancún', bestTime: 'Dezember – April', mood: 'Bohemian & wild',
      hearts: 4, image: IMG('1518638150340-f706e86654de'),
      moodLines: [
        ['Aufwachen', 'Beachfront Cabana, Hängematten'],
        ['Tagsüber', 'Cenote-Tauchen, Maya-Tempel am Meer'],
        ['Abends', 'Beach-Bar mit Yoga-Crowd'],
        ['Nachts', 'Vollmond am Strand, Trommeln, Mezcal']
      ],
      mapBlurb: 'In Tulum vergessen wir die Welt — sie braucht uns auch nicht.'
    },
    { id: 'rajasthan', name: 'Udaipur & Jaipur', country: 'Indien', region: 'ASIEN', vibe: ['culture','luxuswert'], flight: 'long',
      tagline: 'Paläste, Saris, ein See voller Lichter.',
      summary: 'Lake Palace Udaipur, Hawa Mahal in Jaipur, Henna-Hände, Bollywood-Soundtrack — der ultimative Königs-Honeymoon.',
      flightTime: '10h via Delhi', bestTime: 'Oktober – März', mood: 'Königlich & Bollywood',
      hearts: 5, image: IMG('1599661046289-e31897846e41'),
      moodLines: [
        ['Aufwachen', 'Palast-Hotel auf dem See'],
        ['Tagsüber', 'Forts, Basare, Sari-Shopping'],
        ['Abends', 'Bollywood-Tanz, Henna für dich'],
        ['Nachts', 'Boot auf dem Lake Pichola, Lichter']
      ],
      mapBlurb: 'Tum hi ho — und Udaipur singt es uns vor.'
    },
    { id: 'iceland', name: 'Island', country: 'Island', region: 'EUROPA', vibe: ['nature','abenteuer'], flight: 'medium',
      tagline: 'Polarlichter, heiße Quellen, zwei Seelen unter Sternen.',
      summary: 'Blaue Lagune, Geysire, ein Glas-Iglu unter Aurora — ich halte dich warm.',
      flightTime: '3.5h von Frankfurt', bestTime: 'September – März (für Aurora)', mood: 'Episch & still',
      hearts: 4, image: IMG('1500382017468-9049fed747ef'),
      moodLines: [
        ['Aufwachen', 'Glas-Iglu, Aurora gestern noch im Kopf'],
        ['Tagsüber', 'Wasserfälle, Geysire, Eishöhlen'],
        ['Abends', 'Heiße Quellen unter Schneeflocken'],
        ['Nachts', 'Polarlichter — du sagst nichts, ich auch nicht']
      ],
      mapBlurb: 'Wenn die Aurora tanzt, denke ich: meine Frau ist heller.'
    },
    { id: 'kapstadt', name: 'Kapstadt & Safari', country: 'Südafrika', region: 'AFRIKA', vibe: ['nature','abenteuer','luxuswert'], flight: 'long',
      tagline: 'Tafelberg, Weingüter, Löwen bei Sonnenaufgang.',
      summary: 'Kapstadts Küste, Stellenbosch-Weingüter, dann eine Lodge im Krüger — Game-Drives bei Morgenlicht.',
      flightTime: '11h von Frankfurt', bestTime: 'Oktober – März', mood: 'Wild & weit',
      hearts: 4, image: IMG('1580060839134-75a5edca2e99'),
      moodLines: [
        ['Aufwachen', 'Cape-Town Apartment, Tafelberg im Fenster'],
        ['Tagsüber', 'Cape Point, Pinguine, Wein'],
        ['Abends', 'Safari-Lodge, Sundowner-Drinks'],
        ['Nachts', 'Bush-Sounds, Bonfire, Sterne']
      ],
      mapBlurb: 'Wir sehen einen Löwen — und ich sehe nur dich.'
    },
    { id: 'bora', name: 'Bora Bora', country: 'Französisch-Polynesien', region: 'OZEAN', vibe: ['strand','luxuswert'], flight: 'long',
      tagline: 'Über-Wasser-Bungalow, türkises Lagunen-Glück.',
      summary: 'Mount Otemanu im Hintergrund, Lagune so klar dass dein Herz fragt: "ist das echt?". Ja, Habibti, und du auch.',
      flightTime: '22h via LAX/Tahiti', bestTime: 'Mai – Oktober', mood: 'Postkartenhaft & still',
      hearts: 5, image: IMG('1559128010-7c1ad6e1b6a5'),
      moodLines: [
        ['Aufwachen', 'Glasboden im Bungalow, Fische unter dir'],
        ['Tagsüber', 'Mit Stachelrochen schwimmen'],
        ['Abends', 'Privates Dinner auf einem Motu'],
        ['Nachts', 'Mond über dem Mount Otemanu']
      ],
      mapBlurb: 'Ende der Welt. Anfang von uns.'
    },
    { id: 'queenstown', name: 'Queenstown', country: 'Neuseeland', region: 'OZEAN', vibe: ['nature','abenteuer'], flight: 'long',
      tagline: 'Berge, Seen, ein Herr-der-Ringe-Flair für uns.',
      summary: 'Helikopter-Flug zum Milford Sound, Sterngucken in einem Glas-Chalet, Weingut-Lunch in Central Otago.',
      flightTime: '24h via Auckland', bestTime: 'November – März', mood: 'Episch & frei',
      hearts: 4, image: IMG('1469521669194-babb45599def'),
      moodLines: [
        ['Aufwachen', 'Lakefront-Lodge, Spiegel-See'],
        ['Tagsüber', 'Helikopter über Fjorde'],
        ['Abends', 'Pinot Noir auf einer Terrasse'],
        ['Nachts', 'Glas-Dach-Chalet, Milchstraße']
      ],
      mapBlurb: 'Ende der Welt. Anfang von uns. (Diesmal mit Bergen.)'
    },

    /* ===== UNSER HÖCHSTES ZIEL ===== */
    { id: 'mekka', name: 'Mekka & Medina · Umrah', country: 'Saudi-Arabien', region: 'NAH-OST', vibe: ['culture','luxuswert'], flight: 'medium',
      tagline: 'Unser höchstes Ziel — Hand in Hand vor der Kaaba.',
      summary: 'Tawaf gemeinsam, Sa\'i zwischen Safa und Marwa, Du\'a in Madinah Sharif. Inschallah eines Tages — wir beide, bekleidet in Weiß, vor dem Haus Allahs.',
      flightTime: '5h von Frankfurt', bestTime: 'Ramadan oder Außerhalb Hajj', mood: 'Heilig & demütig',
      hearts: 5, image: IMG('1542521148-51306e7ffc1e'),
      moodLines: [
        ['Aufwachen', 'In Mekka — der Adhan weckt uns leise'],
        ['Tagsüber', 'Tawaf siebenmal um die Kaaba, Sa\'i, Du\'a'],
        ['Abends', 'Madinah Sharif — Salam an den Propheten ﷺ in der Rawda'],
        ['Nachts', 'Sterne über der Kaaba, deine Hand in meiner']
      ],
      mapBlurb: 'Bāraka Llāhu laka — Allah segne uns. Inschallah hier, gemeinsam.'
    },

    /* ===== HEIMREISE ===== */
    { id: 'heimreise', name: 'Heimreise · Bagdad & Kandahar', country: 'Irak & Afghanistan', region: 'WURZELN', vibe: ['culture','abenteuer'], flight: 'medium',
      tagline: 'Wo unsere Eltern angefangen haben — wir bringen sie stolz nach Hause, durch uns.',
      summary: 'Ich zeig dir Kandahar, du zeigst mir Bagdad. Tee mit unseren Großmüttern, alte Häuser, das Land, in dem unsere Wurzeln stehen. Eine Reise, die uns ganz macht.',
      flightTime: '7h via Doha / Istanbul', bestTime: 'Frühjahr / Herbst', mood: 'Tief & verbunden',
      hearts: 5, image: IMG('1624140930663-c6075007b7fd'),
      moodLines: [
        ['Aufwachen', 'Tee mit Kardamom in Kandahar oder Bagdad'],
        ['Tagsüber', 'Familienhäuser, alte Gassen, Geschichten der Eltern'],
        ['Abends', 'Lammkebab, Reis mit Safran, alte Lieder'],
        ['Nachts', 'Sterne über zwei Heimaten, eine gemeinsame Geschichte']
      ],
      mapBlurb: 'Du in Bagdad, ich in Kandahar — und wir, in der Mitte, eine ganze Welt.'
    },

    /* ===== KARIBIK ===== */
    { id: 'puntacana', name: 'Punta Cana', country: 'Dominikanische Republik', region: 'KARIBIK', vibe: ['strand','luxuswert'], flight: 'long',
      tagline: 'Türkis, weicher Sand, dein Lachen am Pool.',
      summary: 'Reiten am Strand, Saona Island, Sonnenuntergang auf einem Catamaran. Unkompliziert wie wir, wenn keiner zuschaut.',
      flightTime: '10h von Frankfurt', bestTime: 'Dezember – April', mood: 'Tropisch & sorglos',
      hearts: 4, image: IMG('1509783561732-390c7d0b1661'),
      moodLines: [
        ['Aufwachen', 'Resort am Meer, Welcome-Drink, Sand zwischen den Zehen'],
        ['Tagsüber', 'Saona Island — Boot, Inseln, Schwimmen'],
        ['Abends', 'Reiten am Strand bei Sunset, Spa danach'],
        ['Nachts', 'Catamaran-Sunset, Champagner, Sterne']
      ],
      mapBlurb: 'Karibik — wo das Meer dich umarmt wie ich.'
    },

    { id: 'saintlucia', name: 'Saint Lucia', country: 'Karibik', region: 'KARIBIK', vibe: ['strand','luxuswert','nature'], flight: 'long',
      tagline: 'Die zwei Pitons, ein Pool unter dem Berg, du in Weiß.',
      summary: 'Eine Klippen-Villa zwischen Gros Piton und Petit Piton, privater Strand, Sulphur Springs Spa, Boots-Tour zur Marigot Bay.',
      flightTime: '11h via London', bestTime: 'Dezember – April', mood: 'Dramatisch & ruhig',
      hearts: 5, image: IMG('1605288132419-1aa5e25475b2'),
      moodLines: [
        ['Aufwachen', 'Pool-Villa mit Blick auf die Pitons'],
        ['Tagsüber', 'Boots-Tour zur Marigot Bay, Tauchen'],
        ['Abends', 'Sulphur Springs Spa — heißes Wasser, Schwefel, Massage'],
        ['Nachts', 'Sternenhimmel zwischen den Pitons, du in meinem Pulli']
      ],
      mapBlurb: 'Zwei Pitons, zwei Herzen, ein Versprechen.'
    },

    { id: 'cartagena', name: 'Cartagena', country: 'Kolumbien', region: 'AMERIKA', vibe: ['culture','strand','luxuswert'], flight: 'long',
      tagline: 'Bunte Mauern, Karibik, du tanzt in der Altstadt.',
      summary: 'Spanische Kolonialstadt am Meer, Plaza Santo Domingo, Salsa, Boot zu den Rosario-Inseln. Fasziniert dein Herz.',
      flightTime: '12h via Miami', bestTime: 'Dezember – April', mood: 'Bunt & verspielt',
      hearts: 4, image: IMG('1533518280131-f16fb5540413'),
      moodLines: [
        ['Aufwachen', 'Boutique-Hotel in der Altstadt, bunter Innenhof'],
        ['Tagsüber', 'Spaziergang auf der Stadtmauer, Plaza San Diego'],
        ['Abends', 'Café del Mar bei Sunset, Salsa-Bar'],
        ['Nachts', 'Pferdekutsche durch die alten Gassen']
      ],
      mapBlurb: 'Hier wird sogar das Schweigen tanzen wollen.'
    },

    /* ===== SÜDAMERIKA ===== */
    { id: 'rio', name: 'Rio de Janeiro & Iguazu', country: 'Brasilien', region: 'AMERIKA', vibe: ['culture','strand','nature','abenteuer'], flight: 'long',
      tagline: 'Christo Redentor, Strand, Samba — dann die größten Wasserfälle der Welt.',
      summary: 'Copacabana, Pão de Açúcar, Christo bei Sonnenaufgang. Dann Flug zu den Iguazu-Fällen — die Erde brüllt unter uns.',
      flightTime: '12h von Frankfurt', bestTime: 'April – Oktober', mood: 'Lebendig & episch',
      hearts: 5, image: IMG('1513648197777-861864c16509'),
      moodLines: [
        ['Aufwachen', 'Copacabana — das Meer atmet vor dem Fenster'],
        ['Tagsüber', 'Christo bei Sonnenaufgang, Pão de Açúcar bei Sonnenuntergang'],
        ['Abends', 'Churrascaria, Caipirinha, Samba'],
        ['Nachts', 'Iguazu — die Erde brüllt, wir staunen']
      ],
      mapBlurb: 'Brasilien tanzt in dir — und ich tanze mit dir.'
    },

    { id: 'patagonien', name: 'Patagonien', country: 'Chile & Argentinien', region: 'AMERIKA', vibe: ['nature','abenteuer','luxuswert'], flight: 'long',
      tagline: 'Granit-Türme, Gletscher, Stille so groß wie wir uns fühlen.',
      summary: 'Torres del Paine, Perito Moreno Gletscher, Lodge mit Kamin am Ende der Welt. Wandern, schweigen, küssen.',
      flightTime: '18h via Madrid', bestTime: 'November – März', mood: 'Episch & still',
      hearts: 5, image: IMG('1510939859912-0e7e5904c400'),
      moodLines: [
        ['Aufwachen', 'Lodge in Torres del Paine, Berge im Fenster'],
        ['Tagsüber', 'Wanderung zum Mirador Las Torres'],
        ['Abends', 'Kamin, Mate-Tee, Sterne im Wind'],
        ['Nachts', 'Stille — die größte, die du je gehört hast']
      ],
      mapBlurb: 'Hier ist die Welt nackt — und wir auch.'
    },

    { id: 'machupicchu', name: 'Machu Picchu & Sacred Valley', country: 'Peru', region: 'AMERIKA', vibe: ['culture','nature','abenteuer'], flight: 'long',
      tagline: 'Wolken, Inka-Steine, du in einem Poncho.',
      summary: 'Sacred Valley, Cusco-Altstadt, mit dem Hiram-Bingham-Zug nach Aguas Calientes, Sonnenaufgang über den Ruinen.',
      flightTime: '15h via Lima', bestTime: 'Mai – September', mood: 'Mystisch & hoch',
      hearts: 5, image: IMG('1526392060635-9d6019884377'),
      moodLines: [
        ['Aufwachen', 'Sacred Valley Lodge, Lamas vor dem Fenster'],
        ['Tagsüber', 'Cusco-Altstadt, Markt von Pisac'],
        ['Abends', 'Pisco Sour, peruanisches Ceviche'],
        ['Nachts', 'Sonnenaufgang über Machu Picchu, Wolken brechen auf']
      ],
      mapBlurb: 'Wenn alte Steine reden, sagen sie deinen Namen.'
    },

    /* ===== USA & HAWAII ===== */
    { id: 'nyc', name: 'New York City', country: 'USA', region: 'AMERIKA', vibe: ['culture','luxuswert'], flight: 'long',
      tagline: 'Skyline, Brunch, ein Spaziergang über die Brooklyn Bridge.',
      summary: 'Hotel in SoHo, Central Park bei Sonnenuntergang, Broadway-Show, Top of the Rock, Bagels in einem winzigen Deli.',
      flightTime: '8h von Frankfurt', bestTime: 'April – Juni / September – November', mood: 'Elektrisch & unsterblich',
      hearts: 4, image: IMG('1485409088362-2cedbda60383'),
      moodLines: [
        ['Aufwachen', 'SoHo, Coffee in einem winzigen Café'],
        ['Tagsüber', 'Central Park, MoMA, 5th Avenue'],
        ['Abends', 'Top of the Rock — die Skyline für dich'],
        ['Nachts', 'Broadway-Show, dann eine Pizza-Slice um 2 Uhr']
      ],
      mapBlurb: 'New York wartet — auf den Moment, in dem du sagst „wow".'
    },

    { id: 'hawaii', name: 'Hawaii · Maui', country: 'USA', region: 'OZEAN', vibe: ['strand','nature','luxuswert'], flight: 'long',
      tagline: 'Aloha, Lei aus Plumeria, Vulkane und schwarzer Sand.',
      summary: 'Road to Hana, Haleakala-Sonnenaufgang, schwimmen mit Schildkröten, Lūʻau am Strand. Hawaii ist die zarteste Insel der Welt.',
      flightTime: '20h via LAX', bestTime: 'April – Oktober', mood: 'Sanft & üppig',
      hearts: 5, image: IMG('1542259009477-d625272157b7'),
      moodLines: [
        ['Aufwachen', 'Beach-Bungalow in Wailea, Plumeria-Duft'],
        ['Tagsüber', 'Road to Hana — Wasserfälle, schwarze Strände'],
        ['Abends', 'Lūʻau am Strand, Lei für dich'],
        ['Nachts', 'Haleakala-Sonnenaufgang über den Wolken']
      ],
      mapBlurb: 'Aloha heißt: Hallo. Liebe. Und Auf Wiedersehen. Drei Worte, eine Insel.'
    },

    /* ===== ASIEN ===== */
    { id: 'thailand', name: 'Thailand · Krabi & Koh Lanta', country: 'Thailand', region: 'ASIEN', vibe: ['strand','abenteuer'], flight: 'long',
      tagline: 'Honeymoon-Stimmung — weiße Strände, Longtail-Boote, Spa.',
      summary: 'Krabi mit den Kalksteinklippen, Boots-Tour zu Phi Phi, Couple-Spa, Streetfood am Nachtmarkt. Thailand ist süß wie du.',
      flightTime: '11h via Bangkok', bestTime: 'November – April', mood: 'Warm & spielerisch',
      hearts: 4, image: IMG('1591357629414-80dce3b78d2b'),
      moodLines: [
        ['Aufwachen', 'Beach-Resort in Krabi, Vögel statt Wecker'],
        ['Tagsüber', 'Privates Longtail-Boot zu versteckten Buchten'],
        ['Abends', 'Couple-Spa, dann Sunset-Drinks'],
        ['Nachts', 'Streetfood am Nachtmarkt, deine Hand in meiner']
      ],
      mapBlurb: 'Thailand schmeckt nach Mango und du nach allem, was zählt.'
    },

    { id: 'sansibar', name: 'Sansibar', country: 'Tansania', region: 'AFRIKA', vibe: ['strand','abenteuer','luxuswert'], flight: 'long',
      tagline: 'Gewürze, weiße Strände, Dhow im Sonnenuntergang.',
      summary: 'Stone Town, Spice-Tour, Schnorcheln in Mnemba Atoll, Dhow bei Sunset, optional Safari-Daytrip nach Selous.',
      flightTime: '10h via Doha', bestTime: 'Juni – Oktober', mood: 'Exotisch & duftend',
      hearts: 5, image: IMG('1574622858722-df7d9efe1cce'),
      moodLines: [
        ['Aufwachen', 'Beach-Lodge in Nungwi, Indischer Ozean'],
        ['Tagsüber', 'Stone Town — Gewürze, Türen, alte Geschichten'],
        ['Abends', 'Dhow im Sunset, Champagner'],
        ['Nachts', 'Mini-Safari-Tag — Löwen, Elefanten']
      ],
      mapBlurb: 'Wo die Gewürze duften, atmet das Herz tiefer.'
    },

    { id: 'srilanka', name: 'Sri Lanka · Ella & Mirissa', country: 'Sri Lanka', region: 'ASIEN', vibe: ['culture','nature','abenteuer'], flight: 'long',
      tagline: 'Tee-Hügel, Nine Arches Bridge, Surfen in Mirissa.',
      summary: 'Galle Old Town, Tea-Train Kandy → Ella, Safari Yala (Leoparden!), Surf-Lesson in Mirissa, Kokoswasser am Strand.',
      flightTime: '12h via Doha', bestTime: 'Dezember – März', mood: 'Lush & soulful',
      hearts: 4, image: IMG('1566296314736-6eaac1ca0cb9'),
      moodLines: [
        ['Aufwachen', 'Tee-Lodge in Ella, Berge im Nebel'],
        ['Tagsüber', 'Tea-Train Kandy → Ella — Wind im Haar'],
        ['Abends', 'Galle Fort — koloniale Mauern, Sunset'],
        ['Nachts', 'Mirissa — Surfen, Strand, Kokos']
      ],
      mapBlurb: 'Der Zug fährt langsam genug, dass man verlieben kann.'
    },

    { id: 'kerala', name: 'Kerala · Backwaters', country: 'Indien', region: 'ASIEN', vibe: ['nature','culture','luxuswert'], flight: 'long',
      tagline: 'Hausboot in den Backwaters, Ayurveda-Massage, Tee-Hügel.',
      summary: 'Privates Hausboot in Alleppey, Ayurveda-Spa in Munnar zwischen Tee-Plantagen, Strand-Tag in Varkala. „Gods own country".',
      flightTime: '11h via Doha', bestTime: 'September – März', mood: 'Sanft & heilend',
      hearts: 4, image: IMG('1506461883276-594a12b11cf3'),
      moodLines: [
        ['Aufwachen', 'Hausboot in Alleppey, Wasser still wie ein Spiegel'],
        ['Tagsüber', 'Backwaters — Palmen, Reisfelder, Stille'],
        ['Abends', 'Ayurveda-Massage zu zweit, Kerzenduft'],
        ['Nachts', 'Tee-Hügel von Munnar, Wolken im Tal']
      ],
      mapBlurb: 'Hier heilt jeder Tag eine Sache, von der wir nicht wussten, dass sie weh tat.'
    },

    { id: 'samarkand', name: 'Samarkand & Bukhara', country: 'Usbekistan', region: 'ASIEN', vibe: ['culture','luxuswert'], flight: 'medium',
      tagline: 'Seidenstraße — blaue Kuppeln, Karawansereien, alte Romantik.',
      summary: 'Registan-Platz in Samarkand, alte Karawansereien in Bukhara, Plov und Granatapfel-Tee, Kupfer-Souk. Tausendundeine Nacht, real.',
      flightTime: '6h von Frankfurt', bestTime: 'April – Juni / September – Oktober', mood: 'Königlich & poetisch',
      hearts: 5, image: IMG('1569660927079-11d20952e3fa'),
      moodLines: [
        ['Aufwachen', 'Boutique-Riad nahe dem Registan'],
        ['Tagsüber', 'Registan-Platz, Bibi-Khanym-Moschee'],
        ['Abends', 'Plov, Granatapfel-Saft, Live-Musik'],
        ['Nachts', 'Karawanserei-Hotel in Bukhara, Innenhof, Sterne']
      ],
      mapBlurb: 'Auf der Seidenstraße haben Liebende seit Jahrhunderten Tee getrunken — wir sind die Nächsten.'
    },

    /* ===== OZEANIEN ===== */
    { id: 'sydney', name: 'Sydney & Great Barrier Reef', country: 'Australien', region: 'OZEAN', vibe: ['culture','strand','nature'], flight: 'long',
      tagline: 'Opera House, Bondi Beach — dann Korallen, die leuchten.',
      summary: 'Sydney mit Opera House und Harbour Bridge, Bondi-Brunch, Flug nach Cairns, Schnorcheln am Great Barrier Reef.',
      flightTime: '22h via Singapur', bestTime: 'September – November', mood: 'Sonnig & leicht',
      hearts: 4, image: IMG('1494948141550-221698c089c2'),
      moodLines: [
        ['Aufwachen', 'Hotel mit Harbour-Blick, Frühstück mit Seemöwen'],
        ['Tagsüber', 'Opera House Tour, Royal Botanic Garden'],
        ['Abends', 'Bondi Beach Sunset, Fish & Chips'],
        ['Nachts', 'Cairns — Schnorcheln am Riff, Korallen wie Sterne']
      ],
      mapBlurb: 'Down under sind wir oben — über dem Riff, über uns.'
    },

    /* ===== EUROPA ===== */
    { id: 'cinque', name: 'Cinque Terre & Toskana', country: 'Italien', region: 'EUROPA', vibe: ['culture','strand','nature'], flight: 'short',
      tagline: 'Bunte Häuser am Fels, dann Hügel, Wein und Pasta.',
      summary: 'Manarola-Sonnenuntergang, Wandern zwischen den fünf Dörfern, dann Toskana — Florenz, Siena, ein Weingut bei San Gimignano.',
      flightTime: '2h von München', bestTime: 'Mai – Juni / September', mood: 'Sonnig & klassisch',
      hearts: 5, image: IMG('1490650191633-406b47bf6e25'),
      moodLines: [
        ['Aufwachen', 'B&B in Manarola, Meer im Fenster'],
        ['Tagsüber', 'Wanderung Vernazza → Monterosso'],
        ['Abends', 'Pasta al Pesto, Vermentino, Sunset'],
        ['Nachts', 'Toskana — Weingut, Kamin, Cantucci & Vin Santo']
      ],
      mapBlurb: 'In der Toskana wird die Zeit langsam — wie wir auf einem Sonntagmorgen.'
    },

    { id: 'provence', name: 'Provence & Côte d\'Azur', country: 'Frankreich', region: 'EUROPA', vibe: ['culture','nature','luxuswert'], flight: 'short',
      tagline: 'Lavendelfelder, Mistral, Champagner an der Cote d\'Azur.',
      summary: 'Lavendel von Valensole im Juli, Aix-en-Provence, dann nach Nizza und Saint-Tropez für Côte d\'Azur Glamour.',
      flightTime: '1.5h von München', bestTime: 'Juni – August (Lavendel)', mood: 'Duftend & elegant',
      hearts: 5, image: IMG('1530086540-e7a924de9fa9'),
      moodLines: [
        ['Aufwachen', 'Mas in der Provence, Lavendel im Hof'],
        ['Tagsüber', 'Lavendelfelder, alte Marktstädte'],
        ['Abends', 'Aix-en-Provence, Café auf dem Cours Mirabeau'],
        ['Nachts', 'Cote d\'Azur — Yacht-Abend in Saint-Tropez']
      ],
      mapBlurb: 'Riech die Provence, riech mich, riech uns.'
    },

    { id: 'kappadokien', name: 'Kappadokien', country: 'Türkei', region: 'NAH-OST', vibe: ['nature','culture','abenteuer'], flight: 'medium',
      tagline: 'Heißluftballons über märchenhaften Felslandschaften.',
      summary: 'Cave-Hotel in Göreme, Heißluftballon bei Sonnenaufgang, Ihlara-Tal Wanderung, Türkisches Bad. Wie ein Kindheitstraum.',
      flightTime: '4h von München', bestTime: 'April – Juni / September – November', mood: 'Surreal & magisch',
      hearts: 5, image: IMG('1609932937042-56e6bdd7a41b'),
      moodLines: [
        ['Aufwachen', 'Cave-Suite in Göreme, Felsen über uns'],
        ['Tagsüber', 'Heißluftballon-Fahrt bei Sonnenaufgang'],
        ['Abends', 'Türkisches Bad, dann Mezze-Dinner'],
        ['Nachts', 'Sterne über den Feenkaminen']
      ],
      mapBlurb: 'Wenn die Ballons aufsteigen, hebt sich auch dein Lächeln.'
    },

    { id: 'schweiz', name: 'Schweiz · Jungfrau & Luzern', country: 'Schweiz', region: 'EUROPA', vibe: ['nature','luxuswert','abenteuer'], flight: 'short',
      tagline: 'Berge wie Postkarten, Schokolade, eine Zugfahrt zur Spitze.',
      summary: 'Luzern mit Pilatus-Berg, Jungfraujoch — „Top of Europe", Zermatt mit Matterhorn-Blick. Schweizer Schokolade an jedem Halt.',
      flightTime: '1h von München', bestTime: 'Juni – September / Dezember (Schnee)', mood: 'Klar & majestätisch',
      hearts: 4, image: IMG('1556556391-594f26418080'),
      moodLines: [
        ['Aufwachen', 'Hotel am Vierwaldstättersee, Berge im Spiegel'],
        ['Tagsüber', 'Jungfraujoch — Zug zur Spitze, Eispalast'],
        ['Abends', 'Käsefondue, Glühwein, Kamin'],
        ['Nachts', 'Zermatt — Matterhorn glüht im Sonnenuntergang']
      ],
      mapBlurb: 'Hier oben sind wir näher am Himmel — und an uns.'
    },

    /* ===== SKANDINAVIEN — Familie & Romantik ===== */
    { id: 'malmoe', name: 'Malmö · zu deiner Familie', country: 'Schweden', region: 'SKANDINAVIEN', vibe: ['culture','luxuswert'], flight: 'short',
      tagline: 'Fünf Tage bei Oma („Darling"), Noor & Monir, Saif, Yousef und den zwei zuckersüßen Kindern.',
      summary: 'Heimkommen — ich gehöre schon dazu. Oma, die mich „Darling" nennt. Noor (deine Lieblings-Cousine) und Monir (auch Kandahar-Pashtune wie ich!), Saif und Yousef. Spaziergang am Hafen, Fika, Familienessen bei Oma — die irakische Seite, die dich groß gemacht hat.',
      flightTime: '2h von München', bestTime: 'Mai – September', mood: 'Familiär & warm',
      hearts: 5, image: IMG('1539696511453-ed701e370daf'),
      moodLines: [
        ['Aufwachen', 'Bei Noor & Monir, Frühstück mit den Kindern, Oma ruft schon an'],
        ['Tagsüber', 'Pildammsparken, Hafenpromenade, Lilla Torg mit Saif & Yousef'],
        ['Abends', 'Familienessen bei Oma — irakischer Reis, Lammkebab, „Darling, ess noch was"'],
        ['Nachts', 'Balkon-Talk mit Noor & Monir — wie damals, vor unserer Verlobung']
      ],
      mapBlurb: 'Deine Oma nennt mich „Darling" — das ist mehr wert als jeder Honeymoon.'
    },

    { id: 'berlin', name: 'Berlin · bei Hajar & Momo', country: 'Deutschland', region: 'EUROPA', vibe: ['culture','fun','luxuswert'], flight: 'short',
      tagline: 'Hajar wollte zu deinem Geburtstag kommen — also fahren wir zu ihr.',
      summary: 'Wochenende bei deiner Cousine Hajar und ihrem Mann Momo. Boutique-Hotel in Mitte oder bei ihnen, Mauerpark, Brunch, Brandenburger Tor, Späti-Talk auf der Bank, abends Familienzeit bei Hajar zu Hause.',
      flightTime: '1h von München (oder Zug)', bestTime: 'Mai – September / Dezember (X-Mas)', mood: 'Lebendig & familiär',
      hearts: 5, image: IMG('1560969184-10fe8719e047'),
      moodLines: [
        ['Aufwachen', 'Boutique-Hotel in Mitte, Brunch-Pläne mit Hajar & Momo'],
        ['Tagsüber', 'Mauerpark, East Side Gallery, Spreeufer'],
        ['Abends', 'Familien-Dinner bei Hajar & Momo — Geburtstag wird ergänzt'],
        ['Nachts', 'Sky Bar Park Inn, Berlin-Skyline für dich']
      ],
      mapBlurb: 'Wir holen den Geburtstag nicht nach — wir ergänzen ihn bei Hajar.'
    },

    { id: 'kopenhagen', name: 'Kopenhagen', country: 'Dänemark', region: 'SKANDINAVIEN', vibe: ['culture','luxuswert','strand'], flight: 'short',
      tagline: 'Hygge, Nyhavn, Tivoli unter Lichterketten.',
      summary: 'Bunte Häuser am Nyhavn-Hafen, Tivoli-Vergnügungspark bei Nacht, Smørrebrød zum Lunch, Fahrrad-Tour durch die Stadt der Liebe für Erwachsene.',
      flightTime: '1.5h von München (oder Zug von Malmö, 30min!)', bestTime: 'Mai – September', mood: 'Hygge & lebendig',
      hearts: 4, image: IMG('1534955811692-7ff56da8be7c'),
      moodLines: [
        ['Aufwachen', 'Boutique-Hotel im Stadtkern, Brunch im Café'],
        ['Tagsüber', 'Nyhavn-Spaziergang, Schloss Rosenborg, Fahrrad'],
        ['Abends', 'Tivoli-Park bei Nacht — Lichterketten, Karussell'],
        ['Nachts', 'Cocktail-Bar in Vesterbro']
      ],
      mapBlurb: 'Über die Öresundbrücke — und du bist in einer neuen Welt.'
    },

    { id: 'stockholm', name: 'Stockholm · Schären-Inseln', country: 'Schweden', region: 'SKANDINAVIEN', vibe: ['culture','nature','luxuswert'], flight: 'short',
      tagline: 'Gamla Stan im Schnee, Inselhopping im Sommer, ABBA-Karaoke.',
      summary: 'Altstadt Gamla Stan, ABBA-Museum, Bootstour durch die 30.000 Schären-Inseln, Sauna mit Sprung in den See, Fika im Café.',
      flightTime: '2.5h von München', bestTime: 'Mai – September', mood: 'Hell & nordisch',
      hearts: 4, image: IMG('1536363511619-505315aded7c'),
      moodLines: [
        ['Aufwachen', 'Hotel mit Blick auf Gamla Stan'],
        ['Tagsüber', 'Schären-Inselhopping, Sauna mit Seesprung'],
        ['Abends', 'Fika mit Zimtschnecken, ABBA-Museum'],
        ['Nachts', 'Skyline-Bar mit Mitternachtssonne (im Sommer)']
      ],
      mapBlurb: 'Mitternachtssonne — wir merken nicht mal, dass die Welt schläft.'
    },

    { id: 'lofoten', name: 'Lofoten · Norwegische Polarlichter', country: 'Norwegen', region: 'SKANDINAVIEN', vibe: ['nature','adventure','luxuswert','romantic'], flight: 'medium',
      tagline: 'Rote Fischerhütten, Polarlichter über Bergen, Strände wie aus einem Traum.',
      summary: 'Cabin in Reine, Polarlicht-Jagd ab Oktober, Hike auf Reinebringen, Kaviar-Frühstück in Henningsvær.',
      flightTime: '5h via Oslo', bestTime: 'September – März (Aurora) / Juni – August (Mitternachtssonne)', mood: 'Episch & still',
      hearts: 5, image: IMG('1505246464763-5f59c5b9a2d8'),
      moodLines: [
        ['Aufwachen', 'Rorbu-Cabin am Wasser, Kamin knistert'],
        ['Tagsüber', 'Wanderung Reinebringen, Strand von Haukland'],
        ['Abends', 'Fischsuppe, Aquavit, Kerzen'],
        ['Nachts', 'Aurora — du in meinem Pulli, der Himmel tanzt']
      ],
      mapBlurb: 'Wenn die Aurora tanzt, denke ich: meine Frau ist heller.'
    },

    /* ===== LONDON — Maryem mag es ===== */
    { id: 'london', name: 'London', country: 'England', region: 'EUROPA', vibe: ['culture','luxuswert','fun'], flight: 'short',
      tagline: 'Afternoon Tea bei Claridge\'s, West End Show, Notting Hill Spaziergang.',
      summary: 'Boutique-Hotel in Mayfair, Tea bei Claridge\'s, Hyde Park Picknick, Borough Market, West End Show, Sky Garden Drinks.',
      flightTime: '1.5h von München', bestTime: 'Mai – September / Dezember (X-Mas Lights)', mood: 'Royal & verspielt',
      hearts: 5, image: IMG('1513635269975-59663e0ac1ad'),
      moodLines: [
        ['Aufwachen', 'Hotel in Mayfair, Earl Grey im Bett'],
        ['Tagsüber', 'Notting Hill, Portobello, V&A Museum'],
        ['Abends', 'West End Show, dann Late-Night-Cocktail'],
        ['Nachts', 'Sky Garden über der Themse, du in einem Mantel']
      ],
      mapBlurb: 'London ist deine zweite Sprache — und mein Lieblings-Akzent in deinem Mund.'
    },

    /* ===== RICH-VIBE GEHEIM-SPOTS ===== */
    { id: 'monaco', name: 'Monaco & Monte Carlo', country: 'Monaco', region: 'EUROPA', vibe: ['luxuswert','culture'], flight: 'short',
      tagline: 'Yachten, Casino Monte-Carlo, Rosé am Pool des Hôtel de Paris.',
      summary: 'Suite mit Mittelmeer-Blick, Casino-Abend in Smoking & Kleid, Lunch im Café de Paris, Helikopter nach Saint-Tropez für den Tag.',
      flightTime: '1.5h von München (Nizza)', bestTime: 'Mai / Juni / September', mood: 'Glamour & leise Eleganz',
      hearts: 5, image: IMG('1566972182176-2c898ded3124'),
      moodLines: [
        ['Aufwachen', 'Suite im Hôtel de Paris, Mittelmeer im Fenster'],
        ['Tagsüber', 'Yacht-Day, Schwimmen vor Cap-Ferrat'],
        ['Abends', 'Casino Monte-Carlo, Champagner, Roulette für 100€'],
        ['Nachts', 'Rooftop, Skyline, du in einer Robe']
      ],
      mapBlurb: 'Monaco zeigt sich nur denen, die wissen, wo sie hinschauen.'
    },

    { id: 'stmoritz', name: 'St. Moritz', country: 'Schweiz', region: 'EUROPA', vibe: ['luxuswert','nature','culture'], flight: 'short',
      tagline: 'Schweizer Glamour — Skihütte, Pelz, Champagner über dem Schnee.',
      summary: 'Badrutt\'s Palace Hotel, Polo on Snow im Februar, Helicopter zur Diavolezza, Glüh-Wein an einer Berghütte.',
      flightTime: '2h von München', bestTime: 'Dezember – März / Juni – September', mood: 'Snow-Glamour & Stille',
      hearts: 5, image: IMG('1533284133567-0da9844151ce'),
      moodLines: [
        ['Aufwachen', 'Suite mit Bergblick, Bergamotte-Tee am Bett'],
        ['Tagsüber', 'Skifahren oder Wandern, Lunch in einer Berghütte'],
        ['Abends', 'Spa, dann Dinner im Badrutt\'s Palace'],
        ['Nachts', 'Bar mit Pianist, du in einer Robe, der Schnee fällt']
      ],
      mapBlurb: 'Hier flüstert sogar der Schnee mit Akzent.'
    },

    { id: 'como', name: 'Lago di Como · Bellagio', country: 'Italien', region: 'EUROPA', vibe: ['luxuswert','romantic','nature'], flight: 'short',
      tagline: 'Villa am See, Kakao am Morgen, Boot durch die Buchten — wo Clooney lebt.',
      summary: 'Villa d\'Este oder Grand Hotel Tremezzo, privates Boot durch die Buchten, Lunch in Varenna, Aperitivo in Bellagio.',
      flightTime: '1h nach Mailand + 1h Auto', bestTime: 'Mai – Juni / September', mood: 'Geheim & elegant',
      hearts: 5, image: IMG('1584476009646-32293283ae1c'),
      moodLines: [
        ['Aufwachen', 'Villa-Suite mit See-Blick, Cappuccino am Balkon'],
        ['Tagsüber', 'Privates Holzboot durch die Buchten'],
        ['Abends', 'Aperitivo in Bellagio, Negroni, Sonnenuntergang'],
        ['Nachts', 'Dinner mit Pasta-Uomo am Wasser']
      ],
      mapBlurb: 'Como ist Italien, das nur die wissen, die wirklich Liebe verstehen.'
    },

    { id: 'saintemilion', name: 'Saint-Émilion · Bordeaux', country: 'Frankreich', region: 'EUROPA', vibe: ['culture','luxuswert','nature'], flight: 'short',
      tagline: 'Mittelalterliche Weindörfer, Château-Übernachtung, Bordeaux-Tasting privat.',
      summary: 'Übernachtung in einem Château zwischen Weinbergen, private Cellar-Tour, Lunch im 2-Sterne-Restaurant La Grand\'Vigne, Picknick zwischen Reben.',
      flightTime: '2h von München (Bordeaux)', bestTime: 'Mai – Oktober', mood: 'Geheim & weinverliebt',
      hearts: 5, image: IMG('1589706207569-76eb9b8b8414'),
      moodLines: [
        ['Aufwachen', 'Château-Zimmer, Weinberge bis zum Horizont'],
        ['Tagsüber', 'Privater Cellar-Tour, alte Steinmauern, Verkostung'],
        ['Abends', 'Sterne-Dinner, du im weißen Sommerkleid'],
        ['Nachts', 'Picknick zwischen Reben, Wein, Sterne']
      ],
      mapBlurb: 'Manche Wein-Geschichten sind nur für zwei geschrieben.'
    },

    { id: 'fjorde', name: 'Norwegische Fjorde · Bergen & Geirangerfjord', country: 'Norwegen', region: 'SKANDINAVIEN', vibe: ['nature','adventure','luxuswert'], flight: 'short',
      tagline: 'Kreuzfahrt durch dramatische Fjorde, bunte Häuser in Bergen, Wasserfälle.',
      summary: 'Bergen mit dem Bryggen-Viertel, dann Hurtigruten-Mini-Cruise zum Geirangerfjord, Übernachtung in einem Berg-Hotel über dem Wasser.',
      flightTime: '4h via Oslo', bestTime: 'Mai – September', mood: 'Episch & weit',
      hearts: 4, image: IMG('1504298147600-5f2dd35405ba'),
      moodLines: [
        ['Aufwachen', 'Bergen-Hotel, Hafen vor dem Fenster'],
        ['Tagsüber', 'Mini-Cruise durch die Fjorde, Wasserfälle'],
        ['Abends', 'Berg-Hotel, Suppe, Sauna mit Fjord-Blick'],
        ['Nachts', 'Sterne über schwarzem Wasser']
      ],
      mapBlurb: 'Hier hört die Welt auf — und Norwegen flüstert weiter.'
    }
  ];

  /* === MULTI-COUNTRY HONEYMOON ROUTES === */
  const routes = [
    {
      id: 'route-mediterran',
      title: 'Bollywood am Mittelmeer',
      subtitle: '12 Tage · Santorini → Capri → Marrakesch',
      blurb: 'Drei Welten, ein Mittelmeer. Wir starten weiß, leben golden, schließen unter Palmen.',
      stops: ['santorini','capri','marrakesh'],
      image: IMG('1539037116277-4db20889f2d4'),
      days: [
        { day: 'Tag 1–4', place: 'Santorini', title: 'Caldera-Anfang', desc: 'Cave-Suite in Oia, Boot zum Vulkan, Wein über dem Meer.' },
        { day: 'Tag 5–8', place: 'Capri & Amalfi', title: 'Italienische Liebe', desc: 'Fähre über die Cyclades, dann Capri. Limoncello, Blaue Grotte, Positano-Sonnenuntergang.' },
        { day: 'Tag 9–12', place: 'Marrakesch', title: 'Wüste & Souks', desc: 'Riad in der Medina, Hammam, eine Nacht in der Sahara unter Sternen.' }
      ]
    },
    {
      id: 'route-orient',
      title: 'Vom Golf in den Garten Eden',
      subtitle: '11 Tage · Dubai → Maldiven → Bali',
      blurb: 'Glamour, Stille, Grün. Drei Stimmungen, ein Honeymoon.',
      stops: ['dubai','maldives','bali'],
      image: IMG('1512453979798-5ea266f8880c'),
      days: [
        { day: 'Tag 1–3', place: 'Dubai', title: 'Skyline & Wüste', desc: 'Burj-Suite, Wüsten-Safari, arabisches Dinner — wir reden Arabisch.' },
        { day: 'Tag 4–7', place: 'Malediven', title: 'Nichts als Blau', desc: 'Wasservilla, Sandbank-Picknick, Schildkröten-Schnorcheln.' },
        { day: 'Tag 8–11', place: 'Bali', title: 'Grünes Schließen', desc: 'Ubud-Pool-Villa, Reisterrassen, Tempel, Spa für zwei.' }
      ]
    },
    {
      id: 'route-asia',
      title: 'Sakura & Bollywood-Königreiche',
      subtitle: '13 Tage · Kyoto → Udaipur → Jaipur',
      blurb: 'Stille trifft Tanz. Tee-Zeremonie und Lake Palace im selben Honeymoon.',
      stops: ['kyoto','rajasthan'],
      image: IMG('1493976040374-85c8e12f0c0e'),
      days: [
        { day: 'Tag 1–5', place: 'Kyoto', title: 'Kirschblüten', desc: 'Ryokan, Tee-Zeremonie, Bambuswald, Geishas in Gion.', image: IMG('1493976040374-85c8e12f0c0e') },
        { day: 'Tag 6–9', place: 'Udaipur', title: 'Königin auf einem See', desc: 'Lake Palace, Boot bei Sonnenuntergang, Henna für dich.', image: IMG('1582510003544-4d00b7f74220') },
        { day: 'Tag 10–13', place: 'Jaipur', title: 'Pinke Stadt', desc: 'Hawa Mahal, Amber Fort, Sari-Shopping, Bollywood-Tanzabend.', image: IMG('1599661046289-e31897846e41') }
      ]
    },
    {
      id: 'route-europa',
      title: 'Romantisches Europa',
      subtitle: '10 Tage · Paris → Venedig → Santorini',
      blurb: 'Drei Klassiker, ein Liebesfilm. Wir landen mit Croissants, schließen mit Caldera.',
      stops: ['paris','venedig','santorini'],
      image: IMG('1502602898657-3e91760cbb34'),
      days: [
        { day: 'Tag 1–3', place: 'Paris', title: 'Boulevard-Anfang', desc: 'Marais, Eiffelturm, Seine-Boot, kleines Bistro.' },
        { day: 'Tag 4–6', place: 'Venedig', title: 'Wasser-Zwischenspiel', desc: 'Gondel, Murano, Cicchetti, Mondlicht im Kanal.' },
        { day: 'Tag 7–10', place: 'Santorini', title: 'Weißes Finale', desc: 'Cave-Suite, Vulkan-Inseln, Oia bei Sonnenuntergang.' }
      ]
    },
    {
      id: 'route-ocean',
      title: 'Inseln am Ende der Welt',
      subtitle: '14 Tage · Seychellen → Bora Bora',
      blurb: 'Zwei Ozeane, ein Versprechen. Granitfelsen, dann Lagunen.',
      stops: ['seychelles','bora'],
      image: IMG('1589197331516-4d84b72ebde3'),
      days: [
        { day: 'Tag 1–6', place: 'Seychellen', title: 'Indischer Ozean', desc: 'La Digue mit dem Fahrrad, Anse Source d\'Argent, Schildkröten.' },
        { day: 'Tag 7–14', place: 'Bora Bora', title: 'Pazifischer Traum', desc: 'Über-Wasser-Bungalow, Mount Otemanu, privater Motu-Dinner.' }
      ]
    },
    {
      id: 'route-pilger',
      title: 'Unsere heilige Reise',
      subtitle: '14 Tage · Mekka → Medina → Heimreise',
      blurb: 'Unser höchstes Ziel — Umrah gemeinsam, dann zu unseren Wurzeln. Bagdad, Kandahar. Inschallah eines Tages.',
      stops: ['mekka','heimreise'],
      image: IMG('1542521148-51306e7ffc1e'),
      days: [
        { day: 'Tag 1–4', place: 'Mekka', title: 'Tawaf und Sa\'i', desc: 'Umrah gemeinsam — siebenmal um die Kaaba, Sa\'i zwischen Safa und Marwa, Du\'a für unser Leben.', image: IMG('1542521148-51306e7ffc1e') },
        { day: 'Tag 5–7', place: 'Medina', title: 'Madinah Sharif', desc: 'Salam an den Propheten ﷺ in der Rawda. Stille. Frieden. Dankbarkeit.', image: IMG('1692566123227-0f68f1b9dac6') },
        { day: 'Tag 8–11', place: 'Bagdad', title: 'Deine Wurzeln', desc: 'Du zeigst mir deine Stadt — den Tigris, alte Familienhäuser, deine Mama im Mittelpunkt.', image: IMG('1624140930663-c6075007b7fd') },
        { day: 'Tag 12–14', place: 'Kandahar', title: 'Meine Wurzeln', desc: 'Ich zeige dir meine — Tee mit Kardamom, Granatapfel, das Land meiner Eltern.', image: IMG('1673701348866-eaa57db8aba6') }
      ]
    },
    {
      id: 'route-lateinamerika',
      title: 'Lateinamerikanische Liebe',
      subtitle: '17 Tage · Cartagena → Rio → Patagonien → Machu Picchu',
      blurb: 'Karibik, dann Samba, dann Stille zwischen Granit-Türmen, dann ein Sonnenaufgang über alten Steinen.',
      stops: ['cartagena','rio','patagonien','machupicchu'],
      image: IMG('1513648197777-861864c16509'),
      days: [
        { day: 'Tag 1–4', place: 'Cartagena', title: 'Karibische Romantik', desc: 'Bunte Mauern, Salsa, Boot zu den Rosario-Inseln.' },
        { day: 'Tag 5–8', place: 'Rio de Janeiro', title: 'Christo & Iguazu', desc: 'Christo Redentor, Pão de Açúcar, dann Flug zu den Iguazu-Fällen.' },
        { day: 'Tag 9–13', place: 'Patagonien', title: 'Stille der Anden', desc: 'Torres del Paine Lodge, Wandern, Gletscher, Sterne.' },
        { day: 'Tag 14–17', place: 'Machu Picchu', title: 'Inka-Steine', desc: 'Sacred Valley, Hiram Bingham Zug, Sonnenaufgang über Machu Picchu.' }
      ]
    },
    {
      id: 'route-asien-romantik',
      title: 'Asiatische Sanftheit',
      subtitle: '15 Tage · Kerala → Sri Lanka → Bali',
      blurb: 'Hausboot, Tee-Train, Reisterrassen — drei Welten, ein langsamer Atem.',
      stops: ['kerala','srilanka','bali'],
      image: IMG('1506461883276-594a12b11cf3'),
      days: [
        { day: 'Tag 1–5', place: 'Kerala', title: 'Backwaters & Tee', desc: 'Hausboot in Alleppey, Ayurveda in Munnar, Tee-Hügel.' },
        { day: 'Tag 6–10', place: 'Sri Lanka', title: 'Tea-Train & Strand', desc: 'Galle, Tea-Train Kandy → Ella, Safari Yala, Mirissa Beach.' },
        { day: 'Tag 11–15', place: 'Bali', title: 'Grünes Schließen', desc: 'Ubud-Pool-Villa, Reisterrassen, Tempel, Spa für zwei.' }
      ]
    },
    {
      id: 'route-amerika-traum',
      title: 'Großer Amerika-Traum',
      subtitle: '12 Tage · NYC → Hawaii',
      blurb: 'Skyline und dann Aloha. Brunch in Manhattan, Lei in Maui — die ganze Spannweite.',
      stops: ['nyc','hawaii'],
      image: IMG('1485409088362-2cedbda60383'),
      days: [
        { day: 'Tag 1–5', place: 'New York', title: 'Skyline-Tage', desc: 'SoHo, Central Park, Top of the Rock, Broadway.', image: IMG('1485409088362-2cedbda60383') },
        { day: 'Tag 6–12', place: 'Hawaii · Maui', title: 'Aloha-Tage', desc: 'Beach-Bungalow, Road to Hana, Haleakala-Sunrise, Lūʻau.', image: IMG('1542259009477-d625272157b7') }
      ]
    },
    {
      id: 'route-skandinavien-familie',
      title: 'Skandinavien mit deiner Familie',
      subtitle: '10 Tage · Malmö (Familie) → Kopenhagen → Stockholm',
      blurb: 'Fünf Tage bei Oma, Onkel, Tante und deinen Cousins in Malmö — dann zu zweit weiter durch Hygge und Schären.',
      stops: ['malmoe','kopenhagen','stockholm'],
      image: IMG('1539696511453-ed701e370daf'),
      days: [
        { day: 'Tag 1–5', place: 'Malmö (Familie)', title: 'Bei Oma & der Familie', desc: 'Familienzeit — Oma („Darling"), Noor & Monir, Saif & Yousef, die Kinder. Irakischer Reis, Lammkebab, alte Geschichten, Fika.', image: IMG('1539696511453-ed701e370daf') },
        { day: 'Tag 6–7', place: 'Kopenhagen', title: 'Hygge-Pause zu zweit', desc: 'Mit dem Zug über die Öresundbrücke (30 min!), Nyhavn, Tivoli bei Nacht, Smørrebrød.', image: IMG('1534955811692-7ff56da8be7c') },
        { day: 'Tag 8–10', place: 'Stockholm', title: 'Schären & Mitternachtssonne', desc: 'Gamla Stan Altstadt, Bootstour durch die Schären-Inseln, Sauna mit Sprung in den See, Skyline-Bar.', image: IMG('1536363511619-505315aded7c') }
      ]
    },
    {
      id: 'route-familien-tour',
      title: 'Familien-Tour: Berlin → Malmö',
      subtitle: '7 Tage · Hajar & Momo (Berlin) → Oma & Noor & Monir (Malmö)',
      blurb: 'Eine Reise zu allen, die du Familie nennst — Hajar in Berlin, dann mit Direktflug zu Noor und der ganzen Malmö-Crew.',
      stops: ['berlin','malmoe'],
      image: IMG('1560969184-10fe8719e047'),
      days: [
        { day: 'Tag 1–3', place: 'Berlin', title: 'Bei Hajar & Momo', desc: 'Geburtstag ergänzen — Mauerpark-Spaziergang, Brandenburger Tor, abends Familienzeit bei Hajar zu Hause.', image: IMG('1560969184-10fe8719e047') },
        { day: 'Tag 4–7', place: 'Malmö', title: 'Bei Oma, Noor & Monir', desc: 'Direktflug von Berlin (1.5h), dann vier Tage bei der ganzen Familie. Oma sagt „Darling", die Kinder hängen an dir, Balkon-Talk wie damals.', image: IMG('1539696511453-ed701e370daf') }
      ]
    },
    {
      id: 'route-rich-vibe',
      title: 'Rich-Vibe Geheim-Spots',
      subtitle: '12 Tage · Monaco → St. Moritz → Lago di Como → Saint-Émilion',
      blurb: 'Vier Orte, die du nur kennst, wenn du dahin gehörst — oder dir vornimmst, dahin zu gehören.',
      stops: ['monaco','stmoritz','como','saintemilion'],
      image: IMG('1566972182176-2c898ded3124'),
      days: [
        { day: 'Tag 1–3', place: 'Monaco', title: 'Mittelmeer-Glamour', desc: 'Suite Hôtel de Paris, Yacht-Day, Casino-Abend in Smoking & Kleid.', image: IMG('1566972182176-2c898ded3124') },
        { day: 'Tag 4–6', place: 'St. Moritz', title: 'Schweizer Schnee', desc: 'Badrutt\'s Palace, Skihütte-Lunch, Spa, Pianist in der Bar.', image: IMG('1533284133567-0da9844151ce') },
        { day: 'Tag 7–9', place: 'Lago di Como', title: 'Italienische Stille', desc: 'Villa-Suite, Holzboot durch die Buchten, Aperitivo in Bellagio.', image: IMG('1584476009646-32293283ae1c') },
        { day: 'Tag 10–12', place: 'Saint-Émilion', title: 'Bordeaux-Finale', desc: 'Château zwischen Weinbergen, Cellar-Tour, Picknick zwischen Reben.', image: IMG('1589706207569-76eb9b8b8414') }
      ]
    },
    {
      id: 'route-london-paris',
      title: 'London → Paris',
      subtitle: '8 Tage · zwei Hauptstädte, ein Eurostar',
      blurb: 'Afternoon Tea bei Claridge\'s — dann Eurostar nach Paris, Champagner an der Seine. Du in zwei Welten, beide gehören dir.',
      stops: ['london','paris'],
      image: IMG('1513635269975-59663e0ac1ad'),
      days: [
        { day: 'Tag 1–4', place: 'London', title: 'Royal Tage', desc: 'Mayfair, Notting Hill, West End Show, Sky Garden Drinks, Borough Market.', image: IMG('1513635269975-59663e0ac1ad') },
        { day: 'Tag 5–8', place: 'Paris', title: 'Champagner-Tage', desc: 'Eurostar in 2.5h, Marais, Eiffelturm bei Nacht, Seine-Boots-Dinner, Patisserien.', image: IMG('1502602898657-3e91760cbb34') }
      ]
    }
  ];

  /* === EXPERIENCES (60+ Erlebnisse mit Kategorien & Beschreibungen) === */
  // Kategorien: must · romantic · fun · adventure · culture · spiritual · food · nature
  const experiences = [
    { name: 'Sonnenuntergang in Oia', place: 'Santorini', cats: ['romantic','must'], img: IMG('1613395877344-13d4a8e0d49e'), desc: 'Der ikonischste Sonnenuntergang der Welt. Wein in der Hand, Caldera unter uns, Wolken in Rosa.' },
    { name: 'Caldera-Bootstour', place: 'Santorini', cats: ['must','adventure'], img: IMG('1530841377377-3ff06c0ca713'), desc: 'Privates Boot zu Vulkan-Inseln, heißen Quellen, versteckten Buchten. Schwimmen im türkisen Krater.' },
    { name: 'Cave-Suite-Frühstück', place: 'Santorini', cats: ['romantic'], img: IMG('1480796927426-f609979314bd'), desc: 'Frühstück mit Caldera-Blick, frischer Joghurt, Honig, du in einem weißen Bademantel.' },

    { name: 'Reisterrassen Tegallalang', place: 'Bali', cats: ['must','nature'], img: IMG('1604999333679-b86d54738315'), desc: 'Smaragdgrüne Stufen, Kokosnuss-Wasser frisch, Hängeschaukel über dem Tal.' },
    { name: 'Tempel Tanah Lot bei Sunset', place: 'Bali', cats: ['romantic','culture'], img: IMG('1518548419970-58e3b4079ab2'), desc: 'Hindu-Tempel auf einem Felsen im Meer. Bei Ebbe gehst du fast hin, bei Flut betest du davor.' },
    { name: 'Bali-Couple-Spa', place: 'Bali', cats: ['romantic'], img: IMG('1540541338287-41700207dee6'), desc: 'Vier Stunden Massage zu zweit, Blumen-Bad, Frangipani-Duft. Du schläfst halb ein.' },

    { name: 'Bambuswald Arashiyama', place: 'Kyoto', cats: ['must','nature','romantic'], img: IMG('1503899036084-c55cdd92da26'), desc: 'Smaragdgrüne Bambusgasse, Wind raschelt wie Musik. Hand in Hand am frühen Morgen, bevor die Touristen kommen.' },
    { name: 'Tee-Zeremonie in Gion', place: 'Kyoto', cats: ['culture','romantic'], img: IMG('1493976040374-85c8e12f0c0e'), desc: 'Du in einem Kimono, ich verzaubert. Matcha, perfekte Bewegungen, Stille die spricht.' },
    { name: 'Privater Onsen-Abend', place: 'Japan', cats: ['romantic','must'], img: IMG('1528360983277-13d401cdc186'), desc: 'Eigene heiße Quelle, nur wir, Dampf steigt, Mond über dem Tal. Sake auf dem Steinrand.' },
    { name: 'Sushi-Counter Omakase', place: 'Tokio', cats: ['food','culture'], img: IMG('1542051841857-5f90071e7989'), desc: 'Winziges Restaurant, ein Itamae, 17 Gänge, jeder ein kleines Gedicht.' },
    { name: 'Okinawa-Strandtag', place: 'Japan', cats: ['must','romantic'], img: IMG('1501785888041-af3ef285b470'), desc: 'Türkises Wasser, weißer Sand, Schnorcheln. Japan, das niemand erwartet.' },

    { name: 'Wasservilla mit Glasboden', place: 'Malediven', cats: ['must','romantic'], img: IMG('1582719508461-905c673771fd'), desc: 'Du schaust Fische beim Frühstück. Privater Pool unter Sternen.' },
    { name: 'Sandbank-Picknick', place: 'Malediven', cats: ['romantic','must'], img: IMG('1514282401047-d79a71a590e8'), desc: 'Privates Boot zu einer winzigen Sandbank mitten im Ozean. Champagner, Sushi, nur ihr beiden.' },
    { name: 'Schnorcheln mit Schildkröten', place: 'Malediven', cats: ['adventure','nature'], img: IMG('1544551763-46a013bb70d5'), desc: 'Maafushi-Riff, glatter Türkis. Schildkröten kommen ganz nah.' },

    { name: 'Eiffelturm bei Nacht', place: 'Paris', cats: ['must','romantic'], img: IMG('1431274172761-fca41d930114'), desc: 'Champagner auf der 2. Etage, dann das Funkeln zur vollen Stunde — fünf Minuten Magie.' },
    { name: 'Seine-Boots-Dinner', place: 'Paris', cats: ['romantic','food'], img: IMG('1502602898657-3e91760cbb34'), desc: 'Drei Gänge auf einem privaten Boot, Notre-Dame zieht vorbei. Du im kleinen Schwarzen.' },
    { name: 'Montmartre-Date', place: 'Paris', cats: ['romantic','culture'], img: IMG('1499856871958-5b9627545d1a'), desc: 'Sacré-Cœur, Künstler malen dich, Wein in einer winzigen Bar. Sterne in deinen Augen.' },
    { name: 'Patisserie-Tour', place: 'Paris', cats: ['food','fun'], img: IMG('1431274172761-fca41d930114'), desc: 'Ladurée-Macarons, Pierre Hermé, ein Croissant das die Welt verändert.' },

    { name: 'Sahara-Camp unter Sternen', place: 'Marokko', cats: ['must','adventure','romantic'], img: IMG('1547234935-80c7145ec969'), desc: 'Berber-Zelt im Erg Chebbi, Lagerfeuer, Kameltrek bei Sunset. Milliarden Sterne.' },
    { name: 'Hammam zu zweit', place: 'Marrakesch', cats: ['romantic'], img: IMG('1540541338287-41700207dee6'), desc: 'Schwarze Seife, heißer Dampf, Argan-Öl. Du wirst rausgehen wie aus einem anderen Leben.' },
    { name: 'Riad-Innenhof Tee', place: 'Marrakesch', cats: ['culture','romantic'], img: IMG('1597211833712-5e41faa202ea'), desc: 'Versteckter Innenhof, Brunnen, Mosaik, Minze-Tee mit zu viel Zucker. Außerhalb tobt die Medina.' },
    { name: 'Reiten am Atlantik', place: 'Marokko', cats: ['adventure','romantic'], img: IMG('1517840933437-c41356892b35'), desc: 'Strand bei Essaouira, Pferde im flachen Wasser, Sonnenuntergang in Orange.' },

    { name: 'Lake Pichola Boot', place: 'Udaipur', cats: ['must','romantic'], img: IMG('1582510003544-4d00b7f74220'), desc: 'Privates Boot bei Sunset, Lake Palace leuchtet weiß, Stadtpaläste spiegeln sich.' },
    { name: 'Hawa Mahal & Sari-Shopping', place: 'Jaipur', cats: ['culture','fun'], img: IMG('1599661046289-e31897846e41'), desc: 'Pinker Palast der Winde, dann Bazaar-Tour. Du in einem Sari, ich kann nicht atmen.' },
    { name: 'Henna-Hände', place: 'Indien', cats: ['romantic','culture'], img: IMG('1599661046289-e31897846e41'), desc: 'Eine alte Frau malt dir Henna-Muster bis zum Ellbogen. Drei Tage halten sie. Du fühlst dich wie eine Braut.' },
    { name: 'Kerala Hausboot', place: 'Kerala', cats: ['romantic','must'], img: IMG('1506461883276-594a12b11cf3'), desc: 'Privates Hausboot in Alleppey-Backwaters, Koch an Bord, Kerzen am Abend.' },
    { name: 'Ayurveda zu zweit', place: 'Kerala', cats: ['romantic'], img: IMG('1540541338287-41700207dee6'), desc: 'Synchronisierte Massage von zwei Therapeuten, warmes Öl, Kräuterkompressen.' },

    { name: 'Tea-Train Kandy → Ella', place: 'Sri Lanka', cats: ['must','romantic'], img: IMG('1566296314736-6eaac1ca0cb9'), desc: 'Eine der schönsten Zugfahrten der Welt. Tee-Hügel, offene Türen, Wind im Haar.' },
    { name: 'Sigiriya Felsenfestung', place: 'Sri Lanka', cats: ['adventure','culture'], img: IMG('1567157802189-aadc856131dc'), desc: 'Steig auf den Lion Rock, sieh die Welt von oben. Alte Wandmalereien.' },
    { name: 'Safari Yala', place: 'Sri Lanka', cats: ['adventure','nature'], img: IMG('1586500036706-41963de24d8b'), desc: 'Leoparden, Elefanten, Pfauen. Lodge im Busch, Sundowner.' },

    { name: 'Polarlichter', place: 'Island', cats: ['must','romantic','nature'], img: IMG('1517457373958-b7bdd4587205'), desc: 'Glas-Iglu, du in deinem Pulli, der Himmel tanzt grün und pink. Wir sagen nichts.' },
    { name: 'Blaue Lagune', place: 'Island', cats: ['romantic'], img: IMG('1500382017468-9049fed747ef'), desc: 'Milchblaues Thermalwasser, Schneeflocken auf den Wimpern, Silica-Maske im Gesicht.' },
    { name: 'Eishöhlen-Tour', place: 'Island', cats: ['adventure'], img: IMG('1500382017468-9049fed747ef'), desc: 'Blaues Licht in einer Gletscherhöhle. Die Erde zeigt dir ihr Inneres.' },

    { name: 'Cenote-Schwimmen', place: 'Tulum', cats: ['must','adventure'], img: IMG('1530541930197-ff16ac917b0e'), desc: 'Süßwasser-Höhle, türkises Licht, Maya-Magie. Wir tauchen, wir schweben.' },
    { name: 'Saona Island Bootstour', place: 'Punta Cana', cats: ['must','romantic'], img: IMG('1509783561732-390c7d0b1661'), desc: 'Insel die wie ein Bildschirmschoner aussieht. Mittagessen im Wasser.' },
    { name: 'Catamaran-Sunset', place: 'Karibik', cats: ['romantic','must'], img: IMG('1473186578172-c141e6798cf4'), desc: 'Letzter Tag, Champagner auf dem Wasser, Sterne kommen langsam.' },
    { name: 'Pitons-Pool', place: 'Saint Lucia', cats: ['romantic','must'], img: IMG('1605288132419-1aa5e25475b2'), desc: 'Klippen-Villa zwischen den zwei Pitons, eigener Pool, du in Bikini im Sonnenaufgang.' },

    { name: 'Christo bei Sonnenaufgang', place: 'Rio', cats: ['must','spiritual'], img: IMG('1513648197777-861864c16509'), desc: 'Vor den Tour-Bussen oben sein. Stadt unter Wolken, Christo über uns, Stille.' },
    { name: 'Iguazu-Wasserfälle', place: 'Brasilien', cats: ['must','adventure','nature'], img: IMG('1548963670-aaaa8f73a5e3'), desc: 'Die Erde brüllt. 275 Wasserfälle. Du bist nass, du lachst, ich auch.' },
    { name: 'Tango in San Telmo', place: 'Buenos Aires', cats: ['romantic','culture','fun'], img: IMG('1561577553-674ce32847a4'), desc: 'Milonga in einer alten Bar, du lernst die Schritte, der Lehrer zwinkert.' },
    { name: 'Machu Picchu Sunrise', place: 'Peru', cats: ['must','spiritual'], img: IMG('1526392060635-9d6019884377'), desc: 'Erste Sonnenstrahlen auf alten Inka-Steinen. Wolken im Tal. Wir sagen kein Wort.' },
    { name: 'Patagonien Wanderung', place: 'Patagonien', cats: ['adventure','nature'], img: IMG('1510939859912-0e7e5904c400'), desc: 'Mirador Las Torres — drei Granit-Türme, du schaffst es bis ganz oben.' },

    { name: 'Top of the Rock', place: 'New York', cats: ['must','romantic'], img: IMG('1485409088362-2cedbda60383'), desc: 'NYC-Skyline bei Sonnenuntergang. Empire State Building gegenüber. Du in einem Mantel, Wind im Haar.' },
    { name: 'Brooklyn Bridge Walk', place: 'New York', cats: ['romantic'], img: IMG('1497968978037-599ea9980d60'), desc: 'Sonnenaufgang über dem East River, Brooklyn auf der einen Seite, Manhattan auf der anderen.' },
    { name: 'Road to Hana', place: 'Hawaii', cats: ['adventure','must','nature'], img: IMG('1542259009477-d625272157b7'), desc: '64 Meilen, 600 Kurven, hundert Wasserfälle. Stopps für Ananas und Schwarz-Sand-Strände.' },
    { name: 'Haleakala-Sunrise', place: 'Hawaii', cats: ['must','spiritual','nature'], img: IMG('1547537069-537b37a02069'), desc: 'Sonnenaufgang über den Wolken auf 3000m. Die Welt unter uns wacht auf.' },
    { name: 'Lūʻau Strand-Dinner', place: 'Hawaii', cats: ['fun','culture'], img: IMG('1556206079-747a7a424d3d'), desc: 'Kalua-Schwein aus dem Erdofen, Hula-Tanz, Ukulele, du mit Lei aus Plumeria.' },

    { name: 'Sydney Opera House', place: 'Sydney', cats: ['must','culture'], img: IMG('1494948141550-221698c089c2'), desc: 'Tour durch die ikonischen Segel, dann ein Drink an der Bar mit Harbour-Blick.' },
    { name: 'Great Barrier Reef Schnorcheln', place: 'Australien', cats: ['must','adventure','nature'], img: IMG('1544551763-46a013bb70d5'), desc: 'Tagestour mit dem Boot, Korallen wie Ölgemälde, Fische in allen Farben.' },
    { name: 'Bondi-to-Coogee Walk', place: 'Sydney', cats: ['romantic','nature'], img: IMG('1506973035872-a4ec16b8e8d9'), desc: '6 km Küstenpfad mit den schönsten Stränden Sydneys. Wir nehmen 4 Stunden für 90-min-Weg.' },

    { name: 'Cinque Terre Wanderung', place: 'Italien', cats: ['adventure','nature','romantic'], img: IMG('1490650191633-406b47bf6e25'), desc: 'Pfad zwischen Vernazza und Monterosso, bunte Häuser am Felsen, Meer immer rechts.' },
    { name: 'Toskana-Weingut Lunch', place: 'Italien', cats: ['food','romantic'], img: IMG('1539037116277-4db20889f2d4'), desc: 'San Gimignano, Chianti-Weinprobe mit Pasta, du im weißen Sommerkleid.' },
    { name: 'Lavendelfelder Valensole', place: 'Provence', cats: ['must','romantic','nature'], img: IMG('1530086540-e7a924de9fa9'), desc: 'Juli, Sonne, du läufst durch Reihen von Lila. Du wirst die schönste Postkarte der Welt.' },
    { name: 'Gondelfahrt Venedig', place: 'Venedig', cats: ['must','romantic'], img: IMG('1523906834658-6e24ef2386f9'), desc: 'Privater Gondoliere, versteckte Kanäle, Bellini in der Hand. Du zwischen meinen Armen.' },
    { name: 'Capri Blaue Grotte', place: 'Capri', cats: ['must','adventure'], img: IMG('1512100356356-de1b84283e18'), desc: 'Kleines Boot durch einen winzigen Eingang, dann magisches blaues Licht von unten.' },
    { name: 'Schweizer Glacier Express', place: 'Schweiz', cats: ['must','romantic'], img: IMG('1556556391-594f26418080'), desc: 'Panoramazug von St. Moritz nach Zermatt, 8 Stunden Berge. Pinot in der Hand.' },

    { name: 'Wüsten-Safari', place: 'Dubai', cats: ['adventure','fun','culture'], img: IMG('1518684079-3c830dcef090'), desc: 'Dünen-Bashing, Falknerei, Beduinen-Camp mit Shisha und Tanz unter Sternen.' },
    { name: 'Burj Khalifa Lounge', place: 'Dubai', cats: ['must','romantic'], img: IMG('1512453979798-5ea266f8880c'), desc: '124. Stock, Sundowner, du in einem Abend-Outfit, Skyline glitzert wie ein Schmuck.' },
    { name: 'Tawaf gemeinsam', place: 'Mekka', cats: ['must','spiritual'], img: IMG('1542521148-51306e7ffc1e'), desc: 'Inschallah eines Tages — siebenmal um die Kaaba, Hand in Hand, Tränen in den Augen.' },
    { name: 'Madinah Sharif Salam', place: 'Medina', cats: ['spiritual'], img: IMG('1692566123227-0f68f1b9dac6'), desc: 'Salam an den Propheten ﷺ in der Rawda — die grünste Stelle auf Erden.' },
    { name: 'Heißluftballon Kappadokien', place: 'Türkei', cats: ['must','romantic','adventure'], img: IMG('1609932937042-56e6bdd7a41b'), desc: 'Sonnenaufgang über Feenkaminen, hundert Ballons im Himmel, du in einem Korb mit mir.' },

    { name: 'Spice Tour Sansibar', place: 'Sansibar', cats: ['culture','food'], img: IMG('1574622858722-df7d9efe1cce'), desc: 'Gewürzplantage — Zimt, Vanille, Kardamom direkt vom Baum. Düfte, die du nie vergisst.' },
    { name: 'Dhow im Sunset', place: 'Sansibar', cats: ['romantic','must'], img: IMG('1586861635167-e5223aadc9fe'), desc: 'Alter Holzsegler, Champagner, Wind im Segel, Sonne fällt ins Meer.' },
    { name: 'Stone Town Sunset', place: 'Sansibar', cats: ['culture','romantic'], img: IMG('1574622858722-df7d9efe1cce'), desc: 'Dachterrasse, Adhan ruft, Boote im Hafen, Cocktail in der Hand.' },
    { name: 'Safari Sundowner', place: 'Tansania', cats: ['romantic','adventure'], img: IMG('1580060839134-75a5edca2e99'), desc: 'Game-Drive endet auf einem Hügel, Drinks bei Sonnenuntergang, Löwen brüllen in der Ferne.' },

    { name: 'Registan-Platz Sonnenuntergang', place: 'Samarkand', cats: ['must','culture'], img: IMG('1569660927079-11d20952e3fa'), desc: 'Drei blaue Madrasas in goldenem Licht. Stille auf dem Platz, dann Lichter angehen.' },
    { name: 'Karawanserei-Übernachtung', place: 'Bukhara', cats: ['culture','romantic'], img: IMG('1630245935603-a409cfaa97e4'), desc: 'Boutique-Hotel in einer alten Seidenstraßen-Karawanserei. Innenhof, Brunnen, Sterne.' },

    { name: 'Krabi Longtail-Boot', place: 'Thailand', cats: ['must','adventure'], img: IMG('1591357629414-80dce3b78d2b'), desc: 'Privates Holzboot zu Phi Phi, Ko Poda, Bambusinsel. Schnorcheln in türkisem Wasser.' },
    { name: 'Thailand Streetfood-Abend', place: 'Thailand', cats: ['food','fun'], img: IMG('1591357629414-80dce3b78d2b'), desc: 'Pad Thai vom Wok, frische Kokosnuss, Mango Sticky Rice. Kleine Plastikstühle, große Liebe.' },

    { name: 'Tigris Sonnenuntergang', place: 'Bagdad', cats: ['romantic','spiritual'], img: IMG('1624140930663-c6075007b7fd'), desc: 'Ufer-Café am Tigris, Lammkebab, Tee mit Kardamom, du erzählst mir von deiner Mama.' },
    { name: 'Kandahar Granatapfel-Garten', place: 'Kandahar', cats: ['culture','spiritual'], img: IMG('1673701348866-eaa57db8aba6'), desc: 'Mein Land. Du in einem Schal aus Kabul-Seide, Granatapfel-Bäume, Tee bei meiner Familie.' }
  ];

  const expCategories = {
    must:      { label: 'Must-Do',     icon: '⭐', color: '#d4a843' },
    romantic:  { label: 'Romantisch',  icon: '♥',  color: '#e85a8c' },
    fun:       { label: 'Spaß',        icon: '✨', color: '#f59e0b' },
    adventure: { label: 'Abenteuer',   icon: '⚡', color: '#34d399' },
    culture:   { label: 'Kultur',      icon: '🏛', color: '#c4b5fd' },
    spiritual: { label: 'Spirituell',  icon: '🤲', color: '#fde9b9' },
    food:      { label: 'Essen',       icon: '🍽', color: '#f97316' },
    nature:    { label: 'Natur',       icon: '🌿', color: '#86efac' }
  };

  let activeExpCategory = 'all';

  /* === LETTERS === */
  const letters = [
    { id: 'l0', featured: true, pin: 'Brief 00 · 14.10.2024', title: 'Der Anstarrwettbewerb, das Gemälde, das Autoparfüm', body: 'Habibti, alles begann am 14. Oktober 2024. Indisches Essen mit Samira und Enes — und du, mir gegenüber. Wir haben uns angestarrt, kein Wort, nur Augen. Wer zuerst lacht, hat verloren. Du hast verloren, Habibti — und ich auch, denn ab da konnte ich nichts anderes mehr ansehen. Danach das Museum. Ich vor dir, du vor einem arabischen Gemälde. Ich habe gesagt: „Du bist das schönste arabische Gemälde da drinnen." Du hast es nicht geglaubt. Du glaubst es bis heute nicht. Aber es stimmt. Zwei Tage später, am 16. Oktober — wir kannten uns drei Tage — hast du mir ein Autoparfüm gekauft. Einfach so. Ohne Anlass. Da habe ich es gewusst: das ist sie. Die Frau, die mich versteht, bevor ich rede. Drei Tage gereicht, Habibti. Drei Tage, und Allah hatte schon entschieden.', sign: '— Mika, der seitdem nicht mehr blinzelt.' },
    { id: 'l0b', featured: true, pin: 'Brief 00b · Kino, OEZ, Café', title: 'Drei kleine Tests, die du nie verstanden hast', body: 'Habibti, ein paar Tage nach dem Frühstück saßen wir im Kino — du, ich, Samira, Enes. Was du nie wusstest: ich hatte tagelang geplant, wo du sitzen sollst, wie ich es einfädeln würde, dass du neben mir landest. Tagelang. Und dann, kurz vorm Eingang in den Saal, hast du dich umgedreht und einfach gefragt: „Willst du neben mir sitzen?" Habibti — ich war drei Schritte hinter dir, und drei Wochen voraus mit meinen Plänen, und du hast mit einem Satz alles überholt. So bist du. Du brauchst keine Strategie. Du bist die Strategie. Dann das OEZ. Samira hat dich angerufen — „komm, lass uns shoppen" — und dich hingebracht, wo Juan und ich „zufällig" waren. Juan, mein bester Freund seit immer. Der mit uns in Dubai war. Der jetzt auch dein bester Freund ist. Wir haben geschaut, als wärst du gerade vom Himmel gefallen — du hast geschaut, als hättest du nichts geahnt. Wer hat hier wen ausgetrickst, Habibti? Und dann das Café. Du und Samira saßt mir gegenüber, eure Augen klebten am Kellner. Ihr hattet gehört, ich sei geizig. Ihr habt geguckt, ob ich zahle. Habibti — ich habe gezahlt. Für dich werde ich immer zahlen. Für jeden Cappuccino, jeden Flug, jede Pandora-Charm, jede Sekunde mit dir, jedes Atmen. Drei kleine Tests an einem Tag, alle bestanden, weil ich von Sekunde eins wusste: ich bestehe alles, was zu dir gehört.', sign: '— Mika, der dich nie wieder testen lassen muss.' },
    { id: 'l1', featured: true, pin: 'Brief 01 · Unser Moment', title: 'Draußen vorm Museum', body: 'Wir standen draußen, nur du und ich. Du hast mich gefragt, was das schönste im Museum war. Ich hab dich angeschaut und gesagt: „Du bist das schönste arabische Gemälde da drinnen." Du hast mich kurz angeguckt — und bist dann sofort zu Samira gelaufen, um zu fragen, ob du das richtig gehört hast. Sie hat gegrinst und gesagt: „Nee, das stimmt nicht." Ich liebe dich genau für diese Reaktion, Galbi. Dass du es kaum glauben konntest. Aber ich meinte es. Ich meine es jedes Mal.', sign: '— Mika, der\'s wirklich so meint' },
    { id: 'l2', pin: 'Brief 02 · Versprechen', title: 'Alles für dich, Janem', body: 'Wenn du müde bist, mache ich dir Tee. Wenn du traurig bist, halte ich deine Hand. Wenn du tanzen willst, drehe ich Tum Hi Ho lauter. Du musst mir nichts sagen. Ich sehe dich.', sign: '— Mika' },
    { id: 'l3', pin: 'Brief 03 · Schicksal', title: 'Samira hat uns gefunden', body: 'Wenn Samira nicht gewesen wäre, hätten wir uns vielleicht nie wieder gesehen. Ein paar Monate nachdem du mir bei Abbacos die Cola gebracht hast, hat sie uns wieder zusammengebracht — ohne es zu wissen. Manchmal denke ich: Manche Freunde sind keine Zufälle, sondern kleine Engel mit Telefonnummern. Danke, Samira. Und Habibti — danke, dass du den Mut hattest, nochmal Hallo zu sagen.', sign: '— dein Mika, ewig dankbar' },
    { id: 'l4', pin: 'Brief 04 · Wie alles begann', title: 'Die Cola im Abbacos', body: 'Mein erster Satz zu dir war: „Ich kenne dich vom Abbacos." Du warst dort Hostess in dem kleinen Münchner Steakladen, hast mir eine Cola gebracht und hattest keine Ahnung, dass dieser Moment ein ganzes Leben starten würde. Ein paar Monate später hat uns Samira wieder zusammengebracht — und seitdem bin ich nur noch verliebt. Janem, ich will dir das schönste Leben ermöglichen, das es gibt. Das ist kein Versprechen. Das ist mein einziger Plan.', sign: '— Mika, seit der Cola für immer dein' },
    { id: 'l5', pin: 'Brief 05 · Kandahar zu Bagdad', title: 'Zwei Städte, ein Herz', body: 'Aus Kandahar zu dir nach Bagdad — Kilometer waren nichts. Sprache war nichts. Krieg war nichts. Du hast gewonnen, bevor ich es wusste. Ich liebe dich auf Paschtu, auf Arabisch, auf Deutsch — auf jeder Sprache, die du jemals lernen wirst.', sign: '— Mika, dein Janem' },
    { id: 'l6', pin: 'Brief 06 · Heute', title: 'Heute, jetzt', body: 'Such dir den Ort aus. Ich kümmere mich um den Rest. Du musst nichts machen außer dein Herz öffnen. Diese App ist mein Brief an dich. Lies sie, wenn du willst. Aber denk dran: das Schönste in jeder Stadt bist du.', sign: '— ich, der Glückliche, dein Mika' },

    { id: 'l7', featured: true, pin: 'Brief 07 · Nikkah 10.01.2026', title: 'Verlobung & Nikkah in Penzberg', body: 'Mein Herz, am 10.01.2026 in der Moschee in Penzberg haben wir vor Allah Nikkah gemacht. Vor unseren Familien, vor Zeugen, vor dem Imam. Ich bin mit Sommerreifen durch hohen Schnee gefahren — weil ich keinen einzigen Moment ohne dich verpassen wollte. Auf der Hinfahrt zum Saal bist du komplett crashout gegangen, weil der DJ nicht auf seinen Platz spielen wollte. Du hast geweint, geschrien, alles war chaotisch — und ich hab nur eins gedacht: „Alhamdulillah, dass diese Frau meine wird." Jeder Moment der Panik war ein Beweis: du nimmst es ernst, du willst alles perfekt — für UNS. Habibti, an dem Tag hab ich mich nicht nur mit dir verlobt. Ich hab mich mit jeder Version von dir verlobt. Mit der lachenden, der weinenden, der wütenden, der schlafenden. Mit allen. „Bāraka Llāhu laka wa jama\'a baynakumā fī khayr" — Allah hat es über uns ausgesprochen.', sign: '— Mika, dein Mann durch jeden Sturm, durch jede Sommerreifen-Fahrt' },

    { id: 'l8', featured: true, pin: 'Brief 08 · Stunden, die wie Minuten waren', title: 'Das Frühstück, das wir nie gegessen haben', body: 'Erinnerst du dich an das Frühstück, bei dem wir vergessen haben zu essen? Drei, vier Stunden lang haben wir über den Islam geredet. Über Allah. Über die Welt. Über Bagdad und Kandahar. Über unsere Eltern, unsere Träume, unsere Ängste. Der Tee wurde kalt, das Brot trocken — uns war es egal. „Wa ja\'ala baynakum mawaddatan wa raḥmah" sagt der Quran (Sure 30:21) — Und Er hat zwischen euch Liebe und Barmherzigkeit gelegt. An dem Morgen hab ich verstanden, was das heißt. Mit dir kann ich über alles reden, was wichtig ist. Und auch über alles, was nicht wichtig ist. Beides ist gleich heilig.', sign: '— dein Mika, der dir lieber zuhört als isst' },

    { id: 'l9', pin: 'Brief 09 · Was du für mich bist', title: 'Du bist alles, in einer Person', body: 'Du bist meine Frau. Meine beste Freundin. Meine Sekretärin — die beste, die jemals existiert hat. Meine Party-Plannerin (jede Feier wird durch dich zur Erinnerung). Meine Hochzeitsplannerin (du hast unsere Verlobung in einen Film verwandelt, trotz Schnee und DJ-Drama). Und Insha\'Allah, sehr bald: die beste Mutter, die ein Kind sich wünschen kann. Manche Frauen sind eine Rolle. Du bist alle. Und das macht keinen einzigen Tag schwer — es macht jeden Tag reich. Alhamdulillah für dich, jeden Atemzug.', sign: '— Mika, der weiß, wen er an seiner Seite hat' },

    { id: 'l10', pin: 'Brief 10 · Unser Zuhause', title: 'Bald in einem Palast schöner als der Taj Mahal', body: 'Aktuell wohnen wir bei meinen Eltern. Wir teilen seit Monaten ein Bett — das Schönste, das ich je geteilt habe. Aber das ist nur der Anfang. Bald baue ich dir ein Zuhause schöner als der Taj Mahal. Mit einem Garten, in dem du jede Blume aussuchen darfst. Mit einer Küche, in der wir kochen — oder vergessen zu kochen, weil wir wieder über die Welt reden. Shah Jahan hat den Taj Mahal für seine tote Frau gebaut. Ich baue dir alles für deine Lebenszeit, Habibti. Du sollst es spüren, nicht nur sehen.', sign: '— Mika, dein Architekt der Zukunft' },

    { id: 'l11', pin: 'Brief 11 · Alhamdulillah', title: 'Jeden Tag, seit dem ersten', body: 'Seit ich dich kenne, haben wir jeden einzelnen Tag geredet. Jeden Tag gesehen. Alhamdulillah (Lob sei Allah). Auch durch Streits, auch durch Tränen, auch durch Up und Downs — keinen Tag ohne dich. Der Prophet ﷺ hat gesagt: „Khayrukum khayrukum li-ahlihi" — Der Beste von euch ist der Beste zu seiner Familie. Ich versuche jeden Tag, der zu sein. Manchmal scheitere ich. Aber ich stehe immer wieder auf — für dich. Mit dir. Wegen dir. Diese Zeit ist die schönste meines Lebens. Ich weiß, dass alles davor nur Vorbereitung war.', sign: '— Mika, dankbar in jedem Atemzug' },

    { id: 'l12', featured: true, pin: 'Brief 12 · Vor allem', title: 'Riesstraße — im selben Hof, jahrelang', body: 'Hör mir zu, Habibti. Wir haben uns am Abbacos kennengelernt — aber wir kennen uns viel länger. Wir wussten es nur nicht. Wir sind beide in München geboren. Im selben Hof aufgewachsen. Riesstraße. Am gleichen Brunnen haben wir gespielt — du auf der einen Seite, ich auf der anderen. Dieselben Treppenhäuser. Dieselben Eisverkäufer. Dieselben gemeinsamen Freunde. Und uns trotzdem nie gesehen. Allah weiß, was Er tut. Er hat uns nicht zu früh treffen lassen — Er hat gewartet, bis wir bereit waren. Bis du Frau warst, ich Mann. Bis dein Herz und meins gleichzeitig wussten, was sie wollten. Manchmal denke ich: vielleicht haben unsere Schatten sich schon damals begegnet, an dem Brunnen, an einem Sommernachmittag. Vielleicht hat das Wasser uns beide getragen, lange bevor du mir die erste Cola brachtest. „Wa khalaqnākum azwājā" — Wir haben euch als Paare erschaffen. Allah hat uns in denselben Hof gesetzt, Galbi. Er hat nur den Moment gewählt, wann wir uns sehen.', sign: '— Mika, dein Nachbar von Geburt an' },

    { id: 'l13', pin: 'Brief 13 · Bagdad → München', title: 'Deine Mama, eine Königin', body: 'Janem, deine Mama. Aus Bagdad. Durch alles durchgegangen, allein für dich. Eine Frau, die das Wort „stark" zu klein wirken lässt. Sie hat dich groß gezogen mit der Tiefe des Tigris und der Geduld der Datteln. Wenn ich dich anschaue, sehe ich auch sie. Wenn ich dich liebe, ehre ich auch sie. Inshallah (so Allah will) werde ich Tag für Tag der Mann sein, der dir das gibt, was sie dir verdient hat. Und Inshallah werden wir Eltern, die so warm und treu sind, dass unsere Kinder nie verstehen müssen, was Loslassen heißt. „Al-jannatu taḥta aqdāmi l-ummahāt." — Das Paradies liegt unter den Füßen der Mütter. Bei deiner Mama liegt es schon. Bei dir wird es bald liegen.', sign: '— Mika, der deine Familie ehrt' },

    { id: 'l14', pin: 'Brief 14 · Geographie', title: 'Bagdad ↔ Kandahar ↔ München', body: 'Meine Eltern aus Kandahar. Deine aus Bagdad. Tausende Kilometer zwischen unseren Wurzeln — und doch hat das Schicksal uns in dieselbe deutsche Straße gelegt. Wir sind beide München-Kinder. Wir sind beide Migrationskinder. Wir sind beide das Ergebnis von Eltern, die alles riskiert haben, damit wir es leichter haben. Und unsere Liebe ist die Antwort darauf. Sie ist Bagdad und Kandahar, gemischt mit Münchner Regen. Sie ist Arabisch und Paschtu, gesprochen mit bayerischem Akzent. Habibti, wir sind eine Geschichte, die zwei Großmütter in Tränen erzählen werden. Und ich bin stolz, jeden Tag mit dir an dieser Geschichte zu schreiben.', sign: '— Mika, dein Münchner Pashtune für deine irakische Königin' },

    { id: 'l15', featured: true, pin: 'Brief 15 · Trotz aller', title: 'Du hast nie losgelassen', body: 'Habibti, etwas, das ich dir nicht oft genug sage: Danke. Wir beide haben nie an UNS gezweifelt — keine Sekunde. Aber die Welt um uns hat\'s versucht. Manche haben Auge gemacht, manche haben uns nicht gegönnt, manche haben hinter unserem Rücken geredet. Du hast es einfach ignoriert. Du hast deinen Kopf zu mir gewendet, immer wieder, egal wer was sagte. Das ist der größte Beweis von Liebe, den eine Frau geben kann — nicht in den Anker zu beißen, wenn der Sturm kommt, sondern den Kompass auf dieselbe Richtung zu halten. Wir sind nicht zusammen weil es leicht war. Wir sind zusammen weil wir entschieden haben, dass nichts von außen es brechen darf. Und am 10.01.2026, in der Moschee in Penzberg, vor Allah und unseren Familien — haben wir es allen gezeigt. Was Allah zusammenbringt, kann kein Mensch trennen. Du hast nie losgelassen. Ich auch nicht. Wir haben gewonnen, Galbi.', sign: '— Mika, dankbar dass du nie losgelassen hast trotz aller, die wollten' },

    { id: 'l16', featured: true, pin: 'Brief 16 · Balkon & Pandora', title: 'Der Balkon-Abend & dein Pandora-Armband', body: 'Habibti, erinnerst du dich? Wir saßen auf dem Balkon mit Noor und Monir. Noor — deine Cousine, irakische Wurzeln wie deine, lebt in Schweden. Monir — ihr Mann, aus Kandahar wie ich. Dieselben zwei Welten, dieselbe Liebe, dieselben zwei zuckersüßen Kinder. Wir haben nicht nur zugehört — wir haben gestaunt. „Inschallah genauso", haben wir uns geflüstert. Damals waren wir noch nicht mal verlobt. Nach jenem Abend hab ich dir ein Pandora-Armband geschenkt — wie Monir es Noor geschenkt hatte. Jeder Charm steht für etwas: dein Geburtstag, unser Hochzeitstag, eine Reise, ein „Ich liebe dich". Noors Armband war schon voll, als wir es sahen. Deins wächst — Stück für Stück, Reise für Reise, Erinnerung für Erinnerung. Diese ganze App ist nichts anderes als eine Liste von Charms, die noch kommen. Jedes Reiseziel hier wird ein Anhänger an deinem Pandora. Mekka. Bagdad. Kandahar. Hawaii. Wo auch immer du wählst. Inschallah ist dein Armband eines Tages so voll wie Noors — und wir sitzen dann auf einem Balkon mit unseren eigenen Kindern, und ein junges Paar staunt uns an.', sign: '— Mika, dein Sammler von Charms' },

    { id: 'l17', featured: true, pin: 'Brief 17 · Darling', title: 'Deine Oma nennt mich „Darling"', body: 'Habibti, dass deine Oma in Malmö mich „Darling" nennt — das ist kein Spitzname. Das ist ein Diplom. Das ist die größte Anerkennung, die eine irakische Großmutter einem Mann geben kann, der nicht ihr Blut ist. Sie sieht durch alles hindurch. Sie sieht, ob ich dich liebe. Sie sieht, ob ich treu bin. Sie sieht, ob ich dich glücklich mache. Und sie hat entschieden: Darling. Ich kenne deine ganze Familie. Noor, Monir, Saif, Yousef, deine Tante, dein Onkel, die zwei kleinen Cousins-Kinder. Das ist nicht „ich darf endlich kennenlernen" — das ist „ich gehöre schon dazu". Und das ist mehr wert als jedes Hochzeitsgeschenk, jeder Honeymoon, jeder Ring. Wenn deine Oma „Darling" sagt, höre ich: „Du gehörst meiner Maryem. Pass auf sie auf. Du bist mein Junge auch." Inschallah werde ich jeden einzelnen Tag der Junge sein, von dem sie das gesagt hat.', sign: '— Mika, der Darling der Familie' },

    { id: 'l18', pin: 'Brief 18 · Berlin', title: 'Hajar wollte kommen — wir kommen zu ihr', body: 'Habibti, deine Cousine Hajar in Berlin mit Momo — sie wollte zu deinem Geburtstag kommen. Sie hat geplant, sie hat versucht, sie konnte am Ende nicht. Du hast es leise gesagt, aber ich hab gesehen, was es dir bedeutet hat. Familie ist nicht nur an Tagen, an denen alle es schaffen — Familie ist auch an Tagen, an denen jemand fehlt und trotzdem da ist, im Telefon, im Gedanken, in jeder Geschichte die wir erzählen. Also fahren wir zu ihr. Berlin, Wochenende. Mauerpark, Brandenburger Tor, dann zu Hajar und Momo nach Hause für Tee, Lachen, Familienzeit. Wir holen den Geburtstag nicht nach — wir ergänzen ihn. Familie auf Distanz ist auch Familie. Und ich hab dir versprochen: zu jeder einzelnen Person, die dir wichtig ist, fahre ich mit dir.', sign: '— Mika, der mit dir zu jedem deiner Menschen fährt' }
  ];

  /* === PETNAMES (8 Sprachen mit deutscher Übersetzung) === */
  const petnames = [
    // Arabisch
    { word: 'حياتي',         tr: 'Ḥayāti',             meaning: 'Mein Leben',              lang: 'Arabisch' },
    { word: 'حبيبتي',        tr: 'Habibti',            meaning: 'Meine Geliebte',          lang: 'Arabisch' },
    { word: 'يا قلبي',       tr: 'Ya Albi · Galbi',    meaning: 'Mein Herz',               lang: 'Arabisch · Irakisch' },
    { word: 'روحي',          tr: 'Rouhi',              meaning: 'Meine Seele',             lang: 'Arabisch' },
    { word: 'يا عمري',       tr: 'Ya Omri',            meaning: 'Du, mein Leben',          lang: 'Arabisch' },
    { word: 'يا قمر',        tr: 'Ya Amar',            meaning: 'Mein Mond',               lang: 'Arabisch' },
    { word: 'نور عيني',      tr: 'Nour el Ayni',       meaning: 'Licht meiner Augen',      lang: 'Arabisch' },

    // Paschtu / Dari
    { word: 'جانم',          tr: 'Janem',              meaning: 'Meine Seele · mein Leben', lang: 'Paschtu · Dari' },
    { word: 'زما زړه',        tr: 'Zma Zra',            meaning: 'Mein Herz',               lang: 'Paschtu' },
    { word: 'ګلابۍ',         tr: 'Gulabai',            meaning: 'Kleine Rose',             lang: 'Paschtu' },
    { word: 'سترگه',          tr: 'Stergai',            meaning: 'Mein Augenstern',         lang: 'Paschtu' },
    { word: 'مريم',          tr: 'Maryem',             meaning: 'Meine Maryem · für immer', lang: 'Ewig' },

    // Bollywood / Hindi / Urdu
    { word: 'Jaan',           tr: 'Jaan',               meaning: 'Mein Liebling',           lang: 'Bollywood · Hindi' },
    { word: 'Saanson Ki Maala', tr: 'Saanson Ki Maala', meaning: 'Kette meiner Atemzüge',   lang: 'Bollywood · Hindi' },
    { word: 'Mehboob',        tr: 'Mehboob',            meaning: 'Mein Geliebter',          lang: 'Bollywood · Urdu' },

    // Deutsch
    { word: 'Mein Schatz',    tr: 'Mein Schatz',        meaning: 'Mein Schatz',             lang: 'Deutsch' },
    { word: 'Meine Königin',  tr: 'Meine Königin',      meaning: 'My Queen',                lang: 'Deutsch' },
    { word: 'Mein Engel',     tr: 'Mein Engel',         meaning: 'Mein Engel',              lang: 'Deutsch' },
    { word: 'Mein Augenstern', tr: 'Mein Augenstern',   meaning: 'Light of my eye',         lang: 'Deutsch' },

    // English
    { word: 'My Love',        tr: 'My Love',            meaning: 'Meine Liebe',             lang: 'English' },
    { word: 'My Sunshine',    tr: 'My Sunshine',        meaning: 'Mein Sonnenschein',       lang: 'English' },
    { word: 'My Everything',  tr: 'My Everything',      meaning: 'Mein Alles',              lang: 'English' },
    { word: 'Darling',        tr: 'Darling',            meaning: 'Liebling (wie Oma sagt)', lang: 'English · Oma' },
    { word: 'Sweetheart',     tr: 'Sweetheart',         meaning: 'Süßes Herz',              lang: 'English' },

    // Italiano
    { word: 'Amore mio',      tr: 'Amore mio',          meaning: 'Meine Liebe',             lang: 'Italienisch' },
    { word: 'Tesoro mio',     tr: 'Tesoro mio',         meaning: 'Mein Schatz',             lang: 'Italienisch' },
    { word: 'Cuore mio',      tr: 'Cuore mio',          meaning: 'Mein Herz',               lang: 'Italienisch' },
    { word: 'Anima mia',      tr: 'Anima mia',          meaning: 'Meine Seele',             lang: 'Italienisch' },
    { word: 'Bellissima',     tr: 'Bellissima',         meaning: 'Allerschönste',           lang: 'Italienisch' },

    // Español
    { word: 'Mi amor',        tr: 'Mi amor',            meaning: 'Meine Liebe',             lang: 'Spanisch' },
    { word: 'Mi corazón',     tr: 'Mi corazón',         meaning: 'Mein Herz',               lang: 'Spanisch' },
    { word: 'Mi vida',        tr: 'Mi vida',            meaning: 'Mein Leben',              lang: 'Spanisch' },
    { word: 'Mi cielo',       tr: 'Mi cielo',           meaning: 'Mein Himmel',             lang: 'Spanisch' },
    { word: 'Mi reina',       tr: 'Mi reina',           meaning: 'Meine Königin',           lang: 'Spanisch' },
    { word: 'Hermosa',        tr: 'Hermosa',            meaning: 'Schöne',                  lang: 'Spanisch' },

    // Français
    { word: 'Mon amour',      tr: 'Mon amour',          meaning: 'Meine Liebe',             lang: 'Französisch' },
    { word: 'Mon cœur',       tr: 'Mon cœur',           meaning: 'Mein Herz',               lang: 'Französisch' },
    { word: 'Ma chérie',      tr: 'Ma chérie',          meaning: 'Meine Liebste',           lang: 'Französisch' },
    { word: 'Ma reine',       tr: 'Ma reine',           meaning: 'Meine Königin',           lang: 'Französisch' },
    { word: 'Mon trésor',     tr: 'Mon trésor',         meaning: 'Mein Schatz',             lang: 'Französisch' },
    { word: 'Belle',          tr: 'Belle',              meaning: 'Schöne (wie aus Disney)', lang: 'Französisch · Disney' }
  ];

  /* === ISLAMIC VERSES + AHADITH (with Latin transliteration + German) === */
  const verses = [
    {
      src: 'Quran · Ar-Rum 30:21',
      ar: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
      tr: 'Wa min āyātihī an khalaqa lakum min anfusikum azwājan li-taskunū ilayhā wa ja\'ala baynakum mawaddatan wa raḥmah.',
      de: '„Und zu Seinen Zeichen gehört, dass Er euch aus euch selbst Gattinnen erschuf, damit ihr Ruhe bei ihnen findet — und Er hat zwischen euch Liebe und Barmherzigkeit gelegt." Das ist unsere Antwort, Habibti. Mawaddah wa Rahmah — Liebe & Erbarmen.'
    },
    {
      src: 'Quran · Adh-Dhariyat 51:49',
      ar: 'وَمِن كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ',
      tr: 'Wa min kulli shay\'in khalaqnā zawjayni la\'allakum tadhakkarūn.',
      de: '„Und von allem haben Wir Paare erschaffen, damit ihr nachdenkt." Allah hat uns als Paar gedacht — bevor wir uns gekannt haben, Janem.'
    },
    {
      src: 'Quran · An-Naba 78:8',
      ar: 'وَخَلَقْنَاكُمْ أَزْوَاجًا',
      tr: 'Wa khalaqnākum azwājā.',
      de: '„Und Wir haben euch als Paare erschaffen." Drei Worte. Eine ganze Beziehung. Du und ich, kein Zufall.'
    },
    {
      src: 'Nikkah-Du\'a · Sunan Abu Dawood',
      ar: 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
      tr: 'Bāraka Llāhu laka wa bāraka \'alayka wa jama\'a baynakumā fī khayr.',
      de: '„Möge Allah dich segnen, Segen über dich bringen — und euch beide im Guten vereinen." Das wurde über uns gesprochen, Galbi. Im Nikkah, vor Allah, gesegnet.'
    },
    {
      src: 'Quran · Al-Baqarah 2:187',
      ar: 'هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ',
      tr: 'Hunna libāsun lakum wa antum libāsun lahunn.',
      de: '„Sie sind ein Gewand für euch, und ihr seid ein Gewand für sie." Ich schütze dich, du wärmst mich. Wir sind füreinander Haut.'
    },
    {
      src: 'Quran · Al-Furqan 25:74',
      ar: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',
      tr: 'Rabbanā hab lanā min azwājinā wa dhurriyyātinā qurrata a\'yun.',
      de: '„Unser Herr, schenke uns an unseren Frauen und Kindern den Trost der Augen." Mein Du\'a, jede Nacht für dich und unsere Zukunft.'
    },
    {
      src: 'Hadith · Tirmidhi',
      ar: 'خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ وَأَنَا خَيْرُكُمْ لِأَهْلِي',
      tr: 'Khayrukum khayrukum li-ahlihi, wa anā khayrukum li-ahlī.',
      de: '„Der Beste von euch ist derjenige, der am besten zu seiner Familie ist — und ich bin der Beste zu meiner." (Prophet ﷺ) Mein täglicher Kompass.'
    },
    {
      src: 'Hadith · Sahih Muslim',
      ar: 'الدُّنْيَا مَتَاعٌ، وَخَيْرُ مَتَاعِ الدُّنْيَا الْمَرْأَةُ الصَّالِحَةُ',
      tr: 'Ad-dunyā matā\', wa khayru matā\'i d-dunyā al-mar\'atu s-sāliḥah.',
      de: '„Die Welt ist Vergnügen, und das beste Vergnügen ist eine rechtschaffene Frau." Du bist mein Diesseits-Lohn vor dem Jenseits-Lohn.'
    },
    {
      src: 'Hadith · Tirmidhi',
      ar: 'إِذَا أَحَبَّ أَحَدُكُمْ أَخَاهُ فَلْيُعْلِمْهُ',
      tr: 'Idhā aḥabba aḥadukum akhāhu, fal-yu\'limhu.',
      de: '„Wenn jemand seinen Bruder liebt, soll er es ihm sagen." Maryem — ich liebe dich. Vor Allah, vor der Welt, jetzt und für immer.'
    },
    {
      src: 'Hadith · Bukhari',
      ar: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
      tr: 'Lā yu\'minu aḥadukum ḥattā yuḥibba li-akhīhi mā yuḥibbu li-nafsihi.',
      de: '„Keiner von euch ist gläubig, bis er für seinen Bruder will, was er für sich selbst will." Ich will für dich nur das Beste — weil ich es mit dir auch will.'
    },
    {
      src: 'Hadith · Al-Bayhaqi',
      ar: 'إِذَا تَزَوَّجَ الْعَبْدُ فَقَدِ اسْتَكْمَلَ نِصْفَ الدِّينِ',
      tr: 'Idhā tazawwaja al-\'abdu fa-qadi-stakmala niṣfa d-dīn.',
      de: '„Wer heiratet, hat die Hälfte seiner Religion vervollständigt." (Prophet ﷺ) Du hast mein halbes Deen vervollständigt, Habibti — die andere Hälfte verbringe ich damit, deiner würdig zu sein.'
    },
    {
      src: 'Hadith · An-Nasa\'i',
      ar: 'الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ',
      tr: 'Al-jannatu taḥta aqdāmi l-ummahāt.',
      de: '„Das Paradies liegt unter den Füßen der Mütter." (Prophet ﷺ) Bald, Inshallah, gehst du auf diesem Boden — und ich werde der Mann sein, der das Paradies in deinem Schritt erkennt.'
    }
  ];

  /* === SRK / Bollywood / Arabic / Pashto / Islamic — Original + deutsche Übersetzung === */
  const srkLines = [
    '„Tum hi ho … mera dil tum hi ho." — Du bist es … mein Herz, du bist es. Habibti, Janem.',
    '„Bade bade deshon mein, aisi choti choti baatein hoti rehti hain." — In großen Ländern passieren solche kleinen Sachen. Auch im Schnee, auch beim DJ-Drama.',
    '„Pyar dosti hai." — Liebe ist Freundschaft. Du bist meine.',
    '„Kuch kuch hota hai." — Etwas passiert. Maryem, du verstehst alles.',
    '„Wa ja\'ala baynakum mawaddatan wa raḥmah." — Er hat zwischen uns Liebe & Barmherzigkeit gelegt. Alhamdulillah (Lob sei Allah).',
    'Janem (meine Seele), das Leben ist ein Film. Du bist Hauptrolle, Soundtrack und Happy End.',
    'Habibti (meine Geliebte) — wenn du tanzt, vergesse ich, dass ich Mika heiße.',
    'Shah Jahan baute den Taj Mahal für seine tote Frau. Ich baue dir alles, solange du lebst.',
    '„Khayrukum khayrukum li-ahlihi." — Der Beste von euch ist der Beste zu seiner Familie. Ich versuche es jeden Tag.',
    '„Saanson ki maala." — Eine Kette meiner Atemzüge — aus deinem Namen geknüpft.',
    '„Hunna libāsun lakum wa antum libāsun lahunn." — Sie sind ein Gewand für euch, ihr für sie. Wir sind füreinander Haut.',
    '„Janam Janam." — In diesem Leben und im nächsten — du.',
    '„Mera mehboob." — Meine/Mein Geliebte/r. Auf Urdu, Arabisch, Paschtu, Deutsch. Bedeutet immer dich.',
    '„Rabbanā hab lanā qurrata a\'yun." — Allah, schenke uns Trost der Augen. Du bist schon meiner.',
    'Crashout im Auto, Sommerreifen im Schnee, DJ-Drama — und trotzdem der schönste Tag meines Lebens.',
    'Drei Stunden Frühstück, kein Bissen gegessen — aber satter als je zuvor. Mit dir.',
    '„Idhā aḥabba aḥadukum akhāhu fal-yu\'limhu." — Liebst du jemanden, sag\'s ihm. Maryem, jeden Tag.',
    'Bagdad zu Kandahar sind 2000 km. Du zu mir sind 0. Alhamdulillah (Lob sei Allah).',
    'Du bist Frau, Sekretärin, Party-Plannerin, Hochzeitsplannerin. Bald Inshallah (so Allah will) Mutter. Eine Frau, hundert Geschenke.',
    '„Idhā tazawwaja al-\'abdu fa-qad istakmala niṣfa d-dīn." — Wer heiratet, vervollständigt sein halbes Deen (seine halbe Religion). Du hast meines.',
    '„Al-jannatu taḥta aqdāmi l-ummahāt." — Das Paradies liegt unter den Füßen der Mütter. Bald gehst du darauf.',
    '„Bāraka Llāhu laka wa jama\'a baynakumā fī khayr." — Möge Allah dich segnen und euch beide im Guten vereinen. Über uns gesprochen.',
    '„Mawaddah wa Rahmah." — Liebe & Barmherzigkeit. Quran 30:21. Wir, in einem Vers.',
    '„Yeh dosti hum nahin todenge." — Diese Freundschaft brechen wir nie. Tum hi ho meri yaariyaan — du bist meine Freundschaft.',
    '„Wa khalaqnākum azwājā." — Und Wir haben euch als Paare erschaffen. Allah hat dich für mich geschrieben.',
    '„Tujhe dekha to yeh jaana sanam." — Als ich dich sah, habe ich verstanden, mein Liebling. Maryem.',
    '„Galbi" (mein Herz) auf Irakisch · „Zma Zra" (mein Herz) auf Paschtu · „Mein Herz" auf Deutsch — drei Sprachen, ein Herz.',
    '„Subhanallah" — Glorie sei Allah. Wenn ich dich anschaue, ist das das einzige Wort, das passt.',
    'Riesstraße. Derselbe Hof. Derselbe Brunnen. Jahrelang. Ich habe deinen Schatten getroffen, bevor ich dein Gesicht kannte.',
    'Bagdad ↔ Kandahar ↔ München. Drei Städte, eine Geschichte. Meine.',
    'Wir hatten dieselben Freunde. Sind durch dieselben Treppenhäuser gerannt. Allah hat den Moment gewählt, wann wir uns endlich sehen.',
    'Deine Mama hat dich allein groß gezogen. Inshallah werde ich der Mann, dem das niemals nochmal passiert.',
    'Deine Oma in Malmö nennt mich „Darling" — größtes Diplom, das eine irakische Großmutter geben kann.',
    'Noor in Schweden, Monir aus Kandahar wie ich — sie waren das Vorbild, wir sind jetzt die Geschichte.',
    'Hajar in Berlin. Noor in Malmö. Saif & Yousef. Deine Cousins sind unsere zweite Familie.',
    'Dein Pandora-Armband wächst Charm um Charm — jede Reise ein Anhänger. Inschallah eines Tages voll wie Noors.',
    'Hajar wollte zu deinem Geburtstag kommen. Konnte nicht. Also fahren wir zu ihr — Familie macht keine Termine.'
  ];

  /* === MUSIC TRACKS === */
  const tracks = [
    // SRK & Bollywood
    { id: 'tumhi',     label: 'Tum Hi Ho',           cat: 'srk',    embed: 'Umqb9KENgmk' },
    { id: 'janam',     label: 'Janam Janam',         cat: 'srk',    embed: 'cgmhimjsczk' },
    { id: 'kabhi',     label: 'Kabhi Kabhi Aditi',   cat: 'srk',    embed: 'HIbzXaBdwZw' },
    { id: 'gerua',     label: 'Gerua · Dilwale',     cat: 'srk',    embed: 'AEIVhBS6baE' },
    { id: 'kalho',     label: 'Kal Ho Naa Ho',       cat: 'srk',    embed: 'tjpkbCyrxgU' },
    // Französisch / Indila
    { id: 'lovestory', label: 'Indila · Love Story', cat: 'fr',     embed: 'YqeW9_5kURI' },
    { id: 'derniere',  label: 'Indila · Dernière Danse', cat: 'fr', embed: 'K5KAc5CoCuk' },
    // Arabische romantische Lieder
    { id: 'tamally',   label: 'Amr Diab · Tamally Maak', cat: 'ar', embed: 'dY67ELrwIZk' },
    { id: 'noureen',   label: 'Amr Diab · Nour El Ein', cat: 'ar',  embed: 'KLJA-srM_yM' },
    { id: 'habbeit',   label: 'Fairuz · Habbeitak',  cat: 'ar',     embed: 'kuOWsVCKrhk' },
    { id: 'aaks',      label: 'Elissa · Aaks Ennas', cat: 'ar',     embed: 'WeR53A2sgdM' },
    { id: 'pashto',    label: 'Naghma · Kandahar',   cat: 'ar',     embed: '-ogNlWlornk' },
    // Surahs
    { id: 'rahman',    label: 'Surah Ar-Rahman',     cat: 'quran',  embed: 'M-vMmpFn0nQ' },
    { id: 'rum21',     label: 'Surah Ar-Rum · 30:21', cat: 'quran', embed: 'OZdFAUq0DT4' },
    { id: 'yaseen',    label: 'Surah Yaseen',        cat: 'quran',  embed: 'thuk6cikamQ' },
    { id: 'fatiha',    label: 'Surah Al-Fatiha',     cat: 'quran',  embed: 'PxIIIBjYM0Y' },
    // Hadithe / Du'a
    { id: 'duamarry',  label: "Du'a für Eheleute · Bāraka Llāhu",  cat: 'hadith', embed: 'wfL7vXMMfQI' },
    { id: 'hadithlove', label: 'Hadith · Liebe in der Ehe',  cat: 'hadith', embed: 'A3oqU3v_aMY' }
  ];
  const trackCats = [
    { id: 'srk',    label: '♥ SRK & Bollywood' },
    { id: 'fr',     label: '♥ Indila' },
    { id: 'ar',     label: '♥ Arabische Romantik' },
    { id: 'quran',  label: '☪ Surahs' },
    { id: 'hadith', label: '☪ Hadithe & Du\'a' }
  ];

  /* === STATE === */
  const LS_KEY = 'maryem_v3';
  const persisted = (() => {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch (e) { return {}; }
  })();

  const state = {
    currentDest: 'santorini',
    activeFilters: { vibe: 'all', flight: 'any' },
    likes: new Set(persisted.likes || []),
    compare: new Set(persisted.compare || ['santorini','bali','kyoto']),
    votes: persisted.votes || {},
    activeDay: 0,
    activeRoute: routes[0].id,
    cursorOn: persisted.cursorOn !== false,
    musicOpen: false,
    currentTrack: 'tumhi'
  };

  const save = () => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({
        likes: Array.from(state.likes),
        compare: Array.from(state.compare),
        votes: state.votes,
        cursorOn: state.cursorOn
      }));
    } catch (e) { /* ignore */ }
  };

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
  const findDest = (id) => destinations.find(d => d.id === id);

  /* === HEART ICON === */
  const heartSVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';

  /* === HERO HEADLINE WORD REVEAL + ROTATING PETNAME === */
  const heroPetnames = [
    /* Deutsch */
    'meine Königin?', 'mein Herz?', 'meine Liebe?', 'meine Maryem?', 'mein Schatz?', 'mein Engel?',
    /* English */
    'my Queen?', 'my Love?', 'my Sunshine?', 'my Everything?', 'Darling?', 'Sweetheart?',
    /* Arabisch */
    'Habibti?', 'Ya Albi?', 'Hayāti?', 'Rouhi?', 'Ya Omri?', 'Ya Galbi?', 'Nour el Ayni?',
    /* Paschtu */
    'Janem?', 'Zma Zra?', 'Gulabai?', 'Stergai?',
    /* Italiano */
    'Amore mio?', 'Tesoro mio?', 'Cuore mio?', 'Bellissima?',
    /* Español */
    'Mi amor?', 'Mi corazón?', 'Mi reina?', 'Hermosa?',
    /* Français */
    'Mon amour?', 'Mon cœur?', 'Ma chérie?', 'Ma reine?', 'Belle?',
    /* Bollywood */
    'Jaan?', 'Mehboob?'
  ];
  function buildHero() {
    const headline = $('#heroHeadline');
    const html = ['Wohin', 'entführe', 'ich', 'dich,'];
    headline.innerHTML = html.map((w, i) =>
      `<span class="word" style="animation-delay:${0.4 + i * 0.18}s">${w}</span> `
    ).join('') + `<em class="word" id="heroPetname" style="animation-delay:${0.4 + html.length * 0.18}s">${heroPetnames[0].replace(' ', '&nbsp;')}</em>`;

    let i = 0;
    setInterval(() => {
      const el = $('#heroPetname');
      if (!el) return;
      i = (i + 1) % heroPetnames.length;
      // Sparkle out: scatter sparkles, fade
      spawnSparkles(el, 8);
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      el.style.opacity = '0';
      el.style.transform = 'translateY(-4px) scale(0.96)';
      setTimeout(() => {
        el.innerHTML = heroPetnames[i].replace(' ', '&nbsp;');
        el.classList.remove('petname-shimmer');
        // force reflow
        void el.offsetWidth;
        el.classList.add('petname-shimmer');
        el.style.transform = 'translateY(6px) scale(0.98)';
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) scale(1)';
          spawnSparkles(el, 5);
        });
      }, 420);
    }, 3400);
  }

  /* === SPARKLE BURST (for petname rotation, etc.) === */
  function spawnSparkles(el, n = 6) {
    const r = el.getBoundingClientRect();
    for (let i = 0; i < n; i++) {
      const s = document.createElement('span');
      s.className = 'sparkle-piece';
      s.textContent = ['✦','✧','★','·'][i % 4];
      const x = r.left + Math.random() * r.width;
      const y = r.top + Math.random() * r.height;
      s.style.left = x + 'px';
      s.style.top = y + 'px';
      s.style.color = Math.random() > 0.5 ? '#f1d896' : '#ffd4d8';
      s.style.fontSize = (10 + Math.random() * 10) + 'px';
      document.body.appendChild(s);
      const dx = (Math.random() - 0.5) * 80;
      const dy = -20 - Math.random() * 60;
      s.animate(
        [{ transform: 'translate(0,0) scale(0.4)', opacity: 0 },
         { transform: `translate(${dx*0.4}px, ${dy*0.4}px) scale(1)`, opacity: 1, offset: 0.3 },
         { transform: `translate(${dx}px, ${dy}px) scale(0.2)`, opacity: 0 }],
        { duration: 900 + Math.random() * 500, easing: 'cubic-bezier(0.2,0.7,0.2,1)' }
      ).onfinish = () => s.remove();
    }
  }

  /* === NIKKAH COUNTER === */
  function startNikkahCounter() {
    const el = document.getElementById('nikkahDays');
    if (!el) return;
    const nikkah = new Date(2026, 0, 10); // 10.01.2026
    const update = () => {
      const now = new Date();
      const ms = now - nikkah;
      const days = Math.floor(ms / 86400000);
      const display = days >= 0 ? days : 0;
      el.textContent = display.toLocaleString('de-DE');
      el.dataset.days = display;
    };
    update();
    setInterval(update, 60000);
  }

  /* === FLOATING HEARTS === */
  function buildFloatingHearts() {
    const wrap = $('.floating-hearts');
    const symbols = ['♥', '✦', '♥', '✧', '♡'];
    for (let i = 0; i < 16; i++) {
      const s = document.createElement('span');
      s.textContent = symbols[i % symbols.length];
      const x = Math.random() * 100;
      const size = 12 + Math.random() * 18;
      const dur = 14 + Math.random() * 18;
      const delay = -Math.random() * 16;
      const colors = ['#e85a8c', '#d8b25c', '#ffd4d8', '#f1d896'];
      s.style.cssText = `left:${x}%;font-size:${size}px;color:${colors[i % colors.length]};opacity:.55;animation-duration:${dur}s;animation-delay:${delay}s;`;
      wrap.appendChild(s);
    }
  }

  /* === SRK TICKER (typewriter) === */
  function srkGlitter() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = document.getElementById('srkTicker');
    if (!t) return;
    const r = t.getBoundingClientRect();
    const s = document.createElement('span');
    s.className = 'srk-spark';
    s.textContent = ['✦','✧','★','·'][Math.floor(Math.random()*4)];
    s.style.left = (r.left + Math.random() * r.width) + 'px';
    s.style.top  = (r.top + Math.random() * r.height) + 'px';
    s.style.color = Math.random() > 0.5 ? '#f1d896' : '#ffd4d8';
    document.body.appendChild(s);
    s.animate([
      { transform: 'translate(0,0) scale(0.4)', opacity: 0 },
      { transform: 'translate(0,-12px) scale(1)', opacity: 1, offset: 0.3 },
      { transform: 'translate(0,-32px) scale(0.3)', opacity: 0 }
    ], { duration: 1400, easing: 'cubic-bezier(0.2,0.7,0.2,1)' }).onfinish = () => s.remove();
  }
  setInterval(srkGlitter, 1700);

  function startSrkTicker() {
    const el = $('#srkText');
    let line = 0, char = 0, deleting = false;
    function tick() {
      const text = srkLines[line];
      if (!deleting) {
        char++;
        el.textContent = text.slice(0, char);
        if (char === text.length) { deleting = true; setTimeout(tick, 4400); return; }
        setTimeout(tick, 36 + Math.random() * 40);
      } else {
        char--;
        el.textContent = text.slice(0, char);
        if (char === 0) { deleting = false; line = (line + 1) % srkLines.length; setTimeout(tick, 600); return; }
        setTimeout(tick, 18);
      }
    }
    tick();
  }

  /* === HERO VIDEO FALLBACK === */
  function setupHeroVideo() {
    const video = $('#heroVideo');
    if (!video) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      video.style.display = 'none';
      const img = document.createElement('img');
      img.src = video.poster;
      img.alt = 'Romantischer Sonnenuntergang';
      $('#heroBg').appendChild(img);
      return;
    }
    video.addEventListener('error', () => {
      video.style.display = 'none';
      const img = document.createElement('img');
      img.src = video.poster;
      img.alt = 'Romantisch';
      $('#heroBg').appendChild(img);
    });
  }

  /* === SUMMARY (right side of filters) === */
  function renderSummary(d) {
    const el = $('#heroSummary');
    el.innerHTML = `
      <div class="summary-content">
        <span class="region-label">${d.region} · ${d.country}</span>
        <h2>"${d.mapBlurb}"</h2>
        <button class="primary-action-btn" id="exploreNowBtn">
          ${d.name} entdecken
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
      <div class="pagination">
        <button id="prevDest" aria-label="Vorheriger Ort"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
        <span>${String(destinations.findIndex(x => x.id === d.id) + 1).padStart(2,'0')} / ${String(destinations.length).padStart(2,'0')}</span>
        <button id="nextDest" aria-label="Nächster Ort"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
      </div>
    `;
    $('#prevDest').onclick = () => stepDest(-1);
    $('#nextDest').onclick = () => stepDest(1);
    $('#exploreNowBtn').onclick = () => switchPage('reiseplaene');
  }

  function stepDest(dir) {
    const visible = filteredDests();
    const idx = visible.findIndex(x => x.id === state.currentDest);
    let next = (idx + dir + visible.length) % visible.length;
    if (idx === -1) next = 0;
    setCurrentDest(visible[next].id);
  }

  function setCurrentDest(id) {
    state.currentDest = id;
    const d = findDest(id);
    renderSummary(d);
    renderItinerary();
    renderMood();
  }

  /* === FILTERS === */
  function filteredDests() {
    return destinations.filter(d => {
      if (state.activeFilters.vibe !== 'all' && !d.vibe.includes(state.activeFilters.vibe)) return false;
      if (state.activeFilters.flight !== 'any' && d.flight !== state.activeFilters.flight) return false;
      return true;
    });
  }
  function bindFilters() {
    $$('#vibeFilters .filter-btn').forEach(btn => {
      btn.onclick = () => {
        $$('#vibeFilters .filter-btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        state.activeFilters.vibe = btn.dataset.filter;
        renderCarousel();
        const visible = filteredDests();
        if (visible.length && !visible.find(x => x.id === state.currentDest)) {
          setCurrentDest(visible[0].id);
        }
      };
    });
    $$('#flightFilters .filter-btn').forEach(btn => {
      btn.onclick = () => {
        $$('#flightFilters .filter-btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        state.activeFilters.flight = btn.dataset.flight;
        renderCarousel();
        const visible = filteredDests();
        if (visible.length && !visible.find(x => x.id === state.currentDest)) {
          setCurrentDest(visible[0].id);
        }
      };
    });
  }

  /* === CAROUSEL === */
  function renderCarousel() {
    const wrap = $('#destinationCarousel');
    const list = filteredDests();
    wrap.innerHTML = list.map(d => `
      <article class="dest-card" data-id="${d.id}" tabindex="0">
        <div class="dest-img-wrap">
          <button class="card-heart ${state.likes.has(d.id) ? 'is-liked' : ''}" data-heart="${d.id}" aria-label="Zu Favoriten">${heartSVG}</button>
          <img src="${d.image}" alt="${d.name}" loading="lazy" />
        </div>
        <div class="dest-info">
          <div class="dest-title-row"><h3>${d.name}</h3></div>
          <span class="dest-tags">${d.tagline}</span>
          <span class="dest-meta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${d.country} · ${d.flightTime}
          </span>
        </div>
      </article>
    `).join('');
    $$('.dest-card', wrap).forEach(card => {
      card.onclick = (e) => {
        if (e.target.closest('[data-heart]')) return;
        setCurrentDest(card.dataset.id);
        $('#top').scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
    });
    bindHearts(wrap);
  }

  /* === ITINERARY === */
  function renderItinerary() {
    const d = findDest(state.currentDest);
    $('#itineraryDropdownName').firstChild.textContent = d.name + ' ';
    const tabs = d.moodLines.map((line, i) => `
      <button class="day-tab ${i === state.activeDay ? 'is-active' : ''}" data-day="${i}">
        <strong>${['MORGEN','MITTAG','ABEND','NACHT'][i] || 'TAG ' + (i+1)}</strong>
        <span>${line[0]}</span>
      </button>
    `).join('');
    $('#itineraryTabs').innerHTML = tabs;
    const day = d.moodLines[state.activeDay];
    const dayImage = `${d.image.split('?')[0]}?auto=format&fit=crop&w=600&q=80`;
    $('#itineraryDetails').innerHTML = `
      <img src="${dayImage}" alt="${d.name}" loading="lazy" />
      <div class="day-info">
        <h4>${day[0]} in ${d.name}</h4>
        <p>${day[1]}</p>
        <ul class="day-highlights">
          ${(d.vibe.slice(0, 3)).map(v => `<li>${heartSVG.replace('<svg', '<svg ')}<span>${({luxuswert:'Romantisch',strand:'Strand',culture:'Kultur',nature:'Natur',abenteuer:'Abenteuer'})[v]}</span></li>`).join('')}
        </ul>
        <div class="day-cost"><span>BESTE ZEIT</span><strong>${d.bestTime}</strong></div>
      </div>
    `;
    $$('#itineraryTabs .day-tab').forEach(b => {
      b.onclick = () => { state.activeDay = +b.dataset.day; renderItinerary(); };
    });
  }

  /* === MOOD CARD === */
  function renderMood() {
    const d = findDest(state.currentDest);
    $('#moodDestName').textContent = d.name;
    $('#moodContent').innerHTML = d.moodLines.map(([k, v]) => `
      <div class="mood-line">
        <span class="mood-icon">${heartSVG}</span>
        <div class="mood-text"><strong>${k}</strong><span>${v}</span></div>
      </div>
    `).join('') + `<div class="mood-quote">„${d.mapBlurb}"</div>`;
  }

  /* === EXPERIENCES === */
  function renderExperiences() {
    // Preview on Entdecken — first 4 must-do romantic
    const preview = experiences.filter(e => e.cats.includes('must') || e.cats.includes('romantic')).slice(0, 4);
    $('#experiencesPreview').innerHTML = preview.map((e, i) => `
      <article class="experience-item" data-exp-idx="${experiences.indexOf(e)}">
        <img src="${e.img}" alt="${e.name}" loading="lazy" />
        <div class="exp-info"><span class="exp-place">${e.place}</span><h4>${e.name}</h4></div>
      </article>
    `).join('');
    $$('#experiencesPreview [data-exp-idx]').forEach(el => {
      el.onclick = () => openExpModal(parseInt(el.dataset.expIdx, 10));
    });

    // Filter tabs above grid
    const tabs = ['all', ...Object.keys(expCategories)];
    const expFilters = $('#expFilters');
    if (expFilters) {
      expFilters.innerHTML = tabs.map(t => {
        const meta = t === 'all' ? { icon: '◉', label: 'Alle' } : expCategories[t];
        const count = t === 'all' ? experiences.length : experiences.filter(e => e.cats.includes(t)).length;
        return `<button class="exp-filter-btn ${t === activeExpCategory ? 'is-active' : ''}" data-cat="${t}"><span class="exp-filter-icon">${meta.icon}</span>${meta.label} <em>${count}</em></button>`;
      }).join('');
      $$('.exp-filter-btn', expFilters).forEach(b => {
        b.onclick = () => { activeExpCategory = b.dataset.cat; renderExperiences(); };
      });
    }

    // Filtered grid
    const list = activeExpCategory === 'all' ? experiences : experiences.filter(e => e.cats.includes(activeExpCategory));
    $('#experiencesAll').innerHTML = list.map(e => {
      const idx = experiences.indexOf(e);
      const tagHtml = e.cats.slice(0, 2).map(c => `<span class="exp-cat" style="color:${expCategories[c].color}">${expCategories[c].icon} ${expCategories[c].label}</span>`).join('');
      return `
        <article class="experience-item" data-exp-idx="${idx}">
          <img src="${e.img}" alt="${e.name}" loading="lazy" />
          <div class="exp-info">
            <div class="exp-cats">${tagHtml}</div>
            <h4>${e.name}</h4>
            <span class="exp-place">${e.place}</span>
          </div>
        </article>
      `;
    }).join('');
    $$('#experiencesAll [data-exp-idx]').forEach(el => {
      el.onclick = () => openExpModal(parseInt(el.dataset.expIdx, 10));
    });
  }

  function openExpModal(idx) {
    const e = experiences[idx];
    if (!e) return;
    let modal = $('#expModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'expModal';
      modal.className = 'exp-modal-backdrop';
      document.body.appendChild(modal);
    }
    const tagHtml = e.cats.map(c => `<span class="exp-cat-pill" style="background:${expCategories[c].color}22;color:${expCategories[c].color};border-color:${expCategories[c].color}55">${expCategories[c].icon} ${expCategories[c].label}</span>`).join('');
    modal.innerHTML = `
      <div class="exp-modal" role="dialog" aria-label="${e.name}">
        <button class="exp-modal-close" aria-label="Schließen">×</button>
        <img src="${e.img}" alt="${e.name}">
        <div class="exp-modal-body">
          <span class="exp-modal-place">${e.place.toUpperCase()}</span>
          <h3>${e.name}</h3>
          <div class="exp-modal-cats">${tagHtml}</div>
          <p>${e.desc}</p>
        </div>
      </div>
    `;
    modal.classList.add('is-open');
    modal.onclick = (ev) => { if (ev.target === modal || ev.target.classList.contains('exp-modal-close')) modal.classList.remove('is-open'); };
    document.addEventListener('keydown', function esc(ev){ if (ev.key === 'Escape') { modal.classList.remove('is-open'); document.removeEventListener('keydown', esc); } });
  }

  /* === DESTINATIONS GRID === */
  function renderDestinationsGrid() {
    const grid = $('#destinationsGrid');
    grid.innerHTML = destinations.map(d => `
      <article class="dest-tile">
        <div class="dest-tile-img">
          <button class="card-heart ${state.likes.has(d.id) ? 'is-liked' : ''}" data-heart="${d.id}" aria-label="Zu Favoriten">${heartSVG}</button>
          <img src="${d.image}" alt="${d.name}" loading="lazy" />
        </div>
        <div class="dest-tile-body">
          <span class="region">${d.region} · ${d.country}</span>
          <h3>${d.name}</h3>
          <p>${d.tagline}</p>
          <div class="dest-tile-meta">
            <span class="chip">${d.flightTime}</span>
            <span class="chip">${d.bestTime}</span>
            <span class="chip">${d.mood}</span>
          </div>
        </div>
      </article>
    `).join('');
    bindHearts(grid);
  }

  /* === ROUTES === */
  function renderRoutes() {
    const grid = $('#routesGrid');
    grid.innerHTML = routes.map(r => {
      const stops = r.stops.map(s => findDest(s)?.name).filter(Boolean);
      return `
        <article class="route-card" style="background:rgba(246,236,222,0.04);border:1px solid var(--line);border-radius:var(--r-xl);overflow:hidden;box-shadow:var(--shadow-card);transition:all 0.4s ease;">
          <div style="position:relative;aspect-ratio:21/9;overflow:hidden;">
            <img src="${r.image}" alt="${r.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;animation:kenBurns 22s ease-in-out infinite alternate;" />
            <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 35%,rgba(7,3,13,0.92) 100%);"></div>
            <div style="position:absolute;left:28px;right:28px;bottom:24px;color:var(--paper);">
              <span style="font-size:11px;letter-spacing:0.16em;color:var(--gold);text-transform:uppercase;">${r.subtitle}</span>
              <h2 style="font-family:'Playfair Display',serif;font-size:42px;font-weight:500;margin:6px 0 10px;letter-spacing:-0.02em;text-shadow:0 4px 30px rgba(0,0,0,0.6);">${r.title}</h2>
              <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:18px;margin:0;color:rgba(246,236,222,0.85);max-width:560px;">${r.blurb}</p>
            </div>
          </div>
          <div style="padding:24px 28px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;">
            ${r.days.map(d => `
              <div style="padding:16px;background:rgba(216,178,92,0.06);border:1px solid var(--line-soft);border-radius:var(--r-m);">
                <span style="font-size:11px;letter-spacing:0.14em;color:var(--gold);text-transform:uppercase;">${d.day} · ${d.place}</span>
                <h4 style="font-family:'Playfair Display',serif;font-size:20px;font-weight:500;color:var(--paper);margin:6px 0 6px;">${d.title}</h4>
                <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:15px;line-height:1.45;margin:0;color:rgba(246,236,222,0.78);">${d.desc}</p>
              </div>
            `).join('')}
          </div>
          <div style="padding:18px 28px 24px;display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:space-between;border-top:1px solid var(--line-soft);">
            <div style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:14px;color:rgba(246,236,222,0.7);">Stops: ${stops.join(' → ')}</div>
            <button class="primary-action-btn" data-route-pick="${r.id}">
              Diese Route wählen
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </article>
      `;
    }).join('');

    grid.style.cssText = 'padding:12px 24px 32px;display:flex;flex-direction:column;gap:24px;';
    $$('[data-route-pick]', grid).forEach(b => {
      b.onclick = () => {
        state.activeRoute = b.dataset.routePick;
        switchPage('reiseplaene');
        renderPlanTimeline();
      };
    });
  }

  /* === COMPARE PAGE === */
  function renderComparePage() {
    const ids = state.likes.size >= 2 ? Array.from(state.likes).slice(0, 4) : Array.from(state.compare).slice(0, 4);
    if (ids.length < 2) {
      $('#comparePage').innerHTML = `
        <div class="empty-love">
          <span class="empty-ornament">${heartSVG}</span>
          <h3>Hertz' dir mindestens zwei Orte</h3>
          <p>Tippe auf ein paar Herzen, dann zeige ich dir hier alles direkt nebeneinander, Janem.</p>
          <a class="empty-cta" href="#reiseziele" data-nav>Reiseziele ansehen</a>
        </div>
      `;
      bindNavLinks();
      return;
    }
    const dests = ids.map(findDest);
    const cols = `100px repeat(${dests.length}, 1fr)`;
    const rows = [
      { label: 'Tagline', key: d => d.tagline },
      { label: 'Region', key: d => `${d.region} · ${d.country}` },
      { label: 'Flugzeit', key: d => d.flightTime },
      { label: 'Beste Zeit', key: d => d.bestTime },
      { label: 'Stimmung', key: d => d.mood },
      { label: 'Vibe', key: d => d.vibe.map(v => ({luxuswert:'Romantisch',strand:'Strand',culture:'Kultur',nature:'Natur',abenteuer:'Abenteuer'})[v]).join(', ') },
      { label: 'Mika sagt', key: d => `„${d.mapBlurb}"` }
    ];
    $('#comparePage').innerHTML = `
      <div class="compare-grid" style="grid-template-columns:${cols};">
        <div class="corner"><span>Side by side</span><em>für meine Maryem</em></div>
        ${dests.map(d => `<div class="compare-img-cell"><img src="${d.image}" alt="${d.name}" loading="lazy" /><span class="name">${d.name}</span></div>`).join('')}
        ${rows.map(row => `
          <div class="label">${row.label}</div>
          ${dests.map(d => `<div class="value">${row.key(d)}</div>`).join('')}
        `).join('')}
      </div>
    `;
  }

  /* === REISEPLAENE === */
  function renderPlanSwitch() {
    $('#planSwitch').innerHTML = routes.map(r => `
      <button class="${r.id === state.activeRoute ? 'is-active' : ''}" data-route="${r.id}">${r.title}</button>
    `).join('');
    $$('#planSwitch button').forEach(b => {
      b.onclick = () => { state.activeRoute = b.dataset.route; renderPlanSwitch(); renderPlanTimeline(); };
    });
  }
  function renderPlanTimeline() {
    const r = routes.find(x => x.id === state.activeRoute) || routes[0];
    const heroDay = r.days[0];
    const heroDest = findDest(r.stops[0]);
    $('#planTimeline').innerHTML = `
      <section class="plan-hero">
        <img src="${r.image}" alt="${r.title}" />
        <div class="plan-hero-overlay"></div>
        <div class="plan-hero-text">
          <span>${r.subtitle}</span>
          <h2>${r.title}</h2>
          <p>${r.blurb}</p>
        </div>
      </section>
      ${r.days.map((d, i) => {
        const dest = findDest(r.stops[Math.min(i, r.stops.length - 1)]) || heroDest;
        const dayImage = d.image || dest.image;
        return `
          <section class="plan-day">
            <div class="plan-day-tag">${d.day}<span>${d.place}</span></div>
            <article class="plan-day-card">
              <div class="plan-day-img"><img src="${dayImage}" alt="${d.place}" loading="lazy" /></div>
              <div class="plan-day-body">
                <h3>${d.title}</h3>
                <p>${d.desc}</p>
                <ul>${dest.vibe.map(v => `<li>${({luxuswert:'Romantisch',strand:'Strand',culture:'Kultur',nature:'Natur',abenteuer:'Abenteuer'})[v]}</li>`).join('')}</ul>
              </div>
            </article>
          </section>
        `;
      }).join('')}
    `;
  }

  /* === FAVORITEN === */
  function renderFavorites() {
    const list = $('#favoritesList');
    if (state.likes.size === 0) {
      list.innerHTML = `
        <div class="empty-love">
          <span class="empty-ornament">${heartSVG}</span>
          <h3>Noch kein Herz vergeben</h3>
          <p>Schau dir die Reiseziele an und drücke das Herz auf den Karten, die dein Herz tanzen lassen.</p>
          <a class="empty-cta" href="#reiseziele" data-nav>Reiseziele entdecken</a>
        </div>
      `;
      bindNavLinks();
      return;
    }
    list.innerHTML = Array.from(state.likes).map(id => {
      const d = findDest(id); if (!d) return '';
      return `
        <article class="fav-row">
          <img src="${d.image}" alt="${d.name}" loading="lazy" />
          <div class="fav-body">
            <h3>${d.name} <span style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:16px;color:var(--gold-soft);">· ${d.country}</span></h3>
            <p>${d.summary}</p>
          </div>
          <div class="fav-actions">
            <button class="vote-btn" data-heart="${d.id}">${heartSVG}<span>Entfernen</span></button>
          </div>
        </article>
      `;
    }).join('');
    bindHearts(list);
  }

  /* === ABSTIMMEN === */
  let activeVoteFilter = 'all'; // all | dest | route | favorites

  function renderVoteArena() {
    const arena = $('#voteArena');
    const tabs = $('#voteFilters');

    if (tabs) {
      tabs.innerHTML = `
        <button class="vote-filter-btn ${activeVoteFilter==='all'?'is-active':''}" data-vfilter="all">◉ Alle <em>${destinations.length + routes.length}</em></button>
        <button class="vote-filter-btn ${activeVoteFilter==='dest'?'is-active':''}" data-vfilter="dest">📍 Einzelne Orte <em>${destinations.length}</em></button>
        <button class="vote-filter-btn ${activeVoteFilter==='route'?'is-active':''}" data-vfilter="route">🛤 Kombi-Reisen <em>${routes.length}</em></button>
        <button class="vote-filter-btn ${activeVoteFilter==='favorites'?'is-active':''}" data-vfilter="favorites">♥ Favoriten <em>${state.likes.size}</em></button>
      `;
      $$('.vote-filter-btn', tabs).forEach(b => {
        b.onclick = () => { activeVoteFilter = b.dataset.vfilter; renderVoteArena(); };
      });
    }

    const votes = state.votes;
    let items = [];
    if (activeVoteFilter === 'dest' || activeVoteFilter === 'all') {
      items = items.concat(destinations.map(d => ({ kind: 'dest', id: d.id, name: d.name, sub: d.country, img: d.image, why: d.tagline })));
    }
    if (activeVoteFilter === 'route' || activeVoteFilter === 'all') {
      items = items.concat(routes.map(r => ({ kind: 'route', id: r.id, name: r.title, sub: r.subtitle, img: r.image, why: r.blurb })));
    }
    if (activeVoteFilter === 'favorites') {
      items = Array.from(state.likes).map(id => {
        const d = findDest(id);
        return d ? { kind: 'dest', id: d.id, name: d.name, sub: d.country, img: d.image, why: d.tagline } : null;
      }).filter(Boolean);
    }

    if (!items.length) {
      arena.innerHTML = `<div class="empty-love"><span class="empty-ornament">${heartSVG}</span><h3>Noch nichts hier</h3><p>Tipp Herzen auf Reisezielen — sie erscheinen dann hier zum Abstimmen.</p><a class="empty-cta" href="#reiseziele" data-nav>Reiseziele entdecken</a></div>`;
      bindNavLinks();
      return;
    }

    const totals = items.map(it => (votes[it.id]?.maryem || 0) + (votes[it.id]?.mika || 0));
    const maxTotal = Math.max(...totals, 0);

    arena.innerHTML = items.map((it) => {
      const v = votes[it.id] || { mika: 0, maryem: 0 };
      const total = v.mika + v.maryem;
      const pct = maxTotal ? (total / maxTotal) * 100 : 0;
      const isLeading = total === maxTotal && total > 0;
      const kindLabel = it.kind === 'route' ? '🛤 Kombi-Reise' : '📍 Einzelner Ort';
      return `
        <article class="vote-card ${isLeading ? 'is-leading' : ''}">
          <div class="vote-card-img">
            <img src="${it.img}" alt="${it.name}" loading="lazy" />
            <span class="vote-kind-pill">${kindLabel}</span>
          </div>
          <div class="vote-card-body">
            <h3>${it.name} <span style="font-family:'Cormorant Garamond',serif;font-style:italic;color:var(--gold-soft);font-size:14px;">${it.sub}</span></h3>
            <p class="why">${it.why}</p>
            <div class="vote-bar"><div class="vote-bar-fill" style="width:${pct}%"></div></div>
            <div class="vote-meta">
              <span>${total} Stimme${total === 1 ? '' : 'n'}</span>
              <span>${v.mika ? '♥ Mika' : ''} ${v.maryem ? '♥ Maryem' : ''}</span>
            </div>
            <div class="vote-btns">
              <button class="vote-mika ${v.mika ? 'is-on' : ''}" data-vote="mika" data-vote-id="${it.id}">Mika ♥</button>
              <button class="vote-maryem ${v.maryem ? 'is-on' : ''}" data-vote="maryem" data-vote-id="${it.id}">Maryem ♥</button>
            </div>
          </div>
        </article>
      `;
    }).join('');
    $$('[data-vote]', arena).forEach(b => {
      b.onclick = () => {
        const id = b.dataset.voteId, who = b.dataset.vote;
        state.votes[id] = state.votes[id] || { mika: 0, maryem: 0 };
        state.votes[id][who] = state.votes[id][who] ? 0 : 1;
        save();
        renderVoteArena();
        if (state.votes[id][who]) { burstConfetti(20); vibrate(40); playTing(660); }
      };
    });
  }

  /* === LIEBESBRIEFE === */
  function renderVerses() {
    const grid = $('#versesGrid');
    if (!grid) return;
    grid.innerHTML = verses.map(v => `
      <article class="verse">
        <span class="verse-src">${v.src}</span>
        <span class="verse-ar" lang="ar" dir="rtl">${v.ar}</span>
        <span class="verse-tr">${v.tr}</span>
        <span class="verse-de">${v.de}</span>
      </article>
    `).join('');
  }
  function applyDropCap(html) {
    // wrap first letter of body text in a drop-cap span
    const m = html.match(/^(\s*)([A-Za-zÀ-ÿ„"'])/);
    if (!m) return html;
    const idx = m.index + m[1].length;
    return html.slice(0, idx) + '<span class="drop-cap">' + html[idx] + '</span>' + html.slice(idx + 1);
  }

  /* === PANDORA-ARMBAND CHARMS === */
  const pandoraCharms = [
    { id: 'erstes',  glyph: '🍛', label: '14.10.2024 · Erstes Treffen',  story: 'Indisches Essen mit Samira und Enes. Anstarrwettbewerb gewonnen, Habibti.' },
    { id: 'cola',    glyph: '🥤', label: 'Die Cola im Abbacos',          story: 'Du als Hostess, eine Cola in deiner Hand — ich wusste es da schon.' },
    { id: 'samira',  glyph: '✉',  label: 'Samira: ich hab nichts damit zu tun', story: 'Indisch mit Samira und Enes — sie hat nichts damit zu tun. Allah hat es geschrieben.' },
    { id: 'museum',  glyph: '🖼', label: 'Vorm Museum · 14.10.2024',      story: 'Nach dem Anstarrwettbewerb. „Du bist das schönste arabische Gemälde da drinnen."' },
    { id: 'parfum',  glyph: '🌸', label: 'Autoparfüm · Tag 2',           story: 'Zwei Tage kannten wir uns. Du hast mir ein Autoparfüm gekauft. Ich wusste: das ist sie.' },
    { id: 'allguth', glyph: '⛽', label: 'Allguth · Mein Sohn',           story: 'Benzin in den Diesel, Auto schieben — „Komm, Mama." / „Mein Sohn."' },
    { id: 'fruh',    glyph: '🥐', label: 'Frühstück · 17.10.2024',        story: 'Vier Stunden, nichts gegessen. Über Allah und die Welt geredet.' },
    { id: 'kino',    glyph: '🎬', label: 'Kino · Tage geplant, eine Frage',story: 'Tagelang habe ich geplant, neben dir zu sitzen. Du hast einfach gefragt, kurz vorm Saal: „Willst du neben mir sitzen?" Habibti, ich hatte alles geplant — und du warst schneller.' },
    { id: 'oez',     glyph: '🛍', label: 'OEZ · Samiras „Zufall"',          story: 'Samira hat dich rausgerufen, ins OEZ gebracht — „zufällig" da: ich und Juan, mein und jetzt auch dein bester Freund. Der mit uns in Dubai war.' },
    { id: 'cafe',    glyph: '☕', label: 'Café · Der Geiz-Test',           story: 'Du und Samira habt geguckt, ob ich zahle. Ihr hattet gehört, ich wäre geizig. Habibti — für dich zahle ich alles.' },
    { id: 'balkon',  glyph: '🌙', label: 'Balkon · Noor & Monir',         story: '„Inschallah genauso." Zwei Kinder, ein Hof, ein Du\'a.' },
    { id: 'pandora', glyph: '✨', label: 'Pandora · Charm um Charm',      story: 'Wie Monir Noor — jedes Charm ein Tag, der bleibt.' },
    { id: 'opa',     glyph: '🍽', label: 'Opas Verschwörungs-Essen',       story: 'Meine Familie hat dich aufgenommen. Mit Lachen, mit allem.' },
    { id: 'nikkah',  glyph: '💍', label: 'Nikkah · Penzberg 10.01.2026',  story: 'Bāraka Llāhu laka wa jama\'a baynakumā fī khayr.', confetti: true },
    { id: 'walima',  glyph: '🌹', label: 'Walima · 2027 Inschallah',      story: 'Unser Fest. Deine Familie, meine Familie — ein Saal voller Liebe.' },
    { id: 'kinder',  glyph: '👶', label: 'Kinder · 2028–29 Inschallah',   story: 'Klein-Maryem mit deinen Augen, klein-Mika mit deinem Lachen.' },
    { id: 'mekka',   glyph: '🕋', label: 'Umrah · Mekka & Medina',        story: 'Hand in Hand vor der Kaaba. Höchstes Ziel, höchste Liebe.' }
  ];

  function renderPandora() {
    const wrap = document.getElementById('pandoraCharms');
    if (!wrap) return;
    wrap.innerHTML = pandoraCharms.map((c, i) => {
      const t = i / (pandoraCharms.length - 1);
      const u = 1 - t;
      const x = u*u*60 + 2*u*t*550 + t*t*1040;
      const y = u*u*240 + 2*u*t*(-40) + t*t*240;
      const xPct = (x / 1100 * 100).toFixed(2);
      const yPct = (y / 320 * 100).toFixed(2);
      return `<button class="pandora-charm" data-charm="${c.id}" style="left:${xPct}%;top:${yPct}%;animation-delay:${(i * 0.12).toFixed(2)}s" aria-label="${c.label}"><span class="charm-bead"><span class="charm-glyph">${c.glyph}</span></span><span class="charm-tip"><strong>${c.label}</strong><em>${c.story}</em></span></button>`;
    }).join('');
    Array.from(wrap.querySelectorAll('.pandora-charm')).forEach(b => {
      b.addEventListener('mouseenter', () => playTing(620 + Math.random() * 280, 0.05));
      b.addEventListener('click', () => {
        const c = pandoraCharms.find(x => x.id === b.dataset.charm);
        if (!c) return;
        burstConfetti(c.confetti ? 44 : 16, b);
        playTing(880 + Math.random() * 200, 0.07);
        const r = b.getBoundingClientRect();
        const txt = c.id === 'nikkah' ? 'Bāraka Llāhu laka' : c.id === 'allguth' ? 'Mein Sohn' : c.id === 'mekka' ? 'Labbayk Allāhumma' : c.id === 'cola' ? 'Cola, Habibti' : c.label.split('·')[0].trim();
        spawnLoveText(r.left + r.width/2, r.top + r.height/2 - 10, txt);
        if (typeof vibrate === 'function') vibrate(30);
      });
    });
  }

  function renderLetters() {
    renderVerses();
    $('#petnamesGrid').innerHTML = petnames.map(p => `
      <button class="petname" data-pet="${p.tr}">
        <span class="petname-word" lang="ar">${p.word}</span>
        <span class="petname-tr">${p.tr} · ${p.meaning}</span>
        <span class="petname-lang">${p.lang}</span>
      </button>
    `).join('');
    $$('.petname').forEach(b => {
      b.onclick = () => { playTing(520 + Math.random() * 240); spawnHeartTrail(b); };
      b.onmouseenter = () => { playTing(720 + Math.random() * 200, 0.04); };
    });

    const grid = $('#lettersGrid');
    const SAVED = parseInt(localStorage.getItem('letter_index') || '0', 10);
    const start = Math.min(Math.max(SAVED, 0), letters.length - 1);
    const letterHtml = (l) => `
        <span class="letter-pin">${l.pin}</span>
        <div class="letter-paper" aria-hidden="true"></div>
        <h3>${l.title}</h3>
        <p>${applyDropCap(l.body)}</p>
        <span class="letter-sign">${l.sign}</span>
        <div class="letter-actions">
          <button class="letter-action-btn" data-script="${l.id}" aria-label="Handschrift"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>Handschrift</button>
          <button class="letter-action-btn" data-speak="${l.id}" aria-label="Vorlesen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>Vorlesen</button>
          <button class="letter-action-btn" data-wa="${l.id}" aria-label="An Mama / Hajar via WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5 0-.1-.7-1.6-.9-2.2-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.6.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4C8.7 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>WhatsApp</button>
          <button class="letter-action-btn" data-share="${l.id}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>Teilen</button>
          <button class="letter-action-btn" onclick="window.print()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>Drucken</button>
        </div>`;
    grid.innerHTML = `
      <div class="letter-book" id="letterBook" data-index="${start}">
        <div class="letter-stage" id="letterStage">
          <article class="letter ${letters[start].featured ? 'is-featured' : ''} is-active" data-i="${start}">${letterHtml(letters[start])}</article>
        </div>
        <button class="letter-nav letter-nav-prev" id="letterPrev" aria-label="Vorheriger Brief">‹</button>
        <button class="letter-nav letter-nav-next" id="letterNext" aria-label="Nächster Brief">›</button>
        <div class="letter-tabs" id="letterTabs">
          ${letters.map((l, i) => `<button class="letter-tab ${i === start ? 'is-active' : ''}" data-go="${i}" aria-label="${l.title}"><span>${String(i + 1).padStart(2, '0')}</span></button>`).join('')}
        </div>
      </div>`;

    const book = $('#letterBook');
    const stage = $('#letterStage');
    let curIdx = start;
    let busy = false;

    function go(nextIdx, dir) {
      if (busy) return;
      nextIdx = (nextIdx + letters.length) % letters.length;
      if (nextIdx === curIdx) return;
      busy = true;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const direction = dir || (nextIdx > curIdx || (curIdx === letters.length - 1 && nextIdx === 0) ? 1 : -1);
      const cur = stage.querySelector('.letter.is-active');
      const next = document.createElement('article');
      next.className = 'letter ' + (letters[nextIdx].featured ? 'is-featured ' : '') + (direction === 1 ? 'enter-right' : 'enter-left');
      next.dataset.i = nextIdx;
      next.innerHTML = letterHtml(letters[nextIdx]);
      stage.appendChild(next);
      bindActions(next);
      // trigger curl on outgoing
      if (cur) {
        cur.classList.remove('is-active');
        cur.classList.add(direction === 1 ? 'curl-out-left' : 'curl-out-right');
      }
      // tabs
      $$('.letter-tab').forEach((t, i) => t.classList.toggle('is-active', i === nextIdx));
      requestAnimationFrame(() => {
        next.classList.remove('enter-right', 'enter-left');
        next.classList.add('is-active');
      });
      const dur = reduce ? 50 : 760;
      setTimeout(() => {
        if (cur && cur.parentNode === stage) stage.removeChild(cur);
        curIdx = nextIdx;
        book.dataset.index = nextIdx;
        localStorage.setItem('letter_index', String(nextIdx));
        busy = false;
        if (typeof playTing === 'function') playTing(540 + Math.random() * 180, 0.04);
      }, dur);
    }

    function bindActions(scope) {
      scope.querySelectorAll('[data-share]').forEach(b => {
        b.onclick = async () => {
          const l = letters.find(x => x.id === b.dataset.share);
          const text = `${l.title}\n\n${l.body}\n\n${l.sign}`;
          if (navigator.share) {
            try { await navigator.share({ title: 'Für Maryem ♥', text }); } catch {}
          } else {
            try { await navigator.clipboard.writeText(text); b.innerHTML = '✓ Kopiert'; setTimeout(() => b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>Teilen', 1400); } catch {}
          }
        };
      });
      scope.querySelectorAll('[data-wa]').forEach(b => {
        b.onclick = () => {
          const l = letters.find(x => x.id === b.dataset.wa);
          const msg = `${l.title}\n\n${l.body}\n\n${l.sign}\n\n— marymika.de`;
          window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank', 'noopener');
        };
      });
      scope.querySelectorAll('[data-script]').forEach(b => {
        b.onclick = () => {
          const art = b.closest('.letter');
          art.classList.toggle('is-handwritten');
          b.classList.toggle('is-on', art.classList.contains('is-handwritten'));
          if (typeof playTing === 'function') playTing(660, 0.04);
        };
      });
      scope.querySelectorAll('[data-speak]').forEach(b => {
        b.onclick = () => speakLetter(letters.find(x => x.id === b.dataset.speak), b);
      });
    }
    bindActions(stage);

    $('#letterPrev').onclick = () => go(curIdx - 1, -1);
    $('#letterNext').onclick = () => go(curIdx + 1, 1);
    $$('.letter-tab').forEach(t => {
      t.onclick = () => go(parseInt(t.dataset.go, 10));
    });

    // Keyboard nav (only when on this page)
    if (!window._letterKeyBound) {
      window._letterKeyBound = true;
      document.addEventListener('keydown', (e) => {
        if (location.hash !== '#liebesbriefe') return;
        if (e.target.matches('input, textarea')) return;
        const b = document.getElementById('letterBook');
        if (!b) return;
        const cur = parseInt(b.dataset.index, 10) || 0;
        if (e.key === 'ArrowLeft') { e.preventDefault(); $('#letterPrev').click(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); $('#letterNext').click(); }
      });
    }

    // Swipe nav
    let tx = 0, ty = 0;
    stage.addEventListener('touchstart', (e) => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
    stage.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - tx;
      const dy = e.changedTouches[0].clientY - ty;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) $('#letterNext').click(); else $('#letterPrev').click();
      }
    }, { passive: true });
  }

  /* === TTS for letters (Web Speech) === */
  let ttsActive = null;
  function speakLetter(l, btn) {
    if (!('speechSynthesis' in window) || !l) return;
    if (ttsActive && ttsActive.btn === btn) {
      window.speechSynthesis.cancel();
      ttsActive.btn.classList.remove('is-speaking');
      ttsActive = null;
      return;
    }
    if (ttsActive) {
      window.speechSynthesis.cancel();
      ttsActive.btn.classList.remove('is-speaking');
    }
    const u = new SpeechSynthesisUtterance(`${l.title}. ${l.body}. ${l.sign}.`);
    u.lang = 'de-DE';
    u.rate = 0.9;
    u.pitch = 1.05;
    u.volume = 1;
    // Pick a German voice if available; prefer male for Mika's letters
    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const de = voices.filter(v => v.lang && v.lang.startsWith('de'));
      if (!de.length) return;
      const male = de.find(v => /male|männ|markus|stefan|yannick|conrad|daniel/i.test(v.name));
      u.voice = male || de[0];
    };
    pickVoice();
    if (!u.voice) window.speechSynthesis.onvoiceschanged = pickVoice;
    btn.classList.add('is-speaking');
    ttsActive = { btn, u };
    u.onend = u.onerror = () => {
      btn.classList.remove('is-speaking');
      if (ttsActive && ttsActive.btn === btn) ttsActive = null;
    };
    window.speechSynthesis.speak(u);
  }

  /* === SHORTLIST + COMPARE DRAWER === */
  function renderShortlist() {
    const ids = Array.from(state.likes);
    $('#shortlistBadge').textContent = ids.length;
    $('#navFavoritesBadge').textContent = ids.length;
    $('#shortlistCandidates').innerHTML = ids.length === 0
      ? `<span style="font-family:'Cormorant Garamond',serif;font-style:italic;color:var(--muted);font-size:13px;">Noch nichts ausgewählt — tipp ein Herz auf einer Karte ♥</span>`
      : ids.map(id => {
          const d = findDest(id); if (!d) return '';
          return `
            <div class="candidate">
              <img src="${d.image}" alt="" />
              <div class="info"><strong>${d.name}</strong><span>${d.region}</span></div>
            </div>
          `;
        }).join('');
  }

  function renderCompareDrawer() {
    const ids = state.likes.size >= 2 ? Array.from(state.likes).slice(0, 3) : Array.from(state.compare).slice(0, 3);
    $('#compareBadge').textContent = ids.length;
    $('#compareThumbs').innerHTML = ids.map(id => {
      const d = findDest(id); if (!d) return '';
      return `
        <div class="thumb-card">
          <img src="${d.image}" alt="" />
          <span>${d.name}</span>
          <button class="remove-btn" data-remove="${id}" aria-label="Entfernen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
        </div>
      `;
    }).join('');
    const rows = [
      { label: 'Vibe', key: d => d.mood },
      { label: 'Klima', key: d => d.bestTime.split('–')[0].trim() },
      { label: 'Flug', key: d => d.flightTime },
      { label: '♥ Score', key: d => `<span class="hearts-score">${'♥'.repeat(d.hearts)}<span class="empty-heart">${'♥'.repeat(5 - d.hearts)}</span></span>` }
    ];
    $('#compareTable').innerHTML = rows.map(r => `
      <div class="table-row" style="grid-template-columns:90px repeat(${ids.length},1fr);">
        <span class="row-label">${r.label}</span>
        ${ids.map(id => `<span>${r.key(findDest(id))}</span>`).join('')}
      </div>
    `).join('');

    $$('[data-remove]').forEach(b => {
      b.onclick = () => {
        const id = b.dataset.remove;
        if (state.likes.has(id)) state.likes.delete(id);
        else state.compare.delete(id);
        save(); refreshAll();
      };
    });
  }

  /* === HEARTS BINDING === */
  function bindHearts(scope = document) {
    $$('[data-heart]', scope).forEach(b => {
      b.onclick = (e) => {
        e.stopPropagation();
        const id = b.dataset.heart;
        if (state.likes.has(id)) {
          state.likes.delete(id);
          b.classList.remove('is-liked');
        } else {
          state.likes.add(id);
          b.classList.add('is-liked');
          burstConfetti(28, b);
          vibrate(35);
          playTing(880 + Math.random() * 200);
        }
        save();
        refreshAll();
      };
    });
  }

  /* === CONFETTI === */
  function burstConfetti(n = 24, anchor) {
    const symbols = ['♥', '✦', '★', '♡'];
    const colors = ['#e85a8c', '#d8b25c', '#ffd4d8', '#f1d896', '#ffffff'];
    const rect = anchor ? anchor.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    for (let i = 0; i < n; i++) {
      const p = document.createElement('span');
      p.className = 'confetti-piece';
      p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      p.style.color = colors[Math.floor(Math.random() * colors.length)];
      p.style.left = cx + 'px';
      p.style.top = cy + 'px';
      p.style.fontSize = (12 + Math.random() * 10) + 'px';
      document.body.appendChild(p);
      const angle = Math.random() * Math.PI * 2;
      const dist = 80 + Math.random() * 140;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist - 40;
      const rot = (Math.random() * 720 - 360);
      p.animate(
        [{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: `translate(${dx}px, ${dy}px) rotate(${rot}deg)`, opacity: 0 }],
        { duration: 1100 + Math.random() * 600, easing: 'cubic-bezier(0.2,0.7,0.2,1)' }
      ).onfinish = () => p.remove();
    }
    // ~25% of bursts: also form "I love you" text that floats up
    if (n >= 24 && Math.random() < 0.6) spawnLoveText(cx, cy);
  }

  /* === EPHEMERAL TEXT (forms after confetti, floats up, fades) === */
  function spawnLoveText(cx, cy, text = 'I love you') {
    const t = document.createElement('span');
    t.className = 'love-text-burst';
    t.textContent = text;
    t.style.left = cx + 'px';
    t.style.top = cy + 'px';
    document.body.appendChild(t);
    t.animate(
      [{ transform: 'translate(-50%, -50%) scale(0.4)', opacity: 0, filter: 'blur(8px)' },
       { transform: 'translate(-50%, -90%) scale(1)', opacity: 1, filter: 'blur(0)', offset: 0.4 },
       { transform: 'translate(-50%, -160%) scale(1.05)', opacity: 0, filter: 'blur(2px)' }],
      { duration: 2200, easing: 'cubic-bezier(0.2,0.7,0.2,1)' }
    ).onfinish = () => t.remove();
  }

  /* === INTRO VEIL (3-second fade greeting) === */
  function runIntroVeil() {
    const veil = document.getElementById('introVeil');
    if (!veil) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      veil.remove();
      return;
    }
    // Build subtle stars
    const stars = veil.querySelector('.intro-stars');
    if (stars) {
      for (let i = 0; i < 28; i++) {
        const s = document.createElement('span');
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.animationDelay = (Math.random() * 2.4) + 's';
        s.style.opacity = (0.3 + Math.random() * 0.7).toFixed(2);
        stars.appendChild(s);
      }
    }
    document.body.classList.add('intro-locked');
    // Reveal sequence
    requestAnimationFrame(() => veil.classList.add('is-visible'));
    setTimeout(() => veil.classList.add('is-fading'), 2600);
    setTimeout(() => {
      veil.remove();
      document.body.classList.remove('intro-locked');
    }, 3600);
  }

  /* === TINY HEART TRAIL === */
  function spawnHeartTrail(el) {
    const r = el.getBoundingClientRect();
    for (let i = 0; i < 6; i++) {
      const h = document.createElement('span');
      h.textContent = '♥';
      h.className = 'confetti-piece';
      h.style.color = '#e85a8c';
      h.style.left = (r.left + r.width / 2) + 'px';
      h.style.top = r.top + 'px';
      h.style.fontSize = '14px';
      document.body.appendChild(h);
      h.animate(
        [{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: `translate(${(Math.random()-0.5)*60}px,${-60-Math.random()*40}px) scale(0.6)`, opacity: 0 }],
        { duration: 900, easing: 'ease-out' }
      ).onfinish = () => h.remove();
    }
  }

  /* === VIBRATION === */
  function vibrate(ms) { if (navigator.vibrate && window.matchMedia('(pointer: coarse)').matches) navigator.vibrate(ms); }

  /* === WEB AUDIO TING === */
  let audioCtx = null;
  function playTing(freq = 880, gain = 0.08) {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = 'sine';
      o.frequency.value = freq;
      g.gain.value = 0;
      o.connect(g).connect(audioCtx.destination);
      const t = audioCtx.currentTime;
      g.gain.linearRampToValueAtTime(gain, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
      o.start(t);
      o.stop(t + 0.5);
    } catch {}
  }

  /* === MUSIC === */
  function buildMusicTabs() {
    $('#musicTabs').innerHTML = trackCats.map(c => {
      const items = tracks.filter(t => t.cat === c.id);
      if (!items.length) return '';
      return '<div class="music-cat"><h5>' + c.label + '</h5><div class="music-cat-items">' +
        items.map(t => '<button class="' + (t.id === state.currentTrack ? 'is-active' : '') + '" data-track="' + t.id + '">' + t.label + '</button>').join('') +
        '</div></div>';
    }).join('');
    $$('#musicTabs button').forEach(b => {
      b.onclick = () => { state.currentTrack = b.dataset.track; buildMusicTabs(); loadMusicFrame(); };
    });
  }
  function loadMusicFrame() {
    if (!state.musicOpen) return;
    const t = tracks.find(x => x.id === state.currentTrack);
    const src = `https://www.youtube-nocookie.com/embed/${t.embed}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
    $('#musicFrame').innerHTML = `
      <iframe src="${src}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy" title="${t.label}" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      <a href="https://www.youtube.com/watch?v=${t.embed}" target="_blank" rel="noopener" style="position:absolute;bottom:6px;right:8px;z-index:3;font-size:10px;color:var(--gold-soft);background:rgba(7,3,13,0.7);padding:3px 8px;border-radius:999px;letter-spacing:0.06em;">Auf YouTube öffnen ↗</a>
    `;
  }
  function bindMusic() {
    const toggle = $('#musicToggle'), panel = $('#musicPanel'), label = $('#musicToggleLabel');
    toggle.onclick = () => {
      state.musicOpen = !state.musicOpen;
      panel.classList.toggle('is-hidden', !state.musicOpen);
      toggle.classList.toggle('is-playing', state.musicOpen);
      label.textContent = state.musicOpen ? 'Spielt unsere Lieder' : 'Spiel unsere Lieder';
      if (state.musicOpen) loadMusicFrame(); else $('#musicFrame').innerHTML = '';
    };
  }

  /* === ERINNERUNGEN (Slideshow + Grid) === */
  let memoriesData = null;
  let memIdx = 0;
  let memTimer = null;
  let memPlaying = true;

  async function loadMemories() {
    if (memoriesData) return memoriesData;
    try {
      const r = await fetch('./assets/erinnerungen/manifest.json');
      memoriesData = await r.json();
    } catch (e) { memoriesData = { records: [], clusters: [] }; }
    return memoriesData;
  }

  function fmtDate(s) {
    if (!s) return '';
    const m = String(s).match(/(\d{4}):(\d{2}):(\d{2})/);
    if (!m) return '';
    const months = ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sept','Okt','Nov','Dez'];
    return `${parseInt(m[3])}. ${months[parseInt(m[2])-1]} ${m[1]}`;
  }

  function showMemoryAt(i) {
    const d = memoriesData;
    if (!d || !d.records.length) return;
    memIdx = (i + d.records.length) % d.records.length;
    const r = d.records[memIdx];
    const frame = $('#memoriesFrame');
    const isVid = r.type === 'video';
    const bgSrc = r.thumb || r.web;
    frame.innerHTML = `
      <div class="mem-bg" style="background-image:url('${bgSrc}')"></div>
      ${isVid
        ? `<video src="${r.web}" autoplay muted loop playsinline poster="${r.thumb || ''}"></video>`
        : `<img src="${r.web}" alt="" loading="eager">`}
    `;
    $('#memoriesMeta').innerHTML = `
      ${r.place ? `<span class="meta-place">${r.place}</span>` : ''}
      ${r.date ? `<span class="meta-date">${fmtDate(r.date)}</span>` : ''}
    `;
    $('#memoriesCounter').textContent = `${memIdx + 1} / ${d.records.length}`;
  }

  function memTick() { if (memPlaying) showMemoryAt(memIdx + 1); }

  async function renderMemories() {
    await loadMemories();
    if (!memoriesData.records.length) {
      $('#memoriesFrame').innerHTML = '<p style="padding:40px;text-align:center;color:var(--muted);">Noch keine Erinnerungen geladen.</p>';
      return;
    }
    showMemoryAt(0);
    if (memTimer) clearInterval(memTimer);
    memTimer = setInterval(memTick, 4500);
    // Touch swipe (mobile)
    const stage = document.getElementById('memoriesStage');
    if (stage && !stage.dataset.swipeBound) {
      stage.dataset.swipeBound = '1';
      let sx = 0, sy = 0, dx = 0;
      stage.addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; dx = 0; }, { passive: true });
      stage.addEventListener('touchmove',  e => { dx = e.touches[0].clientX - sx; }, { passive: true });
      stage.addEventListener('touchend', () => {
        if (Math.abs(dx) > 50) {
          if (dx < 0) showMemoryAt(memIdx + 1); else showMemoryAt(memIdx - 1);
          if (typeof resetMemTimer === 'function') resetMemTimer();
        }
      });
    }
    $('#memPrev').onclick = () => { showMemoryAt(memIdx - 1); resetMemTimer(); };
    $('#memNext').onclick = () => { showMemoryAt(memIdx + 1); resetMemTimer(); };
    $('#memPlay').onclick = () => {
      memPlaying = !memPlaying;
      $('#memPlayIcon').innerHTML = memPlaying
        ? '<polygon points="6 3 20 12 6 21 6 3"></polygon>'
        : '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
    };

    // Grid
    const grid = $('#memoriesGrid');
    grid.innerHTML = memoriesData.records.map((r, i) => `
      <button class="mem-tile" data-mem-idx="${i}" aria-label="${r.place || 'Erinnerung'}">
        <img src="${r.thumb || r.web}" alt="" loading="lazy">
        ${r.type === 'video' ? '<span class="mem-tile-video">▶</span>' : ''}
        ${r.place ? `<span class="mem-tile-place">${r.place.split(',')[0]}</span>` : ''}
      </button>
    `).join('');
    $$('[data-mem-idx]').forEach(b => {
      b.onclick = () => {
        showMemoryAt(parseInt(b.dataset.memIdx, 10));
        resetMemTimer();
        $('#memoriesStage').scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
    });
    $('#memoriesGridCount').textContent = `${memoriesData.records.length} Aufnahmen aus ${new Set(memoriesData.clusters.map(c => c.country).filter(Boolean)).size} Ländern`;

    // Stats
    const countries = {};
    memoriesData.clusters.forEach(c => { if (c.country) countries[c.country] = (countries[c.country] || 0) + c.count; });
    const sorted = Object.entries(countries).sort((a,b) => b[1] - a[1]);
    $('#memoriesStats').innerHTML = `
      <div class="stat-row">
        ${sorted.map(([c, n]) => `<div class="stat-pill"><strong>${n}</strong><span>${c}</span></div>`).join('')}
      </div>
    `;
  }
  function resetMemTimer() {
    if (memTimer) clearInterval(memTimer);
    memTimer = setInterval(memTick, 4500);
  }

  /* === UNSERE KARTE === */
  // continent: Naher Osten | Asien | Europa | Afrika | Amerika | Ozeanien
  // sym: pilgrim | beach | city | mountain | aurora | safari | sakura | desert
  const dreams = [
    { lat: 25.276987,  lon: 51.520008,   place: 'Doha, Katar',                   why: 'Souks, Skyline, Wochenende im Orient.',                       continent: 'Naher Osten', sym: 'city' },
    { lat: 21.4225,    lon: 39.8262,     place: 'Mekka &middot; Umrah',          why: 'Inschallah Hand in Hand vor der Kaaba.',                       continent: 'Naher Osten', sym: 'pilgrim' },
    { lat: 31.7683,    lon: 35.2137,     place: 'Jerusalem',                     why: 'Heilige Erde, Du\u2019a zusammen.',                            continent: 'Naher Osten', sym: 'pilgrim' },
    { lat: 24.4539,    lon: 54.3773,     place: 'Abu Dhabi, VAE',                why: 'Sheikh Zayed Moschee, W\u00fcste, Falknerei.',                 continent: 'Naher Osten', sym: 'desert' },
    { lat: 35.0116,    lon: 135.7681,    place: 'Kyoto, Japan',                  why: 'Kirschbl\u00fcten, Tempel, Ryokan.',                           continent: 'Asien',       sym: 'sakura' },
    { lat: 64.1466,    lon: -21.9426,    place: 'Reykjav\u00edk, Island',        why: 'Polarlichter, blaue Lagune, Stille.',                          continent: 'Europa',      sym: 'aurora' },
    { lat: 48.8566,    lon: 2.3522,      place: 'Paris, Frankreich',             why: 'Ein zweites Mal, weil einmal nicht reicht.',                   continent: 'Europa',      sym: 'city' },
    { lat: 41.8902,    lon: 12.4922,     place: 'Rom, Italien',                  why: 'Trevi-Brunnen-Wunsch: nochmal du.',                            continent: 'Europa',      sym: 'city' },
    { lat: 30.0444,    lon: 31.2357,     place: 'Kairo, \u00c4gypten',           why: 'Pyramiden, Nil, arabisches Fr\u00fchst\u00fcck.',              continent: 'Afrika',      sym: 'desert' },
    { lat: -1.2921,    lon: 36.8219,     place: 'Nairobi, Kenia',                why: 'Safari Big Five &mdash; Inschallah.',                          continent: 'Afrika',      sym: 'safari' },
    { lat: -6.1659,    lon: 39.2026,     place: 'Sansibar',                      why: 'Gew\u00fcrzinsel, Dhow, deine Hand.',                          continent: 'Afrika',      sym: 'beach' },
    { lat: 21.3099,    lon: -157.8581,   place: 'Honolulu, Hawaii',              why: 'Aloha, Lei, Vulkane \u2014 und du in Wei\u00df am Strand.',    continent: 'Amerika',     sym: 'beach' },
    { lat: 18.4655,    lon: -66.1057,    place: 'San Juan, Puerto Rico',         why: 'Karibische Altstadt, Salsa, blauer Atlantik.',                 continent: 'Amerika',     sym: 'beach' },
    { lat: 13.0827,    lon: -59.5380,    place: 'Barbados, Karibik',             why: 'T\u00fcrkis. Ich, du, eine H\u00e4ngematte.',                   continent: 'Amerika',     sym: 'beach' },
    { lat: 40.7128,    lon: -74.0060,    place: 'New York City, USA',            why: 'Brunch, Skyline, Carrie-Bradshaw-Energy.',                     continent: 'Amerika',     sym: 'city' },
    { lat: 34.0522,    lon: -118.2437,   place: 'Los Angeles, USA',              why: 'Hollywood, PCH-Roadtrip, Big Sur.',                            continent: 'Amerika',     sym: 'city' },
    { lat: 36.1699,    lon: -115.1398,   place: 'Las Vegas, USA',                why: 'Lichter, Show, vielleicht eine zweite Verlobungsfeier.',       continent: 'Amerika',     sym: 'city' },
    { lat: -22.9068,   lon: -43.1729,    place: 'Rio de Janeiro, Brasilien',     why: 'Christo, Zuckerhut, Strand, Samba.',                           continent: 'Amerika',     sym: 'beach' },
    { lat: -34.6037,   lon: -58.3816,    place: 'Buenos Aires, Argentinien',     why: 'Tango und das beste Steak der Welt.',                          continent: 'Amerika',     sym: 'city' },
    { lat: -13.1631,   lon: -72.5450,    place: 'Machu Picchu, Peru',            why: 'Wolken, Inka-Steine, du in einem Poncho.',                     continent: 'Amerika',     sym: 'mountain' },
    { lat: 4.6097,     lon: -74.0817,    place: 'Cartagena, Kolumbien',          why: 'Bunte Mauern, Karibik, du tanzt.',                             continent: 'Amerika',     sym: 'beach' },
    { lat: -33.8688,   lon: 151.2093,    place: 'Sydney, Australien',            why: 'Opera House, Bondi Beach, Outback.',                           continent: 'Ozeanien',    sym: 'city' },
    { lat: -36.8485,   lon: 174.7633,    place: 'Auckland, Neuseeland',          why: 'Mittelerde, Fjorde, Sterne.',                                  continent: 'Ozeanien',    sym: 'mountain' }
  ];

  // Continent meta — order, label, and a tiny SVG pictogram for the dream group header
  const CONTINENT_META = {
    'Naher Osten': { label: 'Naher Osten',  glyph: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16"/><path d="M6 19v-7l3-3 3 3v7"/><path d="M14 19v-9l3-3 3 3v9"/><circle cx="9" cy="6" r="1"/></svg>' },
    'Asien':       { label: 'Asien',         glyph: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c2 3 2 6 0 9-2-3-2-6 0-9z"/><path d="M3 12c3-2 6-2 9 0-3 2-6 2-9 0z"/><path d="M21 12c-3-2-6-2-9 0 3 2 6 2 9 0z"/><path d="M12 21c-2-3-2-6 0-9 2 3 2 6 0 9z"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg>' },
    'Europa':      { label: 'Europa',        glyph: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>' },
    'Afrika':      { label: 'Afrika',        glyph: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h4l1 3h3l3 3-1 4-2 2v3l-2 3h-3l-1-2-2-1-1-3-2-2 1-4 2-3z"/></svg>' },
    'Amerika':     { label: 'Amerika',       glyph: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3l2 4-1 4 2 3-1 4 2 3"/><path d="M14 4l3 5-2 4 1 4-2 3"/></svg>' },
    'Ozeanien':    { label: 'Ozeanien',      glyph: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M3 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><circle cx="17" cy="7" r="2.5"/></svg>' }
  };
  const CONTINENT_ORDER = ['Naher Osten', 'Asien', 'Europa', 'Afrika', 'Amerika', 'Ozeanien'];

  // Tiny inline SVG pictograms for dream pin centers (12px box)
  const SYM_GLYPH = {
    pilgrim:  '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><path d="M3 9V6a3 3 0 0 1 6 0v3"/><path d="M2 9h8"/><circle cx="6" cy="3" r="0.8" fill="currentColor"/></svg>',
    beach:    '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><path d="M2 9h8"/><path d="M6 9V4"/><path d="M3 5l3-2 3 2"/></svg>',
    city:     '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"><path d="M2 10h8"/><path d="M3 10V5l2-1v6"/><path d="M7 10V3l2 1v6"/></svg>',
    mountain: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 10l3-5 2 3 2-4 3 6z"/></svg>',
    aurora:   '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"><path d="M2 8c1-3 2-3 2 0"/><path d="M5 7c1-4 2-4 2 0"/><path d="M8 8c1-3 2-3 2 0"/></svg>',
    safari:   '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"><path d="M2 8c1-2 3-3 5-2 1-1 3-1 3 1"/><circle cx="4" cy="4" r="1"/></svg>',
    sakura:   '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"><circle cx="6" cy="6" r="0.8" fill="currentColor"/><path d="M6 3v1.5"/><path d="M6 7.5V9"/><path d="M3 6h1.5"/><path d="M7.5 6H9"/><path d="M4 4l1 1"/><path d="M7 7l1 1"/><path d="M8 4l-1 1"/><path d="M5 7l-1 1"/></svg>',
    desert:   '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"><path d="M1 9c1-1 2-1 3 0"/><path d="M4 9c1-2 3-2 4 0"/><path d="M8 9c1-1 2-1 3 0"/><circle cx="9" cy="3" r="1.2"/></svg>'
  };

  let mapInstance = null;

  // Bezier curve points between two coords with elevated control point
  function _bezierPath(a, b, lift) {
    const mx = (a[0] + b[0]) / 2;
    const my = (a[1] + b[1]) / 2;
    const dx = b[1] - a[1];
    const dy = b[0] - a[0];
    const dist = Math.sqrt(dx*dx + dy*dy);
    // Perpendicular offset for the bezier control, scaled by distance
    const cp = [ mx + (-dx) * (lift / Math.max(dist, 0.001)), my + dy * (lift / Math.max(dist, 0.001)) ];
    const pts = [];
    const steps = 40;
    for (let t = 0; t <= 1.0001; t += 1/steps) {
      const u = 1 - t;
      const lat = u*u*a[0] + 2*u*t*cp[0] + t*t*b[0];
      const lon = u*u*a[1] + 2*u*t*cp[1] + t*t*b[1];
      pts.push([lat, lon]);
    }
    return pts;
  }

  // Animate a number from 0 → target over `dur` ms
  function _countUp(el, target, dur) {
    const start = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    function frame(now) {
      const t = Math.min(1, (now - start) / dur);
      el.textContent = Math.round(easeOut(t) * target);
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  async function renderKarte() {
    await loadMemories();
    if (!window.L) {
      $('#ourMap').innerHTML = '<p style="padding:40px;text-align:center;">Karte konnte nicht geladen werden.</p>';
      return;
    }
    if (mapInstance) { mapInstance.remove(); mapInstance = null; }

    window.mapInstance = mapInstance = L.map('ourMap', {
      worldCopyJump: true,
      scrollWheelZoom: false,
      zoomControl: true,
      preferCanvas: false,
      attributionControl: true
    });
    mapInstance.setView([22, 25], 2);

    // Premium dark basemap — CARTO Dark Matter (no labels) + CARTO labels overlay.
    // Same vector source Stadia uses; works without registration on any domain.
    const baseLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      subdomains: 'abcd', maxZoom: 20, minZoom: 2
    });
    const labelsLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png', {
      attribution: '', subdomains: 'abcd', maxZoom: 20, minZoom: 2, pane: 'shadowPane'
    });
    baseLayer.addTo(mapInstance);
    labelsLayer.addTo(mapInstance);
    // Premium tint via CSS filter on the tile layer
    setTimeout(() => {
      const tilesEl = mapInstance.getContainer().querySelector('.leaflet-tile-pane');
      if (tilesEl) {
        tilesEl.style.filter = 'saturate(0.85) brightness(0.95) contrast(1.05)';
      }
    }, 100);

    // Visited country glow zones (gold halos behind cluster pins)
    const clusters = memoriesData.clusters || [];
    clusters.forEach(c => {
      L.circle([c.lat, c.lon], {
        radius: Math.max(60000, Math.min(180000, c.count * 4500)),
        className: 'love-zone',
        color: '#f6cf6f', fillColor: '#f6cf6f',
        opacity: 0.55, fillOpacity: 0.10, weight: 1
      }).addTo(mapInstance);
    });

    // Love threads
    // (a) chronological gold-bezier between visited clusters in array order
    // (b) pulsing rose lines from a Munich anchor → each dream
    const munich = [48.137, 11.575];
    for (let i = 0; i < clusters.length - 1; i++) {
      const a = [clusters[i].lat, clusters[i].lon];
      const b = [clusters[i+1].lat, clusters[i+1].lon];
      L.polyline(_bezierPath(a, b, 6), {
        className: 'love-thread love-thread-gold',
        color: '#f6cf6f', weight: 1.6, opacity: 0.75,
        smoothFactor: 1.2
      }).addTo(mapInstance);
    }
    dreams.forEach((d, i) => {
      const pts = _bezierPath(munich, [d.lat, d.lon], 12);
      L.polyline(pts, {
        className: 'love-thread love-thread-rose love-thread-' + (i % 4),
        color: '#ffb8d0', weight: 1.4, opacity: 0.55, dashArray: '4 6',
        smoothFactor: 1.2
      }).addTo(mapInstance);
    });

    // Visited pins — gold ring with photo thumbnail clipped inside
    clusters.forEach((c, idx) => {
      const sample = (c.samples || [])[0];
      const sampleRec = sample ? memoriesData.records.find(r => r.id === sample) : null;
      const thumbUrl = sampleRec ? (sampleRec.thumb || sampleRec.web) : '';
      const html = `
        <div class="pin-been-3d" style="--delay:${idx * 60}ms">
          <span class="pin-halo"></span>
          <span class="pin-thumb" ${thumbUrl ? `style="background-image:url('${thumbUrl}')"` : ''}></span>
          <span class="pin-count">${c.count}</span>
          <span class="pin-stem"></span>
        </div>
      `;
      const beenIcon = L.divIcon({
        className: 'pin pin-been', html, iconSize: [44, 56], iconAnchor: [22, 52], popupAnchor: [0, -50]
      });
      const popup = `
        <div class="map-popup">
          ${thumbUrl ? `<img src="${thumbUrl}" alt="" />` : ''}
          <strong>${c.label || 'Unser Ort'}</strong>
          <span>${c.count} Erinnerung${c.count === 1 ? '' : 'en'}</span>
        </div>
      `;
      L.marker([c.lat, c.lon], { icon: beenIcon, riseOnHover: true }).addTo(mapInstance).bindPopup(popup);
    });

    // Dream pins — rose heart with category symbol inside, pulsing glow
    dreams.forEach((d, idx) => {
      const glyph = SYM_GLYPH[d.sym] || SYM_GLYPH.city;
      const html = `
        <div class="pin-dream-3d" style="--delay:${(clusters.length + idx) * 50}ms">
          <span class="pin-pulse"></span>
          <svg class="pin-heart" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span class="pin-sym">${glyph}</span>
        </div>
      `;
      const dreamIcon = L.divIcon({
        className: 'pin pin-dream', html, iconSize: [38, 46], iconAnchor: [19, 42], popupAnchor: [0, -40]
      });
      const popup = `<div class="map-popup map-popup-dream"><span class="popup-eyebrow">${d.continent}</span><strong>${d.place}</strong><span>${d.why}</span></div>`;
      L.marker([d.lat, d.lon], { icon: dreamIcon, riseOnHover: true }).addTo(mapInstance).bindPopup(popup);
    });

    setTimeout(() => mapInstance.invalidateSize(), 220);

    // Stats with animated counters + world-progress bar
    const countries = new Set();
    clusters.forEach(c => { if (c.country) countries.add(c.country); });
    const totalPhotos = (memoriesData.records || []).filter(r => r.lat).length;
    const visited = countries.size;
    const planned = dreams.length;
    const totalEnd = visited + planned;
    const pct = Math.round((totalEnd / 195) * 100);
    $('#mapStats').innerHTML = `
      <div class="stat-row">
        <div class="stat-pill stat-pill-anim" data-target="${visited}"><strong>0</strong><span>L\u00e4nder zusammen</span></div>
        <div class="stat-pill stat-pill-anim" data-target="${totalPhotos}"><strong>0</strong><span>geographische Erinnerungen</span></div>
        <div class="stat-pill stat-pill-anim" data-target="${planned}"><strong>0</strong><span>Tr\u00e4ume noch offen</span></div>
        <div class="stat-pill stat-pill-anim" data-target="${totalEnd}"><strong>0</strong><span>L\u00e4nder am Ende</span></div>
      </div>
      <div class="map-progress" aria-label="Welt-Fortschritt">
        <div class="map-progress-track">
          <div class="map-progress-fill" style="--pct:${pct}%"></div>
          <div class="map-progress-marker" style="left:${Math.min(pct, 96)}%"><span>${totalEnd} / 195 L\u00e4nder</span></div>
        </div>
        <div class="map-progress-meta">
          <em>${pct}% der Welt</em>
          <span>Inschallah holen wir den Rest noch.</span>
        </div>
      </div>
    `;
    $$('#mapStats .stat-pill-anim').forEach((el) => {
      const target = parseInt(el.dataset.target, 10) || 0;
      _countUp(el.querySelector('strong'), target, 1100 + Math.random() * 500);
    });

    // Continent-grouped dreams list
    const grouped = {};
    CONTINENT_ORDER.forEach(k => grouped[k] = []);
    dreams.forEach(d => { (grouped[d.continent] || (grouped[d.continent] = [])).push(d); });
    const groupsHtml = CONTINENT_ORDER
      .filter(k => (grouped[k] || []).length)
      .map(k => {
        const meta = CONTINENT_META[k];
        const cards = grouped[k].map(d => {
          const glyph = SYM_GLYPH[d.sym] || SYM_GLYPH.city;
          return `
            <div class="dream-card" data-cont="${k}">
              <span class="dream-glyph">${glyph}</span>
              <strong>${d.place}</strong>
              <p>${d.why}</p>
              <span class="dream-pin">\u2665</span>
            </div>
          `;
        }).join('');
        return `
          <section class="dream-group">
            <header class="dream-group-head">
              <span class="dream-group-glyph">${meta.glyph}</span>
              <h3>${meta.label}</h3>
              <span class="dream-group-count">${grouped[k].length}</span>
              <span class="dream-group-rule"></span>
            </header>
            <div class="dreams-grid">${cards}</div>
          </section>
        `;
      }).join('');
    $('#dreamsList').innerHTML = `
      <header class="dreams-list-head">
        <h2>Wohin wir noch gehen, Inschallah</h2>
        <p>Sechs Kontinente. Eine Liebe. Wir hangeln uns durch.</p>
      </header>
      ${groupsHtml}
    `;
  }

  /* === ROUTER === */
  function switchPage(name) {
    if (!$('#page-' + name)) name = 'entdecken';
    $$('.page').forEach(p => p.classList.remove('is-active'));
    $('#page-' + name).classList.add('is-active');
    $$('.side-nav a').forEach(a => a.classList.toggle('is-active', a.dataset.page === name));
    location.hash = '#' + name;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (name === 'erinnerungen') renderMemories();
    if (name === 'karte') renderKarte();
  }
  function bindNavLinks() {
    $$('a[data-nav]').forEach(a => {
      a.onclick = (e) => {
        e.preventDefault();
        const hash = a.getAttribute('href');
        const page = hash.replace('#', '');
        switchPage(page);
      };
    });
  }
  function bindRouter() {
    $$('.side-nav a').forEach(a => {
      a.onclick = (e) => {
        e.preventDefault();
        switchPage(a.dataset.page);
        $('#sideRail').classList.remove('is-open');
      };
    });
    window.addEventListener('hashchange', () => {
      const name = location.hash.replace('#','') || 'entdecken';
      switchPage(name);
    });
    window.addEventListener('hashchange', () => {
      setTimeout(() => { try { if (window.mapInstance && location.hash === '#karte') { mapInstance.eachLayer(l => { if (!(l instanceof L.Marker)) return; const c = ((l.getPopup&&l.getPopup()&&l.getPopup().getContent&&l.getPopup().getContent())||'')+' '+((l.getTooltip&&l.getTooltip()&&l.getTooltip().getContent&&l.getTooltip().getContent())||''); if(/mekka|medina|kaaba|saudi/i.test(String(c))){ const e=l.getElement&&l.getElement(); if(e) e.classList.add('is-holy'); } }); } } catch{} }, 1500);
    });
    bindNavLinks();
  }

  /* === MOBILE MENU === */
  function bindMobile() {
    const btn = $('#mobileMenuBtn');
    if (btn) btn.onclick = () => $('#sideRail').classList.toggle('is-open');
  }

  /* === SURPRISE BUTTON === */
  function bindSurprise() {
    $('#surpriseBtn').onclick = () => {
      const visible = filteredDests();
      const pick = visible[Math.floor(Math.random() * visible.length)];
      setCurrentDest(pick.id);
      burstConfetti(40, $('#surpriseBtn'));
      $('#top').scrollIntoView({ behavior: 'smooth' });
    };
  }

  /* === CLEAR COMPARE === */
  function bindClearCompare() {
    $('#clearCompare').onclick = () => {
      state.likes.clear();
      state.compare = new Set(['santorini','bali','kyoto']);
      save(); refreshAll();
    };
  }

  /* === CUSTOM CURSOR === */
  function bindHeartCursor() {
    const cursor = $('#heartCursor');
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (state.cursorOn) cursor.classList.add('is-on');
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    document.addEventListener('mouseenter', () => cursor.classList.add('is-on'));
    document.addEventListener('mouseleave', () => cursor.classList.remove('is-on'));
  }

  /* === REFRESH ALL === */
  function refreshAll() {
    renderCarousel();
    renderDestinationsGrid();
    renderShortlist();
    renderCompareDrawer();
    renderFavorites();
    renderVoteArena();
    renderComparePage();
  }

  /* === INTERSECTION REVEAL === */
  function setupReveal() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    $$('.dest-tile, .fav-row, .vote-card, .letter, .plan-day, .route-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1)';
      obs.observe(el);
    });
  }

  /* === INIT === */
  function bindMaryemForm() {
    const save = document.getElementById('maryemFormSave');
    const list = document.getElementById('maryemFormList');
    const note = document.getElementById('maryemFormNote');
    const titleEl = document.getElementById('maryemFormTitle');
    const bodyEl = document.getElementById('maryemFormBody');
    if (!save || !list) return;
    const KEY = 'maryem_briefe_v1';
    const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; } };
    const persist = (arr) => localStorage.setItem(KEY, JSON.stringify(arr));
    const fmt = (ts) => new Date(ts).toLocaleString('de-DE', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
    function render() {
      const arr = load();
      list.innerHTML = arr.length === 0
        ? '<p class="maryem-form-empty"><em>Noch nichts geschrieben — nur du und ein leeres Blatt.</em></p>'
        : arr.map((l, i) => '<article class="maryem-form-card"><div class="maryem-form-card-head"><strong>' + (l.title || 'Ohne Titel') + '</strong><span>' + fmt(l.ts) + '</span></div><p>' + l.body.replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c])) + '</p><button class="maryem-form-del" data-del="' + i + '" aria-label="Löschen">×</button></article>').join('');
      list.querySelectorAll('[data-del]').forEach(b => {
        b.onclick = () => {
          const a = load();
          a.splice(parseInt(b.dataset.del, 10), 1);
          persist(a);
          render();
        };
      });
    }
    save.onclick = () => {
      const t = (titleEl.value || '').trim();
      const body = (bodyEl.value || '').trim();
      if (!body) { note.textContent = 'Schreib mir was, Habibti …'; note.classList.add('shake'); setTimeout(()=>note.classList.remove('shake'),500); return; }
      const arr = load();
      arr.unshift({ title: t, body, ts: Date.now() });
      persist(arr);
      titleEl.value = ''; bodyEl.value = '';
      note.textContent = 'Gespeichert. Nur für dich, mein Herz.';
      if (typeof burstConfetti === 'function') burstConfetti(20, save);
      if (typeof playTing === 'function') playTing(740, 0.06);
      render();
    };
    render();
  }

  
  /* === HEUTE-MODUS === */
  function renderHeute() {
    const host = document.getElementById('heuteStrip');
    if (!host) return;
    const today = new Date();
    today.setHours(0,0,0,0);
    const days = (a, b) => Math.floor((b - a) / 86400000);
    const items = [
      { date: new Date(2024, 9, 14), label: 'Tage seit unserem ersten Treffen', mode: 'since', tone: 'rose' },
      { date: new Date(2024, 9, 17), label: 'Tage seit unserem ersten Frühstück · 4 Stunden Islam', mode: 'since', tone: 'rose' },
      { date: new Date(2026, 0, 10), label: 'Tage bis zur Nikkah · Penzberg', mode: 'until', tone: 'gold' },
      { date: new Date(2027, 5, 1),  label: 'Tage bis zur Walima Inschallah', mode: 'until', tone: 'rose' },
      { date: new Date(2026, 0, 10), label: 'Tage seit unserer Nikkah · Penzberg, 10.01.2026', mode: 'since', tone: 'gold' }
    ];
    host.innerHTML = items.map(it => {
      const d = days(it.mode === 'since' ? it.date : today, it.mode === 'since' ? today : it.date);
      if (d < 0) return '';
      return '<div class="heute-pill heute-' + it.tone + '"><strong>' + d + '</strong><span>' + it.label + '</span></div>';
    }).join('');
  }

  function bindSealed() {
    const env = document.getElementById('sealedEnvelope');
    const seal = document.getElementById('sealedSeal');
    const content = document.getElementById('sealedContent');
    const close = document.getElementById('sealedClose');
    const wrap = document.getElementById('sealedLetter');
    if (!seal) return;
    seal.onclick = () => {
      wrap.classList.add('is-open');
      if (typeof playTing === 'function') playTing(880, 0.07);
      if (typeof burstConfetti === 'function') burstConfetti(30, seal);
      if (typeof spawnLoveText === 'function') {
        const r = seal.getBoundingClientRect();
        spawnLoveText(r.left + r.width/2, r.top + r.height/2, 'Bāraka Llāhu');
      }
    };
    if (close) close.onclick = () => {
      wrap.classList.remove('is-open');
      if (typeof playTing === 'function') playTing(440, 0.05);
    };
  }

  function init() {
    // hook for holy aura check
    buildHero();
    buildFloatingHearts();
    startSrkTicker();
    setupHeroVideo();
    bindFilters();
    setCurrentDest('santorini');
    renderCarousel();
    renderExperiences();
    renderDestinationsGrid();
    renderRoutes();
    renderPlanSwitch();
    renderPlanTimeline();
    renderFavorites();
    renderVoteArena();
    renderLetters();
    bindSealed();
    renderHeute();
    renderPandora();
    bindMaryemForm();
    renderShortlist();
    renderCompareDrawer();
    renderComparePage();
    bindRouter();
    bindMobile();
    bindSurprise();
    bindClearCompare();
    buildMusicTabs();
    bindMusic();
    bindHeartCursor();
    startNikkahCounter();
    runIntroVeil();
    const initial = location.hash.replace('#','') || 'entdecken';
    switchPage(initial);
    setTimeout(() => { try { if (window.mapInstance) { mapInstance.eachLayer(l => { if (!(l instanceof L.Marker)) return; const c = ((l.getPopup&&l.getPopup()&&l.getPopup().getContent&&l.getPopup().getContent())||'')+' '+((l.getTooltip&&l.getTooltip()&&l.getTooltip().getContent&&l.getTooltip().getContent())||''); if(/mekka|medina|kaaba|saudi/i.test(String(c))){ const e=l.getElement&&l.getElement(); if(e) e.classList.add('is-holy'); } }); } } catch{} }, 1200);
    setTimeout(setupReveal, 400);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
