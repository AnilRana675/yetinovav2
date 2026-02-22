# YetiNova V2

A modern venture studio website for YetiNova, built with Next.js 16+, React 19, TypeScript, and Tailwind CSS v4. Features animated sections, project showcases, contact form with email integration, and comprehensive developer tooling.

## Quick Overview

| Category | Technology |
|----------|------------|
| Framework | Next.js 16+ (App Router) |
| Language | TypeScript (Strict Mode) |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui + Radix |
| Animation | GSAP + Motion |
| Linting | Biome |
| Testing | Vitest |
| CI/CD | GitHub Actions + Lighthouse CI |

## Features

- **Hero Section** — Aurora background animation with WebGL
- **Model Section** — Animated content about the business model
- **Chairman Section** — Leadership showcase
- **Partnerships Section** — Partner logos and information
- **Join Section** — Contact form with validation
- **Governance Section** — Company governance information
- **Projects Showcase** — Venture portfolio listing (`/projects`) + venture detail pages (`/projects/[slug]`) (AstraYug, AgroConnect)
- **Email Integration** — Contact form sends admin notifications and auto-replies via Resend
- **Google Sheets Sync** — Contact submissions synced to Google Sheets

## Getting Started (Local)

### 1. Clone

```bash
git clone https://github.com/AnilRana675/yetinovav2.git
cd yetinovav2
```

### 2. Install

```bash
npm ci
```

### 3. Environment Setup

```bash
cp .env.example .env.local
```

Configure the following variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend email API key | Yes (for contact form) |
| `RESEND_FROM_EMAIL` | Sender email address | No (defaults to contact@yetinova.com) |
| `ADMIN_EMAIL` | Admin notification recipient | No (defaults to contact@yetinova.com) |
| `GOOGLE_SCRIPT_URL` | Google Apps Script webhook URL | Optional (for Sheets sync) |
| `NEXT_PUBLIC_API_URL` | Public API endpoint | Optional |
| `NEXT_PUBLIC_ANALYTICS_ID` | Analytics tracking ID | Optional |

### 4. Run Development Server

```bash
npm run dev
# Open http://localhost:3000
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Check lint errors (Biome) |
| `npm run lint:fix` | Auto-fix lint errors |
| `npm run format` | Format code (Biome) |
| `npm run check` | Lint + format in one command |
| `npm run typecheck` | TypeScript check (no emit) |
| `npm run test` | Run tests (Vitest, watch mode) |
| `npm run test:run` | Run tests once |
| `npm run test:ui` | Run tests with UI |

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/contact/        # Contact form API endpoint
│   ├── projects/           # Project showcase pages
│   │   ├── agroconnect/    # AgroConnect venture page
│   │   ├── astrayug/       # AstraYug venture page
│   │   └── page.tsx        # Projects listing
│   ├── globals.css         # Global styles (Tailwind v4)
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Dynamic sitemap generator
│   └── not-found.tsx       # 404 page
├── components/
│   ├── emails/             # React Email templates
│   ├── layout/             # Header, Footer, ProjectFooter
│   ├── sections/           # Page sections (Hero, Model, etc.)
│   └── ui/                 # Reusable UI components
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and validation
│   ├── rate-limit.ts       # In-memory rate limiting
│   ├── utils.ts            # Helper functions
│   └── validations/        # Zod schemas
└── test/                   # Test setup and utilities
```

## API Endpoints

### POST /api/contact

Submit contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "inquiryType": "partnership",
  "message": "Hello!",
  "websiteUrl": ""
}
```

**Response (Success):**
```json
{
  "data": {
    "id": "email-id",
    "status": "sent"
  }
}
```

**Success Status:** `201 Created`

**Error Codes:**
| Code | Status | Description |
|------|--------|-------------|
| `invalid_json` | 400 | Invalid JSON body |
| `bot_detected` | 400 | Honeypot field triggered |
| `rate_limit_exceeded` | 429 | Too many requests |
| `validation_error` | 422 | Invalid form data |
| `forbidden` | 403 | Invalid origin |
| `payload_too_large` | 413 | Request body too large |
| `email_failed` | 500 | Email sending failed |
| `internal_error` | 500 | Unexpected server error |

## Venture Portfolio (Projects)

Projects are implemented as Next.js App Router routes under `src/app/projects`.

**Current ventures:**

- `w26-astrayug` → `/projects/astrayug` — Digital Agency & Infrastructure
- `w25-agroconnect` → `/projects/agroconnect` — AgroTech & Supply Chain

**Add a new venture:**

1. Create a route: `src/app/projects/<slug>/page.tsx` (export `metadata` and the page component).
2. Register it in `src/app/projects/page.tsx` inside the `VENTURES` array (id/slug/name/initials/category/description/accentColor/year/status).

## Contributing

1. **Code Style** — Follow Biome configuration (double quotes, semicolons, 2-space indent)
2. **Commits** — Use conventional commits (`feat`, `fix`, `docs`, etc.)
3. **Pre-commit** — Hooks run automatically (lint-staged + typecheck)
4. **Tests** — Write tests for new utilities and API routes

See [AGENTS.md](./AGENTS.md) for detailed development guidelines.

## Deploy

### Vercel (Recommended)

1. Connect the repo in [Vercel Dashboard](https://vercel.com)
2. Set environment variables
3. Deploy automatically on push to main

### Manual

```bash
npm run build
npm run start
```

## Documentation

- [AGENTS.md](./AGENTS.md) — Detailed development guidelines for AI assistants and developers
- [docs/](./docs/) — Additional documentation and change logs

## License

Private project. All rights reserved.
