const BASE = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-slate-900"
    >
      {/* Background image heavily darkened and grayscale for structural aesthetic */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 grayscale"
        style={{ backgroundImage: `url(${BASE}assets/heroimage.jpeg)` }}
      />
      <div className="absolute inset-0 bg-slate-900/80" />

      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 blueprint-grid" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center mt-16 max-w-4xl">
        {/* Logo */}
        <div className="mb-8">
          <img
            src={`${BASE}assets/logo.png`}
            alt="JB Infrastructure"
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Sub-tagline */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-sky-600" />
          <span className="text-sky-500 text-xs sm:text-sm tracking-[0.2em] font-semibold uppercase">
            Heavy Civil & Structural Engineering
          </span>
          <div className="w-12 h-px bg-sky-600" />
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[1.1] mb-6 tracking-tight">
          Precision <span className="text-sky-500">Engineered</span> For Tomorrow
        </h1>

        {/* Tagline */}
        <p className="text-slate-300 text-lg sm:text-xl font-light mb-12 max-w-2xl leading-relaxed">
          Over 12 years of expertise designing, manufacturing, and erecting structural steel, space frames, and infrastructure megaprojects across India.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded text-sm font-bold tracking-wider uppercase transition-colors duration-300 shadow-lg"
          >
            View Our Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded text-sm font-bold tracking-wider uppercase transition-colors duration-300"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
