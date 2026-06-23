import { createFileRoute } from "@tanstack/react-router";
import { siteData } from "@/data/site-data";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Github, Linkedin, User, Briefcase, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import certTrigger from "@/assets/cert-trigger.jpg";
import certUltron from "@/assets/cert-ultron.jpg";
import certClaude from "@/assets/cert-claude.jpg";
import certLuminus from "@/assets/cert-luminus.jpg";

const certImages: Record<string, string> = {
  "cert-trigger.jpg": certTrigger,
  "cert-ultron.jpg": certUltron,
  "cert-claude.jpg": certClaude,
  "cert-luminus.jpg": certLuminus,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shravani Kumar — CS Student & Aspiring Frontend Developer" },
      {
        name: "description",
        content:
          "Portfolio of Shravani Kumar, a Computer Science student at RRCE building projects in AI, ML, and frontend development.",
      },
      { property: "og:title", content: "Shravani Kumar — Portfolio" },
      {
        property: "og:description",
        content:
          "CS student at RRCE (CGPA 9.8/10) — projects in AI, ML, and frontend development.",
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
    <>
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
        <Activities />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Nav() {
  const links = [
    ["About", "#about"],
    ["Work", "#work"],
    ["Skills", "#skills"],
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
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg tracking-tight">
          Shravani<span className="text-primary">.</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="link-underline hover:text-foreground">
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
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-32">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Available for internships · {siteData.location}
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
              Hi, I'm {siteData.name.split(" ")[0]}.
              <br />
              <span className="text-muted-foreground">
                I build with code, curiosity, and{" "}
                <em className="text-primary not-italic">care</em>.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{siteData.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                See my work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-accent"
              >
                Get in touch
              </a>
            </div>
          </div>

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
    <section id={id} className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">{title}</h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  const paragraphs = siteData.summary.split("\n\n");
  return (
    <Section id="about" eyebrow="01 — About" title="A student, a builder, a perpetual learner.">
      <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="work" eyebrow="02 — Selected work" title="Things I've been building.">
      <div className="grid gap-6 md:grid-cols-2">
        {siteData.projects.map((p, i) => (
          <article
            key={p.name}
            className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_oklch(0.62_0.18_32/0.25)]"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-5xl text-muted-foreground/30">
                0{i + 1}
              </span>
              <span className="chip">{p.year}</span>
            </div>
            <h3 className="mt-6 font-display text-2xl">{p.name}</h3>
            <p className="mt-1 text-sm text-primary">{p.subtitle}</p>
            <p className="mt-4 flex-1 text-muted-foreground">{p.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-4 text-sm">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1"
                  aria-label={`View ${p.name} on GitHub`}
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="03 — Toolkit" title="What I work with.">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(siteData.skills).map(([group, items]) => (
          <div key={group} className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              {group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Activities() {
  return (
    <Section id="activities" eyebrow="04 — Beyond class" title="Hackathons & highlights.">
      <ul className="grid gap-3 md:grid-cols-2">
        {siteData.activities.map((a) => (
          <li
            key={a}
            className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3"
          >
            <span
              aria-hidden
              className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary"
            />
            <span className="text-sm">{a}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certs" eyebrow="05 — Certifications" title="Always picking up something new.">
      <div className="grid gap-4 md:grid-cols-2">
        {siteData.certifications.map((c) => {
          const imgUrl = certImages[c.imageName];
          return (
            <Dialog key={c.name}>
              <DialogTrigger asChild>
                <button
                  className="group flex flex-col justify-between items-start rounded-xl border border-border bg-card p-6 text-left transition-all duration-300 hover:border-primary/40 hover:bg-accent/40 cursor-pointer hover:shadow-[0_12px_24px_-10px_oklch(0.62_0.18_32/0.15)]"
                >
                  <div className="flex w-full items-start justify-between">
                    <div>
                      <span className="chip mb-2 inline-block text-[10px] uppercase tracking-wider font-semibold bg-primary/10 text-primary border-primary/20">
                        {c.type}
                      </span>
                      <h4 className="font-display text-lg mt-1 group-hover:text-primary transition-colors">
                        {c.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-0.5">{c.issuer}</p>
                      <p className="text-xs text-muted-foreground/80 mt-2 line-clamp-2">
                        {c.details}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                  <div className="mt-4 flex items-center justify-between w-full text-xs text-muted-foreground border-t border-border/40 pt-3">
                    <span>{c.date}</span>
                    <span className="text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View Certificate
                    </span>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-4 border-border bg-background shadow-2xl">
                <DialogHeader className="pb-2">
                  <DialogTitle className="font-display text-xl">{c.name}</DialogTitle>
                  <DialogDescription className="text-sm">
                    Issued by {c.issuer} · {c.date}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-2 aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-accent shadow-inner">
                  <img
                    src={imgUrl}
                    alt={`${c.name} certificate`}
                    className="h-full w-full object-contain transition-transform duration-300"
                    style={
                      c.rotate
                        ? {
                            transform: `rotate(${c.rotate}deg) scale(${
                              c.rotate === "90" || c.rotate === "270" ? 0.75 : 1
                            })`,
                          }
                        : undefined
                    }
                  />
                </div>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </Section>
  );
}

function Resume() {
  return (
    <Section id="resume" eyebrow="06 — Resume" title="My Professional Background.">
      <div className="flex flex-col items-center justify-between gap-8 rounded-2xl border border-border bg-card p-8 md:flex-row md:p-12">
        <div className="space-y-3 text-center md:text-left">
          <h3 className="font-display text-2xl md:text-3xl">Curriculum Vitae</h3>
          <p className="max-w-xl text-muted-foreground">
            Download my full resume to view details about my education, coursework, project experience, and technical skills.
          </p>
        </div>
        <a
          href="/shravvresume.pdf"
          download="shravvresume.pdf"
          className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-[0_12px_24px_-10px_oklch(0.62_0.18_32/0.3)] hover:-translate-y-0.5"
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
    <Section id="contact" eyebrow="07 — Contact" title="Let's build something together.">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-lg text-muted-foreground">
            I'm open to internships, collaborations, and friendly hellos. The fastest way
            to reach me is over email.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              <a className="link-underline" href={`mailto:${siteData.email}`}>
                {siteData.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              <a className="link-underline" href={`tel:${siteData.phone.replace(/\s/g, "")}`}>
                {siteData.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{siteData.location}</span>
            </li>
          </ul>
        </div>
        <form
          className="space-y-4 rounded-2xl border border-border bg-card p-6"
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
            <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              maxLength={100}
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={1000}
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Send message <ArrowUpRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} {siteData.name}. Crafted with care.
        </p>
        <p>Last updated {siteData.lastUpdated}</p>
      </div>
    </footer>
  );
}
