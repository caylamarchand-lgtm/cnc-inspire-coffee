import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
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

      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="mb-6">
        Have a question about your order, shipping, or our coffee? We’re happy
        to help.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Email</h2>
      <p className="mb-4">
        📧 <strong>cncinspirecoffee@gmail.com</strong>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Business Hours</h2>
      <p className="mb-4">
        Monday – Friday<br />
        9:00 AM – 5:00 PM (Pacific Time)
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Location</h2>
      <p className="mb-4">
        CNC Inspire Coffee is based in California and ships within the United
        States.
      </p>
    </main>
  );
}