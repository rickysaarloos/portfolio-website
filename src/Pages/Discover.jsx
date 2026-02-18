import { useState, useMemo } from 'react'
import Layout from '../Components/Layout'
import ProjectCard from '../Components/ProjectCard'
import projects from '../Components/Projects'

const allFilter = 'Alles'

function Discover() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState(allFilter)

  const filterOptions = useMemo(() => {
    return [allFilter, ...new Set(projects.map((p) => p.category))]
  }, [])

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    return projects.filter((project) => {
      const matchesCategory = activeFilter === allFilter || project.category === activeFilter
      const matchesSearch =
        query.length === 0 ||
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.stack.some((item) => item.toLowerCase().includes(query))
      return matchesCategory && matchesSearch
    })
  }, [activeFilter, searchTerm])

  return (
    <Layout>
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-zinc-400/5 blur-[120px] dark:bg-white/4" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <main className="mx-auto w-full max-w-6xl px-6 py-20">

        {/* Header */}
        <div className="mb-14" style={{ animation: 'fade-up 0.7s ease 0.2s both' }}>
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-zinc-900 dark:bg-zinc-100" />
            <span
              className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Discover
            </span>
          </div>

          <h1
            className="mb-2 leading-[0.9] tracking-tight text-zinc-950 dark:text-zinc-50"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(38px, 5vw, 68px)',
              fontWeight: 600,
            }}
          >
            Check out my work // zie mijn werk
            
          </h1>


          {/* Search + filters row */}
          <div className="flex flex-col gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800 md:flex-row md:items-end md:justify-between">
            {/* Search */}
            <div className="flex flex-col gap-2 md:w-72">
              <span
                className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Zoek projecten
              </span>
              <input
                type="text"
                placeholder="Bijv. React, game, PHP..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-zinc-200 bg-transparent px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-500 dark:border-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-700 dark:focus:border-zinc-500"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px' }}
              />
            </div>

            {/* Filter chips */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => {
                const isActive = option === activeFilter
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setActiveFilter(option)}
                    className={`border px-4 py-2 text-[11px] uppercase tracking-[0.1em] transition-colors duration-200 ${
                      isActive
                        ? 'border-zinc-900 bg-zinc-900 text-zinc-100 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900'
                        : 'border-zinc-200 bg-transparent text-zinc-600 hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-500 dark:hover:border-zinc-500 dark:hover:text-zinc-200'
                    }`}
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Results count + reset */}
          <div className="mt-4 flex items-center justify-between">
            <p
              className="text-[11px] uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-500"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <span className="text-zinc-900 dark:text-zinc-100">{filteredProjects.length}</span> project(en) gevonden
            </p>
            {(searchTerm || activeFilter !== allFilter) && (
              <button
                type="button"
                onClick={() => { setSearchTerm(''); setActiveFilter(allFilter) }}
                className="border border-zinc-200 px-3 py-1.5 text-[11px] uppercase tracking-[0.1em] text-zinc-500 transition-colors hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-500 dark:hover:border-zinc-500 dark:hover:text-zinc-200"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Reset filters ×
              </button>
            )}
          </div>
        </div>

        {/* Project grid */}
        <section
          className="grid grid-cols-1 gap-px border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 md:grid-cols-2 lg:grid-cols-3"
          style={{ animation: 'fade-up 0.7s ease 0.4s both' }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <article
              className="col-span-full bg-white px-8 py-16 text-center dark:bg-zinc-950"
            >
              <p
                className="text-[11px] uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-600"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Geen projecten gevonden met deze filters.
              </p>
            </article>
          )}
        </section>

      </main>
    </Layout>
  )
}

export default Discover
