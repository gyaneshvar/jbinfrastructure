const commitments = [
  { title: 'ISO Certified', desc: 'ISO 9001:2015 compliant processes ensuring standardized excellence.' },
  { title: 'Rigorous Inspection', desc: '100% Non-Destructive Testing (NDT) on critical welds and joints.' },
  { title: 'Material Grade', desc: 'Use of high-grade structural steel and certified consumables only.' },
  { title: 'Timely Delivery', desc: 'Optimized fabrication schedules without compromising on safety protocols.' },
]

export default function Quality() {
  return (
    <section id="quality" className="w-full max-w-container-max mx-auto px-4 sm:px-8 lg:px-16 py-16">
      <div className="bg-primary border border-primary-container text-on-primary shadow-[4px_4px_0px_0px_#f59e0b] relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-10 grid-lines pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 p-8 md:p-12 lg:p-16">
          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-secondary" />
              <span className="text-secondary font-label-bold text-label-bold tracking-[0.2em] uppercase">
                Quality Standards
              </span>
            </div>
            
            <h2 className="font-headline-xl text-[40px] md:text-[56px] text-on-primary uppercase leading-none tracking-tighter mb-6">
              Uncompromising <span className="text-secondary block mt-2">Integrity</span>
            </h2>
            
            <p className="font-body-lg text-body-lg text-inverse-primary mb-8 max-w-md leading-relaxed">
              We operate under the strictest quality control protocols, ensuring every structure we fabricate meets global safety and durability standards.
            </p>

            <div className="inline-flex items-center gap-4 bg-surface-container-lowest/10 border border-surface-container-lowest/20 p-4 rounded max-w-fit backdrop-blur-sm">
              <span className="material-symbols-outlined text-[48px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              <div>
                <p className="font-label-bold text-[10px] text-inverse-primary tracking-widest uppercase mb-1">Certification</p>
                <p className="font-headline-md text-xl text-on-primary font-bold">ISO 9001:2015</p>
              </div>
            </div>
          </div>

          {/* Right Content - Commitments Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 lg:gap-8 lg:border-l border-primary-container lg:pl-16 lg:py-4">
            {commitments.map((c, i) => (
              <div key={i} className="flex flex-col gap-3 group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    {i === 0 ? 'workspace_premium' : i === 1 ? 'biotech' : i === 2 ? 'architecture' : 'schedule'}
                  </span>
                  <h3 className="font-headline-md text-xl text-on-primary uppercase tracking-wide group-hover:text-secondary transition-colors">
                    {c.title}
                  </h3>
                </div>
                <div className="w-8 h-px bg-secondary/30" />
                <p className="font-body-md text-body-md text-inverse-primary leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
