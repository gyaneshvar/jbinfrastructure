const BASE = import.meta.env.BASE_URL

const stats = [
  { value: '30+',  label: 'Projects Delivered' },
  { value: '12+',  label: 'Years of Expertise' },
  { value: '10+',  label: 'States Served' },
  { value: '100%', label: 'Quality Assured' },
  { value: '30+',  label: 'Projects Delivered' },
  { value: '12+',  label: 'Years of Expertise' },
  { value: '10+',  label: 'States Served' },
  { value: '100%', label: 'Quality Assured' },
]

export default function Hero() {
  return (
    <section
      id="home"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
    >
      {/* Full-bleed background image */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${BASE}assets/heroimage.jpeg)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      />

      {/* Overlay: steel blue wash + linen gradient for legibility */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(20,38,65,0.88) 0%, rgba(20,38,65,0.70) 50%, rgba(20,38,65,0.82) 100%)' }} />

      {/* Blueprint grid overlay */}
      <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      {/* Amber accent corner glow */}
      <div style={{ position: 'absolute', bottom: 80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'rgba(200,134,10,0.12)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      {/* Main content */}
      <div
        style={{
          position: 'relative', zIndex: 10,
          flex: 1, display: 'flex', alignItems: 'center',
          maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', width: '100%',
          paddingTop: 80,
        }}
      >
        <div style={{ maxWidth: 720 }}>
          {/* Pill label */}
          <div className="fade-up" style={{ marginBottom: 28 }}>
            <span className="section-pill-white" style={{ fontFamily: 'var(--font-display)' }}>
              ✦ Pan-India Steel & Space Frame Specialists
            </span>
          </div>

          {/* Headline */}
          <h1
            className="fade-up-delay-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              color: 'white',
              marginBottom: 24,
              letterSpacing: '-0.01em',
            }}
          >
            We Build India's{' '}
            <span style={{ color: 'var(--amber-light)' }}>Highways</span>
            <br />
            — One Steel Frame{' '}
            <br className="mobile-break" />
            at a Time
          </h1>

          {/* Sub-headline */}
          <p
            className="fade-up-delay-2"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.78)',
              lineHeight: 1.7,
              maxWidth: 560,
              marginBottom: 40,
            }}
          >
            Trusted by GR Infraprojects, APCO Infratech, Simplex Infrastructures, and more — delivering precision-engineered steel space frames and structural canopies across 10+ states.
          </p>

          {/* CTAs */}
          <div className="fade-up-delay-3" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-amber" style={{ fontSize: '0.78rem' }}>
              Request a Quote →
            </a>
            <a href="#projects" className="btn-outline" style={{ fontSize: '0.78rem', borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              View Our Projects
            </a>
          </div>
        </div>

        {/* Right accent block — blueprint frame */}
        <div
          className="hero-accent-block"
          style={{
            position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
            width: 380, display: 'flex', flexDirection: 'column', gap: 12,
          }}
        >
          {/* Logo ring */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div style={{ position: 'relative', width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Rotating ring */}
              <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px dashed rgba(200,134,10,0.4)', animation: 'spin 20s linear infinite' }} />
              <div style={{ position: 'absolute', inset: 8, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)' }} />
              <img src={`${BASE}assets/logo.png`} alt="JB Infrastructure" style={{ width: 72, height: 72, objectFit: 'contain', position: 'relative', zIndex: 2 }} />
            </div>
          </div>

          {/* 2x2 stat mini-cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { v: '30+', l: 'Projects' },
              { v: '12+', l: 'Years' },
              { v: '10+', l: 'States' },
              { v: '100%', l: 'Quality' },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  borderRadius: 12,
                  padding: '18px 16px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.7rem', color: 'var(--amber-light)', lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: 6 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stat ticker strip */}
      <div className="stat-ticker fade-up-delay-4" style={{ position: 'relative', zIndex: 10, overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'tickerScroll 22s linear infinite',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                display: 'flex', alignItems: 'center', gap: 32,
                padding: '1rem 2.5rem',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--amber-light)' }}>{s.value}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>{s.label}</span>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.2rem' }}>·</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute', bottom: 64, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          color: 'rgba(255,255,255,0.4)',
          animation: 'bounce 2s infinite',
          zIndex: 10,
        }}
        className="hero-scroll-hint"
      >
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.4em', textTransform: 'uppercase' }}>Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(6px); }
        }
        @media (max-width: 900px) {
          .hero-accent-block { display: none !important; }
          .hero-scroll-hint { display: none; }
        }
        @media (max-width: 600px) { .mobile-break { display: none; } }
      `}</style>
    </section>
  )
}
