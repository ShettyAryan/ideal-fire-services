import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { useScrollReveal } from '../components/useScrollReveal'

const journeyNarrativeBlocks = [
  {
    icon: 'flag' as const,
    heading: 'Our Beginning',
    body:
      'Our journey began in 1991 with a clear vision—to spread awareness and knowledge about fire safety and protection. What started as a focused initiative serving corporate clients laid the foundation for everything we stand for today.',
  },
  {
    icon: 'shield' as const,
    heading: 'Our Philosophy',
    body:
      'From day one, we have believed that fire safety is not just a service—it is a responsibility. Our mission has always been to deliver reliable solutions, raise awareness, and ensure every space is equipped to safeguard lives and property.',
  },
  {
    icon: 'trending_up' as const,
    heading: 'Our Growth',
    body:
      'Over the years, we have grown from serving select corporate clients to becoming a trusted name across both corporate and residential sectors, expanding our impact and reach.',
  },
]

const journeyCorporateClients = [
  'Pidilite Industries',
  'Mahindra & Mahindra',
  'Godfrey Phillips India',
  'Golden Tobacco Company',
  'Matulya Mills',
  'Bhor Industries',
  'Shakti Insulated Wires',
  'Miranda Tools',
  'Haldyne Glass',
  'Lyka Labs',
]

const journeyHospitalityClients = ['Hotel InterContinental', 'Hotel Palmgrove']

const journeyResidentialClients = [
  'Ajmera Housing Corporation',
  'Mayfair Housing',
  'UK Builders',
  'D.G. Land Developers',
  'DGS Township',
  'Wescon Housing',
  'Sumit Developers',
  'Toughcons Realtors',
  'Vastu Creations',
  'Gayatri Krupa Developers',
  'Sadguru Krupa Developers',
  'A & A Developers',
  'RNA Builders',
  'NVP Realty',
]

const journeyClosingBlocks = [
  {
    icon: 'workspace_premium' as const,
    heading: '30+ Years of Expertise',
    body:
      'With over three decades of experience, Ideal Fire Services stands for trust, expertise, and a deep-rooted commitment to safety.',
  },
  {
    icon: 'forward' as const,
    heading: 'Looking Ahead',
    body:
      'As we move forward, we remain dedicated to raising fire safety standards and building safer environments for generations to come.',
  },
]

const values = [
  {
    icon: 'verified',
    title: 'Uncompromising Quality',
    desc: 'We use only certified, high-grade materials and equipment to ensure systems perform when it matters most.',
  },
  {
    icon: 'groups',
    title: 'Professionalism',
    desc: 'Our engineers are trained to the highest ethical and technical standards, ensuring reliable project delivery.',
  },
  {
    icon: 'gavel',
    title: 'Compliance Excellence',
    desc: 'Deep expertise in Mumbai Fire Brigade norms and international NFPA standards for absolute regulatory adherence.',
  },
]

const team = [
  { name: 'Ramesh Sharma', title: 'Founder & Managing Director', years: '33 years' },
  { name: 'Priya Nair', title: 'Chief Technical Officer', years: '18 years' },
  { name: 'Anil Desai', title: 'Head of Operations', years: '22 years' },
  { name: 'Sunil Mehta', title: 'Compliance & Audit Lead', years: '15 years' },
]

export default function About() {
  useScrollReveal()

  return (
    <>
      <Seo
        title="About Us"
        description="Ideal Fire Services — trusted Mumbai fire safety partner since 1991. Our story, values, licensed team (MFS/LA/RF-124/RD 127), and commitment to life-safety compliance."
        path="/about"
        keywords="about Ideal Fire Services, fire safety company Mumbai, fire protection history, licensed fire contractor Maharashtra"
      />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[420px] flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkmaeCdDmgZGSXZXr3_hGKCS3HEwXvLySKGoKYE81vkiPxGiJkNmMlU0hiAl_4u5ZmKi14ODgQnfC-lYGHPbipDvOshH4uD5f3p1-GqkPeFLGbP-nM6BZICnk5qir-lqhj_0W9A2eKjmEC2o3dcpJNohmwfzEvnhzAfla-Y5Od6nsDKY5JRQXc_M-2ERNYonVdYjPhkjF4TDW7WH2S8kwqcgZ68A9pshhTwueWxvix7t4a285fVKKpcPAeK5X1XO27IXxDK8yuxWo')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-36">
          <div className="section-label mb-3">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Story</span>
          </div>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-black text-white uppercase leading-none mb-4">
            About Ideal<br />Fire Services
          </h1>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>
      </section>

      {/* ── OVERVIEW ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="section-label mb-4 reveal-left">
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Heritage</span>
              </div>
              <h2 className="font-display text-5xl font-black text-slate-900 uppercase leading-tight mb-6 reveal-left delay-100">
                Safeguarding Mumbai<br />Since 1991
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8 reveal delay-200">
                <p>
                  Established in 1991 in the heart of Mumbai, Ideal Fire Services began with a singular focus: to provide uncompromising fire safety solutions to a growing metropolis. For over three decades, we have evolved from a local service provider into a comprehensive fire protection and detection organisation.
                </p>
                <p>
                  Our journey is defined by a commitment to international safety standards and a deep understanding of local compliance needs. We specialize in designing, installing, and maintaining state-of-the-art fire suppression systems for industrial, commercial, and residential sectors.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 reveal delay-300">
                <div className="border-l-4 border-primary pl-5">
                  <div className="font-display text-4xl font-black text-slate-900">34</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Years Experience</div>
                </div>
                <div className="border-l-4 border-primary pl-5">
                  <div className="font-display text-4xl font-black text-slate-900">200+</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Projects Completed</div>
                </div>
              </div>
            </div>

            <div className="relative group reveal-right max-w-[500px] mx-auto">
              <div className="absolute -inset-4 bg-primary/8 rounded-2xl group-hover:bg-primary/15 transition-all duration-500" />
              <img
                src="/images/uncle1.jpeg"
                alt="Fire safety equipment"
                className="relative rounded-2xl shadow-2xl h-[600px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────────── */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: 'target',
                title: 'Our Mission',
                text: '"To provide reliable fire protection systems and compliance services that empower businesses and communities in Mumbai to operate with absolute safety and peace of mind through professional expertise and technological excellence."',
              },
              {
                icon: 'visibility',
                title: 'Our Vision',
                text: '"To be Mumbai\'s most trusted and respected fire safety partner, recognized for our commitment to quality workmanship, ethical practices, and the continuous advancement of life-safety standards in the urban environment."',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-primary hover:shadow-xl transition-all duration-300 reveal"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-display text-3xl font-black text-slate-900 uppercase mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed italic">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR JOURNEY ───────────────────────────────────────── */}
      <section className="py-24 sm:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14 sm:mb-20 max-w-3xl mx-auto group/journey-head">
            <div className="section-label justify-center mb-4 reveal">
              <span className="text-primary font-bold uppercase tracking-widest text-sm transition-colors duration-300 group-hover/journey-head:text-primary-dark">
                Our Journey
              </span>
              <div className="h-[2px] w-10 bg-primary origin-left transition-all duration-500 ease-out group-hover/journey-head:w-14" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 uppercase leading-tight reveal delay-100 transition-colors duration-300 group-hover/journey-head:text-slate-800">
              A Legacy Built on Safety
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed reveal delay-200 transition-colors duration-300 group-hover/journey-head:text-slate-600">
              From our first corporate engagements to today&apos;s city-wide footprint—how we evolved while staying true to our purpose.
            </p>
          </div>

          {/* Single column: fixed icon rail + content so every H3 shares the same left edge */}
          <div className="max-w-3xl mx-auto space-y-0">
            {journeyNarrativeBlocks.map((block, i) => (
              <article
                key={block.heading}
                className="group/journey-row flex gap-4 sm:gap-5 items-start pb-12 sm:pb-14 border-b border-slate-100 reveal pt-5 rounded-xl -mx-2 px-2 sm:-mx-3 sm:px-3 transition-colors duration-300 hover:bg-slate-50/90"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div
                  className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mt-0.5 transition-all duration-300 ease-out shadow-sm shadow-transparent group-hover/journey-row:scale-105 group-hover/journey-row:border-primary/35 group-hover/journey-row:bg-primary/15 group-hover/journey-row:shadow-primary/10"
                  aria-hidden
                >
                  <span className="material-symbols-outlined text-primary text-xl transition-transform duration-300 ease-out group-hover/journey-row:scale-110">
                    {block.icon}
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase leading-tight transition-colors duration-300 group-hover/journey-row:text-primary">
                    {block.heading}
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-3 transition-colors duration-300 group-hover/journey-row:text-slate-700">
                    {block.body}
                  </p>
                </div>
              </article>
            ))}

            <article className="group/journey-row flex gap-4 sm:gap-5 items-start pt-5 sm:pt-5 pb-12 sm:pb-14 border-b border-slate-100 reveal delay-150 rounded-xl -mx-2 px-2 sm:-mx-3 sm:px-3 transition-colors duration-300 hover:bg-slate-50/90">
              <div
                className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mt-0.5 transition-all duration-300 ease-out shadow-sm shadow-transparent group-hover/journey-row:scale-105 group-hover/journey-row:border-primary/35 group-hover/journey-row:bg-primary/15 group-hover/journey-row:shadow-primary/10"
                aria-hidden
              >
                <span className="material-symbols-outlined text-primary text-xl transition-transform duration-300 ease-out group-hover/journey-row:scale-110">
                  corporate_fare
                </span>
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase leading-tight transition-colors duration-300 group-hover/journey-row:text-primary">
                  Trusted by Leading Organizations
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-3 transition-colors duration-300 group-hover/journey-row:text-slate-700">
                  We&apos;ve had the privilege of working with esteemed organizations across industries. Our expertise also extends to leading hospitality brands.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {journeyCorporateClients.map((name) => (
                    <div
                      key={name}
                      className="rounded-xl border border-slate-200 bg-bg-light px-4 py-3 text-left transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:shadow-md hover:shadow-slate-200/80 active:scale-[0.99] cursor-default"
                    >
                      <span className="text-sm font-bold text-slate-900">{name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {journeyHospitalityClients.map((name) => (
                    <div
                      key={name}
                      className="group/pill inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/10 hover:shadow-sm active:scale-[0.98] cursor-default"
                    >
                      <span className="material-symbols-outlined text-primary text-sm transition-transform duration-300 ease-out group-hover/pill:scale-110">
                        hotel
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wide text-slate-800 transition-colors duration-200 group-hover/pill:text-slate-900">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="group/journey-row flex gap-4 sm:gap-5 items-start pb-12 sm:pb-14 border-b border-slate-100 reveal delay-200 pt-5 rounded-xl -mx-2 px-2 sm:-mx-3 sm:px-3 transition-colors duration-300 hover:bg-slate-50/90">
              <div
                className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mt-0.5 transition-all duration-300 ease-out shadow-sm shadow-transparent group-hover/journey-row:scale-105 group-hover/journey-row:border-primary/35 group-hover/journey-row:bg-primary/15 group-hover/journey-row:shadow-primary/10"
                aria-hidden
              >
                <span className="material-symbols-outlined text-primary text-xl transition-transform duration-300 ease-out group-hover/journey-row:scale-110">
                  apartment
                </span>
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase leading-tight transition-colors duration-300 group-hover/journey-row:text-primary">
                  Serving Residential &amp; Real Estate
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-3 transition-colors duration-300 group-hover/journey-row:text-slate-700">
                  In the residential and real estate sector, we have partnered with reputed developers—building long-term relationships grounded in compliance and care.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {journeyResidentialClients.map((name) => (
                    <div
                      key={name}
                      className="rounded-xl border border-slate-200 bg-bg-light px-4 py-3 text-left transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:shadow-md hover:shadow-slate-200/80 active:scale-[0.99] cursor-default"
                    >
                      <span className="text-sm font-bold text-slate-900">{name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-sm mt-4 transition-colors duration-300 group-hover/journey-row:text-slate-600">
                  Among others we are proud to support across the region.
                </p>
              </div>
            </article>

            <div className="space-y-12 sm:space-y-14 pt-12 sm:pt-14">
              {journeyClosingBlocks.map((block, i) => (
                <article
                  key={block.heading}
                  className="group/journey-row flex gap-4 sm:gap-5 items-start reveal rounded-xl -mx-2 px-2 sm:-mx-3 sm:px-3 py-1 transition-colors duration-300 hover:bg-slate-50/90"
                  style={{ transitionDelay: `${0.22 + i * 0.06}s` }}
                >
                  <div
                    className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mt-0.5 transition-all duration-300 ease-out shadow-sm shadow-transparent group-hover/journey-row:scale-105 group-hover/journey-row:border-primary/35 group-hover/journey-row:bg-primary/15 group-hover/journey-row:shadow-primary/10"
                    aria-hidden
                  >
                    <span className="material-symbols-outlined text-primary text-xl transition-transform duration-300 ease-out group-hover/journey-row:scale-110">
                      {block.icon}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase leading-tight transition-colors duration-300 group-hover/journey-row:text-primary">
                      {block.heading}
                    </h3>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-3 transition-colors duration-300 group-hover/journey-row:text-slate-700">
                      {block.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────── */}
      <section className="py-28 bg-[#0f0505] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #c20000 0, #c20000 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px',
        }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl lg:text-6xl font-black text-white uppercase reveal">Our Core Values</h2>
            <p className="text-slate-500 mt-3 reveal delay-100">The pillars that uphold our promise to the city of Mumbai.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="text-center p-8 border border-white/10 rounded-2xl hover:bg-white/5 hover:border-primary/30 transition-all duration-300 group reveal"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="w-16 h-16 bg-primary/15 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white transition-colors duration-300">{v.icon}</span>
                </div>
                <h4 className="font-display text-2xl font-black text-white uppercase mb-3">{v.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────── */}
      {/* <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4 reveal">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">The People</span>
              <div className="h-[2px] w-10 bg-primary" />
            </div>
            <h2 className="font-display text-5xl font-black text-slate-900 uppercase reveal delay-100">Our Leadership Team</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-square bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-slate-900 text-sm">{member.name}</h4>
                  <p className="text-xs text-primary font-semibold mt-1">{member.title}</p>
                  <div className="flex items-center gap-1.5 mt-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <span className="text-xs text-slate-400">{member.years} experience</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_white_0%,_transparent_70%)]" />
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <h2 className="font-display text-5xl font-black text-white uppercase mb-4 reveal">Ready to work with us?</h2>
          <p className="text-white/80 mb-8 reveal delay-100">Contact our team for a comprehensive fire safety consultation.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-primary hover:bg-slate-100 px-8 py-4 rounded-lg font-black tracking-wide transition-all duration-300 shadow-xl reveal delay-200"
          >
            Get in Touch
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
