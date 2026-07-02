"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "Shop", "Orders", "Our Blends", "About Us", "Brewing Guide", "Contact"];

  const getLinkTarget = (item) => {
    if (item === "Home") return "/";
    if (item === "Shop") return "/shop";
    if (item === "Orders") return "/orders";
    return `/#${item.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.55)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        transition: "all 0.4s ease",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 90,
          padding: "0 20px",
          maxWidth: "1180px",
          margin: "0 auto",
        }}
        className="nav-container"
      >
        <Link
          href="/"
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#2c1b0d",
            fontFamily: "var(--font-body)",
            letterSpacing: "-0.01em",
            textDecoration: "none",
          }}
        >
          ChaiCo
        </Link>

        <ul
          className="nav-links"
          style={{
            display: "flex",
            gap: 24,
            listStyle: "none",
            fontSize: 14,
            fontWeight: 600,
            color: "#2c1b0d",
            padding: 0,
            margin: 0,
          }}
        >
          {links.map((l) => (
            <li key={l}>
              <Link
                href={getLinkTarget(l)}
                style={{
                  opacity: 0.85,
                  transition: "opacity 0.2s",
                  textDecoration: "none",
                  color: "inherit",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = 1)}
                onMouseLeave={(e) => (e.target.style.opacity = 0.85)}
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* Animated Gold Coins Wallet Link */}
          <Link
            href="/wallet"
            className="navbar-wallet-btn"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#ffffff",
              border: "1.5px solid rgba(220, 160, 40, 0.4)",
              padding: "8px 14px",
              borderRadius: "999px",
              fontSize: "13.5px",
              fontWeight: 800,
              color: "#d35400",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.02)",
              transition: "transform 0.2s, background 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.background = "#fffbf0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "#ffffff";
            }}
            title="View Coin Wallet & Balance"
          >
            <span className="gold-coin-3d" />
            <span>550 Coins</span>
          </Link>

          {/* Shop button inside the header */}
          <Link
            href="/shop"
            className="nav-buy-btn"
            style={{
              background: "#2c1b0d",
              color: "#ffffff",
              padding: "12px 24px",
              borderRadius: "999px",
              fontSize: 14,
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "transform 0.2s ease, opacity 0.2s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Shop Now
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ overflow: "visible", display: "inline-block" }}
            >
              <path className="steam-line steam-1" d="M8 6c0-1.5 1-1.5 1-3" />
              <path className="steam-line steam-2" d="M12 6c0-1.5 1-1.5 1-3" />
              <path className="steam-line steam-3" d="M16 6c0-1.5 1-1.5 1-3" />
              <path d="M17 9H7c0 0 0 6 5 6s5-6 5-6z" />
              <path d="M17 11h1.5a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5H17" />
              <path d="M5 18h14" />
            </svg>
          </Link>
          
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="burger"
            style={{
              display: "none",
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg width="22" height="16" viewBox="0 0 22 16">
              <rect width="22" height="2" fill="#2c1b0d" />
              <rect y="7" width="22" height="2" fill="#2c1b0d" />
              <rect y="14" width="22" height="2" fill="#2c1b0d" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "#ffffff",
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            padding: "30px 24px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: 22, fontWeight: 700, color: "#2c1b0d" }}>ChaiCo</span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                fontSize: 24,
                fontWeight: "bold",
                color: "#2c1b0d",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              fontSize: "20px",
              fontWeight: "600",
              color: "#2c1b0d",
              padding: 0,
              margin: 0,
            }}
          >
            {links.map((l) => (
              <li key={l}>
                <Link
                  href={getLinkTarget(l)}
                  onClick={() => setOpen(false)}
                  style={{ display: "block", width: "100%", textDecoration: "none", color: "inherit" }}
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
          
          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* Wallet for mobile drawer */}
            <Link
              href="/wallet"
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                background: "#fffbf0",
                border: "1.5px solid rgba(220, 160, 40, 0.4)",
                padding: "14px",
                borderRadius: "999px",
                fontSize: "15px",
                fontWeight: 800,
                color: "#d35400",
                textDecoration: "none",
              }}
            >
              <span className="gold-coin-3d" />
              <span>550 Balance Coins</span>
            </Link>

            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              style={{
                background: "#2c1b0d",
                color: "#ffffff",
                padding: "16px 32px",
                borderRadius: "999px",
                fontSize: 16,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                textDecoration: "none",
              }}
            >
              Shop Now
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ overflow: "visible" }}
              >
                <path className="steam-line steam-1" d="M8 6c0-1.5 1-1.5 1-3" />
                <path className="steam-line steam-2" d="M12 6c0-1.5 1-1.5 1-3" />
                <path className="steam-line steam-3" d="M16 6c0-1.5 1-1.5 1-3" />
                <path d="M17 9H7c0 0 0 6 5 6s5-6 5-6z" />
                <path d="M17 11h1.5a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5H17" />
                <path d="M5 18h14" />
              </svg>
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spinCoin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        .gold-coin-3d {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffe066 0%, #f5b041 70%, #d35400 100%);
          box-shadow: inset 0 0 4px #ffffff, 0 1px 3px rgba(0,0,0,0.15);
          border: 1px solid #d35400;
          display: inline-block;
          animation: spinCoin 3s infinite linear;
        }
        @media (max-width: 860px) {
          .nav-links { display: none !important; }
          .nav-buy-btn { display: none !important; }
          .burger { display: flex !important; }
        }
        @media (min-width: 861px) {
          .nav-container { padding: 0 40px !important; }
        }
      `}</style>
    </header>
  );
}
