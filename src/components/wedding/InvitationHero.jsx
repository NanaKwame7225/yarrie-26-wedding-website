import { ArrowDown, CalendarDays } from "lucide-react";
import { couple } from "@/data/wedding";

const Diamond = () => (
  <span className="mx-auto block h-1.5 w-1.5 rotate-45 bg-[#C5A059]" />
);

export default function InvitationHero() {
  return (
    <section className="relative overflow-hidden bg-[#2D5A46] px-5 pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#D4AF37]/40" />
      <div className="pointer-events-none absolute -left-28 top-1/4 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <p className="relative text-center font-body text-[10px] uppercase tracking-[0.5em] text-[#D4AF37]">
        {couple.hashtag}
      </p>

      <div className="relative mx-auto mt-8 w-full max-w-xl border border-[#D4AF37]/70 p-1.5">
        <div className="relative bg-[#F7F9F6] px-6 py-12 text-center md:px-10 md:py-16">
          <div className="pointer-events-none absolute inset-2 border border-[#C5A059]/35" />

          <div className="relative">
            <p className="font-body text-[9px] uppercase tracking-[0.34em] text-[#2D5A46]/60">
              The families of
            </p>
            <p className="mt-3 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-[#2D5A46]">
              {couple.families}
            </p>

            <p className="mt-7 font-body text-[9px] uppercase leading-[2.1] tracking-[0.26em] text-[#2D5A46]/65">
              Humbly request your presence
              <br />
              to witness
            </p>

            <p className="mt-7 font-heading text-[10px] uppercase tracking-[0.44em] text-[#2D5A46]/75">
              The Wedding of
            </p>

            <h1 className="mt-8">
              <span className="block font-display text-[2.6rem] leading-[1.25] text-[#B08B2E] md:text-6xl">
                {couple.groom.first}
              </span>
              <span className="mt-1 block font-heading text-lg font-semibold uppercase tracking-[0.32em] text-[#2D5A46] md:text-xl">
                {couple.groom.family}
              </span>

              <span className="mx-auto my-6 flex h-9 w-9 items-center justify-center rounded-full bg-[#C5A059] font-heading text-base text-[#2D5A46]">
                {"&"}
              </span>

              <span className="block font-display text-[2.6rem] leading-[1.25] text-[#B08B2E] md:text-6xl">
                {couple.bride.first}
              </span>
              <span className="mt-1 block font-heading text-lg font-semibold uppercase tracking-[0.32em] text-[#2D5A46] md:text-xl">
                {couple.bride.family}
              </span>
            </h1>

            <div className="mx-auto mt-10 flex items-center justify-center gap-4 border-t border-[#2D5A46]/15 pt-8">
              <CalendarDays className="h-6 w-6 shrink-0 text-[#B08B2E]" strokeWidth={1.3} />
              <span className="font-heading text-4xl leading-none text-[#2D5A46] md:text-5xl">
                28
              </span>
              <span className="border-l border-[#2D5A46]/20 pl-4 text-left font-body text-[10px] uppercase leading-[1.7] tracking-[0.28em] text-[#2D5A46]/70">
                Nov
                <br />
                2026
              </span>
              <span className="border-l border-[#2D5A46]/20 pl-4 text-left font-body text-[10px] uppercase leading-[1.7] tracking-[0.28em] text-[#2D5A46]/70">
                11
                <br />
                AM
              </span>
            </div>

            <div className="mt-8">
              <Diamond />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-10 flex justify-center">
        <a
          href="#celebrations"
          className="group inline-flex items-center gap-3 border border-[#D4AF37] px-7 py-4 font-body text-[10px] uppercase tracking-[0.34em] text-[#F7F9F6] transition-colors duration-300 hover:bg-[#D4AF37] hover:text-[#2D5A46]"
        >
          Directions to the celebration
          <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}