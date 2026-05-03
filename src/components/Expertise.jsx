const items = [
  {
    num: '01',
    title: 'Structural Steel',
    desc: 'Designing and fabricating robust steel structures including trusses, parapets, pergolas, and toll plaza canopies for major infrastructure projects. Our approach guarantees structural integrity from fabrication to final erection.',
    icon: 'architecture',
  },
  {
    num: '02',
    title: 'Metal Fabrication',
    desc: 'Creating customized metal components with precision engineering and state-of-the-art manufacturing techniques at our MIDC Taloja facility. Utilizing advanced CNC and heavy-duty welding protocols for bespoke industrial requirements.',
    icon: 'precision_manufacturing',
  },
  {
    num: '03',
    title: 'Space Frame Structures',
    desc: 'Developing innovative space frame solutions for versatile architectural and highway infrastructure — executed across 30+ major national projects. Designing large-span roof structures that maximize internal volume without compromising load distribution.',
    icon: 'polyline',
  },
  {
    num: '04',
    title: 'Pipeline & Quick Fixes',
    desc: 'Providing rapid, reliable solutions for pipeline repairs and on-site structural quick fixes — meeting industry safety standards every time. We specialize in robust welding techniques and comprehensive non-destructive testing.',
    icon: 'plumbing',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="w-full max-w-container-max mx-auto px-4 sm:px-8 lg:px-16 py-16 relative grid-bg">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-0.5 bg-secondary" />
          <span className="text-secondary font-label-bold text-label-bold tracking-[0.2em] uppercase">
            What We Do Best
          </span>
        </div>
        <h1 className="font-headline-xl text-[48px] md:text-[64px] text-primary mb-4 uppercase leading-none tracking-tighter">
          Expertise & <span className="text-secondary">Disciplines</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Engineered for scale. Built with immovable reliability. Exploring our core technical capabilities and years of dedicated experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Item 1: Structural Steel (Large) */}
        <div className="col-span-1 md:col-span-8 bg-surface-container-lowest border border-outline-variant p-8 md:p-10 flex flex-col justify-between group hover:border-primary transition-colors duration-300 shadow-[4px_4px_0px_0px_#00112a]">
          <div className="flex justify-between items-start mb-12">
            <h2 className="font-headline-lg text-[40px] md:text-headline-lg text-on-surface uppercase tracking-tight leading-none">
              {items[0].title}
            </h2>
            <span className="material-symbols-outlined text-[48px] text-secondary">
              {items[0].icon}
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              {items[0].desc}
            </p>
            <div className="font-label-bold text-label-bold text-primary flex items-center gap-2 uppercase tracking-widest mt-4">
              Explore Discipline <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        </div>

        {/* Item 2: Metal Fabrication (Medium) */}
        <div className="col-span-1 md:col-span-4 bg-surface-container-lowest border border-outline-variant p-8 md:p-10 flex flex-col justify-between group hover:border-primary transition-colors duration-300 relative overflow-hidden shadow-[4px_4px_0px_0px_#00112a]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-surface-container-high -mr-16 -mt-16 rounded-full opacity-50 z-0"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <h2 className="font-headline-md text-[28px] md:text-headline-md text-on-surface uppercase tracking-tight leading-tight">
                {items[1].title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h2>
              <span className="material-symbols-outlined text-[32px] text-primary">
                {items[1].icon}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              {items[1].desc}
            </p>
          </div>
          <div className="font-label-bold text-label-bold text-secondary flex items-center gap-2 uppercase tracking-widest relative z-10">
            View Specs <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </div>
        </div>

        {/* Item 3: Space Frames (Medium) */}
        <div className="col-span-1 md:col-span-4 bg-primary text-on-primary border border-primary-container p-8 md:p-10 flex flex-col justify-between group shadow-[4px_4px_0px_0px_#f59e0b]">
          <div>
            <div className="flex justify-between items-start mb-8">
              <h2 className="font-headline-md text-[28px] md:text-headline-md text-on-primary uppercase tracking-tight leading-tight">
                {items[2].title.split(' ').slice(0,2).map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h2>
              <span className="material-symbols-outlined text-[32px] text-secondary">
                {items[2].icon}
              </span>
            </div>
            <p className="font-body-md text-body-md text-inverse-primary mb-8">
              {items[2].desc}
            </p>
          </div>
          <button className="bg-secondary text-on-primary font-label-bold text-label-bold uppercase py-3 px-6 hover:bg-secondary-container transition-colors text-center w-full shadow-[2px_2px_0px_0px_rgba(20,38,65,1)]">
            Technical Details
          </button>
        </div>

        {/* Item 4: Pipelines (Large) */}
        <div className="col-span-1 md:col-span-8 bg-surface-container-lowest border border-outline-variant flex flex-col lg:flex-row group hover:border-primary transition-colors duration-300 shadow-[4px_4px_0px_0px_#00112a]">
          <div className="w-full lg:w-3/5 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-[40px] text-primary">
                  {items[3].icon}
                </span>
                <h2 className="font-headline-lg text-[40px] md:text-headline-lg text-on-surface uppercase tracking-tight">
                  Pipelines
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                {items[3].desc}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-surface-container-high pt-6">
              <div>
                <span className="block font-label-bold text-[10px] text-outline uppercase mb-1 tracking-widest">Standard</span>
                <span className="block font-body-md text-body-md text-on-surface font-bold">API 5L / ASME B31</span>
              </div>
              <div>
                <span className="block font-label-bold text-[10px] text-outline uppercase mb-1 tracking-widest">Testing</span>
                <span className="block font-body-md text-body-md text-on-surface font-bold">100% NDT</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 h-64 lg:h-auto relative overflow-hidden bg-surface-container border-t lg:border-t-0 lg:border-l border-outline-variant">
             {/* Using abstract pattern/placeholder instead of pipeline image to ensure we use existing imagery if available, or just a nice aesthetic block */}
            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center grid-bg">
              <span className="material-symbols-outlined text-[100px] text-primary/10">
                precision_manufacturing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
