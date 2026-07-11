import { BRAND } from "@/app/data/brand";

export default function ContactButtons() {
  return (
    <div id="contact" className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
      <a
        href={`mailto:${BRAND.email}`}
        className="rounded-full border border-black/20 bg-white/20 px-4 py-2"
      >
        Email
      </a>

      <a
        href={BRAND.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-black/20 bg-white/20 px-4 py-2"
      >
        Facebook
      </a>

      <a
        href={BRAND.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-black/20 bg-white/20 px-4 py-2"
      >
        Instagram
      </a>
    </div>
  );
}