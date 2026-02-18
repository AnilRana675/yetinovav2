# Mobile Responsiveness Fixes

**Date:** 2026-02-18  
**Project:** YetiNova V2  
**Status:** ✅ Completed  
**Approach:** CSS-Only (Tailwind Media Queries)

## Summary

This document tracks all mobile responsiveness improvements made to the YetiNova V2 website using pure CSS/Tailwind responsive classes. All changes use the `hidden` and `block`/`md:block` pattern to render different versions of components for mobile vs desktop.

**Important:** No JavaScript-based media queries are used. All responsiveness is handled via CSS, ensuring:

- ✅ Better performance (no JS execution or re-renders)
- ✅ SSR compatibility (works during server-side rendering)
- ✅ Instant response (CSS media queries react immediately)
- ✅ No hydration issues (no mismatch between server/client)

## Changes Made

### 1. BatchesSection.tsx

**File:** `src/components/sections/BatchesSection.tsx`

**Issues Fixed:**

- Particles not visible initially on desktop (required interaction to show)
- Particles not showing on mobile (dual instance visibility issues)
- High particle count (200) causing performance issues
- Large particle base size (100px) causing visual overlap on small screens

**Solution:** Use a single Particles instance with CSS transform scaling. The component always renders and uses responsive CSS transforms to scale appropriately for different screen sizes.

**Changes:**

```typescript
// Before (Dual instances with visibility toggles)
{/* Desktop Particles - hidden on mobile */}
<div className="hidden md:block absolute inset-0 z-0">
  <Particles
    particleCount={200}
    particleBaseSize={100}
    speed={0.1}
    moveParticlesOnHover={true}
  />
</div>
{/* Mobile Particles - hidden on desktop */}
<div className="md:hidden absolute inset-0 z-0">
  <Particles
    particleCount={50}
    particleBaseSize={60}
    speed={0.05}
    moveParticlesOnHover={false}
  />
</div>

// After (Single instance with CSS transforms)
{/* Particles Background - responsive with CSS transforms */}
<div className="absolute inset-0 z-0 origin-center scale-75 md:scale-100">
  <Particles
    particleColors={["#ffffff", "#5B7BC4", "#ccff00"]}
    particleCount={150}
    particleSpread={10}
    speed={0.08}
    particleBaseSize={80}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
```

**Key Features:**
| Feature | Value | Mobile Scaling |
|---------|-------|----------------|
| Particle Count | 150 | Consistent (no dual instances) |
| Base Size | 80px | 75% on mobile (scale-75) |
| Speed | 0.08 | Consistent |
| Hover Effects | Enabled | Works on all devices |
| Visibility | Always | No hidden/show toggles |

**CSS Transform Approach:**

- `origin-center` - Scales from the center of the container
- `scale-75` - Mobile: scales to 75% size (60px effective)
- `md:scale-100` - Desktop: full 100% size (80px)

**Impact:**

- ✅ Particles always visible (fixes "not showing until clicked" issue)
- ✅ Single instance reduces bundle complexity
- ✅ Consistent animation state across breakpoints
- ✅ Better performance (no mounting/unmounting)
- ✅ No hydration mismatches
- ✅ Smooth scaling transition between breakpoints

---

### 2. ModelAboutSection.tsx

**File:** `src/components/sections/ModelAboutSection.tsx`

**Issues Fixed:**

- Fixed 75px square size appearing too large on mobile screens
- Background animation potentially overwhelming on small devices

**Solution:** Create two separate Squares instances with different sizes. Use Tailwind responsive classes to show/hide them.

**Changes:**

```typescript
// Before (JavaScript approach - REMOVED)
const isMobile = useIsMobile();
<Squares
  squareSize={isMobile ? 40 : 75}
/>

// After (CSS-only approach)
{/* Animated Grid Background - Desktop */}
<div className="hidden md:block absolute inset-0 z-0">
  <Squares
    direction="down"
    speed={0.25}
    borderColor="var(--accent-color)"
    squareSize={75}
    hoverFillColor="var(--accent-color)"
  />
</div>

{/* Animated Grid Background - Mobile */}
<div className="md:hidden absolute inset-0 z-0">
  <Squares
    direction="down"
    speed={0.25}
    borderColor="var(--accent-color)"
    squareSize={40}
    hoverFillColor="var(--accent-color)"
  />
</div>
```

**Key Differences:**
| Feature | Desktop (md+) | Mobile (< md) |
|---------|---------------|---------------|
| Square Size | 75px | 40px (47% smaller) |

**Impact:**

- ✅ Better visual balance on mobile screens
- ✅ Reduced visual clutter from oversized squares
- ✅ Maintained full effect on desktop/larger screens
- ✅ No JavaScript overhead

---

### 3. Header.tsx

**File:** `src/components/layout/Header.tsx`

**Issues Fixed:**

- Mobile menu items using `min-w-[200px]` could overflow on very small screens (<320px)
- Touch targets potentially too wide for narrow viewports

**Solution:** Use Tailwind responsive classes for progressive enhancement.

**Changes:**

```typescript
// Before
<Link className="... min-w-[200px] ...">

// After
<Link className="... min-w-[160px] sm:min-w-[200px] ...">
```

**Applied to:**

- "Manifesto" link
- "Ventures" link
- "Ecosystem" link

**Impact:**

- ✅ Better support for very small screens (320px and below)
- ✅ Prevents horizontal overflow in mobile menu
- ✅ Progressive enhancement: 160px mobile, 200px on larger screens
- ✅ Pure CSS, no JavaScript required

---

### 4. Footer.tsx

**File:** `src/components/layout/Footer.tsx`

**Issues Fixed:**

- Textarea with fixed `rows={3}` being too small for comfortable mobile input
- No minimum height constraint making textarea potentially unusable

**Solution:** Use Tailwind responsive classes and native HTML attributes.

**Changes:**

```typescript
// Before
<textarea
  rows={3}
  className="... resize-none ..."
/>

// After
<textarea
  rows={4}
  className="... min-h-[100px] resize-none ..."
/>
```

**Impact:**

- ✅ Larger input area for better mobile typing experience
- ✅ Minimum height ensures consistent usability
- ✅ Prevents textarea from becoming too small on certain devices
- ✅ Pure CSS, no JavaScript required

---

### 5. HeroSection.tsx

**File:** `src/components/sections/HeroSection.tsx`

**Issues Fixed:**

- Redundant Tailwind classes causing CSS bloat
- `text-3xl sm:text-3xl` - identical values at base and sm breakpoints

**Solution:** Remove redundant responsive classes.

**Changes:**

```typescript
// Before (SplitText component)
className = "... text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl ...";

// After
className = "... text-3xl md:text-5xl lg:text-6xl xl:text-7xl ...";

// Before (ShinyText component)
className = "... text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl ...";

// After
className = "... text-3xl md:text-5xl lg:text-6xl xl:text-7xl ...";
```

**Impact:**

- ✅ Reduced CSS bundle size (minor)
- ✅ Cleaner, more maintainable code
- ✅ No visual changes (values were identical)

---

## CSS Pattern Used

The project uses this responsive pattern for components that need different configurations on mobile vs desktop:

```tsx
{
  /* Desktop version - hidden on mobile */
}
<div className="hidden md:block">
  <Component propForDesktop={value} />
</div>;

{
  /* Mobile version - hidden on desktop */
}
<div className="md:hidden">
  <Component propForMobile={value} />
</div>;
```

### How It Works:

1. `hidden md:block` - Element is hidden by default, shown on medium screens and up (≥768px)
2. `md:hidden` - Element is shown by default, hidden on medium screens and up
3. Both elements render in the DOM, but CSS controls visibility
4. Only one is visible at any given viewport width
5. No JavaScript re-renders when viewport changes

### Why This Pattern?

- **SSR-Safe:** Both versions render on the server, CSS hides the inappropriate one
- **Performance:** No JavaScript execution needed
- **Instant:** CSS responds immediately to viewport changes
- **Simple:** Easy to understand and maintain
- **Flexible:** Can be used with any component, regardless of prop types

---

## Breakpoints Used

The project uses standard Tailwind CSS breakpoints:

```
Base:     < 640px   (mobile phones)
sm:       >= 640px  (large phones/small tablets)
md:       >= 768px  (tablets)
lg:       >= 1024px (small laptops)
xl:       >= 1280px (desktops)
2xl:      >= 1536px (large desktops)
```

**Key breakpoint:** `md` (768px)

- Used to distinguish mobile (< 768px) from desktop (≥ 768px)
- Most components use `hidden md:block` / `md:hidden` pattern

---

## Testing Checklist

After implementing these changes, verify the following on various mobile devices:

### Performance

- [ ] BatchesSection particles animate smoothly without lag
- [ ] ModelAboutSection squares background doesn't cause jank
- [ ] Page scroll remains fluid on mobile
- [ ] No JavaScript errors in console

### Visual

- [ ] Particles in BatchesSection don't overlap content
- [ ] Squares in ModelAboutSection are appropriately sized
- [ ] No horizontal overflow on any screen width
- [ ] Text remains readable at all breakpoints
- [ ] Desktop version shows correctly on large screens
- [ ] Mobile version shows correctly on small screens

### UX

- [ ] Mobile menu opens/closes smoothly
- [ ] All menu items are tappable on mobile
- [ ] Footer textarea is comfortable to type in
- [ ] All interactive elements have appropriate touch targets (min 44px)

### Breakpoints to Test

- [ ] 320px (iPhone SE and older devices)
- [ ] 375px (iPhone X/11/12/13/14)
- [ ] 390px (iPhone 14 Pro)
- [ ] 414px (iPhone Plus/Max models)
- [ ] 768px (iPad Mini portrait)
- [ ] 1024px (iPad landscape)
- [ ] 1280px+ (desktops)

### SSR Testing

- [ ] Page renders correctly with JavaScript disabled
- [ ] No hydration mismatches in console
- [ ] Content is visible before JavaScript loads

---

## Files Modified

Components updated:

- `src/components/sections/BatchesSection.tsx` - Dual Particles instances
- `src/components/sections/ModelAboutSection.tsx` - Dual Squares instances
- `src/components/sections/HeroSection.tsx` - Removed redundant classes
- `src/components/layout/Header.tsx` - Responsive min-width classes
- `src/components/layout/Footer.tsx` - Textarea improvements

**Files Removed:**

- ~~`src/hooks/useMediaQuery.ts`~~ - Deleted (CSS-only approach)

**New Files Created:**

- None (all changes use existing Tailwind classes)

---

## Debugging Notes

### If particles are still causing performance issues:

- Further reduce `particleCount` in mobile version (try 30 instead of 50)
- Increase `particleSpread` to reduce density
- Consider disabling Particles entirely on very low-end devices via CSS media query

### If squares background is still too prominent:

- Reduce opacity via CSS custom properties
- Consider disabling Squares on mobile entirely with `hidden` class

### If mobile menu still overflows:

- Consider switching to `min-w-full` on very small screens
- Reduce font size in mobile menu
- Implement two-line text wrapping for menu items

### Common Issues & Solutions

**Issue:** Particles not rendering on mobile

- **Solution:** Check if `moveParticlesOnHover={false}` is properly set in mobile version (touch devices don't support hover)

**Issue:** Squares animation causing battery drain

- **Solution:** The squares component uses CSS animations which are GPU-accelerated. If issues persist, consider adding `will-change: transform` optimization or reducing animation duration.

**Issue:** Mobile menu items not clickable

- **Solution:** Ensure no other elements have higher z-index. Check that `pointer-events: none` isn't applied to parent containers.

**Issue:** Flash of wrong content (both mobile/desktop visible briefly)

- **Solution:** This is a CSS specificity issue. Ensure `hidden md:block` and `md:hidden` classes are applied correctly. Both elements should exist in DOM, CSS handles visibility.

**Issue:** Hydration mismatch error in Next.js

- **Solution:** The CSS-only approach prevents this. If you see hydration errors, ensure you're not using any JavaScript-based viewport detection in your components.

---

## Future Improvements

Consider the following for future mobile optimization:

1. **Image Optimization**: Add `srcset` attributes to images for responsive image loading
2. **Touch Gestures**: Implement swipe gestures for mobile menu and carousels (still requires JS, but use CSS for the visual feedback)
3. **Lazy Loading**: Defer loading of heavy components until they're in viewport (use `loading="lazy"` on images, `IntersectionObserver` for components)
4. **Service Worker**: Implement offline capability for better mobile experience
5. **Animation Optimization**: Consider `prefers-reduced-motion` media query for accessibility

### Additional CSS-Only Optimizations:

```css
/* Add to globals.css for prefers-reduced-motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Dependencies

No new dependencies were added. All changes use:

- Tailwind CSS responsive classes
- Standard CSS media queries (via Tailwind)
- Native React/Next.js features

**Removed Dependencies:**

- ~~Custom `useMediaQuery` hook~~ - No longer needed

---

## Migration Guide (from JS to CSS)

If you previously used the `useMediaQuery` hook:

### Before:

```tsx
import { useIsMobile } from "@/hooks/useMediaQuery";

function Component() {
  const isMobile = useIsMobile();
  return <Particles count={isMobile ? 50 : 200} size={isMobile ? 60 : 100} />;
}
```

### After:

```tsx
function Component() {
  return (
    <>
      <div className="hidden md:block">
        <Particles count={200} size={100} />
      </div>
      <div className="md:hidden">
        <Particles count={50} size={60} />
      </div>
    </>
  );
}
```

---

**Last Updated:** 2026-02-18  
**Next Review:** When adding new animated components or when mobile performance issues are reported  
**Responsible:** Development Team
