import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CNC Inspire Coffee",
  description: "Small batch coffee — roasted with intention.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#070B10] text-[#F6F1E6]`}
      >
        {/* Cinematic background (global) */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          {/* Base */}
          <div className="absolute inset-0 bg-[#070B10]" />

          {/* “Mountains at dusk” gradient wash */}
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,206,120,0.12),transparent_55%),radial-gradient(900px_520px_at_12%_12%,rgba(120,175,255,0.10),transparent_60%),radial-gradient(900px_520px_at_88%_18%,rgba(255,126,177,0.10),transparent_60%),linear-gradient(180deg,rgba(15,24,38,0.85),rgba(7,11,16,1))]" />

          {/* Horizon glow */}
          <div className="absolute left-0 right-0 top-[280px] h-[220px] bg-[radial-gradient(70%_100%_at_50%_0%,rgba(255,206,120,0.10),transparent_60%)] blur-2xl" />

          {/* Soft vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]" />

          {/* Grain */}
          <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.6px,transparent_0.6px)] [background-size:18px_18px]" />
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070B10]/55 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
             <div className="rounded-2xl border border-[#D6B46A]/35 bg-white/10 p-2 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <Image
                  src="/logo.png"
                  alt="CNC Inspire Coffee"
                  width={75}
                  height={75}
                  className="h-16 w-16 rounded-xl object-contain"
                  priority
                />
              </div>

              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-wide">
                  CNC Inspire Coffee
                </p>
                <p className="text-[11px] tracking-[0.22em] text-white/60">
                  ROASTED WITH INTENTION
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-7 text-sm text-white/80 sm:flex">
              <a href="#shop" className="hover:text-white transition">
                Shop
              </a>
              <a href="#story" className="hover:text-white transition underline underline-offset-4 decoration-white/30 hover:decoration-white">
  Our Story
</a>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </nav>

            {/* Mobile hint */}
            <div className="sm:hidden text-xs text-white/60">Menu ↑</div>
          </div>
        </header>

        {children}

        <footer className="mt-12 border-t border-white/10 bg-[#070B10]/40">
  <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/70 text-center">

    <div className="flex flex-wrap justify-center gap-4 mb-4">
      <a href="/terms" className="hover:text-white transition">Terms</a>
      <a href="/privacy-policy" className="hover:text-white transition">Privacy</a>
      <a href="/shipping-policy" className="hover:text-white transition">Shipping</a>
      <a href="/contact" className="hover:text-white transition">Contact</a>
    </div>

    <p className="tracking-wide text-xs">
      © {new Date().getFullYear()} CNC Inspire Coffee • Small batch • Roasted with intention
    </p>

  </div>
</footer>
      </body>
    </html>
  );
}