import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollReveal } from '../components/useScrollReveal'

const clients = [
  'HDFC BANK', 'RELIANCE INDUSTRIES', 'LODHA GROUP', 'GODREJ PROPERTIES',
  'TATA POWER', 'MUMBAI PORT TRUST', 'L&T REALTY', 'MAHINDRA LIFESPACES',
  'HDFC BANK', 'RELIANCE INDUSTRIES', 'LODHA GROUP', 'GODREJ PROPERTIES',
  'TATA POWER', 'MUMBAI PORT TRUST', 'L&T REALTY', 'MAHINDRA LIFESPACES',
]

const services = [
  {
    icon: 'construction',
    title: 'System Installation',
    desc: 'End-to-end installation of fire detection and protection systems for residential, commercial, and industrial sites.',
    tag: 'INSTALLATION',
  },
  {
    icon: 'fire_extinguisher',
    title: 'Extinguisher Supply',
    desc: 'ISI marked supply, maintenance, and refilling services to keep your equipment audit-ready.',
    tag: 'EQUIPMENT',
  },
  {
    icon: 'notifications_active',
    title: 'Alarm & Detection',
    desc: 'Advanced addressable smoke detection and warning systems tailored for your building architecture.',
    tag: 'DETECTION',
  },
  {
    icon: 'engineering',
    title: 'Annual Maintenance',
    desc: 'Comprehensive AMC and servicing to maintain full fire department compliance year-round.',
    tag: 'AMC',
  },
]

// Product images for "Products We Work With" marquee
// Add your product images to the /public/images folder and list them here (exclude the logo).
const productImages: string[] = [
  '/images/product1.jpg',
  '/images/product2.jpg',
  '/images/product3.jpg',
  '/images/product4.jpg',
  '/images/product5.png',
  '/images/product6.png',
  '/images/product7.jpg',
  '/images/product8.jpg',
  '/images/product9.jpeg',
]

const stats = [
  { value: 34, suffix: '+', label: 'Years of Experience' },
  { value: 200, suffix: '+', label: 'Projects Completed' },
  { value: 4, suffix: '+', label: 'Services Available' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
]

const whyUs = [
  { icon: 'verified', title: 'Govt. Certified', desc: 'Licensed by Maharashtra Fire Department.' },
  { icon: 'gavel', title: 'Compliance Ready', desc: 'Adherence to all national building codes.' },
  { icon: 'support_agent', title: 'Fast Response', desc: ' Available for emergency on-site' },
  { icon: 'workspace_premium', title: 'ISI & UL Hardware', desc: 'Only certified grade A materials.' },
  { icon: 'groups', title: 'Skilled Technicians', desc: 'Best team to deliver the best results.' },
  { icon: 'currency_rupee', title: 'Competitive Rates', desc: 'Best value without compromise.' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const start = performance.now()
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="stat-number">
      {count}{suffix}
    </div>
  )
}

export default function Home() {
  useScrollReveal()
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <Head>
        <title>
          Ideal Fire Services | Mumbai's Trusted Fire Safety Experts Since 1991
        </title>
        <meta
          name="description"
          content="Ideal Fire Services — Mumbai's premier fire safety company. Installation, AMC, detection systems, and compliance."
        />
      </Head>

      <div ref={cursorRef} className="cursor-glow hidden lg:block" />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0202]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBA-iT24GVHhhI0o21QoM8Hq6fbXQ4a8o5k13KZiQB5NPjoIlE94Zs8llXUu0x9y1c6oyeOgrZ2KbNe2aTPyDgUra41o5a9lCZ0svtwOvCQLdIxWkzLD8zeUlVD6L_d-mF180PitJoGAAmDSArSw7vlBZx_EZkvlYRO-vav80RFRQO0rnRz5keHaVRm52VP_hY14IKTEMCD7xsE3Q3y2pe6O6ODhKZCygU-MtxG-KcPf1BETktFC4NqdTvs2ZfeRRvxiUfnxRB7li8')`,
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0202]/95 via-[#0a0202]/70 to-[#0a0202]/50" />
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-light to-transparent" /> */}

        {/* Red accent glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-20">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
              style={{ animation: "fadeUp 0.7s 0.2s ease both" }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase">
                Mumbai's Trusted Safety Partners Since 1991
              </span>
            </div>

            <h1
              className="font-display text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-6 uppercase"
              style={{ animation: "fadeUp 0.8s 0.35s ease both" }}
            >
              Your Go to Fire
              <br />
              <span className="text-clip-primary italic">Fighting &</span>
              <br />
              Safety Services
            </h1>

            <p
              className="text-lg text-slate-300 max-w-xl leading-relaxed mb-10"
              style={{ animation: "fadeUp 0.8s 0.5s ease both" }}
            >
              Protecting Mumbai's skyline for over 30 years. Expert fire
              prevention, detection, and emergency response systems for every
              sector.
            </p>

            <div
              className="flex flex-col sm:flex-row items-start gap-4"
              style={{ animation: "fadeUp 0.8s 0.65s ease both" }}
            >
              <Link
                href="/contact"
                className="btn-glow inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold tracking-wide transition-all duration-300 shadow-xl shadow-primary/30"
              >
                <span className="material-symbols-outlined">
                  emergency_share
                </span>
                Get a Free Quote
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 border-2 border-white/30 text-white hover:border-white hover:bg-white/5 px-8 py-4 rounded-lg font-bold tracking-wide transition-all duration-300"
              >
                <span className="material-symbols-outlined">folder_open</span>
                View Our Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-4 bg-white animate-bounce" style={{ animation: 'float 1.5s ease-in-out infinite' }} />
          </div>
        </div> */}
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-slate-100">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center lg:px-8 reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNAPSHOT ────────────────────────────────────── */}
      <section className="py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="section-label mb-4 reveal-left">
                <span className="text-primary font-bold uppercase tracking-widest text-sm">
                  Established 1991
                </span>
              </div>
              <h2 className="font-display text-5xl lg:text-6xl font-black text-slate-900 uppercase leading-tight mb-6 reveal-left delay-100">
                About Ideal
                <br />
                Fire Services
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 reveal delay-200">
                Based in the heart of Mumbai, Ideal Fire Services has been a
                pioneer in comprehensive fire safety solutions for over three
                decades. We specialize in designing, installing, and maintaining
                world-class fire fighting systems that strictly comply with
                local and international standards.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic text-slate-600 mb-5 reveal delay-300">
                "Our mission is simple: To provide uncompromising fire safety
                through technical excellence and professional integrity."
              </blockquote>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/40 text-[0.7rem] font-black tracking-[0.3em] uppercase text-primary mb-8 reveal-left delay-350">
                <span
                  className="material-symbols-outlined text-[0.9rem]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <span>LICENSE NO - MFS/LA/RF-124/RD 127</span>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all duration-300 group reveal delay-400"
              >
                Learn About Our Journey
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative reveal-right">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFDZBmJmSCiMmIwEuWRQe5Z-nif9yRNRyEP2_eAogE9LiIPQgOkihlK5oprJ_d7vwxcoswz505_Nx8QDn6GO5k_v4pJkq1NSq6gJH8Y7PoMNlJH5pLt3sohgvpjRVNBIKr0hh003Qe7IAMK0JnvHBletb_spExE6AoGsT6fELVOn_ecGz49aDLbRHW_2PDZMPulQs3lM3A7ZFRbGrFM-RXV7WZjS80p3UEXm38UyOq9Xl0oPC-JQE6oPC70NV2WmRomvg91pZWBa8"
                  alt="Fire safety systems"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#0f0505] p-6 rounded-2xl shadow-2xl hidden sm:flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-white"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    Approved Safety
                  </div>
                  <div className="text-slate-400 text-xs">Fire Consultants</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4 reveal">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">
                Our Core Expertise
              </span>
              <div className="h-[2px] w-10 bg-primary" />
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-black text-slate-900 uppercase reveal delay-100">
              Professional Safety Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-bg-light border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-400 cursor-pointer reveal flex flex-col h-full"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 px-2 py-1 rounded text-xs font-black  text-primary mb-5 self-start">
                  {s.tag}
                </div>
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-white text-2xl">
                    {s.icon}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-black text-slate-900 uppercase mb-3">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
                <Link
                  href="/services"
                  className="mt-auto inline-flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest group-hover:gap-3 transition-all duration-300"
                >
                  Learn More{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link
              href="/services"
              className="btn-glow inline-flex items-center gap-3 bg-slate-900 hover:bg-primary text-white px-8 py-4 rounded-lg font-bold tracking-wide transition-all duration-300"
            >
              View All Services
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS WE WORK WITH ─────────────────────────────── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <div className="section-label justify-center mb-4 reveal">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">
                Products We Work With
              </span>
              <div className="h-[2px] w-10 bg-primary" />
            </div>
            <p className="text-slate-500 text-sm max-w-xl mx-auto reveal delay-100">
              Certified, trusted fire safety products and hardware we integrate into our projects.
            </p>
          </div>

          {productImages.length > 0 && (
            <div className="overflow-hidden">
              <div className="marquee-track items-center gap-10">
                {productImages.map((src, i) => (
                  <div
                    key={src + i}
                    className="shrink-0 flex items-center justify-center"
                  >
                    <img
                      src={src}
                      alt="Fire safety product"
                      className="h-32 sm:h-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
                {/* duplicate for seamless loop */}
                {productImages.map((src, i) => (
                  <div
                    key={src + 'dup' + i}
                    className="shrink-0 flex items-center justify-center"
                  >
                    <img
                      src={src}
                      alt="Fire safety product"
                      className="h-32 sm:h-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="py-28 bg-[#0f0505] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c20000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="section-label mb-4 reveal-left">
                <span className="text-primary font-bold uppercase tracking-widest text-sm">
                  Why Choose Us
                </span>
              </div>
              <h2 className="font-display text-5xl lg:text-6xl font-black text-white uppercase leading-tight mb-6 reveal-left delay-100">
                Why Ideal
                <br />
                Fire Services?
              </h2>
              <p className="text-slate-400 text-lg mb-10 reveal-left delay-200">
                We don't just install equipment; we build a shield of safety
                around your property using industry-leading practices.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyUs.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 reveal"
                    style={{ transitionDelay: `${i * 0.08}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-base">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <span
                    className="material-symbols-outlined text-white text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    shield
                  </span>
                </div>
                <h3 className="font-display text-4xl font-black text-white uppercase mb-4">
                  Protecting Your
                  <br />
                  Legacy Since 1991
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  We understand the critical nature of fire safety. Our legacy
                  is built on the trust of hundreds of clients across Mumbai —
                  from residential complexes to iconic industrial landmarks.
                </p>
                <div className="bg-white/8 backdrop-blur-md p-5 rounded-2xl border border-white/15">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center font-black text-white font-display text-sm">
                      IFS
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">
                        Certified Fire Safety Agency
                      </div>
                      <div className="text-slate-400 text-xs tracking-widest uppercase mt-0.5">
                        Maharashtra Fire Department Licensed
                      </div>
                    </div>
                  </div>
                  {/* <div className="grid grid-cols-3 gap-3">
                    {["Maharashtre Fire Department Approved"].map((cert) => (
                      <div
                        key={cert}
                        className="text-center py-2 rounded-lg bg-white/5 border border-white/10"
                      >
                        <div className="text-white text-xs font-black">
                          {cert}
                        </div>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT MARQUEE ────────────────────────────────────── */}
      <section className="py-10 bg-bg-light border-y border-slate-200 overflow-hidden">
        <div className="marquee-track">
          {clients.map((c, i) => (
            <span
              key={i}
              className="shrink-0 px-10 font-display text-2xl font-black tracking-tighter text-slate-300 uppercase"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_white_0%,_transparent_70%)]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBA-iT24GVHhhI0o21QoM8Hq6fbXQ4a8o5k13KZiQB5NPjoIlE94Zs8llXUu0x9y1c6oyeOgrZ2KbNe2aTPyDgUra41o5a9lCZ0svtwOvCQLdIxWkzLD8zeUlVD6L_d-mF180PitJoGAAmDSArSw7vlBZx_EZkvlYRO-vav80RFRQO0rnRz5keHaVRm52VP_hY14IKTEMCD7xsE3Q3y2pe6O6ODhKZCygU-MtxG-KcPf1BETktFC4NqdTvs2ZfeRRvxiUfnxRB7li8')] bg-cover bg-center opacity-10" />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <h2 className="font-display text-5xl lg:text-7xl font-black text-white uppercase leading-tight mb-6 reveal">
            Need Immediate Fire Safety Assistance?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 reveal delay-100">
            Contact our expert consultants for a comprehensive fire safety audit
            of your premises.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal delay-200">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white text-primary hover:bg-slate-100 hover:scale-105 px-10 py-4 rounded-lg font-black tracking-wide transition-all duration-300 shadow-xl"
            >
              Request Consultation
            </Link>
            <a
              href="tel:+919619969323"
              className="w-full sm:w-auto bg-[#0f0505] text-white hover:scale-105 hover:bg-slate-900 px-10 py-4 rounded-lg font-black tracking-wide transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">phone</span>
              Call: +91 9619969323
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
