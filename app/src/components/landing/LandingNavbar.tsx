"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ChevronDown,
  Copy,
  ExternalLink,
  LoaderCircle,
  LogOut,
  Menu,
  Shield,
  User,
  WalletCards,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { WalletConnectModal } from "@/components/WalletConnectModal";
import { APP_NETWORK, MidnightClient } from "@/lib/midnight-client";
import type { WalletOption } from "@/lib/midnight-client";

const navLinks = [
  { href: "/#product", label: "Product" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/#infrastructure", label: "Infrastructure" },
];

function shortenAddress(address: string) {
  if (address.length <= 14) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function LandingNavbar() {
  const clientRef = useRef<MidnightClient | null>(null);
  const walletMenuRef = useRef<HTMLDivElement | null>(null);
  const getClient = () => clientRef.current ?? (clientRef.current = new MidnightClient());

  const [menuOpen, setMenuOpen] = useState(false);
  const [wallets, setWallets] = useState<WalletOption[]>([]);
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [walletMenuOpen, setWalletMenuOpen] = useState(false);
  const [walletConnecting, setWalletConnecting] = useState(false);
  const [selectedWalletRdns, setSelectedWalletRdns] = useState<string | null>(null);
  const [selectedWalletName, setSelectedWalletName] = useState("");
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletError, setWalletError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const client = getClient();
    const updateWallets = () => setWallets(client.getInjectedWallets());
    updateWallets();
    const timer = window.setInterval(updateWallets, 750);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!walletMenuOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!walletMenuRef.current?.contains(event.target as Node)) {
        setWalletMenuOpen(false);
      }
    };
    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, [walletMenuOpen]);

  const openWalletSelector = () => {
    setMenuOpen(false);
    setWalletMenuOpen(false);
    setWalletError("");
    setWalletModalOpen(true);
  };

  const connectWallet = async (wallet: WalletOption) => {
    setWalletModalOpen(false);
    setWalletConnecting(true);
    setWalletError("");
    try {
      await getClient().disconnect();
      const session = await getClient().connectWallet(APP_NETWORK, wallet);
      setSelectedWalletRdns(wallet.rdns);
      setSelectedWalletName(wallet.name);
      setWalletAddress(session.unshieldedAddress);
    } catch (error) {
      setSelectedWalletRdns(null);
      setSelectedWalletName("");
      setWalletAddress(null);
      setWalletError(MidnightClient.messageFor(error));
    } finally {
      setWalletConnecting(false);
    }
  };

  const disconnectWallet = async () => {
    setWalletMenuOpen(false);
    setWalletError("");
    try {
      await getClient().disconnect();
    } catch (error) {
      setWalletError(MidnightClient.messageFor(error));
    } finally {
      setSelectedWalletRdns(null);
      setSelectedWalletName("");
      setWalletAddress(null);
    }
  };

  const copyAddress = async () => {
    if (!walletAddress) return;
    try {
      await navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // fallback
    }
  };

  const walletLabel = walletConnecting
    ? "Connecting..."
    : walletAddress
      ? shortenAddress(walletAddress)
      : "Connect Wallet";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e9e8e7]/80 transition-colors">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Brand & Nav links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/logo.png"
                alt="Nexora Logo"
                width={32}
                height={32}
                className="h-7 w-7 rounded-md object-contain"
                priority
              />
              <span className="text-[17px] font-semibold tracking-tight text-[#1b1c1c] font-sans">
                Nexora
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[14px] text-[#5f5e5e] hover:text-[#1b1c1c] font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/rishiisarkar/Nexora"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center text-[14px] text-[#5f5e5e] hover:text-[#1b1c1c] font-medium transition-colors px-1"
            >
              GitHub
            </a>

            {/* Wallet Connect Button with Dropdown */}
            <div className="relative" ref={walletMenuRef}>
              <button
                type="button"
                className={`h-[36px] inline-flex items-center gap-2 px-3.5 rounded-xl text-[13px] font-medium transition-all shadow-xs border ${walletAddress
                  ? "bg-[#eef8f3] border-[#a3dfbe] text-[#006c48] hover:bg-[#e4f4ec]"
                  : "bg-white border-[#e4e2e2] text-[#241d1a] hover:bg-[#f6f4f2]"
                  }`}
                onClick={walletAddress ? () => setWalletMenuOpen((v) => !v) : openWalletSelector}
                disabled={walletConnecting}
                title={walletAddress ?? "Connect Midnight Wallet"}
              >
                {walletConnecting ? (
                  <LoaderCircle size={14} className="animate-spin text-[#006c48]" />
                ) : walletAddress ? (
                  <Check size={14} className="text-[#006c48]" />
                ) : (
                  <WalletCards size={14} className="text-[#5f5e5e]" />
                )}
                <span>{walletLabel}</span>
                {walletAddress && <ChevronDown size={13} className="text-[#006c48] opacity-80" />}
              </button>

              {/* Wallet Connected Dropdown */}
              {walletAddress && walletMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white border border-[#e8dfd5] shadow-lg p-2.5 z-50 text-[13px]">
                  <div className="px-2 py-1.5 border-b border-[#f0eae3] mb-1.5">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[#8b7e75]">
                      {selectedWalletName || "Midnight Wallet"} Connected
                    </p>
                    <p className="font-mono text-[12px] text-[#241d1a] truncate mt-0.5" title={walletAddress}>
                      {walletAddress}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => { void copyAddress(); }}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[#3d332c] hover:bg-[#f7f2ed] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Copy size={13} className="text-[#7c716a]" />
                      <span>{copied ? "Copied!" : "Copy Address"}</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#a89b91]">HEX</span>
                  </button>

                  <Link
                    href="/vault"
                    onClick={() => setWalletMenuOpen(false)}
                    className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[#3d332c] hover:bg-[#f7f2ed] transition-colors"
                  >
                    <Shield size={13} className="text-[#7c716a]" />
                    <span>My Credentials Vault</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => { void disconnectWallet(); }}
                    className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[#ba1a1a] hover:bg-[#ffdad6]/40 transition-colors mt-1 border-t border-[#f0eae3] pt-2"
                  >
                    <LogOut size={13} />
                    <span>Disconnect</span>
                  </button>
                </div>
              )}
            </div>

            {/* Try Nexora CTA button */}
            <Link
              href="/admin"
              className="h-[36px] inline-flex items-center justify-center px-4 rounded-xl bg-[#2e2622] hover:bg-[#181311] text-[#fcfbfa] text-[13.5px] font-medium transition-all shadow-xs active:scale-[0.98]"
            >
              Try Nexora →
            </Link>

            {/* Profile Avatar Icon */}
            <Link
              href="/vault"
              title="Identity Vault"
              className="w-8 h-8 rounded-full bg-[#006c48] hover:bg-[#005437] flex items-center justify-center shrink-0 text-white transition-colors shadow-xs"
            >
              <User size={15} />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-[#2e2622] hover:bg-[#f3ece4] transition-colors ml-1"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#e9e8e7] bg-[#fcfbfa] px-5 py-4 space-y-3 shadow-md animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-1.5 text-[15px] font-medium text-[#241d1a] hover:text-[#006c48] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/admin"
                onClick={() => setMenuOpen(false)}
                className="py-1.5 text-[15px] font-medium text-[#241d1a] hover:text-[#006c48] transition-colors"
              >
                Issuer Console
              </Link>
              <Link
                href="/vault"
                onClick={() => setMenuOpen(false)}
                className="py-1.5 text-[15px] font-medium text-[#241d1a] hover:text-[#006c48] transition-colors"
              >
                Credential Vault
              </Link>
              <a
                href="https://github.com/rishiisarkar/Nexora"
                target="_blank"
                rel="noreferrer"
                className="py-1.5 text-[15px] font-medium text-[#5f5e5e] hover:text-[#1b1c1c] transition-colors flex items-center gap-1.5"
              >
                <span>GitHub Repository</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="pt-2 border-t border-[#e9e8e7]/70 flex flex-col gap-2">
              <button
                type="button"
                onClick={walletAddress ? () => setWalletMenuOpen((v) => !v) : openWalletSelector}
                className="w-full h-10 rounded-xl bg-white border border-[#e4e2e2] text-[#241d1a] font-medium text-sm flex items-center justify-center gap-2"
              >
                <WalletCards size={15} />
                <span>{walletLabel}</span>
              </button>
              {walletAddress && (
                <button
                  type="button"
                  onClick={() => { void disconnectWallet(); }}
                  className="w-full h-9 rounded-xl bg-[#ffdad6]/40 text-[#ba1a1a] font-medium text-xs flex items-center justify-center gap-1.5"
                >
                  <LogOut size={13} />
                  <span>Disconnect Wallet</span>
                </button>
              )}
            </div>
          </div>
        )}

        {walletError && (
          <div className="bg-[#ffdad6] text-[#93000a] text-xs px-4 py-1.5 text-center font-medium border-t border-[#ffb4ab]">
            {walletError}
          </div>
        )}
      </header>

      <WalletConnectModal
        open={walletModalOpen}
        wallets={wallets}
        selectedRdns={selectedWalletRdns}
        onClose={() => setWalletModalOpen(false)}
        onSelect={(wallet) => { void connectWallet(wallet); }}
      />
    </>
  );
}
