"use client";

import Image from "next/image";

const BRAND = {
  name: "CNC Inspire Coffee",
  tagline: "ROASTED WITH INTENTION",
  roastedBy: "by Apple Mountain Coffee",
  email: "cncinspirecoffee@gmail.com",
  instagramHandle: "cnc.inspire.coffee",
  based: "Based in California",
};

// ✅ Coffee background + KEEP your turquoise cards
const PALETTE = {
  // text
  ink: "#0B1B1A",
  muted: "#2B4A47",

  // card surfaces (turquoise)
  card: "#D4EFEA",
  cardStrong: "#C2E6DF",
  border: "#9BCFC7",

  // accents
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

  glassHeader: {
    background: "rgba(255,255,255,0.22)",
    border: "1px solid rgba(255,255,255,0.18)",
    backdropFilter: "blur(12px)",
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

  // ✅ THIS MUST BE INSIDE styles
  squareCard: {
    background: "rgba(212, 239, 234, 0.60)",
    border: "1px solid rgba(155, 207, 199, 0.65)",
    boxShadow: "0 14px 40px rgba(0, 0, 0, 0.35)",
    backdropFilter: "blur(10px)",
    borderRadius: "22px",
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

export default function Home() {
  async function startCheckout(productId: string) {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Checkout error:", data);
        alert("Checkout error — check terminal/console.");
        return;
      }

      if (!data?.url) {
        console.error("No checkout url returned:", data);
        alert("Checkout failed — no URL returned. Check terminal/console.");
        return;
      }

      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      alert("Checkout failed — check terminal/console.");
    }
  }

  return (
    <main className="min-h-screen text-[#0B1B1A]" style={styles.pageBg}>
      {/* PAGE WRAP */}
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

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => startCheckout("tolima")}
                  className="rounded-full px-5 py-2 text-sm font-semibold text-black shadow-sm transition hover:brightness-105"
                  style={{ background: PALETTE.gold }}
                >
                  Shop Coffee
                </button>

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

              {/* Mini chips */}
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

              {/* Quick info cards */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Card className="p-5">
                  <p
                    className="text-xs tracking-[0.35em] uppercase"
                    style={{ color: PALETTE.muted }}
                  >
                    ROAST PROFILE
                  </p>
                  <p className="mt-2 text-sm" style={{ color: PALETTE.muted }}>
                    Medium roast designed for daily comfort — not bitter, not
                    sour… just right.
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

            {/* RIGHT - FEATURED */}
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
                    Mexican Nayarit · Washed process — nutty, sweet, and
                    beautifully balanced.
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
                  <div
                    key={row.k}
                    className="rounded-2xl p-4"
                    style={styles.card}
                  >
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

        {/* SHOP (square cards so you can see background) */}
        <section id="shop" className="pt-12 sm:pt-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Card 1 - Soft Launch */}
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
                Soft Launch Now Brewing ☕
              </h3>

              <p
                className="mt-2 text-sm opacity-90"
                style={{ color: PALETTE.muted }}
              >
                Golden Hour Roast is releasing in{" "}
                <strong>very limited quantities</strong>. This first drop is
                small, intentional, and for early supporters.
              </p>
            </div>

            {/* Card 2 - Featured: Golden Hour */}
            <div style={styles.squareCard} className="p-6">
              <p
                className="text-xs tracking-[0.35em] uppercase opacity-70"
                style={{ color: PALETTE.ink }}
              >
                FEATURED
              </p>

              <h3
                className="mt-2 text-lg font-semibold"
                style={{ color: PALETTE.ink }}
              >
                Golden Hour Roast
              </h3>

              <p
                className="mt-2 text-sm opacity-90"
                style={{ color: PALETTE.muted }}
              >
                Medium roast designed for daily comfort — not bitter, not sour…
                just right.
              </p>

              <p className="mt-3 text-sm" style={{ color: PALETTE.ink }}>
                <strong>Notes:</strong> nutty • sweet • balanced
              </p>

              <p
                className="mt-2 text-xs opacity-70"
                style={{ color: PALETTE.muted }}
              >
                Small batch • limited stock
              </p>
            </div>

            {/* Card 3 - Coming Soon */}
            <div style={styles.squareCard} className="p-6">
              <p
                className="text-xs tracking-[0.35em] uppercase opacity-70"
                style={{ color: PALETTE.ink }}
              >
                COMING SOON
              </p>

              <h3
                className="mt-2 text-lg font-semibold"
                style={{ color: PALETTE.ink }}
              >
                Next Drops
              </h3>

              <p
                className="mt-2 text-sm opacity-90"
                style={{ color: PALETTE.muted }}
              >
                More small-batch releases are already in motion. Follow along so
                you don’t miss the next drop 🤎
              </p>

              <ul className="mt-3 text-sm" style={{ color: PALETTE.muted }}>
                <li>• La Buena Hora</li>
                <li>• After Dark Roast</li>
              </ul>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section id="story" className="pt-10 sm:pt-14">
          <Card className="p-6 sm:p-8">
            <SectionTitle
              kicker="OUR STORY"
              title="Inspired by California mornings"
            />
            <p className="max-w-4xl text-base leading-relaxed text-[#111827]">
              CNC Inspire Coffee is for the slow sips and soft resets — the kind
              of cup that feels like a fresh start. We built this brand around
              cozy vibes, quality you can taste, and coffee that fits real life
              (not just coffee-snob life). Roasted with intention means every
              bag is made to be consistent, comforting, and easy to love — from
              the first pour to the last sip. Roasted by Apple Mountain Coffee,
              our trusted roasting partner, so every batch is fresh, carefully
              crafted, and packed with care. Start with our Signature: Golden
              Hour Roast — warm, smooth, and endlessly sippable.
            </p>
          </Card>
        </section>

        {/* CONTACT */}
        <section id="contact" className="pt-10 sm:pt-14 pb-10">
          <Card className="p-6 sm:p-8">
            <SectionTitle kicker="CONTACT" title="Let’s get you caffeinated" />
            <p className="text-base font-medium text-black">
              Questions, wholesale inquiries, or just want to say hi? We’d love
              to hear from you.
            </p>

            <div className="mt-5 grid gap-2 text-sm text-[#0B1B1A]">
              <div>
                <span className="font-semibold">Email:</span>{" "}
                <a className="underline text-[#0B1B1A]" href={`mailto:${BRAND.email}`}>
                  {BRAND.email}
                </a>
              </div>

              <div>
                <span className="font-semibold">Instagram:</span>{" "}
                <a
                  className="underline text-[#0B1B1A]"
                  href={`https://instagram.com/${BRAND.instagramHandle}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{BRAND.instagramHandle}
                </a>
              </div>

              <div className="text-[#111827] font-medium">📍 {BRAND.based}</div>
            </div>
          </Card>

          <p
            className="mt-6 text-center text-xs"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            © {new Date().getFullYear()} {BRAND.name} • Small batch • Roasted with
            intention
          </p>
        </section>
      </div>
    </main>
  );
}
