import { Clock, MapPin, Navigation } from "lucide-react";
import { directionsUrl } from "@/data/wedding";

export default function EventCard({ event, tone = "light" }) {
  const isLight = tone === "light";
  const link = directionsUrl(event);

  const shell = isLight ? "border-[#C5A059] bg-[#F7F9F6]" : "border-[#D4AF37]/40 bg-[#214636]";
  const inner = isLight ? "border-[#C5A059]/35" : "border-[#D4AF37]/25";
  const kicker = isLight ? "text-[#A17E2A]" : "text-[#D4AF37]";
  const strong = isLight ? "text-[#2D5A46]" : "text-[#F7F9F6]";
  const muted = isLight ? "text-[#2D5A46]/60" : "text-[#F7F9F6]/60";
  const rule = isLight ? "border-[#2D5A46]/15" : "border-[#D4AF37]/20";
  const button = isLight
    ? "bg-[#C5A059] text-[#22402F] hover:bg-[#D4AF37]"
    : "bg-[#D4AF37] text-[#22402F] hover:bg-[#E2C266]";
  const soon = isLight
    ? "border-[#2D5A46]/25 text-[#2D5A46]/50"
    : "border-[#F7F9F6]/25 text-[#F7F9F6]/45";

  return (
    <article className={`border p-1.5 ${shell}`}>
      <div className={`flex h-full flex-col border px-6 py-9 md:px-9 md:py-11 ${inner}`}>
        <p className={`font-body text-[10px] uppercase tracking-[0.38em] ${kicker}`}>
          {event.kicker}
        </p>
        <p className={`mt-2 font-heading text-lg italic ${muted}`}>{event.rite}</p>

        <div className="mt-7">
          {event.day ? (
            <div className="flex items-end gap-4">
              <span className={`font-heading text-5xl leading-none ${strong}`}>{event.day}</span>
              <span className={`pb-1 font-body text-[10px] uppercase leading-[1.9] tracking-[0.28em] ${muted}`}>
                Nov
                <br />
                2026
              </span>
            </div>
          ) : (
            <p className={`font-heading text-2xl ${strong}`}>Date to be announced</p>
          )}
          {event.time && (
            <p className={`mt-3 flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.28em] ${muted}`}>
              <Clock className="h-3.5 w-3.5" strokeWidth={1.7} />
              {event.time}
            </p>
          )}
        </div>

        <div className={`mt-8 border-t pt-7 ${rule}`}>
          <p className={`flex items-start gap-2.5 font-body text-sm font-medium leading-relaxed ${strong}`}>
            <MapPin className={`mt-0.5 h-4 w-4 shrink-0 ${kicker}`} strokeWidth={1.7} />
            <span>{event.venue || "Location to be announced"}</span>
          </p>
          {event.area && (
            <p className={`mt-2 pl-[26px] font-body text-sm leading-relaxed ${muted}`}>{event.area}</p>
          )}
          {event.city && (
            <p className={`mt-1 pl-[26px] font-body text-sm leading-relaxed ${muted}`}>{event.city}</p>
          )}
          {event.postal && (
            <p className={`mt-3 pl-[26px] font-body text-[10px] uppercase tracking-[0.22em] ${muted}`}>
              Digital address {event.postal}
            </p>
          )}
        </div>

        <div className="mt-auto pt-9">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex w-full items-center justify-center gap-2.5 px-6 py-4 font-body text-[10px] uppercase tracking-[0.32em] transition-colors duration-300 ${button}`}
            >
              <Navigation className="h-3.5 w-3.5" strokeWidth={2} />
              Get directions
            </a>
          ) : (
            <p
              className={`border border-dashed px-6 py-4 text-center font-body text-[10px] uppercase tracking-[0.28em] ${soon}`}
            >
              Directions coming soon
            </p>
          )}
        </div>
      </div>
    </article>
  );
}