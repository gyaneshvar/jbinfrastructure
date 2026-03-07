const BASE = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section
      id="home"
      className="jb-hero-bg min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20"
    >
      {/* Logo */}
      <img
        src={`${BASE}assets/logo.png`}
        alt="JB Infrastructure Logo"
        className="w-36 h-36 object-contain mb-6 drop-shadow-2xl"
      />

      {/* Company name block */}
      <div className="border-2 border-black/80 px-8 py-3 mb-5">
        <h1 className="text-5xl sm:text-7xl font-black text-black tracking-[0.18em] uppercase">
          Infrastructure
        </h1>
      </div>

      {/* Tagline */}
      <p className="text-black/80 text-sm sm:text-base tracking-[0.35em] uppercase font-medium mb-10">
        Your Ideas Tuned Into Reality
      </p>

      {/* CTA */}
      <a
        href="#about"
        className="inline-flex items-center gap-2 bg-black/80 hover:bg-black text-white px-8 py-3 rounded-full font-semibold tracking-wider text-sm transition-colors duration-200"
      >
        Discover More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </a>
    </section>
  )
}
