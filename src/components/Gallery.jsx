import { useState } from 'react'

const BASE = import.meta.env.BASE_URL

const images = Array.from({ length: 9 }, (_, i) => ({
  src: `${BASE}assets/project-${i + 1}.jpg`,
  alt: `JB Infrastructure Project ${i + 1}`,
}))

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  const prev = () => setSelected(i => (i - 1 + images.length) % images.length)
  const next = () => setSelected(i => (i + 1) % images.length)

  return (
    <>
      <div className="jb-separator" />
      <section
        id="gallery"
        className="jb-gradient-dark py-20 px-4 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)',
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Mini logo */}
          <div className="flex justify-center mb-6">
            <img src={`${BASE}assets/logo.png`} alt="JB" className="h-14 w-14 object-contain" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-black uppercase tracking-widest text-center mb-10">
            Project Sample
          </h2>

          {/* Image grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="group overflow-hidden rounded-lg aspect-square focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-4 sm:left-8 text-white/80 hover:text-white text-4xl font-light z-10 p-2"
            aria-label="Previous"
          >
            ‹
          </button>

          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl"
            onClick={e => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-4 sm:right-8 text-white/80 hover:text-white text-4xl font-light z-10 p-2"
            aria-label="Next"
          >
            ›
          </button>

          {/* Close */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl font-light z-10 p-2"
            aria-label="Close"
          >
            ×
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {selected + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
