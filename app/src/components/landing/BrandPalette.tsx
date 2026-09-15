"use client";

import React from "react";
import Image from "next/image";
import { NexoraWordmark } from "./NexoraWordmark";
import styles from "./Landing.module.css";

const swatches = [
  { hex: "#08061A", color: "#08061A" },
  { hex: "#6F46FF", color: "#6F46FF" },
  { hex: "#B794FF", color: "#B794FF" },
  { hex: "#F4F1FF", color: "#F4F1FF" },
];

export function BrandPalette() {
  return (
    <footer className={styles.paletteSection}>
      {/* Background Jagged Mountain Peaks on Right */}
      <div className={styles.mountainBackground}>
        <Image
          src="/landing/mountain-peak.jpg"
          alt="Nexora Rocky Peaks"
          fill
          sizes="(max-width: 1024px) 100vw, 700px"
          className={styles.mountainImage}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.paletteLayout}>
          {/* Left: Swatches */}
          <div className={styles.paletteLeft}>
            <div className={styles.sectionLabel} style={{ marginBottom: "0.75rem" }}>
              BRAND PALETTE
            </div>
            <div className={styles.swatchesRow}>
              {swatches.map((item) => (
                <div key={item.hex} className={styles.swatchItem}>
                  <div
                    className={styles.swatchCircle}
                    style={{ backgroundColor: item.color }}
                  />
                  <span className={styles.swatchHex}>{item.hex}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Built for a more open tomorrow + Nexora */}
          <div className={styles.paletteCenter}>
            <div className={styles.paletteCenterTitle}>
              BUILT FOR A<br />
              MORE OPEN TOMORROW
            </div>
            <span className={styles.decorLine} style={{ margin: "0.25rem 0 0.75rem" }} />
            <NexoraWordmark size="sm" glow={true} />
          </div>

          {/* Right: Vertical stacked brand pillars */}
          <div className={styles.paletteRight}>
            <span>PRIVACY</span>
            <span>UTILITY</span>
            <span>OWNERSHIP</span>
            <span>HUMANITY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
