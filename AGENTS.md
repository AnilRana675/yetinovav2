# Agent Guidelines for YetiNova V2

## Project Overview

Next.js 16+ with React 19, TypeScript, Tailwind CSS v4, and shadcn/ui. Uses Biome for linting/formatting (not ESLint/Prettier).

## Build Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Check lint errors (Biome)
npm run lint:fix     # Auto-fix lint errors (Biome --unsafe)
npm run typecheck    # TypeScript check (no emit)
npm run format       # Format code (Biome)
npm run check        # Lint + format in one command (Biome)
```

**Testing:** No tests currently configured. When adding tests, configure Vitest or Jest first.

**Git Hooks (Husky):**
- **pre-commit**: Runs `lint-staged` on staged *.ts, *.tsx, *.json files
  - `biome check --write` (format + lint)
  - `tsc --noEmit` (type check)
- **commit-msg**: Enforces conventional commits via commitlint

## Code Style

### TypeScript

- Strict mode enabled - all code must pass `tsc --noEmit`
- Use explicit types for functions
- Prefer `interface` for objects, `type` for unions
- Avoid `any` - use `unknown` with type guards instead

### Naming Conventions

- **Components/Files:** PascalCase (e.g., `Button.tsx`)
- **Utilities:** camelCase (e.g., `formatDate`)
- **Constants:** UPPER_SNAKE_CASE at file top after imports
- **CSS Classes:** kebab-case in Tailwind

### Import Order

```typescript
"use client";  // 1. Client directive (if needed) - always line 1

import { useEffect, useRef } from "react";  // 2. React/Next
import { gsap } from "gsap";  // 3. External libraries (alphabetical)
import { Button } from "@/components/ui/Button";  // 4. Internal aliases (@/*)
import { cn } from "@/lib/utils";  // 5. Utilities (last)
```

### Error Handling

- **WebGL/Canvas:** Handle context loss with `webglcontextlost`/`webglcontextrestored` events
- **Utilities:** Return fallback values with `console.error` for invalid inputs
- **GSAP cleanup:** Silent `try/catch` blocks (intentional - cleanup may fail)
- **Canvas operations:** Wrap in try/catch with console.error logging
- No error boundaries - use try/catch in useEffect hooks

### Biome Config

Configuration in `biome.json`:

- **Formatter:** Double quotes, semicolons, 2-space indent, line width 100, trailing commas ES5
- **Linter:** Recommended + a11y + React hooks + security + style rules
- **Key rules:** `noUnusedVariables: error`, `useImportType: error`, `noArrayIndexKey: warn`
- **Additional rules:** `noExplicitAny: warn`, `noDoubleEquals: error`, `useExhaustiveDependencies: warn`

**Type-Only Imports (CRITICAL):**
```typescript
// ✅ Correct - enforced by useImportType rule
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";

// ❌ Wrong - will cause lint error
import { Metadata } from "next";
```

## React Patterns

### Client Components

```typescript
"use client";  // Required for: hooks, event handlers, browser APIs, WebGL

// Not required for: static components, page.tsx, layout.tsx (without hooks)
```

### forwardRef Pattern

```typescript
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";
```

### Props Interface

```typescript
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
```

### Exports

- **Named exports** for sections/layout: `export function Header() {}`
- **Default exports** for some UI components: `export default Squares;`

## Component Patterns

### CVA (class-variance-authority)

```typescript
const buttonVariants = cva("base-classes", {
  variants: {
    variant: { default: "bg-primary", brand: "bg-[#606FCC]" },
    size: { default: "h-10 px-4", xl: "px-6 py-4" },
  },
  defaultVariants: { variant: "default", size: "default" },
});
```

### Constants Pattern

```typescript
const CHECKLIST_ITEMS = [
  "Item one",
  "Item two",
];

// Usage with stable keys
{ITEMS.map((item) => <div key={item}>{item}</div>)}
// For objects, use unique property: key={item.title} or key={item.id}
```

## Styling

- Tailwind CSS v4 in `src/app/globals.css`
- Mobile-first breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Use `cn()` for conditional class merging
- CSS variables: `var(--accent-color)` for section colors

### Class Organization

1. Layout/positioning 2. Sizing 3. Spacing 4. Typography 5. Colors 6. Effects

## Git Workflow

- **Conventional Commits** enforced: `type(scope): subject`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`
- Pre-commit: lint-staged runs typecheck + biome check --write

### Pre-commit Checklist

1. `npm run typecheck` passes
2. `npm run lint` shows no errors
3. `npm run format` applied

## Project Structure

```
src/
  app/              # Next.js App Router
    api/            # API routes (contact form)
    globals.css     # Tailwind v4 config
    layout.tsx      # Root layout
    page.tsx        # Home page
  components/
    ui/             # shadcn/ui components (Button, Card, etc.)
    sections/       # Page sections (Hero, Join, etc.)
      hero/         # Complex sections split into multiple files
    layout/         # Header, Footer
    emails/         # React Email templates
  hooks/            # Custom hooks (useMediaQuery)
  lib/
    utils.ts        # cn(), hexToRgb()
    rate-limit.ts   # API rate limiting
    validations/    # Zod schemas
public/
  images/           # Image assets
```

## API Route Patterns

API routes use Zod validation + rate limiting + error handling:

```typescript
// Rate limiting (from lib/rate-limit.ts)
import { checkRateLimit } from "@/lib/rate-limit";
const identifier = request.headers.get("x-forwarded-for") || "anonymous";
const { success } = await checkRateLimit(identifier);

// Zod validation (from lib/validations/contact.ts)
import { contactFormSchema } from "@/lib/validations/contact";
const validatedData = contactFormSchema.parse(data);

// Error responses
return Response.json({ error: "Message" }, { status: 400 });
```

## Key Dependencies

- **UI:** shadcn/ui, Radix UI, Lucide icons
- **Animation:** GSAP (ScrollTrigger, useGSAP), Motion (Framer Motion), ogl (WebGL)
- **Styling:** Tailwind CSS v4, class-variance-authority
- **Fonts:** JetBrains Mono, Manrope, Instrument Sans

## Animation Patterns

### GSAP with ScrollTrigger

```typescript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

useGSAP(() => {
  gsap.to(element, {
    scrollTrigger: { trigger: element, start: "top 80%", once: true },
    opacity: 1,
    duration: 0.8,
  });
}, { scope: ref });
```

### Motion (Framer Motion)

```typescript
import { motion, useScroll, useTransform } from "motion/react";
const { scrollYProgress } = useScroll();
const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
```

### WebGL Components

All WebGL components (Aurora, Particles, Squares) require:
- `"use client"` directive
- `webglcontextlost` / `webglcontextrestored` event handlers
- Cleanup with `cancelAnimationFrame` and `WEBGL_lose_context`

## Section Accent Colors

| Section      | Hex       |
| ------------ | --------- |
| Hero         | `#606FCC` |
| Batches      | `#6589C9` |
| Model        | `#6B9EAA` |
| Partnerships | `#71B28B` |
| Join         | `#77C76C` |
| Governance   | `#7DDC4D` |
| Footer       | `#7cff67` |

Usage: `<section style={{ "--accent-color": "#6589C9" } as React.CSSProperties}>`

## Navigation

- Hash-based: `#section-id`
- Single-page app with smooth scroll
