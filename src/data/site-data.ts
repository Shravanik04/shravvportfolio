import photoAsset from "@/assets/shravani-photo.jpg";

export interface Project {
  name: string;
  subtitle: string;
  year: string;
  description: string;
  github?: string;
  imageName?: string;
  tags?: string[];
  highlights?: string[];
  metrics?: string;
}

export const siteData = {
  name: "Shravani Kumar",
  role: "Computer Science Student & Aspiring AI/Full-Stack Developer",
  tagline:
    "Computer Science student passionate about AI, full-stack development, and building real-world solutions through innovative software projects.",
  email: "shravanikumar2006@gmail.com",
  phone: "+91 8660377945",
  location: "Bengaluru, India",
  github: "https://github.com/Shravanik04",
  linkedin: "https://www.linkedin.com/in/shravani-k-shrivatsa-b202a537a",
  photo: photoAsset,
  summary:
    "I enjoy transforming ideas into practical software solutions. My current focus is AI-powered applications, full-stack development, and building projects that solve meaningful real-world problems.\n\nCurrently, I am expanding my knowledge in programming, web technologies, and machine learning while building a strong foundation in computer science and engineering.\n\nI am passionate about exploring emerging technologies, participating in hackathons, and continuously improving my technical skills to create impactful solutions through technology.",
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science & Engineering",
      institution: "RajaRajeswari College of Engineering (RRCE), Bengaluru",
      period: "2023 - 2027",
      grade: "9.8 / 10 CGPA",
    }
  ],
  projects: [
    {
      name: "SentimentScope",
      subtitle: "AI Sentiment Analyzer",
      year: "2026",
      description:
        "An AI-powered sentiment analysis app that classifies text into Positive, Negative, and Neutral categories. Includes preprocessing, prediction, and visualization, wrapped in an interactive UI.",

      github: "https://github.com/Shravanik04/ai-sentiment-analyser",


      imageName: "sentimentscope-dashboard.png",
    },
    {
      name: "ProjectPilot AI",
      subtitle: "AI-Powered Career Intelligence & Project Planning Platform",
      year: "2026",
      description:
        "ProjectPilot AI is a full-stack AI-powered platform that helps students transform career goals into actionable learning paths by analyzing skill gaps, generating personalized career roadmaps, recommending industry-relevant projects, and creating implementation-ready project architectures and development plans.",

      github: "https://github.com/Shravanik04/projectpilotai",


      imageName: "projectpilot-dashboard.png",
    },
    {
      name: "Developer Portfolio",
      subtitle: "Personal Brand & Showcase",
      year: "2026",
      description:
        "A modern, responsive developer portfolio website built to showcase my projects, technical skills, certifications, and achievements through an interactive and visually engaging interface. Designed with smooth animations, optimized performance, and a clean user experience, it serves as a central hub for my professional profile, resume, and contact information.",
      github: "https://github.com/Shravanik04/shravvportfolio",
      imageName: "portfolio-preview.png",
    },
  ] as Project[],
  skills: {
    Languages: ["Python", "C", "C++", "TypeScript", "JavaScript"],
    Tools: ["Git", "GitHub", "VS Code", "FastAPI", "TailwindCSS"],
    Concepts: ["Data Structures", "Algorithms", "OOP", "System Design", "Problem Solving"],
    Interests: ["Generative AI", "Machine Learning", "Full-Stack Development", "Web Apps"],
    Soft: ["Teamwork", "Communication", "Leadership", "Critical Thinking"],
  },

  achievements: [
    {
      title: "9.8 / 10 CGPA Coursework",
      category: "Academic",
      details: "Maintained top academic ranking throughout Computer Science Engineering coursework.",
      icon: "GraduationCap",
    },
    {
      title: "Solaris X Grand Hackathon",
      category: "Hackathon",
      details: "Built dev tools to enhance engineering productivity within a 24h sprint at RNSIT.",
      icon: "Trophy",
    },
    {
      title: "TRIGGER 2K26 Hackathon",
      category: "Hackathon",
      details: "Collaborated to develop a hardware/software prototype addressing real-world issues.",
      icon: "Cpu",
    },
    {
      title: "Reverse Coding Contest",
      category: "Competition",
      details: "Placed high in reverse engineering compiled binaries and reconstructing source logic.",
      icon: "Terminal",
    },
  ],
  certifications: [
    {
      name: "Solaris X Grand Hackathon",
      issuer: "RNS Institute of Technology",
      date: "April 8–9, 2026",
      type: "Hackathon",
      details: "24-hour high-intensity build marathon specializing in the track 'Developer Tools — Engineering Productivity' at Luminus 2026.",
      imageName: "cert-luminus.jpg",
    },
    {
      name: "TRIGGER 2K26 Hackathon",
      issuer: "RajaRajeswari College of Engineering",
      date: "May 7–8, 2026",
      type: "Hackathon",
      details: "24-hour hardware/software product building marathon organised by the Department of Computer Science and Engineering.",
      imageName: "cert-trigger.jpg",
    },
    {
      name: "ULTRON-25 Reverse Coding",
      issuer: "RajaRajeswari College of Engineering",
      date: "April 2026",
      type: "Competition",
      details: "Reverse Engineering and Coding Contest at the ULTRON-25 Technical Fest organized by the Department of AIML.",
      imageName: "cert-ultron.jpg",
      rotate: "90",
    },
    {
      name: "Claude Code in Action",
      issuer: "Anthropic",
      date: "March 26, 2026",
      type: "Certification",
      details: "Hands-on certificate of completion for Anthropic's Claude Code practical training (Credential: psw483egerub).",
      imageName: "cert-claude.jpg",
    },
  ],
  lastUpdated: "June 2026",
};

export type SiteData = typeof siteData;
