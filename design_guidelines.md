# Design Guidelines: Krishna Savaliya Portfolio

## Design Approach
**Reference-Based: Modern Developer Portfolio**
Drawing inspiration from Linear's refined typography, Vercel's minimalist professionalism, and GitHub's developer-friendly layouts. This creates a technical yet approachable aesthetic that showcases expertise while maintaining visual interest.

## Typography System
- **Primary Font**: Inter or DM Sans (Google Fonts) for clean, modern readability
- **Headline Hierarchy**: 
  - Hero: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
  - Section Titles: text-3xl md:text-4xl, font-bold
  - Card Titles: text-xl md:text-2xl, font-semibold
  - Body: text-base md:text-lg, leading-relaxed
- **Code/Tech Labels**: Use monospace font (JetBrains Mono) for tech stack tags

## Layout System
**Spacing Units**: Consistent use of Tailwind units 4, 6, 8, 12, 16, 24
- Section padding: py-16 md:py-24
- Card spacing: p-6 md:p-8
- Gap between elements: gap-4, gap-6, gap-8
- Container max-width: max-w-7xl with px-4 md:px-6 lg:px-8

## Hero Section
- Full viewport height (min-h-screen) with centered content
- **Background**: Gradient mesh or abstract geometric pattern (subtle, professional)
- **Profile Image**: 160px circular avatar (w-40 h-40), positioned above headline with subtle border/shadow
- **Layout**: Center-aligned with headline, tagline, dual CTA buttons (horizontal on desktop, stacked on mobile), and brief 2-line summary below
- **Buttons**: Primary (solid) and Secondary (outline) with blurred background (backdrop-blur-sm bg-white/10 dark:bg-black/10) when over background
- **Statistics Row**: Below CTAs, show "4 Years" | "20+ Projects" | "3 Languages" as inline badges

## About Section
- **Layout**: Two-column on desktop (2/3 content, 1/3 sidebar), single column mobile
- **Main Column**: Personal summary (2-3 paragraphs, max-w-3xl), followed by skills grid
- **Skills Grid**: 4 columns on desktop, 2 on tablet, 1 on mobile (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- **Skill Cards**: Icon + label, p-4, rounded-lg, hover lift effect (transform translate-y-[-4px])
- **Sidebar**: Statistics badges stacked vertically (years, Open edX versions, languages spoken)

## Projects Section
- **Grid**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-6
- **Project Cards**: Elevated cards with rounded-xl, p-6, hover shadow increase
  - Tech stack as small pills/badges at top (text-xs, rounded-full, px-3 py-1)
  - Title (text-xl font-semibold)
  - Description (2 lines, text-ellipsis)
  - Timeframe + Role (text-sm, muted)
  - "View Details" button at bottom (text-sm, underline on hover)
- **Modal**: Full-screen overlay (backdrop-blur), centered content card (max-w-4xl), scrollable
  - Close button (top-right, large X with hover state)
  - Screenshot placeholder area (aspect-video, rounded-lg)
  - Problem → Contributions → Tech → Outcomes structure with clear sections

## Timeline Section
- **Vertical Timeline**: Center line on desktop, left-aligned on mobile
- **Alternating Cards**: Left/right on desktop (even/odd), all left on mobile
- **Timeline Dots**: Large dots on the center line, connected by vertical line
- **Card Design**: p-6, rounded-lg, shadow-md, with date badge at top
- **Spacing**: gap-12 between timeline items

## Contact Section
- **Layout**: Two-column (form + info sidebar) on desktop, stacked mobile
- **Form**: Full-width inputs with rounded-lg, p-4, focus ring
  - Name, Email, Subject (single line)
  - Message (textarea, h-32)
  - Submit button (w-full on mobile, auto on desktop)
- **Sidebar**: Social links as icon buttons (w-12 h-12, rounded-full, centered icons), email with copy button, location with map icon
- **Form Validation**: Red border for errors, green checkmark for success

## Component Library

**Buttons**: 
- Primary: px-6 py-3, rounded-lg, font-medium, shadow-sm
- Secondary: px-6 py-3, rounded-lg, font-medium, border-2

**Badges/Pills**: 
- Tech tags: px-3 py-1, text-xs, rounded-full
- Statistics: px-4 py-2, text-sm, rounded-lg, border

**Cards**: 
- Standard: rounded-xl, p-6, shadow-sm, hover:shadow-lg transition
- Elevated: shadow-md base state

**Icons**: Heroicons via CDN (24px default, 20px for small contexts)

**Dark Mode Toggle**: Fixed position top-right of header, moon/sun icon button (w-10 h-10)

## Navigation
- Sticky header with backdrop-blur-md, py-4
- Logo/Name on left (font-bold, text-xl)
- Nav links center-aligned on desktop (gap-8), hamburger menu on mobile
- Smooth scroll behavior for anchor links

## Animations
- Fade-in on scroll for sections (opacity and slight translateY)
- Hover lift on cards (translateY -2px to -4px)
- Button hover: slight scale (scale-105)
- Modal: Fade + scale entrance (scale-95 to scale-100)
- NO typewriter effects, NO excessive animations

## Images
**Hero Background**: Abstract gradient mesh or geometric pattern (subtle, not distracting) - generated or sourced from design resources

**Profile Photo**: Circular professional headshot placeholder (can be replaced)

**Project Screenshots**: Aspect-ratio 16:9 placeholders in modals, rounded corners

## Accessibility
- Semantic HTML5 structure (nav, main, section, footer)
- All interactive elements keyboard accessible
- Modal trap focus, Esc to close
- ARIA labels on icon-only buttons
- Sufficient contrast ratios in both light/dark modes
- Alt text on all images