import React from "react";

interface NexoraWordmarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  glow?: boolean;
}

export function NexoraWordmark({ className = "", size = "lg", glow = true }: NexoraWordmarkProps) {
  const dimensions = {
    sm: { width: 140, height: 22 },
    md: { width: 220, height: 32 },
    lg: { width: 340, height: 44 },
    xl: { width: 440, height: 56 },
  }[size];

  return (
    <svg
      viewBox="0 0 440 50"
      width={dimensions.width}
      height={dimensions.height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        display: "inline-block",
        filter: glow ? "drop-shadow(0 0 16px rgba(111, 70, 255, 0.45))" : undefined,
        maxWidth: "100%",
        height: "auto",
      }}
      aria-label="NEXORA"
      role="img"
    >
      {/* N */}
      <path
        d="M6 42V8L46 42V8"
        stroke="#F4F1FF"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* E */}
      <path
        d="M92 8H128M92 25H120M92 42H128M92 8V42"
        stroke="#F4F1FF"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* X */}
      <path
        d="M170 8L208 42M208 8L170 42"
        stroke="#F4F1FF"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* O */}
      <rect
        x="248"
        y="8"
        width="40"
        height="34"
        rx="6"
        stroke="#F4F1FF"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* R */}
      <path
        d="M328 42V8H354C364 8 370 13 370 20C370 27 364 31 354 31H328M352 31L370 42"
        stroke="#F4F1FF"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* A (Futuristic inverted chevron / lambda without crossbar) */}
      <path
        d="M400 42L418 8L436 42"
        stroke="#F4F1FF"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
