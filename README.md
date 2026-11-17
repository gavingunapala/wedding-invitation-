# Wedding Invitation — Gavin & Oshadi

A responsive React + Vite invitation with a paper envelope opening, botanical artwork, wedding details, countdown, gallery, and WhatsApp RSVP.

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

Set `rsvpWhatsApp` in `src/data.js` to the receiving WhatsApp number, including its country code. Check the RSVP deadline before sharing. Both buttons use [WhatsApp click to chat](https://faq.whatsapp.com/5913398998672934) to open an acceptance or decline message addressed to that number. Guests can add their names and send the message themselves. RSVP links remain inactive until the number is set.

The SVGs in `public/images/` are decorative artwork. Replace their paths in `src/data.js` with your photographs when ready. Update the page title and description in `index.html`, and the initials in the favicon/artwork if changing the couple.

## Design

Shared colors, typography, envelope geometry, and responsive layouts are in `src/styles.css`. The envelope seal is centered with a separate position wrapper so its opening animation cannot change its alignment. Keyboard navigation, a visible focus indicator, reduced motion, and small portrait/landscape layouts are supported.
