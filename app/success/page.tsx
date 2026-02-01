export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B1B1A] text-white px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-semibold">Thank you for your order ☕</h1>

        <p className="mt-4 text-white/80">
          Your coffee is officially on its way to becoming your next favorite cup.
          We’ll send a confirmation email shortly.
        </p>

        <div className="mt-6">
          <a
            href="/"
            className="inline-block rounded-full bg-[#D6B46A] px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:brightness-105"
          >
            Back to Home
          </a>
        </div>

        <p className="mt-6 text-xs text-white/60">
          Roasted with intention • CNC Inspire Coffee
        </p>
      </div>
    </main>
  );
}