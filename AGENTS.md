# Agent Guidelines for YetiNova V2

Next.js 16+ with React 19, TypeScript, Tailwind CSS v4, shadcn/ui. Uses Biome for linting/formatting.

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

**Git Hooks:** pre-commit runs lint-staged (biome + tsc), commit-msg enforces conventional commits.

## Code Style

**TypeScript:** Strict mode - must pass `tsc --noEmit`. Use explicit types, prefer `interface` for objects, `type` for unions. Avoid `any` - use `unknown` with type guards.

**Naming:** Components/Files: PascalCase, Utilities: camelCase, Constants: UPPER_SNAKE_CASE, CSS Classes: kebab-case

**Import Order:**
```typescript
"use client";  // 1. Client directive (if needed) - always line 1
import { useEffect } from "react";  // 2. React/Next
import { gsap } from "gsap";  // 3. External (alphabetical)
import { Button } from "@/components/ui/Button";  // 4. Internal @/*
import { cn } from "@/lib/utils";  // 5. Utilities
```

**Biome Config:** double quotes, semicolons, 2-space indent, line width 100. Key rules: `noUnusedVariables: error`, `useImportType: error`, `noDoubleEquals: error`

**Type-Only Imports (CRITICAL):**
```typescript
import type { Metadata } from "next";  // ✅ Correct
import { Metadata } from "next";        // ❌ Wrong - lint error
```

## Error Handling

- **WebGL/Canvas:** Handle `webglcontextlost`/`webglcontextrestored` events
- **Utilities:** Return fallback values with `console.error`
- **GSAP cleanup:** Silent try/catch (intentional - cleanup may fail)
- **Canvas:** Wrap in try/catch with console.error logging

## React Patterns

**Client Components:** `"use client"` required for hooks, event handlers, browser APIs, WebGL

**forwardRef:**
```typescript
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";
```

**Props Interface:**
```typescript
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "brand";
  size?: "default" | "xl";
}
```

## Component Patterns

**CVA:**
```typescript
const buttonVariants = cva("base-classes", {
  variants: {
    variant: { default: "bg-primary", brand: "bg-[#606FCC]" },
    size: { default: "h-10 px-4", xl: "h-12 px-6" },
  },
  defaultVariants: { variant: "default", size: "default" },
});
```

**Constants:** `const CHECKLIST_ITEMS = ["Item one", "Item two"];`

## Styling

Tailwind CSS v4 in `src/app/globals.css`. Mobile-first: `sm:`, `md:`, `lg:`, `xl:`. Use `cn()` for conditional class merging. CSS variables: `var(--accent-color)` for section colors.

## API Routes

```typescript
import { checkRateLimit } from "@/lib/rate-limit";
import { contactFormSchema } from "@/lib/validations/contact";

const identifier = request.headers.get("x-forwarded-for") || "anonymous";
const { success } = await checkRateLimit(identifier);
const validatedData = contactFormSchema.parse(data);
return Response.json({ error: "Message" }, { status: 400 });
```

## Animation

**GSAP + ScrollTrigger:**
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

**Motion:**
```typescript
import { motion, useScroll, useTransform } from "motion/react";
const { scrollYProgress } = useScroll();
const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
```

**WebGL:** Requires `"use client"`, context loss handlers, cleanup with `cancelAnimationFrame`.

## Section Accent Colors

| Section      | Hex       |
|--------------|-----------|
| Hero         | `#606FCC` |
| Batches      | `#6589C9` |
| Model        | `#6B9EAA` |
| Partnerships | `#71B28B` |
| Join         | `#77C76C` |
| Governance   | `#7DDC4D` |
| Footer       | `#7cff67` |

Usage: `<section style={{ "--accent-color": "#6589C9" } as React.CSSProperties}>`

## Project Structure

```
src/app/         # Next.js App Router (api/, globals.css, layout.tsx, page.tsx)
src/components/  # ui/, sections/, layout/
src/hooks/       # Custom hooks
src/lib/         # utils.ts, rate-limit.ts, validations/
```

## Git Workflow

**Conventional Commits:** `type(scope): subject` - types: feat, fix, docs, style, refactor, perf, test, chore. Pre-commit: `npm run typecheck` → `npm run lint` → `npm run format`
