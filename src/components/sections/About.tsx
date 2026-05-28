"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Product Thinking",
    description:
      "I don't just write code — I think about user flows, conversion, and the business impact of every interface decision.",
  },
  {
    icon: Code2,
    title: "Modern Frontend",
    description:
      "Deep expertise in React, Next.js, TypeScript, and modern CSS. I build interfaces that feel premium and performant.",
  },
  {
    icon: Rocket,
    title: "SaaS Builder",
    description:
      "From auth to payments to responsive dashboards — I build full product experiences that look like funded startups.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto max-w-6xl px-6 py-28 sm:py-36"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-accent">
            About
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frontend engineer
            <br />
            with a product mindset.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            I specialize in building modern SaaS interfaces that users love. My
            focus is on creating clean, conversion-focused experiences that feel
            premium and performant.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Whether it&apos;s a landing page that converts, a dashboard that
            delights, or a full product experience — I bring the same standard
            of quality: modern, minimal, and meticulously crafted.
          </p>
        </motion.div>

        {/* Right: Highlights */}
        <div className="space-y-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent/20 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.08)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
