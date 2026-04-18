const qualityPoints = [
  'Committed to delivering superior quality and adhering to the highest industry standards.',
  'Stringent quality control procedures throughout our design and fabrication processes.',
  'Team consistently undergoes training, staying current with the latest advancements in structural steel and metal fabrication.',
]

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: 'Customized Solutions',
    desc: 'Tailor-made designs and fabrication to meet specific project requirements.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Superior Quality',
    desc: 'Commitment to precision, durability, and compliance with industry standards.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
    title: 'Expertise & Experience',
    desc: 'Skilled professionals with years of experience in structural steel and metal fabrication.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Timely Delivery',
    desc: 'Projects completed within agreed-upon timelines without compromise.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Competitive Pricing',
    desc: 'Cost-effective solutions without compromising on quality or safety.',
  },
]

export default function Quality() {
  return (
    <section id="quality" className="bg-[#020617] py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4 fade-up">
          <div className="w-10 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent" />
          <span className="text-emerald-400 text-xs tracking-[0.4em] uppercase font-semibold">Our Standards</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20 fade-up" style={{ animationDelay: '100ms' }}>
          {/* Left */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight mb-10">
              Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">&amp; Standards</span>
            </h2>
            <ul className="space-y-6">
              {qualityPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-5 text-slate-300 text-sm sm:text-base leading-relaxed group">
                  <span className="mt-2.5 w-6 h-px flex-shrink-0 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] group-hover:w-10 transition-all duration-300" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: quality badge */}
          <div className="lg:pt-16 fade-up" style={{ animationDelay: '200ms' }}>
            <div className="glass-panel border-emerald-500/30 rounded-2xl p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/20 blur-3xl rounded-full" />
              
              <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent mb-3 leading-none select-none relative z-10">ISO</div>
              <div className="text-white font-black text-2xl mb-4 relative z-10 drop-shadow-md">Quality Assured</div>
              <div className="w-10 h-0.5 bg-emerald-400 mb-4 shadow-[0_0_8px_rgba(52,211,153,0.8)] relative z-10" />
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                Every project undergoes rigorous testing from initial blueprint through final execution —
                ensuring constructs that withstand the parameters of time.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="flex items-center gap-3 mb-4 fade-up" style={{ animationDelay: '150ms' }}>
          <div className="w-10 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent" />
          <span className="text-emerald-400 text-xs tracking-[0.4em] uppercase font-semibold">Strategic Advantages</span>
        </div>
        <h3 className="text-3xl sm:text-4xl font-black text-white uppercase mb-12 fade-up" style={{ animationDelay: '200ms' }}>
          Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Benefits</span>
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="glass-panel glass-card-glow group rounded-2xl p-6 hover:border-emerald-400/40 transition-all duration-300 fade-up relative overflow-hidden"
              style={{ animationDelay: `${250 + i * 50}ms` }}
            >
              <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-colors duration-300" />
              <div className="text-emerald-400 mb-4 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] group-hover:scale-110 transition-transform duration-300 relative z-10">{b.icon}</div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3 group-hover:text-emerald-300 transition-colors duration-200 relative z-10">
                {b.title}
              </h4>
              <p className="text-slate-400 text-[11px] leading-relaxed relative z-10">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
