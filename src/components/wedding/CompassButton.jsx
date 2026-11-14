import { Compass } from "lucide-react";

export default function CompassButton() {
  return (
    <a
      href="#directions"
      aria-label="Jump to directions"
      title="Directions"
      className="fixed bottom-5 right-5 z-40 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-[#22402F]/20 bg-[#D4AF37] text-[#22402F] shadow-lg shadow-[#22402F]/25 transition-transform duration-300 hover:scale-105 md:bottom-7 md:right-7"
    >
      <Compass className="h-5 w-5" strokeWidth={1.8} />
    </a>
  );
}