# M.CT.M.MUN'26

The official conference website for M.CT.M.MUN — M.CT.M. Chidambaram Chettyar International School's Model United Nations. Built with Next.js (App Router) and statically exported to GitHub Pages.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/` — one folder per route (`legacy`, `committees`, `secretariat`, `gallery`, `register`), each with a `page.tsx` and a scoped `*.module.css`.
- `src/components/` — shared UI (nav, hero, cards, secretariat flip-cards, page transitions).
- `src/data/mun.ts` — all site content lives here: committees (agenda, chair/vice chair, background guide links), secretariat roles and bios, the school address. Edit this file to update text/roster instead of touching page components.
- `src/utils/asset.ts` — `assetPath()` resolves every asset URL against the deploy's basePath; always wrap static asset paths with it instead of hardcoding `/...`.
- `public/` — images, video, and PDFs. Committee background guides live under `public/guides/`, secretariat photos under `public/secretariat/`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which does a static `next build` (`output: "export"`) and publishes `out/` to GitHub Pages via GitHub Actions.

The site currently serves from a GitHub Pages **project subpath** (`/MCTM.MUN`), so `next.config.ts` prefixes every asset/link with that basePath in production. **Moving to a custom domain:** delete the `NEXT_PUBLIC_BASE_PATH` line in `deploy.yml` (or set it to `""`) — the config already falls back to an empty basePath when that env var isn't set, so this is a one-line change plus adding a `CNAME` file under `public/` with the domain name.

Note: GitHub Pages must be configured with **Source: GitHub Actions** (repo Settings → Pages) — the legacy "Deploy from a branch" mode runs a separate Jekyll build that will race this workflow and intermittently serve the wrong content.

## Scripts

`scripts/` holds one-off asset-prep tooling (logo background removal, video/image conversion) used during initial setup — not part of the build.
