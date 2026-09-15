"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { NexoraMonogram } from "./NexoraMonogram";
import { NexoraWordmark } from "./NexoraWordmark";
import styles from "./Landing.module.css";

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Background Cyber Visor Figure on Right */}
      <div className={styles.heroVisorContainer}>
        <Image
          src="/landing/hero-visor.jpg"
          alt="Nexora Futuristic Visor"
          fill
          priority
          className={styles.heroVisorImage}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.heroLayout}>
          {/* Top-Left Stacked Micro-Copy */}
          <div className={styles.heroTopLeft}>
            <span>PRIVACY</span>
            <span>POWERS</span>
            <span>A MORE</span>
            <span>OPEN INTERNET</span>
            <span className={styles.decorLine} />
          </div>

          {/* Right Side Stacked Micro-Copy */}
          <div className={styles.heroRightCopy}>
            <span>ACCESS</span>
            <span>WITHOUT</span>
            <span>EXPOSURE</span>
            <span className={styles.decorLine} />
          </div>

          {/* Center-Left Brand & Monogram Presentation */}
          <div className={styles.heroCenterBrand}>
            <div className={styles.monogramWrapper}>
              <NexoraMonogram size={260} showBeam={true} priority={true} />
            </div>

            <div className={styles.heroBrandWordmark}>
              <NexoraWordmark size="xl" glow={true} />
            </div>

            <p className={styles.heroSubtitle}>
              PROVE PERMISSION, NOT IDENTITY
            </p>

            {/* Subtle Functional Launch Controls */}
            <div className={styles.heroActions}>
              <Link href="/gate" className={styles.heroPrimaryBtn}>
                <span>Enter Gate</span>
                <ArrowRight size={15} />
              </Link>
              <Link href="/admin" className={styles.heroSecondaryBtn}>
                <Terminal size={14} />
                <span>Console</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
