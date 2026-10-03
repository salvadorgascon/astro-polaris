# Polaris

- Requires Node.js `>=22.12.0`; use npm (`package-lock.json` is committed).
- This is still the Astro starter template. The site entrypoint is `src/pages/index.astro`, which composes `src/layouts/Layout.astro` and `src/components/Welcome.astro`; replace starter content deliberately rather than treating it as product code.
- `src/layouts/Layout.astro` owns the document shell, including the page title and favicon links. Static files belong in `public/`; imported build-time assets belong in `src/assets/`.
- TypeScript uses Astro's strict configuration (`tsconfig.json`). No test, lint, or formatter scripts are configured.

## Commands

- Install: `npm install`
- Develop: `astro dev --background`; manage it with `astro dev status`, `astro dev logs`, and `astro dev stop`.
- Build verification: `npm run build`
- Astro CLI (including checks): `npm run astro -- check`
