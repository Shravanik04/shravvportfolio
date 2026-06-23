import { createFileRoute } from "@tanstack/react-router";
import { siteData } from "@/data/site-data";
import { ArrowUpRight, Mail, Phone, MapPin, Github } from "lucide-react";

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
    ["Contact", "#contact"],
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
        <a
          href={`mailto:${siteData.email}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm text-background transition hover:opacity-90"
        >
          Say hi <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="paper-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-32">
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

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
          {[
            ["CGPA", "9.8 / 10"],
            ["Projects shipped", String(siteData.projects.length)],
            ["Hackathons", "3+"],
            ["Languages", "Py · C · C++"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
              <dd className="mt-1 font-display text-2xl">{v}</dd>
            </div>
          ))}
        </dl>
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
  return (
    <Section id="about" eyebrow="01 — About" title="A student, a builder, a perpetual learner.">
      <div className="grid gap-12 md:grid-cols-5">
        <p className="md:col-span-3 text-lg leading-relaxed text-muted-foreground">
          {siteData.summary}
        </p>
        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Education
          </h3>
          <ul className="mt-4 space-y-5">
            {siteData.education.map((e) => (
              <li key={e.school} className="border-l-2 border-primary/40 pl-4">
                <div className="font-medium">{e.school}</div>
                <div className="text-sm text-muted-foreground">{e.degree}</div>
                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                  <span>{e.period}</span>
                  <span className="font-medium text-foreground">{e.score}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
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
              <a
                href="#"
                className="link-underline inline-flex items-center gap-1"
                aria-label={`View ${p.name} on GitHub`}
              >
                <Github className="h-4 w-4" /> Code
              </a>
              <a href="#" className="link-underline inline-flex items-center gap-1">
                Live demo <ArrowUpRight className="h-4 w-4" />
              </a>
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
        {siteData.certifications.map((c) => (
          <div
            key={c.name}
            className="flex items-center justify-between rounded-xl border border-border bg-card p-6"
          >
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-sm text-muted-foreground">{c.issuer}</div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="06 — Contact" title="Let's build something together.">
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
