# Varsha Pyata — Portfolio

React 19 + TypeScript + Vite + Tailwind v4 + Motion. Single page, no backend.

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build in dist/
npm run lint
```

## Editing content

All text, links, projects, experience, awards and certificates live in `src/data.ts`.

## Assets (`public/`)

| File | Used for |
|---|---|
| `profile-cutout.webp` | Hero portrait (background removed, 768×960) |
| `resume.pdf` | Résumé button |
| `og.jpg` | Social share preview (1200×630) |
| `projects/<name>.jpg` | Project screenshots; set `image: '<name>'` on a project |
| `certificates/<name>.jpg` + `<name>-thumb.jpg` | Certificate viewer and gallery thumbnails; set `image: '<name>'` on a certificate |

## Live site

https://varsha-portfolio-eosin.vercel.app (deployed on Vercel). If the domain changes, update `og:url`, `og:image`, `twitter:image` and the canonical link in `index.html`.
