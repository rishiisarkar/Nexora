"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  KeyRound,
  Shield,
  Star,
  Users,
  Verified,
} from "lucide-react";
import { useState } from "react";
import { LandingFooter } from "./LandingFooter";
import { LandingNavbar } from "./LandingNavbar";
import RotatingEmblem from "./RotatingEmblem";

export function LandingPage() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [selectedSchema, setSelectedSchema] = useState<string[]>(["income", "jurisdiction"]);
  const [isProving, setIsProving] = useState(false);
  const [proveProgress, setProveProgress] = useState(78);

  const handleCopyAddress = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const toggleSchema = (id: string) => {
    setSelectedSchema((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSimulateProve = () => {
    setIsProving(true);
    setProveProgress(15);
    const interval = setInterval(() => {
      setProveProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProving(false);
          return 100;
        }
        return prev + 17;
      });
    }, 120);
  };

  return (
    <div className="w-full min-h-screen bg-[#fcfbfa] text-[#1b1c1c] antialiased selection:bg-[#7dfabe]/40 selection:text-[#002113]">
      <LandingNavbar />

      <main className="w-full pt-16 bg-[#fcfbfa]">
        <div className="flex flex-col w-full">
          {/* ============================================================== */}
          {/* HERO SECTION - Minimalist Hero with hero.png background         */}
          {/* ============================================================== */}
          <section
            id="hero"
            className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
          >
            {/* ─────────────────────────────────────────────
      HERO BACKGROUND
  ───────────────────────────────────────────── */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/hero.png"
                alt="Nexora Zero-Knowledge Verification"
                fill
                priority
                quality={95}
                className="object-cover object-center select-none"
              />

              {/* Much lighter cinematic overlay — background stays visible */}
              <div className="absolute inset-0 bg-black/15" />

              {/* Soft readability gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

              {/* Subtle center glow — keeps the hero content separated */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 42%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.025) 28%, transparent 58%)",
                }}
              />

              {/* Bottom BLACK VIGNETTE — replaces the old white smoky fade */}
              <div
                className="absolute inset-x-0 bottom-0 h-[30%]"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.42) 65%, #000000 100%)",
                }}
              />

              {/* Very subtle side vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.22) 100%)",
                }}
              />
            </div>

            {/* ─────────────────────────────────────────────
      HERO CONTENT
  ───────────────────────────────────────────── */}
            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center pt-24 pb-36 sm:pt-28 sm:pb-40">

              {/* Premium eyebrow */}
              <div
                className="mb-7 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
                style={{
                  background: "rgba(0,0,0,0.20)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  boxShadow:
                    "0 8px 30px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                    style={{ background: "#ffffff" }}
                  />
                  <span
                    className="relative inline-flex h-1.5 w-1.5 rounded-full"
                    style={{ background: "#ffffff" }}
                  />
                </span>

                <span
                  className="text-[11px] sm:text-xs font-medium tracking-[0.14em] uppercase"
                  style={{ color: "rgba(255,255,255,0.82)" }}
                >
                  Privacy infrastructure, reimagined
                </span>
              </div>

              {/* ─────────────────────────────────────────────
        MAIN HEADLINE
    ───────────────────────────────────────────── */}
              <h1
                className="mx-auto w-full max-w-5xl text-center"
                style={{
                  fontFamily:
                    'Manrope, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: "clamp(2.4rem, 5vw, 4.75rem)",
                  lineHeight: 1.04,
                  fontWeight: 400,
                  letterSpacing: "-0.05em",
                  color: "#ffffff",
                  textShadow: "0 3px 28px rgba(0,0,0,0.2)",
                }}
              >
                <span className="block whitespace-nowrap">
                  Prove what matters.
                </span>

                <span
                  className="block whitespace-nowrap"
                  style={{ color: "rgba(255,255,255,0.58)" }}
                >
                  Reveal what’s necessary.
                </span>
              </h1>

              {/* ─────────────────────────────────────────────
        SUBTEXT
    ───────────────────────────────────────────── */}
              <p
                className="mx-auto mt-8 w-full max-w-4xl px-4 text-center"
                style={{
                  fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                  lineHeight: 1.6,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  color: "rgba(255,255,255,0.76)",
                  textShadow: "0 2px 16px rgba(0,0,0,0.35)",
                }}
              >
                <span className="block whitespace-nowrap">
                  Nexora turns credentials into privacy-preserving proofs, enabling secure verification
                </span>
                <span className="block whitespace-nowrap">
                  of access, eligibility, and trust without exposing your identity.
                </span>
              </p>

              {/* ─────────────────────────────────────────────
        PREMIUM CTA
    ───────────────────────────────────────────── */}
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">

                {/* Primary CTA */}
                <Link
                  href="/gate"
                  className="group relative inline-flex items-center gap-3 rounded-full px-5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                  style={{
                    background: "#ffffff",
                    color: "#080808",
                    boxShadow:
                      "0 10px 40px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    letterSpacing: "-0.015em",
                  }}
                >
                  <span>Experience Nexora</span>

                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5"
                    style={{
                      background: "#0a0a0a",
                      color: "#ffffff",
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M2.5 7h9M7.5 3.5 11 7l-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>

                {/* Secondary CTA */}
                <Link
                  href="#how-it-works"
                  className="group inline-flex items-center gap-2 rounded-full px-5 py-3 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(0,0,0,0.18)",
                    color: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                  }}
                >
                  <span>See how it works</span>

                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="opacity-60 transition-transform duration-300 group-hover:translate-y-0.5"
                  >
                    <path
                      d="M7 2.5v8M3.5 7 7 10.5 10.5 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              {/* Tiny trust line */}
              <div
                className="mt-8 flex items-center gap-2 text-[11px] tracking-wide"
                style={{
                  color: "rgba(255,255,255,0.48)",
                }}
              >
                <span>Zero-knowledge</span>
                <span className="h-0.5 w-0.5 rounded-full bg-white/40" />
                <span>Privacy-preserving</span>
                <span className="h-0.5 w-0.5 rounded-full bg-white/40" />
                <span>Built on Midnight</span>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* SECTION: THE PROBLEM (Side-by-Side Comparison)                */}
          {/* ============================================================== */}
          <section
            id="privacy"
            className="relative w-full pt-10 sm:pt-14 pb-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-b from-[#f6eee7] via-[#faf5f1] to-[#fbf9f8] border-b border-[#e9e8e7] overflow-hidden"
          >
            {/* Seamless continuing smoke merging completely with hero */}
            <div className="absolute inset-x-0 top-0 h-[480px] sm:h-[560px] pointer-events-none overflow-hidden z-0">
              {/* Dense upper warm mist wash matching hero base */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 110% 88% at 50% 0%, rgba(220, 172, 146, 0.85) 0%, rgba(232, 196, 174, 0.68) 35%, rgba(244, 220, 204, 0.38) 65%, transparent 100%)",
                }}
              />

              {/* Billowing cloud continuing on right */}
              <div
                className="absolute -top-24 right-[-5%] sm:right-[5%] w-[820px] h-[380px] rounded-full blur-[90px] sm:blur-[120px] opacity-90"
                style={{
                  background:
                    "radial-gradient(circle, rgba(210, 160, 134, 0.88) 0%, rgba(228, 190, 168, 0.58) 50%, transparent 80%)",
                }}
              />

              {/* Billowing cloud continuing on left */}
              <div
                className="absolute -top-24 left-[-5%] sm:left-[0%] w-[780px] h-[360px] rounded-full blur-[85px] sm:blur-[115px] opacity-85"
                style={{
                  background:
                    "radial-gradient(circle, rgba(222, 178, 154, 0.85) 0%, rgba(236, 204, 186, 0.52) 55%, transparent 80%)",
                }}
              />

              {/* Billowing center mist plume */}
              <div
                className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[740px] h-[300px] rounded-full blur-[75px] sm:blur-[105px] opacity-85"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(206, 154, 128, 0.78) 0%, rgba(226, 188, 166, 0.5) 60%, transparent 85%)",
                }}
              />

              {/* Atmospheric horizontal drifting veil */}
              <div
                className="absolute top-0 inset-x-0 h-[240px] opacity-55 blur-[50px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(235, 205, 190, 0.35) 0%, rgba(224, 188, 168, 0.65) 25%, rgba(212, 172, 148, 0.75) 50%, rgba(228, 198, 182, 0.65) 75%, rgba(235, 205, 190, 0.35) 100%)",
                }}
              />
            </div>

            <div className="relative z-10 max-w-[1240px] mx-auto">
              {/* ============================================================== */}
              {/* MIDNIGHT PREVIEW LIVE NODE STATUS PANEL                       */}
              {/* Centered at the top, preceding The Problem section             */}
              {/* ============================================================== */}
              <div className="w-full flex justify-center mb-14 sm:mb-18">
                <div className="w-full max-w-[1140px] rounded-2xl p-4 sm:px-6 sm:py-4.5 bg-[#faf5ef]/90 hover:bg-[#faf5ef]/95 backdrop-blur-xl border border-[#ded0c1]/80 shadow-[0_12px_40px_rgba(46,38,34,0.08)] transition-all">
                  {/* Primary Infrastructure Status Row */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-[#e9ded3]/80">
                    {/* Left: Node status + Block height + Latency */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 text-[13px]">
                      <div className="flex items-center gap-2 font-medium text-[#241d1a]">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1b8a5a] opacity-75 duration-1000" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1b8a5a]" />
                        </span>
                        <span>Midnight PREVIEW Live Node</span>
                      </div>

                      <span className="text-[#cbbeaf] hidden sm:inline" aria-hidden="true">|</span>

                      <div className="font-mono text-[12px] text-[#5c4f46] flex items-center gap-2">
                        <span>Block #1,065,601</span>
                        <span className="text-[#baa99b]" aria-hidden="true">·</span>
                        <span className="text-[#1b8a5a] font-medium">480ms Latency</span>
                      </div>
                    </div>

                    {/* Right: Verified Contract & Spec Badges */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-[12px]">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eee2d6]/75 border border-[#ddcfc1] font-mono text-[#2c231f]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1b8a5a]" />
                        <span>Verified Contract <span className="font-semibold text-[#181311]">f36db0fd...5b454e</span></span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[#5c4f46] px-2 py-0.5">
                        <span className="w-1 h-1 rounded-full bg-[#1b8a5a]" />
                        <span>Zero Docker Required for Clients</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[#5c4f46] px-2 py-0.5">
                        <span className="w-1 h-1 rounded-full bg-[#1b8a5a]" />
                        <span>WASM ZK Prover</span>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Row: Preprod Contract Address & Explorer CTA */}
                  <div className="pt-3 flex flex-col md:flex-row md:items-center justify-between gap-3 text-[12.5px]">
                    <div className="flex flex-wrap items-center gap-2 text-[#5c4f46] min-w-0">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#7a6a5e] font-semibold shrink-0">
                        Nexora Preprod Contract
                      </span>
                      <span className="text-[#cbbeaf] hidden sm:inline" aria-hidden="true">:</span>
                      <code className="font-mono text-[12px] text-[#241d1a] bg-[#f0e4d9]/85 px-3 py-1 rounded-md border border-[#decfc1] select-all break-all sm:break-normal">
                        0xf36db0fda42e4c3b474bdd06fc72725670ab3ebb8e089f9923bf83ab855b454e
                      </code>
                      <button
                        type="button"
                        onClick={() => handleCopyAddress("0xf36db0fda42e4c3b474bdd06fc72725670ab3ebb8e089f9923bf83ab855b454e")}
                        className="p-1 rounded text-[#7c6d62] hover:text-[#181311] hover:bg-[#eadecc]/70 transition-colors"
                        title="Copy contract address"
                        aria-label="Copy contract address"
                      >
                        {copiedAddress ? <Check size={13} className="text-[#1b8a5a]" /> : <Copy size={13} />}
                      </button>
                    </div>

                    <a
                      href="https://preprod.midnightexplorer.com/contracts/f36db0fda42e4c3b474bdd06fc72725670ab3ebb8e089f9923bf83ab855b454e"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#2e2622] hover:text-[#000] shrink-0 transition-colors self-start md:self-auto"
                    >
                      <span>View Contract Explorer</span>
                      <ArrowRight size={13} className="transition-transform duration-150 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <span className="font-mono text-[12px] text-[#5f5e5e] tracking-wider uppercase mb-2 block font-semibold">
                  THE PROBLEM
                </span>
                <h2 className="text-[32px] md:text-[38px] font-semibold text-[#1b1c1c] tracking-tight">
                  Verification shouldn&apos;t require full disclosure.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Traditional Over-Exposure Card */}
                <div className="bg-white border border-[#e4e2e2] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#f0eae3] mb-4">
                      <span className="text-[18px] font-semibold text-[#1b1c1c]">Traditional Verification</span>
                      <span className="font-mono text-[12px] text-[#ba1a1a] font-medium px-2.5 py-0.5 bg-[#ffdad6]/60 rounded-md">
                        Over-Exposed
                      </span>
                    </div>

                    <p className="text-[14px] text-[#5f5e5e] mb-5">
                      Current systems require sending raw database rows or identity document scans over the wire.
                    </p>

                    <div className="bg-[#f5f3f3] rounded-xl p-4 space-y-2.5 font-mono text-[13px] border border-[#e4e2e2]/70 mb-6">
                      <div className="flex justify-between py-1 border-b border-[#e4e2e2]/40">
                        <span className="text-[#5f5e5e]">Full Name</span>
                        <span className="text-[#1b1c1c] font-medium">John Doe</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#e4e2e2]/40">
                        <span className="text-[#5f5e5e]">Age</span>
                        <span className="text-[#1b1c1c] font-medium">24</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#e4e2e2]/40">
                        <span className="text-[#5f5e5e]">Annual Income</span>
                        <span className="text-[#1b1c1c] font-medium">$80,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#e4e2e2]/40">
                        <span className="text-[#5f5e5e]">Home Address</span>
                        <span className="text-[#1b1c1c] font-medium truncate max-w-[180px]">
                          742 Evergreen Terr
                        </span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-[#5f5e5e]">National ID</span>
                        <span className="text-[#1b1c1c] font-medium">981-22-4829</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 py-2.5 px-3.5 rounded-xl bg-[#fff0ee] border border-[#ffdad6] text-[#ba1a1a] font-mono text-[12px]">
                    <AlertTriangle size={16} className="shrink-0 text-[#ba1a1a]" />
                    <span>Verifier receives full raw personal data. Centralized breach risk.</span>
                  </div>
                </div>

                {/* Nexora Masked Zero-Knowledge Card */}
                <div className="bg-white border-2 border-[#19a974]/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xs relative ring-1 ring-[#19a974]/20">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#f0eae3] mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[18px] font-semibold text-[#1b1c1c]">Nexora Verification</span>
                      </div>
                      <span className="font-mono text-[12px] text-[#006c48] font-medium px-2.5 py-0.5 bg-[#96f6c2]/35 rounded-md border border-[#19a974]/30">
                        Zero Knowledge
                      </span>
                    </div>

                    <p className="text-[14px] text-[#5f5e5e] mb-5">
                      Sensitive identifiers stay completely client-side. Only mathematical truth assertions are published.
                    </p>

                    <div className="bg-[#f5f3f3] rounded-xl p-4 space-y-2.5 font-mono text-[13px] border border-[#e4e2e2]/70 mb-6">
                      <div className="flex justify-between py-1 border-b border-[#e4e2e2]/40 items-center">
                        <span className="text-[#5f5e5e]">Full Name</span>
                        <span className="bg-[#1b1c1c]/15 rounded-md h-3.5 w-28" />
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#e4e2e2]/40 items-center">
                        <span className="text-[#5f5e5e]">Age</span>
                        <span className="bg-[#1b1c1c]/15 rounded-md h-3.5 w-16" />
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#e4e2e2]/40 items-center">
                        <span className="text-[#5f5e5e]">Annual Income</span>
                        <span className="bg-[#1b1c1c]/15 rounded-md h-3.5 w-24" />
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#e4e2e2]/40 items-center">
                        <span className="text-[#5f5e5e]">Home Address</span>
                        <span className="bg-[#1b1c1c]/15 rounded-md h-3.5 w-36" />
                      </div>
                      <div className="flex justify-between py-1 items-center">
                        <span className="text-[#5f5e5e]">National ID</span>
                        <span className="bg-[#1b1c1c]/15 rounded-md h-3.5 w-32" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between px-3.5 py-2 bg-[#fbf9f8] rounded-xl border border-[#e4e2e2]">
                      <span className="font-mono text-[12px] text-[#5f5e5e]">Proof Assertion:</span>
                      <span className="font-mono text-[12px] text-[#006c48] font-semibold flex items-center gap-1.5">
                        <CheckCircle2 size={15} />
                        Requirement satisfied
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 py-2.5 px-3.5 rounded-xl bg-[#eef8f3] border border-[#a3dfbe]/50 text-[#006c48] font-mono text-[12px]">
                      <Verified size={16} className="shrink-0 text-[#006c48]" />
                      <span>Only the required claim is mathematically proven. Sensitive data never leaves your environment.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* SECTION: HOW IT WORKS — Premium light editorial                 */}
          {/* ============================================================== */}
          <section
            id="how-it-works"
            className="relative w-full overflow-hidden"
            style={{ background: "#f8f7f5" }}
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div
                className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full opacity-[0.18]"
                style={{ background: "radial-gradient(circle, #c4b8ff 0%, transparent 70%)", filter: "blur(80px)" }}
              />
              <div
                className="absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-[0.14]"
                style={{ background: "radial-gradient(circle, #6ee7b7 0%, transparent 70%)", filter: "blur(80px)" }}
              />
            </div>

            <div className="relative z-10 mx-auto max-w-[1240px] px-6 py-28 lg:px-16">
              <div className="mb-20">
                <div
                  className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em]"
                  style={{
                    background: "rgba(124,111,255,0.08)",
                    border: "1px solid rgba(124,111,255,0.22)",
                    color: "#5b47e0",
                    fontFamily: "var(--font-geist, Geist, monospace)",
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7c6fff] animate-pulse" />
                  How it works
                </div>
                <h2
                  className="max-w-2xl leading-[1.06] tracking-tight"
                  style={{
                    fontFamily: "var(--font-manrope, Manrope, sans-serif)",
                    fontSize: "clamp(2rem, 4vw, 3.25rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    color: "#111118",
                  }}
                >
                  Three steps.{" "}
                  <span style={{ color: "rgba(17,17,24,0.38)" }}>
                    One private verification.
                  </span>
                </h2>
              </div>

              <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
                <div
                  className="absolute left-0 right-0 top-[52px] hidden h-px md:block"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(124,111,255,0.18) 20%, rgba(124,111,255,0.35) 50%, rgba(52,211,153,0.25) 80%, transparent 100%)",
                  }}
                />

                {/* Step 01 — Select */}
                <div
                  className="group relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e8e6f0",
                    boxShadow: "0 2px 16px rgba(124,111,255,0.06), 0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl text-sm font-bold"
                      style={{
                        background: "rgba(124,111,255,0.10)",
                        border: "1px solid rgba(124,111,255,0.22)",
                        color: "#5b47e0",
                        fontFamily: "var(--font-geist, monospace)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      01
                    </div>
                    <h3
                      className="text-xl font-semibold"
                      style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)", letterSpacing: "-0.025em", color: "#111118" }}
                    >
                      Select
                    </h3>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed" style={{ color: "#6b6880" }}>
                    Choose the credential requirement that needs to be verified without revealing peripheral attributes.
                  </p>
                  <div className="flex-1 rounded-xl p-4" style={{ background: "#f5f3fb", border: "1px solid #e4e0f5" }}>
                    <div
                      className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em]"
                      style={{ color: "#8b84a8", fontFamily: "var(--font-geist, monospace)" }}
                    >
                      Target Schema
                    </div>
                    <div className="space-y-2">
                      {[
                        { id: "income", label: "Income >= $75,000" },
                        { id: "jurisdiction", label: "Compliant Jurisdiction" },
                      ].map(({ id, label }) => (
                        <label
                          key={id}
                          onClick={() => toggleSchema(id)}
                          className="flex cursor-pointer items-center gap-3 rounded-lg p-2.5 transition-colors"
                          style={{
                            background: selectedSchema.includes(id) ? "rgba(124,111,255,0.10)" : "#ffffff",
                            border: `1px solid ${selectedSchema.includes(id) ? "rgba(124,111,255,0.28)" : "#e8e6f0"}`,
                          }}
                        >
                          <span
                            className="flex h-4 w-4 shrink-0 items-center justify-center rounded"
                            style={{
                              background: selectedSchema.includes(id) ? "#7c6fff" : "#ffffff",
                              border: `1px solid ${selectedSchema.includes(id) ? "#7c6fff" : "#d0ccee"}`,
                            }}
                          >
                            {selectedSchema.includes(id) && <Check size={10} strokeWidth={3} color="#fff" />}
                          </span>
                          <span
                            className="text-xs font-medium"
                            style={{
                              color: selectedSchema.includes(id) ? "#5b47e0" : "#6b6880",
                              fontFamily: "var(--font-geist, monospace)",
                            }}
                          >
                            {label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 02 — Prove */}
                <div
                  className="group relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e8e6f0",
                    boxShadow: "0 2px 20px rgba(124,111,255,0.10), 0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl text-sm font-bold"
                      style={{
                        background: "rgba(124,111,255,0.12)",
                        border: "1px solid rgba(124,111,255,0.28)",
                        color: "#5b47e0",
                        fontFamily: "var(--font-geist, monospace)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      02
                    </div>
                    <h3
                      className="text-xl font-semibold"
                      style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)", letterSpacing: "-0.025em", color: "#111118" }}
                    >
                      Prove
                    </h3>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed" style={{ color: "#6b6880" }}>
                    Generate a zero-knowledge proof locally inside your client runtime without exposing underlying identity details.
                  </p>
                  {/* Terminal card intentionally stays dark — authentic contrast */}
                  <div
                    className="flex-1 rounded-xl overflow-hidden"
                    style={{ background: "#1a1825", border: "1px solid rgba(124,111,255,0.22)" }}
                  >
                    <div
                      className="flex items-center justify-between px-4 py-2.5"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28ca41]" />
                      </div>
                      <span
                        className="text-[10px] font-medium tracking-wider"
                        style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-geist, monospace)" }}
                      >
                        zk-prover
                      </span>
                      <button
                        type="button"
                        onClick={handleSimulateProve}
                        disabled={isProving}
                        className="text-[10px] font-medium transition-colors"
                        style={{
                          color: isProving ? "rgba(52,211,153,0.5)" : "#34d399",
                          fontFamily: "var(--font-geist, monospace)",
                        }}
                      >
                        {isProving ? "computing…" : "▶ run"}
                      </button>
                    </div>
                    <div className="p-4 space-y-3" style={{ fontFamily: "var(--font-geist, monospace)" }}>
                      <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.38)" }}>
                        <span style={{ color: "#a89fff" }}>$</span> generate-zk-snark --circuit nexora
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px]">
                          <span style={{ color: "rgba(255,255,255,0.52)" }}>Generating ZK-SNARK…</span>
                          <span style={{ color: "#34d399", fontWeight: 600 }}>{proveProgress}%</span>
                        </div>
                        <div className="h-1 w-full overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.10)" }}>
                          <div
                            className="h-full rounded-full transition-all duration-200"
                            style={{ width: `${proveProgress}%`, background: "linear-gradient(90deg, #7c6fff, #34d399)" }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span style={{ color: "rgba(255,255,255,0.32)" }}>Proof ready:</span>
                        <span style={{ color: "#c4bcff" }}>0x7A82...92F</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 03 — Verify */}
                <div
                  className="group relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #cef0e4",
                    boxShadow: "0 2px 16px rgba(52,211,153,0.08), 0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl text-sm font-bold"
                      style={{
                        background: "rgba(52,211,153,0.10)",
                        border: "1px solid rgba(52,211,153,0.28)",
                        color: "#0d9066",
                        fontFamily: "var(--font-geist, monospace)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      03
                    </div>
                    <h3
                      className="text-xl font-semibold"
                      style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)", letterSpacing: "-0.025em", color: "#111118" }}
                    >
                      Verify
                    </h3>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed" style={{ color: "#6b6880" }}>
                    The verifier validates the cryptographic proof against consensus and receives only the verified boolean claim.
                  </p>
                  <div className="flex-1 rounded-xl p-4" style={{ background: "#f0fdf8", border: "1px solid #b6ecd8" }}>
                    <div
                      className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em]"
                      style={{ color: "#2da87a", fontFamily: "var(--font-geist, monospace)" }}
                    >
                      Consensus Output
                    </div>
                    <div className="flex items-center gap-3 rounded-lg p-3" style={{ background: "#e6faf3", border: "1px solid #aae8cc" }}>
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                        style={{ background: "rgba(52,211,153,0.18)" }}
                      >
                        <CheckCircle2 size={18} style={{ color: "#0d9066" }} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold" style={{ color: "#0d9066", fontFamily: "var(--font-geist, monospace)" }}>
                          Valid Proof
                        </div>
                        <div className="text-[11px]" style={{ color: "#2da87a" }}>
                          Claim Satisfied · 100% Cryptographic Guarantee
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* SECTION: INFRASTRUCTURE — Premium light pipeline                */}
          {/* ============================================================== */}
          <section
            id="infrastructure"
            className="relative w-full overflow-hidden"
            style={{ background: "#f2f0fb" }}
          >
            <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,111,255,0.35), rgba(52,211,153,0.3), transparent)" }} />
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 opacity-[0.20]"
                style={{ background: "radial-gradient(ellipse, #a5f3d8 0%, transparent 65%)", filter: "blur(60px)" }}
              />
            </div>

            <div className="relative z-10 mx-auto max-w-[1240px] px-6 py-28 lg:px-16">
              <div className="mb-20 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div
                    className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em]"
                    style={{
                      background: "rgba(52,211,153,0.12)",
                      border: "1px solid rgba(52,211,153,0.28)",
                      color: "#0d9066",
                      fontFamily: "var(--font-geist, monospace)",
                    }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#34d399] animate-pulse" />
                    Infrastructure
                  </div>
                  <h2
                    className="max-w-2xl leading-[1.06] tracking-tight"
                    style={{
                      fontFamily: "var(--font-manrope, Manrope, sans-serif)",
                      fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.04em",
                      color: "#111118",
                    }}
                  >
                    Built for{" "}
                    <span style={{ color: "rgba(17,17,24,0.38)" }}>private computation.</span>
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed lg:text-right" style={{ color: "#6b6880" }}>
                  Nexora is built on Midnight to enable privacy-preserving verification while keeping unnecessary information out of the verification flow.
                </p>
              </div>

              <div className="relative">
                <div
                  className="absolute left-0 right-0 top-[66px] hidden h-px lg:block"
                  style={{ background: "linear-gradient(90deg, rgba(124,111,255,0.4) 0%, rgba(52,211,153,0.4) 100%)" }}
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      layer: "01", title: "Nexora SDK",
                      desc: "Client application & schema integration layer.",
                      tag: "Browser / Edge",
                      accent: "#5b47e0", accentBg: "rgba(124,111,255,0.08)", accentBorder: "rgba(124,111,255,0.22)",
                      cardBg: "#ffffff", cardBorder: "#e4e0f5", highlight: false,
                    },
                    {
                      layer: "02", title: "ZK Proof Generation",
                      desc: "Client-side execution generating succinct zk-SNARKs.",
                      tag: "Zero-Knowledge Circuit",
                      accent: "#6b54f0", accentBg: "rgba(107,84,240,0.08)", accentBorder: "rgba(107,84,240,0.20)",
                      cardBg: "#ffffff", cardBorder: "#e4e0f5", highlight: false,
                    },
                    {
                      layer: "03", title: "Midnight Blockchain",
                      desc: "Private smart contract execution & distributed state verification.",
                      tag: "Consensus Engine",
                      accent: "#0d9066", accentBg: "rgba(52,211,153,0.10)", accentBorder: "rgba(52,211,153,0.28)",
                      cardBg: "#f0fdf8", cardBorder: "#b6ecd8", highlight: true,
                    },
                    {
                      layer: "04", title: "Verified Claim",
                      desc: "Boolean proof result received by relying party.",
                      tag: "Satisfied Claim Only",
                      accent: "#0d9066", accentBg: "rgba(52,211,153,0.08)", accentBorder: "rgba(52,211,153,0.20)",
                      cardBg: "#ffffff", cardBorder: "#cef0e4", highlight: false,
                    },
                  ].map(({ layer, title, desc, tag, accent, accentBg, accentBorder, cardBg, cardBorder, highlight }) => (
                    <div
                      key={layer}
                      className="group relative flex flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: cardBg,
                        border: `1px solid ${cardBorder}`,
                        boxShadow: highlight
                          ? "0 2px 20px rgba(52,211,153,0.12), 0 1px 4px rgba(0,0,0,0.04)"
                          : "0 2px 12px rgba(124,111,255,0.06), 0 1px 4px rgba(0,0,0,0.03)",
                      }}
                    >
                      <div className="mb-5 flex items-center gap-3">
                        <div
                          className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl text-xs font-bold tracking-wider"
                          style={{ background: accentBg, border: `1px solid ${accentBorder}`, color: accent, fontFamily: "var(--font-geist, monospace)" }}
                        >
                          {layer}
                        </div>
                        <div
                          className="absolute -right-3 top-[52px] z-20 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full lg:flex"
                          style={{ background: "#f2f0fb", border: "1px solid #d8d4f0", color: "#9990c0", fontSize: "10px" }}
                        >
                          →
                        </div>
                      </div>
                      <div
                        className="mb-1 text-[15px] font-semibold"
                        style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)", letterSpacing: "-0.02em", color: "#111118" }}
                      >
                        {title}
                      </div>
                      <p className="mb-5 text-[12px] leading-relaxed" style={{ color: "#6b6880" }}>{desc}</p>
                      <div className="mt-auto">
                        <span
                          className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                          style={{ background: accentBg, border: `1px solid ${accentBorder}`, color: accent, fontFamily: "var(--font-geist, monospace)" }}
                        >
                          <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
                          {tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>




          {/* ============================================================== */}
          {/* SECTION: PRIVACY PRINCIPLE (Editorial Statement Block)         */}
          {/* ============================================================== */}
          <section className="w-full py-28 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#fcfbfa]">
            <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <span className="font-mono text-[12px] text-[#5f5e5e] tracking-widest uppercase mb-6 font-semibold">
                CORE PHILOSOPHY
              </span>
              <h2 className="text-[36px] md:text-[48px] lg:text-[54px] font-semibold tracking-[-0.035em] text-[#1b1c1c] max-w-3xl leading-[1.1] mb-8">
                The verifier learns the result. Not everything behind it.
              </h2>
              <p className="text-[18px] md:text-[20px] text-[#5f5e5e] max-w-2xl leading-relaxed">
                Nexora is designed around selective disclosure — prove the requirement while keeping the underlying credential private.
              </p>
            </div>
          </section>

          {/* ============================================================== */}
          {/* SECTION: FINAL CTA                                             */}
          {/* ============================================================== */}
          <section className="w-full pb-24 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#fcfbfa]">
            <div className="max-w-[840px] mx-auto bg-white border border-[#e4e2e2] rounded-3xl p-10 md:p-14 text-center shadow-sm">
              <h2 className="text-[30px] md:text-[36px] font-semibold text-[#1b1c1c] mb-3 tracking-tight">
                Start verifying privately.
              </h2>
              <p className="text-[16px] text-[#5f5e5e] mb-8 max-w-md mx-auto">
                Experience Nexora&apos;s privacy-preserving verification flow built on zero-knowledge architecture.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3.5">
                <Link
                  href="/admin"
                  className="h-[42px] inline-flex items-center gap-2 px-6 rounded-xl bg-[#2e2622] hover:bg-[#181311] text-white font-medium text-[14px] transition-colors shadow-xs active:scale-[0.98]"
                >
                  <span>Try Nexora</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href="https://github.com/rishiisarkar/Nexora"
                  target="_blank"
                  rel="noreferrer"
                  className="h-[42px] inline-flex items-center px-6 rounded-xl bg-white border border-[#e4e2e2] text-[#1b1c1c] font-medium text-[14px] hover:bg-[#f6f4f2] transition-colors shadow-xs"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
