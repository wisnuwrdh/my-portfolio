"use client";

import { GradientOrb } from "@/components/GradientOrb";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <GradientOrb />
      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Philosophy />
        <Contact />
      </main>
    </>
  );
}
