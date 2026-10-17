# Personal Website

A single-page personal/academic website built with [Astro](https://astro.build). It compiles to plain static HTML and CSS, with about 1 KB of JavaScript for the mobile menu, and is deployed on Netlify.

## Quick start

```bash
npm install
npm run dev       # http://localhost:4321 with hot reload
```

| Command           | What it does                                     |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Local dev server with hot reload                 |
| `npm run build`   | Production build into `dist/`                    |
| `npm run preview` | Serve the built `dist/` locally (like Netlify)   |
| `npm run check`   | Type-check `.astro` and `.ts` files              |

Requires Node 22+ (see `.nvmrc`).

## Project structure

```
├── public/                 Static files copied as-is (favicon, CV PDF, images)
│   └── files/cv.pdf        ← put your CV here
├── src/
│   ├── data/               ★ ALL CONTENT LIVES HERE — edit these, not the components
│   │   ├── site.ts         Site title, description, navigation
│   │   ├── profile.ts      Name, role, bio, photo, interests
│   │   ├── socials.ts      Email, LinkedIn, GitHub, Instagram, …
│   │   ├── cv.ts           Education / experience / awards
│   │   ├── publications.ts
│   │   ├── projects.ts
│   │   └── types.ts        Shapes of the data above (TypeScript catches typos)
│   ├── components/         One component per page section
│   │   ├── Header.astro    Sticky nav + mobile menu + active-section highlight
│   │   ├── Hero.astro      Profile / about (id="about")
│   │   ├── CV.astro
│   │   ├── Publications.astro
│   │   ├── Projects.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Section.astro   Shared section wrapper (anchor, numbered heading)
│   │   └── Icon.astro      Inline SVG icon set
│   ├── layouts/
│   │   ├── BaseLayout.astro   <html>/<head>, meta tags, fonts, global CSS
│   │   └── ProseLayout.astro  Simple text pages (Impressum, privacy, 404)
│   ├── pages/              File-based routing: each file = one URL
│   │   ├── index.astro     The main one-pager
│   │   ├── impressum.astro
│   │   ├── privacy.astro
│   │   └── 404.astro
│   └── styles/global.css   Design tokens (colours, fonts, spacing) + base styles
├── astro.config.mjs
├── netlify.toml            Netlify build + headers config
└── tsconfig.json
```

### Common edits

- **Change content** → edit files in `src/data/`.
- **Change colours/fonts/spacing** → edit the CSS variables at the top of `src/styles/global.css`.
- **Add a photo** → put `me.jpg` in `public/images/` and set `photo: '/images/me.jpg'` in `profile.ts`.
- **Add a new section** → create `src/components/MySection.astro` using `<Section id="…" title="…">`, add it to `src/pages/index.astro`, and add `{ id, label }` to `nav` in `site.ts`.
- **Add a new social icon** → add the SVG path in `Icon.astro` and the name to `IconName` in `types.ts`.
- **Add a new page** (e.g. a blog later) → create a file in `src/pages/`.
