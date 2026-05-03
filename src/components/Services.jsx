const services = [
  {
    num: '01',
    title: 'Structural Steel',
    icon: 'architecture',
    points: [
      'Customized design and fabrication of structural steel components',
      'Stringent quality standards ensuring superior durability and safety',
      'Expertise in trusses, parapets, pergolas, toll plaza canopies',
    ],
  },
  {
    num: '02',
    title: 'Metal Fabrication',
    icon: 'precision_manufacturing',
    points: [
      'Precision manufacturing as per client specifications',
      'Advanced techniques and equipment for exacting results',
      'Versatile capabilities for wide-ranging fabrication projects',
    ],
  },
  {
    num: '03',
    title: 'Space Frame Structures',
    icon: 'polyline',
    points: [
      'Steel tube design and manufacturing for space frame systems',
      'Visually stunning and structurally durable architectural designs',
      'Meeting complex design requirements with engineering precision',
    ],
  },
  {
    num: '04',
    title: 'Pipeline & Quick Fixes',
    icon: 'plumbing',
    points: [
      'Swift, efficient solutions for pipeline repairs across sites',
      'Full adherence to industry standards for safety and performance',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="w-full max-w-container-max mx-auto px-4 sm:px-8 lg:px-16 py-16">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-0.5 bg-secondary" />
          <span className="text-secondary font-label-bold text-label-bold tracking-[0.2em] uppercase">
            What We Offer
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-headline-xl text-[48px] md:text-[64px] text-primary uppercase leading-none tracking-tighter">
            Our <span className="text-secondary">Services</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md leading-relaxed">
            End-to-end solutions — from structural design through fabrication and on-site erection — delivered with precision.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        {services.map(s => (
          <div
            key={s.num}
            className="group bg-surface-container-lowest border border-outline-variant p-8 md:p-10 transition-colors duration-300 hover:border-primary shadow-[4px_4px_0px_0px_#e2e2e2] hover:shadow-[4px_4px_0px_0px_#00112a] flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-black text-secondary/30 select-none leading-none font-headline-xl">{s.num}</span>
                <h3 className="font-headline-md text-2xl text-primary uppercase tracking-wide leading-tight">{s.title}</h3>
              </div>
              <span className="material-symbols-outlined text-3xl text-secondary group-hover:scale-110 transition-transform">
                {s.icon}
              </span>
            </div>
            
            <div className="w-12 h-0.5 bg-outline-variant mb-6 group-hover:bg-secondary transition-colors duration-300" />
            
            <ul className="space-y-4 flex-grow">
              {s.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-on-surface-variant font-body-md leading-relaxed">
                  <span className="material-symbols-outlined text-[18px] text-secondary mt-1 flex-shrink-0">
                    arrow_right
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
