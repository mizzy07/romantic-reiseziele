# Our Next Adventure ♥

A little gift app from Mika to Maryem — pick our next romantic trip together.

Live: https://mizzy07.github.io/romantic-reiseziele/

## Stack

Static site, no build step. Just three files:

- `index.html` — markup and layout
- `styles.css` — all styling, responsive down to mobile
- `script.js` — destination data and interactive carousel / shortlist / compare

## Local preview

```sh
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy

Push to `main`. GitHub Pages serves from the repo root (`.nojekyll` enabled).
