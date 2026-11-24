# headlesslife.com

Static blog. Astro + Tailwind, deployed to GitHub Pages on every push to `main`.

```sh
npm install
npm run dev      # http://localhost:4321 (drafts visible)
npm run build    # type-check + build to dist/ (drafts excluded)
```

New post: add `src/content/posts/<slug>.md`

```yaml
---
title: Post title
date: 2026-11-24
description: One or two lines for the index and RSS.
draft: false
---
```

`/now` and `/about` live in `src/pages/now.md` and `src/pages/about.md`.

## One-time GitHub setup

1. Repo → Settings → Pages → Source: **GitHub Actions**.
2. Custom domain: `headlesslife.com` (also in `public/CNAME`), then enable **Enforce HTTPS**.
3. DNS: apex `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; `www` `CNAME` → `<user>.github.io`.
