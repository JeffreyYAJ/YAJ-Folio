# YAJFolio — Premium Portfolio

A cinematic, interactive portfolio for **Jeffrey YAJ** — Backend & AI Engineer.

Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP, and Lenis smooth scrolling.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Architecture

Multi-page portfolio with a rich global background (aurora gradients, grid, particles).

| Route | Page |
|-------|------|
| `/` | Home — hero, stats, featured projects, explore cards |
| `/about` | About + timeline |
| `/projects` | Full project gallery |
| `/projects/[slug]` | Individual project case study |
| `/skills` | Interactive skill domains |
| `/research` | Research & experiments |
| `/open-source` | GitHub stats & pinned repos |
| `/startups` | Entrepreneurial ventures |
| `/contact` | Contact form |

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, globals)
├── components/
│   ├── animations/   # Reveal, Stagger, Magnetic, TextReveal
│   ├── layout/       # Navbar, Footer, Cursor, SectionWrapper
│   ├── sections/     # All 10 portfolio sections
│   └── ui/           # Button, Card, Badge, etc.
├── lib/
│   ├── data/         # Content (edit here — no UI changes needed)
│   └── hooks/        # useReducedMotion, useScrollSpy
└── types/            # Shared TypeScript types
```

## Editing Content

All portfolio content lives in `src/lib/data/`:

| File | Contents |
|------|----------|
| `site.ts` | Name, title, bio, nav links, socials |
| `projects.ts` | 13 featured projects |
| `skills.ts` | 9 interactive skill groups |
| `timeline.ts` | Experience timeline entries |
| `research.ts` | Research & experiment topics |
| `startups.ts` | Entrepreneurial ventures |
| `open-source.ts` | GitHub stats, pinned repos |

Replace placeholder assets in `public/assets/` and update `public/cv.pdf` with your real CV.

## Features

- Dark elegant design with electric blue / purple accents
- Lenis smooth scrolling with reduced-motion support
- Framer Motion reveals, stagger, magnetic buttons
- GSAP ScrollTrigger timeline animation
- Custom cursor + spotlight (desktop)
- Floating navbar with scroll spy
- Interactive skills, project modals, mailto contact form
- Fully responsive (desktop, tablet, mobile)

## Build

```bash
npm run build
npm start
```

## Placeholders to Replace

- LinkedIn URL in `src/lib/data/site.ts`
- Education details in `src/lib/data/timeline.ts`
- Project screenshots in `public/assets/projects/`
- CV at `public/cv.pdf`
