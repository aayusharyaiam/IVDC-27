# IVDC-27 Conference Website

React + TypeScript + Vite single-page conference website for the International Conference on **Intelligent Value Creation in a Digital Civilization** at BIT Mesra, Patna.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The site uses hash-based sections (`#home`, `#tracks`, `#committee`, and so on) so the tabbed interface works on static hosting without server rewrites.

## Content sources

The supplied brochure pages and Word document are preserved in `public/assets/source-assets/`. Conference content is rendered from the typed files in `src/data/`.
