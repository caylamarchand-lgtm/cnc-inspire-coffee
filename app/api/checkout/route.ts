import Stripe from "stripe";
console.log("Stripe key loaded:", !!process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  const { productId } = await req.json();

  const PRODUCTS: Record<string, { name: string; price: number }> = {
    tolima: { name: "CNC Inspire Coffee – Colombian Tolima (12oz)", price: 24.99 },
  };

  const product = PRODUCTS[productId];
  if (!product) {
    return new Response("Invalid product", { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
   mode: "payment",
payment_method_types: ["card"],
line_items: [
  {
    price_data: {
      currency: "usd",
      product_data: {
        name: product.name,
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: 1,
  },
],
success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,

  });

  return Response.json({ url: session.url });
}