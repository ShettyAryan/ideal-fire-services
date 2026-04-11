import Link from 'next/link'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { useScrollReveal } from '../components/useScrollReveal'

export default function Contact() {
  useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description="Request a fire safety quote, site visit, or AMC in Mumbai. Call Ideal Fire Services — hydrants, sprinklers, alarms, extinguishers, and compliance support."
        path="/contact"
        keywords="contact fire safety Mumbai, fire audit quote, fire system installation enquiry, Ideal Fire Services phone"
      />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-qeXdeNp-nq3kwDEiy0szRdUEcDo-0sN0FwfxjD4n836v76ZZGtYFTf6LeME6FseZONaO-jz3WU7PYcYGyfKI6Ku8yV-K7PjtMvlspM0a0MuAuXCsN78HdoN7nImtskr7oi-lTp_ag0LbkyzEqsKQKiBv2wv1j4fI_XzENL0aLPmY2Vp_l5Dxg-d36p6rH9E5hjvzbnv-a-pP3czy0X9_evlulTK8uNScRkIeZNCwBrAztAfRc4SmX-QhxBLJblxibKOHptvcwhY')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/85" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-24">
          <div className="section-label mb-3">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Get in Touch
            </span>
          </div>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-black text-white uppercase leading-none">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ── CONTACT INFO STRIP ─────────────────────────────────── */}
      <section className="bg-[#0f0505] py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "location_on",
                label: "Office",
                value:
                  "204A, B Wing, Sumit Samarth Arcade,Aarey Road, Goregaon West, Mumbai 400104",
              },
              {
                icon: "phone",
                label: "Phone 1",
                value: "+91 9820612528",
                href: "tel:+919820612528",
              },
              {
                icon: "phone",
                label: "Phone 2",
                value: "+91 9619969323",
                href: "tel:+919619969323",
              },
              {
                icon: "mail",
                label: "Email",
                value: "idealfire06@yahoo.com",
                href: "mailto:idealfire06@yahoo.com",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 py-3">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-base">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <div className="text-slate-500 text-xs uppercase font-bold tracking-widest">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white font-semibold text-sm hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-white font-semibold text-sm">
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────── */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* ── FORM ──────────────────────────────────────── */}
            <div className="lg:col-span-7 reveal-left">
              <div className="section-label mb-3">
                <span className="text-primary font-bold uppercase tracking-widest text-sm">
                  Enquire Now
                </span>
              </div>
              <h2 className="font-display text-4xl font-black text-slate-900 uppercase mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-slate-100">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span
                      className="material-symbols-outlined text-green-600 text-4xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-black text-slate-900 uppercase mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500 mb-6">
                    Our team will get back to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-bold hover:underline text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-bg-light focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-bg-light focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-bg-light focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-2">
                        Company / Building
                      </label>
                      <input
                        type="text"
                        placeholder="ABC Corp"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-bg-light focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-2">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-bg-light focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm"
                    >
                      <option value="">Select a service...</option>
                      <option>Fire Hydrant System Installation</option>
                      <option>Automatic Sprinkler System</option>
                      <option>Fire Alarm & Detection</option>
                      <option>Gas Suppression System</option>
                      <option>Annual Maintenance Contract (AMC)</option>
                      <option>Extinguisher Supply & Refilling</option>
                      <option>Fire Safety Audit / Compliance</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your fire safety requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-bg-light focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-glow w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-black tracking-widest uppercase text-sm transition-all duration-300 shadow-lg shadow-primary/30 flex items-center justify-center gap-3"
                  >
                    <span className="material-symbols-outlined">send</span>
                    Submit Request
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    Your data is safe and handled per our privacy policy.
                  </p>
                </form>
              )}
            </div>

            {/* ── SIDEBAR ───────────────────────────────────── */}
            <aside className="lg:col-span-5 space-y-6">
              {/* Working hours */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 reveal"
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      schedule
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-black text-slate-900 uppercase">
                    Working Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      day: "Monday – Saturday",
                      hours: "9:30 AM – 6:00 PM",
                      open: true,
                    },
                    
                    { day: "Sunday", hours: "Emergency Only", open: false },
                  ].map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between py-2.5 border-b border-slate-50 last:border-0"
                    >
                      <span className="text-sm font-semibold text-slate-700">
                        {item.day}
                      </span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${item.open ? "bg-green-400" : "bg-red-400"}`}
                        />
                        <span className="text-sm text-slate-500">
                          {item.hours}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick assistance */}
              <div
                className="bg-[#0f0505] rounded-2xl p-8 relative overflow-hidden reveal"
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="absolute -right-8 -bottom-8 opacity-5">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "160px" }}
                  >
                    verified_user
                  </span>
                </div>
                <h3 className="font-display text-2xl font-black text-white uppercase mb-6 relative z-10">
                  Quick Assistance
                </h3>
                <div className="space-y-5 relative z-10">
                  {[
                    {
                      icon: "description",
                      title: "Fire Safety Audit",
                      desc: "Request a professional audit for your premises.",
                    },
                    {
                      icon: "engineering",
                      title: "Emergency Response",
                      desc: "On-site within time across Mumbai & Thane.",
                    },
                    {
                      icon: "phone_in_talk",
                      title: "Direct Hotline",
                      desc: "+91 9820612528, +91 9619969323 — always staffed.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-base">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 reveal"
                style={{ transitionDelay: "0.3s" }}
              >
                <h3 className="font-display text-2xl font-black text-slate-900 uppercase mb-6">
                  Common Questions
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      q: "How fast is your site visit response?",
                      a: "Our team initiates site visits within 24–48 business hours of the request.",
                    },
                    {
                      q: "Do you provide Form B certificates?",
                      a: "Yes, we provide full Form B compliance certificates required by Mumbai Fire Brigade.",
                    },
                    {
                      q: "Which areas do you cover?",
                      a: "We cover all of Mumbai, Navi Mumbai, and Thane with our trained technician teams.",
                    },
                  ].map((faq, i) => (
                    <details
                      key={i}
                      className="group border-b border-slate-100 pb-4 last:border-0"
                    >
                      <summary className="list-none flex justify-between items-center font-bold text-sm cursor-pointer hover:text-primary transition-colors">
                        {faq.q}
                        <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-3">
                          expand_more
                        </span>
                      </summary>
                      <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>

              {/* Certification badge */}
              <div
                className="flex items-center gap-4 p-5 bg-primary/5 border border-primary/15 rounded-2xl reveal"
                style={{ transitionDelay: "0.4s" }}
              >
                <span
                  className="material-symbols-outlined text-primary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  workspace_premium
                </span>
                <div>
                  <p className="font-black text-slate-900 uppercase tracking-wider text-xs">
                    Certified Agency
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    Government Licensed Fire Safety Agency — Maharashtra
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── MAP ───────────────────────────────────────────────── */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGeikONCAl99AInbcs3us7qhoAGyQ7fkRKLSYWFQRuuHilti6AlhR6HYsUb6-9suiWVBbfiHsYPuL1qewNytw0ZFVvMmD55Lrij-yD1xrO1ovV3darlF3ySZLlCkBIwaV77vPDOSXG2ECmZiXnSjye1B3A5NznfHrF8CjPbztn516uBsj9H-1_3gwn3-J5pzduBK8dMWq6_ix7GMJf6OTXKVLT0izAbZ7P1dtq2rXAhPavSoD6lqX0OF_Qtr4-_jUF5RvIn_COPII')`,
          }}
        />
        <div className="absolute inset-0 bg-slate-900/20" />
        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 flex items-end pb-8">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm border border-slate-100">
            <h4 className="font-black text-primary uppercase tracking-wider text-xs mb-1">
              Visit Our Office
            </h4>
            <p className="font-bold text-slate-900 text-sm mb-2">
              Ideal Fire Services HQ
            </p>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Plot 45, Industrial Estate, Off Link Road,
              <br />
              Goregaon West, Mumbai 400104
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="btn-glow inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-primary text-white w-full py-2.5 rounded-xl font-bold text-xs tracking-widest uppercase transition-all duration-300"
            >
              <span className="material-symbols-outlined text-sm">
                directions
              </span>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
