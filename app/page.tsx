"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

const BRAND = {
  name: "CNC Inspire Coffee",
  tagline: "ROASTED WITH INTENTION",
  roastedBy: "by Apple Mountain Coffee",
  email: "cncinspirecoffee@gmail.com",
  instagramHandle: "cnc.inspire.coffee",
  based: "Based in California",
};

const PALETTE = {
  ink: "#0B1B1A",
  muted: "#2B4A47",
  card: "#D4EFEA",
  cardStrong: "#C2E6DF",
  border: "#9BCFC7",
  gold: "#D6B46A",
};

const styles: Record<string, React.CSSProperties> = {
  pageBg: {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/coffee-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    color: "#F4F4F4",
  },

  card: {
    background: PALETTE.card,
    border: `1px solid ${PALETTE.border}`,
    boxShadow: "0 10px 28px rgba(0,0,0,0.10)",
  },

  cardStrong: {
    background: PALETTE.cardStrong,
    border: `1px solid ${PALETTE.border}`,
    boxShadow: "0 14px 36px rgba(0,0,0,0.14)",
  },

  chip: {
    background: "rgba(212, 239, 234, 0.65)",
    border: "1px solid rgba(155, 207, 199, 0.65)",
    boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
    backdropFilter: "blur(10px)",
  },

  squareCard: {
    background: "rgba(212, 239, 234, 0.60)",
    border: "1px solid rgba(155, 207, 199, 0.65)",
    boxShadow: "0 14px 40px rgba(0, 0, 0, 0.35)",
    backdropFilter: "blur(10px)",
    borderRadius: 22,
    minHeight: 220,
  },
};

function SectionTitle({
  kicker,
  title,
}: {
  kicker: string;
  title: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <p
        className="text-xs tracking-[0.35em] uppercase"
        style={{ color: PALETTE.muted }}
      >
        {kicker}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0B1B1A]">
        {title}
      </h2>
    </div>
  );
}

function Card({
  children,
  strong,
  className = "",
}: {
  children: React.ReactNode;
  strong?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl ${className}`}
      style={strong ? styles.cardStrong : styles.card}
    >
      {children}
    </div>
  );
}
const COFFEES = [
  {
    id: "la-buena-hora",
    name: "La Buena Hora",
    notes: "Mexican • nutty • balanced",
    stripe: ""
  },
  {
    id: "after-dark",
    name: "After Dark Roast",
    notes: "Indonesian • earthy • cocoa",
    stripe: "https://buy.stripe.com/5kQ5kDbc68wX3Uj4JpefC05",
  },
  {
    id: "still-i-rise",
    name: "Still I Rise",
    notes: "Colombian • rich • smooth",
    stripe: "https://buy.stripe.com/14AeVd6VQ8wX8azcbRefC03",
  },
  {
    id: "true-north",
    name: "True North",
    notes: "Base Camp Blend • bold • steady",
    stripe: "PASTE_STRIPE_PAYMENT_LINK_HERE",
  },
  {
    id: "anchor",
    name: "Anchor",
    notes: "Organic Guatemala • smooth • balanced",
    stripe: "PASTE_STRIPE_PAYMENT_LINK_HERE",
  },
] as const;
export default function Home() {
 

 return (
  <main className="min-h-screen text-[#0B1B1A]" style={styles.pageBg}>
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* HERO */}
      <section className="pt-8 sm:pt-12">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Coffee that feels like a{" "}
              <span className="underline decoration-white/30 underline-offset-8">
                fresh start
              </span>
              .
            </h1>

            <p
              className="mt-4 max-w-xl text-base"
              style={{ color: "rgba(255,255,255,0.82)" }}
            >
              Smooth sips, cozy vibes, and quality you can taste — inspired by
              California mornings and golden-hour resets.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://buy.stripe.com/14AeVd6VQ8wX8azcbRefC03"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-5 py-2 text-sm font-semibold inline-block"
                style={{ background: PALETTE.gold }}
              >
                Shop Coffee
              </a>

              <a
                href="#story"
                className="rounded-full border border-black/20 bg-black/5 px-5 py-2 text-sm font-semibold text-black"
              >
                Our Story
              </a>

              <a
                href="#contact"
                className="rounded-full border border-black/20 bg-black/5 px-5 py-2 text-sm font-semibold text-black"
              >
                Contact
              </a>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { title: "Fresh", desc: "small-batch roasted" },
                { title: "Coastal", desc: "California-inspired vibe" },
                { title: "Comfort", desc: "smooth + easy to love" },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-2xl px-4 py-3"
                  style={styles.chip}
                >
                  <p
                    className="text-sm font-semibold"
                    style={{ color: PALETTE.ink }}
                  >
                    {x.title}
                  </p>
                  <p
                    className="mt-0.5 text-xs"
                    style={{ color: PALETTE.muted }}
                  >
                    {x.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Card className="p-5">
                <p
                  className="text-xs tracking-[0.35em] uppercase"
                  style={{ color: PALETTE.muted }}
                >
                  ROAST PROFILE
                </p>
                <p className="mt-2 text-sm" style={{ color: PALETTE.muted }}>
                  Medium roast designed for daily comfort — not bitter, not sour…
                  just right.
                </p>
              </Card>

              <Card className="p-5">
                <p
                  className="text-xs tracking-[0.35em] uppercase"
                  style={{ color: PALETTE.muted }}
                >
                  SHIPPING
                </p>
                <p className="mt-2 text-sm" style={{ color: PALETTE.muted }}>
                  Packed fresh, sealed tight, and shipped fast so it hits your
                  doorstep smelling amazing.
                </p>
              </Card>
            </div>
          </div>

          {/* RIGHT */}
          <Card strong className="p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-[#F6F1E6] p-2 ring-1 ring-black/10">
                <Image
                  src="/logo.png"
                  alt="Inspire Coffee"
                  width={96}
                  height={96}
                  className="h-20 w-20 rounded-xl object-contain"
                  priority
                />
              </div>

              <div className="flex-1">
                <p
                  className="text-xs tracking-[0.35em] uppercase"
                  style={{ color: PALETTE.muted }}
                >
                  SIGNATURE ROAST
                </p>

                <h3
                  className="mt-1 text-xl font-semibold"
                  style={{ color: PALETTE.ink }}
                >
                  La Buena Hora
                </h3>

                <p className="mt-2 text-sm" style={{ color: PALETTE.muted }}>
                  Mexican Nayarit · Washed process — nutty, sweet, and beautifully
                  balanced.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {[
                { k: "ORIGIN", v: "Mexico (Nayarit)" },
                { k: "PROCESS", v: "Washed" },
                { k: "ROAST LEVEL", v: "Medium" },
                { k: "NOTES", v: "nutty · sweet · balanced" },
              ].map((row) => (
                <div key={row.k} className="rounded-2xl p-4" style={styles.card}>
                  <p
                    className="text-[11px] tracking-[0.35em] uppercase"
                    style={{ color: PALETTE.muted }}
                  >
                    {row.k}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: PALETTE.ink }}>
                    {row.v}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="pt-12 sm:pt-16">
        <div className="grid gap-6 sm:grid-cols-3">
          <div style={styles.squareCard} className="p-6">
            <p
              className="text-xs tracking-[0.35em] uppercase opacity-70"
              style={{ color: PALETTE.ink }}
            >
              SHOP
            </p>

            <h3
              className="mt-2 text-lg font-semibold"
              style={{ color: PALETTE.ink }}
            >
              Our Coffees
            </h3>

            <ul
              className="mt-2 space-y-1 text-sm opacity-90"
              style={{ color: PALETTE.ink }}
            >
              <li>La Buena Hora — Mexican, nutty &amp; balanced</li>
              <li>After Dark Roast — Indonesian, earthy &amp; cocoa</li>
              <li>Still I Rise — Colombian, rich &amp; smooth</li>
              <li>True North — Base Camp Blend, bold &amp; steady</li>
              <li>Anchor — Organic Guatemala, smooth &amp; balanced</li>
            </ul>

            <p className="mt-1 text-xs opacity-70" style={{ color: PALETTE.ink }}>
              12oz whole bean • $24 + shipping
            </p>
          </div>

          {/* If you don’t have content for the other 2 columns yet, keep placeholders so the grid stays valid */}
          <div style={styles.squareCard} className="p-6">
            <p className="text-xs tracking-[0.35em] uppercase opacity-70" style={{ color: PALETTE.ink }}>
              LIMITED DROP
            </p>
            <h3 className="mt-2 text-lg font-semibold" style={{ color: PALETTE.ink }}>
              Still I Rise is shipping now
            </h3>
            <p className="mt-2 text-sm opacity-90" style={{ color: PALETTE.ink }}>
              Colombian whole bean • rich &amp; smooth • caramel notes.
            </p>
            <a
              href="https://buy.stripe.com/3cI4gzfsm8wX0I7b7Nefc02"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full px-5 py-2 text-sm font-semibold"
              style={{ background: PALETTE.gold }}
            >
              Buy Still I Rise
            </a>
          </div>

          <div style={styles.squareCard} className="p-6">
            <p className="text-xs tracking-[0.35em] uppercase opacity-70" style={{ color: PALETTE.ink }}>
              COMING SOON
            </p>
            <h3 className="mt-2 text-lg font-semibold" style={{ color: PALETTE.ink }}>
              Next drops
            </h3>
            <p className="mt-2 text-sm opacity-90" style={{ color: PALETTE.ink }}>
              After Dark Roast &amp; La Buena Hora are returning soon. Follow for updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  </main>
);
}
