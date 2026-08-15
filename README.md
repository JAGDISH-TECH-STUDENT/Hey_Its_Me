# Jagdish Portfolio

A modern, fully-featured developer portfolio built with **React + TypeScript + Vite**, featuring dark mode, Hindi/English language switcher, animated global background, resume viewer, and EmailJS contact form.

---

## ✨ Features

### Core
- **TypeScript** – fully typed components, contexts, and utilities
- **Vite** – lightning-fast dev server and optimized production builds
- **PWA ready** – `manifest.json` + service worker for offline support
- **SEO optimized** – meta tags, Open Graph, Twitter Cards

### Visual & UX
- **Dark / Light mode** – toggle with CSS custom properties
- **Animated gradient background** – global animated radial gradient across all sections
- **Loading screen** – branded initial loader
- **Responsive design** – mobile hamburger menu, fluid grids, adaptive spacing
- **Smooth scroll** – anchored navigation with fixed header offset

### Language & Content
- **English / Hindi switcher** – context-based i18n with `LanguageContext`
- **Auto-rotating hero tagline** – typing animation between `Full Stack Developer` and `Software Developer`

### Sections
- **Hero** – profile photo, typing tagline, CTA buttons, resume circle icon
- **About** – bilingual bio + tech stack pills
- **Skills** – animated progress bars grouped by category
- **Experience** – work history cards with highlights
- **Projects** – GameZone and Homigo cards with live links
- **Blog** – article preview cards with categories
- **Testimonials** – client reviews with avatars and star ratings
- **Social Links** – GitHub, LinkedIn, and LeetCode profile buttons
- **Resume Viewer** – embedded PDF modal with prev/next navigation, no download/print/edit controls
- **Contact Form** – validated form with EmailJS integration

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
git clone <your-repo>
cd portfolio
npm install
npm run dev
```

Build for production:
```bash
npm run build
npm run preview
```

---

## 📧 EmailJS Setup (Contact Form)

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail recommended)
3. Create an email template with fields:
   - `from_name`
   - `from_email`
   - `subject`
   - `message`
   - `to_email` → set to your email
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Create `.env` from `.env.example` and fill in:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_USER_ID=your_user_id
   ```

---

## 🖼️ Assets

Add your media files to the `public/` folder:

| File | Purpose |
|------|---------|
| `profile.jpeg` | Your profile photo |
| `Resume.pdf` | Resume for embedded viewer |
| `project-gamezone.png` | GameZone screenshot |
| `project-homigo.png` | Homigo screenshot |
| `blog-1.png`, `blog-2.png`, `blog-3.png` | Blog thumbnails |
| `avatar-1.png` through `avatar-3.png` | Testimonial avatars |

---

## 🎨 Customization

**Colors** – Edit CSS variables in `src/style.css`:
```css
:root {
  --color-primary: #4f46e5;
  --color-secondary: #e11d48;
  --color-accent: #0d9488;
  ...
}
```

**Translations** – Update `src/contexts/LanguageContext.tsx` for English and Hindi strings.

**Projects** – Edit `src/components/Projects.tsx` to add or remove projects.

**Social Links** – Update URLs in:
- `src/components/GitHubStats.tsx`
- `src/components/Home.tsx`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx        – Responsive nav, dark/lang toggles
│   ├── Home.tsx          – Hero section with typing effect + resume modal
│   ├── About.tsx         – Bio + tech stack
│   ├── Skills.tsx        – Progress bar categories
│   ├── Experience.tsx    – Work history cards
│   ├── Projects.tsx      – Project gallery
│   ├── Blog.tsx          – Articles grid
│   ├── Testimonials.tsx  – Client reviews
│   ├── GitHubStats.tsx   – Social profile links
│   ├── ContactForm.tsx   – Validated form with EmailJS
│   └── PdfViewer.tsx     – Resume PDF viewer modal
├── contexts/
│   ├── ThemeContext.tsx   – Dark mode state
│   └── LanguageContext.tsx – i18n (EN/HI)
├── utils/
│   └── emailjs.ts         – EmailJS wrapper
├── types/
│   └── index.ts           – TypeScript interfaces
├── style.css              – Global styles + animations
├── main.tsx               – App root
└── vite-env.d.ts          – Vite types
```

---

## 📱 PWA

- `manifest.json` – app metadata
- `public/sw.js` – service worker for offline caching
- `favicon.svg` – app icon

After deploying, the site is installable on mobile and desktop.

---

## 📄 License

Private portfolio – feel free to fork and customize.

---

Made with ❤️ using React, TypeScript, and Vite.
