export function addToCart(product: any) {
  const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart = [...existingCart, product];

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));
}