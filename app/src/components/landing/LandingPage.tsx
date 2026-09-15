"use client";

import React, { useEffect, useRef } from "react";
import { LandingNavbar } from "./LandingNavbar";
import { HeroSection } from "./HeroSection";
import { ProfileShowcase } from "./ProfileShowcase";
import { SocialPostsGrid } from "./SocialPostsGrid";
import { BrandPalette } from "./BrandPalette";
import styles from "./Landing.module.css";

function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle field
    const numParticles = 40;
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.2 + 0.05,
      angle: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += Math.sin(p.angle) * 0.1;
        p.angle += 0.01;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(183, 148, 255, ${p.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#6F46FF";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.ambientCanvas} />;
}

export function LandingPage() {
  return (
    <div className={styles.landingShell}>
      <AmbientBackground />
      <LandingNavbar />
      <main>
        <HeroSection />
        <ProfileShowcase />
        <SocialPostsGrid />
        <BrandPalette />
      </main>
    </div>
  );
}
