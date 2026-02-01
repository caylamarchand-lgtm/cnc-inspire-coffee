import Image from "next/image";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
<main className="max-w-3xl mx-auto my-16 px-6 py-12 text-[#0B1B1A] bg-[#F3E9DC] rounded-xl shadow-lg">


<div className="flex justify-center mb-6">
  <Link href="/">
    <Image
      src="/logo.png"
      alt="CNC Inspire Coffee logo"
      width={120}
      height={120}
      priority
      className="cursor-pointer"
    />
  </Link>
</div>

      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p className="mb-4">Last updated: January 2026</p>

      <p className="mb-6">
        Welcome to CNC Inspire Coffee. By accessing or purchasing from this
        website, you agree to the following Terms & Conditions. Please read
        them carefully before placing an order.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">General Information</h2>
      <p className="mb-4">
        CNC Inspire Coffee operates an online store offering roasted coffee
        products. All products are roasted by a third-party roaster and sold
        under the CNC Inspire Coffee brand.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Food Product Disclaimer</h2>
      <p className="mb-4">
        Coffee is a consumable food product. By purchasing from our site, you
        acknowledge that taste preferences vary and that flavor profiles are
        subjective. We do not guarantee specific taste outcomes.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">No Refunds or Returns</h2>
      <p className="mb-4">
        Due to the nature of food products, ALL SALES ARE FINAL. We do not
        accept returns, exchanges, or refunds once an order has been placed.
      </p>

      <p className="mb-4">
        Refunds will not be issued for dissatisfaction with taste, roast level,
        or personal preference.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Damaged or Incorrect Orders</h2>
      <p className="mb-4">
        If your order arrives damaged or incorrect, please contact us within
        48 hours of delivery with photos of the issue. We will review each
        case individually.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Order Processing & Shipping</h2>
      <p className="mb-4">
        Orders are roasted and shipped within the stated processing time on
        the website. Shipping times may vary due to carrier delays, weather,
        or other factors beyond our control.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Payment Processing</h2>
      <p className="mb-4">
        Payments are processed securely through third-party payment processors
        such as Stripe. CNC Inspire Coffee does not store or have access to your
        full payment details.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Limitation of Liability</h2>
      <p className="mb-4">
        CNC Inspire Coffee is not liable for any indirect, incidental, or
        consequential damages arising from the use or consumption of our
        products.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Governing Law</h2>
      <p className="mb-4">
        These Terms & Conditions are governed by the laws of the State of
        California.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Contact Information</h2>
      <p className="mb-4">
        For questions regarding these Terms & Conditions, contact us at:
        <br />
        <strong>cncinspirecoffee@gmail.com</strong>
      </p>
    </main>
  );
}