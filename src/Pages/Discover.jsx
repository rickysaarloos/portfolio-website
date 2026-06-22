import { useState, useMemo } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { MagnifyingGlassIcon, XIcon } from '@phosphor-icons/react'
import Layout from '../Components/Layout'
import ProjectCard from '../Components/ProjectCard'
import projects from '../Components/Projects'
import { Input } from '@/Components/ui/input'
import { Button } from '@/Components/ui/button'

const allFilter = 'Alles'
const EASE = [0.16, 1, 0.3, 1]
const MotionDiv = motion.div
const MotionSpan = motion.span

function Discover() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState(allFilter)
  const reduce = useReducedMotion()

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

  const hasActiveFilters = searchTerm || activeFilter !== allFilter
  const indicatorTransition = reduce
    ? { duration: 0 }
    : { type: 'spring', stiffness: 400, damping: 35 }

  return (
    <Layout>
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-zinc-400/5 blur-[120px] dark:bg-white/[0.04]" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <main className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">

        {/* Header */}
        <MotionDiv
          className="mb-16"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-zinc-900 dark:bg-zinc-100" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Discover
            </span>
          </div>

          <h1
            className="mb-2 font-display font-semibold leading-[0.92] tracking-tight text-balance text-zinc-950 dark:text-zinc-50"
            style={{ fontSize: 'clamp(38px, 5vw, 68px)' }}
          >
            Check out my work // zie mijn werk
          </h1>
        </MotionDiv>

        {/* Search + filters row */}
        <MotionDiv
          className="flex flex-col gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800 md:flex-row md:items-end md:justify-between"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
        >
          {/* Search */}
          <div className="flex flex-col gap-2 md:w-72">
            <label
              htmlFor="project-search"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500"
            >
              Zoek projecten
            </label>
            <div className="relative">
              <MagnifyingGlassIcon
                size={15}
                weight="bold"
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-600"
              />
              <Input
                id="project-search"
                type="text"
                placeholder="Bijv. React, game, PHP..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-11 rounded-none border-zinc-200 bg-transparent pl-9 font-mono text-xs text-zinc-900 shadow-none transition-colors placeholder:text-zinc-400 focus-visible:border-zinc-500 focus-visible:ring-0 dark:border-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus-visible:border-zinc-500"
              />
            </div>
          </div>

          {/* Filter chips with a sliding active indicator */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => {
              const isActive = option === activeFilter
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(option)}
                  className="relative border border-zinc-200 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-zinc-900 dark:border-zinc-800 dark:focus-visible:ring-zinc-100 data-[active=false]:text-zinc-600 data-[active=false]:hover:border-zinc-500 data-[active=false]:hover:text-zinc-900 dark:data-[active=false]:text-zinc-500 dark:data-[active=false]:hover:border-zinc-500 dark:data-[active=false]:hover:text-zinc-200"
                  data-active={isActive}
                >
                  {isActive && (
                    <MotionSpan
                      layoutId="filter-active"
                      transition={indicatorTransition}
                      className="absolute inset-0 -z-10 bg-zinc-900 dark:bg-zinc-100"
                    />
                  )}
                  <span
                    className={
                      isActive
                        ? 'relative text-zinc-100 dark:text-zinc-900'
                        : 'relative'
                    }
                  >
                    {option}
                  </span>
                </button>
              )
            })}
          </div>
        </MotionDiv>

        {/* Results count + reset */}
        <MotionDiv
          className="mb-12 mt-4 flex items-center justify-between"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-500">
            <span className="tabular-nums text-zinc-900 dark:text-zinc-100">
              {filteredProjects.length}
            </span>{' '}
            project(en) gevonden
          </p>
          {hasActiveFilters && (
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setSearchTerm('')
                setActiveFilter(allFilter)
              }}
              className="h-auto gap-1.5 rounded-none border-zinc-200 bg-transparent px-3 py-1.5 font-mono text-[11px] font-normal uppercase tracking-[0.1em] text-zinc-500 shadow-none hover:border-zinc-500 hover:bg-transparent hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-500 dark:hover:border-zinc-500 dark:hover:text-zinc-200"
            >
              Reset filters
              <XIcon size={12} weight="bold" />
            </Button>
          )}
        </MotionDiv>

        {/* Project grid */}
        <section className="grid grid-cols-1 gap-px border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))
          ) : (
            <article className="col-span-full flex flex-col items-center gap-4 bg-white px-8 py-20 text-center dark:bg-zinc-950">
              <span className="flex size-12 items-center justify-center border border-zinc-200 text-zinc-400 dark:border-zinc-800 dark:text-zinc-600">
                <MagnifyingGlassIcon size={20} weight="light" />
              </span>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500">
                Geen projecten gevonden met deze filters.
              </p>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setSearchTerm('')
                  setActiveFilter(allFilter)
                }}
                className="mt-1 h-auto rounded-none border-zinc-300 bg-transparent px-4 py-2 font-mono text-[11px] font-normal uppercase tracking-[0.1em] text-zinc-700 shadow-none hover:border-zinc-900 hover:bg-transparent hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-100 dark:hover:text-zinc-100"
              >
                Toon alle projecten
              </Button>
            </article>
          )}
        </section>

      </main>
    </Layout>
  )
}

export default Discover
