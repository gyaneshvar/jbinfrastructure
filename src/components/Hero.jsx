const BASE = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section id="home" className="w-full max-w-container-max mx-auto px-4 sm:px-8 lg:px-16 pt-24 pb-16">
      <div className="relative w-full h-[85vh] min-h-[600px] flex items-end pb-16 sm:pb-24 border border-outline-variant rounded shadow-[4px_4px_0px_0px_#00112a] overflow-hidden group">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${BASE}assets/heroimage.jpeg)` }}
        />
        
        {/* Deep Dark Overlay */}
        <div className="absolute inset-0 bg-black/85 transition-opacity duration-500 group-hover:bg-black/80" />
        
        {/* Content */}
        <div className="relative z-10 w-full px-8 md:px-12 grid grid-cols-12 gap-gutter">
          <div className="col-span-12 md:col-span-10 lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-secondary" />
              <span className="text-secondary font-label-bold text-label-bold tracking-[0.3em] uppercase">
                Steel · Precision · Excellence
              </span>
            </div>

            <h1 className="font-headline-xl font-black tracking-tighter text-3xl min-[400px]:text-[36px] sm:text-[56px] md:text-headline-xl text-on-primary mb-2 uppercase leading-none break-words">
              JB
            </h1>
            <h1 className="font-headline-xl font-black tracking-tighter text-3xl min-[400px]:text-[36px] sm:text-[56px] md:text-headline-xl text-secondary mb-6 uppercase leading-none break-words">
              Infrastructure
            </h1>
            
            <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-10 max-w-2xl leading-relaxed">
              Your Ideas Tuned Into Reality. We specialize in high-scale infrastructure projects, forging the arteries of the nation with uncompromising engineering excellence, structural integrity, and immovable reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services"
                className="bg-secondary text-on-secondary font-label-bold text-label-bold px-8 py-4 rounded hover:bg-secondary-container hover:text-on-secondary-container hover:shadow-[inset_0px_0px_0px_2px_#00112a] transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                Our Services
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a 
                href="#contact"
                className="bg-transparent border-2 border-on-primary text-on-primary font-label-bold text-label-bold px-8 py-4 rounded hover:bg-on-primary hover:text-primary transition-all flex items-center justify-center uppercase tracking-wide"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 right-8 hidden md:flex flex-col items-center gap-2 text-primary-fixed-dim animate-bounce">
          <span className="font-label-bold text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
        </div>
      </div>
    </section>
  )
}
