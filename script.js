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
        { day: 'Tag 1–5', place: 'Kyoto', title: 'Kirschblüten', desc: 'Ryokan, Tee-Zeremonie, Bambuswald, Geishas in Gion.' },
        { day: 'Tag 6–9', place: 'Udaipur', title: 'Königin auf einem See', desc: 'Lake Palace, Boot bei Sonnenuntergang, Henna für dich.' },
        { day: 'Tag 10–13', place: 'Jaipur', title: 'Pinke Stadt', desc: 'Hawa Mahal, Amber Fort, Sari-Shopping, Bollywood-Tanzabend.' }
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
    }
  ];

  /* === EXPERIENCES === */
  const experiences = [
    { name: 'Sonnenuntergang Oia', place: 'Santorini', img: IMG('1612698093158-e07ac200d44e') },
    { name: 'Bambuswald Arashiyama', place: 'Kyoto', img: IMG('1503899036084-c55cdd92da26') },
    { name: 'Wasservilla', place: 'Malediven', img: IMG('1582719508461-905c673771fd') },
    { name: 'Ubud Reisterrassen', place: 'Bali', img: IMG('1604999333679-b86d54738315') },
    { name: 'Sahara-Camp', place: 'Marrakesch', img: IMG('1547234935-80c7145ec969') },
    { name: 'Eiffelturm bei Nacht', place: 'Paris', img: IMG('1431274172761-fca41d930114') },
    { name: 'Lake Pichola Boot', place: 'Udaipur', img: IMG('1582510003544-4d00b7f74220') },
    { name: 'Aurora Borealis', place: 'Island', img: IMG('1517457373958-b7bdd4587205') },
    { name: 'Cenote-Schwimmen', place: 'Tulum', img: IMG('1530541930197-ff16ac917b0e') },
    { name: 'Hawa Mahal', place: 'Jaipur', img: IMG('1599661046289-e31897846e41') },
    { name: 'Gondelfahrt', place: 'Venedig', img: IMG('1523906834658-6e24ef2386f9') },
    { name: 'Wüsten-Safari', place: 'Dubai', img: IMG('1518684079-3c830dcef090') }
  ];

  /* === LETTERS === */
  const letters = [
    { id: 'l1', featured: true, pin: 'Brief 01 · Unser Moment', title: 'Draußen vorm Museum', body: 'Wir standen draußen, nur du und ich. Du hast mich gefragt, was das schönste im Museum war. Ich hab dich angeschaut und gesagt: „Du bist das schönste arabische Gemälde da drinnen." Du hast mich kurz angeguckt — und bist dann sofort zu Samira gelaufen, um zu fragen, ob du das richtig gehört hast. Sie hat gegrinst und gesagt: „Nee, das stimmt nicht." Ich liebe dich genau für diese Reaktion, Galbi. Dass du es kaum glauben konntest. Aber ich meinte es. Ich meine es jedes Mal.', sign: '— Mika, der\'s wirklich so meint' },
    { id: 'l2', pin: 'Brief 02 · Versprechen', title: 'Alles für dich, Janem', body: 'Wenn du müde bist, mache ich dir Tee. Wenn du traurig bist, halte ich deine Hand. Wenn du tanzen willst, drehe ich Tum Hi Ho lauter. Du musst mir nichts sagen. Ich sehe dich.', sign: '— Mika' },
    { id: 'l3', pin: 'Brief 03 · Schicksal', title: 'Samira hat uns gefunden', body: 'Wenn Samira nicht gewesen wäre, hätten wir uns vielleicht nie wieder gesehen. Ein paar Monate nachdem du mir bei Abbacos die Cola gebracht hast, hat sie uns wieder zusammengebracht — ohne es zu wissen. Manchmal denke ich: Manche Freunde sind keine Zufälle, sondern kleine Engel mit Telefonnummern. Danke, Samira. Und Habibti — danke, dass du den Mut hattest, nochmal Hallo zu sagen.', sign: '— dein Mika, ewig dankbar' },
    { id: 'l4', pin: 'Brief 04 · Wie alles begann', title: 'Die Cola im Abbacos', body: 'Mein erster Satz zu dir war: „Ich kenne dich vom Abbacos." Du warst dort Hostess in dem kleinen Münchner Steakladen, hast mir eine Cola gebracht und hattest keine Ahnung, dass dieser Moment ein ganzes Leben starten würde. Ein paar Monate später hat uns Samira wieder zusammengebracht — und seitdem bin ich nur noch verliebt. Janem, ich will dir das schönste Leben ermöglichen, das es gibt. Das ist kein Versprechen. Das ist mein einziger Plan.', sign: '— Mika, seit der Cola für immer dein' },
    { id: 'l5', pin: 'Brief 05 · Kandahar zu Bagdad', title: 'Zwei Städte, ein Herz', body: 'Aus Kandahar zu dir nach Bagdad — Kilometer waren nichts. Sprache war nichts. Krieg war nichts. Du hast gewonnen, bevor ich es wusste. Ich liebe dich auf Paschtu, auf Arabisch, auf Deutsch — auf jeder Sprache, die du jemals lernen wirst.', sign: '— Mika, dein Janem' },
    { id: 'l6', pin: 'Brief 06 · Heute', title: 'Heute, jetzt', body: 'Such dir den Ort aus. Ich kümmere mich um den Rest. Du musst nichts machen außer dein Herz öffnen. Diese App ist mein Brief an dich. Lies sie, wenn du willst. Aber denk dran: das Schönste in jeder Stadt bist du.', sign: '— ich, der Glückliche, dein Mika' },

    { id: 'l7', featured: true, pin: 'Brief 07 · 10.01.2026', title: 'Verlobung im Schnee', body: 'Mein Herz, an unserem Verlobungstag bin ich mit Sommerreifen durch hohen Schnee gefahren — weil ich keinen einzigen Moment ohne dich verpassen wollte. Auf der Hinfahrt zum Saal bist du komplett crashout gegangen, weil der DJ nicht auf seinen Platz spielen wollte. Du hast geweint, geschrien, alles war chaotisch — und ich hab nur eins gedacht: „Alhamdulillah, dass diese Frau meine wird." Jeder Moment der Panik war ein Beweis: du nimmst es ernst, du willst alles perfekt — für UNS. Habibti, an dem Tag hab ich mich nicht nur mit dir verlobt. Ich hab mich mit jeder Version von dir verlobt. Mit der lachenden, der weinenden, der wütenden, der schlafenden. Mit allen.', sign: '— Mika, dein Verlobter durch jeden Sturm' },

    { id: 'l8', featured: true, pin: 'Brief 08 · Stunden, die wie Minuten waren', title: 'Das Frühstück, das wir nie gegessen haben', body: 'Erinnerst du dich an das Frühstück, bei dem wir vergessen haben zu essen? Drei, vier Stunden lang haben wir über den Islam geredet. Über Allah. Über die Welt. Über Bagdad und Kandahar. Über unsere Eltern, unsere Träume, unsere Ängste. Der Tee wurde kalt, das Brot trocken — uns war es egal. „Wa ja\'ala baynakum mawaddatan wa raḥmah" sagt der Quran (Sure 30:21) — Und Er hat zwischen euch Liebe und Barmherzigkeit gelegt. An dem Morgen hab ich verstanden, was das heißt. Mit dir kann ich über alles reden, was wichtig ist. Und auch über alles, was nicht wichtig ist. Beides ist gleich heilig.', sign: '— dein Mika, der dir lieber zuhört als isst' },

    { id: 'l9', pin: 'Brief 09 · Was du für mich bist', title: 'Du bist alles, in einer Person', body: 'Du bist meine Frau. Meine beste Freundin. Meine Sekretärin — die beste, die jemals existiert hat. Meine Party-Plannerin (jede Feier wird durch dich zur Erinnerung). Meine Hochzeitsplannerin (du hast unsere Verlobung in einen Film verwandelt, trotz Schnee und DJ-Drama). Und Insha\'Allah, sehr bald: die beste Mutter, die ein Kind sich wünschen kann. Manche Frauen sind eine Rolle. Du bist alle. Und das macht keinen einzigen Tag schwer — es macht jeden Tag reich. Alhamdulillah für dich, jeden Atemzug.', sign: '— Mika, der weiß, wen er an seiner Seite hat' },

    { id: 'l10', pin: 'Brief 10 · Unser Zuhause', title: 'Bald in einem Palast schöner als der Taj Mahal', body: 'Aktuell wohnen wir bei meinen Eltern. Wir teilen seit Monaten ein Bett — das Schönste, das ich je geteilt habe. Aber das ist nur der Anfang. Bald baue ich dir ein Zuhause schöner als der Taj Mahal. Mit einem Garten, in dem du jede Blume aussuchen darfst. Mit einer Küche, in der wir kochen — oder vergessen zu kochen, weil wir wieder über die Welt reden. Shah Jahan hat den Taj Mahal für seine tote Frau gebaut. Ich baue dir alles für deine Lebenszeit, Habibti. Du sollst es spüren, nicht nur sehen.', sign: '— Mika, dein Architekt der Zukunft' },

    { id: 'l11', pin: 'Brief 11 · Alhamdulillah', title: 'Jeden Tag, seit dem ersten', body: 'Seit ich dich kenne, haben wir jeden einzelnen Tag geredet. Jeden Tag gesehen. Alhamdulillah (Lob sei Allah). Auch durch Streits, auch durch Tränen, auch durch Up und Downs — keinen Tag ohne dich. Der Prophet ﷺ hat gesagt: „Khayrukum khayrukum li-ahlihi" — Der Beste von euch ist der Beste zu seiner Familie. Ich versuche jeden Tag, der zu sein. Manchmal scheitere ich. Aber ich stehe immer wieder auf — für dich. Mit dir. Wegen dir. Diese Zeit ist die schönste meines Lebens. Ich weiß, dass alles davor nur Vorbereitung war.', sign: '— Mika, dankbar in jedem Atemzug' }
  ];

  /* === PETNAMES (Arabisch · Paschtu · Bollywood — mit deutscher Übersetzung) === */
  const petnames = [
    { word: 'حياتي',         tr: 'Ḥayāti',             meaning: 'Mein Leben',              lang: 'Arabisch' },
    { word: 'حبيبتي',        tr: 'Habibti',            meaning: 'Meine Geliebte',          lang: 'Arabisch' },
    { word: 'يا قلبي',       tr: 'Ya Albi · Galbi',    meaning: 'Mein Herz',               lang: 'Arabisch · Irakisch' },
    { word: 'روحي',          tr: 'Rouhi',              meaning: 'Meine Seele',             lang: 'Arabisch' },
    { word: 'يا عمري',       tr: 'Ya Omri',            meaning: 'Du, mein Leben',          lang: 'Arabisch' },
    { word: 'يا قمر',        tr: 'Ya Amar',            meaning: 'Mein Mond',               lang: 'Arabisch' },
    { word: 'نور عيني',      tr: 'Nour el Ayni',       meaning: 'Licht meiner Augen',      lang: 'Arabisch' },
    { word: 'جانم',          tr: 'Janem',              meaning: 'Meine Seele · mein Leben', lang: 'Paschtu · Dari' },
    { word: 'زما زړه',        tr: 'Zma Zra',            meaning: 'Mein Herz',               lang: 'Paschtu' },
    { word: 'ګلابۍ',         tr: 'Gulabai',            meaning: 'Kleine Rose',             lang: 'Paschtu' },
    { word: 'سترگه',          tr: 'Stergai',            meaning: 'Mein Augenstern',         lang: 'Paschtu' },
    { word: 'مريم',          tr: 'Maryem',             meaning: 'Meine Maryem · für immer', lang: 'Ewig' },
    { word: 'Jaan',           tr: 'Jaan',               meaning: 'Mein Liebling',           lang: 'Bollywood · Hindi' },
    { word: 'Saanson Ki Maala', tr: 'Saanson Ki Maala', meaning: 'Kette meiner Atemzüge',   lang: 'Bollywood · Hindi' },
    { word: 'Mehboob',        tr: 'Mehboob',            meaning: 'Mein Geliebter',          lang: 'Bollywood · Urdu' }
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
    '„Subhanallah" — Glorie sei Allah. Wenn ich dich anschaue, ist das das einzige Wort, das passt.'
  ];

  /* === MUSIC TRACKS === */
  const tracks = [
    { id: 'tumhi',  label: 'Tum Hi Ho',          embed: 'Umqb9KENgmk' },
    { id: 'janam',  label: 'Janam Janam',        embed: 'cgmhimjsczk' },
    { id: 'kabhi',  label: 'Kabhi Kabhi Aditi',  embed: 'HIbzXaBdwZw' },
    { id: 'arabic', label: 'Nour El Ein · Bagdad', embed: 'KLJA-srM_yM' },
    { id: 'pashto', label: 'Naghma · Kandahar',  embed: '-ogNlWlornk' }
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
    'meine Königin?', 'mein Herz?', 'meine Liebe?', 'meine Maryem?', 'meine Schöne?',
    /* Englisch */
    'my Queen?', 'my Love?', 'my Soul?', 'my World?', 'my Everything?',
    /* Irakisch (Arabisch) */
    'Habibti?', 'Ya Albi?', 'Hayāti?', 'Rouhi?', 'Helwa?', 'Ya Omri?', 'Ya Galbi?',
    /* Pashtunisch */
    'Janem?', 'Zma Zra?', 'Gulabai?', 'Zma Sterge?', 'Zma Gula?'
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
      el.style.transition = 'opacity 0.45s ease, transform 0.45s ease, filter 0.45s ease';
      el.style.opacity = '0';
      el.style.transform = 'translateY(-8px)';
      el.style.filter = 'blur(6px)';
      setTimeout(() => {
        el.innerHTML = heroPetnames[i].replace(' ', '&nbsp;');
        el.style.transform = 'translateY(8px)';
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          el.style.filter = 'blur(0)';
        });
      }, 460);
    }, 3200);
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
    $('#experiencesPreview').innerHTML = experiences.slice(0, 4).map(e => `
      <article class="experience-item">
        <img src="${e.img}" alt="${e.name}" loading="lazy" />
        <div class="exp-info"><span class="exp-place">${e.place}</span><h4>${e.name}</h4></div>
      </article>
    `).join('');
    $('#experiencesAll').innerHTML = experiences.map(e => `
      <article class="experience-item">
        <img src="${e.img}" alt="${e.name}" loading="lazy" />
        <div class="exp-info"><span class="exp-place">${e.place}</span><h4>${e.name}</h4></div>
      </article>
    `).join('');
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
        return `
          <section class="plan-day">
            <div class="plan-day-tag">${d.day}<span>${d.place}</span></div>
            <article class="plan-day-card">
              <div class="plan-day-img"><img src="${dest.image}" alt="${d.place}" loading="lazy" /></div>
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
  function renderVoteArena() {
    const arena = $('#voteArena');
    let pool = state.likes.size >= 3 ? Array.from(state.likes) : ['santorini','bali','marrakesh','rajasthan','maldives','capri'];
    pool = pool.slice(0, 6);
    const votes = state.votes;
    const totals = pool.map(id => (votes[id]?.maryem || 0) + (votes[id]?.mika || 0));
    const max = Math.max(1, ...totals);
    arena.innerHTML = pool.map((id, i) => {
      const d = findDest(id); if (!d) return '';
      const v = votes[id] || { mika: 0, maryem: 0 };
      const total = v.mika + v.maryem;
      const pct = (total / max) * 100;
      const isLeading = total === Math.max(...totals) && total > 0;
      return `
        <article class="vote-card ${isLeading ? 'is-leading' : ''}">
          <div class="vote-card-img"><img src="${d.image}" alt="${d.name}" loading="lazy" /></div>
          <div class="vote-card-body">
            <h3>${d.name} <span style="font-family:'Cormorant Garamond',serif;font-style:italic;color:var(--gold-soft);font-size:14px;">${d.country}</span></h3>
            <p class="why">${d.tagline}</p>
            <div class="vote-bar"><div class="vote-bar-fill" style="width:${pct}%"></div></div>
            <div class="vote-meta">
              <span>${total} Stimme${total === 1 ? '' : 'n'}</span>
              <span>${v.mika ? '♥ Mika' : ''} ${v.maryem ? '♥ Maryem' : ''}</span>
            </div>
            <div class="vote-btns">
              <button class="vote-mika ${v.mika ? 'is-on' : ''}" data-vote="mika" data-vote-id="${id}">Mika ♥</button>
              <button class="vote-maryem ${v.maryem ? 'is-on' : ''}" data-vote="maryem" data-vote-id="${id}">Maryem ♥</button>
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
    });

    $('#lettersGrid').innerHTML = letters.map(l => `
      <article class="letter ${l.featured ? 'is-featured' : ''}">
        <span class="letter-pin">${l.pin}</span>
        <h3>${l.title}</h3>
        <p>${l.body}</p>
        <span class="letter-sign">${l.sign}</span>
        <div class="letter-actions">
          <button class="letter-action-btn" data-share="${l.id}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>Teilen</button>
          <button class="letter-action-btn" onclick="window.print()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>Drucken</button>
        </div>
      </article>
    `).join('');
    $$('[data-share]').forEach(b => {
      b.onclick = async () => {
        const l = letters.find(x => x.id === b.dataset.share);
        const text = `${l.title}\n\n${l.body}\n\n${l.sign}`;
        if (navigator.share) {
          try { await navigator.share({ title: 'Für Maryem ♥', text }); } catch {}
        } else {
          try { await navigator.clipboard.writeText(text); b.innerHTML = '✓ Kopiert'; setTimeout(() => renderLetters(), 1400); } catch {}
        }
      };
    });
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
  function playTing(freq = 880) {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.frequency.value = freq;
      o.type = 'sine';
      g.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.06, audioCtx.currentTime + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.55);
      o.connect(g).connect(audioCtx.destination);
      o.start(); o.stop(audioCtx.currentTime + 0.6);
    } catch {}
  }

  /* === MUSIC === */
  function buildMusicTabs() {
    $('#musicTabs').innerHTML = tracks.map(t => `<button class="${t.id === state.currentTrack ? 'is-active' : ''}" data-track="${t.id}">${t.label}</button>`).join('');
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

  /* === ROUTER === */
  function switchPage(name) {
    if (!$('#page-' + name)) name = 'entdecken';
    $$('.page').forEach(p => p.classList.remove('is-active'));
    $('#page-' + name).classList.add('is-active');
    $$('.side-nav a').forEach(a => a.classList.toggle('is-active', a.dataset.page === name));
    location.hash = '#' + name;
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
  function init() {
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
    const initial = location.hash.replace('#','') || 'entdecken';
    switchPage(initial);
    setTimeout(setupReveal, 400);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
