"use client";

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
          {/* HERO SECTION - Warm studio gradient with titanium card photo  */}
          {/* ============================================================== */}
          <section
            id="product"
            className="relative w-full min-h-[600px] lg:min-h-[660px] flex items-center pt-8 pb-16 sm:pb-20 lg:pt-12 lg:pb-24 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden bg-gradient-to-b from-[#fbf8f5] via-[#f7f2ed] to-[#f6eee7]"
          >
            {/* Soft warm diffused ambient glow */}
            <div className="absolute top-1/4 right-[10%] w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#f2dfcf]/45 via-[#ecd4c2]/35 to-transparent blur-3xl pointer-events-none -z-0" />
            <div className="absolute -bottom-10 left-10 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#f3e5d8]/40 to-transparent blur-3xl pointer-events-none -z-0" />

            {/* ============================================================== */}
            {/* Rich dark cream blurry smoke effect merging into next section  */}
            {/* ============================================================== */}
            <div className="absolute inset-x-0 bottom-0 h-[520px] sm:h-[620px] pointer-events-none overflow-hidden z-0">
              {/* Wide ambient base smoke glow extending directly down */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 110% 95% at 50% 100%, rgba(220, 172, 146, 0.88) 0%, rgba(232, 196, 174, 0.72) 35%, rgba(244, 220, 204, 0.45) 65%, transparent 100%)",
                }}
              />

              {/* Billowing smoke cloud 1: Warm terracotta-cream mist under right hand/card */}
              <div
                className="absolute -bottom-16 right-[-5%] sm:right-[5%] w-[820px] h-[440px] rounded-full blur-[90px] sm:blur-[120px] opacity-95"
                style={{
                  background:
                    "radial-gradient(circle, rgba(210, 160, 134, 0.92) 0%, rgba(228, 190, 168, 0.68) 50%, transparent 80%)",
                }}
              />

              {/* Billowing smoke cloud 2: Soft dark cream mist under left stats and watermark */}
              <div
                className="absolute -bottom-20 left-[-5%] sm:left-[0%] w-[780px] h-[420px] rounded-full blur-[85px] sm:blur-[115px] opacity-90"
                style={{
                  background:
                    "radial-gradient(circle, rgba(222, 178, 154, 0.9) 0%, rgba(236, 204, 186, 0.65) 55%, transparent 80%)",
                }}
              />

              {/* Billowing smoke cloud 3: Deep warm peach-cream core smoke puff in center */}
              <div
                className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[740px] h-[340px] rounded-full blur-[75px] sm:blur-[105px] opacity-90"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(206, 154, 128, 0.85) 0%, rgba(226, 188, 166, 0.58) 60%, transparent 85%)",
                }}
              />

              {/* Wispy upper smoke tendrils rising up towards stats & Nexora text */}
              <div
                className="absolute bottom-[100px] left-[5%] w-[620px] h-[240px] rounded-full blur-[70px] opacity-65"
                style={{
                  background: "radial-gradient(circle, rgba(230, 195, 175, 0.75) 0%, transparent 75%)",
                }}
              />

              {/* Wispy upper smoke tendrils rising up towards the card */}
              <div
                className="absolute bottom-[90px] right-[5%] w-[580px] h-[220px] rounded-full blur-[65px] opacity-70"
                style={{
                  background: "radial-gradient(circle, rgba(226, 188, 168, 0.8) 0%, transparent 75%)",
                }}
              />

              {/* Atmospheric horizontal drifting mist overlay */}
              <div
                className="absolute bottom-0 inset-x-0 h-[280px] opacity-65 blur-[50px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(235, 205, 190, 0.45) 0%, rgba(224, 188, 168, 0.75) 25%, rgba(212, 172, 148, 0.85) 50%, rgba(228, 198, 182, 0.75) 75%, rgba(235, 205, 190, 0.45) 100%)",
                }}
              />
            </div>

            {/* Clearly visible Nexora Typography Watermark positioned above smoke */}
            <div
              className="absolute -bottom-8 sm:-bottom-8 left-4 sm:left-8 text-[140px] sm:text-[190px] md:text-[230px] font-bold tracking-tighter text-[#2a1a12]/[0.10] select-none pointer-events-none z-[2] font-sans leading-none"
              aria-hidden="true"
            >
              Nexora
            </div>

            <div className="relative z-10 max-w-[1240px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Copy, Capsule Pill, Input Bar, Trust Social Proof */}
              <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start pr-0 lg:pr-6">
                {/* Badge Pill */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1e6dc]/80 border border-[#e5d4c5] text-[#6b584d] font-mono text-[12px] font-medium tracking-wide shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#006c48] animate-pulse" />
                    Zero-Knowledge Verification
                  </span>
                </div>

                {/* Reference styled Headline with inline interactive capsule badge */}
                <h1 className="text-[44px] sm:text-[58px] md:text-[66px] lg:text-[72px] font-medium tracking-[-0.04em] text-[#241d1a] leading-[1.04] mb-6">
                  The proof you
                  <br className="hidden sm:inline" /> will trust
                  {/* Inline Badge capsule matching Stitch reference */}
                  <span className="inline-flex items-center align-middle ml-3 px-2.5 py-1.5 rounded-full bg-white/95 border border-[#e5dcd4] shadow-sm gap-1.5 -translate-y-1">
                    <span className="w-6 h-6 rounded-full bg-[#2e2622] flex items-center justify-center text-white shadow-xs">
                      <KeyRound size={13} />
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[#eadecc] flex items-center justify-center text-[#5c4a3e]">
                      <Shield size={13} />
                    </span>
                  </span>
                </h1>

                <p className="text-[17px] md:text-[19px] text-[#6e645e] leading-relaxed max-w-[520px] mb-8 font-normal">
                  Zero-knowledge cryptographic cards and privacy verification. Prove claims instantly without
                  exposing credentials.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
                  <Link
                    href="/gate"
                    className="group h-[48px] px-6 rounded-xl bg-[#2e2622] hover:bg-[#181311] text-white font-medium text-[15px] transition-all duration-200 flex items-center justify-center gap-2.5 shadow-[0_2px_12px_rgba(46,38,34,0.12)] hover:shadow-[0_4px_16px_rgba(46,38,34,0.22)] active:scale-[0.98]"
                  >
                    <span>Try the live demo</span>
                    <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/admin"
                    className="h-[48px] px-6 rounded-xl bg-white/90 hover:bg-white text-[#2e2622] hover:text-[#181311] border border-[#e5d9ce] hover:border-[#cfc1b3] font-medium text-[15px] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_2px_8px_rgba(46,38,34,0.04)] hover:shadow-[0_4px_14px_rgba(46,38,34,0.08)] active:scale-[0.98]"
                  >
                    <span>Open operator console</span>
                  </Link>
                </div>

                {/* Trust Metrics / Social Proof matching attached reference */}
                <div className="flex items-center gap-6 sm:gap-8 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#f1e7dd]/90 flex items-center justify-center text-[#55463c] shrink-0 border border-[#e5d7ca]/60 shadow-xs">
                      <Users size={17} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[16px] font-semibold text-[#241d1a] leading-tight">70+</span>
                      <span className="text-[12px] text-[#7c716a]">Verified preprod users</span>
                    </div>
                  </div>

                  <div className="h-7 w-[1px] bg-[#e4dad0]" />

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#f1e7dd]/90 flex items-center justify-center text-[#55463c] shrink-0 border border-[#e5d7ca]/60 shadow-xs">
                      <Star size={17} className="fill-[#55463c]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[16px] font-semibold text-[#241d1a] leading-tight">4.8+</span>
                      <span className="text-[12px] text-[#7c716a]">Ratings on TP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 3D Metallic Cryptographic Hardware Emblem */}
              <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
                <div className="relative w-full max-w-[530px] sm:max-w-[600px] lg:max-w-[700px] flex items-center justify-center">
                  {/* Radiant copper-amber studio backdrop glow */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] sm:w-[560px] h-[440px] sm:h-[560px] rounded-full blur-[85px] sm:blur-[115px] pointer-events-none -z-0 opacity-85"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(224, 105, 30, 0.48) 0%, rgba(185, 75, 18, 0.28) 45%, rgba(145, 55, 12, 0.12) 70%, transparent 85%)",
                    }}
                  />

                  {/* 3D Metallic Emblem Asset (Smooth 360° Horizontal Rotation) */}
                  <div className="relative z-10 w-full flex items-center justify-center">
                    <RotatingEmblem />
                  </div>
                </div>
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
                        <span>Verified Contract <span className="font-semibold text-[#181311]">0794f000...f56123</span></span>
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
                        0xa6fb686b5fd483e86b8010eaa3cbaa28f2a00d16dfe9097b2130e82f1a8add19
                      </code>
                      <button
                        type="button"
                        onClick={() => handleCopyAddress("0xa6fb686b5fd483e86b8010eaa3cbaa28f2a00d16dfe9097b2130e82f1a8add19")}
                        className="p-1 rounded text-[#7c6d62] hover:text-[#181311] hover:bg-[#eadecc]/70 transition-colors"
                        title="Copy contract address"
                        aria-label="Copy contract address"
                      >
                        {copiedAddress ? <Check size={13} className="text-[#1b8a5a]" /> : <Copy size={13} />}
                      </button>
                    </div>

                    <a
                      href="https://explorer.1am.xyz/contract/a6fb686b5fd483e86b8010eaa3cbaa28f2a00d16dfe9097b2130e82f1a8add19"
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
          {/* SECTION: HOW IT WORKS (Three Steps, One Private Verification)  */}
          {/* ============================================================== */}
          <section id="how-it-works" className="w-full py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#fcfbfa]">
            <div className="max-w-[1240px] mx-auto">
              <div className="mb-12">
                <span className="font-mono text-[12px] text-[#5f5e5e] tracking-wider uppercase mb-2 block font-semibold">
                  HOW IT WORKS
                </span>
                <h2 className="text-[32px] md:text-[38px] font-semibold text-[#1b1c1c] tracking-tight">
                  Three steps. One private verification.
                </h2>
              </div>

              {/* Step Timeline Grid */}
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Connecting Line for Desktop */}
                <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-[#e4e2e2] z-0" />

                {/* Step 01: Select */}
                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#e4e2e2] flex items-center justify-center font-mono text-[14px] font-semibold text-[#1b1c1c] shadow-xs">
                      01
                    </div>
                    <h3 className="text-[19px] font-semibold text-[#1b1c1c]">Select</h3>
                  </div>

                  <p className="text-[14px] text-[#5f5e5e] mb-6 leading-relaxed">
                    Choose the credential requirement that needs to be verified without revealing peripheral attributes.
                  </p>

                  <div className="bg-white border border-[#e4e2e2] rounded-2xl p-4 shadow-xs flex-1">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e] mb-3 font-semibold">
                      Target Schema
                    </div>
                    <div className="space-y-2">
                      <label
                        onClick={() => toggleSchema("income")}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#f5f3f3] border border-[#e4e2e2]/60 cursor-pointer hover:bg-[#efece9] transition-colors"
                      >
                        <span
                          className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${selectedSchema.includes("income")
                            ? "bg-[#1b1c1c] text-white"
                            : "border border-[#a89b91] bg-white"
                            }`}
                        >
                          {selectedSchema.includes("income") && <Check size={11} strokeWidth={3} />}
                        </span>
                        <span className="font-mono text-[12px] text-[#1b1c1c] font-medium">
                          Income &gt;= $75,000
                        </span>
                      </label>

                      <label
                        onClick={() => toggleSchema("jurisdiction")}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#f5f3f3] border border-[#e4e2e2]/60 cursor-pointer hover:bg-[#efece9] transition-colors"
                      >
                        <span
                          className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${selectedSchema.includes("jurisdiction")
                            ? "bg-[#1b1c1c] text-white"
                            : "border border-[#a89b91] bg-white"
                            }`}
                        >
                          {selectedSchema.includes("jurisdiction") && <Check size={11} strokeWidth={3} />}
                        </span>
                        <span className="font-mono text-[12px] text-[#1b1c1c] font-medium">
                          Compliant Jurisdiction
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Step 02: Prove */}
                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#e4e2e2] flex items-center justify-center font-mono text-[14px] font-semibold text-[#1b1c1c] shadow-xs">
                      02
                    </div>
                    <h3 className="text-[19px] font-semibold text-[#1b1c1c]">Prove</h3>
                  </div>

                  <p className="text-[14px] text-[#5f5e5e] mb-6 leading-relaxed">
                    Generate a zero-knowledge proof locally inside your client runtime without exposing underlying identity details.
                  </p>

                  <div className="bg-white border border-[#e4e2e2] rounded-2xl p-4 shadow-xs flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e] font-semibold">
                          Client Cryptographic Execution
                        </span>
                        <button
                          type="button"
                          onClick={handleSimulateProve}
                          disabled={isProving}
                          className="text-[11px] font-mono text-[#006c48] hover:underline"
                        >
                          {isProving ? "Computing..." : "Run Circuit"}
                        </button>
                      </div>

                      <div className="bg-[#f5f3f3] rounded-xl p-3 font-mono text-[12px] text-[#5f5e5e] space-y-1.5 border border-[#e4e2e2]/60">
                        <div className="text-[#1b1c1c] font-medium flex items-center justify-between">
                          <span>Generating ZK-SNARK circuit...</span>
                          <span className="text-[11px] text-[#006c48] font-bold">{proveProgress}%</span>
                        </div>
                        <div className="w-full bg-[#e4e2e2] rounded-full h-1.5 overflow-hidden my-2">
                          <div
                            className="bg-[#19a974] h-full transition-all duration-200"
                            style={{ width: `${proveProgress}%` }}
                          />
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-[#5f5e5e]">
                          <span>Proof ready:</span>
                          <span className="text-[#1b1c1c] font-mono font-medium">0x7A82...92F</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 03: Verify */}
                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#e4e2e2] flex items-center justify-center font-mono text-[14px] font-semibold text-[#1b1c1c] shadow-xs">
                      03
                    </div>
                    <h3 className="text-[19px] font-semibold text-[#1b1c1c]">Verify</h3>
                  </div>

                  <p className="text-[14px] text-[#5f5e5e] mb-6 leading-relaxed">
                    The verifier validates the cryptographic proof against consensus and receives only the verified boolean claim.
                  </p>

                  <div className="bg-white border border-[#e4e2e2] rounded-2xl p-4 shadow-xs flex-1 flex flex-col justify-between">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e] mb-3 font-semibold">
                      Consensus Output
                    </div>
                    <div className="bg-[#96f6c2]/20 border border-[#19a974]/30 rounded-xl p-3.5 flex items-center gap-3">
                      <CheckCircle2 size={22} className="text-[#006c48] shrink-0" />
                      <div>
                        <span className="font-mono text-[13px] text-[#006c48] font-semibold block">
                          Valid Proof
                        </span>
                        <span className="text-[12px] text-[#006c48]/90">
                          Claim Satisfied · 100% Cryptographic Guarantee
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* SECTION: INFRASTRUCTURE (Midnight Architecture Pipeline)       */}
          {/* ============================================================== */}
          <section
            id="infrastructure"
            className="w-full py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#f5f3f3]/60 border-t border-[#e9e8e7]"
          >
            <div className="max-w-[1240px] mx-auto">
              <div className="mb-10">
                <span className="font-mono text-[12px] text-[#5f5e5e] tracking-wider uppercase mb-2 block font-semibold">
                  INFRASTRUCTURE
                </span>
                <h2 className="text-[30px] md:text-[34px] font-semibold text-[#1b1c1c] tracking-tight mb-3">
                  Built for private computation.
                </h2>
                <p className="text-[16px] text-[#5f5e5e] leading-relaxed max-w-xl">
                  Nexora is built on Midnight to enable privacy-preserving verification while keeping unnecessary information out of the verification flow.
                </p>
              </div>

              {/* Architecture Pipeline 4-layer cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                {/* Node 1 */}
                <div className="bg-white border border-[#e4e2e2] rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[11px] text-[#5f5e5e] uppercase tracking-wider mb-2 font-semibold">
                      Layer 01
                    </div>
                    <div className="text-[17px] font-semibold text-[#1b1c1c] mb-1.5">Nexora SDK</div>
                    <p className="text-[13px] text-[#5f5e5e] mb-4">Client application &amp; schema integration layer.</p>
                  </div>
                  <div>
                    <span className="inline-block font-mono text-[11px] text-[#5f5e5e] bg-[#f5f3f3] px-2.5 py-1 rounded-md border border-[#e4e2e2]/70">
                      Browser / Edge
                    </span>
                  </div>
                </div>

                {/* Node 2 */}
                <div className="bg-white border border-[#e4e2e2] rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[11px] text-[#5f5e5e] uppercase tracking-wider mb-2 font-semibold">
                      Layer 02
                    </div>
                    <div className="text-[17px] font-semibold text-[#1b1c1c] mb-1.5">ZK Proof Generation</div>
                    <p className="text-[13px] text-[#5f5e5e] mb-4">
                      Client-side execution generating succinct zk-SNARKs.
                    </p>
                  </div>
                  <div>
                    <span className="inline-block font-mono text-[11px] text-[#5f5e5e] bg-[#f5f3f3] px-2.5 py-1 rounded-md border border-[#e4e2e2]/70">
                      Zero-Knowledge Circuit
                    </span>
                  </div>
                </div>

                {/* Node 3 (Midnight Core) */}
                <div className="bg-white border border-[#19a974]/40 rounded-2xl p-5 shadow-xs relative flex flex-col justify-between ring-1 ring-[#19a974]/20">
                  <div>
                    <div className="font-mono text-[11px] text-[#006c48] uppercase tracking-wider mb-2 font-semibold">
                      Layer 03
                    </div>
                    <div className="text-[17px] font-semibold text-[#1b1c1c] mb-1.5">Midnight Blockchain</div>
                    <p className="text-[13px] text-[#5f5e5e] mb-4">
                      Private smart contract execution &amp; distributed state verification.
                    </p>
                  </div>
                  <div>
                    <span className="inline-block font-mono text-[11px] text-[#006c48] bg-[#96f6c2]/35 px-2.5 py-1 rounded-md border border-[#19a974]/30">
                      Consensus Engine
                    </span>
                  </div>
                </div>

                {/* Node 4 */}
                <div className="bg-white border border-[#e4e2e2] rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[11px] text-[#5f5e5e] uppercase tracking-wider mb-2 font-semibold">
                      Layer 04
                    </div>
                    <div className="text-[17px] font-semibold text-[#1b1c1c] mb-1.5">Verified Claim</div>
                    <p className="text-[13px] text-[#5f5e5e] mb-4">Boolean proof result received by relying party.</p>
                  </div>
                  <div>
                    <span className="inline-block font-mono text-[11px] text-[#006c48] bg-[#96f6c2]/35 px-2.5 py-1 rounded-md border border-[#19a974]/30">
                      Satisfied Claim Only
                    </span>
                  </div>
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
                  href="https://github.com/Shritii-Patel/Nexora"
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
