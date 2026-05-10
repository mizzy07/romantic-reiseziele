# Maryem-App Deep Audit — Pass 2 (10.05.2026)

## Status

**Schulnote: 1- (sehr gut, live)** — alle Blocker des ersten Audits sind gelöst.

| Was | Vorher | Nachher |
|---|---|---|
| Lighthouse Performance (mobile) | 66 | **86** |
| LCP (mobile) | 9,5s | **3,9s** |
| TBT (mobile) | 50ms | **10ms** |
| CLS (mobile) | 0,001 | 0,001 |
| Accessibility | 98 | **98** |
| HTTPS Cert | `null` (kaputt) | **`approved`, gültig bis 8.8.2026** |
| HTTPS Forced | `false` | **`true`** |
| HTTP→HTTPS Redirect | nein | **ja, automatisch** |
| Hero-Asset Mobile | 238 MB UHD-Video | **Poster-Image (~60 KB)** |
| Leaflet Bundle | immer geladen (~150 KB) | **Lazy nur auf #karte** |

## Was wurde geprüft & gefixt

### 1. HTTPS / GitHub Pages Zertifikat ✓
- DNS verifiziert: A 4× → GitHub, AAAA 4× → GitHub, CNAME `www` → `mizzy07.github.io`, Mail-Records (MX/SPF/DKIM/DMARC) unangetastet.
- Cert war `null` weil GitHub-Pages den Auth-Workflow nicht angestoßen hatte.
- **Fix**: CNAME geleert + neu gesetzt via GitHub API → Cert-State `authorization_created` → nach ~5 Min `approved`.
- Let's Encrypt Cert für `marymika.de` + `www.marymika.de`, Issuer `R13`, gültig bis **2026-08-08**.
- HTTPS Forced via `gh api -X PUT pages -F https_enforced=true` aktiviert.

### 2. Mobile Performance / LCP ✓
- **LCP-Killer**: 238 MB UHD MP4 (`uhd_3840_2160`) wurde auf jedem Pageopen geladen.
- **Fix**: Hero ist jetzt `<picture>` mit responsive `<source>` (mobile 900px @ q70 ≈ 60 KB, tablet 1400px, desktop 1900px). Video lädt nur auf Desktop (>768px) **nach `requestIdleCallback`** und nur HD 1280×720 (31 MB statt 238 MB), per `preload="none"` — kein Block für LCP.
- Hero-Poster mit `<link rel="preload" as="image" fetchpriority="high">` für sofortigen Bytestart.
- Save-Data und 2G-Verbindung respektiert (Video komplett übersprungen).
- Reduced-Motion respektiert (kein Video, keine Sterne, kürzere Intro).
- Intro-Veil auf Mobile von 3,6s auf **1,9s** verkürzt.

### 3. Lazy-Load Leaflet ✓
- Leaflet-CSS und -JS waren immer im `<head>`/`<body>` (~150 KB blockierend).
- **Fix**: `loadLeaflet()` lädt CSS+JS dynamisch erst beim Routing zu `#karte`. Promise-cached, kein Doppel-Load. Karte rendert weiterhin perfekt.

### 4. Bilder ✓
- Bereits aus erstem Audit: alle `<img>` haben `width`, `height`, `alt`, `loading`, `decoding` via `imgAttrs()`-Helper.
- 17/17 JS-template-Bilder + Hero-Poster mit korrekten Attributen.

### 5. iPhone / Safari Realtest ✓
- Screenshot 390×844 + 390×1500: keine horizontale Scroll, keine Clippings, Hero-h1 vollständig sichtbar, Sticky-Bar überlappt keine Inhalte.
- Splash + Hero + Stats + Liebesnotiz auf Mobile sauber.

### 6. Interaktions-Matrix ✓
- **11/11 Seiten** routen korrekt (`#entdecken` … `#karte`).
- localStorage-Keys: `maryem_letters_v1` und `maryem_v3` werden korrekt genutzt.
- **0 Console-Errors** auf Hauptseiten.
- Leaflet-Lazy-Load: `window.L` ist `undefined` bis `#karte`, dann verfügbar.

### 7. Accessibility ✓ (98/100)
- Skip-Link, Focus-Trap in Modals, sr-only Labels, ARIA-live, alle Bilder mit Alt-Text.
- Goldene `:focus-visible`-Ringe.
- Reduced-Motion und Save-Data komplett respektiert.

### 8. Polish ✓
- **404.html**: Custom-Seite im Bollywood-Letterpress-Stil mit Liebes-Botschaft („Habibti, hier ist nichts — aber überall sonst alles für dich") und CTA zurück zur Startseite.
- **robots.txt**: `Disallow: /` (privates Geschenk, soll nicht indiziert werden).
- `<meta name="robots" content="noindex, nofollow">` + `<link rel="canonical">` im `<head>`.
- Fortunately keine `sitemap.xml` (passt nicht zu noindex).

## Was bleibt offen (Low Priority)

- `unused-css-rules` Lighthouse-Hinweis: ~470 ms Potenzial in `styles.css`. Tote Selektoren rauszupurgen würde aber Risiko bergen ohne Tests; nicht angefasst.
- `unminified-css/js`: ~470 ms gesamt. Kein Build-System bewusst gewählt, daher unminifiziert akzeptiert. Wenn nötig später via `terser`/`csso` als Pre-Commit-Hook.
- Service Worker / Offline: bewusst ausgelassen (komplex, nicht geschäftskritisch für ein Geschenk).
- Echte Tests auf Maryem's iPhone (Safari iOS) konnten nicht remote gemacht werden — Headless-Chromium war Stellvertreter.

## Was richtig gut ist (nicht anfassen)

Soul, persönliche Story, Bollywood-Letterpress-Aesthetic, Pandora-Arc, 322 Erinnerungen, Karte, Kosenamen in 8 Sprachen, 20+ Liebesbriefe, Walima/Pandora/Verses-Cards inline auf Liebesbriefe, „Briefe von Maryem"-Form, Milestone-Counter, SRK-Ticker, Music-Player, Custom Heart-Cursor, Konfetti+Audio+Vibration, alle Familien-Referenzen (Allguth-Mama, Pandora, Riesstraße, Penzberg, Hajar+Momo, Noor+Monir, Oma „Darling", Drei kleine Tests, Samira, Walima 2027, Mekka Umrah, Unser Palast).

## Live-Status (verifiziert 10.05.2026)

- ✅ `https://marymika.de` → HTTP/2 200, valides Let's Encrypt Cert (`CN=marymika.de`)
- ✅ `https://www.marymika.de` → ebenfalls im Cert enthalten
- ✅ `http://marymika.de` → leitet sauber auf HTTPS um
- ✅ Lighthouse Mobile Performance **86**, A11y **98**, SEO **100**
- ✅ Alle 11 Pages live, 0 Console-Errors
- ✅ Mail-Records weiterhin auf IONOS, Maryem-Inbox unangetastet

PR: [#34](https://github.com/mizzy07/romantic-reiseziele/pull/34) gemerged, deployed.
