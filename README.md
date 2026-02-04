# Vite + React + Tailwind starter

A lightweight Vite-powered React app with Tailwind CSS prewired. Hot reload is enabled and a styled landing screen lives in `src/App.jsx`.

## Requirements

- Node.js 20.19+ or 22.12+ (Vite prints a warning on older minors)
- npm 10+

## Quick start

```bash
npm install
npm run dev
```

Useful scripts:

- `npm run dev` - start the Vite dev server with HMR
- `npm run build` - production build
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint

## Tailwind setup

- `tailwind.config.js` scans `index.html` and all files in `src/` for class names.
- `src/index.css` pulls in Tailwind base/components/utilities and defines a small design system (glass cards, primary button, pill tags).

## Project structure

- `src/main.jsx` - renders the React app
- `src/App.jsx` - example landing page using Tailwind utilities
- `src/index.css` - global styles and Tailwind directives
- `public/` - static assets served at the root

## Deployment

Build the app with `npm run build`; the output lives in `dist/` and can be served by any static host.
