import { createFileRoute } from "@tanstack/react-router";
import { siteData } from "@/data/site-data";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  FileText,
  Terminal,
  Cpu,
  Code2,
  Laptop,
  Rocket,
  Network,
  Box,
  Lightbulb,
  Bot,
  Brain,
  Globe,
  Users,
  MessageSquare,
  Trophy,
  Compass,
  Smile,
  Sparkles,
  Download,
  Calendar,
  Layers,
  ChevronRight,
  Flame,
  Award,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

// Project mockups
import sentimentscopeDashboard from "@/assets/sentimentscope-dashboard.png";
import projectpilotDashboard from "@/assets/projectpilot-dashboard.png";
import portfolioPreview from "@/assets/portfolio-preview.png";

// Certificate assets
import certTrigger from "@/assets/cert-trigger.jpg";
import certUltron from "@/assets/cert-ultron.jpg";
import certClaude from "@/assets/cert-claude.jpg";
import certLuminus from "@/assets/cert-luminus.jpg";

const projectImages: Record<string, string> = {
  "sentimentscope-dashboard.png": sentimentscopeDashboard,
  "projectpilot-dashboard.png": projectpilotDashboard,
  "portfolio-preview.png": portfolioPreview,
};

const certImages: Record<string, string> = {
  "cert-trigger.jpg": certTrigger,
  "cert-ultron.jpg": certUltron,
  "cert-claude.jpg": certClaude,
  "cert-luminus.jpg": certLuminus,
};

function getSkillIcon(skill: string): React.ReactNode {
  const s = skill.toLowerCase();
  
  if (s.includes("python")) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-3.5 w-3.5 object-contain" />;
  }
  if (s === "c") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="h-3.5 w-3.5 object-contain" />;
  }
  if (s.includes("c++")) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="h-3.5 w-3.5 object-contain" />;
  }
  if (s === "git") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="h-3.5 w-3.5 object-contain" />;
  }
  if (s === "github") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-3.5 w-3.5 object-contain dark:invert" />;
  }
  if (s.includes("vs code")) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="h-3.5 w-3.5 object-contain" />;
  }
  if (s.includes("fastapi")) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="h-3.5 w-3.5 object-contain" />;
  }
  if (s.includes("tailwindcss")) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" className="h-3.5 w-3.5 object-contain" />;
  }

  // Lucide fallbacks
  let IconComponent = Code2;
  if (s.includes("antigravity")) IconComponent = Rocket;
  else if (s.includes("data structures")) IconComponent = Network;
  else if (s.includes("oop")) IconComponent = Box;
  else if (s.includes("problem solving") || s.includes("algorithms")) IconComponent = Lightbulb;
  else if (s.includes("vector")) IconComponent = Layers;
  else if (s === "ai" || s.includes("generative")) IconComponent = Bot;
  else if (s === "ml" || s.includes("machine learning")) IconComponent = Brain;
  else if (s.includes("system design")) IconComponent = Cpu;
  else if (s.includes("software development") || s.includes("full-stack")) IconComponent = Laptop;
  else if (s.includes("web development") || s.includes("web apps")) IconComponent = Globe;
  else if (s.includes("teamwork")) IconComponent = Users;
  else if (s.includes("communication")) IconComponent = MessageSquare;
  else if (s.includes("leadership")) IconComponent = Trophy;
  else if (s.includes("critical thinking")) IconComponent = Compass;

  return <IconComponent className="h-3.5 w-3.5 text-primary/70 group-hover/skill:text-primary transition-colors" />;
}

function getProjectIcon(name: string) {
  const s = name.toLowerCase();
  if (s.includes("sentiment")) return Smile;
  if (s.includes("pilot") || s.includes("planner")) return Sparkles;
  if (s.includes("portfolio")) return Laptop;
  return Sparkles;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shravani Kumar — CS Student & Aspiring AI/Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Shravani Kumar, a Computer Science student at RRCE building projects in AI, ML, and full-stack engineering.",
      },
      { property: "og:title", content: "Shravani Kumar — Portfolio" },
      {
        property: "og:description",
        content:
          "CS student at RRCE (CGPA 9.8/10) — projects in AI, ML, and full-stack development.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: siteData.name,
          email: `mailto:${siteData.email}`,
          telephone: siteData.phone,
          jobTitle: siteData.role,
        }),
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <AchievementsAndCertifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    ["Home", "#"],
    ["About", "#about"],
    ["Projects", "#work"],
    ["Skills & Certificates", "#skills"],
    ["Resume", "#resume"],
    ["Contact", "#contact"],
  ] as const;

  const socials = [
    { icon: Github, href: siteData.github, label: "GitHub" },
    { icon: Linkedin, href: siteData.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${siteData.email}`, label: "Email" },
    { icon: Phone, href: `tel:${siteData.phone.replace(/\s/g, "")}`, label: "Call" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl tracking-tight">
          Shravani<span className="text-primary">.</span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-muted-foreground lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="link-underline hover:text-foreground transition-colors duration-200">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-accent hover:text-primary hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                aria-label={item.label}
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="paper-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-32">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="chip bg-primary/5 text-primary border-primary/20">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Available for internships · {siteData.location}
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
              Hi, I'm {siteData.name.split(" ")[0]}.
              <br />
              <span className="text-muted-foreground text-4xl md:text-6xl mt-2 block">
                I build with code, curiosity, and{" "}
                <em className="text-primary not-italic">care</em>.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              {siteData.tagline}
            </p>
            
            {/* Prominent Recruiter CTA Buttons */}
            <div className="mt-8 flex flex-row flex-nowrap items-center gap-2.5 overflow-x-auto scrollbar-none pb-1 md:pb-0">
              <a
                href="/resume.pdf"
                download="resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4.5 py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-all duration-300 hover:opacity-95 hover:shadow-[0_12px_24px_-10px_oklch(0.62_0.18_32/0.4)] hover:-translate-y-0.5 cursor-pointer shrink-0"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href={siteData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-4.5 py-3 text-xs sm:text-sm font-semibold transition-all duration-300 hover:border-primary/40 hover:bg-accent hover:-translate-y-0.5 cursor-pointer shrink-0"
              >
                <Github className="h-4 w-4 text-muted-foreground" /> GitHub
              </a>
              <a
                href={siteData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-4.5 py-3 text-xs sm:text-sm font-semibold transition-all duration-300 hover:border-primary/40 hover:bg-accent hover:-translate-y-0.5 cursor-pointer shrink-0"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground" /> LinkedIn
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4.5 py-3 text-xs sm:text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/10 hover:-translate-y-0.5 cursor-pointer shrink-0"
              >
                <Mail className="h-4 w-4" /> Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2
            }}
            className="relative mx-auto w-full max-w-sm md:mx-0"
          >
            <div className="paper-grid absolute -inset-4 -z-10 rounded-3xl opacity-40" />
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-accent shadow-[0_30px_80px_-30px_oklch(0.62_0.18_32/0.35)] transition-shadow duration-500 hover:shadow-[0_40px_90px_-20px_oklch(0.62_0.18_32/0.5)]"
            >
              <motion.img
                src={siteData.photo}
                alt={`Portrait of ${siteData.name}`}
                className="h-full w-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border bg-background relative z-10">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex items-end justify-between gap-6"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">{eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-tight text-foreground">{title}</h2>
          </div>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function About() {
  const paragraphs = siteData.summary.split("\n\n");
  return (
    <Section id="about" eyebrow="01 — About" title="Who I am & what drives me.">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Highlight tagline as a premium intro text block */}
          <div className="border-l-3 border-primary pl-5 py-1">
            <p className="font-display text-xl md:text-2xl text-foreground font-medium leading-relaxed italic">
              "Computer Science student passionate about AI, full-stack development, and building real-world solutions through innovative software projects."
            </p>
          </div>
          
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="work" eyebrow="02 — Projects" title="Things I've been building.">
      <div className="grid gap-8 lg:grid-cols-3">
        {siteData.projects.map((p, i) => {
          const imgUrl = p.imageName ? projectImages[p.imageName] : undefined;
          return (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_24px_50px_-15px_oklch(0.62_0.18_32/0.2)]"
            >
              {/* Media Thumbnail Container */}
              {imgUrl && (
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/60 bg-accent">
                  <img
                    src={imgUrl}
                    alt={`${p.name} dashboard mockup`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/media:scale-102"
                  />
                </div>
              )}

              {/* Card Content */}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl group-hover:text-primary transition-colors flex items-center gap-2">
                      {p.name}
                      {(() => {
                        const ProjectIcon = getProjectIcon(p.name);
                        return <ProjectIcon className="h-4.5 w-4.5 text-primary/80 group-hover:text-primary transition-colors" />;
                      })()}
                    </h3>
                    <p className="text-xs text-primary font-medium mt-0.5">{p.subtitle}</p>
                  </div>
                  <span className="chip text-[10px] py-0.5 px-2">{p.year}</span>
                </div>

                <p className="mt-4 text-muted-foreground text-sm leading-relaxed flex-1">{p.description}</p>

                {/* Project Highlights */}
                {p.highlights && (
                  <div className="mt-5">
                    <h4 className="text-[10px] font-semibold uppercase tracking-wider text-foreground/80 mb-2">Key Highlights</h4>
                    <ul className="grid gap-1.5 grid-cols-1">
                      {p.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span className="truncate">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Metrics / Recruiter Impact Badge */}
                {p.metrics && (
                  <div className="mt-5 rounded-xl border border-primary/10 bg-primary/[0.02] px-3.5 py-2.5 flex items-center gap-2.5">
                    <Sparkles className="h-4 w-4 text-primary shrink-0 animate-pulse" />
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-muted-foreground font-semibold leading-none">Measurable Impact</span>
                      <span className="text-xs font-semibold text-foreground mt-1 block">{p.metrics}</span>
                    </div>
                  </div>
                )}

                {/* Tags */}
                {p.tags && p.tags.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-1">
                    {p.tags.map((t) => (
                      <span key={t} className="chip text-[9px] py-0.5 px-2">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Links */}
                <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-sm">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors group/link"
                      aria-label={`View ${p.name} repository`}
                    >
                      <Github className="h-4 w-4" />
                      <span>Code Repository</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="03 — Skills & Certificates" title="My Technical Toolkit.">
      <div className="rounded-2xl border border-border bg-card/30 p-6 md:p-8 backdrop-blur-sm shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {Object.entries(siteData.skills).map(([group, items], i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-border bg-card p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {group}
                </h4>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {items.map((s) => {
                    const Icon = getSkillIcon(s);
                    return (
                      <li key={s} className="chip group/skill transition-all duration-300 hover:border-primary/40 hover:bg-accent/40 text-[11px] py-1 px-2.5">
                        {Icon}
                        <span>{s}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function AchievementsAndCertifications() {
  const getCardIcon = (type: string, name: string) => {
    if (type === "Academic") return GraduationCap;
    if (type === "Hackathon") {
      if (name.includes("TRIGGER")) return Cpu;
      return Trophy;
    }
    if (type === "Competition" || name.toLowerCase().includes("reverse coding")) return Terminal;
    return Award;
  };

  const combinedItems = [
    {
      name: "9.8 / 10 CGPA Coursework",
      issuer: "RajaRajeswari College of Engineering (RRCE)",
      date: "2023 - 2027",
      type: "Academic",
      details: "Maintained top academic ranking throughout Computer Science Engineering coursework.",
    },
    ...siteData.certifications,
  ];

  return (
    <Section id="achievements" eyebrow="Hackathons & Certifications" title="Recognitions & Achievements.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {combinedItems.map((item, idx) => {
          const IconComponent = getCardIcon(item.type, item.name);
          const hasCertificate = 'imageName' in item && item.imageName;
          const imgUrl = hasCertificate ? certImages[item.imageName as string] : undefined;

          const CardBody = (
            <div className="group flex flex-col justify-between items-start rounded-xl border border-border bg-card p-5 text-left transition-all duration-300 hover:border-primary/40 hover:bg-accent/40 cursor-pointer hover:shadow-[0_12px_24px_-10px_oklch(0.62_0.18_32/0.15)] w-full h-full min-h-[220px]">
              <div className="flex w-full items-start justify-between">
                <span className="chip text-[9px] uppercase tracking-wider font-semibold bg-primary/10 text-primary border-primary/20 py-0.5 px-2">
                  {item.type}
                </span>
                {hasCertificate ? (
                  <ArrowUpRight className="h-4.5 w-4.5 text-muted-foreground/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary shrink-0" />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <IconComponent className="h-4.5 w-4.5" />
                  </div>
                )}
              </div>
              
              <div className="mt-4 flex-1">
                <h4 className="font-display text-base mt-1 group-hover:text-primary transition-colors leading-snug">
                  {item.name}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">{item.issuer}</p>
                <p className="text-xs text-muted-foreground/80 mt-2 leading-relaxed line-clamp-3">
                  {item.details}
                </p>
              </div>
              
              <div className="mt-4 flex items-center justify-between w-full text-[10px] text-muted-foreground border-t border-border/40 pt-3">
                <span>{item.date}</span>
                {hasCertificate && (
                  <span className="text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Certificate
                  </span>
                )}
              </div>
            </div>
          );

          if (hasCertificate) {
            return (
              <Dialog key={item.name}>
                <DialogTrigger asChild>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="w-full h-full focus:outline-none"
                  >
                    {CardBody}
                  </motion.button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-4 border-border bg-background shadow-2xl">
                  <DialogHeader className="pb-2">
                    <DialogTitle className="font-display text-xl">{item.name}</DialogTitle>
                    <DialogDescription className="text-sm">
                      Issued by {item.issuer} · {item.date}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-2 aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-accent shadow-inner">
                    <img
                      src={imgUrl}
                      alt={`${item.name} certificate`}
                      className="h-full w-full object-contain transition-transform duration-300"
                      style={
                        'rotate' in item && item.rotate
                          ? {
                              transform: `rotate(${item.rotate}deg) scale(${
                                item.rotate === "90" || item.rotate === "270" ? 0.75 : 1
                              })`,
                            }
                          : undefined
                      }
                    />
                  </div>
                </DialogContent>
              </Dialog>
            );
          }

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="w-full h-full"
            >
              {CardBody}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Resume() {
  return (
    <Section id="resume" eyebrow="04 — Resume" title="My Professional Background.">
      <div className="flex flex-col items-center justify-between gap-8 rounded-2xl border border-border bg-card p-8 md:flex-row md:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:border-primary/30 transition-all duration-300">
        <div className="space-y-3 text-center md:text-left">
          <h3 className="font-display text-2xl md:text-3xl text-foreground">Curriculum Vitae</h3>
          <p className="max-w-xl text-muted-foreground leading-relaxed">
            Download my full resume to view details about my coursework, academic standings, project accomplishments, and development skills.
          </p>
        </div>
        <a
          href="/resume.pdf"
          download="resume.pdf"
          className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:opacity-95 hover:shadow-[0_12px_24px_-10px_oklch(0.62_0.18_32/0.4)] hover:-translate-y-0.5 cursor-pointer"
        >
          <FileText className="h-5 w-5" />
          Download Resume
        </a>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="05 — Contact" title="Let's build something together.">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl text-foreground font-medium border-l-2 border-primary pl-4 py-1 italic">
            "Open to internships, collaborations, and opportunities to build impactful technology."
          </p>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            The fastest way to reach me is over email, but feel free to connect via LinkedIn or view my repositories on GitHub. I'll get back to you as soon as possible!
          </p>
          
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                <Mail className="h-4 w-4" />
              </div>
              <a className="link-underline text-sm font-semibold" href={`mailto:${siteData.email}`}>
                {siteData.email}
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                <Phone className="h-4 w-4" />
              </div>
              <a className="link-underline text-sm font-semibold" href={`tel:${siteData.phone.replace(/\s/g, "")}`}>
                {siteData.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                <MapPin className="h-4 w-4" />
              </div>
              <span className="text-sm text-muted-foreground font-semibold">{siteData.location}</span>
            </li>
            <li className="flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                <Github className="h-4 w-4" />
              </div>
              <a 
                className="link-underline text-sm font-semibold" 
                href={siteData.github} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub — Shravanik04
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </div>
              <a 
                className="link-underline text-sm font-semibold" 
                href={siteData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                LinkedIn — Shravani Kumar
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                <Download className="h-4 w-4" />
              </div>
              <a 
                className="link-underline text-sm font-semibold text-primary" 
                href="/resume.pdf" 
                download="resume.pdf"
              >
                Download Curriculum Vitae
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 rounded-2xl border border-border bg-card p-6 hover:border-primary/20 transition-colors duration-300"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const name = String(fd.get("name") || "");
            const message = String(fd.get("message") || "");
            window.location.href = `mailto:${siteData.email}?subject=${encodeURIComponent(
              `Hello from ${name}`,
            )}&body=${encodeURIComponent(message)}`;
          }}
        >
          <div>
            <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              maxLength={100}
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={1000}
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 cursor-pointer"
          >
            Send message <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Footer() {
  const links = [
    ["Home", "#"],
    ["About", "#about"],
    ["Projects", "#work"],
    ["Skills & Certificates", "#skills"],
    ["Resume", "#resume"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <footer className="border-t border-border bg-card/20 relative z-10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-border/40 pb-8 mb-8">
          <a href="#" className="font-display text-xl tracking-tight">
            Shravani<span className="text-primary">.</span>
          </a>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="link-underline hover:text-foreground transition-colors">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {siteData.name}. Crafted with care and Antigravity.
          </p>
          <p className="text-muted-foreground/80">
            Last Updated: {siteData.lastUpdated}
          </p>
        </div>
      </div>
    </footer>
  );
}
