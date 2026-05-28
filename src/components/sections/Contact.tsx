"use client";

import { motion } from "framer-motion";
import { Mail, GitBranch, X, ArrowRight } from "lucide-react";

const links = [
  {
    label: "Email",
    href: "mailto:hello@example.com",
    icon: Mail,
    description: "Let's talk about your next project",
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: GitBranch,
    description: "Open source and side projects",
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com",
    icon: X,
    description: "Thoughts on design and development",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-4xl px-6 py-28 sm:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-border bg-card p-10 text-center sm:p-16"
      >
        <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-accent">
          Get in Touch
        </span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s build something modern.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Have a project in mind or just want to connect? I&apos;m always open
          to discussing new opportunities.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center gap-3 rounded-xl border border-border bg-surface px-5 py-3.5 text-left transition-all hover:border-accent/30 hover:bg-accent/[0.03] sm:w-auto"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors group-hover:text-accent">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div className="flex-1 sm:flex-none">
                  <span className="block text-sm font-medium text-foreground">
                    {link.label}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {link.description}
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            );
          })}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} &mdash; Built with Next.js, Tailwind
          CSS &amp; Framer Motion
        </p>
      </motion.footer>
    </section>
  );
}
