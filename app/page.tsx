"use client";

import React from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

function addToCart(product: any) {
  const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

  const updatedCart = [...existingCart, product];

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  // 🔥 THIS LINE FIXES EVERYTHING
  window.dispatchEvent(new Event("cartUpdated"));
}


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
  border: "1px solid " + PALETTE.border,
  boxShadow: "0 10px 28px rgba(0,0,0,0.10)",
},

cardStrong: {
  background: PALETTE.cardStrong,
  border: "1px solid " + PALETTE.border,
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
      className={"rounded-2xl " + (className || "")}
      style={strong ? styles.cardStrong : styles.card}
    >
      {children}
    </div>
  );
}

type Coffee = {
  id: string;
  name: string;
  price: number;
  notes: string;
  limited: boolean;
  stripe: string;
  category: "classic" | "flavored" | "treat" | "tea";
};

const COFFEES: Coffee[] = [
  {
    id: "after-dark",
    name: "After Dark Roast",
    notes: "Indonesian whole bean coffee • Earthy cocoa notes • Bold dark roast",
    price: 23,
    limited: false,
    stripe: "https://buy.stripe.com/3cI6oH3JE3cDfD1gs7efC0e",
   category: "classic",

  },
  {
    id: "la-buena-hora",
    name: "La Buena Hora",
    notes: "Mexican whole bean coffee • Smooth nutty flavor • Balanced medium roast",
    price: 23,
    limited: false,
    stripe: "https://buy.stripe.com/dRm14n6VQbJ962r6RxefC0h",
    category: "classic",

  },
  {
    id: "higher-ground",
    name: "Higher Ground",
    notes: "Organic Peru whole bean coffee • Smooth premium roast • Balanced finish",
    price: 24,
    limited: true,
    stripe: "https://buy.stripe.com/fZudR91BweVl76va3JefC0c",
    category: "classic",

  },
  {
    id: "anchor",
    name: "Anchor",
    notes: "Organic Guatemala whole bean coffee • Smooth balanced flavor • Medium roast",
    price: 22,
    limited: false,
    stripe: "https://buy.stripe.com/aFa8wP6VQeVl9eDdfVefC0g",
    category: "classic",

  },
  {
    id: "still-i-rise",
    name: "Still I Rise",
    notes: "Colombian whole bean coffee • Rich smooth flavor • Easy everyday roast",
    price: 23,
    limited: false,
    stripe: "https://buy.stripe.com/5kQ8wP1BwdRh0I7a3JefC0d",
    category: "classic",

  },
  {
    id: "true-north",
    name: "True North",
    notes: "Signature whole bean blend • Bold balanced flavor • Smooth finish",
    price: 22,
    limited: false,
    stripe: "https://buy.stripe.com/00wdR96VQ14v76vb7NefC0f",
    category: "classic",

  },
  {
  id: "obsidian-king",
  name: "Obsidian King",
  notes: "Dark roast whole bean coffee • Bold smoky flavor • Rich smooth finish",
  price: 25,
  limited: false,
  stripe: "https://buy.stripe.com/bJe3cv93Y9B1bmLfo3efC0i",
  category: "classic",

},
{
  id: "desert-ember",
  name: "Desert Ember",
  notes: "Flavored whole bean coffee • Warm mocha-inspired flavor • Smooth finish",
  price: 24,
  limited: false,
  stripe: "https://buy.stripe.com/eVqeVd2FAeVl4Yn0t9efC0y",
  category: "flavored",
},
{
  id: "golden-hour-creme",
  name: "Golden Hour Crème",
  notes: "Vanilla crème flavored whole bean coffee • Smooth creamy finish",
  price: 24,
  limited: false,
  stripe: "https://buy.stripe.com/8x200j5RM6oPaiH3FlefC0z",
  category: "flavored",
},

{
  id: "golden-barrel",
  name: "Golden Barrel",
  notes: "Whiskey Caramel Cream flavored whole bean coffee • Rich caramel, cream & whiskey notes • Warm, bold finish",
  price: 23,
  limited: false,
  stripe: "https://buy.stripe.com/aFa6oH93Y4gH3Uj7VBefC0H",
  category: "flavored",
},
{
  id: "sunset-pecan",
  name: "Sunset Pecan",
  notes: "Caramel Pecan flavored whole bean coffee • Sweet caramel meets buttery pecan • Smooth nutty finish",
  price: 23,
  limited: false,
  stripe: "https://buy.stripe.com/aFa00ja828wXbmLdfVefC0I",
  category: "flavored",
},

  // TEAS (kept in the same array - totally fine)
  {
    id: "soft-horizon",
    name: "Soft Horizon",
    notes: "Whole leaf chamomile tea • Caffeine-free herbal blend • Smooth calming finish",
    price: 10,
    limited: false,
    stripe: "https://buy.stripe.com/9B628r3JE14v9eD1xdefC0a",
    category: "tea"
  },
  {
    id: "desert-current",
    name: "Desert Current",
    notes: "Whole leaf Moroccan mint green tea • Light caffeine • Crisp refreshing flavor",

    price: 10,
    limited: false,
    // ✅ FIXED: removed the comma at the end
    stripe: "https://buy.stripe.com/aFadR92FA28z1Mba3JefC0b",
    category: "tea"
  },
  {
  id: "golden-dunes-15",
  name: "Golden Dunes (1.5oz)",
  notes: "Whole leaf honeybush herbal tea • Smooth comforting flavor • Caffeine-free blend",
  price: 10,
  limited: false,
  stripe: "https://buy.stripe.com/3cI00j7ZU00raiHcbRefC0s",
  category: "tea"
},
{
  id: "first-light-15",
  name: "First Light (1.5oz)",
  notes: "Whole leaf English breakfast tea • Bold energizing black tea blend",
  price: 10,
  limited: false,
  stripe: "https://buy.stripe.com/00wbJ15RM14vbmLa3JefC0q",
  category: "tea"
},
{
  id: "desert-heat-15",
  name: "Desert Heat (1.5oz)",
  notes: "Whole leaf ginger root herbal tea • Warming spicy flavor • Caffeine-free blend",
  price: 10,
  limited: false,
  stripe: "https://buy.stripe.com/28EdR96VQ9B14Yn7VBefC0o",
  category: "tea"
},
{
  id: "moon-drift-15",
  name: "Moon Drift (1.5oz)",
  notes: "Whole leaf chamomile lavender tea • Caffeine-free herbal blend • Relaxing finish",
  price: 10,
  limited: false,
  stripe: "https://buy.stripe.com/eVqdR90xs3cD2Qffo3efC0n",
  category: "tea"
},
{
  id: "coastal-drift-15",
  name: "Coastal Drift (1.5oz)",
  notes: "Whole leaf Earl Grey tea • Smooth balanced black tea blend",
  price: 10,
  limited: false,
  stripe: "https://buy.stripe.com/28E5kD5RMcNdaiH8ZFefC0m",
  category: "tea"
},
{
  id: "desert-breeze-15",
  name: "Desert Breeze (1.5oz)",
  notes: "Whole leaf spearmint herbal tea • Cool refreshing flavor • Caffeine-free blend",
  price: 10,
  limited: false,
  stripe: "https://buy.stripe.com/dRmbJ13JE8wXgH50t9efC0w",
  category: "tea"
},
{
  id: "sunset-sangria",
  name: "Sunset Sangria",
  notes: "Whole leaf hibiscus fruit tea • Vibrant fruity flavor • Refreshing herbal blend",
  price: 10,
  limited: false,
  stripe: "https://buy.stripe.com/bJe7sL4NI7sT3UjejZefC0A",
  category: "tea"
},
{
  id: "desert-fuel",
  name: "Desert Fuel",
  notes: "Dark chocolate espresso beans • Bold crunch • Rich coffee bite",
  price: 6,
  limited: false,
  stripe: "https://buy.stripe.com/4gMaEX7ZUdRhaiHcbRefC0F",
  category: "treat"
},

{
  id: "golden-hour-bites",
  name: "Golden Hour Bites",
  notes: "Dark chocolate mocha centers • Smooth creamy filling • Sweet finish",
  price: 6,
  limited: false,
  stripe: "https://buy.stripe.com/4gM6oH3JEdRh62r8ZFefC0G",
  category: "treat"
},

{
  id: "sweet-escape-dough-bites",
  name: "Sweet Escape Dough Bites",
  notes: "Chocolate shell • Sweet brownie cookie dough center • Smooth dessert-style treat",
  price: 5,
  limited: false,
  stripe: "https://buy.stripe.com/8x25kD5RM6oP9eD1xdefC0K",
  category: "treat"
},

{
  id: "mocha-moon-drops",
  name: "Mocha Moon Drops",
  notes: "Chocolate shell • Coffee-filled center • Rich mocha flavor • Made for coffee lovers",
  price: 6,
  limited: false,
  stripe: "https://buy.stripe.com/aFa28r3JEfZpbmL1xdefC0J",
  category: "treat"
},


];



const TEA_IDS = ["soft-horizon", "desert-current","golden-dunes-15","first-light-15","desert-heat-15","moon-drift-15","coastal-drift-15","desert-breeze-15","sunset-sangria"];

const CLASSIC_COFFEES = COFFEES.filter((p) => p.category === "classic");
const FLAVORED_COFFEES = COFFEES.filter((p) => p.category === "flavored");
const TEAS = COFFEES.filter((p) => p.category === "tea");
const CHOCOLATES = COFFEES.filter((p) => p.category === "treat");


function CoffeeCard({ coffee }: { coffee: Coffee }) {
  const label = coffee.limited ? "SMALL BATCH" : "AVAILABLE NOW";
  const headline = coffee.name;

  return (
    <div style={styles.squareCard} className="p-6">
      <p
        className="text-xs tracking-[0.35em] uppercase opacity-70"
        style={{ color: PALETTE.ink }}
      >
        {label}
      </p>

      <h3 className="mt-2 text-lg font-semibold" style={{ color: PALETTE.ink }}>
        {headline}
      </h3>

      <p className="mt-2 text-sm opacity-90" style={{ color: PALETTE.ink }}>
        {coffee.notes}
      </p>

      {coffee.stripe ? (
       <>
  <a
    href={coffee.stripe}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-block rounded-full px-5 py-2 text-sm font-semibold"
    style={{ background: PALETTE.gold }}
  >
    Buy Now
  </a>

  <button
    onClick={() => addToCart(coffee)}
    className="mt-2 inline-block rounded-full px-5 py-2 text-sm font-semibold"
    style={{ background: "#333", color: "#fff" }}
  >
    Add to Cart
  </button>
</>
        
      ) : (
        <div
          className="mt-4 inline-block rounded-full px-5 py-2 text-sm font-semibold opacity-70"
          style={{
            background: "rgba(214,180,106,0.35)",
            color: PALETTE.ink,
          }}
        >
          Coming soon
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const firstBuyLink = CLASSIC_COFFEES.find((c) => c.stripe)?.stripe || "#shop";

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
    href="/shop"
    className="rounded-full px-5 py-2 text-sm font-semibold inline-block"
    style={{ background: PALETTE.gold }}
  >
    Shop Coffee
  </a>

  <a
    href="#tea"
    className="rounded-full px-5 py-2 text-sm font-semibold inline-block"
    style={{ background: PALETTE.gold }}
  >
    Shop Tea
  </a>

<a
  href="/shop#sweet-add-ons"
  className="rounded-full px-5 py-2 text-sm font-semibold inline-block"
 style={{ background: "#f9a8d4", color: "#000"}}>

  Sweet Add-Ons
</a>

  <a
    href="#story"
    className="rounded-full border border-black/20 bg-black/5 px-5 py-2 text-sm font-semibold"
  >
    Our Story
  </a>

  <a
    href="#contact"
    className="rounded-full border border-black/20 bg-black/5 px-5 py-2 text-sm font-semibold"
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
                    OUR ROASTS
                  </p>
                  <p className="mt-2 text-sm" style={{ color: PALETTE.muted }}>
                   From smooth medium roasts to bold dark profiles — crafted for balance, comfort, and depth in every cup.
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
                   Sealed fresh and shipped with care — from our hands to yours, ready for your next perfect cup.
                  </p>
                </Card>
              </div>
            </div>

            {/* RIGHT */}
            <Card strong className="p-4">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-[#F6F1E6] p-2 ring-1 ring-black/10">
                  <Image
                    src="/coffee-treats.jpg"
                   alt="Desert Fuel and Golden Hour Bites chocolate covered coffee beans"
                    width={120}
                    height={150}
                    className="rounded-xl object-cover"
                    priority
                  />
                </div>

                <div className="flex-1">
                  <p
                    className="text-xs tracking-[0.35em] uppercase"
                    style={{ color: PALETTE.muted }}
                  >
                    New Coffee Bean Treats 
                  </p>

                  <h3
                    className="mt-1 text-xl font-semibold"
                    style={{ color: PALETTE.ink }}
                  >
                   Desert Fuel + Golden Hour Bites 
                  </h3>

                  <p className="mt-2 text-sm" style={{ color: PALETTE.muted }}>
                    Dark chocolate espresso beans and creamy mocha-filled bites made for coffee lovers.{" "}
                    </p>
<p className="mt-3 text-xs font-semibold" style={{ color: PALETTE.ink }}>
  Heat-Safe Shipping Note: Chocolate coffee treats ship Monday–Wednesday only to help prevent weekend delays and melting in transit.
</p>
<div className="mt-4 flex flex-wrap gap-3">
  <a
    href="https://buy.stripe.com/4gMaEX7ZUdRhaiHcbRefC0F"
    className="inline-block rounded-full px-4 py-2 text-sm font-semibold"
    style={{ background: "#3a2a1f", color: "#fff", textDecoration: "none" }}
  >
    Buy Desert Fuel
  </a>

  <a
    href="https://buy.stripe.com/4gM6oH3JEdRh62r8ZFefC0G"
    className="inline-block rounded-full px-4 py-2 text-sm font-semibold"
    style={{ background: "#c89b5d", color: "#fff", textDecoration: "none" }}
  >
    Buy Golden Hour Bites
  </a>
</div>

                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {[
                { k: "BUY DESERT FUEL", v: "Dark chocolate espresso beans • bold crunch • rich coffee bite" },
{ k: "BUY GOLDEN HOUR BITES", v: "Dark chocolate mocha centers • smooth creamy filling • sweet finish" },

{ k: "SIZE", v: "2oz gourmet chocolate coffee treats" },
{ k: "BEST FOR", v: "coffee lovers & sweet caffeine cravings" },

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
        <section id="shop" className="pt-4 sm:pt-6">
          {/* COFFEE FIRST (important) */}
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-semibold tracking-wide text-white">
                COFFEE
              </h2>
              <p className="mt-2 text-white/80">
                Whole bean coffee • roasted with intention
              </p>
            </div>

            <span className="hidden sm:block text-xs tracking-[0.35em] uppercase text-white/70">
             small batch • core collection
            </span>
          </div>
<section className="mt-6 rounded-3xl border border-white/20 bg-white/10 p-2 text-white">

  <p className="text-xs uppercase tracking-widest text-yellow-300 mb-2">
    TRY ME FIRST
  </p>

  <h2 className="text-2xl font-semibold mb-2">
    2oz Coffee Samples
  </h2>

  <p className="text-sm text-white/70 mb-4">
    Not sure which roast is your vibe yet? Try our 2oz sample bags before committing ☕
  </p>

  <a
    href="/samples"
    className="inline-block bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-yellow-300 transition"
  >
    View Sample Collection
  </a>
</section>
         <div className="mt-16 grid gap-10 lg:grid-cols-2">
  <section>
   <h2 className="text-3xl font-bold text-white mb-6"> Classic Coffees</h2>
    <div className="mt-6 grid gap-6">
      {CLASSIC_COFFEES.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </div>
  </section>

  <section>
   <h2 className="text-3xl font-bold text-white mb-6"> Flavored Coffees</h2>
    <div className="mt-6 grid gap-6">
      {FLAVORED_COFFEES.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </div>
  </section>



</div>
          {/* Divider */}
          <div className="my-14 h-px w-full bg-white/20" />

         <div className="mt-12 grid gap-8 lg:grid-cols-2">
  {/* TEAS */}
  <section
    id="tea"
    className="scroll-mt-24 rounded-2xl border border-white/15 bg-black/35 backdrop-blur p-6 sm:p-8"
  >
    <div className="flex items-end justify-between gap-6">
      <div>
        <h2 className="text-4xl font-semibold tracking-wide text-white">
          TEAS
        </h2>
        <p className="mt-2 text-white/80">
          Whole leaf blends • Small Batch
        </p>
      </div>

      <span className="text-xs tracking-[0.35em] uppercase text-white/70">
        Desert Series
      </span>
    </div>

    <div className="mt-6 grid gap-6">
      {TEAS.map((tea) => (
        <CoffeeCard key={tea.id} coffee={tea} />
      ))}
    </div>
  </section>

  {/* COFFEE TREATS */}
  <section className="rounded-2xl border border-white/15 bg-black/35 backdrop-blur p-4 sm:p-5">
    <h2 className="text-3xl font-semibold tracking-wide text-white">
      Coffee Treats & Bites
    </h2>

    <p className="mt-2 text-white/80">
      Chocolate-covered coffee treats made for coffee lovers.
    </p>

    <div className="mt-6 grid gap-6">
      {CHOCOLATES.map((treat) => (
        <CoffeeCard key={treat.id} coffee={treat} />
      ))}
    </div>
  </section>
</div>
</section>
        {/* REVIEWS */}
        <section id="reviews" className="pt-12 sm:pt-16">
          <div className="rounded-2xl border border-white/15 bg-black/55 backdrop-blur p-4 sm:p-5">
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
                      }}
                    >
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
