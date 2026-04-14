"use client";

import { useEffect, useState } from "react";

export default function CartButton() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.length);
    };

    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <a href="/cart" className="hover:text-white transition">
      Cart 🛒 {cartCount > 0 ? `(${cartCount})` : ""}
    </a>
  );
}