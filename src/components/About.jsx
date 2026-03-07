const BASE = import.meta.env.BASE_URL

const bullets = [
  'JB Infrastructure has been at the forefront of designing and manufacturing steel tubes for space frames and various trusses for several years.',
  'We adhere to stringent quality standards and implement robust quality control procedures.',
  'Over the past 7–8 years, as production and planning engineers, we have successfully executed approximately twenty space frame structures and structural steel toll plazas for clients nationwide.',
]

export default function About() {
  return (
    <>
      <div className="jb-separator" />
      <section
        id="about"
        className="jb-gradient-dark py-20 px-4 relative overflow-hidden"
      >
        {/* Diagonal stripe overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)',
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Mini logo */}
          <div className="flex justify-center mb-6">
            <img src={`${BASE}assets/logo.png`} alt="JB" className="h-14 w-14 object-contain" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-widest uppercase text-center mb-10">
            About Us
          </h2>

          {/* Content card */}
          <div className="border border-white/40 rounded-xl p-8 backdrop-blur-sm bg-white/5">
            <ul className="space-y-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-black/90 text-sm sm:text-base leading-relaxed">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-black/70" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
