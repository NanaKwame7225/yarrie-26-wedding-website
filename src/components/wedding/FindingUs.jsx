import { Navigation } from "lucide-react";
import { directionsUrl, mapEmbedUrl, wedding } from "@/data/wedding";

export default function FindingUs() {
  const link = directionsUrl(wedding);
  const embed = mapEmbedUrl(wedding);

  return (
    <section id="directions" className="scroll-mt-4 border-b border-[#C5A059]/40 bg-[#F7F9F6] px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
        <div>
          <p className="font-body text-[10px] uppercase tracking-[0.42em] text-[#A17E2A]">
            Finding us
          </p>
          <h2 className="mt-5 font-heading text-3xl leading-tight text-[#2D5A46] md:text-4xl">
            The way to Bubiashie Atico
          </h2>
          <address className="mt-7 not-italic">
            <p className="font-heading text-xl text-[#2D5A46]">{wedding.venue}</p>
            <p className="mt-2 font-body text-sm leading-relaxed text-[#2D5A46]/70">{wedding.area}</p>
            <p className="font-body text-sm leading-relaxed text-[#2D5A46]/70">{wedding.city}</p>
            <p className="mt-4 font-body text-[10px] uppercase tracking-[0.24em] text-[#2D5A46]/50">
              Digital address {wedding.postal}
            </p>
          </address>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 border border-[#2D5A46] px-7 py-4 font-body text-[10px] uppercase tracking-[0.3em] text-[#2D5A46] transition-colors duration-300 hover:bg-[#2D5A46] hover:text-[#F7F9F6]"
          >
            <Navigation className="h-3.5 w-3.5" strokeWidth={2} />
            Open in Google Maps
          </a>
        </div>

        <div className="border border-[#C5A059] p-1.5">
          <div className="h-[300px] border border-[#C5A059]/40 bg-[#E9EEE8] md:h-[400px]">
            <iframe
              title="Map to Sweet Life International Ministries, Bubiashie Atico"
              src={embed}
              className="h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}