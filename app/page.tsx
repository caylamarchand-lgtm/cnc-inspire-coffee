"use client";

import React from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

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

type Coffee = {
  id: string;
  name: string;
  notes: string;
  limited: boolean;
  stripe: string; // empty string = coming soon / not for sale yet
};

const COFFEES: Coffee[] = [
  {
    id: "after-dark",
    name: "After Dark Roast",
    notes: "Indonesian • earthy • cocoa",
    limited: true,
    stripe: "https://buy.stripe.com/5kQ5kDbc68wX3Uj4JpefC05",
  },
  {
    id: "la-buena-hora",
    name: "La Buena Hora",
    notes: "Mexican • nutty • balanced",
    limited: true,
    stripe: "https://buy.stripe.com/28EaEX6VQbJ9bmLa3JefC06", // paste link when ready
  },
  {
    id: "higher-ground",
    name: "Higher Ground",
    notes: "Organic Peru • smooth • premium",
    limited: true,
    stripe: "https://buy.stripe.com/00wdR91Bw9B1duTb7NefC09", // paste link when ready
  },
  {
    id: "anchor",
    name: "Anchor",
    notes: "Organic Guatemala • smooth • balanced",
    limited: true,
    stripe: "https://buy.stripe.com/14A9AT5RMcNd3Uj2BhefC07", // paste link when ready
  },
  {
    id: "still-i-rise",
    name: "Still I Rise",
    notes: "Colombian • rich • smooth",
    limited: false,
    stripe: "https://buy.stripe.com/14AeVd6VQ8wX8azcbRefC03",
  },
  {
    id: "true-north",
    name: "True North",
    notes: "Base Camp Blend • bold • steady",
    limited: false,
    stripe: "https://buy.stripe.com/3cI8wPbc6aF5aiH4JpefC08", // paste link when ready
  },
];

function CoffeeCard({ coffee }: { coffee: Coffee }) {
  const label = coffee.limited ? "LIMITED DROP" : "AVAILABLE NOW";
  const headline = coffee.limited
    ? `${coffee.name} (Limited)`
    : `${coffee.name} is available now`;

  return (
    <div style={styles.squareCard} className="p-6">
      <p
        className="text-xs tracking-[0.35em] uppercase opacity-70"
        style={{ color: PALETTE.ink }}
      >
        {label}
      </p>

      <h3
        className="mt-2 text-lg font-semibold"
        style={{ color: PALETTE.ink }}
      >
        {headline}
      </h3>

      <p className="mt-2 text-sm opacity-90" style={{ color: PALETTE.ink }}>
        {coffee.notes}
      </p>

      {coffee.stripe ? (
        <a
          href={coffee.stripe}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-full px-5 py-2 text-sm font-semibold"
          style={{ background: PALETTE.gold }}
        >
          Buy {coffee.name}
        </a>
      ) : (
        <div className="mt-4 inline-block rounded-full px-5 py-2 text-sm font-semibold opacity-70"
             style={{ background: "rgba(214,180,106,0.35)", color: PALETTE.ink }}>
          Coming soon
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const firstBuyLink =
    COFFEES.find((c) => c.stripe)?.stripe || "#shop";

const [reviews, setReviews] = React.useState<any[]>([]);
  const [name, setName] = React.useState("");
  const [rating, setRating] = React.useState(5);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    const { data } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setReviews(data);
  }

  async function submitReview(e: React.FormEvent) {
    e.preventDefault();

    const { data, error } = await supabase
  .from("reviews")
  .insert([{ name, rating, message }])
  .select();

if (error) {
  console.log("INSERT ERROR:", error);
  alert("Review failed: " + error.message);
  return;
}

console.log("Inserted:", data);


    setName("");
    setRating(5);
    setMessage("");
    fetchReviews();
  }


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
                  href={firstBuyLink === "#shop" ? "#shop" : firstBuyLink}
                  target={firstBuyLink === "#shop" ? undefined : "_blank"}
                  rel={firstBuyLink === "#shop" ? undefined : "noopener noreferrer"}
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
                    <p className="mt-0.5 text-xs" style={{ color: PALETTE.muted }}>
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
  src="/the-north.jpg"
  alt="The North - Base Camp Blend"
  width={240}
  height={320}
  className="rounded-xl object-cover"
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

                  <h3 className="mt-1 text-xl font-semibold" style={{ color: PALETTE.ink }}>
                    The North
                  </h3>

                  <p className="mt-2 text-sm" style={{ color: PALETTE.muted }}>
                    Base Camp Blend — bold, balanced, and smooth with steady depth and a clean finish.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {[
  { k: "BLEND", v: "Base Camp Blend" },
  { k: "ROAST LEVEL", v: "Medium-Dark" },
  { k: "PROFILE", v: "bold · balanced · smooth" },
  { k: "BEST FOR", v: "daily drinkers & strong mornings" },
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
            
            

            {/* Coffee cards (auto) */}
            {COFFEES.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        </section>
        

{/* REVIEWS */}
<section id="reviews" className="pt-12 sm:pt-16">
  <div className="rounded-2xl border border-white/15 bg-black/55 backdrop-blur p-6 sm:p-8">
    <div className="flex items-start justify-between gap-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Reviews
        </h2>
        <p className="mt-1 text-sm text-white/80">
          Drop a review and help other coffee lovers pick their next bag ☕✨
        </p>
      </div>
    </div>

    {/* FORM */}
    <form
      onSubmit={submitReview}
      className="mt-6 grid gap-3 sm:grid-cols-3"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:border-white/30"
      />

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-white/30"
      >
        {[5, 4, 3, 2, 1].map((n) => (
          <option key={n} value={n} className="text-black">
            {n} star{n === 1 ? "" : "s"}
          </option>
        ))}
      </select>

      <button
        type="submit"
       className="rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 px-4 py-3 font-semibold text-black hover:opacity-90 transition"
      >
        Submit review
      </button>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tell us what you loved…"
        className="sm:col-span-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:border-white/30 min-h-[120px]"
      />
    </form>

    {/* LIST */}
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {reviews.length === 0 ? (
        <p className="text-sm text-white/75">
          No reviews yet — be the first 👀
        </p>
      ) : (
        reviews.map((r: any) => (
          <div
            key={r.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-semibold text-white">{r.name}</p>
              <p className="text-sm text-yellow-300">
                {"★".repeat(r.rating || 0)}
              </p>
            </div>
            <p className="mt-2 text-sm text-white/85">{r.message}</p>
           <button
  className="mt-3 text-xs text-red-400 hover:text-red-300"
 onClick={async () => {
  const password = prompt("Admin password?");
  if (!password) return;

  const res = await fetch("/api/reviews/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: r.id, password }),
  });

  const json = await res.json();

  if (!res.ok) {
    alert("Delete failed: " + (json.error || "Unknown error"));
    return;
  }

  fetchReviews();
}}>

  Delete
</button>
          </div>
        ))
      )}
    </div>
  </div>
</section>
      </div>
    </main>
  );
}
