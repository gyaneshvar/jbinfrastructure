import { useState, useEffect } from 'react'

const BASE = import.meta.env.BASE_URL

const images = [
  'newproject1.jpeg', 'newproject2.jpeg', 'newproject3.jpeg', 'newproject4.jpeg',
  'p10.jpeg', 'p11.jpeg', 'p12.jpeg', 'p13.jpeg',
  'p14.jpeg', 'p15.jpeg', 'p17.jpeg', 'p20.jpeg'
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section id="gallery" className="w-full max-w-container-max mx-auto px-4 sm:px-8 lg:px-16 py-16 grid-bg">
      {/* Header */}
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-0.5 bg-secondary" />
          <span className="text-secondary font-label-bold text-label-bold tracking-[0.2em] uppercase">
            Visual Archive
          </span>
          <div className="w-12 h-0.5 bg-secondary" />
        </div>
        <h2 className="font-headline-xl text-[48px] md:text-[64px] text-primary uppercase leading-none tracking-tighter mb-4">
          Project <span className="text-secondary">Gallery</span>
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          A visual documentation of our structural engineering capabilities, showcasing raw scale and precision fabrication across the nation.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="group aspect-square relative overflow-hidden bg-surface-container cursor-pointer border border-outline-variant shadow-[4px_4px_0px_0px_#e2e2e2] hover:shadow-[4px_4px_0px_0px_#00112a] hover:border-primary transition-all duration-300"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={`${BASE}assets/${img}`}
              alt={`Project Gallery ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-4xl transform scale-50 group-hover:scale-100 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>
                zoom_in
              </span>
            </div>
            
            <div className="absolute top-4 right-4 bg-surface text-on-surface px-2 py-1 font-label-bold text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              IMG {String(i + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-on-primary hover:text-secondary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          
          <img
            src={`${BASE}assets/${selectedImage}`}
            alt="Expanded view"
            className="max-w-full max-h-[90vh] object-contain border-4 border-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          />
        </div>
      )}
    </section>
  )
}
