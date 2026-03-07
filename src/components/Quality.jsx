const BASE = import.meta.env.BASE_URL

const qualityPoints = [
  'At JB Infrastructure, we are committed to delivering superior quality and adhering to the highest industry standards.',
  'We implement stringent quality control procedures throughout our design and fabrication processes.',
  'Our team consistently undergoes training and stays updated with the latest advancements in structural steel and metal fabrication.',
]

const benefits = [
  { title: 'Customized Solutions', desc: 'Tailor-made designs and fabrication to meet specific project requirements.' },
  { title: 'Superior Quality', desc: 'Commitment to precision, durability, and compliance with industry standards.' },
  { title: 'Expertise and Experience', desc: 'Skilled professionals with years of experience in structural steel and metal fabrication.' },
  { title: 'Timely Delivery', desc: 'Projects completed within agreed-upon timelines.' },
  { title: 'Competitive Pricing', desc: 'Cost-effective solutions without compromising on quality.' },
]

export default function Quality() {
  return (
    <>
      <div className="jb-separator" />
      {/* Quality Standards */}
      <section
        id="quality"
        className="jb-gradient py-20 px-4 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)',
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center mb-6">
            <img src={`${BASE}assets/logo.png`} alt="JB" className="h-14 w-14 object-contain" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-black uppercase tracking-wide mb-10">
            Quality &amp; Standards
          </h2>

          <ul className="space-y-4">
            {qualityPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-black/90 text-sm sm:text-base leading-relaxed">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-black/70" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="jb-separator" />

      {/* Client Benefits */}
      <section
        className="jb-gradient-dark py-20 px-4 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)',
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center mb-6">
            <img src={`${BASE}assets/logo.png`} alt="JB" className="h-14 w-14 object-contain" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-black uppercase tracking-wide mb-10">
            Client<br />Benefits
          </h2>

          <dl className="space-y-4">
            {benefits.map((b, i) => (
              <div key={i} className="text-sm sm:text-base leading-relaxed text-black/90">
                <span className="font-bold text-black">{b.title}: </span>
                {b.desc}
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
