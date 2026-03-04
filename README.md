# Utkarsh Gayguwal — Portfolio

Modular React + Tailwind v4 + GSAP portfolio site.

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19 | UI framework |
| Vite | 6 | Build tool |
| Tailwind CSS | 4 | Styling (via `@tailwindcss/vite` plugin) |
| GSAP | 3.12 | Animations & ScrollTrigger |

## Project Structure

```
src/
├── components/
│   ├── Cursor.jsx       # Custom cursor (dot + ring)
│   ├── Navbar.jsx       # Fixed nav with scroll state
│   ├── Hero.jsx         # Hero section (dot grid, typewriter, GSAP entrance)
│   ├── Ticker.jsx       # Marquee skill strip
│   ├── Work.jsx         # Projects list
│   ├── Skills.jsx       # Skill bars + pills
│   ├── About.jsx        # Bio + timeline
│   ├── Contact.jsx      # Contact info + form
│   └── Footer.jsx       # Footer
│
├── hooks/
│   ├── useCursor.js       # Cursor animation logic
│   ├── useTypewriter.js   # Role cycling typewriter
│   ├── useDotGrid.js      # Canvas spotlight dot grid
│   └── useScrollReveal.js # GSAP ScrollTrigger helpers
│
├── data/
│   └── index.js         # All site content (projects, skills, timeline…)
│
├── App.jsx              # Root — composes all sections
├── main.jsx             # Entry point
└── index.css            # Tailwind v4 + global styles
```

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Customisation

All content lives in `src/data/index.js` — update your projects, skills,
timeline, and contact details there without touching any component files.
