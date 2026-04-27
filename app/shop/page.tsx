"use client"

function addToCart(product: any) {
  const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart = [...existingCart, product];
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));
}

export default function ShopPage() {
  const coffees = [
    {
      name: "True North",
      desc: "Base Camp Blend • bold • steady",
      link: "#",
    },
    {
      name: "Still I Rise",
      desc: "Colombian • rich • smooth",
      link: "#",
    },
    {
      name: "After Dark",
      desc: "Dark roast • bold • deep",
      link: "#",
    },
    {
      name: "Anchor",
      desc: "Organic Guatemala • balanced • smooth",
      link: "#",
    },
    {
      name: "La Buena Hora",
      desc: "Mexican Nayarit • smooth • comforting",
      link: "#",
    },
    {
      name: "Higher Ground",
      desc: "Organic Peru • clean • elevated",
      link: "#",
    },
    {
      name: "Obsidian King",
      desc: "Bold • dark • premium",
      link: "#",
    },
    {
      name: "Golden Hour Crème",
      desc: "Flavored • warm • sweet",
      link: "#",
    },
    {
      name: "Desert Ember",
      desc: "Flavored • cozy • rich",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">Shop Coffee</h1>
        <p className="mt-2 text-white/70">
          Browse all available coffees below.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coffees.map((coffee) => (
            <div
              key={coffee.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
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
  className="mt-4 inline-block rounded-full bg-yellow-400 px-5 py-2 font-semibold text-black"
>
  Add to Cart
</button>
            </div>
          ))}
        </div>
        <section className="mt-12 rounded-3xl border border-white/20 bg-white/10 p-6 text-white">
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
      </div>
    </main>
  );
}