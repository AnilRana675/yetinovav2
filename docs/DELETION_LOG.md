# Code Deletion Log

## [2026-02-18] Refactor Session

### Unused Dependencies Removed

- `radix-ui@^1.4.3` - **package.json**
  - **Last used:** Never directly imported
  - **Reason:** The project uses `@radix-ui/react-slot` (specific sub-package), not the full `radix-ui` monorepo package. This was a duplicate/unnecessary dependency.
  - **Impact:** Reduced bundle size by removing unused monorepo package.

### Duplicate Code Consolidated

- `hexToRgb()` function
  - **Before:** Defined in both `src/components/ui/Particles.tsx` and `src/components/ui/aurora/Aurora.tsx`
  - **After:** Moved to `src/lib/utils.ts` as a shared utility
  - **Files updated:**
    - `src/lib/utils.ts` - Added consolidated `hexToRgb()` function
    - `src/components/ui/Particles.tsx` - Removed local definition, imports from utils
    - `src/components/ui/aurora/Aurora.tsx` - Removed local definition, imports from utils
  - **Benefits:**
    - Single source of truth for color conversion logic
    - Better maintainability
    - Consistent error handling (added 8-character hex support with alpha handling)
    - Reduced bundle size (eliminates duplicate code)

### Unused Exports Identified (Kept for Potential Future Use)

These exports are currently unused but retained as they may be needed for:

- External component composition
- Future feature expansion
- Third-party consumption

- `Card` function - `src/components/ui/Card.tsx:8`
  - No current imports found
  - Similar pattern components (`CardWithIcon`, `ValueCard`, `VentureCard`) are used

- `LeaderCard` function - `src/components/ui/Card.tsx:87`
  - No current imports found
  - Component appears complete but not yet integrated

- `buttonVariants` - `src/components/ui/Button.tsx:63`
  - Only used internally by Button component
  - Commonly exported for variant type inference in consuming apps

- `ButtonProps` interface - `src/components/ui/Button.tsx:42`
  - Only used internally by Button component
  - Commonly exported for prop extension in wrapper components

### Build Verification

- ✅ TypeScript compilation passes (`tsc --noEmit`)
- ✅ Production build succeeds (`next build`)
- ✅ All static pages generated successfully
- ✅ No runtime errors detected

### Impact Summary

| Metric              | Before | After | Change |
| ------------------- | ------ | ----- | ------ |
| Dependencies        | 16     | 15    | -1     |
| Duplicate functions | 2      | 1     | -1     |
| Files changed       | -      | 4     | -      |

### Files Modified

1. `package.json` - Removed `radix-ui` dependency
2. `src/lib/utils.ts` - Added `hexToRgb()` utility function
3. `src/components/ui/Particles.tsx` - Import `hexToRgb` from utils
4. `src/components/ui/aurora/Aurora.tsx` - Import `hexToRgb` from utils

---

## Notes

- The devDependencies flagged by `depcheck` (`@commitlint/cli`, `@tailwindcss/postcss`, etc.) are false positives - they are used by the toolchain (Husky, Tailwind v4, etc.)
- `@radix-ui/react-slot` is correctly listed as a transitive dependency through shadcn/ui components
- No breaking changes introduced - all existing functionality preserved
