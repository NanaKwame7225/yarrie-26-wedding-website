import { Phone } from "lucide-react";
import { couple, rsvpContacts } from "@/data/wedding";

export default function Rsvp() {
  return (
    <section id="rsvp" className="scroll-mt-4 bg-[#F7F9F6] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block bg-[#C5A059] px-5 py-1.5 font-body text-[10px] uppercase tracking-[0.4em] text-[#F7F9F6]">
          RSVP
        </span>
        <h2 className="mt-6 font-heading text-3xl leading-tight text-[#2D5A46] md:text-4xl">
          Kindly let us know you are coming
        </h2>
        <p className="mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-[#2D5A46]/65">
          Call either of these numbers to confirm your seat at the celebration.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {rsvpContacts.map((contact) => (
            <a
              key={contact.phone}
              href={`tel:+233${contact.phone.slice(1)}`}
              className="group flex items-center justify-between gap-4 border border-[#2D5A46]/20 px-6 py-5 text-left transition-colors duration-300 hover:border-[#C5A059] hover:bg-[#C5A059]/10"
            >
              <span>
                <span className="block font-body text-[9px] uppercase tracking-[0.32em] text-[#2D5A46]/50">
                  {contact.name}
                </span>
                <span className="mt-1.5 block font-heading text-xl text-[#2D5A46]">
                  {contact.phone}
                </span>
              </span>
              <Phone className="h-4 w-4 shrink-0 text-[#A17E2A] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.7} />
            </a>
          ))}
        </div>

        <p className="mt-12 font-display text-3xl text-[#B08B2E] md:text-4xl">{couple.hashtag}</p>
      </div>
    </section>
  );
}