# sumitchavda.vercel.app

Personal portfolio for **Sumit Chavda** — Software Engineer and founder of [LeelaRam Technologies](https://www.leelaramtechnologies.com), maker of the SellRank Shopify app (headless commerce, Shopify apps, ERP integrations, analytics engineering).

Built with Next.js 15 (App Router) and Tailwind CSS v4. No runtime dependencies beyond React — the whole page is statically prerendered.

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Lint |

## Architecture

```
src/
├── app/
│   ├── layout.tsx      # Fonts, metadata/SEO, <noscript> reveal fallback
│   ├── page.tsx        # Section composition only
│   ├── globals.css     # Design tokens + base styles
│   └── favicon.ico
├── assets/
│   └── hero.png        # Portrait (cropped & duotoned in CSS)
├── components/
│   ├── Nav.tsx         # Sticky nav + mobile menu
│   ├── Hero.tsx        # Headline, intro, metrics strip
│   ├── Work.tsx        # Selected projects
│   ├── Experience.tsx  # Role timeline
│   ├── Stack.tsx       # Skill groups
│   ├── Research.tsx    # IEEE IGARSS 2025 paper
│   ├── About.tsx       # Education, certifications, video résumé
│   ├── Contact.tsx     # Contact + social links + footer
│   └── ui/
│       ├── Section.tsx # Section shell (eyebrow / title / intro)
│       ├── Reveal.tsx  # Scroll-reveal wrapper
│       └── Tag.tsx     # Stack pill
└── data/
    ├── site.ts         # Identity, socials, metrics, nav links
    ├── work.ts         # Projects + research
    ├── experience.ts   # Roles, education, certifications
    └── skills.ts       # Skill groups
```

**Content lives in `src/data/`, not in components.** To update a project, role or metric, edit the relevant data file — the components render whatever is there.

## Design system

Monochrome ink with a single copper accent. Tokens are declared in `src/app/globals.css` under `@theme`:

- `--color-ink-*` — greyscale ramp, `ink-950` is the page background
- `--color-copper-*` — the sole accent, used sparingly on links, metrics and active states
- `--font-sans` — Inter (body and headings)
- `--font-mono` — JetBrains Mono (labels, metrics, metadata)

Font variables are set on `<html>` so the `@theme` tokens at `:root` can resolve them.

## Motion

Scroll reveals are CSS + `IntersectionObserver` (`src/components/ui/Reveal.tsx`), deliberately not a motion library:

- The hidden state lives in CSS (`[data-reveal]`), so server and client markup are identical and there is no hydration mismatch.
- `prefers-reduced-motion: reduce` skips the effect entirely.
- A `<noscript>` rule and a 2.5s failsafe timeout guarantee content is never stuck invisible.

## Deployment

Deployed on Vercel. `main` is the production branch.
