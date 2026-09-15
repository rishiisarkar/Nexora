"use client";

import React from "react";
import Image from "next/image";

interface NexoraMonogramProps {
  className?: string;
  size?: number;
  showBeam?: boolean;
  priority?: boolean;
}

export function NexoraMonogram({
  className = "",
  size = 280,
  showBeam = true,
  priority = true,
}: NexoraMonogramProps) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
      }}
    >
      {/* Vertical light beam shooting upwards from the apex */}
      {showBeam && (
        <div
          style={{
            position: "absolute",
            bottom: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "3px",
            height: "700px",
            background:
              "linear-gradient(to top, rgba(183, 148, 255, 1) 0%, rgba(111, 70, 255, 0.8) 25%, rgba(111, 70, 255, 0.2) 75%, transparent 100%)",
            boxShadow:
              "0 0 16px 4px rgba(111, 70, 255, 0.8), 0 0 45px 12px rgba(183, 148, 255, 0.4)",
            pointerEvents: "none",
            zIndex: 1,
            opacity: 0.9,
          }}
        />
      )}

      {/* Atmospheric purple radial bloom behind the monogram */}
      <div
        style={{
          position: "absolute",
          inset: "-20%",
          background:
            "radial-gradient(circle, rgba(111, 70, 255, 0.45) 0%, rgba(111, 70, 255, 0.15) 50%, transparent 75%)",
          filter: "blur(24px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 3D Monogram Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 2,
          filter:
            "drop-shadow(0 0 28px rgba(111, 70, 255, 0.75)) drop-shadow(0 0 55px rgba(183, 148, 255, 0.35))",
        }}
      >
        <Image
          src="/landing/nexora-3d-logo.jpg"
          alt="Nexora Monogram"
          fill
          priority={priority}
          sizes={`${size}px`}
          style={{
            objectFit: "contain",
            mixBlendMode: "screen",
          }}
        />
      </div>
    </div>
  );
}
