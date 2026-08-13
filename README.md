# Wedding Invitation — Daniel & Emma

A single-page, scroll-driven 3D wedding invitation built with **React + Vite + React Three Fiber**.

## Run locally

```
npm install
npm run dev
```

## Build for Vercel

```
npm run build
```

Vercel auto-detects Vite and serves the `dist` output. Push the repo to GitHub and import it on
[vercel.com](https://vercel.com) — no config needed.

## Customize

All text, dates, and photo paths live in **`src/data.js`**. Edit that one file for most changes.

### Add your real couple photos
Replace the placeholders in `public/images/` (or update the paths in `src/data.js`):

```
public/images/photo-1.jpg
public/images/photo-2.jpg
public/images/photo-3.jpg
```

Photo ratio is roughly 5:6 portrait — photos are used in the 3D scene, the gallery,
and cropped with `object-fit: cover`.

### 3D scene
The 3D polaroid cards are in `src/components/Scene3D.jsx` — scroll and mouse-move driven.
Tweak keyframes there (position/rotation/opacity per scroll offset) if you want a different motion.

## Sections (separate components, one page)

Hero → Story → Ceremony & Reception → Countdown → Gallery → RSVP → Footer
