# 🌟 Shravani Kumar — Portfolio Website

A premium, modern, and highly interactive developer portfolio website built using **React 19**, **TanStack Start (SSR)**, **TailwindCSS**, and **Framer Motion**. 

This portfolio showcases professional projects, technical skills, coursework highlights, and extracurricular achievements with fluid animations, custom dialogs, and a responsive layout.

---

## ✨ Features

- **🚀 Premium Design & Aesthetics**: Clean typography, glassmorphism, responsive grids, and customized color palettes in the OKLCH color space.
- **🎨 Modern Animations**: Decelerated entrance transitions (deceleration curve cubic-bezier `[0.16, 1, 0.3, 1]`) and interactive hover-based card lifts and image zooms.
- **🌐 Header Navigation Social Integration**: Quick-redirect icons directly built into the sticky top navigation header:
  - **GitHub** (Opens profile in new tab)
  - **LinkedIn** (Opens profile in new tab)
  - **Email** (Initiates `mailto:` link)
  - **Call** (Initiates telephone link)
- **📁 Selected Projects**: Spotlights main projects with direct links to their repositories (e.g., SentimentScope, ProjectPilotAI).
- **🛠️ Integrated Brand Skills & Certifications**: Combined Skills & Certifications section utilizing official brand logo icons (VS Code, Python, C, C++, Git, GitHub) and interactive fallback indicators.
- **🏆 Interactive Certifications Dialog**: Modal popup viewer for hackathons, contests, and courses, complete with support for custom image rotation orientations (e.g., 90-degree clockwise correction for the ULTRON-25 certificate).
- **📄 Downloadable Resume**: A dedicated resume download module configured for direct downloading of the student's curriculum vitae (`resume.pdf`).
- **📨 Contact Mailer Form**: Fully functional contact form that prepares and pre-fills mail drafts to the receiver's address.

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Routing & SSR**: [TanStack Start](https://tanstack.com/router/latest/docs/start/overview)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Bundler & Dev Server**: [Vite 8](https://vite.dev/)

---

## 📂 Project Structure

```text
student-port-generator/
├── public/
│   └── resume.pdf            # Resume download file
├── src/
│   ├── assets/               # Image/photo assets
│   ├── components/           # UI elements & custom navigation components
│   ├── data/                 # site-data.ts (Central data source)
│   ├── routes/               # index.tsx (Main route & page structure)
│   └── styles/
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation & Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Shravanik04/shravvportfolio.git
   cd shravvportfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:8080` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## ⚙️ Configuration & Customization

### 1. Update Portfolio Data
All text, project details, certificates, and skills are managed centrally. Simply modify [site-data.ts](file:///src/data/site-data.ts):
```typescript
// src/data/site-data.ts
export const siteData = {
  name: "Shravani Kumar",
  role: "Computer Science Student...",
  // ...
};
```

### 2. Replacing the Resume PDF
Replace the file located in `public/resume.pdf` with your updated resume PDF.

### 3. Replacing the Portrait Image
Place your portrait photo inside `src/assets/shravani-photo.jpg` to replace the default profile photo.

---

## 👩‍💻 Author

**Shravani Kumar**
*Computer Science Engineering Student*

- **GitHub**: [Shravanik04](https://github.com/Shravanik04)
- **LinkedIn**: [Shravani K Shrivatsa](https://www.linkedin.com/in/shravani-k-shrivatsa-b202a537a)

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
