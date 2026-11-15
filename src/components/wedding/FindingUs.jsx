import { Navigation, WifiOff } from "lucide-react";
import { directionsUrl, wedding, engagement } from "@/data/wedding";

const maps = [
  { event: engagement, image: "engagement-offline-map.jpg", subtitle: "Thursday · 26 November 2026", detail: "Jagbele Road, Abossey Okai · G73623854" },
  { event: wedding, image: "wedding-offline-map.jpg", subtitle: "Saturday · 28 November 2026", detail: "Sweet Life International Ministries · Bubiashie Atico · Current map pin: GA-398-2268" },
];

export default function FindingUs() {
  return (
    <section id="directions" className="scroll-mt-4 border-b border-[#C5A059]/40 bg-[#F7F9F6] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="font-body text-[10px] uppercase tracking-[0.42em] text-[#A17E2A]">Finding us</p>
          <h2 className="mt-5 font-heading text-3xl leading-tight text-[#2D5A46] md:text-4xl">Your way to our celebrations</h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-[#2D5A46]/70">Both destination maps are saved with the website, so the map images remain visible when your device is offline.</p>
          <p className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.2em] text-[#2D5A46]/60"><WifiOff className="h-3.5 w-3.5"/> Offline map previews available</p>
        </div>
        <div className="grid gap-7 md:grid-cols-2">
          {maps.map(({event,image,subtitle,detail}) => (
            <article key={event.id} className="overflow-hidden border border-[#C5A059] bg-white shadow-[0_14px_38px_rgba(24,54,41,.1)]">
              <div className="border-b border-[#C5A059]/40 px-6 py-5">
                <p className="font-body text-[9px] uppercase tracking-[.32em] text-[#A17E2A]">{event.kicker}</p>
                <h3 className="mt-2 font-heading text-2xl text-[#244b39]">{event.venue}</h3>
                <p className="mt-1 text-[11px] text-[#244b39]/60">{subtitle}</p>
              </div>
              <div className="relative bg-[#e9eee8]">
                <img src={`${import.meta.env.BASE_URL}images/${image}`} alt={`Offline street map showing the ${event.kicker.toLowerCase()} destination area`} className="block aspect-square w-full object-cover" loading="lazy"/>
                <span className="absolute left-3 top-3 border border-white/70 bg-[#193b2c]/90 px-3 py-2 text-[9px] uppercase tracking-[.18em] text-white">Saved offline map</span>
              </div>
              <div className="p-6">
                <p className="font-body text-xs leading-relaxed text-[#244b39]/75">{detail}</p>
                <p className="mt-2 font-body text-[10px] uppercase tracking-[.16em] text-[#244b39]/55">Map data © OpenStreetMap contributors</p>
                <a href={directionsUrl(event)} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-[#244b39] px-5 py-4 font-body text-[10px] uppercase tracking-[.26em] text-white transition hover:bg-[#193b2c]"><Navigation className="h-4 w-4"/> Open live directions</a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center font-body text-xs leading-relaxed text-[#244b39]/60">Offline maps are saved map snapshots for orientation. Live GPS positioning, traffic and turn-by-turn navigation still need an internet connection.</p>
      </div>
    </section>
  );
}
