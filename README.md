# facundofranco.com

Personal website of **Facundo Franco** — founder of ScoutHalo. A fast, editorial
Next.js site built to grow into writing, speaking, and more over many years.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- No database, no auth, no CMS, no UI kit. Content is file-based **MDX**.
- Vanilla CSS design system in `styles/globals.css` (near-black / grey / cyan).
- Optimized fonts via `next/font`, images via `next/image`.
- Deployed on **Vercel**.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Project structure

```
app/             routes: layout, pages, sitemap.ts, robots.ts, not-found
components/      shared UI + small client components (Reveal, Portrait, Header…)
content/writing/ articles as .mdx (drafts gitignored)
lib/             site constants, schema (JSON-LD), metadata, writing loader
public/images/   images (portrait)
styles/          globals.css — the design system
```

Most of the site is server-rendered. Only genuine interactions are client
components: the nav toggle, scroll reveals, portrait parallax, scroll progress,
and magnetic buttons. All respect `prefers-reduced-motion` and degrade with no JS.

## Writing

Articles live in `content/writing/<slug>.mdx`. The URL is `/writing/<slug>`
(the filename, no extension). Frontmatter:

```yaml
---
title: "Title"
description: "One-line description used for SEO and the card."
category: "Category"
publishedAt: "2026-01-15"
updatedAt: "2026-01-20"   # optional
excerpt: "Short teaser."  # optional
featured: false
draft: false
---
```

Then write the body in Markdown/MDX.

### Adding an article

1. Create `content/writing/my-article.mdx` with the frontmatter above.
2. Write the body.
3. Keep `draft: true` while you work.

### Publishing

Set `draft: false` and add a real `publishedAt`. On the next deploy it appears on
`/writing`, the homepage preview, the sitemap, and gets `BlogPosting` structured
data with the author referencing the canonical Person.

### Draft behavior

`draft: true` means the article is:

- never listed on `/writing` or the homepage,
- never in `sitemap.xml`,
- **not** built as a static page in production (the URL 404s — see
  `dynamicParams = false` in `app/writing/[slug]/page.tsx`),
- visible only in local `npm run dev` for preview.

Unfinished drafts are also gitignored so they never reach the public repo.

## SEO

- Metadata via the Next.js Metadata API (`lib/metadata.ts`).
- Structured data via reusable helpers (`lib/schema.ts`): one canonical
  `#person`, ScoutHalo `#organization`, AgentOperator `#website`.
- `sitemap.xml` and `robots.txt` are generated (`app/sitemap.ts`, `app/robots.ts`).
- Old static URLs are redirected to clean paths in `next.config.mjs`
  (`/about.html → /about`, `/articles → /writing`).

## Deployment

Push to GitHub; Vercel builds and deploys automatically. No extra config needed —
clean URLs, redirects, image optimization, and caching are handled by Next.js.
