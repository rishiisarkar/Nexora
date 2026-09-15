"use client";

import Link from "next/link";
import { Check, LoaderCircle, WalletCards } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { WalletConnectModal } from "@/components/WalletConnectModal";
import { APP_NETWORK, MidnightClient } from "@/lib/midnight-client";
import type { WalletOption } from "@/lib/midnight-client";
import { NexoraMonogram } from "./NexoraMonogram";
import styles from "./Landing.module.css";

export function LandingNavbar() {
  const clientRef = useRef<MidnightClient | null>(null);
  const getClient = () =>
    clientRef.current ?? (clientRef.current = new MidnightClient());

  const [wallets, setWallets] = useState<WalletOption[]>([]);
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [walletConnecting, setWalletConnecting] = useState(false);
  const [selectedWalletRdns, setSelectedWalletRdns] = useState<string | null>(null);
  const [selectedWalletName, setSelectedWalletName] = useState("");
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletError, setWalletError] = useState("");

  useEffect(() => {
    const client = getClient();
    const updateWallets = () => setWallets(client.getInjectedWallets());
    updateWallets();
    const timer = window.setInterval(updateWallets, 750);
    return () => window.clearInterval(timer);
  }, []);

  const openWalletSelector = () => {
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

  const walletLabel = walletConnecting
    ? "Connecting"
    : walletAddress
    ? `${selectedWalletName || "Connected"}`
    : "Connect";

  return (
    <>
      <header className={styles.navHeader}>
        <Link href="/" className={styles.navBrand}>
          <span className={styles.navBrandIcon} aria-hidden="true">
            <NexoraMonogram size={18} showBeam={false} priority={false} />
          </span>
          <span>NEXORA</span>
        </Link>

        <div className={styles.navActions}>
          <Link href="/gate" className={styles.navLink}>
            Gate
          </Link>
          <Link href="/admin" className={styles.navLink}>
            Console
          </Link>
          <button
            type="button"
            className={styles.navActionBtn}
            onClick={openWalletSelector}
            disabled={walletConnecting}
            title={walletAddress ?? undefined}
          >
            {walletConnecting ? (
              <LoaderCircle size={13} className="animate-spin" aria-hidden="true" />
            ) : walletAddress ? (
              <Check size={13} aria-hidden="true" />
            ) : (
              <WalletCards size={13} aria-hidden="true" />
            )}
            <span>{walletLabel}</span>
          </button>
        </div>
      </header>

      {walletError && (
        <div
          role="alert"
          style={{
            position: "fixed",
            bottom: "1rem",
            right: "1rem",
            zIndex: 100,
            background: "rgba(255, 70, 70, 0.9)",
            color: "#fff",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            fontSize: "0.75rem",
          }}
        >
          {walletError}
        </div>
      )}

      <WalletConnectModal
        open={walletModalOpen}
        wallets={wallets}
        selectedRdns={selectedWalletRdns}
        onClose={() => setWalletModalOpen(false)}
        onSelect={(wallet) => {
          void connectWallet(wallet);
        }}
      />
    </>
  );
}
