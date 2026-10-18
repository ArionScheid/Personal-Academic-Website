# Personal Website

Personal academic website of Arion Scheid, built with [Astro](https://astro.build). It is a single page that compiles to plain static HTML and CSS, with about 1 KB of JavaScript for the mobile menu. Netlify deploys it automatically from `main`.

## Quick start

Requires Node 22+ (see `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:4321 with hot reload
```

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Local dev server with hot reload               |
| `npm run build`   | Production build into `dist/`                  |
| `npm run preview` | Serve the built `dist/` locally (like Netlify) |
| `npm run check`   | Type-check `.astro` and `.ts` files            |

Before pushing, run `npm run build` and `npm run check`. Both should finish without errors.

## Project structure

```
├── cv/cv.html              Source of the public CV PDF (see "Updating the CV")
├── public/                 Static files copied as-is
│   ├── files/Arion_Scheid_CV.pdf
│   └── images/me.jpg       Profile photo (640×640 square crop)
├── src/
│   ├── data/               ★ ALL CONTENT LIVES HERE: edit these, not the components
│   │   ├── site.ts         Site title, description, navigation
│   │   ├── profile.ts      Name, role, bio, photo, interests, CV path
│   │   ├── socials.ts      Email, LinkedIn, GitHub, Scholar, ORCID, …
│   │   ├── cv.ts           Education / teaching
│   │   ├── publications.ts
│   │   ├── projects.ts
│   │   └── types.ts        Shapes of the data above (TypeScript catches typos)
│   ├── components/         One component per page section (Hero = About, CV, Publications, …)
│   │   ├── Section.astro   Shared section wrapper (anchor + heading)
│   │   └── Icon.astro      Inline SVG icon set
│   ├── layouts/            BaseLayout (<head>, meta, fonts), ProseLayout (404 and simple pages)
│   ├── lib/inline.ts       Turns [text](url) in data strings into links
│   ├── pages/              File-based routing: index.astro, 404.astro
│   └── styles/global.css   Design tokens (colours, fonts, spacing) + base styles
├── astro.config.mjs        `site` URL (https://arionscheid.com)
└── netlify.toml            Netlify build settings and headers
```

## Common edits

- **Content**: edit the files in `src/data/`. Bio paragraphs, CV details and other strings support inline links written as `[text](url)`.
- **Publications**: `type` is one of `journal`, `conference`, `workshop`, `preprint`, `thesis`, `other`. An optional `href` turns the title into a link, and `note` is shown after the venue (e.g. the presentation format).
- **Colours, fonts, spacing**: edit the CSS variables at the top of `src/styles/global.css`.
- **Photo**: replace `public/images/me.jpg` with a square image (about 640×640 px, ideally under 100 KB). The path is set by `photo` in `profile.ts`, and `photo: null` shows the initials instead.
- **New section**: create `src/components/MySection.astro` using `<Section id="…" title="…">`, add it to `src/pages/index.astro`, and add `{ id, label }` to `nav` in `site.ts`.
- **New social icon**: add the SVG path in `Icon.astro` and the name to `IconName` in `types.ts`.
- **New page** (e.g. a blog): add a file in `src/pages/`.

## Updating the CV

The downloadable CV (`public/files/Arion_Scheid_CV.pdf`, referenced by `cvPdf` in `profile.ts`) is generated from `cv/cv.html`. That file uses the site's fonts from `node_modules`, so run `npm install` first. It is public, so it intentionally leaves out the phone number and photo.

1. Edit `cv/cv.html`. Opening it in a browser shows the result.
2. Regenerate the PDF with headless Edge or Chrome (Windows / Git Bash example):

   ```bash
   "/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --no-pdf-header-footer \
     --allow-file-access-from-files \
     --print-to-pdf="$(cygpath -w "$PWD/public/files/Arion_Scheid_CV.pdf")" \
     "file:///$(cygpath -m "$PWD/cv/cv.html")"
   ```

   Alternatively, open `cv/cv.html` in Chrome or Edge, choose **Print → Save as PDF**, turn off headers and footers, and save it over the existing file.

## Deployment (Netlify)

`netlify.toml` configures the build (`npm run build`, publish `dist/`, Node 22).

- Every push to `main` rebuilds and publishes the site. A failed build never replaces the live site.
- Each pull request gets its own **Deploy Preview** URL.
- To roll back, go to Netlify → **Deploys**, pick an older deploy and choose **Publish deploy**.
- **Custom domain**: Netlify → **Domain management** → **Add a domain**. Then either switch the registrar's nameservers to Netlify DNS, or add an `A` record for `@` (Netlify's load balancer IP) and a `CNAME` for `www` pointing to `<name>.netlify.app`. HTTPS is issued automatically. If the domain isn't `arionscheid.com`, update `site` in `astro.config.mjs`.

## Open items

- [ ] `projects.ts`: details for the Visual Learning Tool once it's ready
- [ ] `socials.ts`: Instagram, if wanted

Ideas for later: dark mode (the colour tokens are already set up for it), an Open Graph preview image, a sitemap (`@astrojs/sitemap`), generating publications from BibTeX, project detail pages or a blog via content collections, and a German/English toggle.
