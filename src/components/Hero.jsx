const BASE = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#020617]"
    >
      {/* Background image with color burn/luminosity blend for holographic feel */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity grayscale"
        style={{ backgroundImage: `url(${BASE}assets/heroimage.jpeg)` }}
      />

      {/* Multi-layer overlay: deepen toward bottom, keep midground readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/50 to-[#020617]" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 hero-grid opacity-100" />

      {/* Top-left cool cyan glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none animate-pulse" />
      {/* Bottom-right sharp violet glow */}
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center mt-16">
        {/* Logo with ring */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl scale-[1.5] animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-cyan-500/30 scale-[1.2] animate-[spin_10s_linear_infinite]" />
          <img
            src={`${BASE}assets/logo.png`}
            alt="JB Infrastructure"
            className="relative w-28 h-28 object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
          />
        </div>

        {/* Sub-tagline */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-500" />
          <span className="text-cyan-400 text-xs sm:text-sm tracking-[0.5em] uppercase font-medium">
            System Online
          </span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-500" />
        </div>

        {/* Main heading */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-white uppercase leading-none mb-2 tracking-tighter drop-shadow-2xl">
          JB
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-8 tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">INFRA</span>
          <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">STRUCTURE</span>
        </h1>

        {/* Glowing rule */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          <div className="w-2 h-2 rotate-45 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </div>

        {/* Tagline */}
        <p className="text-slate-400 text-sm sm:text-lg tracking-[0.3em] uppercase font-light mb-12 max-w-lg glass-panel py-3 px-6 rounded-full inline-block">
          Precision Engineering
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="#services"
            className="group relative inline-flex items-center justify-center bg-cyan-500 text-[#020617] px-8 py-4 rounded text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] overflow-hidden"
          >
            <span className="relative z-10 transition-transform group-hover:scale-105">Engage Systems</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-white/10 glass-panel hover:border-cyan-500/50 hover:bg-cyan-500/5 text-white px-8 py-4 rounded text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
          >
            Establish Link
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cyan-500/70 animate-bounce">
        <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Descend</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </section>
  )
}
