import { couple } from "@/data/wedding";

export default function CouplePortrait() {
  return (
    <section className="relative overflow-hidden bg-[#193b2c] px-5 py-14 md:py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[.9fr_1.1fr] md:gap-14">
        <div className="relative mx-auto w-full max-w-[320px]">
          <div className="absolute -inset-3 rotate-[-3deg] border border-[#C5A059]/70" />
          <div className="relative border-[5px] border-[#F7F9F6] shadow-[0_24px_65px_rgba(0,0,0,.35)]">
            <img src={`${import.meta.env.BASE_URL}images/yarrie-couple-retouched.jpg`} alt="Aggya Yaw and Harriet sharing a joyful moment together" className="block aspect-[3/4] w-full object-cover object-center" fetchPriority="high" />
          </div>
          <span className="absolute -bottom-5 -right-4 bg-[#C5A059] px-4 py-2 font-body text-[9px] uppercase tracking-[.3em] text-[#193b2c]">#YARRIE26</span>
        </div>
        <div className="mx-auto max-w-lg text-center md:text-left">
          <p className="font-body text-[10px] uppercase tracking-[.42em] text-[#D4AF37]">A celebration of love</p>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-[#F7F9F6] md:text-5xl">Two hearts. One beautiful story.</h2>
          <p className="mt-5 font-body text-sm leading-8 text-[#F7F9F6]/75">With grateful hearts, Aggya Yaw and Harriet invite you to share in the joy of their union and the beginning of a new chapter.</p>
          <p className="mt-7 font-display text-4xl text-[#D4AF37]">{couple.groom.first} &amp; {couple.bride.first}</p>
        </div>
      </div>
    </section>
  );
}
