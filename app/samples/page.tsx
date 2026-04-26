"use client";

import React from "react";

function addToCart(product: any) {
  const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart = [...existingCart, product];

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));
}

const sampleFlavors = [
  "After Dark Roast",
  "True North",
  "Still I Rise",
  "Anchor",
  "La Buena Hora",
  "Higher Ground",
  "Obsidian King",
  "Desert Ember",
  "Golden Hour Crème",
];

export default function SamplesPage() {
  const [selected, setSelected] = React.useState<string[]>([]);

  function toggleFlavor(flavor: string) {
    if (selected.includes(flavor)) {
      setSelected(selected.filter((item) => item !== flavor));
    } else {
      setSelected([...selected, flavor]);
    }
  }

  function addSamplePack(count: number, price: number, freeShipping = false) {
    if (selected.length !== count) {
      alert(`Please choose exactly ${count} sample flavor${count > 1 ? "s" : ""}.`);
      return;
    }

    addToCart({
      id: `sample-pack-${count}-${Date.now()}`,
      name: `${count} Sample Pack`,
      notes: selected.join(", "),
      price,
      freeShipping,
    });

    setSelected([]);
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold">2oz Coffee Samples</h1>

        <p className="mt-2 text-white/70">
          Pick your flavors first, then choose your sample pack size (1, 3, or 5).

        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Choose your flavors</h2>

          <p className="mt-1 text-sm text-white/60">
            Selected: {selected.length}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {sampleFlavors.map((flavor) => (
              <button
                key={flavor}
                onClick={() => toggleFlavor(flavor)}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  selected.includes(flavor)
                    ? "bg-yellow-400 text-black"
                    : "bg-white/10 text-white"
                }`}
              >
                {flavor}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <button
            onClick={() => addSamplePack(1, 6)}
            className="rounded-full bg-white/10 px-5 py-2 font-semibold text-white"
          >
            1 for $6
          </button>

          <button
            onClick={() => addSamplePack(3, 15)}
            className="rounded-full bg-yellow-400 px-5 py-2 font-semibold text-black"
          >
            3 for $15
          </button>

          <button
            onClick={() => addSamplePack(5, 25, true)}
            className="rounded-full bg-green-500 px-5 py-2 font-semibold text-black"
          >
            5 for $25 + Free Shipping
          </button>
        </div>
      </div>
    </main>
  );
}