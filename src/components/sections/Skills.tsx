"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiFramer,
} from "react-icons/si";
import { Sparkles } from "lucide-react";

const skills = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Supabase", icon: SiSupabase },
  { name: "Framer Motion", icon: SiFramer },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 mx-auto max-w-6xl px-6 py-28 sm:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-accent">
          Stack
        </span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Tools & Technologies
        </h2>
        <p className="mt-4 text-muted-foreground">
          Modern stack for modern products.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/20 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-muted-foreground transition-colors group-hover:text-accent">
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
        {/* AI workflow chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.5 }}
          whileHover={{ y: -4 }}
          className="col-span-full flex items-center justify-center gap-2 rounded-2xl border border-accent/20 bg-accent/[0.03] p-4 text-sm text-muted-foreground"
        >
          <Sparkles className="h-4 w-4 text-accent" />
          <span>
            AI-assisted workflow — shipping modern products faster with smart
            tooling.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
