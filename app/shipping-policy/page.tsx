import Image from "next/image";
import Link from "next/link";

export default function ShippingPolicy() {
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

      <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>

      <p className="mb-4">Last updated: January 2026</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Order Processing Time</h2>
     <p className="mb-4">
  Because we are a small-batch brand, orders are processed and packed within
  <strong> 2–5 business days</strong>. Processing time does not include shipping
  transit time. During launches and limited releases, processing may take
  slightly longer.
</p>

<h2 className="text-xl font-semibold mt-8 mb-3">Small Batch Roasting</h2>
<p className="mb-4">
  CNC Inspire Coffee is a small-batch coffee brand. We roast in limited
  quantities to ensure freshness and quality. Because of this, processing
  times may vary slightly depending on current batch availability and order
  volume.
</p>

<p className="mb-4">
  By placing an order, you acknowledge that your coffee is roasted with care
  and intention, not mass-produced. We appreciate your patience as we grow.
</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Shipping Method</h2>
      <p className="mb-4">
        We currently ship orders within the United States only. Shipping rates
        are calculated at checkout or provided as a flat rate depending on your
        order.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Delivery Time</h2>
      <p className="mb-4">
        Delivery times vary depending on your location and the carrier. CNC
        Inspire Coffee is not responsible for delays caused by shipping
        carriers, weather conditions, or other circumstances beyond our
        control.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Shipping Delays</h2>
      <p className="mb-4">
        Once an order has been shipped, tracking information will be provided
        when available. Delays during transit are the responsibility of the
        carrier.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Incorrect Address</h2>
      <p className="mb-4">
        Please ensure that your shipping address is entered correctly at
        checkout. CNC Inspire Coffee is not responsible for orders shipped to
        incorrect or incomplete addresses provided by the customer.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Contact</h2>
      <p className="mb-4">
        If you have questions about shipping, please contact us at:
        <br />
        <strong>cncinspirecoffee@gmail.com</strong>
      </p>
    </main>
  );
}