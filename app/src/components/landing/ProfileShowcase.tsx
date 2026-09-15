"use client";

import React from "react";
import Image from "next/image";
import { NexoraMonogram } from "./NexoraMonogram";
import { NexoraWordmark } from "./NexoraWordmark";
import styles from "./Landing.module.css";

export function ProfileShowcase() {
  return (
    <section className={styles.showcaseSection}>
      <div className={styles.container}>
        <div className={styles.showcaseGrid}>
          {/* LEFT: PROFILE ICON CARD */}
          <div>
            <div className={styles.columnHeader}>PROFILE ICON</div>
            <div className={styles.profileCard}>
              <div className={styles.profileRingOuter}>
                <div className={styles.profileRingGlow} />
                <div className={styles.profileMonogram}>
                  <NexoraMonogram size={130} showBeam={false} priority={false} />
                </div>
              </div>
              <NexoraWordmark size="sm" glow={true} />
            </div>
          </div>

          {/* RIGHT: X / TWITTER BANNER PREVIEW */}
          <div>
            <div className={styles.columnHeader}>X / TWITTER BANNER PREVIEW</div>
            <div className={styles.bannerCard}>
              {/* Banner Background Image */}
              <div className={styles.bannerImageWrap}>
                <Image
                  src="/landing/banner-rift.jpg"
                  alt="Nexora Cosmic Rift Banner"
                  fill
                  sizes="(max-width: 1200px) 100vw, 850px"
                  className={styles.bannerImage}
                />
              </div>

              {/* Overlay Content */}
              <div className={styles.bannerOverlay}>
                <div className={styles.bannerLeft}>
                  <NexoraWordmark size="md" glow={true} />
                  <div className={styles.bannerTitle}>
                    PRIVATE AUTHORIZATION<br />
                    LAYER FOR WEB3
                  </div>
                  <span className={styles.decorLine} />
                  <div className={styles.bannerPillars}>
                    PRIVACY<br />
                    TRUST<br />
                    FREEDOM<br />
                    FOR A BRIGHTER WEB3
                  </div>
                </div>

                <div className={styles.bannerRight}>
                  <span>SAME</span>
                  <span>INTERNET.</span>
                  <span>MORE</span>
                  <span>HUMAN.</span>
                  <span className={styles.decorLine} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
