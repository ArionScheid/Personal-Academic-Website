# TODO

## 1. Test locally

Prerequisite: Node.js 22 or newer (`node -v`).

```bash
npm install          # once, or after pulling dependency changes
npm run dev          # open http://localhost:4321 (hot reload)
```

Check:

- [ ] Page loads with off-white background, profile at the top
- [ ] Nav links scroll to each section; the active section is underlined while scrolling
- [ ] Below ~700px window width the nav collapses into a ☰ menu that opens and closes
- [ ] All external links (paper, slides, thesis PDF, LuFG 2, jckassing.com, profiles) open correctly
- [ ] `/impressum`, `/privacy` and a random URL such as `/foo` (404 page) work

Then test the **production build**, which is exactly what Netlify will serve:

```bash
npm run build        # must finish without errors
npm run preview      # open http://localhost:4321
npm run check        # optional: type-check, should report 0 errors
```

## 2. Deploy on Netlify (git-connected, auto-deploy on every push)

The repo already contains `netlify.toml`, so Netlify knows to run `npm run build`, publish `dist/` and use Node 22. You don't need to type any of these settings by hand.

### 2.1 Create the site (one time)

1. Go to <https://app.netlify.com> and log in. Signing up with **GitHub** is simplest, because it connects the accounts directly.
2. Click **Add new project** (called "Add new site" in older UIs) → **Import an existing project**.
3. Choose **GitHub** as the Git provider. A GitHub popup asks you to authorise Netlify:
   - If the repo doesn't appear in the list, click **Configure the Netlify app on GitHub**.
   - Grant access either to **All repositories** or only to `ArionScheid/coding-platform`. Private repos work fine.
4. Select the repo **`coding-platform`**.
5. On the configuration screen, check the pre-filled values, which come from `netlify.toml`:
   - Branch to deploy: `main`
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Optionally set a **project name**. It becomes the free URL `https://<name>.netlify.app`, for example `arionscheid`.
7. Click **Deploy**. The first build takes about 1–2 minutes. Watch it under **Deploys** and click the deploy to see the log.
8. Open `https://<name>.netlify.app` and run through the checklist from section 1.

### 2.2 From now on

- `git push` to `main` → Netlify rebuilds and publishes automatically.
- Opening a **pull request** gives you a separate **Deploy Preview** URL. This is useful for trying design changes without touching the live site.
- A failed build never replaces the live site; the last good deploy stays online.
- To roll back, open **Deploys**, pick an older deploy and choose **Publish deploy**.

### 2.3 Custom domain `arionscheid.com` (optional, but listed on your Google Scholar profile)

1. Netlify → your project → **Domain management** → **Add a domain** → enter `arionscheid.com`.
2. Netlify shows the DNS records to set. Choose **one** of the following:
   - **Option A, Netlify DNS (easiest):** at your domain registrar, replace the nameservers with the four `dnsN.p0X.nsone.net` nameservers that Netlify lists.
   - **Option B, keep your registrar's DNS:** add an `A` record for `@` pointing to Netlify's load balancer IP (shown in the UI), and a `CNAME` record for `www` pointing to `<name>.netlify.app`.
3. DNS changes can take from a few minutes up to 24 hours. Netlify then issues an HTTPS certificate (Let's Encrypt) automatically.
4. `astro.config.mjs` already has `site: 'https://arionscheid.com'`. If you use a different domain, change it there.

### Alternative: Netlify CLI (deploy without the web UI)

```bash
npm install -g netlify-cli
netlify login                      # opens browser
netlify init                       # links this folder to a (new) Netlify project + GitHub
netlify deploy --build             # draft deploy with a preview URL
netlify deploy --build --prod      # publish to production
```

## 3. Remaining content

Search the code for `TODO` to find each spot.

- [ ] `cv.ts`: name of the M.Sc. programme at TU Wien
- [ ] `socials.ts`: the email address to publish (and Instagram, if wanted)
- [ ] `profile.ts`: a photo (put `me.jpg` in `public/images/` and set `photo: '/images/me.jpg'`)
- [ ] `public/files/cv.pdf`: add your CV (or set `cvPdf: null` in `profile.ts`), then delete `public/files/README.txt`
- [ ] `projects.ts`: refine the descriptions; add a repo link for "This Website" or remove that card
- [ ] `impressum.astro` / `privacy.astro`: real legal text (Austria: Offenlegung per § 25 MedienG). This needs to be done **before** pointing the public domain at the site.

## 4. Ideas for later

- [ ] Dark mode (the colour tokens in `global.css` are already set up for it)
- [ ] Open Graph preview image (`public/og.png` + `og:image` meta tag in `BaseLayout.astro`)
- [ ] Generate publications from a BibTeX file
- [ ] Detail pages for projects, or a blog (Astro content collections + Markdown)
- [ ] Contact form via Netlify Forms (no backend needed)
- [ ] German/English language toggle
- [ ] Sitemap (`@astrojs/sitemap`)

## Security note

The git history was reset on 2026-10-17 to remove a committed `backend/.env` (MongoDB URI) from the old project. GitHub may still keep cached copies of the old commits for a while, so **rotate that MongoDB password** if it's still in use.
