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
      <section id="gallery" style={{ background: 'var(--linen-dark)', padding: '100px 0' }}>
        <div className="section-container">
          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 52 }}>
            <span className="section-pill">Visual Portfolio</span>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                  fontWeight: 800,
                  color: 'var(--charcoal)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                }}
              >
                Projects in the{' '}
                <span style={{ color: 'var(--steel)' }}>Field</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--muted)', maxWidth: 340, lineHeight: 1.7 }}>
                A glimpse into our executed work — click any image to explore the full view.
              </p>
            </div>
          </div>

          {/* Masonry-style grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 12,
            }}
          >
            {images.map((img, i) => (
              <button
                key={i}
                id={`gallery-img-${i}`}
                onClick={() => setSelected(i)}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 12,
                  aspectRatio: i === 0 || i === 5 ? '1 / 1.3' : '1 / 1',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  background: 'var(--border)',
                  ...(i === 0 ? { gridRow: 'span 2' } : {}),
                  ...(i === 5 ? { gridRow: 'span 2' } : {}),
                }}
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    display: 'block',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.07)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                {/* Hover overlay */}
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(30,58,95,0)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(30,58,95,0.45)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(30,58,95,0)'; }}
                >
                  <div
                    style={{
                      width: 44, height: 44,
                      borderRadius: '50%',
                      background: 'var(--amber)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      opacity: 0,
                      transform: 'scale(0.7)',
                      transition: 'opacity 0.3s, transform 0.3s',
                    }}
                    className="gallery-zoom"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" width="18" height="18">
                      <path d="M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z" />
                      <path fillRule="evenodd" d="M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <style>{`
          button:hover .gallery-zoom { opacity: 1 !important; transform: scale(1) !important; }
          @media (max-width: 768px) {
            #gallery .section-container > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
            button[style*='span 2'] { grid-row: span 1 !important; }
          }
        `}</style>
      </section>

      {/* Lightbox — stays dark for photo viewing */}
      {selected !== null && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(10,16,28,0.97)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
          onClick={() => setSelected(null)}
        >
          {/* Prev */}
          <button
            id="gallery-prev"
            onClick={e => { e.stopPropagation(); prev() }}
            style={{ position: 'absolute', left: 24, zIndex: 10, background: 'rgba(255,255,255,0.08)', border: 'none', borderRadius: '50%', width: 48, height: 48, cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
            aria-label="Previous"
            onMouseEnter={e => e.currentTarget.style.background = 'var(--amber)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img
            src={images[selected].src}
            alt={images[selected].alt}
            style={{ maxHeight: '86vh', maxWidth: '80vw', objectFit: 'contain', borderRadius: 12, boxShadow: '0 24px 80px rgba(0,0,0,0.7)' }}
            onClick={e => e.stopPropagation()}
          />

          {/* Next */}
          <button
            id="gallery-next"
            onClick={e => { e.stopPropagation(); next() }}
            style={{ position: 'absolute', right: 24, zIndex: 10, background: 'rgba(255,255,255,0.08)', border: 'none', borderRadius: '50%', width: 48, height: 48, cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
            aria-label="Next"
            onMouseEnter={e => e.currentTarget.style.background = 'var(--amber)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Close */}
          <button
            id="gallery-close"
            onClick={() => setSelected(null)}
            style={{ position: 'absolute', top: 20, right: 20, zIndex: 10, background: 'rgba(255,255,255,0.08)', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Close"
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>{selected + 1} / {images.length}</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{images[selected].alt}</p>
          </div>
        </div>
      )}
    </>
  )
}
