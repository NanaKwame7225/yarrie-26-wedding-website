import { couple, wedding } from "@/data/wedding";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#D4AF37]/40 bg-[#22402F] px-5 py-16 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-body text-[10px] uppercase tracking-[0.42em] text-[#D4AF37]">
          {couple.hashtag}
        </p>
        <p className="mt-7 font-display text-3xl leading-snug text-[#D4AF37] md:text-5xl">
          Aggya Yaw &amp; Harriet Yahaya
        </p>
        <div className="mx-auto mt-8 h-px w-20 bg-[#D4AF37]/50" />
        <p className="mt-8 font-body text-[10px] uppercase tracking-[0.3em] text-[#F7F9F6]/55">
          {wedding.dateLong} · {wedding.city}
        </p>
      </div>
    </footer>
  );
}