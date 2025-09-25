# LAZAREV —  Agency Site

Simple static site showcasing LAZAREV design studio (HTML, CSS, minimal JS + GSAP).  
This repo contains the site source used for layout, animations and simple interactions.

## Features
- Full‑page sections (#page1 .. #page4)
- Nav with animated dropdown (GSAP)
- Hover reveal and cursor‑follow image previews on page 2
- Video showreel on page 3
- Responsive footer with "Back to top"
- Uses GSAP for animations and RemixIcon for icons

## Prerequisites
- A modern browser (Chrome/Edge/Firefox)
- Optional: VS Code with Live Server, or Python for a simple static server

## Install / Run (Windows)
1. Open project folder in VS Code:
   c:\Users\Dell\OneDrive\PRIVATE
2. Quick serve options:
   - VS Code: install Live Server extension → Right click index.html → "Open with Live Server"
   - Python (from project folder):
     - Python 3: `python -m http.server 8000`
     - Open: http://localhost:8000

3. Or open index.html directly in browser (some video/CORS features better with a server).

## Project structure
- index.html — main markup
- style.css — styles
- script.js — interactions & GSAP animations
- assets are loaded from remote URLs (video, icons, logos)

## Debug checklist
- Open DevTools → Elements to check:
  - Are selectors correct (.nav-part2, .right-elem, .nav-bottom)?
  - Any element with unexpected margin/padding pushing page height?
- Console errors: fix NodeList/undefined element access (childNodes index is fragile).
- If animations not visible, confirm elements are not `display:none` when animating.

## License
MIT — adapt and reuse.
