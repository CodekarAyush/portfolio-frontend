# Portfolio — Ayush Kumar Gautam

Personal portfolio of a backend-heavy, AI-enabled full-stack engineer. Built with:

- **React 18 + TypeScript** (Vite)
- **Tailwind CSS v4**
- **three.js** — subtle scroll-reactive particle background (lazy-loaded)
- Dark / light mode with browser-preference default
- Resume preview (embedded PDF) + download

## Structure

```
src/
  components/
    layout/     Navbar, Footer, ScrollTop
    sections/   Hero, Experience, Projects, Skills, ResumeSection, Contact
    ui/         ThreeBackground, Reveal, SectionHeading, TechChip
  data/         profile, experience, projects, skills (all content lives here)
  hooks/        useTheme, useTypewriter
```

To update content (experience, projects, links), edit the files in `src/data/` — no component changes needed. The resume PDF lives at `public/resume/`.

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build (dist/)
npm run preview   # serve the production build
```
