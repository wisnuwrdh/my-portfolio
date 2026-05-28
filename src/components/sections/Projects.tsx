"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, Lock, BarChart3, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "Hesych",
    description:
      "A modern privacy-first password manager. Local-first encryption, zero-knowledge architecture, and a premium security UX.",
    category: "Security • SaaS",
    tech: ["React", "TypeScript", "Supabase", "Tauri"],
    icon: Lock,
    gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
    borderColor: "border-violet-500/20",
    accentColor: "text-violet-400",
    liveUrl: "#",
    githubUrl: "#",
    stats: [
      { label: "Local-first", value: "Encrypted" },
      { label: "Architecture", value: "Zero-knowledge" },
    ],
  },
  {
    name: "Daily OS",
    description:
      "A gamified productivity operating system. Track habits, earn XP, build consistency. Think of it as your personal productivity dashboard.",
    category: "Productivity • Gamification",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Supabase"],
    icon: BarChart3,
    gradient: "from-emerald-600/20 via-green-600/10 to-transparent",
    borderColor: "border-emerald-500/20",
    accentColor: "text-emerald-400",
    liveUrl: "#",
    githubUrl: "#",
    stats: [
      { label: "System", value: "XP-Based" },
      { label: "Focus", value: "Habit OS" },
    ],
  },
  {
    name: "Linkku",
    description:
      "A curated link and knowledge management platform. Organize resources, save bookmarks, and build your personal knowledge system.",
    category: "Knowledge • Organization",
    tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    icon: Bookmark,
    gradient: "from-amber-600/20 via-orange-600/10 to-transparent",
    borderColor: "border-amber-500/20",
    accentColor: "text-amber-400",
    liveUrl: "#",
    githubUrl: "#",
    stats: [
      { label: "Type", value: "Knowledge OS" },
      { label: "Format", value: "Card UI" },
    ],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-6xl px-6 py-28 sm:py-36"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-accent">
          Featured Work
        </span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Products I&apos;ve Built
        </h2>
        <p className="mt-4 text-muted-foreground">
          Real SaaS products built from the ground up.
        </p>
      </motion.div>

      {/* Projects grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/20 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.1)]"
            >
              {/* Gradient header */}
              <div
                className={cn(
                  "relative flex h-44 items-center justify-center overflow-hidden",
                  project.gradient
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card" />
                <Icon
                  className={cn(
                    "relative z-10 h-16 w-16 transition-all duration-500 group-hover:scale-110",
                    project.accentColor
                  )}
                  strokeWidth={1.5}
                />
                {/* Category badge */}
                <span className="absolute left-4 top-4 z-10 rounded-full border border-border bg-background/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="mt-4 flex gap-4 border-t border-border pt-4">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="flex-1">
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60">
                        {stat.label}
                      </span>
                      <p className="mt-0.5 text-xs font-medium text-foreground">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-surface px-2 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-accent"
                  >
                    Live Preview
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <GitBranch className="h-3.5 w-3.5" />
                    Source
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
