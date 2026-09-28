"use client";

import { LandingNavbar } from "./LandingNavbar";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#fcfbfa] text-[#1b1c1c] flex flex-col font-sans selection:bg-[#006c48]/20 selection:text-[#006c48]">
      <LandingNavbar />
      <main className="flex-1 pt-16">
        {/* Landing page content cleared — starting fresh */}
      </main>
    </div>
  );
}
