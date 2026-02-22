# Agent Guidelines for YetiNova V2

Next.js 16+ with React 19, TypeScript, Tailwind CSS v4, shadcn/ui. Biome for lint/format, Vitest for tests.

## Build Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Check lint errors (Biome)
npm run lint:fix     # Auto-fix lint errors
npm run typecheck    # TypeScript check (no emit)
npm run format       # Format code (Biome)
npm run check        # Lint + format in one command
npm run test         # Run tests (Vitest, watch mode)
npm run test:run     # Run tests once
npm run test:ui      # Run tests with UI
npx vitest run src/path/to/test.ts  # Single test file
```

## Git Hooks

- **pre-commit:** lint-staged (biome check + tsc --noEmit on staged files)
- **commit-msg:** commitlint (conventional commits)
- **pre-push:** `npm run lint`

## Code Style

**TypeScript:** Strict mode. Prefer `interface` for objects, `type` for unions. Avoid `any`; use `unknown` with type guards.

**Formatting (Biome):** double quotes, semicolons, 2-space indent, line width 100.

**Naming:** Components/Files PascalCase, utilities camelCase, constants UPPER_SNAKE_CASE, CSS classes kebab-case.

**Import Order:**
```typescript
"use client";  // 1. Client directive (if needed) - always line 1
import { useEffect } from "react";  // 2. React/Next
import { gsap } from "gsap";  // 3. External (alphabetical)
import { Button } from "@/components/ui/Button";  // 4. Internal @/*
import { cn } from "@/lib/utils";  // 5. Utilities
```

**Type-Only Imports (CRITICAL):**
```typescript
import type { Metadata } from "next";  // Correct
import { Metadata } from "next";        // Wrong - lint error
```

## React Patterns

- Add `"use client"` for hooks, handlers, browser APIs, WebGL.
- `forwardRef` components must set `displayName`.
- Use `cn()` for class merging.

## Component Patterns

**CVA:**
```typescript
const buttonVariants = cva("base-classes", {
  variants: { variant: { default: "bg-primary" }, size: { default: "h-10" } },
  defaultVariants: { variant: "default", size: "default" }
});
```

## Error Handling

- **WebGL/Canvas:** handle `webglcontextlost`/`webglcontextrestored`, wrap init in try/catch.
- **Utilities:** return fallback values with `console.error`.
- **GSAP cleanup:** silent try/catch (cleanup can fail).
- **API Routes:** structured error responses with Zod validation.

**API Error Response:**
```typescript
return NextResponse.json(
  { error: { code: "validation_error", message: "Invalid input" } },
  { status: 422 }
);
```

## API Routes

### Contact Form (/api/contact)

- Rate limiting (5 req/min per IP)
- Zod validation
- Honeypot bot detection (`websiteUrl` field)
- Admin email notification via Resend
- Delayed auto-reply
- Google Sheets sync (optional)
- CORS origin validation

**Email Templates:**
- `src/components/emails/AdminNotification.tsx`
- `src/components/emails/UserAutoReply.tsx`

## Styling

Tailwind CSS v4 in `src/app/globals.css`. Mobile-first: `sm:`, `md:`, `lg:`, `xl:`.

**Custom CSS Variables:** `--accent-color`, `--font-serif`, `--font-mono`.

## Animation

- GSAP + ScrollTrigger via `useGSAP`.
- Motion uses `useScroll` and `useTransform`.
- WebGL requires `"use client"`, context loss handlers, cleanup with `cancelAnimationFrame`.

## Testing

- `src/lib/utils.test.ts`
- `src/lib/rate-limit.test.ts`
- `src/lib/validations/contact.test.ts`

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key |
| `RESEND_FROM_EMAIL` | Sender address (default: contact@yetinova.com) |
| `ADMIN_EMAIL` | Admin notification recipient |
| `GOOGLE_SCRIPT_URL` | Optional Google Sheets sync |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all sections |
| `/projects` | Venture portfolio listing |
| `/projects/astrayug` | AstraYug venture details |
| `/projects/agroconnect` | AgroConnect venture details |

## Venture Pages (Projects)

Ventures live in `src/app/projects/page.tsx` as `VENTURES` and link to `/projects/[slug]`.

**Current ventures:**
- `w26-astrayug` (AstraYug) — `/projects/astrayug`
- `w25-agroconnect` (AgroConnect) — `/projects/agroconnect`

**Add a venture:**
1. Add object to `VENTURES` (unique `slug`, stable `id`).
2. Create `src/app/projects/<slug>/page.tsx` with `metadata`.
3. Use `ProjectFooter` on venture pages.

## Project Structure

```
src/
├── app/                    # App Router
│   ├── api/contact/        # Contact endpoint
│   ├── projects/           # Venture pages
│   ├── globals.css         # Tailwind v4
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/             # UI, sections, layout, emails
├── hooks/                  # Custom hooks
├── lib/                    # Utilities, rate limit, validations
└── test/                   # Vitest setup
```

## Git Workflow

Conventional commits: `type(scope): subject`.
Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`.
