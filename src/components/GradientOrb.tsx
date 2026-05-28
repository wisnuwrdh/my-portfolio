"use client";

import { useEffect, useRef } from "react";

export function GradientOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Primary glow
      const gradient1 = ctx.createRadialGradient(
        canvas.width * (0.5 + mouseX * 0.1 + Math.sin(time) * 0.05),
        canvas.height * (0.4 + mouseY * 0.1 + Math.cos(time * 0.7) * 0.05),
        0,
        canvas.width * (0.5 + mouseX * 0.1),
        canvas.height * (0.4 + mouseY * 0.1),
        canvas.width * 0.5
      );
      gradient1.addColorStop(0, "rgba(139, 92, 246, 0.08)");
      gradient1.addColorStop(0.5, "rgba(139, 92, 246, 0.02)");
      gradient1.addColorStop(1, "rgba(139, 92, 246, 0)");

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Secondary glow
      const gradient2 = ctx.createRadialGradient(
        canvas.width * (0.6 + Math.sin(time * 0.5) * 0.1),
        canvas.height * (0.7 + Math.cos(time * 0.8) * 0.05),
        0,
        canvas.width * (0.6 + Math.sin(time * 0.5) * 0.1),
        canvas.height * (0.7 + Math.cos(time * 0.8) * 0.05),
        canvas.width * 0.4
      );
      gradient2.addColorStop(0, "rgba(59, 130, 246, 0.05)");
      gradient2.addColorStop(0.5, "rgba(59, 130, 246, 0.015)");
      gradient2.addColorStop(1, "rgba(59, 130, 246, 0)");

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
