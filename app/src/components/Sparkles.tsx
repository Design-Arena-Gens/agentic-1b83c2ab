"use client";

import { useEffect, useRef } from "react";

export default function Sparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    const dpr = window.devicePixelRatio || 1;

    const particles = Array.from({ length: 26 }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      radius: Math.random() * 1.2 + 0.6,
      speed: Math.random() * 0.6 + 0.2,
      direction: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    const resize = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(164, 216, 255, ${particle.alpha})`;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        particle.x += Math.cos(particle.direction) * particle.speed;
        particle.y += Math.sin(particle.direction) * particle.speed;

        if (particle.x < 0 || particle.x > canvas.offsetWidth) {
          particle.direction = Math.PI - particle.direction;
        }
        if (particle.y < 0 || particle.y > canvas.offsetHeight) {
          particle.direction = -particle.direction;
        }
      });
      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="absolute left-1/2 top-16 -z-10 h-48 w-72 -translate-x-1/2">
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-80 mix-blend-screen"
      />
    </div>
  );
}
