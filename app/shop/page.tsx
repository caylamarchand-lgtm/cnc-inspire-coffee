"use client";

function addToCart(product: any) {
  const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart = [...existingCart, product];
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));
}

export default function ShopPage() {
  const coffees = [
    { name: "True North", desc: "Base Camp Blend • bold • steady" },
    { name: "Still I Rise", desc: "Colombian • rich • smooth" },
    { name: "After Dark", desc: "Dark roast • bold • deep" },
    { name: "Anchor", desc: "Organic Guatemala • balanced • smooth" },
    { name: "La Buena Hora", desc: "Mexican Nayarit • smooth • comforting" },
    { name: "Higher Ground", desc: "Organic Peru • clean • elevated" },
    { name: "Obsidian King", desc: "Bold • dark • premium" },
    { name: "Golden Hour Crème", desc: "Flavored • warm • sweet" },
    { name: "Desert Ember", desc: "Flavored • cozy • rich" },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">Shop Coffee</h1>
        <p className="mt-2 text-white/70">Browse all available coffees below.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coffees.map((coffee) => (
            <div key={coffee.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-xl font-semibold">{coffee.name}</h2>
              <p className="mt-2 text-white/70">{coffee.desc}</p>
              <button
                onClick={() =>
                  addToCart({
                    id: coffee.name,
                    name: coffee.name,
                    price: 24.99,
                  })
                }
                className="mt-4 rounded-full bg-yellow-400 px-5 py-2 font-semibold text-black"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <section id="sweet-add-ons" className="mt-12 rounded-3xl border border-white/20 bg-white/10 p-6 text-white">
          <p className="text-xs uppercase tracking-widest text-pink-300 mb-2">
            SWEET ADD-ONS
          </p>

          <h2 className="text-2xl font-semibold mb-6">Honey Sticks & Rock Candy</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="text-xl font-semibold text-pink-300">Fun Honey Bar</h3>

              <p className="mt-2 text-white/70">
                Coming soon: Strawberry • Watermelon • Blueberry • Tropical Punch • Peach • Mango
              </p>

              <button
                onClick={() =>
                  addToCart({
                    id: "fun-honey-10",
                    name: "Fun Honey Bar - 10 Pack",
                    price: 6,
                  })
                }
                className="mt-4 rounded-full bg-pink-400 px-5 py-2 font-semibold text-black"
              >
                10 Pack - $6 coming soon
              </button>

              <button
                onClick={() =>
                  addToCart({
                    id: "fun-honey-20",
                    name: "Fun Honey Bar - 20 Pack",
                    price: 10,
                  })
                }
                className="mt-3 rounded-full bg-pink-400 px-5 py-2 font-semibold text-black"
              >
                20 Pack - $10 coming soon
              </button>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="text-xl font-semibold text-yellow-300">
                Premium California Honey
              </h3>

              <p className="mt-2 text-white/70">
                In Stock: Wildflower • Orange Blossom
              </p>

              <p className="mt-4 text-sm text-white/60">
                Sweet California honey, your way
              </p>

              <div className="mt-4 space-y-3">
                <button
                  onClick={() =>
                    addToCart({
                      id: "premium-honey-wildflower-10",
                      name: "Premium Honey - Wildflower 10 Pack",
                      price: 7,
                    })
                  }
                  className="w-full rounded-full bg-yellow-400 px-5 py-2 font-semibold text-black"
                >
                  Wildflower 10 Pack - $7
                </button>

                <button
                  onClick={() =>
                    addToCart({
                      id: "premium-honey-wildflower-20",
                      name: "Premium Honey - Wildflower 20 Pack",
                      price: 12,
                    })
                  }
                  className="w-full rounded-full bg-yellow-400 px-5 py-2 font-semibold text-black"
                >
                  Wildflower 20 Pack - $12
                </button>

                <button
                  onClick={() =>
                    addToCart({
                      id: "premium-honey-orange-blossom-10",
                      name: "Premium Honey - Orange Blossom 10 Pack",
                      price: 7,
                    })
                  }
                  className="w-full rounded-full bg-yellow-400 px-5 py-2 font-semibold text-black"
                >
                  Orange Blossom 10 Pack - $7
                </button>

<button
  onClick={() =>
    addToCart({
      id: "premium-honey-mixed-10",
      name: "Premium Honey - Mixed 10 Pack",
      price: 7,
    })
  }
  className="w-full rounded-full bg-yellow-400 px-5 py-2 font-semibold text-black"

 > Mixed 10 Pack - 5 Wildflower + 5 Orange Blossom - $7
</button>


                <button
                  onClick={() =>
                    addToCart({
                      id: "premium-honey-orange-blossom-20",
                      name: "Premium Honey - Orange Blossom 20 Pack",
                      price: 12,
                    })
                  }
                  className="w-full rounded-full bg-yellow-400 px-5 py-2 font-semibold text-black"
                >
                  Orange Blossom 20 Pack - $12
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="text-xl font-semibold text-purple-300">Rock Candy Sticks</h3>

              <p className="mt-2 text-white/70">
                Coming soon: Blue Raspberry • Cotton Candy • Cherry • Watermelon
              </p>

              <button
                onClick={() =>
                  addToCart({
                    id: "rock-candy-3",
                    name: "Rock Candy - 3 Pack",
                    price: 6,
                  })
                }
                className="mt-4 rounded-full bg-purple-400 px-5 py-2 font-semibold text-black"
              >
                Pick Any 3 - $6 coming soon
              </button>

              <button
                onClick={() =>
                  addToCart({
                    id: "rock-candy-5",
                    name: "Rock Candy - 5 Pack",
                    price: 9,
                  })
                }
                className="mt-3 rounded-full bg-purple-400 px-5 py-2 font-semibold text-black"
              >
                Pick Any 5 - $9 coming soon
              </button>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-white/20 bg-white/10 p-6 text-white">
          <p className="text-xs uppercase tracking-widest text-yellow-300 mb-2">
            TRY ME FIRST
          </p>

          <h2 className="text-2xl font-semibold mb-2">2oz Coffee Samples</h2>

          <p className="text-sm text-white/70 mb-4">
            Not sure which roast is your vibe yet? Try our 2oz sample bags before committing 🤍
          </p>

          <a
            href="/samples"
            className="inline-block bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-yellow-300"
          >
            View Sample Collection
          </a>
        </section>
      </div>
    </main>
  );
}