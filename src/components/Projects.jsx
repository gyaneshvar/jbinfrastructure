import { projects } from '../data/projects'

const BASE = import.meta.env.BASE_URL

// Use existing gallery images to pair with the 12 projects
const projectImages = [
  'newproject1.jpeg',
  'newproject2.jpeg',
  'newproject3.jpeg',
  'newproject4.jpeg',
  'p10.jpeg',
  'p11.jpeg',
  'p12.jpeg',
  'p13.jpeg',
  'p14.jpeg',
  'p15.jpeg',
  'p17.jpeg',
  'p20.jpeg'
]

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-container-max mx-auto px-4 sm:px-8 lg:px-16 py-16">
      {/* Header Section */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-0.5 bg-secondary" />
          <span className="text-secondary font-label-bold text-label-bold tracking-[0.2em] uppercase">
            Track Record
          </span>
        </div>
        <h1 className="font-headline-xl text-[48px] md:text-[64px] text-primary mb-6 uppercase leading-none tracking-tighter">
          Delivered <span className="text-secondary">Projects</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          A proven track record of engineering excellence across India. Explore our portfolio of high-scale infrastructure developments, spanning critical highways, commercial complexes, to complex pipeline networks.
        </p>
      </header>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <article 
            key={i} 
            className="bg-surface border border-outline-variant group hover:border-primary transition-colors flex flex-col h-full shadow-[4px_4px_0px_0px_#e2e2e2] hover:shadow-[4px_4px_0px_0px_#00112a]"
          >
            {/* Image container */}
            <div className="aspect-[16/9] w-full bg-surface-container relative overflow-hidden flex-shrink-0">
              <img 
                src={`${BASE}assets/${projectImages[i] || projectImages[0]}`}
                alt={p.client}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-primary-container text-on-primary-container px-3 py-1 font-label-bold text-[10px] uppercase tracking-wider">
                Project {String(i + 1).padStart(2, '0')}
              </div>
            </div>

            {/* Content container */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-headline-md text-xl text-primary mb-4 leading-tight line-clamp-3" title={p.name}>
                {p.name}
              </h3>
              
              <div className="flex items-start text-on-surface-variant font-label-bold text-xs mb-6 flex-grow">
                <span className="material-symbols-outlined mr-2 text-base text-secondary flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                  business
                </span>
                <span className="leading-snug">{p.client}</span>
              </div>

              {/* Footer info */}
              <div className="grid grid-cols-1 gap-4 border-t border-outline-variant/30 pt-4 mt-auto">
                <div>
                  <span className="block text-[10px] text-on-surface-variant uppercase mb-1 tracking-widest">
                    Work Order / Date
                  </span>
                  <span className="font-label-bold text-xs text-primary break-words">
                    {p.workOrder}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
