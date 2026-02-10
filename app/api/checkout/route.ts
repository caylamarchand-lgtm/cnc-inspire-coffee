import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * We are using Stripe Payment Links now (not Checkout Sessions).
 * This endpoint is intentionally disabled so old code can't trigger errors/popups.
 */
export async function POST() {
  return NextResponse.json(
    {
      error:
        "Checkout disabled — using Stripe Payment Links. Use the product's stripe URL instead.",
    },
    { status: 400 }
  );
}