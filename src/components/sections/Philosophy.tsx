"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Smartphone,
  Target,
  Palette,
  Gauge,
  Globe,
} from "lucide-react";

const principles = [
  {
    icon: LayoutDashboard,
    title: "Clean Interfaces",
    description:
      "Every pixel has a purpose. I believe in minimal design that communicates clearly.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description:
      "Great experiences start small. I design for mobile first, then scale up seamlessly.",
  },
  {
    icon: Target,
    title: "Conversion Clarity",
    description:
      "Every interface should guide users naturally toward their goal — no friction, no confusion.",
  },
  {
    icon: Palette,
    title: "Modern SaaS UX",
    description:
      "Premium interactions, thoughtful micro-animations, and interfaces that feel alive.",
  },
  {
    icon: Gauge,
    title: "Performance First",
    description:
      "Speed is a feature. Every product I build is optimized for instant load times.",
  },
  {
    icon: Globe,
    title: "Product Focus",
    description:
      "I build products, not just pages. Every decision is made with the end-user in mind.",
  },
];

export function Philosophy() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-accent">
          Design Philosophy
        </span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          How I Approach Design
        </h2>
        <p className="mt-4 text-muted-foreground">
          Principles that guide every product I build.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/20 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.08)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-accent transition-colors group-hover:bg-accent/10">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-medium text-foreground">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
