import EventCard from "@/components/wedding/EventCard";
import { engagement, wedding } from "@/data/wedding";

export default function EventWayfinder() {
  return (
    <section id="celebrations" className="scroll-mt-4 bg-[#2D5A46] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-body text-[10px] uppercase tracking-[0.42em] text-[#D4AF37]">
            Two celebrations
          </p>
          <h2 className="mt-5 font-heading text-3xl leading-tight text-[#F7F9F6] md:text-5xl">
            Choose where you are going
          </h2>
          <p className="mx-auto mt-5 max-w-md font-body text-sm leading-relaxed text-[#F7F9F6]/65">
            Tap a celebration and we will open turn-by-turn directions straight to the venue.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          <EventCard event={wedding} />
          <EventCard event={engagement} tone="dark" />
        </div>
      </div>
    </section>
  );
}