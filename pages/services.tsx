import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollReveal } from '../components/useScrollReveal'

const services = [
  {
    tag: 'SYSTEM DESIGN & INSTALLATION',
    icon: 'engineering',
    title: 'Fire Fighting System Installation',
    desc: 'We specialize in high-performance suppression systems engineered for immediate response. From complex industrial hydrants to delicate gas suppression for server rooms.',
    features: [
      { name: 'Hydrant Systems', sub: 'Internal & External networks' },
      { name: 'Automatic Sprinklers', sub: 'Wet/Dry pipe installations' },
      { name: 'Gas Suppression', sub: 'FM200 & CO2 flooding' },
      { name: 'Pump Room Setup', sub: 'Main, Jockey & Diesel pumps' },
    ],
    note: 'All installations are strictly compliant with NBC 2016 and local Mumbai Fire Brigade standards.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0NvNyBl73w9jvt68fgBpmv7uwAqQEhHfNJzFx_zKANopbthzAcOpCV02ib2EJVmiVd9usZS_8V4WO0SVfHFsezz-eLCl2dngwSzznjueun9IEntNNfNCHGTJLrodF_wokvpegRTQ-o42CexWDLjAoD0rx8q-OR6bUZaIu2hEKqm_t74C5ZMazL91mKWfWcyMMMbNkCgenvEvePkFI0BvYIp0YKvy-LXzgAsZb7IDzohq71OGXGVHmDx3ML8hs3CmrzSbf7b55sgc',
  },
  {
    tag: 'EQUIPMENT & MAINTENANCE',
    icon: 'fire_extinguisher',
    title: 'Fire Extinguishers: Full Lifecycle',
    desc: "Comprehensive portable protection. We don't just sell equipment; we manage your entire safety compliance schedule including timely refilling and certification.",
    features: [
      { name: 'ABC Powder & CO2', sub: 'Versatile protection for all fire classes' },
      { name: 'Refilling & Hydro-Testing', sub: 'Mandatory testing for safety & compliance' },
      { name: 'Form B Certification', sub: 'Official documentation for fire audits' },
      { name: 'ISI Marked Products', sub: 'Certified grade A equipment only' },
    ],
    note: 'Complete lifecycle management from supply to refilling, testing, and compliance documentation.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzB28Fogwl4AhhZEQ9B9rZnsn_OicbE7uIR7YB5HR70DvgivtFJw6Ced6E8_1B_z4wTVhZEPJfB13jaENJclQodqVKmtzEOJJDG4HEouajN2slzYZ4CmTsEtD3HGKRmdGYgZlO7zomQbtbM7pXyaEmbM9PBEZ2rcJeOUv0bFmG9HLm5N1Cl879e6CU6SUZzq9U2n75R9q3tfWRKenbrkPEmO0qQmN1jCRMVTziyHARhr6BKoTS2-4EmVj1GXkjlmCiQod_wUz8hBU',
    reversed: true,
  },
  {
    tag: 'DETECTION SYSTEMS',
    icon: 'notifications_active',
    title: 'Fire Alarm & Detection Systems',
    desc: 'Early detection is the key to preventing catastrophe. Our addressable and conventional alarm systems provide pinpoint accuracy during emergencies.',
    features: [
      { name: 'Photoelectric Detectors', sub: 'Smoke, heat & multi-sensor' },
      { name: 'Addressable Panels', sub: 'Touch-screen with remote monitoring' },
      { name: 'Voice Evacuation', sub: 'Integrated PA and alarm systems' },
      { name: 'IoT Integration', sub: 'Real-time smartphone alerts' },
    ],
    note: 'Real-time smartphone alerts and central station monitoring for 24/7 protection.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjP-0GI_WDRXuVk6_2fndRckpcHJOD2-LTcaxhxSG9UvOI2DQFWhYbu9l53CMy0mYtfoWbTY0D6k1prhMQtf28KiZ9eaakTFO5lBHbncVLdza8O9MJ6sqHeXxpURal8NRTkvJS2AutkFP2DEPQkHk5UiGMtGRlOgzLe7vlUkFngX96NI1D92mJd1DRuOhPzIq43giS_mC4McfrrjeMNII25bAY7dOE6Y6DAFPtL-wzuCx2hZyuaDtZB4vF4xRS84I1FlKAjpIimFk',
  },
]

const amcFeatures = [
  { icon: 'construction', title: 'Preventive Maintenance', desc: 'Monthly/Quarterly physical inspection and testing of all components.' },
  { icon: 'support_agent', title: '24/7 Priority Support', desc: 'Emergency breakdown response within 4 hours in Mumbai/Thane.' },
  { icon: 'analytics', title: 'Compliance Audits', desc: 'Detailed reports for fire department audits and insurance purposes.' },
  { icon: 'school', title: 'Training & Drills', desc: 'Regular fire drill sessions for your staff and security teams.' },
  { icon: 'history', title: 'Service Records', desc: 'Digital maintenance logs accessible anytime, anywhere.' },
  { icon: 'verified', title: 'Certificate Renewal', desc: 'We handle all NOC and Form B renewals on your behalf.' },
]

export default function Services() {
  useScrollReveal()

  return (
    <>
      <Head>
        <title>Fire Safety Services | Ideal Fire Services Mumbai</title>
        <meta name="description" content="Comprehensive fire safety services in Mumbai — installation, extinguishers, alarms, and AMC." />
      </Head>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[420px] flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3CC7YEvHKQJUPe_L8Te2NZOgUdY8uuYbWrZ8Rhd_8Scl6dFI31aI-wWRHRPAlaSUr32fFmLvQF2wU0UsgC2O9jp0lbqzr75y2TjY3KrhVmPw8Fo7O7OC9iyAM9BPTmPGEQCMiuPgZtndmFYGUkZT8GFeLFjHFB5h3nU-2ej70yhtNNtp7fqSE6rMupQ47JOQoMi2fK6Awr6t1vGTZvL_SSF05dRTQmPxY2LDTZDfxqDzdKPkvOoNeA-qxXA3HR4gNld8WqB8cQ6E')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-36">
          <span className="inline-block bg-primary text-white text-[10px] font-black tracking-[0.25em] px-3 py-1.5 rounded mb-5 uppercase">
            Mumbai's Trusted Partner
          </span>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-black text-white uppercase leading-none mb-5">
            Our Fire Safety<br /><span className="text-primary">Services</span>
          </h1>
          <div className="flex flex-wrap gap-3">
            {['ISO Certified', 'Maharashtra Fire Service Compliant', 'NBC 2016'].map((tag) => (
              <div key={tag} className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                <span className="text-white text-xs font-bold">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 py-24 space-y-32">
        {services.map((service, i) => (
          <section
            key={i}
            className={`grid lg:grid-cols-2 gap-16 items-center ${service.reversed ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={`service-border-left ${service.reversed ? 'lg:order-2' : ''} reveal-left`}>
              <div className="flex items-center gap-3 text-primary mb-4">
                <span className="material-symbols-outlined">{service.icon}</span>
                <span className="font-black text-xs tracking-widest uppercase">{service.tag}</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 uppercase leading-tight mb-5">
                {service.title}
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">{service.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {service.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">check_circle</span>
                    <div>
                      <span className="font-bold text-sm block text-slate-900">{f.name}</span>
                      <span className="text-xs text-slate-400">{f.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                <p className="text-sm text-slate-700 italic font-medium">{service.note}</p>
              </div>
            </div>

            <div className={`rounded-2xl overflow-hidden shadow-2xl group ${service.reversed ? 'lg:order-1' : ''} reveal-right`}>
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover card-image"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 card-overlay" />
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* ── AMC SECTION ───────────────────────────────────────── */}
      <section className="bg-[#0f0505] relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #c20000 0, #c20000 1px, transparent 0, transparent 50%)`,
          backgroundSize: '30px 30px',
        }} />
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <span className="material-symbols-outlined text-white" style={{ fontSize: '500px', lineHeight: 1 }}>history</span>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-primary mb-4 reveal-left">
              <span className="material-symbols-outlined">calendar_month</span>
              <span className="font-black text-xs tracking-widest uppercase">Long-term Support</span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl font-black text-white uppercase leading-tight mb-6 reveal-left delay-100">
              Annual Maintenance<br /><span className="text-primary">Contracts (AMC)</span>
            </h2>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed max-w-2xl reveal delay-200">
              A fire system is only as good as its last inspection. Our AMC plans ensure your equipment is always functional and your property remains fully compliant with Mumbai's legal requirements.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {amcFeatures.map((f, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/8 transition-all duration-300 reveal"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-base">{f.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{f.title}</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 reveal delay-200">
              <Link
                href="/contact"
                className="btn-glow inline-flex items-center gap-3 bg-white text-slate-900 hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-black tracking-wide transition-all duration-300"
              >
                Customize Your AMC Plan
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 border border-white/20 text-white hover:border-white px-8 py-4 rounded-xl font-bold tracking-wide transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
