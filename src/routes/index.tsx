import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Github,
  GraduationCap,
  Sparkles,
  Terminal,
  Smartphone,
  ShieldCheck,
  Gamepad2,
} from "lucide-react";
import { projects, t } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({
  component: Index,
});

const GITHUB = "https://github.com/stildedeye";

const projectIcons = [Smartphone, Gamepad2, Terminal, ShieldCheck];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none fixed -left-40 top-[-10%] h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-[120px] animate-float" />
      <div className="pointer-events-none fixed -right-40 bottom-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px] animate-float" />

      {/* Nav */}
      <header className="relative z-20">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-6">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight transition-transform duration-300 hover:scale-105"
          >
            StilDedEye<span className="text-primary">.</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#projects" className="story-link transition-colors hover:text-foreground">{t.navProjects}</a>
            <a href="#journey" className="story-link transition-colors hover:text-foreground">{t.navJourney}</a>
            <a href="#contact" className="story-link transition-colors hover:text-foreground">{t.navContact}</a>
          </div>
          <Button asChild size="sm" variant="outline" className="rounded-full transition-transform duration-300 hover:scale-105">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </nav>
      </header>

      <main id="top" className="relative z-10 mx-auto max-w-5xl px-5">
        {/* Hero */}
        <section className="flex min-h-[82vh] flex-col justify-center py-16">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <Badge variant="outline" className="mb-6 gap-1.5 border-primary/40 bg-primary/10 text-primary transition-transform duration-300 hover:scale-105">
              <Sparkles className="h-3.5 w-3.5" />
              {t.heroTag}
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="max-w-3xl text-5xl font-bold leading-[1.05] sm:text-7xl"
          >
            StilDedEye<span className="text-primary text-glow">.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-3 font-mono text-sm text-primary text-glow"
          >
            @stildedeye
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {t.heroLead}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="group rounded-full shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-primary/40"
            >
              <a href="#projects">
                {t.viewWork}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-primary/50"
            >
              <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 transition-transform group-hover:rotate-12" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </section>

        {/* Journey */}
        <section id="journey" className="py-20">
          <SectionHeading kicker={t.navJourney} title={t.journeyTitle} />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="group mt-8 overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 sm:p-10"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  {t.journeyStatus}
                </p>
                <h3 className="mt-1 text-2xl font-bold">{t.journeyDegree}</h3>
                <p className="mt-1 text-muted-foreground">{t.journeyUni}</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20">
          <SectionHeading kicker={t.navProjects} title={t.projectsTitle} lead={t.projectsLead} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {projects.map((p, i) => {
              const Icon = projectIcons[i];
              const isAccent = p.accent === "accent";
              return (
                <motion.article
                  key={p.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={i}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col rounded-3xl border border-border bg-card/60 p-7 backdrop-blur transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className={`grid h-12 w-12 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${
                        isAccent ? "bg-accent/15 text-accent" : "bg-primary/15 text-primary"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {p.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold transition-colors group-hover:text-primary">{p.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full font-mono text-[0.7rem] transition-transform duration-200 hover:scale-110 hover:bg-primary/20 hover:text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6">
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-foreground"
                      >
                        {t.openProject}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
                        {t.comingSoon}
                      </span>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative overflow-hidden rounded-[2rem] border border-border bg-card/60 p-10 text-center backdrop-blur transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:p-16"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-primary/10 blur-3xl" />
            <p className="relative mx-auto max-w-md text-lg text-muted-foreground">{t.contactLead}</p>
            <Button
              asChild
              size="lg"
              className="group relative mt-8 rounded-full shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-primary/40"
            >
              <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 transition-transform group-hover:rotate-12" />
                github.com/stildedeye
              </a>
            </Button>
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} StilDedEye</span>
          <span className="font-mono text-xs">Bari · Italy</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ kicker, title, lead }: { kicker: string; title: string; lead?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{kicker}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {lead && <p className="mt-3 max-w-lg text-muted-foreground">{lead}</p>}
    </motion.div>
  );
}
