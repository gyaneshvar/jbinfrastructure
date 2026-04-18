const services = [
  {
    num: '01',
    title: 'Structural Steel',
    points: [
      'Customized design and fabrication of structural steel components',
      'Stringent quality standards ensuring superior durability and safety',
      'Expertise in trusses, parapets, pergolas, toll plaza canopies',
    ],
  },
  {
    num: '02',
    title: 'Metal Fabrication',
    points: [
      'Precision manufacturing as per client specifications',
      'Advanced techniques and equipment for exacting results',
      'Versatile capabilities for wide-ranging fabrication projects',
    ],
  },
  {
    num: '03',
    title: 'Space Frame Structures',
    points: [
      'Steel tube design and manufacturing for space frame systems',
      'Visually stunning and structurally durable architectural designs',
      'Meeting complex design requirements with engineering precision',
    ],
  },
  {
    num: '04',
    title: 'Pipeline & Quick Fixes',
    points: [
      'Swift, efficient solutions for pipeline repairs across sites',
      'Full adherence to industry standards for safety and performance',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-slate-900 py-24 px-4 border-y border-slate-800">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-0.5 bg-sky-600" />
          <span className="text-sky-500 text-xs tracking-[0.3em] uppercase font-bold">Capabilities</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 fade-up">
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight">
            Our <span className="text-sky-500">Services</span>
          </h2>
          <p className="text-slate-300 text-sm max-w-md leading-relaxed p-4 rounded bg-slate-800 border-l-4 border-sky-600">
            End-to-end solutions — from structural design through fabrication and on-site erection — delivered with uncompromising precision.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 relative">
          {services.map((s, index) => (
            <div
              key={s.num}
              className={`industrial-panel industrial-card-hover group rounded-lg p-8 relative overflow-hidden fade-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <span className={`text-4xl font-black text-slate-700 select-none leading-none`}>{s.num}</span>
                <h3 className="text-white font-bold text-lg uppercase tracking-wide">{s.title}</h3>
              </div>
              <div className="w-12 h-1 bg-slate-700 mb-6 group-hover:bg-sky-600 transition-colors duration-300 relative z-10" />
              <ul className="space-y-4 relative z-10">
                {s.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-300 text-sm leading-relaxed">
                    <span className={`mt-1.5 w-2 h-2 flex-shrink-0 bg-sky-500`} />
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
