const items = [
  {
    num: '01',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Structural Steel',
    desc: 'Designing and fabricating robust steel structures including trusses, parapets, pergolas, and toll plaza canopies for major infrastructure projects.',
  },
  {
    num: '02',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M17.66 6.34l-2.12 2.12M4.22 19.78l2.12-2.12" />
      </svg>
    ),
    title: 'Metal Fabrication',
    desc: 'Creating customized metal components with precision engineering and state-of-the-art manufacturing techniques at our MIDC Taloja facility.',
  },
  {
    num: '03',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="8.5" x2="22" y2="8.5" />
        <line x1="2" y1="15.5" x2="22" y2="15.5" />
      </svg>
    ),
    title: 'Space Frame Structures',
    desc: 'Developing innovative space frame solutions for versatile architectural and highway infrastructure — executed across 30+ major national projects.',
  },
  {
    num: '04',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Pipeline & Quick Fixes',
    desc: 'Providing rapid, reliable solutions for pipeline repairs and on-site structural quick fixes — meeting industry safety standards every time.',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="bg-slate-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-amber-500" />
          <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-semibold">What We Do Best</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight">
            Our <span className="text-amber-500">Expertise</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md leading-relaxed">
            Years of experience, a dedicated team, and the precision to deliver high-quality
            projects that meet — and exceed — client expectations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.num}
              className="card-glow group bg-gray-900/40 border border-gray-800/80 rounded-2xl p-8 hover:border-amber-500/40 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-amber-400 mb-5">{item.icon}</div>
              {/* Number */}
              <div className="text-amber-500/60 text-xs font-black tracking-widest mb-3">{item.num}</div>
              {/* Title */}
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-4 leading-tight">
                {item.title}
              </h3>
              {/* Animated underline */}
              <div className="w-6 h-0.5 bg-amber-500 mb-4 group-hover:w-14 transition-all duration-400 rounded-full" />
              {/* Description */}
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
