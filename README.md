# Sri Harshita Pilla - Mini Intro Site

Mobile-first two-page site using composite background images with tappable hotspot overlays.

## Setup

Drop your two images into `assets/`:

- `assets/page1.jpg` — the blue-sky landing composite (girl + dialog + icons)
- `assets/page2.jpg` — the purple "about" composite (title + role labels)

## Run

Open `index.html` in a browser. No build step.

## Links wired

**Page 1**
- "Hell no!!" + "Message HER" → https://www.linkedin.com/in/sriharshitapilla/
- Camera ("Know about my story") → `page2.html`
- Ink bottle ("Email me") → `mailto:pillasriharshita@gmail.com`
- CD ("my current fav songs") → YouTube playlist

**Page 2**
- Exit icon (top-left) → `index.html`

## Debug / adjusting hotspots

Add `?debug=1` to the URL (e.g. `index.html?debug=1`) to see red dashed boxes around each tap target. Tweak `%` values in `styles.css` until they sit over the correct icons.

## Files

```
index.html   - landing page
page2.html   - about page
styles.css   - layout + hotspot positions
script.js    - debug toggle
assets/      - page1.jpg, page2.jpg
```
