"use client";

import React from "react";
import Link from "next/link";

type CartItem = {
  id: string;
  name: string;
  notes?: string;
  price: number;
  stripe?: string;
};

export default function CartPage() {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  React.useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(savedCart);
  }, []);

  function removeFromCart(indexToRemove: number) {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function clearCart() {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

async function handleCheckout() {
  try {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error || "Checkout failed.");
      return;
    }

    if (data.url) {
      window.location.href = data.url;
    }
  } catch (error) {
    console.error("Checkout failed:", error);
    alert("Something went wrong starting checkout.");
  }
}

const groupedCart = cartItems.reduce((acc: Record<string, CartItem & { quantity: number }>, item) => {
  if (acc[item.id]) {
    acc[item.id].quantity += 1;
  } else {
    acc[item.id] = { ...item, quantity: 1 };
  }
  return acc;
}, {});

const groupedItems = Object.values(groupedCart);

const subtotal = groupedItems.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);


  return (
    <main className="min-h-screen px-6 py-10" style={{ background: "#2b4447" }}>
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-white">Your Cart</h1>

          <Link
            href="/shop"
            className="rounded-full px-4 py-2 text-sm font-semibold"
            style={{ background: "#d6b46a", color: "#2b1b1a" }}
          >
            Keep Shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-3xl bg-white/95 p-8 shadow">
            <p className="text-lg font-medium text-[#2b1b1a]">Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
             {groupedItems.map((item) => (
  <div
    key={item.id}
    className="rounded-3xl bg-white/95 p-6 shadow"
  >
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="text-xl font-semibold text-[#2b1b1a]">
          {item.name}
        </h2>

        {item.notes && (
          <p className="mt-1 text-sm text-[#2b1b1a]/70">{item.notes}</p>
        )}

        <div className="mt-3 space-y-1 text-sm text-[#2b1b1a]">
          <p>Price: ${item.price.toFixed(2)}</p>
          <p>Qty: {item.quantity}</p>
          <p className="font-semibold">
            Item Total: ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>

      <button
        onClick={() => {
          const indexToRemove = cartItems.findIndex((cartItem) => cartItem.id === item.id);
          if (indexToRemove !== -1) removeFromCart(indexToRemove);
        }}
        className="rounded-full px-4 py-2 text-sm font-semibold"
        style={{ background: "#333", color: "#fff" }}
      >
        Remove One
      </button>
    </div>
  </div>
))}
            </div>

           <div className="mt-6 rounded-3xl bg-white/95 p-6 shadow">
  <div className="mb-4 flex items-center justify-between">
    <span className="text-lg font-medium text-[#2b1b1a]">Subtotal</span>
    <span className="text-xl font-semibold text-[#2b1b1a]">
      ${subtotal.toFixed(2)}
    </span>
  </div>

  <div className="flex flex-wrap gap-3">
    <button
      onClick={clearCart}
      className="rounded-full px-5 py-2 text-sm font-semibold"
      style={{ background: "#333", color: "#fff" }}
    >
      Clear Cart
    </button>

    <button
      onClick={handleCheckout}
      className="rounded-full px-5 py-2 text-sm font-semibold"
      style={{ background: "#d6b46a", color: "#2b1b1a" }}
    >
      Checkout
    </button>
  </div>
</div>
          </>
        )}
      </div>
    </main>
  );
}
