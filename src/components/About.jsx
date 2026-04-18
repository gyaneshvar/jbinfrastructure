const stats = [
  { value: '30+', label: 'Projects Completed' },
  { value: '12+', label: 'Years Experience' },
  { value: '10+', label: 'States Served' },
  { value: '100%', label: 'Quality Assured' },
]

const bullets = [
  'JB Infrastructure has been at the forefront of designing and manufacturing steel tubes for space frames and various trusses for several years.',
  'We adhere to stringent quality standards and implement robust quality control procedures throughout every stage of every project.',
  'With 12+ years of expertise as production and planning engineers, we have successfully executed approximately twenty space frame structures and structural steel toll plazas for clients across India.',
]

export default function About() {
  return (
    <section id="about" className="bg-slate-900 py-24 px-4 relative overflow-hidden text-slate-100">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6 fade-up">
          <div className="w-10 h-0.5 bg-sky-600" />
          <span className="text-sky-500 text-xs tracking-[0.3em] uppercase font-bold">Corporate Overview</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div className="fade-up" style={{ animationDelay: '100ms' }}>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight mb-10">
              About <span className="text-sky-500">Us</span>
            </h2>
            <ul className="space-y-6">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-5 text-slate-300 text-sm sm:text-base leading-relaxed group">
                  <span className="mt-2.5 w-6 h-1 flex-shrink-0 bg-sky-600 group-hover:w-10 transition-all duration-300" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-5 fade-up" style={{ animationDelay: '200ms' }}>
            {stats.map((s, i) => (
              <div
                key={i}
                className="industrial-panel industrial-card-hover rounded-lg p-8 text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-sky-600/0 group-hover:bg-sky-600/5 transition-colors duration-300" />
                <div className="text-4xl sm:text-5xl font-black text-white mb-3 relative z-10">
                  {s.value}
                </div>
                <div className="text-slate-400 text-[11px] tracking-widest uppercase relative z-10 font-bold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
