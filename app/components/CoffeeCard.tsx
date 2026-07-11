import React from "react";
import { PALETTE } from "@/app/data/palette";
import { styles } from "@/app/data/styles";
import type { Coffee } from "@/app/data/Products";
import { addToCart } from "@/lib/cart";


export default function CoffeeCard({ coffee }: { coffee: Coffee }) {
const label = coffee.limited ? "TEMPORARILY OUT OF STOCK" : "AVAILABLE NOW";

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

     {coffee.stripe && !coffee.limited ? (

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
         Temporarily Out Of Stock
        </div>
      )}
    </div>
  );
}