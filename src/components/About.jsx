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
    <section id="about" className="bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-amber-500" />
          <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-semibold">Who We Are</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 uppercase leading-tight mb-10">
              About <span className="text-amber-500">Us</span>
            </h2>
            <ul className="space-y-6">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <span className="mt-2.5 w-6 h-px flex-shrink-0 bg-amber-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <div
                key={i}
                className="card-glow bg-white border border-gray-200 rounded-2xl p-7 text-center transition-all duration-300 hover:border-amber-500/40"
              >
                <div className="text-4xl sm:text-5xl font-black text-amber-400 mb-2">{s.value}</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
