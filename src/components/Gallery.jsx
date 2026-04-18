import { useState } from 'react'

const BASE = import.meta.env.BASE_URL

const images = [
  { src: `${BASE}assets/newproject1.jpeg`, alt: 'JB Infrastructure — New Project Milestone' },
  { src: `${BASE}assets/newproject2.jpeg`, alt: 'JB Infrastructure — Structural Excellence' },
  { src: `${BASE}assets/newproject3.jpeg`, alt: 'JB Infrastructure — Industrial Fabrication' },
  { src: `${BASE}assets/newproject4.jpeg`, alt: 'JB Infrastructure — Precision Engineering' },
  { src: `${BASE}assets/p10.jpeg`, alt: 'JB Infrastructure — Steel Space Frame' },
  { src: `${BASE}assets/p11.jpeg`, alt: 'JB Infrastructure — Toll Plaza Canopy' },
  { src: `${BASE}assets/p12.jpeg`, alt: 'JB Infrastructure — Structural Fabrication' },
  { src: `${BASE}assets/p13.jpeg`, alt: 'JB Infrastructure — Site Installation' },
  { src: `${BASE}assets/p14.jpeg`, alt: 'JB Infrastructure — Metal Structure' },
  { src: `${BASE}assets/p15.jpeg`, alt: 'JB Infrastructure — Highway Infrastructure' },
  { src: `${BASE}assets/p17.jpeg`, alt: 'JB Infrastructure — Bridge / Expressway' },
  { src: `${BASE}assets/p20.jpeg`, alt: 'JB Infrastructure — Completed Project' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  const prev = () => setSelected(i => (i - 1 + images.length) % images.length)
  const next = () => setSelected(i => (i + 1) % images.length)

  return (
    <>
      <section id="gallery" className="bg-[#020617] py-24 px-4 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Labels */}
          <div className="flex items-center gap-3 mb-4 fade-up">
            <div className="w-10 h-0.5 bg-gradient-to-r from-fuchsia-500 to-transparent" />
            <span className="text-fuchsia-400 text-xs tracking-[0.4em] uppercase font-semibold">Visual Portfolio</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 fade-up" style={{ animationDelay: '100ms' }}>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">Gallery</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed glass-panel px-4 py-2 border-l border-fuchsia-500/30">
              A glimpse into our executed projects — click any image to explore the holographic construct.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 fade-up" style={{ animationDelay: '200ms' }}>
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="group relative overflow-hidden rounded-xl aspect-square focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60 p-1 glass-panel hover:border-fuchsia-500/40 transition-all duration-300"
              >
                <div className="w-full h-full relative overflow-hidden rounded-lg">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#020617] to-transparent opacity-80 z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 relative z-0"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-fuchsia-500/10 group-hover:bg-transparent transition-all duration-300 flex items-center justify-center z-20">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-fuchsia-400 to-purple-600 rounded-full p-4 shadow-[0_0_20px_rgba(217,70,239,0.8)] scale-50 group-hover:scale-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z" />
                        <path fillRule="evenodd" d="M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[60] bg-[#020617]/90 backdrop-blur-2xl flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setSelected(null)}
        >
          {/* Ambient Glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-fuchsia-600/20 blur-[120px] pointer-events-none" />

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-4 sm:left-8 z-10 text-white/30 hover:text-fuchsia-400 p-3 transition-colors duration-300 rounded-full hover:bg-white/5 border border-transparent hover:border-fuchsia-500/30"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 drop-shadow-[0_0_5px_rgba(217,70,239,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="relative z-20 max-h-[85vh] max-w-[85vw] object-contain rounded-xl shadow-[0_0_50px_rgba(217,70,239,0.2)] border border-white/10"
            onClick={e => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-4 sm:right-8 z-10 text-white/30 hover:text-fuchsia-400 p-3 transition-colors duration-300 rounded-full hover:bg-white/5 border border-transparent hover:border-fuchsia-500/30"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 drop-shadow-[0_0_5px_rgba(217,70,239,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Close */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 z-10 text-white/30 hover:text-fuchsia-400 p-2 transition-colors duration-300 rounded-full hover:bg-white/5 border border-transparent hover:border-fuchsia-500/30"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 drop-shadow-[0_0_5px_rgba(217,70,239,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Caption + counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20 glass-panel px-6 py-2 rounded-full border-t border-fuchsia-500/30">
            <p className="text-white text-xs tracking-[0.2em]">{images[selected].alt}</p>
            <p className="text-fuchsia-400 text-xs tracking-widest font-bold">{selected + 1} / {images.length}</p>
          </div>
        </div>
      )}
    </>
  )
}
