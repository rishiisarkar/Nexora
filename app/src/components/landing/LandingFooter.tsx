"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Copy, Check, ExternalLink } from "lucide-react";
import { useState } from "react";

const CONTRACT_ADDRESS = "0xf36db0fda42e4c3b474bdd06fc72725670ab3ebb8e089f9923bf83ab855b454e";
const CONTRACT_SHORT = "0xf36db0fd...5b454e";
const EXPLORER_URL = "https://preprod.midnightexplorer.com/contracts/f36db0fda42e4c3b474bdd06fc72725670ab3ebb8e089f9923bf83ab855b454e";
const LIVE_APP_URL = "https://nexora-app-web3.vercel.app/";
const GITHUB_URL = "https://github.com/rishiisarkar/Nexora";
const X_HANDLE_URL = "https://x.com/NexoraWeb3x/";
const FEEDBACK_FORM_URL = "https://forms.gle/ShbFDAme1TiP7FRYA";
const FEEDBACK_SHEET_URL = "https://docs.google.com/spreadsheets/d/15vLOWZlfbG9BFbDRfPmD1uYHZlk1dcgLbbNT8eNDcPQ/edit?usp=sharing";
const DEMO_VIDEO_URL = "https://drive.google.com/file/d/1cAb_dis5CkSjRz4XW3x5RSnGYpUv2BDh/view?usp=sharing";

export function LandingFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyContract = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="w-full bg-[#fbf7ee] pt-16 sm:pt-20 text-[#1b1c1c] overflow-visible">
      {/* ============================================================== */}
      {/* THE SIGNATURE DARK FOOTER (Full Width)                         */}
      {/* ============================================================== */}
      <div className="relative w-full rounded-t-[36px] sm:rounded-t-[48px] bg-[#171816] border-t border-[#262824] text-[#fbf7ee] shadow-[0_-12px_40px_rgba(0,0,0,0.18)]">
        {/* Subtle Organic Topographic Contour Lines in Background */}
        <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden rounded-t-[36px] sm:rounded-t-[48px]">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 1200 620"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-40 160 C 220 70, 380 340, 800 130 C 1020 40, 1140 260, 1260 210"
              stroke="rgba(0, 212, 134, 0.22)"
              strokeWidth="1.5"
            />
            <path
              d="M-40 250 C 180 140, 460 440, 760 210 C 980 110, 1160 340, 1260 300"
              stroke="rgba(255, 255, 255, 0.10)"
              strokeWidth="1.25"
            />
            <path
              d="M-40 340 C 280 230, 450 520, 800 290 C 1000 170, 1140 420, 1260 380"
              stroke="rgba(0, 212, 134, 0.16)"
              strokeWidth="1.25"
            />
            <path
              d="M-40 440 C 200 370, 520 580, 840 370 C 1040 260, 1180 480, 1260 440"
              stroke="rgba(255, 255, 255, 0.07)"
              strokeWidth="1.25"
            />
          </svg>
        </div>

        {/* ========================================================== */}
        {/* TOP CENTER: NEXORA LOGO EMBLEM                             */}
        {/* Perching halfway out the top border                        */}
        {/* ========================================================== */}
        <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 z-20">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 p-1.5 rounded-2xl bg-[#171816] border border-[#2b3528] shadow-[0_12px_28px_rgba(202,254,124,0.25)] transition-transform hover:scale-105 duration-300 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Nexora Platform Logo"
              width={96}
              height={96}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>

        {/* ========================================================== */}
        {/* MAIN CONTENT CONTAINER                                     */}
        {/* ========================================================== */}
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-5 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-8 sm:pb-10">
          {/* Center Brand Block: Headline, Italic Subtitle, and Two Action Pills */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight text-[#fbf7ee] font-sans leading-tight">
              Nexora Platform
            </h2>
            <p className="mt-2 text-lg sm:text-xl text-[#d4cbba] italic font-serif tracking-wide">
              Where cryptographic privacy begins
            </p>

            {/* Action Pills */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              <a
                href={LIVE_APP_URL}
                target="_blank"
                rel="noreferrer"
                className="h-11 px-7 rounded-full bg-[#00d486] hover:bg-[#00be77] text-[#082417] font-semibold text-[14px] inline-flex items-center gap-2 shadow-[0_4px_18px_rgba(0,212,134,0.36)] transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Live Web Application</span>
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>

              <Link
                href="/admin"
                className="h-11 px-7 rounded-full bg-[#112a1f] hover:bg-[#18392a] text-[#86efac] border border-[#204d38] font-medium text-[14px] inline-flex items-center gap-2 transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Open operator console</span>
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* ========================================================== */}
          {/* THREE-COLUMN LOWER BODY (Contact, Links, Navigation)       */}
          {/* ========================================================== */}
          <div className="mt-14 sm:mt-18 pt-10 border-t border-[#262824] grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Contact & Infrastructure */}
            <div className="md:col-span-4 flex flex-col justify-between">
              <div>
                <h3 className="text-[16px] font-semibold text-[#fbf7ee] mb-3">
                  Contact &amp; Infrastructure
                </h3>
                <div className="space-y-1.5 text-[13.5px] text-[#c4bdae] leading-relaxed">
                  <p className="font-mono text-[#86efac]">Midnight PREVIEW Live Node</p>
                  <p>WASM Zero-Knowledge Prover · 480ms Latency</p>
                  <div className="flex items-center gap-2 pt-0.5">
                    <span className="font-mono text-[12px] text-[#a49d8e] truncate max-w-[240px]" title={CONTRACT_ADDRESS}>
                      {CONTRACT_SHORT}
                    </span>
                    <button
                      onClick={handleCopyContract}
                      className="p-1 rounded hover:bg-white/10 text-[#86efac] transition-colors"
                      title="Copy Contract Address"
                      aria-label="Copy Contract Address"
                    >
                      {copied ? <Check size={13} /> : <Copy size={13} />}
                    </button>
                  </div>
                  <p className="text-[13px] text-[#00d486] pt-1">
                    <a href={LIVE_APP_URL} target="_blank" rel="noreferrer" className="hover:underline">
                      nexora-app-web3.vercel.app
                    </a>
                  </p>
                </div>
              </div>

              {/* Status Badges */}
              <div className="mt-6 flex flex-col gap-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12281e] border border-[#1f4834] text-[12px] font-medium text-[#86efac] w-fit">
                  <span className="w-5 h-5 rounded-full bg-[#00d486] text-[#061f13] flex items-center justify-center font-bold text-[11px]">
                    70+
                  </span>
                  <span>Midnight Preprod Verified Users</span>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-[#8c8577] font-mono">
                  <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">MIDNIGHT PREPROD</span>
                  <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">ZK-SNARKS</span>
                  <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">REPLAY-PROTECTION</span>
                </div>
              </div>
            </div>

            {/* Middle Column: Official Links & Verification Deliverables */}
            <div className="md:col-span-4">
              <h3 className="text-[16px] font-semibold text-[#fbf7ee] mb-3">
                Protocol &amp; Submission Links
              </h3>
              <ul className="space-y-2.5 text-[13.5px]">
                <li>
                  <a
                    href={LIVE_APP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#e8e2d5] hover:text-[#00d486] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>🌐 Live Web Application</span>
                    <span className="text-[#00d486] text-[12px] group-hover:translate-x-0.5 transition-transform">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#e8e2d5] hover:text-[#00d486] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>💻 Public GitHub Repository</span>
                    <span className="text-[#00d486] text-[12px] group-hover:translate-x-0.5 transition-transform">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={EXPLORER_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#e8e2d5] hover:text-[#00d486] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>🔍 Preprod Contract Explorer</span>
                    <span className="text-[#00d486] text-[12px] group-hover:translate-x-0.5 transition-transform">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={X_HANDLE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#e8e2d5] hover:text-[#00d486] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>🐦 Official Product X (@NexoraWeb3x)</span>
                    <span className="text-[#00d486] text-[12px] group-hover:translate-x-0.5 transition-transform">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={FEEDBACK_FORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#e8e2d5] hover:text-[#00d486] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>📝 User Feedback Collection Form</span>
                    <span className="text-[#00d486] text-[12px] group-hover:translate-x-0.5 transition-transform">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={FEEDBACK_SHEET_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#e8e2d5] hover:text-[#00d486] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>📊 User Feedback Google Sheet</span>
                    <span className="text-[#00d486] text-[12px] group-hover:translate-x-0.5 transition-transform">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={DEMO_VIDEO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#e8e2d5] hover:text-[#00d486] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>🎥 Demo Video Walkthrough</span>
                    <span className="text-[#00d486] text-[12px] group-hover:translate-x-0.5 transition-transform">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column: Quick Navigation */}
            <div className="md:col-span-4">
              <h3 className="text-[16px] font-semibold text-[#fbf7ee] mb-3">
                Quick Navigation
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[13.5px]">
                <a
                  href={LIVE_APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#e8e2d5] hover:text-[#00d486] transition-colors inline-flex items-center gap-1"
                >
                  <span>Live Web App</span>
                  <ExternalLink size={11} className="opacity-60" />
                </a>
                <Link href="/gate" className="text-[#e8e2d5] hover:text-[#00d486] transition-colors">
                  ZK Gate Demo
                </Link>
                <Link href="/admin" className="text-[#e8e2d5] hover:text-[#00d486] transition-colors">
                  Operator Console
                </Link>
                <Link href="/vault" className="text-[#e8e2d5] hover:text-[#00d486] transition-colors">
                  Credential Vault
                </Link>
                <a
                  href={EXPLORER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#e8e2d5] hover:text-[#00d486] transition-colors inline-flex items-center gap-1"
                >
                  <span>Explorer</span>
                  <ExternalLink size={11} className="opacity-60" />
                </a>
                <a
                  href="https://docs.midnight.network"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#e8e2d5] hover:text-[#00d486] transition-colors inline-flex items-center gap-1"
                >
                  <span>Midnight Docs</span>
                  <ExternalLink size={11} className="opacity-60" />
                </a>
                <a
                  href={FEEDBACK_FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#e8e2d5] hover:text-[#00d486] transition-colors inline-flex items-center gap-1"
                >
                  <span>Feedback Form</span>
                  <ExternalLink size={11} className="opacity-60" />
                </a>
                <a
                  href={DEMO_VIDEO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#e8e2d5] hover:text-[#00d486] transition-colors inline-flex items-center gap-1"
                >
                  <span>Watch Demo</span>
                  <ExternalLink size={11} className="opacity-60" />
                </a>
              </div>

              {/* Privacy highlights card */}
              <div className="mt-5 p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[11.5px] text-[#c4bdae] leading-relaxed">
                <p className="font-medium text-[#86efac] mb-1">🔐 Privacy-Preserving Verification</p>
                <p>Proves authorized membership via Zero-Knowledge proof without exposing raw credentials, Merkle inclusion paths, or private witness values.</p>
              </div>
            </div>
          </div>

          {/* ========================================================== */}
          {/* BOTTOM BAR: Ivory Rounded Policy Pill                      */}
          {/* ========================================================== */}
          <div className="mt-12 pt-6 border-t border-[#262824] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[12px] font-mono text-[#8a8375]">
              Nexora · Zero-Knowledge Cryptographic Privacy on Midnight Preprod
            </span>

            <div className="inline-flex items-center gap-3 sm:gap-4 px-5 py-2 rounded-full bg-[#fbf7ee] text-[#1b1c1c] text-[12px] font-medium shadow-xs">
              <Link href="/#privacy" className="hover:text-[#006c48] transition-colors">
                Cookies policy
              </Link>
              <span className="text-[#cfc5b4]">·</span>
              <Link href="/#privacy" className="hover:text-[#006c48] transition-colors">
                Privacy policy
              </Link>
              <span className="text-[#cfc5b4]">·</span>
              <span>©2026 Nexora</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
