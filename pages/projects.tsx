import Link from 'next/link'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollReveal } from '../components/useScrollReveal'
import Seo from '../components/Seo'
import { projects, categories, categoryColors, type Category } from '../lib/projectsData'

export default function Projects() {
  useScrollReveal()
  const [activeFilter, setActiveFilter] = useState<Category>('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      <Seo
        title="Our Projects"
        description={`Browse ${projects.length} featured fire safety installations and case studies across Mumbai — commercial towers, residential, industrial, healthcare, and hospitality.`}
        path="/projects"
        keywords="fire safety projects Mumbai, commercial fire installation portfolio, residential sprinkler projects, industrial fire systems India"
        noindex
      />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBA-iT24GVHhhI0o21QoM8Hq6fbXQ4a8o5k13KZiQB5NPjoIlE94Zs8llXUu0x9y1c6oyeOgrZ2KbNe2aTPyDgUra41o5a9lCZ0svtwOvCQLdIxWkzLD8zeUlVD6L_d-mF180PitJoGAAmDSArSw7vlBZx_EZkvlYRO-vav80RFRQO0rnRz5keHaVRm52VP_hY14IKTEMCD7xsE3Q3y2pe6O6ODhKZCygU-MtxG-KcPf1BETktFC4NqdTvs2ZfeRRvxiUfnxRB7li8')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#0f0505]" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-24">
          <div className="section-label mb-4">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Portfolio</span>
          </div>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-black text-white uppercase leading-none mb-4">
            Our Projects
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mb-6">
            Over 1,000 fire safety installations across Mumbai's most iconic residential, commercial, industrial, and institutional properties.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            {[
              { n: '200+', l: 'Projects' },
              { n: '34', l: 'Years' },
              
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-3">
                <div className="font-display text-3xl font-black text-primary">{s.n}</div>
                <div className="text-slate-400 text-xs uppercase tracking-wider font-bold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER & GRID ─────────────────────────────────────── */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-3 mb-12 reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 border ${
                  activeFilter === cat
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-primary/30 hover:text-primary'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-2 opacity-60 text-xs">
                    ({projects.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((project, i) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="block break-inside-avoid project-card bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group cursor-pointer"
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${
                    project.size === 'large' ? 'h-72' : project.size === 'medium' ? 'h-52' : 'h-40'
                  }`}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover card-image"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent card-overlay opacity-0" />

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-primary px-3 py-1.5 rounded-full">
                      <span className="material-symbols-outlined text-white text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="text-white text-xs font-black">FEATURED</span>
                    </div>
                  )}

                  {/* Category */}
                  <div className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold ${categoryColors[project.category]}`}>
                    {project.category}
                  </div>

                  {/* Hover: service tags */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-2 py-0.5 rounded text-xs font-semibold"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display text-xl font-black text-slate-900 uppercase leading-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="font-display text-lg font-black text-primary shrink-0">{project.value}</span>
                  </div>

                  <div className="space-y-2 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm">business</span>
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm">calendar_today</span>
                      <span>Completed {project.year}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-6xl text-slate-300 mb-4 block">folder_open</span>
              <p className="text-slate-500 font-medium">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── SECTORS WE SERVE ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4 reveal">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Reach</span>
              <div className="h-[2px] w-10 bg-primary" />
            </div>
            <h2 className="font-display text-5xl font-black text-slate-900 uppercase reveal delay-100">Sectors We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: 'apartment', label: 'Residential', count: '280+' },
              { icon: 'business_center', label: 'Commercial', count: '320+' },
              { icon: 'factory', label: 'Industrial', count: '180+' },
              { icon: 'local_hospital', label: 'Healthcare', count: '60+' },
              { icon: 'hotel', label: 'Hospitality', count: '45+' },
              { icon: 'school', label: 'Education', count: '120+' },
            ].map((sector, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-bg-light border border-slate-100 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group reveal"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-white text-xl">{sector.icon}</span>
                </div>
                <div className="font-display text-2xl font-black text-primary">{sector.count}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">{sector.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT TRUST ──────────────────────────────────────── */}
      <section className="py-20 bg-[#0f0505]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="font-display text-3xl font-black text-white uppercase tracking-widest opacity-30">Trusted By Mumbai's Best</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['HDFC BANK', 'RELIANCE INDUSTRIES', 'LODHA GROUP', 'GODREJ PROPERTIES', 'TATA POWER', 'MAHINDRA LIFESPACES', 'L&T REALTY', 'MUMBAI PORT TRUST'].map((client, i) => (
              <div
                key={i}
                className="border border-white/8 rounded-xl p-5 text-center hover:border-primary/30 hover:bg-white/5 transition-all duration-300 reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <span className="font-display text-lg font-black text-slate-500 uppercase tracking-tight">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_white_0%,_transparent_70%)]" />
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <h2 className="font-display text-5xl lg:text-6xl font-black text-white uppercase mb-4 reveal">
            Have a Project in Mind?
          </h2>
          <p className="text-white/80 mb-8 text-lg reveal delay-100">
            Contact our team for a comprehensive site assessment and safety consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal delay-200">
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center justify-center gap-3 bg-white text-primary hover:bg-slate-100 px-8 py-4 rounded-lg font-black tracking-wide transition-all duration-300 shadow-xl"
            >
              Start a Project
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 bg-[#0f0505] text-white hover:bg-slate-900 px-8 py-4 rounded-lg font-black tracking-wide transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
