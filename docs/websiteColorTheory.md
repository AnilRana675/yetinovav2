# YetiNova Website Color Gradient System

## Overview

The YetiNova website employs a sophisticated **blue-green blend gradient system** that creates a visual journey across the page. The system uses CSS Custom Properties (CSS variables) to seamlessly transition accent colors through a spectrum of true blue-green blends—from pure blue at the top through teal, cyan, and aqua to pure green at the bottom.

### Purpose and Design Rationale

- **Visual Flow**: The gradient guides users through the content, creating a narrative progression
- **True Color Blends**: Each section displays actual mixed colors (teal, cyan, aqua) rather than just faded versions
- **Brand Identity**: The blue-to-green transition represents innovation (blue) maturing into growth and sustainability (green)
- **Dynamic Theming**: Each section can have its own accent color while maintaining visual coherence
- **Developer Experience**: Easy to maintain and modify without changing individual component styles

## Color Palette

### Blue-Green Blend Spectrum

The color gradient follows an **ease-in curve** blending blue and green pigments across the website sections:

| Section                  | Hex Value                         | Blue %                 | Green %        | Blend Description | CSS Variable Assignment                   |
| ------------------------ | --------------------------------- | ---------------------- | -------------- | ----------------- | ----------------------------------------- |
| **Global Default**       | `#606FCC`                         | 100%                   | 0%             | Pure Blue         | `--color-accent` in globals.css           |
| **Hero Section**         | `#606FCC`                         | 100%                   | 0%             | Pure Blue         | `style={{ "--accent-color": "#606FCC" }}` |
| **Batches Section**      | `#6589C9`                         | 85%                    | 15%            | Blue-Green Blend  | `style={{ "--accent-color": "#6589C9" }}` |
| **ModelAbout Section**   | `#6B9EAA`                         | 70%                    | 30%            | Teal/Cyan         | `style={{ "--accent-color": "#6B9EAA" }}` |
| **Partnerships Section** | `#71B28B`                         | 55%                    | 45%            | Blue-Green        | `style={{ "--accent-color": "#71B28B" }}` |
| **Join Section**         | `#77C76C`                         | 40%                    | 60%            | Green-Blue        | `style={{ "--accent-color": "#77C76C" }}` |
| **Governance Section**   | `#7DDC4D`                         | 25%                    | 75%            | Yellow-Green      | `style={{ "--accent-color": "#7DDC4D" }}` |
| **Footer**               | `#7cff67`                         | 0%                     | 100%           | Pure Green        | `style={{ "--accent-color": "#7cff67" }}` |
| **Aurora Background**    | `#5227FF` → `#7cff67` → `#ffffff` | Purple → Green → White | Gradient sweep | `colorStops` prop |

### Complete Color Specifications

#### Starting Color (Pure Blue)

- **Hex**: `#606FCC`
- **RGB**: `96, 111, 204`
- **Blue-Green Blend**: 100% Blue / 0% Green
- **Visual**: Deep, rich blue with no green tint
- **Usage**: Primary brand color, hero section, buttons, icons
- **Opacity Variants**:
  - 10%: `rgba(96, 111, 204, 0.1)` - Background highlights
  - 20%: `rgba(96, 111, 204, 0.2)` - Borders and hover states
  - 30%: `rgba(96, 111, 204, 0.3)` - Glow effects
  - 50%: `rgba(96, 111, 204, 0.5)` - Focus states

#### Blue-Green Blend (85/15)

- **Hex**: `#6589C9`
- **RGB**: `101, 137, 201`
- **Blue-Green Blend**: 85% Blue / 15% Green
- **Visual**: Slightly softened blue with subtle green warmth
- **Usage**: Batches section, first transition from pure blue

#### Teal/Cyan Blend (70/30)

- **Hex**: `#6B9EAA`
- **RGB**: `107, 158, 170`
- **Blue-Green Blend**: 70% Blue / 30% Green
- **Visual**: True teal with balanced blue-green mix, slightly desaturated
- **Usage**: ModelAbout section, grid borders, accent highlights

#### Mid Blue-Green (55/45)

- **Hex**: `#71B28B`
- **RGB**: `113, 178, 139`
- **Blue-Green Blend**: 55% Blue / 45% Green
- **Visual**: Balanced blue-green, verging toward aqua
- **Usage**: Partnerships section, CTA buttons

#### Green-Blue (40/60)

- **Hex**: `#77C76C`
- **RGB**: `119, 199, 108`
- **Blue-Green Blend**: 40% Blue / 60% Green
- **Visual**: Bright green with blue undertones, fresh and lively
- **Usage**: Join section, checklist icons, badges

#### Yellow-Green (25/75)

- **Hex**: `#7DDC4D`
- **RGB**: `125, 220, 77`
- **Blue-Green Blend**: 25% Blue / 75% Green
- **Visual**: Vibrant yellow-green, energetic and optimistic
- **Usage**: Governance section, light theme accents

#### Ending Color (Pure Green)

- **Hex**: `#7cff67`
- **RGB**: `124, 255, 103`
- **Blue-Green Blend**: 0% Blue / 100% Green
- **Visual**: Bright, vivid lime green with no blue
- **Usage**: Aurora background effect, success states, footer accents

## Implementation Details

### CSS Custom Properties Approach

The system uses two levels of CSS variables:

#### 1. Global Theme Variable (`--color-accent`)

Defined in `src/app/globals.css`:

```css
@theme {
  --color-accent: #606fcc;
  /* ... other theme variables */
}
```

This sets the default accent color for the entire application.

#### 2. Dynamic Section Variable (`--accent-color`)

Set per-section via inline styles:

```tsx
<section style={{ "--accent-color": "#606FCC" } as React.CSSProperties}>
  {/* Section content */}
</section>
```

### How `--accent-color` Works

The `--accent-color` variable is consumed by components using Tailwind's arbitrary value syntax:

```tsx
// Card.tsx - Example usage
<div className="border-[var(--accent-color)]/40">
<Icon className="text-[var(--accent-color)]">
<div className="bg-[var(--accent-color)]/10">
```

This approach allows:

- **Inheritance**: Child components automatically inherit the section's accent color
- **Dynamic Updates**: Changing the section's style prop updates all child components
- **Fallback**: If `--accent-color` is not set, components fall back to default styles

### Section-by-Section Color Breakdown

#### 1. Hero Section (`#606FCC` - Pure Blue)

- **File**: `src/components/sections/HeroSection.tsx`
- **Position**: First section (0% through gradient)
- **Blue-Green Blend**: 100% Blue / 0% Green
- **Color Description**: Deep, saturated blue with no green influence
- **Special Effects**:
  - Aurora background uses WebGL shader with gradient stops
  - ShinyText component uses `#606FCC` as base color

#### 2. Batches Section (`#6589C9` - Blue-Green Blend)

- **File**: `src/components/sections/BatchesSection.tsx`
- **Position**: Second section (~14% through gradient)
- **Blue-Green Blend**: 85% Blue / 15% Green
- **Color Description**: Slightly softened blue with subtle green warmth
- **Rationale**: First transition point, maintains blue dominance while introducing green

#### 3. ModelAbout Section (`#6B9EAA` - Teal/Cyan)

- **File**: `src/components/sections/ModelAboutSection.tsx`
- **Position**: Third section (~33% through gradient)
- **Blue-Green Blend**: 70% Blue / 30% Green
- **Color Description**: True teal/cyan—balanced mix creating a cool, sophisticated tone
- **Background**: Animated grid with dynamic accent color borders

#### 4. Partnerships Section (`#71B28B` - Blue-Green)

- **File**: `src/components/sections/PartnershipsSection.tsx`
- **Position**: Fourth section (~52% through gradient)
- **Blue-Green Blend**: 55% Blue / 45% Green
- **Color Description**: Balanced blue-green blend, fresh aqua tones
- **Buttons**: Uses `var(--accent-color)` for CTAs and hover states

#### 5. Join Section (`#77C76C` - Green-Blue)

- **File**: `src/components/sections/JoinSection.tsx`
- **Position**: Fifth section (~71% through gradient)
- **Blue-Green Blend**: 40% Blue / 60% Green
- **Color Description**: Bright green-blue, energetic and inviting
- **Usage**: Checklist icons, badges, and accent highlights

#### 6. Governance Section (`#7DDC4D` - Yellow-Green)

- **File**: `src/components/sections/GovernanceSection.tsx`
- **Position**: Sixth section (~90% through gradient)
- **Blue-Green Blend**: 25% Blue / 75% Green
- **Color Description**: Vibrant yellow-green, optimistic and forward-looking
- **Note**: Light theme section with minimal accent usage via Card components

#### 7. Footer (`#7cff67` - Pure Green)

- **File**: `src/components/layout/Footer.tsx`
- **Position**: Final section (100% through gradient)
- **Blue-Green Blend**: 0% Blue / 100% Green
- **Color Description**: Bright, vivid lime green with no blue influence
- **Usage**: Contact icons, form focus states, submit button, and accent highlights

### Ease-In Curve Explanation

The gradient follows an **ease-in timing function** pattern with true color blends:

```
Position:   0%     14%      33%      52%      71%      90%     100%
             |       |        |        |        |        |       |
Section:  Hero → Batches → Model → Partners → Join → Gov → Footer
             |       |        |        |        |        |       |
Blend %:  100/0 → 85/15  → 70/30  → 55/45  → 40/60  → 25/75 → 0/100
             |       |        |        |        |        |       |
Color:   Blue → Blue-Green → Teal → Blue-Gr → Gr-Blue → Yel-Gr → Green
```

**Blue-Green Blend Progression**:

| Section      | Hex       | Blue % | Green % | Color Name       |
| ------------ | --------- | ------ | ------- | ---------------- |
| Hero         | `#606FCC` | 100%   | 0%      | Pure Blue        |
| Batches      | `#6589C9` | 85%    | 15%     | Blue-Green Blend |
| ModelAbout   | `#6B9EAA` | 70%    | 30%     | Teal/Cyan        |
| Partnerships | `#71B28B` | 55%    | 45%     | Blue-Green       |
| Join         | `#77C76C` | 40%    | 60%     | Green-Blue       |
| Governance   | `#7DDC4D` | 25%    | 75%     | Yellow-Green     |
| Footer       | `#7cff67` | 0%     | 100%    | Pure Green       |

**Design Logic**:

- **Top sections** (Hero, Batches): Blue dominance establishes brand identity
- **Middle sections** (ModelAbout, Partnerships): True teal and balanced blends create visual interest
- **Bottom sections** (Join, Governance, Footer): Green dominance signifies growth and success
- **Aurora effect**: Uses the full spectrum for maximum visual impact

**Key Message**: These are ACTUAL blue-green blend colors showing both colors mixed together, not just "less blue." The middle sections display true teal, cyan, and aqua tones created by mixing blue and green pigments.

## Files Modified

### Core Style Files

| File                  | Changes                                                                            |
| --------------------- | ---------------------------------------------------------------------------------- |
| `src/app/globals.css` | Added `--color-accent: #606fcc`, `.text-glow-accent` utility, gradient definitions |
| `src/app/layout.tsx`  | Set default `--accent-color` on body element, updated selection color              |

### Section Components

| File                                              | Changes                                                                                                 |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `src/app/page.tsx`                                | Updated selection color to `#606FCC`                                                                    |
| `src/components/sections/HeroSection.tsx`         | Added `--accent-color: #606FCC` inline style, updated Aurora and ShinyText colors                       |
| `src/components/sections/BatchesSection.tsx`      | Added `--accent-color: #6589C9` inline style, updated particle colors (85% Blue / 15% Green)            |
| `src/components/sections/ModelAboutSection.tsx`   | Added `--accent-color: #6B9EAA` inline style, updated all accent references (70% Blue / 30% Green)      |
| `src/components/sections/PartnershipsSection.tsx` | Added `--accent-color: #71B28B` inline style, updated all accent references (55% Blue / 45% Green)      |
| `src/components/sections/JoinSection.tsx`         | Added `--accent-color: #77C76C` inline style, updated checklist icons and badges (40% Blue / 60% Green) |
| `src/components/sections/GovernanceSection.tsx`   | Added `--accent-color: #7DDC4D` inline style, updated Card component accents (25% Blue / 75% Green)     |

### UI Components

| File                                  | Changes                                                                                      |
| ------------------------------------- | -------------------------------------------------------------------------------------------- |
| `src/components/ui/Card.tsx`          | Implemented `var(--accent-color)` for dynamic theming in CardWithIcon, ValueCard, LeaderCard |
| `src/components/ui/aurora/Aurora.tsx` | Updated `colorStops` to `["#5227FF", "#7cff67", "#ffffff"]`                                  |
| `src/components/layout/Footer.tsx`    | Updated all icons, buttons, and focus states to `#606FCC`                                    |

### Typography Components

| File                              | Changes                                        |
| --------------------------------- | ---------------------------------------------- |
| `src/components/ui/ShinyText.tsx` | Updated default color prop to `#606FCC`        |
| `src/components/ui/SplitText.tsx` | Added gradient text support with accent colors |

## How to Modify

### Changing Colors

#### 1. Update Global Accent Color

Edit `src/app/globals.css`:

```css
@theme {
  --color-accent: #NEWCOLOR; /* Change this value */
}
```

#### 2. Update Section-Specific Colors

Edit the section file (e.g., `HeroSection.tsx`):

```tsx
<section style={{ "--accent-color": "#NEWCOLOR" } as React.CSSProperties}>
```

#### 3. Update Aurora Background

Edit `src/components/ui/aurora/Aurora.tsx`:

```tsx
const {
  colorStops = ["#NEWCOLOR1", "#NEWCOLOR2", "#NEWCOLOR3"],
  // ...
} = props;
```

### Adding New Sections to the Gradient

When adding a new section between existing ones:

1. **Determine position** in the gradient flow (0% to 100%)
2. **Calculate intermediate blend** using blue-green percentage mix
3. **Apply to section**:
   ```tsx
   <section style={{ "--accent-color": "#INTERMEDIATE_COLOR" } as React.CSSProperties}>
   ```
4. **Test components** that use `var(--accent-color)` to ensure contrast

**Example - Adding a section between Hero (100% Blue) and Batches (85% Blue)**:

```tsx
// Calculate: 92.5% Blue / 7.5% Green blend
// Interpolated hex: #6389CA
<section style={{ "--accent-color": "#6389CA" } as React.CSSProperties}>
```

### Best Practices for Maintaining Consistency

1. **Use the CSS variable** whenever possible:

   ```tsx
   // Good
   className = "text-[var(--accent-color)]";

   // Avoid
   className = "text-[#606FCC]";
   ```

2. **Maintain opacity patterns**:
   - Backgrounds: `/10` or `/20`
   - Borders: `/20` or `/30`
   - Hover states: Increase opacity by 10%

3. **Update all related elements** when changing a color:
   - Icons
   - Borders
   - Backgrounds
   - Focus states
   - Hover states
   - Text glows

4. **Test contrast ratios** for accessibility:
   - Text on dark backgrounds: Minimum 4.5:1
   - Large text: Minimum 3:1

5. **Document changes** in this file when modifying the gradient system

## Known Issues & Fixes

### Issue 1: BatchesSection Badge Color (Fixed)

**Problem**: Badge color in `BatchesSection.tsx` used hardcoded `#606FCC` instead of CSS variable.

**Location**: Line 27

**Fix Applied**:

```tsx
// Before (incorrect)
badgeColor: "bg-[#606FCC]/10 text-[var(--accent-color)] border-[#606FCC]/20",

// After (correct)
badgeColor: "bg-[var(--accent-color)]/10 text-[var(--accent-color)] border-[var(--accent-color)]/20",
```

### Issue 2: ModelAboutSection Squares Canvas Colors (Fixed)

**Problem**: The `Squares` canvas component received hardcoded `rgba(96, 111, 204, ...)` values instead of CSS variables.

**Location**: Lines 79, 81 in `ModelAboutSection.tsx`

**Solution**: Updated `Squares.tsx` component to resolve CSS variables at runtime:

```tsx
// Added helper function in Squares.tsx
const resolveColor = (color: CanvasStrokeStyle): CanvasStrokeStyle => {
  if (typeof color === "string" && color.startsWith("var(")) {
    const varName = color.match(/var\(([^)]+)\)/)?.[1];
    if (varName && typeof window !== "undefined") {
      const computedColor = getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
      return computedColor || color;
    }
  }
  return color;
};
```

**Component Usage**:

```tsx
// Before (incorrect)
borderColor = "rgba(96, 111, 204, 0.2)";
hoverFillColor = "rgba(96, 111, 204, 0.1)";

// After (correct)
borderColor = "var(--accent-color)";
hoverFillColor = "var(--accent-color)";
```

### Issue 3: GovernanceSection Light Theme Cards (Fixed)

**Problem**: `CardWithIcon` light variant used neutral gray colors instead of accent colors.

**Location**: `Card.tsx` - light variant implementation

**Fix Applied**:

```tsx
// Icon container (light variant)
before: "bg-neutral-100 group-hover:bg-neutral-200";
after: "bg-[var(--accent-color)]/5 border border-[var(--accent-color)]/10 group-hover:bg-[var(--accent-color)]/10";

// Icon color (light variant)
before: "text-neutral-600";
after: "text-[var(--accent-color)]";

// Card border hover (light variant)
before: "hover:border-neutral-300";
after: "hover:border-[var(--accent-color)]/40 hover:shadow-[var(--accent-color)]/5";
```

### Canvas-Based Components

**Important**: Canvas components (like `Squares`) cannot use CSS variables directly in their draw methods. They require:

1. **Resolution at runtime** using `getComputedStyle()`
2. **Re-resolution on color changes** (if dynamic)
3. **Fallback values** for server-side rendering

**Example pattern**:

```tsx
const resolvedColor = useMemo(() => {
  if (typeof window === "undefined") return fallbackColor;
  return (
    getComputedStyle(document.documentElement)
      .getPropertyValue("--accent-color")
      .trim() || fallbackColor
  );
}, []);
```

## Technical Notes

### Tailwind CSS Arbitrary Value Syntax

The system extensively uses Tailwind's arbitrary value syntax for dynamic colors:

```tsx
// Color with opacity
className = "bg-[var(--accent-color)]/10";

// Border color
className = "border-[var(--accent-color)]/40";

// Text color
className = "text-[var(--accent-color)]";

// Complex hover states
className = "hover:border-[var(--accent-color)]/30";
```

**Syntax Rules**:

- Square brackets `[]` enable arbitrary values
- CSS variables use standard `var()` syntax
- Tailwind opacity modifiers (`/10`, `/20`, etc.) work with CSS variables

### CSS Variable Inheritance

The `--accent-color` variable follows standard CSS inheritance:

```
Layout (body) → #606FCC (100% Blue)
├── HeroSection → #606FCC (100% Blue) (overrides)
│   └── CardWithIcon → inherits #606FCC
├── BatchesSection → #6589C9 (85% Blue / 15% Green) (overrides)
│   └── CardWithIcon → inherits #6589C9
├── ModelAboutSection → #6B9EAA (70% Blue / 30% Green) (overrides)
│   └── CardWithIcon → inherits #6B9EAA
└── OtherSections → inherit from body #606FCC
```

**Key Points**:

- Variables cascade down the DOM tree
- Child components inherit parent's variable value
- Inline styles have highest specificity
- No variable set? Components use fallback or default styles

### TypeScript Integration

When using inline styles with CSS variables in TypeScript:

```tsx
// Required type assertion for custom properties
<section style={{ "--accent-color": "#606FCC" } as React.CSSProperties}>

// Alternative: Extend CSSProperties interface
declare module 'react' {
  interface CSSProperties {
    "--accent-color"?: string;
  }
}
```

### Browser Compatibility

| Feature               | Support                             | Notes                                            |
| --------------------- | ----------------------------------- | ------------------------------------------------ |
| CSS Custom Properties | All modern browsers                 | IE11 not supported (acceptable for this project) |
| Tailwind CSS v4       | Chrome 88+, Firefox 78+, Safari 14+ | Uses `@import "tailwindcss"` syntax              |
| WebGL (Aurora)        | All modern browsers                 | Fallback to CSS gradient provided                |
| OKLCH Color Space     | Modern browsers                     | Used in `:root` variables                        |

**Fallback Strategy**:

- The site uses a black background as base
- CSS variables degrade gracefully (no color = transparent/no style)
- Aurora component has CSS loading fallback

### Performance Considerations

1. **CSS Variables**: No runtime cost, computed at render time
2. **Dynamic Updates**: Changing `--accent-color` triggers minimal reflow
3. **Aurora Effect**: WebGL shader runs on GPU, minimal CPU impact
4. **Tailwind**: PurgeCSS removes unused styles in production

### Related Dependencies

```json
{
  "tailwindcss": "^4.x",
  "tw-animate-css": "^1.x",
  "ogl": "^1.x" // WebGL library for Aurora
}
```

---

## Quick Reference

### Blue-Green Blend Color Values Cheat Sheet

```css
/* Hero: Pure Blue (100% Blue / 0% Green) */
#606FCC (RGB: 96, 111, 204)

/* Batches: Blue-Green Blend (85% Blue / 15% Green) */
#6589C9 (RGB: 101, 137, 201)

/* ModelAbout: Teal/Cyan (70% Blue / 30% Green) */
#6B9EAA (RGB: 107, 158, 170)

/* Partnerships: Blue-Green (55% Blue / 45% Green) */
#71B28B (RGB: 113, 178, 139)

/* Join: Green-Blue (40% Blue / 60% Green) */
#77C76C (RGB: 119, 199, 108)

/* Governance: Yellow-Green (25% Blue / 75% Green) */
#7DDC4D (RGB: 125, 220, 77)

/* Footer: Pure Green (0% Blue / 100% Green) */
#7cff67 (RGB: 124, 255, 103)

/* Aurora Purple */
#5227FF (RGB: 82, 39, 255)
```

### Common Tailwind Patterns

```tsx
// Icon container
<div className="bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20">

// Icon
<Icon className="text-[var(--accent-color)]">

// Card border hover
<div className="hover:border-[var(--accent-color)]/40">

// Subtitle text
<p className="text-[var(--accent-color)]">

// Step number background
<div className="text-[var(--accent-color)]/10">
```

---

_Last Updated: February 17, 2026_
_Maintained by: YetiNova Development Team_
