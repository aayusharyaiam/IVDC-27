# IVDC–2027 Conference Website

React + TypeScript + Vite single-page conference website for the International Conference on **Intelligent Value Creation in a Digital Civilization** at BIT Mesra, Patna.

## Run locally

```bash
npm ci
npm run dev
```

Then open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production files are written to `dist/`. The site uses hash-based sections (`#home`, `#tracks`, `#committee`, and so on) so the tabbed interface works on static hosting without server rewrites.

## Content sources

The supplied brochure pages and Word documents are preserved in `source-assets/`, outside Vite's public directory, so they are not included in production builds. The current two-page brochure PDF is available at `public/assets/IVDC-2027-Brochure.pdf` and is linked from the hero and footer. Conference content is rendered from the typed files in `src/data/`.

## Deployment and security

The production site is deployed on Vercel. `vercel.json` applies the Content Security Policy and browser security headers. Keep external form links in `src/data/conference.ts` pointed at responder URLs (`viewform`), never editor URLs (`edit`). Verify the Google Forms access settings before each release if submissions should be open to users outside the organisation.

Dependencies are pinned and reproduced through `package-lock.json`. Use `npm ci` in CI and deployment environments. Do not add secrets to the frontend or to `VITE_*` variables because Vite exposes those values in the browser bundle.

Run the release checks before deployment:

```bash
npm audit
npm audit signatures
npm run build
```
