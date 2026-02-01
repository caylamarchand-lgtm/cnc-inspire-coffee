export default function CancelPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B1B1A] text-white px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-semibold">Order canceled</h1>

        <p className="mt-4 text-white/80">
          No worries — your card was not charged.
          You can come back anytime when the coffee mood hits ☕
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <a
            href="/"
            className="rounded-full bg-[#D6B46A] px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:brightness-105"
          >
            Try Again
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}