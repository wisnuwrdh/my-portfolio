"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const techStack = ["Next.js", "React", "TypeScript", "Tailwind", "Supabase"];

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-32">
      {/* Availability badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Available for projects
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Building modern{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-accent via-purple-400 to-blue-400 bg-clip-text text-transparent">
              SaaS interfaces
            </span>
            <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-accent via-purple-400 to-blue-400" />
          </span>
          <br />
          & product-focused web experiences.
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        Frontend product developer crafting premium interfaces with modern tech.
        I turn complex problems into clean, conversion-focused digital
        experiences.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <a
          href="#projects"
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-accent px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-accent/90"
        >
          <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,35%,rgba(255,255,255,0.1),55%,transparent)] translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          View Projects
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-card-hover hover:border-accent/30"
        >
          Contact Me
          <Sparkles className="h-4 w-4 text-accent" />
        </a>
      </motion.div>

      {/* Tech stack chips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="mt-14 flex flex-wrap items-center justify-center gap-3"
      >
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-accent/30 hover:text-accent"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-accent/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
