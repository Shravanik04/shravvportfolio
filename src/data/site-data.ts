import photoAsset from "@/assets/shravani-photo.jpg.asset.json";

export const siteData = {
  name: "Shravani Kumar",
  role: "Computer Science Student & Aspiring Frontend Developer",
  tagline:
    "Building thoughtful interfaces and exploring AI, ML, and emerging tech — one project at a time.",
  email: "shravanikumar2006@gmail.com",
  phone: "+91 8660377945",
  location: "Bengaluru, India",
  photo: photoAsset.url,
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
    },
    {
      name: "ProjectPilotAI",
      subtitle: "AI Project Planner",
      year: "2026",
      description:
        "An AI-powered planning platform that generates complete project blueprints from a title, domain, team size, duration, and complexity — recommending tech stacks, datasets, tools, architecture, roadmaps, and learning resources.",
      tags: ["AI", "Recommendation", "Planning", "Full-stack"],
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
    { name: "Claude Code in Action", issuer: "Anthropic" },
  ],
  lastUpdated: "June 22, 2026",
};

export type SiteData = typeof siteData;
