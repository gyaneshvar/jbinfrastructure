const services = [
  {
    num: '01',
    title: 'Structural Steel',
    border: 'hover:border-amber-500/50',
    highlight: 'text-amber-400',
    points: [
      'Customized design and fabrication of structural steel components',
      'Stringent quality standards ensuring superior durability and safety',
      'Expertise in trusses, parapets, pergolas, toll plaza canopies',
    ],
  },
  {
    num: '02',
    title: 'Metal Fabrication',
    border: 'hover:border-violet-500/50',
    highlight: 'text-violet-400',
    points: [
      'Precision manufacturing as per client specifications',
      'Advanced techniques and equipment for exacting results',
      'Versatile capabilities for wide-ranging fabrication projects',
    ],
  },
  {
    num: '03',
    title: 'Space Frame Structures',
    border: 'hover:border-sky-500/50',
    highlight: 'text-sky-400',
    points: [
      'Steel tube design and manufacturing for space frame systems',
      'Visually stunning and structurally durable architectural designs',
      'Meeting complex design requirements with engineering precision',
    ],
  },
  {
    num: '04',
    title: 'Pipeline & Quick Fixes',
    border: 'hover:border-emerald-500/50',
    highlight: 'text-emerald-400',
    points: [
      'Swift, efficient solutions for pipeline repairs across sites',
      'Full adherence to industry standards for safety and performance',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-gray-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-amber-500" />
          <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-semibold">What We Offer</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight">
            Our <span className="text-amber-400">Services</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md leading-relaxed">
            End-to-end solutions — from structural design through fabrication and on-site erection — delivered with precision.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map(s => (
            <div
              key={s.num}
              className={`card-glow group bg-gray-800 border border-gray-700 rounded-2xl p-8 transition-all duration-300 ${s.border}`}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className={`text-3xl font-black ${s.highlight} opacity-30 select-none leading-none`}>{s.num}</span>
                <h3 className="text-white font-black text-lg uppercase tracking-wide">{s.title}</h3>
              </div>
              <div className="w-10 h-px bg-gray-600 mb-5 group-hover:bg-amber-500/60 transition-colors duration-300" />
              <ul className="space-y-3">
                {s.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-amber-500" />
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
