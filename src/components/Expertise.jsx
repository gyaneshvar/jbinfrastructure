const BASE = import.meta.env.BASE_URL

const items = [
  {
    num: 1,
    title: 'Structural Steel',
    desc: 'Designing and fabricating robust steel structures for various applications.',
  },
  {
    num: 2,
    title: 'Metal Fabrication',
    desc: 'Creating customized metal components with precision and efficiency.',
  },
  {
    num: 3,
    title: 'Space Frame Structures',
    desc: 'Developing and implementing space frame solutions for versatile architectural designs.',
  },
  {
    num: 4,
    title: 'Pipeline and Quick Fixes',
    desc: 'Providing reliable solutions for pipeline repairs and quick fixes.',
  },
]

export default function Expertise() {
  return (
    <>
      <div className="jb-separator" />
      <section
        id="expertise"
        className="jb-gradient py-20 px-4 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)',
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Mini logo */}
          <div className="flex justify-center mb-8">
            <img src={`${BASE}assets/logo.png`} alt="JB" className="h-14 w-14 object-contain" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: numbered list */}
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.num} className="flex items-start gap-4">
                  {/* Hexagon-style number badge */}
                  <div
                    className="flex-shrink-0 w-11 h-11 flex items-center justify-center font-bold text-white text-lg rounded-lg"
                    style={{ background: '#2D2D2D', clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
                  >
                    {item.num}
                  </div>
                  <div>
                    <span className="font-bold text-black text-sm sm:text-base">
                      {item.title}:{' '}
                    </span>
                    <span className="text-black/80 text-sm sm:text-base">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: title + description */}
            <div>
              <div className="border-l-4 border-black/60 pl-5 mb-6">
                <h2 className="text-4xl sm:text-5xl font-black text-black uppercase leading-tight">
                  Our<br />Expertise
                </h2>
              </div>
              <p className="text-black/80 text-sm sm:text-base leading-relaxed">
                With years of experience and a dedicated team, we excel in delivering high quality
                projects that meet and exceed client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
