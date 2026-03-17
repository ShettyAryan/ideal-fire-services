import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [router.pathname])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-lg shadow-slate-900/5 border-b border-slate-100"
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow duration-300">
                <span
                  className="material-symbols-outlined text-white text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  local_fire_department
                </span>
              </div> */}
              <img
                src="https://res.cloudinary.com/dsvgadc5d/image/upload/v1773683566/Ideal_Fire_Services_grhcsp.png"
                alt="Ideal Fire Services"
                className="w-10 h-10"
              />
              <div>
                <div className={`font-display text-xl font-black tracking-wider text-slate-900 leading-none uppercase`}>
                  Ideal Fire Services
                </div>
                <div className="text-[9px] font-bold tracking-[0.25em] text-primary uppercase">
                  Since 1991
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    router.pathname === link.href
                      ? "text-primary active"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex btn-glow items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 shadow-lg shadow-primary/25"
              >
                <span className="material-symbols-outlined text-sm">
                  emergency_share
                </span>
                Get a Quote
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-0.5 bg-slate-900 transition-all duration-300 ${
                    mobileOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                  }`}
                />
                <span
                  className={`block h-0.5 bg-slate-900 transition-all duration-300 ${
                    mobileOpen ? "opacity-0 w-0" : "w-4"
                  }`}
                />
                <span
                  className={`block h-0.5 bg-slate-900 transition-all duration-300 ${
                    mobileOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"
                  }`}
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`mobile-menu absolute right-0 top-0 bottom-0 w-72 max-w-[80%] bg-white shadow-2xl flex flex-col ${
            mobileOpen ? "open" : ""
          }`}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-slate-100">
            <span className="font-display text-lg font-black text-slate-900 uppercase tracking-wider">
              Menu
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-2 flex-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 ${
                  router.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {link.label}
                <span className="material-symbols-outlined text-lg opacity-40">
                  arrow_forward
                </span>
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-8">
            <Link
              href="/contact"
              className="btn-glow flex items-center justify-center gap-2 w-full bg-primary text-white py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-primary/25"
            >
              <span className="material-symbols-outlined text-sm">
                emergency_share
              </span>
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
