export const siteData = {
  name: "Shravani Kumar",
  role: "Computer Science Student & Aspiring Frontend Developer",
  tagline:
    "Building thoughtful interfaces and exploring AI, ML, and emerging tech — one project at a time.",
  email: "shravanikumar2006@gmail.com",
  phone: "+91 8660377945",
  location: "Bengaluru, India",
  summary:
    "I'm a Computer Science and Engineering student at Raja Rajeswari College of Engineering with a CGPA of 9.8/10.0. I'm proficient in Python and C/C++ with a strong foundation in problem-solving and software development. As an aspiring Frontend Developer, I'm passionate about Artificial Intelligence, Machine Learning, web development, and emerging technologies. I'm actively involved in hackathons and coding competitions, and I'm seeking internship opportunities to apply my skills and contribute to impactful projects.",
  education: [
    {
      school: "Raja Rajeswari College of Engineering",
      degree: "BE, Computer Science and Engineering",
      period: "2024 – 2028",
      score: "CGPA: 9.8 / 10.0",
    },
    {
      school: "RNS PU College",
      degree: "Pre-University (PCMC)",
      period: "2022 – 2024",
      score: "95.6%",
    },
    {
      school: "BET Convent School",
      degree: "Secondary School",
      period: "2021 – 2022",
      score: "98.4%",
    },
  ],
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
