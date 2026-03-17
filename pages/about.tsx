import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollReveal } from '../components/useScrollReveal'

const milestones = [
  {
    period: '1991 – 2000',
    title: 'The Foundation',
    desc: 'Founded in Mumbai with a team of four dedicated engineers. We initially focused on fire extinguisher maintenance and small-scale residential fire safety audits, quickly building a reputation for meticulous attention to detail and honest service.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe_HwUWEdb3oWeGVIF5W5arSWfQeZfTpg0jD1p3-NHN_YmDb0JllAAsTQOpkPG4zDlu8d-1rLItZvWsnhbwcbEsj78O8OdZ3WGPDdBjFlbBLQyFjrW-E2e3NfkMM0w7H-280r6MY1OHO3-CWKOxJ5kPgPAx1BGIv4fKGgTPyCdMSt-c9umV8Z0a_DsLkB2Dznm9exDnHTlH7YzaKMdUn9UE7c-lu81ot9fbXrYMCG5iXzn1-2mxyzLHLen5xapBOVq3XzFAyVrnXg',
  },
  {
    period: '2001 – 2015',
    title: 'Expanding Horizons',
    desc: 'Expansion into industrial fire suppression systems and major corporate contracts. We moved to our current headquarters and doubled our technical workforce, incorporating advanced CAD design for complex fire sprinkler networks.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcrxeTXDYoBUvpVqgt2PtPu4gpz6emq0OUCRCtUt4Sd8nBNYmj11u33xDsKkqDac6Vy7zJmjwImb3do1K5ICTVvA_zc9J__iQazwe11s2HjxNu2_82HzXF8shanThp9gUQZDjFjhphcjXJ02kUWIhvbOC5BU4IM_ZEBBE8JplI3hOQrY5rX5Y4wIR_Wpj3Mkl_rE714mw1wQcFLsrdBCCe2s7Uj-S4M7yGgB9care8_GL-hdmd2bVn6FrvdaPrS3SZQ1U8snZ605s',
  },
  {
    period: 'Present Day',
    title: 'Modern Leadership',
    desc: 'Today, Ideal Fire Services is a digitally-integrated safety firm. We use real-time monitoring and IoT sensors to ensure the fire safety systems of Mumbai\'s most iconic landmarks are always operational and fully compliant with the latest fire codes.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKbb3JaimJUeMyee1zd0XXybr5lk5_HU3nyeuk0jDF3Y1C2GJVv1FHA_xppqrWrXr7ZcNPTSIBXy1eMgpZ9LRxMXGrFHwvp-qLi45O2Yb9iQ2_8IWPJiNNFRb3XAKXQYw2W3jQHbFVUERcMCoSA3samQExx75ot9mNiKfVhXwPFlHz9I1EUE47uHHWNtyjfYslyxTDrTwMdn3YK1MB2UFtn34daanQNKkWAvVsaga9bO1gTZRaXZa6zCBvJKpISy0DbjbuijghHiw',
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
      <Head>
        <title>About Us | Ideal Fire Services Mumbai</title>
        <meta name="description" content="Learn about Ideal Fire Services — 30+ years of fire safety expertise in Mumbai." />
      </Head>
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
                  Established in 1991 in the heart of Mumbai, Ideal Fire Services began with a singular focus: to provide uncompromising fire safety solutions to a growing metropolis. For over three decades, we have evolved from a local service provider into a comprehensive fire protection partner.
                </p>
                <p>
                  Our journey is defined by a commitment to international safety standards and a deep understanding of local compliance needs. We specialize in designing, installing, and maintaining state-of-the-art fire suppression systems for industrial, commercial, and residential sectors.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 reveal delay-300">
                <div className="border-l-4 border-primary pl-5">
                  <div className="font-display text-4xl font-black text-slate-900">30+</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Years Experience</div>
                </div>
                <div className="border-l-4 border-primary pl-5">
                  <div className="font-display text-4xl font-black text-slate-900">1000+</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Projects Completed</div>
                </div>
              </div>
            </div>

            <div className="relative group reveal-right">
              <div className="absolute -inset-4 bg-primary/8 rounded-2xl group-hover:bg-primary/15 transition-all duration-500" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgaLz89TgFsyX0CxDj8pZ0QlLj9rSgY2n3ltAKZegDKxD3yuPwRtLHwpjH2E7U8_eSvULq7_tOZ2cUbJY7gbIp2hBs86Zx40XT4f2vDTyfj-4Lynz4xXqTHxu1YZcdOgA-XUIMBp5-iVDmXW-ZSdPtLFJfSb9Hmb_ka3_mUhLI8sYOUGeT3idjj64RPuRwCVRTfa5OW_C4sEx7EJ5YneJ7N-CXzhv74WexEkuMAxEnwezVOpA8_08wAZR7IZqL34Qxt7oN9ygbIt4"
                alt="Fire safety equipment"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
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

      {/* ── TIMELINE ──────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-20">
            <div className="section-label justify-center mb-4 reveal">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Journey</span>
              <div className="h-[2px] w-10 bg-primary" />
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-black text-slate-900 uppercase reveal delay-100">
              Our Growth Story
            </h2>
          </div>

          <div className="space-y-28">
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-16 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 reveal-left" style={{ transitionDelay: '0.1s' }}>
                  <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-black mb-4 tracking-wide">
                    {m.period}
                  </span>
                  <h3 className="font-display text-4xl font-black text-slate-900 uppercase mb-4">{m.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{m.desc}</p>
                </div>
                <div className="flex-1 reveal-right">
                  <div className="rounded-2xl overflow-hidden shadow-xl h-72 relative group">
                    <img src={m.img} alt={m.title} className="w-full h-full object-cover card-image group-hover:scale-105 transition-transform duration-600" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  </div>
                </div>
              </div>
            ))}
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
      <section className="py-24 bg-bg-light">
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
      </section>

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
