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
      <section id="gallery" className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-amber-500" />
            <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-semibold">Visual Portfolio</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 uppercase leading-tight">
              Project <span className="text-amber-500">Gallery</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-sm leading-relaxed">
              A glimpse into our executed projects — click any image to explore.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="group relative overflow-hidden rounded-xl aspect-square focus:outline-none focus:ring-2 focus:ring-amber-500/60"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-gray-900/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-amber-500 rounded-full p-3 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z" />
                      <path fillRule="evenodd" d="M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
                    </svg>
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
          className="fixed inset-0 z-50 bg-white/98 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-4 sm:left-8 z-10 text-gray-600 hover:text-amber-500 p-3 transition-colors duration-200 rounded-full hover:bg-gray-100"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-h-[85vh] max-w-[85vw] object-contain rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-4 sm:right-8 z-10 text-gray-600 hover:text-amber-500 p-3 transition-colors duration-200 rounded-full hover:bg-gray-100"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Close */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 z-10 text-gray-600 hover:text-amber-500 p-2 transition-colors duration-200 rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Caption + counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
            <p className="text-gray-600 text-xs tracking-wider">{images[selected].alt}</p>
            <p className="text-gray-400 text-xs tracking-widest">{selected + 1} / {images.length}</p>
          </div>
        </div>
      )}
    </>
  )
}
