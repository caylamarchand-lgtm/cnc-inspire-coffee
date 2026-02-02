import Stripe from "stripe";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;

  // If the key is missing, we return a clean error instead of crashing the build
  if (!stripeKey) {
    return new Response("Missing STRIPE_SECRET_KEY", { status: 500 });
  }

  // ✅ Create Stripe INSIDE the handler (NOT at the top of the file)
  const stripe = new Stripe(stripeKey);

  const { productId } = await req.json();

  const PRODUCTS: Record<string, { name: string; price: number }> = {
    tolima: { name: "CNC Inspire Coffee | Colombian Tolima (12oz)", price: 24.99 },
  };

  const product = PRODUCTS[productId];
  if (!product) {
    return new Response("Invalid product", { status: 400 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: product.name },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: 1,
      },
    ],
    success_url: `${siteUrl}/success`,
    cancel_url: `${siteUrl}/cancel`,
  });

  return Response.json({ url: session.url });
}
