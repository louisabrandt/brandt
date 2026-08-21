# Brandt — Relationship Coaching Landing Page

A boutique landing page for **Brandt**, the private couples-counseling and
relationship-coaching practice of Louisa Brandt (M.Sc., Clinical Psychology).
Dark, cinematic, warm-cream editorial mood. Online sessions in English & German.

Built with **Vite + React 18 + TypeScript + Tailwind CSS 3**, animated with
**framer-motion**, icons from **lucide-react**.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle
```

## Sections

- **Hero** — full-viewport inset video panel, hanging navbar pill, giant
  `Brandt` wordmark with a superscript asterisk, description + "Request a
  consultation" CTA.
- **About** — `#101010` card with a mixed-style pull-up heading (Almarai +
  Instrument Serif italic) and a scroll-linked, character-by-character body
  reveal.
- **Features** — four-card grid (video card + three service cards with green
  checklists), subtle SVG noise overlay, staggered scale-in entrances.

## Shared animation components (`src/components`)

- `WordsPullUp` — word-by-word slide-up; `showAsterisk` adds the hero `*`.
- `WordsPullUpMultiStyle` — per-segment styled words, same stagger.
- `AnimatedLetter` — scroll-driven per-character opacity (0.2 → 1).

## Swapping media

All video and card-image URLs live in [`src/constants.ts`](src/constants.ts).
The current clips are on-brand public placeholders — replace `HERO_VIDEO_URL`
and `FEATURE_VIDEO_URL` with Louisa's own calm, intimate b-roll, and the
`CARD_ICON_*` images with her preferred soft/abstract icons.

## Brand tokens

- Backgrounds: `#000000` (global), `#101010` (About card), `#212121` (Feature
  cards)
- Text: `#E1E0CC` (primary, inline) / `#DEDBC8` (Tailwind `primary` token)
- Fonts: Almarai (global), Instrument Serif italic (accent), loaded in
  `index.html`
