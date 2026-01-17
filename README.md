# Tubeflix (v2)

Tubeflix is a React front-end built with Vite. This repository contains the v2 of the UI — a responsive, component-driven app showcasing streaming-style features, pricing, and a landing page.

This README explains how to get the project running, how the repository is organized, key development scripts, and contribution notes.

**Tech stack**: React, Vite, CSS/PostCSS, ESLint

## Quick Start

Prerequisites

- Node.js 16+ (LTS recommended)
- npm or yarn

Install dependencies

```bash
npm install
# or
yarn
```

Run the development server

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:5173 in your browser (Vite will show the exact URL).

Build for production

```bash
npm run build
# or
yarn build
```

Preview the production build locally

```bash
npm run preview
# or
yarn preview
```

Linting

```bash
npm run lint
# or
yarn lint
```

## Project structure

- public/
  - Images/ — static images used by the app
- src/
  - App.jsx — root application component
  - main.jsx — Vite entry
  - index.css — global styles
  - assets/ — images and static assets used by components
  - components/ — reusable UI components (e.g., Button.jsx, PriceItem.jsx, FeaturesItem.jsx)
  - pages/ — top-level pages and route targets (e.g., NotFound.jsx)
  - pages/home/ — landing/home page split into `sections` and `constants`

For a quick view of core files see [src/App.jsx](src/App.jsx) and [src/main.jsx](src/main.jsx).

## Development notes

- Components are written as functional React components using modern hooks.
- Styles use the global `index.css` with component-level selectors in JSX.
- Keep components small and focused; prefer composition over large monolithic components.

Accessibility

- Aim for semantic HTML and ARIA attributes for interactive elements.

Images & assets

- Add images to `public/Images` for static references or to `src/assets` when importing in JS.

## Scripts (package.json)

- `dev` — start Vite dev server (hot module replacement)
- `build` — build production bundle
- `preview` — locally preview production build
- `lint` — run ESLint

If your `package.json` differs, replace the script names above with the project's configured scripts.

## Testing & CI

This template doesn't include a test runner by default. For unit testing consider adding Jest or Vitest:

```bash
npm install -D vitest @testing-library/react
```

Add a `test` script and write tests under `src/__tests__` or alongside components.

## Deployment

Static hosting providers that support single-page apps (Netlify, Vercel, GitHub Pages, Surge) work well.

General steps

1. Build the app: `npm run build`
2. Deploy the `dist/` folder to your hosting provider

For Vercel: connect the repo and set the build command to `npm run build` and the output directory to `dist`.

## Contributing

- Fork the repo and create a feature branch: `git checkout -b feat/your-feature`
- Keep commits small and focused
- Open a pull request describing the change and include screenshots if UI changes

If you'd like linting or formatting rules updated, add changes and explain them in your PR.

## Useful links

- Vite: https://vitejs.dev/
- React: https://reactjs.org/

## License

Specify your preferred license in `package.json` and add a `LICENSE` file. If you don't have one yet, consider `MIT`.
