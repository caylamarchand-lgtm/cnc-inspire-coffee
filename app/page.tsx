"use client";

import React from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import {BRAND} from "@/app/data/brand";
import { PALETTE} from "@/app/data/palette";
import { styles } from "@/app/data/styles";
import {
  COFFEES,
  TEA_IDS,
  CLASSIC_COFFEES,
  FLAVORED_COFFEES,
  TEAS,
  CHOCOLATES,
} from "@/app/data/Products";
 

import CoffeeCard from "@/app/components/CoffeeCard";
import Card from "@/app/components/Card";




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
            <Card strong className="p-4 min-h-[420px] flex flex-col justify-center">
              <div className="flex items-start gap-6">
                <div className="rounded-2xl bg-[#F6F1E6] p-2 ring-1 ring-black/10">
                  <Image
                   src="/Dubai-Coffee.jpg"
                   alt="Dubai Chocolate Oasis Limited Edition Coffee"
                    width={180}
                    height={225}
                    className="rounded-xl object-cover"
                    priority
                  />
                </div>

                <div className="flex-1">
                  <p
                    className="text-xs tracking-[0.35em] uppercase"
                    style={{ color: PALETTE.muted }}
                  >
                  NEW ARRIVAL • LIMITED EDITION
                  </p>

                  <h3
                    className="mt-1 text-x2 font-semibold"
                    style={{ color: PALETTE.ink }}
                  >
                   Dubai Chocolate Oasis 
                  </h3>

                  <p className="mt-2 text-sm" style={{ color: PALETTE.muted }}>
                   Creamy milk chocolate meets nutty pistachio in a smooth, indulgent medium roast. A luxurious escape in every cup!
                    </p>
<p className="mt-3 text-xs font-semibold" style={{ color: PALETTE.ink }}>
12 OZ WHOLE BEAN COFFEE
</p>
<div className="mt-4">
  <a
    href="https://buy.stripe.com/00weVddke5kLaiH5NtefC1b"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-full px-6 py-3 text-sm font-bold"
    style={{
      background: "#D4AF70",
      color: "#201810",
      textDecoration: "none",
    }}
  >
    Shop Dubai Chocolate Oasis
  </a>
</div>



                </div>
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
