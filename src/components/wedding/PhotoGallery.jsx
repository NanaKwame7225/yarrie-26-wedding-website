import { useState } from "react";
import { gallery } from "@/data/wedding";
import "./photo-gallery.css";
export default function PhotoGallery() {
 const [active,setActive]=useState(null);
 return <section id="gallery" className="pg-section scroll-mt-4">
 <div className="mx-auto mb-10 max-w-xl text-center md:mb-12"><p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#2D5A46]/55">Moments</p><h2 className="mt-4 font-heading text-2xl leading-tight text-[#2D5A46] md:text-4xl">A little of our story</h2><p className="mt-4 font-body text-sm leading-relaxed text-[#2D5A46]/65">Small moments from the days leading up to the celebrations.</p></div>
 <div className="pg-container"><div className="pg-stage">{gallery.map(photo=><button key={photo.slot} type="button" data-slot={photo.slot} className="pg-item" title={photo.title} onClick={()=>setActive(photo)}><div className="pg-photo"><img src={photo.src} alt={photo.alt} loading="lazy"/></div><div className="pg-caption"><p>{photo.title}</p><p>{photo.credit}</p></div></button>)}</div></div>
 {active&&<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#14291f]/95 p-4" role="dialog" aria-modal="true" aria-label={active.title} onClick={()=>setActive(null)}><button className="absolute right-5 top-5 rounded-full border border-white/50 px-4 py-2 text-sm text-white" onClick={()=>setActive(null)}>Close ✕</button><div className="max-h-[88vh] max-w-4xl" onClick={e=>e.stopPropagation()}><img src={active.src} alt={active.alt} className="max-h-[78vh] w-auto max-w-full border border-[#C5A059] object-contain"/><p className="mt-3 text-center font-heading text-xl text-white">{active.title}</p><p className="mt-1 text-center text-xs uppercase tracking-widest text-[#D4AF37]">{active.credit}</p></div></div>}
 </section>;
}