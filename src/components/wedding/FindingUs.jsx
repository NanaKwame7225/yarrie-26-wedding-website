import { Navigation } from "lucide-react";
import { directionsUrl, mapEmbedUrl, wedding, engagement } from "@/data/wedding";

const events = [
  {
    event: engagement,
    subtitle: "Thursday · 26 November 2026",
    detail: "Jagbele Road, Abossey Okai · GhanaPostGPS: G73623854",
  },
  {
    event: wedding,
    subtitle: "Saturday · 28 November 2026",
    detail: "Sweet Life International Ministries · Bubiashie Atico · Map pin: GA-398-2268",
  },
];

export default function FindingUs() {
  return (
    <section id="directions" className="scroll-mt-4 border-b border-[#C5A059]/40 bg-[#F7F9F6] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="font-body text-[10px] uppercase tracking-[0.42em] text-[#A17E2A]">Finding us</p>
          <h2 className="mt-5 font-heading text-3xl leading-tight text-[#2D5A46] md:text-4xl">Your way to our celebrations</h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-[#2D5A46]/70">
            View each venue on the map or open live directions to navigate to the celebration.
          </p>
        </div>
        <div className="grid gap-7 md:grid-cols-2">
          {events.map(({ event, subtitle, detail }) => (
            <article key={event.id} className="flex flex-col overflow-hidden border border-[#C5A059] bg-white shadow-[0_14px_38px_rgba(24,54,41,.1)]">
              <div className="flex-1 px-6 py-8">
                <p className="font-body text-[9px] uppercase tracking-[.32em] text-[#A17E2A]">{event.kicker}</p>
                <h3 className="mt-3 font-heading text-2xl text-[#244b39]">{event.venue}</h3>
                <p className="mt-2 text-[11px] text-[#244b39]/60">{subtitle}</p>
                <p className="mt-6 font-body text-xs leading-relaxed text-[#244b39]/75">{detail}</p>
              </div>
              <iframe
                title={`${event.kicker} venue map`}
                src={mapEmbedUrl(event)}
                className="h-64 w-full border-y border-[#C5A059]/40"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="px-6 py-6">
                <a href={directionsUrl(event)} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 bg-[#244b39] px-5 py-4 font-body text-[10px] uppercase tracking-[.26em] text-white transition hover:bg-[#193b2c]">
                  <Navigation className="h-4 w-4" /> Open live directions
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center font-body text-xs leading-relaxed text-[#244b39]/60">
          Live GPS positioning, traffic and turn-by-turn navigation may require an internet connection.
        </p>
      </div>
    </section>
  );
}
