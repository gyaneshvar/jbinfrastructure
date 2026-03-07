const BASE = import.meta.env.BASE_URL

const services = [
  {
    num: 1,
    title: 'Structural Steel',
    points: [
      'Customized design and fabrication of structural steel components.',
      'Stringent quality standards and control procedures for superior durability and safety.',
      'Expertise in creating trusses, parapets, pergolas, and more.',
    ],
  },
  {
    num: 2,
    title: 'Metal Fabrication',
    points: [
      'Precision manufacturing of metal components as per client specifications.',
      'Utilization of advanced techniques and equipment for accurate results.',
      'Versatile capabilities for a wide range of metal fabrication projects.',
    ],
  },
  {
    num: 3,
    title: 'Space Frame Structures',
    points: [
      'Designing and manufacturing steel tubes for space frame structures.',
      'Creating visually stunning and durable architectural designs.',
      'Meeting complex design requirements with precision.',
    ],
  },
  {
    num: 4,
    title: 'Pipeline & Quick Fixes',
    points: [
      'Swift and efficient solutions for pipeline repairs and quick fixes.',
      'Adherence to industry standards for safety and performance.',
    ],
  },
]

export default function Services() {
  return (
    <>
      <div className="jb-separator" />
      <section
        id="services"
        className="jb-gradient-dark py-20 px-4 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)',
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Mini logo */}
          <div className="flex justify-center mb-4">
            <img src={`${BASE}assets/logo.png`} alt="JB" className="h-14 w-14 object-contain" />
          </div>

          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl sm:text-5xl font-black text-black uppercase tracking-widest">
              Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {services.map(s => (
              <div key={s.num} className="flex gap-5">
                <span className="text-3xl font-black text-black/25 select-none leading-tight w-7 flex-shrink-0">
                  {s.num}.
                </span>
                <div>
                  <h3 className="font-black text-black uppercase text-base sm:text-lg tracking-wide mb-3">
                    {s.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {s.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-black/80 text-sm leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
