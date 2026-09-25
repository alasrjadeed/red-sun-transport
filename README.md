# Red Sun Transport — Marketing Website

Bilingual (EN/AR) **marketing website** for Red Sun Transport & Movers Packers (Bahrain).
Live at **redsuntransport.bh**.

> **Repo scope: website only.** The site runs against the project's own running API + database on its server — no backend code, data files, or secrets live in this repository.

## What's here

- **Marketing site** — hero + animated slides, services slider, local-keyword grids, GCC coverage map (17 spots incl. SA/QA/KW/AE/OM), home-move estimator, quote form, testimonials, FAQ, news/blog, map + directions, floating WhatsApp widget.
- **Local SEO / GEO / AEO** — static JSON-LD `@graph` in `index.html` + runtime swap in `src/Seo.jsx` (MovingCompany, AggregateRating 4.9/187, Reviews, GBP placeholder, speakable FAQ, Blog, Breadcrumb), per-page title/desc/canonical/hreflang, `public/robots.txt`, `public/llms.txt`, `public/sitemap.xml`, `public/google-business.txt` (GBP/Bing NAP sheet).
- **i18n** — full EN/AR, RTL, hreflang (Tajawal for Arabic).

## Stack

Vite + React 18 · Vite dev server :5174 (`strictPort` — never collides with other projects on 5173) · `/api` proxied to `127.0.0.1:3001` · `npm run build` → `dist/`.

DePS: react, react-dom, jspdf (+autotable), xlsx. Dev: vite, @vitejs/plugin-react.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5174
npm run build      # production bundle → dist/
```

The site expects the backend API on `127.0.0.1:3001` (proxy in `vite.config.js`) — point it at your own running instance if not local.

## Layout

```
index.html        static SEO head + JSON-LD
src/              App (Marketing site), Seo, SiteContext, i18n, api, exporters, views (Blog/Faq/Map/…)
public/           fonts (Noto Sans Arabic + Google Fonts), logos, robots/llms/sitemap, google-business.txt
```

## SEO health

`POST /api/geo/score` on the API audits this site's GEO/AEO surface — current live score **84/100 "strong"** (2026-09-25).

## Licence

Proprietary — all rights reserved. © 2026 AL ASAR JADEED.