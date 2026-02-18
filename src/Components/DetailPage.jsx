import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './Layout'
import projects from './Projects'

function DetailPage() {
  const { id } = useParams()
  const project = projects.find((proj) => proj.id === Number(id))

  useEffect(() => {
    if (!project) return
    document.title = `${project.name} | Ricky Saarloos`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [project])

  if (!project) {
    return (
      <Layout>
        <main className="mx-auto max-w-xl px-6 py-20 text-center">
          <h2
            className="text-zinc-900 dark:text-zinc-100"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontWeight: 600 }}
          >
            Project niet gevonden
          </h2>
          <p className="mt-3 text-sm font-light text-zinc-600 dark:text-zinc-400">
            Het project bestaat niet of is verplaatst.
          </p>
          <Link
            to="/discover"
            className="mt-8 inline-flex bg-zinc-950 px-6 py-3 text-sm text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', letterSpacing: '0.06em' }}
          >
            ← TERUG NAAR PROJECTEN
          </Link>
        </main>
      </Layout>
    )
  }

  return (
    <Layout>
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-zinc-400/5 blur-[120px] dark:bg-white/4" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <main className="mx-auto w-full max-w-5xl px-6 py-20">

        {/* Back */}
        <Link
          to="/discover"
          className="mb-10 inline-flex items-center gap-2 border border-zinc-200 px-4 py-2 text-zinc-600 transition-colors hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-500 dark:hover:border-zinc-500 dark:hover:text-zinc-200"
          style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.1em' }}
        >
          ← TERUG NAAR PROJECTEN
        </Link>

        {/* ══════════════════════════════
            HERO IMAGE + TITLE
        ══════════════════════════════ */}
        <section
          className="mb-0 border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
          style={{ animation: 'fade-up 0.7s ease 0.1s both' }}
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="h-72 w-full object-cover md:h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span
                  className="bg-zinc-950/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-zinc-300 backdrop-blur-sm"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {project.category}
                </span>
                <span
                  className="bg-zinc-950/80 px-2.5 py-1 text-[10px] text-zinc-400 backdrop-blur-sm"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {project.year}
                </span>
              </div>
              <h1
                className="leading-tight tracking-tight text-white"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(36px, 5vw, 68px)',
                  fontWeight: 600,
                }}
              >
                {project.name}
              </h1>
            </div>
          </div>

          {/* Stack */}
          {project.stack && (
            <div className="border-t border-zinc-200 px-8 py-5 dark:border-zinc-800">
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="border border-zinc-200 px-3 py-1.5 text-[11px] text-zinc-600 dark:border-zinc-800 dark:text-zinc-500"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* ══════════════════════════════
            PROJECT NARRATIVE — 3-column meta + prose
        ══════════════════════════════ */}
        <section
          className="mb-px border-x border-zinc-200 dark:border-zinc-800"
          style={{ animation: 'fade-up 0.7s ease 0.25s both' }}
        >
          {/* Overview, Role, Challenge, Result — 2x2 grid */}
          {(project.overview || project.role || project.challenge || project.result) && (
            <div className="grid gap-px border-b border-t border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 md:grid-cols-2">

              {project.overview && (
                <div className="bg-white px-8 py-8 dark:bg-zinc-950">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-px w-4 bg-zinc-300 dark:bg-zinc-700" />
                    <span
                      className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-600"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      Overzicht
                    </span>
                  </div>
                  <p className="text-sm font-light leading-7 text-zinc-700 dark:text-zinc-300">
                    {project.overview}
                  </p>
                </div>
              )}

              {project.role && (
                <div className="bg-white px-8 py-8 dark:bg-zinc-950">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-px w-4 bg-zinc-300 dark:bg-zinc-700" />
                    <span
                      className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-600"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      Mijn rol
                    </span>
                  </div>
                  <p className="text-sm font-light leading-7 text-zinc-700 dark:text-zinc-300">
                    {project.role}
                  </p>
                </div>
              )}

              {project.challenge && (
                <div className="bg-white px-8 py-8 dark:bg-zinc-950">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-px w-4 bg-zinc-300 dark:bg-zinc-700" />
                    <span
                      className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-600"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      Uitdaging
                    </span>
                  </div>
                  <p className="text-sm font-light leading-7 text-zinc-700 dark:text-zinc-300">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.result && (
                <div className="bg-zinc-950 px-8 py-8 dark:bg-black">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-px w-4 bg-zinc-700" />
                    <span
                      className="text-[10px] uppercase tracking-[0.15em] text-zinc-500"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      Resultaat
                    </span>
                  </div>
                  <p className="text-sm font-light leading-7 text-zinc-300">
                    {project.result}
                  </p>
                </div>
              )}

            </div>
          )}
        </section>

        {/* ══════════════════════════════
            DETAIL SECTIONS — image + text
        ══════════════════════════════ */}
        {project.details && (
          <section
            className="border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800"
            style={{ animation: 'fade-up 0.7s ease 0.4s both' }}
          >
            {/* Section header */}
            <div className="bg-white px-8 py-6 dark:bg-zinc-950">
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-zinc-900 dark:bg-zinc-100" />
                <span
                  className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Uitgewerkte onderdelen
                </span>
              </div>
            </div>

            <div className="space-y-px">
              {project.details.map((detail, index) => (
                <article key={index} className="bg-white dark:bg-zinc-950">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={detail.image}
                      alt={`${project.name} detail ${index + 1}`}
                      className="h-64 w-full object-cover md:h-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />
                    <span
                      className="absolute bottom-4 left-6 bg-zinc-950/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-zinc-400 backdrop-blur-sm"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {String(index + 1).padStart(2, '0')} / {project.details.length}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="grid gap-8 p-8 md:grid-cols-[200px_1fr]">
                    {/* Left: title */}
                    <div>
                      {detail.title && (
                        <>
                          <div className="mb-3 h-px w-6 bg-zinc-200 dark:bg-zinc-800" />
                          <h2
                            className="text-zinc-900 dark:text-zinc-100"
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: '22px',
                              fontWeight: 600,
                              lineHeight: 1.2,
                            }}
                          >
                            {detail.title}
                          </h2>
                        </>
                      )}
                    </div>
                    {/* Right: description */}
                    <p className="text-sm font-light leading-8 text-zinc-600 dark:text-zinc-400">
                      {detail.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ══════════════════════════════
            FOOTER ROW — GitHub link + back
        ══════════════════════════════ */}
        <div
          className="mt-px flex flex-wrap items-center justify-between gap-4 border border-zinc-200 bg-white px-8 py-6 dark:border-zinc-800 dark:bg-zinc-950"
          style={{ animation: 'fade-up 0.7s ease 0.5s both' }}
        >
          {project.repositoryUrl ? (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-zinc-200 px-5 py-2.5 text-zinc-700 transition-colors hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-zinc-200"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.1em' }}
            >
              {/* GitHub icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              BEKIJK REPOSITORY
            </a>
          ) : (
            <span
              className="text-[11px] uppercase tracking-[0.1em] text-zinc-400 dark:text-zinc-600"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Geen publieke repository
            </span>
          )}

          <Link
            to="/discover"
            className="flex items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-zinc-200"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.1em' }}
          >
            ← TERUG NAAR PROJECTEN
          </Link>
        </div>

      </main>
    </Layout>
  )
}

export default DetailPage