# Customization Guide

This document lists all the placeholders and customizable elements in the portfolio website. Follow this checklist to personalize the site with your own information.

## 🔴 Critical - Must Change

### 1. Contact Email Address

**Location**: `client/src/components/ContactForm.tsx`

Find and replace `krishna@example.com` with your actual email in **THREE** places:

```typescript
// Line ~45 - FormSubmit endpoint
const response = await fetch("https://formsubmit.co/ajax/YOUR-EMAIL@example.com", {

// Line ~72 - Copy email function
navigator.clipboard.writeText("YOUR-EMAIL@example.com");

// Line ~112 - Email display
url: "mailto:YOUR-EMAIL@example.com",
```

**Also in**: `client/src/components/Footer.tsx` (line ~24)
```typescript
url: "mailto:YOUR-EMAIL@example.com",
```

### 2. Social Media Links

**Location**: `client/src/components/ContactForm.tsx` (lines ~99-112)

Update your social profile URLs:

```typescript
const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/YOUR-USERNAME", // ← Change this
  },
  {
    name: "GitLab",
    icon: SiGitlab,
    url: "https://gitlab.com/YOUR-USERNAME", // ← Change this
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/YOUR-USERNAME", // ← Change this
  },
  // ... email link (already updated above)
];
```

**Also in**: `client/src/components/Footer.tsx` (lines ~12-27)

### 3. Resume PDF

**Location**: `client/public/resume.pdf`

**Action**: Replace the placeholder file with your actual resume PDF.

- Keep the filename as `resume.pdf` OR
- If you rename it, update the download link in `client/src/components/Hero.tsx` (line ~20):

```typescript
link.href = "/YOUR-RESUME-NAME.pdf";
link.download = "Your_Name_Resume.pdf";
```

### 4. SEO Meta Tags

**Location**: `client/index.html` (lines 5-19)

Update with your information:

```html
<title>Your Name - Your Title | Software Engineer Portfolio</title>
<meta name="description" content="Your compelling description here..." />
<meta name="keywords" content="Your Name, Your Skills, Your Technologies" />
<meta name="author" content="Your Name" />

<!-- Open Graph tags -->
<meta property="og:title" content="Your Name - Your Title" />
<meta property="og:description" content="Your description..." />
<meta property="og:url" content="https://your-website.com" />

<!-- Twitter tags -->
<meta name="twitter:title" content="Your Name - Your Title" />
<meta name="twitter:description" content="Your description..." />
```

## 🟡 Important - Should Change

### 5. Projects Data

**Location**: `client/src/data/projects.json`

This file contains all your project information. Replace the sample projects with your own:

```json
{
  "projects": [
    {
      "id": "unique-project-id",
      "title": "Your Project Title",
      "shortDescription": "Brief 1-2 line description",
      "description": "Longer description for the modal",
      "problem": "What problem did this project solve?",
      "contributions": [
        "What you did (bullet point 1)",
        "What you did (bullet point 2)",
        "What you did (bullet point 3)"
      ],
      "techStack": ["Technology1", "Technology2", "Technology3"],
      "outcomes": [
        "Result or achievement 1",
        "Result or achievement 2"
      ],
      "timeframe": "Jan 2024 - Present",
      "role": "Full Stack / Backend / Frontend",
      "image": "project-screenshot-key",
      "category": ["Category1", "Category2"]
    }
  ]
}
```

**Note**: The `image` field should match one of the screenshot keys you'll add (see section 7 below).

### 6. Timeline Data

**Location**: `client/src/data/projects.json` (timeline section)

Update your professional timeline:

```json
{
  "timeline": [
    {
      "id": "timeline-1",
      "date": "Month Year",
      "title": "Your Position",
      "company": "Company Name",
      "description": "What you did in this role",
      "type": "internship" | "employment" | "project"
    }
  ]
}
```

### 7. Project Screenshots

**Current Location**: `attached_assets/generated_images/`

**Action**: Replace the generated placeholder images with actual project screenshots.

**Two Options:**

#### Option A: Keep Using Vite's Asset System (Recommended)

1. Place your new images in `attached_assets/generated_images/` or any folder under `attached_assets/`
2. Update the import statements in:
   - `client/src/components/ProjectCard.tsx` (lines 6-10)
   - `client/src/components/ProjectModal.tsx` (lines 6-10)

```typescript
// Example: If you have a file at attached_assets/my-project.png
import myProjectImage from "@assets/my-project.png";

// Then update the mapping object:
const projectImages: Record<string, string> = {
  "my-project-id": myProjectImage,
  // ... other mappings
};
```

3. Update the `image` field in `projects.json` to match your project IDs

#### Option B: Use Public Folder

1. Place images in `client/public/projects/`
2. Update both component files to use public paths:

```typescript
const projectImages: Record<string, string> = {
  "project-id": "/projects/screenshot.png",
};
```

### 8. Profile Image

**Current Location**: `attached_assets/generated_images/Professional_developer_headshot_portrait_*.png`

**Location to Update**: `client/src/components/Hero.tsx` (line 7)

**Action**: Replace with your actual professional headshot.

```typescript
// Option A: Add your image to attached_assets and import:
import profileImage from "@assets/your-photo.jpg";

// Option B: Use public folder:
// Place image in client/public/profile.jpg and reference:
const profileImage = "/profile.jpg";
```

**Requirements**:
- Square aspect ratio (1:1) recommended
- Professional quality
- Clear face, good lighting
- Size: at least 400x400px, max 1MB

### 9. About Section Content

**Location**: `client/src/components/About.tsx`

Update your personal information:

#### Bio/Summary (lines 44-53)
```typescript
<p className="text-base md:text-lg leading-relaxed text-foreground mb-4">
  Your professional summary here. Talk about your experience and what you specialize in.
</p>
<p className="text-base md:text-lg leading-relaxed text-muted-foreground">
  Additional information about your approach to work and what drives you.
</p>
```

#### Skills (lines 16-23)
```typescript
const skills = [
  { name: "YourSkill1", icon: IconComponent, color: "text-color" },
  { name: "YourSkill2", icon: IconComponent, color: "text-color" },
  // ... update with your actual skills
];
```

**Available icons from lucide-react**: Code2, Database, Globe, Server, Layers, GitBranch, Terminal, Box, Cloud, Package, Settings, and many more. See [Lucide Icons](https://lucide.dev/icons/).

#### Technologies (lines 30-39)
```typescript
const openEdxVersions = [
  "Version1", "Version2", // Replace with your versions/certifications
];

const languages = ["Language1", "Language2", "Language3"];

const tools = [
  "Tool1", "Tool2", "Tool3", // Replace with your tools
];
```

#### Location (line 104)
```typescript
<p className="text-muted-foreground" data-testid="text-location">
  Your City, Your Country
</p>
```

### 10. Hero Section

**Location**: `client/src/components/Hero.tsx`

#### Name and Title (lines 27-30)
```typescript
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
  Your Full Name
</h1>
<p className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-medium">
  Your Professional Title
</p>
```

#### Tagline (lines 33-36)
```typescript
<p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
  Your compelling one-liner about what you do and your expertise
</p>
```

#### Statistics Badges (lines 50-62)
```typescript
<Badge variant="secondary" className="px-4 py-2 text-sm">
  X Years Experience
</Badge>
<Badge variant="secondary" className="px-4 py-2 text-sm">
  Y+ Projects
</Badge>
<Badge variant="secondary" className="px-4 py-2 text-sm">
  Z Languages/Skills
</Badge>
```

### 11. Footer

**Location**: `client/src/components/Footer.tsx`

Update your name (line 34):
```typescript
<h3 className="text-lg font-semibold mb-2">Your Name</h3>
<p className="text-sm text-muted-foreground">
  Your Professional Title
</p>
```

## 🟢 Optional - Nice to Have

### 12. Favicon

**Location**: `client/public/favicon.svg`

**Current**: A simple "K" letter favicon

**Action**: Replace with your own favicon design. You can:
- Use a logo design tool to create a custom SVG
- Convert your logo to SVG format
- Use an online favicon generator

Keep the filename as `favicon.svg` or update the reference in `client/index.html` (line 25).

### 13. Open Graph Image

**Location**: `client/public/og-image.png`

**Current**: Generic portfolio preview image

**Action**: Create a custom social media preview image (1200x630px recommended) that appears when you share your portfolio link on social media.

### 14. Color Theme

**Location**: `client/src/index.css` and `tailwind.config.ts`

The site uses a blue primary color by default. To change:

**In `index.css`** (lines 29, 105):
```css
--primary: 217 91% 35%;  /* H S% L% format */
```

Use an HSL color picker to find your preferred color values.

### 15. Website URL

**Location**: `client/index.html` (line 13)

```html
<meta property="og:url" content="https://your-actual-domain.com" />
```

Update this after you deploy to your custom domain.

## Testing Your Changes

After making changes:

1. **Test locally**:
   ```bash
   npm run dev
   ```

2. **Check all sections**:
   - [ ] Hero section displays correctly
   - [ ] About section shows your info
   - [ ] Projects load and modal opens
   - [ ] Timeline shows your journey
   - [ ] Contact form works (test with your email)
   - [ ] Social links go to correct profiles
   - [ ] Resume downloads correctly
   - [ ] Dark mode works properly
   - [ ] Responsive on mobile

3. **Test contact form**:
   - Submit a test message
   - Check your email for FormSubmit confirmation
   - Confirm the form activation link

## Common Issues

**Q: Contact form doesn't send emails**
- Make sure you've replaced the email address in ContactForm.tsx
- Check spam folder for FormSubmit confirmation email
- Click the confirmation link to activate

**Q: Images don't load**
- Make sure you're using the @assets import alias correctly
- Check that image files exist in attached_assets folder
- Clear browser cache and reload

**Q: Social links don't work**
- Verify URLs start with https://
- Check for typos in usernames
- Test each link individually

**Q: Dark mode doesn't persist**
- Clear browser localStorage and test again
- Check browser console for errors

## Need Help?

If you encounter issues while customizing:

1. Check the browser console for errors (F12)
2. Verify all file paths are correct
3. Make sure you saved all files after editing
4. Try clearing cache: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
5. Restart the development server

---

**Tip**: Make changes incrementally and test after each section. This makes it easier to identify and fix issues.

**Remember**: The portfolio is yours! Feel free to modify colors, layouts, add sections, or remove features to match your personal brand.
