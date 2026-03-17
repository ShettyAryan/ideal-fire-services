import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { projects } from '../../lib/projectsData'

export default function ProjectDetail() {
  const router = useRouter()
  const { id } = router.query

  const project = useMemo(() => {
    const rawId = Array.isArray(id) ? id[0] : id
    if (!rawId) return undefined
    const numericId = Number(rawId)
    if (Number.isNaN(numericId)) return undefined
    return projects.find((p) => p.id === numericId)
  }, [id])

  const images = useMemo(
    () =>
      project?.gallery && project.gallery.length > 0
        ? project.gallery
        : project
        ? [project.img]
        : [],
    [project]
  )
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!images.length) return
    setCurrentIndex(0)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images])

  if (!router.isReady) {
    return (
      <>
        <Navbar />
        <main className="min-h-[60vh] flex items-center justify-center bg-bg-light px-5">
          <p className="text-slate-500">Loading project…</p>
        </main>
        <Footer />
      </>
    )
  }

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-[60vh] flex items-center justify-center bg-bg-light px-5">
          <div className="text-center">
            <p className="text-slate-500 mb-4">Project not found.</p>
            <Link href="/projects" className="text-primary font-bold">
              Back to all projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{project.title} | Ideal Fire Services Mumbai</title>
        <meta name="description" content={`Fire safety project for ${project.client} by Ideal Fire Services in ${project.location}.`} />
      </Head>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end pb-16 bg-[#0f0505] overflow-hidden">
        <div className="absolute inset-0">
          {images.map((src, index) => (
            <div
              key={src + index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? 'opacity-70' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url('${src}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#0f0505]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full">
          <div className="mb-6 flex flex-wrap gap-3 items-center text-xs font-bold uppercase tracking-[0.25em] text-slate-300 pt-32">
            <span className="px-3 py-1 rounded-full bg-primary/80 text-white flex items-center gap-1">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                apartment
              </span>
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/20 text-slate-200">
              {project.location}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-slate-200 text-sm sm:text-base mb-6 max-w-xl">
            In collaboration with <span className="font-semibold">{project.client}</span>, Ideal Fire Services delivered a
            comprehensive fire safety solution tailored to the unique requirements of this site.
          </p>

          <div className="flex flex-wrap gap-6 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base">calendar_today</span>
              <span>
                Completed in <strong>{project.year}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base">schedule</span>
              <span>
                Duration: <strong>{project.duration}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base">payments</span>
              <span>
                Project Value: <strong>{project.value}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="bg-bg-light py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 uppercase mb-4">
              Project Highlights
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-slate-600 list-disc list-inside">
              {project.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
              <li>
                End-to-end compliance with Maharashtra Fire Department and NBC 2016 guidelines for {project.category.toLowerCase()} facilities.
              </li>
              <li>
                Coordinated execution with <span className="font-semibold">{project.client}</span> to minimise disruption during installation.
              </li>
            </ul>
          </div>

          <aside className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h3 className="font-display text-lg font-black text-slate-900 uppercase mb-3">Project Snapshot</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex justify-between">
                <span className="font-semibold">Client</span>
                <span className="text-right">{project.client}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Location</span>
                <span className="text-right">{project.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Category</span>
                <span className="text-right">{project.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Year</span>
                <span className="text-right">{project.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Duration</span>
                <span className="text-right">{project.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Project Value</span>
                <span className="text-right">{project.value}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-xs text-slate-500 mb-3">
                Looking for a similar solution for your property?
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-colors"
                >
                  Discuss Your Project
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 text-primary text-xs font-bold"
                >
                  Back to Projects
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* GALLERY */}
      {images.length > 0 && (
        <section className="bg-white py-16 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 uppercase">
                  Project Gallery
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  A closer look at the installation and site environment.
                </p>
              </div>
              {images.length > 1 && (
                <div className="hidden sm:flex items-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
                    }
                    className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary/40 hover:text-primary transition-colors"
                    aria-label="Previous image"
                  >
                    <span className="material-symbols-outlined text-base">chevron_left</span>
                  </button>
                  <button
                    onClick={() =>
                      setCurrentIndex((prev) => (prev + 1) % images.length)
                    }
                    className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary/40 hover:text-primary transition-colors"
                    aria-label="Next image"
                  >
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                  </button>
                </div>
              )}
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <img
                src={images[currentIndex]}
                alt={`${project.title} gallery image ${currentIndex + 1}`}
                className="w-full h-[320px] sm:h-[420px] object-cover"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      index === currentIndex ? 'bg-primary' : 'bg-white/60'
                    } border border-white/70`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}

