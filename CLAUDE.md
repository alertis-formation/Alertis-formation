# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Stack

- Next.js 16 · React 19 · TypeScript 5 (strict) · Tailwind CSS v4
- UI components: `@base-ui/react` (unstyled primitives) + shadcn — import from `@/components/ui/`, not directly from `@shadcn/ui`
- Icons: `lucide-react` · Path alias: `@/*` → `src/*`

## Commands

- `npm run dev` — dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint v9 flat config (`eslint.config.mjs`, no `.eslintrc`)
- No Prettier — ESLint only for code quality
- No test suite

## Deployment

Deployed on Vercel. Env vars required (set in Vercel dashboard, not committed):
- `PEXELS_API_KEY` — stock images for articles
- `CLAUDE_CODE_OAUTH_TOKEN` — CI article bot

## CI — Daily article generation

`.github/workflows/daily-article.yml` runs daily at 9h UTC via Claude Code action.
Prompt template: `.github/prompts/daily-article.md`
Bot commits as: `Alertis Article Bot <info@alertis.fr>`

## Gotchas

- Remote images are served from `alertisformation.com/wp-content/uploads/**` — any new image domain must be added to `images.remotePatterns` in `next.config.ts`
- Tailwind v4 has breaking changes from v3 — check `node_modules/tailwindcss/CHANGELOG.md` before using v3-style config or utilities
