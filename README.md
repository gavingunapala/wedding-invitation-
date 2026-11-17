# Wedding Invitation — Gavin & Oshadi

A responsive React + Vite invitation with a paper envelope opening, botanical artwork, wedding details, countdown, gallery, and email RSVP.

## Run locally

```sh
npm install
npm run dev
```

Open the Local URL printed in the terminal.

The project uses the WebAssembly distribution of esbuild, avoiding the native executable that Windows security blocked on this machine. The override keeps Vite using the same implementation.

## Build and preview

```sh
npm run build
npm run preview
```

The production output is in `dist/`.

## Customize

Edit `src/data.js` for the couple's names, date, venue, story, schedule, gallery image paths, and RSVP details. The countdown date includes Sri Lanka's UTC offset so it is consistent for guests abroad.

The current RSVP address (`rsvp@example.com`) is a placeholder; replace it with your real address. Check the RSVP deadline before sharing. Both buttons open the guest's email app with an acceptance or decline message; replies are sent when the guest sends that email.

The SVGs in `public/images/` are decorative artwork. Replace their paths in `src/data.js` with your photographs when ready. Update the page title and description in `index.html`, and the initials in the favicon/artwork if changing the couple.

## Design

Shared colors, typography, envelope geometry, and responsive layouts are in `src/styles.css`. The envelope seal is centered with a separate position wrapper so its opening animation cannot change its alignment. Keyboard navigation, a visible focus indicator, reduced motion, and small portrait/landscape layouts are supported.
