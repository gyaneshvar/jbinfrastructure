const services = [
  {
    num: '01',
    title: 'Structural Steel',
    border: 'hover:border-cyan-400/60',
    highlight: 'text-cyan-400',
    points: [
      'Customized design and fabrication of structural steel components',
      'Stringent quality standards ensuring superior durability and safety',
      'Expertise in trusses, parapets, pergolas, toll plaza canopies',
    ],
  },
  {
    num: '02',
    title: 'Metal Fabrication',
    border: 'hover:border-blue-500/60',
    highlight: 'text-blue-500',
    points: [
      'Precision manufacturing as per client specifications',
      'Advanced techniques and equipment for exacting results',
      'Versatile capabilities for wide-ranging fabrication projects',
    ],
  },
  {
    num: '03',
    title: 'Space Frame Structures',
    border: 'hover:border-violet-500/60',
    highlight: 'text-violet-500',
    points: [
      'Steel tube design and manufacturing for space frame systems',
      'Visually stunning and structurally durable architectural designs',
      'Meeting complex design requirements with engineering precision',
    ],
  },
  {
    num: '04',
    title: 'Pipeline & Quick Fixes',
    border: 'hover:border-fuchsia-500/60',
    highlight: 'text-fuchsia-500',
    points: [
      'Swift, efficient solutions for pipeline repairs across sites',
      'Full adherence to industry standards for safety and performance',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#020617] py-24 px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent" />
          <span className="text-cyan-400 text-xs tracking-[0.4em] uppercase font-semibold">System Capabilities</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 fade-up">
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed glass-panel px-4 py-2 rounded-lg border-l border-cyan-500/50">
            End-to-end solutions — from structural design through fabrication and on-site erection — delivered with cybernetic precision.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 relative">
          {services.map((s, index) => (
            <div
              key={s.num}
              className={`glass-panel glass-card-glow group rounded-2xl p-8 ${s.border} relative overflow-hidden fade-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="flex items-center gap-4 mb-5 relative z-10">
                <span className={`text-4xl font-black ${s.highlight} opacity-20 select-none leading-none group-hover:opacity-40 transition-opacity duration-300`}>{s.num}</span>
                <h3 className="text-white font-bold text-lg uppercase tracking-widest drop-shadow-md">{s.title}</h3>
              </div>
              <div className="w-10 h-px bg-white/10 mb-5 group-hover:bg-cyan-400/60 transition-colors duration-300 relative z-10" />
              <ul className="space-y-4 relative z-10">
                {s.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-300 text-sm leading-relaxed">
                    <span className={`mt-1.5 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]`} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
