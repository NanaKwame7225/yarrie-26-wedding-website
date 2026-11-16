import { couple } from "@/data/wedding";

export default function CouplePortrait() {
  return (
    <section className="relative overflow-hidden bg-[#193b2c] px-5 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="font-body text-[10px] uppercase tracking-[.42em] text-[#D4AF37]">A celebration of love</p>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-[#F7F9F6] md:text-5xl">Two hearts. One beautiful story.</h2>
          <p className="mt-5 font-body text-sm leading-8 text-[#F7F9F6]/75">
            With grateful hearts, Aggya Yaw and Harriet invite you to share in the joy of their union and the beginning of a new chapter.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl items-start gap-7 md:grid-cols-2 md:gap-10">
          <figure className="relative mx-auto w-full max-w-[390px]">
            <div className="absolute -inset-3 rotate-[-2deg] border border-[#C5A059]/70" />
            <div className="relative overflow-hidden border-[5px] border-[#F7F9F6] shadow-[0_24px_65px_rgba(0,0,0,.35)]">
              <img
                src={`${import.meta.env.BASE_URL}images/yarrie26-couple-edited.png`}
                alt="Aggya Yaw and Harriet smiling together — the enhanced YARRIE26 couple portrait"
                className="block aspect-[4/5] w-full object-cover object-center"
                fetchPriority="high"
              />
            </div>
            <figcaption className="mt-4 text-center font-body text-[10px] uppercase tracking-[.3em] text-[#D4AF37]">
              The portrait · enhanced
            </figcaption>
          </figure>

          <figure className="relative mx-auto w-full max-w-[390px] md:mt-12">
            <div className="absolute -inset-3 rotate-[2deg] border border-[#C5A059]/50" />
            <div className="relative overflow-hidden border-[5px] border-[#F7F9F6] shadow-[0_24px_65px_rgba(0,0,0,.28)]">
              <img
                src={`${import.meta.env.BASE_URL}images/yarrie26-couple-original.jpg`}
                alt="The original photograph of Aggya Yaw and Harriet together"
                className="block aspect-[3/4] w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-4 text-center font-body text-[10px] uppercase tracking-[.3em] text-[#D4AF37]">
              The original moment · untouched
            </figcaption>
          </figure>
        </div>

        <p className="mt-12 text-center font-display text-4xl text-[#D4AF37]">
          {couple.groom.first} &amp; {couple.bride.first}
        </p>
        <p className="mt-3 text-center font-body text-[10px] uppercase tracking-[.35em] text-[#F7F9F6]/65">#YARRIE26</p>
      </div>
    </section>
  );
}
