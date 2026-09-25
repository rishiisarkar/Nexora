"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Cpu, Globe, Lock, Shield, Sparkles, Terminal } from "lucide-react";
import { LandingNavbar } from "./LandingNavbar";
import { HeroVisual } from "./HeroVisual";
import { ProblemComparison } from "./ProblemComparison";
import { CoreCapabilities } from "./CoreCapabilities";
import { HowItWorksFlow } from "./HowItWorksFlow";
import { InteractiveZkDemo } from "./InteractiveZkDemo";
import { PrivacyArchitecture } from "./PrivacyArchitecture";
import { UseCasesGrid } from "./UseCasesGrid";
import { TechArchitecture } from "./TechArchitecture";
import { SecurityTrust } from "./SecurityTrust";
import { ProductShowcase } from "./ProductShowcase";
import { MidnightEcosystem } from "./MidnightEcosystem";
import { DifferentiatorMatrix } from "./DifferentiatorMatrix";
import { FaqAccordion } from "./FaqAccordion";
import { FinalCta } from "./FinalCta";
import { LandingFooter } from "./LandingFooter";
import styles from "./Landing.module.css";

const ecosystemItems = [
  { name: "Midnight Preprod", tag: "Layer 1 Privacy" },
  { name: "Compact DSL", tag: "ZK Smart Contracts" },
  { name: "zk-SNARKs", tag: "Zero-Knowledge Engine" },
  { name: "Lace Wallet", tag: "Midnight Connector" },
  { name: "1AM Wallet", tag: "Shielded Key Store" },
  { name: "Apache-2.0", tag: "Open Source Protocol" },
];

export function LandingPage() {
  return (
    <div className={styles.landingShell}>
      {/* Precision Cryptographic Ambient Grid & Noise Layer */}
      <div className={styles.ambientNoiseGrid} aria-hidden="true" />
      <div className={styles.celestialLightRay} aria-hidden="true" />
      <div className={styles.subtleRadialGlow} aria-hidden="true" />

      {/* Navigation */}
      <LandingNavbar />

      <main className={styles.mainContent}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            {/* Top Status Capsule */}
            <div className={styles.heroBadgeCapsule}>
              <span className={styles.pulseDotGreen} />
              <span className={styles.badgeCategory}>MIDNIGHT PREPROD</span>
              <span className={styles.badgeDivider}>/</span>
              <span className={styles.badgeText}>COMPACT ZK ACCESS CONTROL</span>
            </div>

            {/* Giant Hero Headline */}
            <h1 className={styles.heroHeadline}>
              Prove permission.<br />
              <span className={styles.headlineHighlight}>Not identity.</span>
            </h1>

            {/* Supporting Subtitle */}
            <p className={styles.heroSubtitle}>
              Nexora enables privacy-preserving credential verification with zero-knowledge proofs &mdash; letting users prove what they qualify for without exposing unnecessary personal information.
            </p>

            {/* Hero CTAs */}
            <div className={styles.heroCtasRow}>
              <Link href="/gate" className={styles.heroPrimaryBtn}>
                <span>Launch Nexora</span>
                <ArrowRight size={16} />
              </Link>
              <a href="#how-it-works" className={styles.heroSecondaryBtn}>
                <span>Explore How It Works</span>
              </a>
              <Link href="/admin" className={styles.heroOperatorLink}>
                <Terminal size={14} />
                <span>Operator Console</span>
                <ChevronRight size={13} />
              </Link>
            </div>

            {/* Custom Interactive Cryptographic Visual */}
            <div className={styles.heroVisualWrapper}>
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* TRUST & ECOSYSTEM BAR */}
        <section className={styles.trustBarSection}>
          <div className={styles.trustBarContainer}>
            <span className={styles.trustBarLabel}>
              BUILT FOR PRIVATE VERIFICATION ON MIDNIGHT
            </span>
            <div className={styles.trustEcosystemGrid}>
              {ecosystemItems.map((eco) => (
                <div key={eco.name} className={styles.trustItem}>
                  <strong className={styles.trustItemName}>{eco.name}</strong>
                  <span className={styles.trustItemTag}>{eco.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1. PROBLEM COMPARISON */}
        <ProblemComparison />

        {/* 2. CORE PROTOCOL PILLARS */}
        <CoreCapabilities />

        {/* 3. HOW IT WORKS 4-STEP FLOW */}
        <HowItWorksFlow />

        {/* 4. INTERACTIVE ZK DEMONSTRATION SANDBOX */}
        <InteractiveZkDemo />

        {/* 5. PRIVACY ARCHITECTURE & DUAL-STATE */}
        <PrivacyArchitecture />

        {/* 6. USE CASES GRID */}
        <UseCasesGrid />

        {/* 7. LIVE PRODUCT SHOWCASE */}
        <ProductShowcase />

        {/* 8. TECHNICAL ARCHITECTURE & DATA FLOW */}
        <TechArchitecture />

        {/* 9. SECURITY & CRYPTOGRAPHIC TRUST */}
        <SecurityTrust />

        {/* 10. BUILT ON MIDNIGHT ECOSYSTEM */}
        <MidnightEcosystem />

        {/* 11. DIFFERENTIATOR MATRIX */}
        <DifferentiatorMatrix />

        {/* 12. FAQ ACCORDION */}
        <FaqAccordion />

        {/* 13. FINAL CINEMATIC CTA */}
        <FinalCta />
      </main>

      {/* FOOTER */}
      <LandingFooter />
    </div>
  );
}
