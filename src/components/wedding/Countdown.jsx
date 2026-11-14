import CountdownBlock from "@/components/wedding/CountdownBlock";
import { engagement, wedding } from "@/data/wedding";

export default function Countdown() {
  return (
    <section className="border-b border-[#C5A059]/40 bg-[#F7F9F6] px-5 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#2D5A46]/55">
            Counting down
          </p>
          <h2 className="mt-4 font-heading text-2xl leading-tight text-[#2D5A46] md:text-3xl">
            Two days to celebrate
          </h2>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 md:gap-8">
          <CountdownBlock
            kicker="The Engagement"
            dateLong={engagement.dateLong}
            isoDate={engagement.isoDate}
          />
          <CountdownBlock
            kicker="The Wedding"
            dateLong={wedding.dateLong}
            isoDate={wedding.isoDate}
          />
        </div>
      </div>
    </section>
  );
}