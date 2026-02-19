# Agent Guidelines for YetiNova V2

## Project Overview

Next.js 16+ with React 19, TypeScript, Tailwind CSS v4, and shadcn/ui.

## Build Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # Check lint errors
npm run lint:fix     # Auto-fix lint errors
npm run typecheck    # TypeScript check (no emit)
npm run format       # Format with Prettier
```

**Note:** No unit tests configured.

## Code Style

### TypeScript

- Strict mode enabled - all code must pass `tsc --noEmit`
- Use explicit types for functions
- Prefer `interface` for objects, `type` for unions

### Naming Conventions

- **Components/Files:** PascalCase (e.g., `Button.tsx`)
- **Utilities:** camelCase
- **Constants:** UPPER_SNAKE_CASE
- **CSS Classes:** kebab-case in Tailwind

### Import Order

React → External libs → Internal aliases (`@/*`) → Relative imports

### Component Pattern (CVA)

```typescript
const buttonVariants = cva("base-classes", {
  variants: {
    variant: { default: "bg-primary", brand: "bg-[#606FCC]" },
    size: { default: "h-10 px-4", xl: "px-6 py-4" },
  },
  defaultVariants: { variant: "default", size: "default" },
});

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  )
);
Button.displayName = "Button";
```

### Styling

- Tailwind CSS v4 in `src/app/globals.css`
- Mobile-first: `sm:`, `md:`, `lg:`, `xl:`
- Use `cn()` for class merging
- CSS variables: `var(--accent-color)` for section colors

### Prettier Config

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "tabWidth": 2,
  "useTabs": false
}
```

## Git Workflow

- **Conventional Commits** enforced: `type(scope): subject`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`
- Pre-commit: typecheck → eslint --fix → prettier --write

### Pre-commit Checklist

1. `npm run typecheck` passes
2. `npm run lint` shows no errors
3. `npm run format` applied

## Project Structure

```
src/
  app/              # Next.js App Router
    globals.css     # Tailwind v4 config
    layout.tsx      # Root layout
    page.tsx        # Home page
  components/
    ui/             # shadcn/ui components
    sections/       # Page sections
    layout/         # Header, Footer
  lib/
    utils.ts        # cn(), hexToRgb()
public/
  images/           # Image assets
```

## Key Dependencies

- **UI:** shadcn/ui, Radix UI, Lucide icons
- **Animation:** GSAP, Motion (Framer Motion), ogl (WebGL)
- **Styling:** Tailwind CSS v4, class-variance-authority
- **Fonts:** JetBrains Mono, Manrope, Instrument Sans

## Animation Patterns

### GSAP - Scroll Animations

```typescript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to(element, {
  scrollTrigger: { trigger: element, start: "top 80%" },
  opacity: 1,
  duration: 0.8,
});
```

### Motion - React Animations

```typescript
import { motion, useScroll, useTransform } from "motion/react";
const { scrollYProgress } = useScroll();
const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
```

### WebGL Components

All WebGL components (Aurora, Particles, Squares) use `ogl` and handle context loss:

```typescript
"use client";
// Listen for 'webglcontextlost' and 'webglcontextrestored' events
```

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

Usage: `<section style={{ "--accent-color": "#6589C9" }}>`

## Navigation

- Hash-based: `#section-id`
- Single-page app with smooth scroll

## Docs

Additional documentation in `/docs/`:

- `DELETION_LOG.md`
- `MOBILE_RESPONSIVENESS_FIXES.md`
- `websiteColorTheory.md`
