import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

type CartItem = {
  id: string;
  name: string;
  notes?: string;
  price: number;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const cartItems: CartItem[] = body.cartItems || [];

    if (!cartItems.length) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    const groupedCart = cartItems.reduce(
      (acc: Record<string, CartItem & { quantity: number }>, item) => {
        if (acc[item.id]) {
          acc[item.id].quantity += 1;
        } else {
          acc[item.id] = { ...item, quantity: 1 };
        }
        return acc;
      },
      {}
    );

    const groupedItems = Object.values(groupedCart);

    const totalQuantity = groupedItems.reduce((sum, item) => sum + item.quantity, 0);

    let shippingAmount = 0;
    if (totalQuantity === 1) shippingAmount = 500;
    if (totalQuantity === 2) shippingAmount = 800;
    if (totalQuantity >= 3) shippingAmount = 0;

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = groupedItems.map(
      (item) => ({
        quantity: item.quantity,
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            description: item.notes || undefined,
          },
          unit_amount: Math.round(item.price * 100),
        },
      })
    );

    const origin = new URL(request.url).origin;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cart`,
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: shippingAmount,
              currency: "usd",
            },
            display_name: shippingAmount === 0 ? "Free Shipping" : "Standard Shipping",
          },
        },
      ],
    });

    return NextResponse.json({ url: session.url });
 } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Something went wrong creating checkout." },
      { status: 500 }
    );
  }
}
