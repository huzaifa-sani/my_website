# Huzaifa Sani — Flutter Developer Portfolio Website

A production-grade, technical blueprint developer portfolio website for **Huzaifa Sani** (হুজাইফা সানী), Flutter Developer & Mobile App Engineer.

Inspired by the technical brutalist / blueprint engineering aesthetic of [apusutradhar.online](https://www.apusutradhar.online/).

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom blueprint draft grid (`draft-grid`), brutalist typography, and technical crosshairs
- **Icons**: Lucide React
- **Theme**: Light & Dark mode (Technical Blueprint vs Stealth Terminal)
- **Deployment**: Optimized for zero-config Vercel Edge deployment

---

## 🚀 Sections Included

1. **Top Engineering Coordinate Header**:
   - Live Dhaka, Bangladesh time ticker (`UTC+6`).
   - `SYS.STATUS: ONLINE` indicator.
   - Theme toggle (Light/Dark mode).
   - Command palette trigger (`Ctrl + K`).
   - Quick CV download link.
2. **Section 01 // Executive Profile (Hero)**:
   - High-contrast stencil & outline typography (`HUZAIFA SANI // FLUTTER DEVELOPER`).
   - Blueprint Radar Scan terminal box with live telemetry.
   - Key stats: **8+ Mobile Projects**, **4 Live Store Apps**, **100% Clean Architecture**.
   - Download CV button linking directly to `/huzaifa_cv.pdf`.
3. **Section 02 // Engineering Philosophy & Architecture (About)**:
   - Metadata specification matrix.
   - 4 Architectural Pillars: Clean Architecture, Reactive State (GetX/Bloc), Native Performance Profiling, and RESTful API Integration.
4. **Section 03 // Capabilities & Technical Stack (Skills)**:
   - Blueprint capability modules: Core & Mobile, State & Architecture, Backend & Persistence, Publishing & Tooling.
5. **Section 04 // Deployment Log (Experience)**:
   - Sparktech Agency Flutter Developer role with deliverables and tech stack manifest.
6. **Section 05 // Project Manifest & Store Catalog (Projects)**:
   - **Dual View**: Interactive Data Table & Blueprint Cards.
   - Filters: `ALL`, `MARKETPLACE`, `E-COMMERCE`, `UTILITY`, `OPEN SOURCE`.
   - **Live Apps Featured**:
     - **Privae** (Food & Chef Hiring App) — [Apple App Store](https://apps.apple.com/us/app/privae/id6756812318)
     - **BeautyRun** (E-Commerce & Fast Delivery) — [Google Play Store](https://play.google.com/store/apps/details?id=com.beauty.users)
     - **Sparky Tools** (Electrical Utility Suite) — [Google Play](https://play.google.com/store/apps/detailsid=com.trinfjhtechsolutions.sparkytools) & [Apple App Store](https://apps.apple.com/us/app/sparky-toolbox/id6782320797)
     - **Flutter Clean Architecture Template** — [GitHub Open Source](https://github.com/huzaifa-sani)
   - Interactive Project Inspection Modal with full spec breakdown.
7. **Section 06 // Academic & Credentials**:
   - BSc in CSE from Canadian University of Bangladesh.
   - Diploma in Engineering from Narsingdi Polytechnic Institute.
   - Certifications from Ostad & Bongo Academy.
8. **Section 07 // Telemetry & Direct Transmission (Contact)**:
   - Encrypted transmission console with character counter.
   - Instant 1-click email copy (`huzaifa0133@gmail.com`).
   - Direct WhatsApp & Phone connectivity (`+8801963999044`).
   - Social links to GitHub and LinkedIn.
9. **Interactive Command Palette (`Ctrl + K`)**:
   - Quick command launcher for instant jumping, theme switching, and downloading CV.

---

## 🛠️ Local Setup & Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run local dev server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 How to Deploy on Vercel

### Step 1: Initialize Git and Push to GitHub
```bash
git init
git add .
git commit -m "feat: Initial commit for Huzaifa Sani Flutter Developer Portfolio"
git branch -M main
git remote add origin https://github.com/huzaifa-sani/portfolio.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [https://vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** -> **"Project"**.
3. Select your `portfolio` repository from GitHub.
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **"Deploy"**.
6. In ~60 seconds, your portfolio will be live at `https://your-portfolio.vercel.app`!
7. You can attach your custom domain in the Vercel project settings under **Domains**.

---

## 📝 Updating Your Portfolio Content

All your editable data (projects, skills, social links, contact info, experience) is centralized in:
📂 `src/data/portfolioData.ts`

Whenever you add a new project or update a store link, just edit `src/data/portfolioData.ts` and push to GitHub — Vercel will automatically re-deploy your website!
