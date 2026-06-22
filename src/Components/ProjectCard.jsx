import { useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { Badge } from '@/Components/ui/badge'

const EASE = [0.16, 1, 0.3, 1]
const MotionButton = motion.button

function ProjectCard({ project, index = 0 }) {
  const navigate = useNavigate()
  const reduce = useReducedMotion()

  return (
    <MotionButton
      type="button"
      onClick={() => navigate(`/projects/${project.id}`)}
      aria-label={`Open project ${project.name}`}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: EASE }}
      className="group relative flex flex-col overflow-hidden bg-white text-left outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-zinc-900 dark:bg-zinc-950 dark:focus-visible:ring-zinc-100"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={`Voorbeeld van ${project.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
        {/* Tonal scrim, tinted to the surface (not pure black) */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/10 to-transparent" />

        {/* Category - bottom left over image */}
        {project.category && (
          <Badge className="absolute bottom-3 left-3 rounded-none border-0 bg-zinc-950/80 px-2.5 py-1 font-mono text-[10px] font-normal uppercase tracking-[0.12em] text-zinc-200 backdrop-blur-sm">
            {project.category}
          </Badge>
        )}

        {/* Year - top right */}
        {project.year && (
          <span className="absolute right-3 top-3 bg-zinc-950/70 px-2 py-1 font-mono text-[10px] tabular-nums text-zinc-300 backdrop-blur-sm">
            {project.year}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h2 className="mb-3 font-display text-[24px] font-semibold leading-tight tracking-tight text-balance text-zinc-900 dark:text-zinc-100">
          {project.name}
        </h2>

        <p className="mb-5 max-w-[42ch] text-sm font-light leading-7 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        {/* Stack chips */}
        {project.stack && (
          <ul className="mb-6 flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((item) => (
              <li key={item}>
                <Badge
                  variant="outline"
                  className="rounded-none border-zinc-200 bg-transparent px-2.5 py-1 font-mono text-[11px] font-normal text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
                >
                  {item}
                </Badge>
              </li>
            ))}
          </ul>
        )}

        {/* CTA row - pinned to the bottom so cards align across the row */}
        <div className="mt-auto flex items-center justify-between border-t border-zinc-100 pt-5 dark:border-zinc-900">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-900 dark:text-zinc-500 dark:group-hover:text-zinc-200">
            Bekijk details
          </span>
          {/* Button-in-button affordance: sharp icon box, kinetic on hover */}
          <span className="flex size-9 items-center justify-center border border-zinc-200 text-zinc-700 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[1px] group-hover:translate-x-[1px] group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white dark:border-zinc-800 dark:text-zinc-300 dark:group-hover:border-zinc-100 dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-900">
            <ArrowUpRightIcon size={16} weight="bold" />
          </span>
        </div>
      </div>
    </MotionButton>
  )
}

export default ProjectCard
