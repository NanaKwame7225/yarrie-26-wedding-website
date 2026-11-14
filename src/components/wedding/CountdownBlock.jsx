import { useEffect, useState } from "react";

const unitsFor = (target) => {
  const total = Math.max(0, Math.floor((target - Date.now()) / 1000));
  return [
    { label: "Days", value: Math.floor(total / 86400) },
    { label: "Hours", value: Math.floor((total % 86400) / 3600) },
    { label: "Minutes", value: Math.floor((total % 3600) / 60) },
    { label: "Seconds", value: total % 60 },
  ];
};

export default function CountdownBlock({ kicker, dateLong, isoDate }) {
  const target = new Date(isoDate).getTime();
  const [units, setUnits] = useState(() => unitsFor(target));

  useEffect(() => {
    const tick = () => setUnits(unitsFor(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const live = units.some((u) => u.value > 0);

  return (
    <div className="border border-[#C5A059]/60 bg-white px-5 py-6 md:px-7 md:py-8">
      <p className="font-body text-[10px] uppercase tracking-[0.36em] text-[#A17E2A]">{kicker}</p>
      <p className="mt-2 font-heading text-lg text-[#2D5A46] md:text-xl">{dateLong}</p>

      <div className="mt-6 grid grid-cols-4 gap-1.5 md:gap-3">
        {units.map(({ label, value }) => (
          <div key={label} className="border-t border-[#C5A059]/60 pt-3 text-center">
            <p className="font-heading text-[1.7rem] leading-none tabular-nums text-[#2D5A46] md:text-3xl">
              {String(value).padStart(2, "0")}
            </p>
            <p className="mt-2 font-body text-[8px] uppercase tracking-[0.2em] text-[#2D5A46]/50 md:text-[9px]">
              {label}
            </p>
          </div>
        ))}
      </div>

      {!live && (
        <p className="mt-5 text-center font-body text-[9px] uppercase tracking-[0.28em] text-[#A17E2A]">
          The day is here
        </p>
      )}
    </div>
  );
}