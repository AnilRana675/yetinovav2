# Agent Guidelines for YetiNova V2

## Project Overview

Next.js 16+ web application using React 19+, TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Build & Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint              # Check for lint errors
npm run lint:fix          # Auto-fix lint errors

# Type checking
npm run typecheck         # Run TypeScript compiler (no emit)

# Formatting
npm run format            # Format all files with Prettier
```

**Note:** This project does not have unit tests configured. No test commands are available.

## Code Style Guidelines

### TypeScript

- Enable strict mode - all code must pass `tsc --noEmit`
- Use explicit types for function parameters and return values
- Prefer `interface` over `type` for object definitions
- Use `type` for unions, conditionals, and mapped types

### Naming Conventions

- **Components:** PascalCase (e.g., `Button.tsx`, `HeroSection`)
- **Files:** PascalCase for components, camelCase for utilities
- **Variables/Functions:** camelCase
- **Constants:** UPPER_SNAKE_CASE for true constants
- **Types/Interfaces:** PascalCase with descriptive names
- **CSS Classes:** kebab-case in Tailwind

### Imports

- Order: React → External libs → Internal aliases (`@/*`) → Relative imports
- Group and separate import sections with blank lines
- Use `@/` path alias for all internal imports (configured in tsconfig.json)

### Component Structure

- Use functional components with explicit return types
- Props interface named `{ComponentName}Props`
- Forward refs using `React.forwardRef` with `displayName` set
- Use `class-variance-authority` (cva) for variant-based styling
- Combine Tailwind classes with `cn()` utility from `@/lib/utils`

### Styling

- Tailwind CSS v4 with CSS variables for theming
- Custom accent color: `#606FCC` (brand blue)
- Dark mode is default (`dark` class on html element)
- Use `cn()` utility to merge and conditionally apply Tailwind classes

### Error Handling

- Prefer early returns over nested conditionals
- Use TypeScript's strict null checks to prevent runtime errors
- Handle async errors with try/catch blocks

### React Patterns

- React Compiler enabled (configured in next.config.ts)
- Use `"use client"` directive only when necessary (client components)
- Server Components by default (Next.js App Router)
- Use `@radix-ui/react-slot` for polymorphic components

### Git Workflow

- **Conventional Commits required** - enforced by commitlint
- Format: `type(scope): subject`
- Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `revert`, `ci`, `build`
- Subject: lowercase, no period at end, max 100 chars
- Pre-commit hooks run: typecheck → eslint --fix → prettier --write

### Code Quality Checks

Before committing, ensure:

1. `npm run typecheck` passes
2. `npm run lint` shows no errors
3. `npm run format` has been applied

## Project Structure

```
src/
  app/              # Next.js App Router pages
  components/
    ui/             # shadcn/ui components
    sections/       # Page sections
    layout/         # Layout components (Header, Footer)
  lib/
    utils.ts        # Utility functions (cn, etc.)
  styles/           # Global styles
```

## Key Dependencies

- **UI:** shadcn/ui, Radix UI, Lucide icons
- **Animation:** GSAP, Motion (Framer Motion)
- **Styling:** Tailwind CSS v4, class-variance-authority
- **Fonts:** Geist Mono, Manrope, Instrument Sans
