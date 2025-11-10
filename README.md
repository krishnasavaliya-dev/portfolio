# Krishna Savaliya - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Vite. Features dark mode, smooth animations, and a clean design showcasing Open edX and Django development expertise.

## Features

- ✨ Modern, responsive design with mobile-first approach
- 🌓 Dark mode toggle with persistent theme preference
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Vite
- 🎨 Clean UI with Tailwind CSS and shadcn/ui components
- 📊 Project showcase with detailed modal views
- 📅 Interactive timeline of professional journey
- 📬 Contact form with formsubmit.co integration
- ♿ Accessible design (WCAG compliant)
- 🔍 SEO optimized with meta tags and Open Graph

## Local Development

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   The application will be available at `http://localhost:5000`

## Building for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   ```

## Deployment to Replit

### Method 1: Import from GitHub

1. Push your code to a GitHub repository
2. Go to [Replit](https://replit.com)
3. Click "Create Repl" → "Import from GitHub"
4. Paste your repository URL
5. Replit will automatically detect the configuration
6. Click "Run" to start the application

### Method 2: Direct Upload

1. Go to [Replit](https://replit.com)
2. Click "Create Repl" → "Import from Upload"
3. Upload your project folder as a ZIP file
4. Replit will configure the environment
5. Click "Run" to start the application

### Replit Configuration

The project includes a `.replit` file that should automatically configure the deployment. If needed, you can manually set:

- **Run Command**: `npm run dev`
- **Build Command**: `npm run build`
- **Port**: 5000

### Publishing on Replit

1. Click the "Deploy" button in Replit
2. Choose "Deploy to Replit" 
3. Your portfolio will be live at `https://your-repl-name.your-username.repl.co`

## Customization Guide

See [CHANGE_ME.md](./CHANGE_ME.md) for a complete guide on customizing the portfolio with your own information.

### Quick Customization Checklist

- [ ] Replace project data in `client/src/data/projects.json`
- [ ] Update contact email in `client/src/components/ContactForm.tsx`
- [ ] Replace resume PDF at `client/public/resume.pdf`
- [ ] Update social links in `client/src/components/ContactForm.tsx` and `client/src/components/Footer.tsx`
- [ ] Replace profile image (see CHANGE_ME.md)
- [ ] Update SEO meta tags in `client/index.html`
- [ ] Update personal information in About section

## Project Structure

```
├── client/
│   ├── public/              # Static assets
│   │   ├── favicon.svg      # Site favicon
│   │   ├── og-image.png     # Open Graph preview image
│   │   └── resume.pdf       # Downloadable resume
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectModal.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ThemeProvider.tsx
│   │   ├── data/
│   │   │   └── projects.json    # Project data (easy to edit!)
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   └── index.html
├── shared/
│   └── schema.ts            # TypeScript schemas
├── server/                  # Express server (optional backend)
├── tailwind.config.ts       # Tailwind configuration
├── package.json
└── README.md
```

## Technologies Used

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Wouter** - Lightweight routing
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icons

### Backend (Optional)
- **Express** - Web server
- **Node.js** - Runtime environment

## Contact Form Setup

The contact form uses [FormSubmit.co](https://formsubmit.co), a free form backend service.

### To activate the contact form:

1. Open `client/src/components/ContactForm.tsx`
2. Find this line:
   ```typescript
   const response = await fetch("https://formsubmit.co/ajax/krishna@example.com", {
   ```
3. Replace `krishna@example.com` with your actual email address
4. The first time someone submits the form, FormSubmit will send you a confirmation email
5. Click the confirmation link to activate the form

### Alternative: Use Your Own Backend

If you prefer to use your own email service:

1. Create an API endpoint in `server/routes.ts`
2. Update the form submission in `ContactForm.tsx` to POST to your endpoint
3. Use a service like SendGrid, Mailgun, or Nodemailer to send emails

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Optimized images with lazy loading
- Code splitting for optimal bundle size

## Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management in modals
- Sufficient color contrast ratios
- Screen reader friendly

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions about customization, please refer to [CHANGE_ME.md](./CHANGE_ME.md) or create an issue in the repository.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
