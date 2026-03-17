import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0f0505] text-slate-400 pt-20 pb-8 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  local_fire_department
                </span>
              </div>
              <div>
                <div className="font-display text-xl font-black tracking-wider text-white leading-none uppercase">
                  Ideal Fire
                </div>
                <div className="text-[9px] font-bold tracking-[0.25em] text-primary uppercase">
                  Services Since 1991
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 mb-6 max-w-xs">
              Pioneering fire safety in Mumbai since 1991. Protecting lives and property with technical excellence and professional integrity.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 text-slate-400 hover:text-white">
                <span className="material-symbols-outlined text-sm">language</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 text-slate-400 hover:text-white">
                <span className="material-symbols-outlined text-sm">mail</span>
              </a>
              <a href="tel:+912212345678" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 text-slate-400 hover:text-white">
                <span className="material-symbols-outlined text-sm">phone</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Navigate</h5>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Services</h5>
            <ul className="space-y-3">
              {[
                'Fire Hydrant Systems',
                'Automatic Sprinklers',
                'Smoke Detection',
                'Annual Maintenance (AMC)',
                'Fire Safety Audits',
                'Compliance Certificates',
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Contact</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">location_on</span>
                <span className="text-sm leading-relaxed">Plot 45, Industrial Estate, Off Link Road,<br />Goregaon West, Mumbai 400104</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-base shrink-0">phone</span>
                <a href="tel:+912212345678" className="text-sm hover:text-primary transition-colors">+91 22 1234 5678</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-base shrink-0">mail</span>
                <a href="mailto:info@idealfire.in" className="text-sm hover:text-primary transition-colors">info@idealfire.in</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-base shrink-0">schedule</span>
                <span className="text-sm">Mon–Sat: 9:30 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 uppercase tracking-widest font-medium">
            © 2024 Ideal Fire Services. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-600 uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="w-px h-3 bg-slate-700" />
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="w-px h-3 bg-slate-700" />
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
