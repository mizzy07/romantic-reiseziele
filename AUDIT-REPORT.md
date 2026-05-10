# Maryem-App Deep Audit

## 1. App-Gesundheit
Schulnote: **2- lokal, 3+ live**, weil die App emotional stark, stabil und sehr reich ist, aber `https://marymika.de` wegen fehlendem GitHub-Pages-Zertifikat noch nicht sauber auslieferbar ist. Lokal: 11/11 Seiten rendern, 22 Post-Screenshots erstellt, keine Console-/HTTP-Fehler im Browsercheck, Memories-Manifest: 328 Records, 322 Fotos, 6 Videos, 0 fehlende Dateien.

## 2. Blocker
- **Live-HTTPS:** GitHub Pages meldet `https_certificate: null`; `https_enforced=false`; HTTPS-Curl scheitert am Zertifikat. DNS-A/AAAA/CNAME sind korrekt, also GitHub-Zertifikat abwarten/neu anstoßen.
- **Mobile Clipping:** war sichtbar bei Hero, Liebesbriefe, Karte; Top-Fix angewendet. Dokumentbreite bleibt im Rendercheck bei 390px.

## 3. High
- XSS-Risiko in Maryems Brief-Titeln entschärft.
- Falscher localStorage-Key für Maryem-Briefe auf `maryem_letters_v1` korrigiert.
- Sichtbare Budget-/Preisbegriffe entfernt.
- OG-/Twitter-Vorschau ergänzt.
- Tastaturbedienung für Destination-Cards verbessert.
- Modal-Fokus/ESC-Cleanup gehärtet.
- Bilder mit `width/height`, `alt`, `loading`, `decoding` versehen.
- Form-Labels, Skip-Link, Fokus-Ringe und Live-Region ergänzt.

## 4. Medium
- Mobile Lighthouse Performance: 66, LCP 9,5s; Desktop: 86, LCP 2,2s.
- Kein Custom-404, keine `robots.txt`/`sitemap.xml`.
- CSP/SRI nur begrenzt möglich auf GitHub Pages; Google Fonts ohne SRI.
- Safari/iOS, Firefox, Edge nicht voll manuell durchgeklickt; Chrome-Headless und Screenshots sind abgedeckt.
- Service Worker/offline fehlt.

## 5. Top-15 konkrete Diffs
1. `index.html` `<head>`: vorher keine OG-Karte; nachher `og:title`, `og:description`, `og:image`, Twitter Card.
2. `index.html` Font-Link: vorher rohes `&`; nachher valides `&amp;`.
3. `index.html` Body: vorher kein Skip-Link; nachher `.skip-link`.
4. `index.html` `main`: vorher nicht fokussierbar; nachher `tabindex="-1"`.
5. `index.html` Hero/Reiseziele Copy: vorher “Sechsunddreißig”; nachher “Siebenundvierzig”.
6. `index.html` Maryem-Form: vorher keine Labels; nachher sr-only Labels.
7. `index.html` Maryem-Form: vorher `maxlength=3000`; nachher `5000`.
8. `styles.css` global: vorher schwache Fokusführung; nachher goldene `:focus-visible`.
9. `styles.css` mobile Hero: vorher Text/Bilder rechts abgeschnitten; nachher feste 390px-Arbeitsbreite und responsive Hero-Regeln.
10. `styles.css` reduced motion: vorher Scroll/Animationen teils aktiv; nachher stärker reduziert.
11. `script.js` `esc()`: vorher HTML-Strings gemischt; nachher zentrale Escaping-Hilfe.
12. `script.js` Maryem-Briefe: vorher Titel ungeescaped; nachher sicher gerendert.
13. `script.js` Maryem-Key: vorher `maryem_briefe_v1`; nachher `maryem_letters_v1`.
14. `script.js` Images: vorher oft ohne Maße; nachher `imgAttrs()`.
15. `script.js` Modal/Card UX: vorher weniger Keyboard/Focus-Cleanup; nachher Enter/Space, ESC, Fokus auf Schließen.

## 6. Was richtig gut ist
Nicht anfassen: Soul, persönliche Story, Bollywood-Letterpress-Aesthetic, Pandora-Arc, Erinnerungen, Umrah/Kandahar/Bagdad-Linie, Petnames, Musikgefühl, Karte und die “Geschenk statt Website”-Wirkung.
