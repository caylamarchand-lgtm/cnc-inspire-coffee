import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Products
const PRODUCTS: Record<string, { name: string; price: number }> = {
  tolima: {
    name: "CNC Inspire Coffee — Colombian Tolima (12oz)",
    price: 24.99,
  },
};

export async function POST(req: Request) {
  try {
    const { productId } = await req.json();

    const product = PRODUCTS[productId];
    if (!product) {
      return Response.json({ error: "Invalid product" }, { status: 400 });
    }

    const secret = process.env.STRIPE_SECRET_KEY;
    if (!secret) {
      return Response.json(
        { error: "Missing STRIPE_SECRET_KEY" },
        { status: 500 }
      );
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
      "http://localhost:3000";

    // ✅ FIXED Stripe init
    const stripe = new Stripe(secret);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: Math.round(product.price * 100),
            product_data: {
              name: product.name,
            },
          },
        },
      ],
      success_url: `${siteUrl}/success`,
      cancel_url: `${siteUrl}/cancel`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return Response.json(
      { error: "Checkout failed" },
      { status: 500 }
    );
  }
}