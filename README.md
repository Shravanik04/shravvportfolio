# 🌟 Shravani Kumar — Portfolio Website

A premium, modern, and highly interactive developer portfolio website built using **React 19**, **TanStack Start (SSR)**, **TailwindCSS**, and **Framer Motion**. 

This portfolio showcases professional projects, technical skills, coursework highlights, and extracurricular achievements with fluid animations, custom dialogs, and a responsive layout.

---

## ✨ Features

- **🚀 Premium Design & Aesthetics**: Clean typography, glassmorphism, responsive grids, and customized color palettes in the OKLCH color space.
- **🎨 Interactive Motion & Animations**: Staggered entrance animations for Skills and Projects, custom hover zoom effects (lifting cards and image scales), and tap/press micro-interactions for touch devices.
- **🌐 Responsive Navigation & Socials**:
  - **Desktop**: Clean sticky header and footer featuring quick navigation links and social icons.
  - **Mobile & Tablet**: Accessible, sliding hamburger drawer menu (using Radix-UI/Sheet) containing vertical navigation links, socials, and resume downloads. Closes automatically on navigation.
- **📁 Selected Projects**: Spotlights main projects with direct links to their repositories, staggered text entrance animations, and card hover scale effects.
- **🛠️ Balanced Technical Toolkit**: A responsive grid showing categorized skills that balances gracefully across breakpoints (e.g., 2 columns on mobile, 3 columns on tablet/medium desktop, and 5 columns on large desktop) with staggered entrance animations.
- **🏆 Combined Hackathons & Certifications**: A unified, responsive grid showcasing contest awards, hackathons, and certifications with an interactive certificate preview modal.
- **📄 Downloadable Resume**: Dedicated download modules for the student's curriculum vitae (`resume.pdf`).
- **📨 Contact Mailer Form**: Fully functional contact form that pre-fills email drafts to the receiver's address.

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Routing & SSR**: [TanStack Start](https://tanstack.com/router/latest/docs/start/overview)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Bundler & Dev Server**: [Vite 8](https://vite.dev/)

---

## 📁 Showcase Projects

The portfolio showcases the following personal projects:

1. **🧠 EmotionSense AI** ([Repository](https://github.com/Shravanik04/ai-sentiment-analyser))
   - A real-time, multilingual AI emotion and sentiment analysis platform.
   - Built with FastAPI, React, and Hugging Face Transformers.
   - Detects sentiment, micro-emotions, sarcasm, and emotional transitions with explainable visual metrics.

2. **🚀 ProjectPilot AI** ([Repository](https://github.com/Shravanik04/projectpilotai))
   - An AI-powered Career Intelligence and Project Architecture Planner.
   - Maps career objectives, evaluates skill gaps, and plans out comprehensive dev timelines and project architectures.

3. **✨ Developer Portfolio** ([Repository](https://github.com/Shravanik04/student-port-generator))
   - This modern, premium developer portfolio website itself, highlighting personal academic credentials, certificates, skills, and projects.

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
   git clone https://github.com/Shravanik04/student-port-generator.git
   cd student-port-generator
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
