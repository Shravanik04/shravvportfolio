import photoAsset from "@/assets/shravani-photo.jpg";

export const siteData = {
  name: "Shravani Kumar",
  role: "Computer Science Student & Aspiring Frontend Developer",
  tagline:
    "Building thoughtful interfaces and exploring AI, ML, and emerging tech — one project at a time.",
  email: "shravanikumar2006@gmail.com",
  phone: "+91 8660377945",
  location: "Bengaluru, India",
  github: "https://github.com/Shravanik04",
  linkedin: "https://www.linkedin.com/in/shravani-k-shrivatsa-b202a537a",
  photo: photoAsset,
  summary:
    "Hi, I'm Shravani K, a Computer Science Engineering student at RajaRajeswari College of Engineering with a strong interest in technology, software development, and artificial intelligence. I enjoy learning new concepts, solving problems, and continuously improving my technical skills.\n\nCurrently, I am expanding my knowledge in programming, web technologies, machine learning, and cloud computing while building a solid foundation in computer science fundamentals. I am passionate about exploring emerging technologies and staying updated with industry trends.\n\nMy goal is to grow as a software engineer, contribute to innovative solutions, and make a meaningful impact through technology. I believe in continuous learning, curiosity, and embracing challenges as opportunities for growth.",
  education: [],
  projects: [
    {
      name: "SentimentScope",
      subtitle: "AI Sentiment Analyzer",
      year: "2026",
      description:
        "An AI-powered sentiment analysis app that classifies text into Positive, Negative, and Neutral categories. Includes preprocessing, prediction, and visualization, wrapped in an interactive UI.",
      tags: ["Python", "NLP", "Visualization", "Git"],
      github: "https://github.com/Shravanik04/ai-sentiment-analyser",
    },
    {
      name: "ProjectPilotAI",
      subtitle: "AI Project Planner",
      year: "2026",
      description:
        "An AI-powered planning platform that generates complete project blueprints from a title, domain, team size, duration, and complexity — recommending tech stacks, datasets, tools, architecture, roadmaps, and learning resources.",
      tags: ["AI", "Recommendation", "Planning", "Full-stack"],
      github: "https://github.com/Shravanik04/projectpilotai",
    },
  ],
  skills: {
    Languages: ["Python", "C", "C++"],
    Tools: ["Git", "GitHub", "VS Code", "Antigravity"],
    Concepts: ["Data Structures", "OOP", "Problem Solving"],
    Interests: ["AI", "ML", "Software Development", "Web Development"],
    Soft: ["Teamwork", "Communication", "Leadership", "Critical Thinking"],
  },
  activities: [
    "Maintained 9.8 / 10 CGPA throughout coursework",
    "Participated in Luminous Hackathon at RNSIT",
    "Participated in Trigger Hackathon at RRCE",
    "Competed in Reverse Coding Contest",
    "Built AI-focused projects exploring real-world use cases",
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
  lastUpdated: "June 23, 2026",
};

export type SiteData = typeof siteData;
