import { useState, useMemo } from 'react'
import Layout from '../Components/Layout'
import ProjectCard from '../Components/ProjectCard'
import projects from '../Components/Projects'

const allFilter = 'Alles'

function Discover() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState(allFilter)

  const filterOptions = useMemo(
    () => [allFilter, ...new Set(projects.map((project) => project.category))],
    []
  )

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesCategory =
        activeFilter === allFilter || project.category === activeFilter

      const matchesSearch =
        query.length === 0 ||
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.stack.some((item) =>
          item.toLowerCase().includes(query)
        )

      return matchesCategory && matchesSearch
    })
  }, [activeFilter, searchTerm])

  return (
    <Layout>
      <main className="mx-auto w-full max-w-6xl px-6 py-14 text-left">

        {/* Intro section */}
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
          <span className="inline-flex items-center rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700">
            Discover
          </span>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
            Check out my work // Bekijk mijn Werk
          </h1>

   

          {/* Search + filters */}
          <div className="mt-7 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              Zoek projecten
              <input
                type="text"
                placeholder="Bijv. React, game, PHP..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-300"
              />
            </label>

            <div className="flex flex-wrap gap-2 md:justify-end">
              {filterOptions.map((option) => {
                const isActive = option === activeFilter

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setActiveFilter(option)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                      isActive
                        ? 'border-zinc-900 bg-zinc-900 text-white'
                        : 'border-zinc-300 bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                    }`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Results info */}
          <div className="mt-6 flex items-center justify-between gap-3 border-t border-zinc-200 pt-5 text-sm text-zinc-600">
            <p>
              <span className="font-semibold text-zinc-900">
                {filteredProjects.length}
              </span>{' '}
              project(en) gevonden
            </p>

            {(searchTerm || activeFilter !== allFilter) && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('')
                  setActiveFilter(allFilter)
                }}
                className="rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1.5 font-medium text-zinc-700 transition hover:bg-zinc-200"
              >
                Reset filters
              </button>
            )}
          </div>
        </section>

        {/* Project grid */}
        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <article className="col-span-full rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center text-zinc-700">
              Geen projecten gevonden met deze filters. Probeer een andere zoekterm.
            </article>
          )}
        </section>

      </main>
    </Layout>
  )
}

export default Discover
