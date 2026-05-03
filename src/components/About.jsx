const stats = [
  { value: '30+', label: 'Projects Completed', desc: 'Executing with precision across India', icon: 'foundation' },
  { value: '12+', label: 'Years Experience', desc: 'A legacy built on structural integrity', icon: 'engineering' },
  { value: '10+', label: 'States Served', desc: 'From Assam to Maharashtra', icon: 'map' },
  { value: '100%', label: 'Quality Assured', desc: 'Rigorous safety and quality protocols', icon: 'verified' },
]

const bullets = [
  'JB Infrastructure has been at the forefront of designing and manufacturing steel tubes for space frames and various trusses for several years.',
  'We adhere to stringent quality standards and implement robust quality control procedures throughout every stage of every project.',
  'With 12+ years of expertise as production and planning engineers, we have successfully executed approximately twenty space frame structures and structural steel toll plazas for clients across India.',
]

export default function About() {
  return (
    <section id="about" className="w-full max-w-container-max mx-auto px-4 sm:px-8 lg:px-16 py-16">
      <div className="flex flex-col lg:flex-row gap-16 mb-16">
        {/* Left: Text Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-secondary" />
            <span className="text-secondary font-label-bold text-label-bold tracking-[0.2em] uppercase">
              Who We Are
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8 uppercase leading-tight">
            About <span className="text-secondary">Us</span>
          </h2>
          <div className="space-y-6">
            {bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1 flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right: Intro Image/Graphic Placeholder - Optional, but keeps balance */}
        <div className="flex-1 hidden lg:block relative rounded overflow-hidden border border-outline-variant shadow-[4px_4px_0px_0px_#00112a]">
          <div className="absolute inset-0 bg-surface-variant opacity-20 grid-lines pointer-events-none" />
          <div className="w-full h-full bg-primary/5 flex items-center justify-center p-12">
             <span className="material-symbols-outlined text-[120px] text-secondary opacity-20">
               corporate_fare
             </span>
             <h3 className="absolute bottom-8 right-8 font-headline-md text-headline-md text-primary opacity-30 text-right uppercase">
               Engineering<br/>Excellence
             </h3>
          </div>
        </div>
      </div>

      {/* Stats Bento */}
      <div className="grid grid-cols-12 gap-gutter">
        {stats.map((s, i) => (
          <div 
            key={i} 
            className="col-span-12 md:col-span-6 lg:col-span-3 bg-surface border border-outline-variant p-8 rounded shadow-[4px_4px_0px_0px_#00112a] flex flex-col justify-center items-start group hover:border-secondary transition-colors duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="material-symbols-outlined text-secondary-container text-[40px] group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>
                {s.icon}
              </span>
              <h2 className="font-headline-xl text-[48px] text-primary font-black">{s.value}</h2>
            </div>
            <p className="font-headline-md text-[20px] text-on-background mb-2">{s.label}</p>
            <p className="font-body-md text-body-md text-on-surface-variant">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
