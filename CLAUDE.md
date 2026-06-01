# Portfolio Site — CLAUDE.md

## Project Overview

Personal portfolio website for Zakariae Benzouitine (Data Scientist). Single-page Next.js app with sections: Home, About, Projects, Skills, Experience, and Contact.

## Tech Stack

- **Next.js 16.0.5** (App Router)
- **React 19.2.0**
- **TypeScript 5** (strict mode, but `@ts-nocheck` is on `page.tsx`)
- **Tailwind CSS v4** (configured via `@import "tailwindcss"` in `globals.css`)
- **Lucide React** for icons

## Project Structure

```
app/
  layout.tsx        # Root layout — Geist Sans/Mono fonts, metadata
  page.tsx          # Entire portfolio — single client component
  globals.css       # Tailwind v4 import + CSS variables for light/dark
public/
  profile_picture.jpg
  Benzouitine_resume.pdf
  *.svg             # Default Next.js SVG assets
```

## Key Implementation Details

**Single component architecture:** All portfolio content lives in `app/page.tsx` as one large client component (`"use client"`). State is managed with `useState`; scroll tracking with `useEffect`.

**Dark mode:** Toggled via `darkMode` state (defaults to `true`). Conditionally applies Tailwind classes throughout — no CSS classes or `next-themes`, just inline ternary logic.

**Animations:** Custom CSS animations (`fadeIn`, `slideDown`) are defined with `<style jsx>` at the bottom of the component.

**Project filtering:** The `selectedFilter` state filters the `projects` array by `category` field (`'all'`, `'computer-vision'`, `'machine-learning'`, `'deep-learning'`).

**Static assets:** Resume PDF and profile photo are served from `/public/` directly (`/Benzouitine_resume.pdf`, `/profile_picture.jpg`).

## Known Issues / Things to Fix

- **Email link bug** (`page.tsx:739`): `href="zakariaebenzouitine@gmail.com"` is missing the `mailto:` prefix — should be `href="mailto:zakariaebenzouitine@gmail.com"`.
- `// @ts-nocheck` at the top of `page.tsx` disables TypeScript for the whole file. Remove it and fix types if strengthening type safety.
- The "Extreme Rainfall Modeling" project has a placeholder GitHub URL (`https://github.com/yourusername/rainfall-modeling`).

## Dev Commands

```powershell
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

## Styling Conventions

- Tailwind utility classes only — no separate CSS files for component styles.
- Dark/light variants are applied inline via ternary: `darkMode ? 'bg-gray-800' : 'bg-white'`.
- Gradients use `bg-gradient-to-r from-blue-500 to-cyan-500` as the primary brand pattern.
- Cards use `rounded-2xl shadow-xl` consistently.
- Responsive breakpoints: `md:` for tablet/desktop layout splits.

## Content Data (in page.tsx)

All portfolio data is hardcoded in the component:
- `projects` array — title, description, tags, image URL (Unsplash), GitHub link, category
- `skills` object — grouped by category (Languages, Frameworks, MLOps, AI Expertise)
- Experience and education entries are JSX inline in the Experience section
