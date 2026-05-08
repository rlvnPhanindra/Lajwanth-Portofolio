# 🚀 Ravuri Lajwanth V N P — Personal Portfolio

A premium, dark-themed personal portfolio website built with modern web technologies. Featuring glassmorphism UI panels, animated particle fields, scroll-reveal effects, and a fully responsive design.

🌐 **Live Site**: [rlvnphanindra.github.io/Personal-Portofolio](https://rlvnphanindra.github.io/Personal-Portofolio/)

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

---

## ✨ Features

- **🎨 Dark Theme Design** — Deep space navy (`#050814`) with electric purple, cyan, and rose accents
- **🪟 Glassmorphism UI** — Frosted glass panels with `backdrop-filter: blur(24px)` and glow borders
- **🌌 Particle Field** — Interactive 2,000-point animated background with mouse parallax
- **⌨️ Typewriter Effect** — Dynamic role titles that type and erase in the hero section
- **📜 Scroll Animations** — Staggered reveal effects powered by IntersectionObserver
- **🖼️ Digital Avatar** — AI-generated cyberpunk portrait with gradient glow border
- **📄 Resume Download** — One-click PDF download with proper headers
- **📬 Contact Form** — Fully functional via EmailJS with confetti on success
- **💬 WhatsApp Integration** — Quick-contact floating button
- **📱 Fully Responsive** — Optimized for desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Category       | Technologies                                                     |
|----------------|------------------------------------------------------------------|
| **Framework**  | React 18 + Vite 5                                                |
| **Language**   | TypeScript 5                                                     |
| **Styling**    | Tailwind CSS 3, Custom CSS animations, Glassmorphism             |
| **UI Library** | shadcn/ui, Radix UI primitives, Lucide React icons               |
| **Forms**      | React Hook Form + Zod validation                                 |
| **Email**      | EmailJS (backend-less contact form)                               |
| **Fonts**      | Space Grotesk (display), Inter (body), JetBrains Mono (code)     |
| **Deployment** | GitHub Pages via GitHub Actions CI/CD                            |

---

## 📁 Project Structure

```
src/
├── assets/            # Avatar and static assets
├── components/
│   ├── ui/            # shadcn/ui base components
│   ├── Navigation.tsx # Floating glass pill navbar
│   ├── Hero.tsx       # Particle field + typewriter hero
│   ├── About.tsx      # Bio card with digital avatar
│   ├── Projects.tsx   # Interactive project cards
│   ├── Achievements.tsx # Color-coded achievement grid
│   ├── Education.tsx  # Vertical timeline
│   ├── Contact.tsx    # EmailJS form with confetti
│   ├── Footer.tsx     # Wave divider + social links
│   └── LoadingScreen.tsx # Animated loading screen
├── hooks/
│   ├── useTypewriter.ts   # Typewriter animation hook
│   └── useScrollReveal.ts # IntersectionObserver hook
├── pages/
│   └── Index.tsx      # Main page assembling all sections
├── App.tsx            # Router + providers
└── index.css          # Global styles + design tokens
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ & npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/rlvnPhanindra/Personal-Portofolio.git

# Navigate to the project
cd Personal-Portofolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:8080`.

### Production Build

```bash
npm run build
npm run preview
```

---

## 🌍 Deployment

This project auto-deploys to **GitHub Pages** via a GitHub Actions workflow on every push to `main`.

The CI/CD pipeline:
1. Installs dependencies (`npm ci`)
2. Builds the production bundle (`npm run build`)
3. Deploys the `dist/` folder to GitHub Pages

---

## 📫 Contact

- **Email**: [rlvnphanindra@gmail.com](mailto:rlvnphanindra@gmail.com)
- **GitHub**: [@rlvnPhanindra](https://github.com/rlvnPhanindra)
- **LinkedIn**: [Ravuri Lajwanth V N P](https://www.linkedin.com/in/ravuri-lajwanth-v-n-p-064872289/)

---

<p align="center">
  Built with ❤️ by <strong>Ravuri Lajwanth V N P</strong>
</p>
