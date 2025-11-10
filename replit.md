# Krishna Savaliya - Portfolio Website

## Project Overview
Production-ready, responsive portfolio website showcasing Open edX and Django development expertise. Built with React, TypeScript, Tailwind CSS, and modern best practices.

## Recent Changes (November 10, 2025)
- Complete portfolio website implementation from scratch
- Generated all visual assets (profile image, 6 project screenshots, favicon, OG image)
- Implemented comprehensive design system with custom Tailwind configuration
- Built all frontend components with accessibility and responsive design
- Added dark mode with localStorage persistence
- Integrated FormSubmit.co for contact form (requires email confirmation)
- Created detailed documentation (README.md for deployment, CHANGE_ME.md for customization)
- Fixed modal accessibility with focus trap, ARIA attributes, and keyboard navigation
- End-to-end tested all features including dark mode, responsive layout, forms, and modal interactions

## Architecture

### Tech Stack
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Forms**: React Hook Form + Zod validation
- **Routing**: Wouter (single-page app)
- **Theme**: Dark/Light mode with ThemeProvider
- **Icons**: Lucide React, React Icons

### Project Structure
```
├── client/
│   ├── public/              # Static assets (favicon, OG image, resume PDF)
│   ├── src/
│   │   ├── components/      # All React components
│   │   ├── data/           # projects.json with portfolio content
│   │   ├── pages/          # Home page
│   │   └── index.css       # Tailwind + custom styles
│   └── index.html          # SEO meta tags
├── shared/schema.ts         # TypeScript schemas
├── attached_assets/         # Generated images
├── README.md               # Deployment guide
├── CHANGE_ME.md            # Customization instructions
└── design_guidelines.md    # Design system documentation
```

## Key Features

### Components
1. **Header**: Fixed navigation with smooth scroll links and dark mode toggle
2. **Hero**: Profile image, name, tagline, CTA buttons, statistics badges
3. **About**: Skills grid with icons, technologies list, professional summary
4. **Projects**: 6 project cards in responsive grid
5. **ProjectModal**: Accessible dialog with focus trap, keyboard navigation, ARIA
6. **Timeline**: Vertical timeline showing professional journey
7. **ContactForm**: Validated form with FormSubmit.co integration, social links
8. **Footer**: Name, social links, copyright

### Accessibility Features
- WCAG compliant with proper color contrast
- Keyboard navigation support (Tab, Shift+Tab, Escape)
- Focus management in modals (focus trap prevents tabbing outside)
- ARIA attributes (role="dialog", aria-modal, aria-labelledby)
- Screen reader friendly with semantic HTML
- All interactive elements have data-testid attributes

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile (<640px), tablet (640-1024px), desktop (>1024px)
- Project grid: 1 column mobile, 2 columns tablet, 3 columns desktop
- Timeline: stacked on mobile, alternating layout on desktop
- Touch-friendly buttons and tap targets

### Dark Mode
- Toggle button in header (Moon/Sun icons)
- Persists preference in localStorage
- Smooth theme transitions
- All colors automatically adapt via CSS variables

## Data Configuration

### Projects Data (`client/src/data/projects.json`)
Contains two main arrays:
- **projects**: 6 Open edX/Django projects with detailed information
- **timeline**: Professional journey events (employment, internships, projects)

Each project includes: title, descriptions, problem statement, contributions, tech stack, outcomes, timeframe, role, category, and image reference.

## Customization Guide

See **CHANGE_ME.md** for comprehensive customization instructions.

### Critical Items to Update:
1. **Email Address** (3 locations in ContactForm.tsx, 1 in Footer.tsx)
   - Current: krishna@example.com (placeholder)
   - Must activate FormSubmit.co by confirming first submission
2. **Social Media Links** (ContactForm.tsx and Footer.tsx)
   - GitHub, GitLab, LinkedIn URLs
3. **Resume PDF** (`client/public/resume.pdf`)
4. **SEO Meta Tags** (`client/index.html`)
5. **Projects Data** (`client/src/data/projects.json`)
6. **Profile Image** (Hero.tsx import)
7. **Personal Information** (About.tsx, Hero.tsx, Footer.tsx)

### Optional Customizations:
- Project screenshots (replace generated images)
- Color theme (index.css variables)
- Favicon and OG image
- Skills and technologies lists
- Timeline events

## Deployment

### Local Development
```bash
npm install
npm run dev
```
Application runs at http://localhost:5000

### Production Build
```bash
npm run build
npm start
```

### Replit Publishing
1. Click "Deploy" button in Replit
2. Choose "Deploy to Replit"
3. Site will be live at `https://your-repl-name.your-username.repl.co`

See **README.md** for detailed deployment instructions including custom domains.

## Testing

All features have been end-to-end tested:
- ✅ Dark mode toggle and persistence
- ✅ Responsive layout (mobile, tablet, desktop)
- ✅ Modal accessibility (focus trap, keyboard navigation, ARIA)
- ✅ Form validation and submission flow
- ✅ Smooth scroll navigation
- ✅ Project cards and modal interactions
- ✅ Timeline display
- ✅ Header navigation

## Known Placeholders

The following are intentional placeholders for user customization:
- **Email**: krishna@example.com (needs real email + FormSubmit activation)
- **Social URLs**: Placeholder GitHub/GitLab/LinkedIn links
- **Resume**: Placeholder PDF file
- **Projects**: Sample Open edX projects (replace with actual work)
- **Profile Image**: Generated placeholder (replace with real photo)

## Browser Support
- Chrome, Firefox, Safari, Edge (latest versions)
- iOS Safari, Chrome Mobile
- Keyboard and screen reader accessible

## User Preferences
- No specific coding style preferences set
- Follows fullstack_js development guidelines
- Uses shadcn/ui component library
- Prefers Linear/Vercel-inspired aesthetic
- Focuses on accessibility and responsive design

## Notes
- Portfolio is a customizable template ready for deployment
- Contact form requires email activation on first submission
- All documentation is comprehensive and user-friendly
- Design follows modern best practices with subtle animations
- SEO optimized with proper meta tags and Open Graph support
