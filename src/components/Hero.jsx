const BASE = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BASE}assets/heroimage.jpeg)` }}
      />

      {/* Multi-layer overlay: deepen toward bottom, keep midground readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 hero-grid opacity-60" />

      {/* Top-left warm glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      {/* Bottom-right cool glow */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with ring */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-xl scale-125" />
          <img
            src={`${BASE}assets/logo.png`}
            alt="JB Infrastructure"
            className="relative w-28 h-28 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Sub-tagline */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-amber-400/60" />
          <span className="text-amber-400 text-xs tracking-[0.5em] uppercase font-semibold">
            Steel · Precision · Excellence
          </span>
          <div className="w-8 h-px bg-amber-400/60" />
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-none mb-3 tracking-tight">
          JB
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-6 tracking-tight">
          <span className="text-amber-400">INFRA</span>
          <span className="text-white">STRUCTURE</span>
        </h1>

        {/* Gold rule */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-16 h-px bg-amber-500" />
          <div className="w-2 h-2 rotate-45 bg-amber-500" />
          <div className="w-16 h-px bg-amber-500" />
        </div>

        {/* Tagline */}
        <p className="text-white/70 text-sm sm:text-lg tracking-[0.3em] uppercase font-light mb-12 max-w-lg">
          Your Ideas Tuned Into Reality
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-8 py-3.5 rounded font-black tracking-widest text-xs uppercase transition-all duration-200 shadow-lg shadow-amber-500/25"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-amber-400 hover:text-amber-400 text-white/80 px-8 py-3.5 rounded font-bold tracking-widest text-xs uppercase transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </section>
  )
}
