# yetinova-v2

Lightweight Next.js starter for Yetinova V2 — a modern React + Next.js app scaffolded from create-next-app, with Tailwind, TypeScript, and developer tooling.

Quick overview
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Dev tools: ESLint, Prettier, Husky + lint-staged

Getting started (local)

1. Clone
   ```bash
   git clone https://github.com/AnilRana675/yetinovav2.git
   cd yetinovav2
   ```

2. Install
   ```bash
   npm ci
   # or yarn / pnpm
   ```

3. Run dev server
   ```bash
   npm run dev
   # open http://localhost:3000
   ```

Useful scripts
- `npm run dev`        — start dev server (Next.js)
- `npm run build`      — build for production
- `npm run start`      — start production server
- `npm run lint`       — run ESLint (errors only)
- `npm run lint:fix`   — run ESLint and auto-fix
- `npm run format`     — run Prettier to format files
- `npm run typecheck`  — run TypeScript type check

Environment
- Create a `.env.local` with any `NEXT_PUBLIC_*` variables required by your app.
- See `.env.example` for a template.

Contributing
- Open small, focused PRs.
- Follow the code style: ESLint + Prettier.
- Run tests and lint locally before submitting a PR.

Deploy
- This repo deploys easily to Vercel. Connect the repo in the Vercel dashboard and set environment variables as needed.
- Alternatively: `npm run build && npm run start` on your host.

License
- Add a license file if you plan to open-source this project publicly.
