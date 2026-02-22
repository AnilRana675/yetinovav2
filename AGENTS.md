# Agent Guidelines for YetiNova V2

## Project Overview

Next.js 16+ with React 19, TypeScript, Tailwind CSS v4, and shadcn/ui. Uses Biome for linting/formatting (not ESLint/Prettier). React Compiler enabled.

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

**Git Hooks (Husky):**
- **pre-commit**: `lint-staged` runs `biome check --write` + `tsc --noEmit` on staged files
- **commit-msg**: Enforces conventional commits via commitlint

## Code Style

### TypeScript

- Strict mode enabled - all code must pass `tsc --noEmit`
- Prefer `interface` for objects, `type` for unions
- Avoid `any` - use `unknown` with type guards

### Naming Conventions

- **Components/Files:** PascalCase (`Button.tsx`)
- **Utilities:** camelCase (`formatDate`)
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

### Type-Only Imports (CRITICAL)

Enforced by Biome `useImportType: error`:

```typescript
// ✅ Correct
import type { Metadata } from "next";
// ❌ Wrong - lint error
import { Metadata } from "next";
```

### Error Handling

| Context | Pattern |
|---------|---------|
| WebGL/Canvas | `webglcontextlost`/`webglcontextrestored` handlers, try/catch on operations |
| Utilities | Return fallback values with `console.error` |
| GSAP cleanup | Silent `try/catch` (intentional - cleanup may fail) |
| API routes | Zod validation + rate limiting + structured error responses |

### Biome Config

- **Formatter:** Double quotes, semicolons, 2-space indent, line width 100
- **Key rules:** `noUnusedVariables: error`, `useImportType: error`, `noArrayIndexKey: warn`

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

### Constants

Place at file top after imports. Use stable keys in maps:

```typescript
{ITEMS.map((item) => <div key={item}>{item}</div>)}
// For objects: key={item.id} or key={item.title}
```

## Styling

- Tailwind CSS v4 in `src/app/globals.css`
- Mobile-first breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Use `cn()` for conditional class merging
- Class order: Layout → Sizing → Spacing → Typography → Colors → Effects

## Git Workflow

- **Conventional Commits**: `type(scope): subject`
- **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `revert`, `ci`, `build`
- **Pre-commit**: Run `npm run typecheck` and `npm run lint` before committing

## Project Structure

```
src/
  app/              # Next.js App Router (api/, globals.css, layout.tsx, page.tsx)
  components/
    ui/             # shadcn/ui components
    sections/       # Page sections (Hero, Join, etc.)
    layout/         # Header, Footer
    emails/         # React Email templates
  hooks/            # Custom hooks
  lib/              # Utils, rate-limit, validations (Zod)
public/images/      # Image assets
```

## API Routes

```typescript
import { checkRateLimit } from "@/lib/rate-limit";
import { contactFormSchema } from "@/lib/validations/contact";

const identifier = request.headers.get("x-forwarded-for") || "anonymous";
const { success } = await checkRateLimit(identifier);
const validatedData = contactFormSchema.parse(data);
return Response.json({ error: "Message" }, { status: 400 });
```

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
    opacity: 1, duration: 0.8,
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

Require: `"use client"`, `webglcontextlost`/`webglcontextrestored` handlers, cleanup with `cancelAnimationFrame` and `WEBGL_lose_context`

## Section Accent Colors

| Section | Hex | Section | Hex |
|---------|-----|---------|-----|
| Hero | `#606FCC` | Partnerships | `#71B28B` |
| Batches | `#6589C9` | Join | `#77C76C` |
| Model | `#6B9EAA` | Governance | `#7DDC4D` |
| Footer | `#7cff67` | | |

Usage: `<section style={{ "--accent-color": "#6589C9" } as React.CSSProperties}>`

## Navigation

- Hash-based: `#section-id`
- Single-page app with smooth scroll
