import { useState } from 'react'

const BASE = import.meta.env.BASE_URL

const images = [
  { src: `${BASE}assets/newproject1.jpeg`, alt: 'JB Infrastructure — New Project Milestone', class: 'md:col-span-2 md:row-span-2' },
  { src: `${BASE}assets/newproject2.jpeg`, alt: 'JB Infrastructure — Structural Excellence', class: 'md:col-span-1 md:row-span-1' },
  { src: `${BASE}assets/newproject3.jpeg`, alt: 'JB Infrastructure — Industrial Fabrication', class: 'md:col-span-1 md:row-span-1' },
  { src: `${BASE}assets/newproject4.jpeg`, alt: 'JB Infrastructure — Precision Engineering', class: 'md:col-span-2 md:row-span-1' },
  { src: `${BASE}assets/p10.jpeg`, alt: 'JB Infrastructure — Steel Space Frame', class: 'md:col-span-1 md:row-span-2' },
  { src: `${BASE}assets/p11.jpeg`, alt: 'JB Infrastructure — Toll Plaza Canopy', class: 'md:col-span-1 md:row-span-1' },
  { src: `${BASE}assets/p12.jpeg`, alt: 'JB Infrastructure — Structural Fabrication', class: 'md:col-span-2 md:row-span-2' },
  { src: `${BASE}assets/p13.jpeg`, alt: 'JB Infrastructure — Site Installation', class: 'md:col-span-1 md:row-span-1' },
  { src: `${BASE}assets/p14.jpeg`, alt: 'JB Infrastructure — Metal Structure', class: 'md:col-span-1 md:row-span-1' },
  { src: `${BASE}assets/p15.jpeg`, alt: 'JB Infrastructure — Highway Infrastructure', class: 'md:col-span-1 md:row-span-1' },
  { src: `${BASE}assets/p17.jpeg`, alt: 'JB Infrastructure — Bridge / Expressway', class: 'md:col-span-2 md:row-span-1' },
  { src: `${BASE}assets/p20.jpeg`, alt: 'JB Infrastructure — Completed Project', class: 'md:col-span-1 md:row-span-1' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  const prev = () => setSelected(i => (i - 1 + images.length) % images.length)
  const next = () => setSelected(i => (i + 1) % images.length)

  return (
    <>
      <section id="gallery" className="bg-slate-900 py-24 border-t border-slate-800 text-slate-100">
        <div className="max-w-[90rem] mx-auto px-6 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12 border-b border-slate-800 pb-12 fade-up">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-0.5 bg-sky-600" />
                <span className="text-sky-500 text-xs tracking-[0.3em] font-bold uppercase">Portfolio</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
                Project <span className="text-sky-500">Gallery</span>
              </h2>
            </div>
            
            <div className="lg:w-1/3 flex flex-col gap-6">
              <p className="text-slate-300 text-lg font-light leading-relaxed">
                A curated aggregation of high-precision infrastructural megaprojects. Exposing the intersection of raw materiality and engineered perfection.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-up" style={{ animationDelay: '200ms' }}>
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`group relative overflow-hidden bg-slate-800 border border-slate-700 hover:border-sky-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 ${img.class} w-full h-full min-h-[200px]`}
              >
                {/* Image */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[600ms] relative z-0"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900 to-transparent opacity-90 transition-opacity duration-300" />
                
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <div className="text-left">
                    <p className="text-white text-sm font-semibold tracking-wide">{img.alt.split('—')[1] || img.alt}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Corporate Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300"
          onClick={() => setSelected(null)}
        >
          {/* Top diagnostic bar */}
          <div className="absolute top-0 inset-x-0 h-16 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between px-8 text-sm font-semibold tracking-wide text-slate-300">
            <div>JB Infrastructure Portfolio</div>
            <button
              onClick={() => setSelected(null)}
              className="hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              CLOSE <span className="text-2xl font-light">&times;</span>
            </button>
          </div>

          {/* Navigation layout */}
          <div className="absolute top-1/2 -translate-y-1/2 inset-x-4 md:inset-x-12 flex justify-between z-10 pointer-events-none">
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="pointer-events-auto bg-slate-800/80 border border-slate-700 p-4 rounded-full hover:bg-sky-600 hover:border-sky-500 transition-all text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="pointer-events-auto bg-slate-800/80 border border-slate-700 p-4 rounded-full hover:bg-sky-600 hover:border-sky-500 transition-all text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Core Image Display */}
          <div className="relative z-20 max-w-[85vw] max-h-[75vh]" onClick={e => e.stopPropagation()}>
            <img
              src={images[selected].src}
              alt={images[selected].alt}
              className="w-full h-full object-contain shadow-2xl border border-slate-700 rounded-md"
            />
          </div>

          {/* Bottom Data Overlay */}
          <div className="absolute bottom-8 z-20 flex flex-col items-center gap-2">
            <h3 className="text-white text-lg font-bold tracking-wide">
              {images[selected].alt.replace('JB Infrastructure — ', '')}
            </h3>
            <p className="text-slate-400 text-sm font-semibold tracking-wider">
              {selected + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
