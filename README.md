# Aditya Narayan — Portfolio & Engineering Showcase

A modern, high-performance developer portfolio showcasing 2.5+ years of engineering experience across Flutter, React, TypeScript, and Full-Stack systems.

[![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

---

## 🚀 Features

- **⚡ Modern Dark Engineering Theme**: Clean obsidian aesthetic with precision typography, micro-interactions, and responsive layouts.
- **📄 Dual Interactive Resume Viewer**:
  - **ATS-Optimized Format**: Single-column, scannable format tailored for applicant tracking systems.
  - **Executive Premium Format**: 2-column visual layout with profile branding, timeline metrics, and skill breakdowns.
  - In-browser print, zoom controls, and 1-click PDF download capabilities.
- **💼 Interactive Projects Showcase**: Filterable project gallery featuring production Flutter and Full-Stack applications (CBT Mock Test, Kharid-Do E-Commerce, Hospital Management System, etc.).
- **🛠️ Tech Stack & Skills Matrix**: Grouped breakdown of languages, frameworks, databases, and DevOps tools.
- **🐍 Automated Python PDF Generator**: Script pipeline using PyMuPDF (`fitz`) to programmatically generate pixel-perfect ATS and Premium resume PDFs.
- **🚢 Automated GitHub Pages CI/CD**: Ready-to-go GitHub Actions workflow for zero-touch deployments on every push.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Lucide Icons
- **Build Tool**: Vite 5
- **Document Generation**: Python 3, PyMuPDF (fitz)
- **Deployment & CI/CD**: GitHub Actions, GitHub Pages / Vercel

---

## 📂 Project Structure

```text
├── public/
│   └── assets/            # Resume PDFs, avatar, and project images
├── scripts/               # Python scripts for automated PDF generation
│   ├── generate_ats_pdf.py
│   ├── generate_premium_pdf.py
│   └── generate_sample2_pdf.py
├── src/
│   ├── components/        # UI components (Hero, About, Projects, ResumeSection, etc.)
│   ├── data/              # Portfolio data and project configurations
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Root application component
│   └── main.tsx           # Entry point
├── .github/workflows/     # GitHub Actions CI/CD deployment workflow
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 💻 Getting Started Locally

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DubeyJi0840/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🌐 Live Deployment

### Option 1: GitHub Pages (Automated via Actions)
1. Go to your repository **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Push to `main` or trigger the **Deploy Portfolio to GitHub Pages** workflow under the **Actions** tab.
4. Your site will be live at:
   ```text
   https://DubeyJi0840.github.io/portfolio/
   ```

### Option 2: Vercel / Netlify
1. Connect your GitHub repository to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy** for a zero-config production deployment.

---

## 📬 Contact & Connect

- **Name**: Aditya Narayan
- **Email**: [adityakumar913573@gmail.com](mailto:adityakumar913573@gmail.com)
- **Phone**: +91 9135737500
- **GitHub**: [@DubeyJi0840](https://github.com/DubeyJi0840)
- **LinkedIn**: [Aditya Narayan](https://www.linkedin.com/in/aditya-narayan-84634525b/)
