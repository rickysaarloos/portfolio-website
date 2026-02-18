import { useNavigate } from 'react-router-dom'

function ProjectCard({ project }) {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      onClick={() => navigate(`/projects/${project.id}`)}
      aria-label={`Open project ${project.name}`}
      className="group relative overflow-hidden border border-zinc-200 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-2xl hover:shadow-zinc-900/10 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600 dark:hover:shadow-black/30"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />

        {/* Category badge — bottom left over image */}
        {project.category && (
          <span
            className="absolute bottom-3 left-3 bg-zinc-950/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-zinc-300 backdrop-blur-sm"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {project.category}
          </span>
        )}

        {/* Year — top right */}
        {project.year && (
          <span
            className="absolute right-3 top-3 bg-zinc-950/70 px-2 py-1 text-[10px] text-zinc-400 backdrop-blur-sm"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {project.year}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h2
          className="mb-3 leading-tight tracking-tight text-zinc-900 dark:text-zinc-100"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '22px',
            fontWeight: 600,
          }}
        >
          {project.name}
        </h2>

        <p className="mb-5 text-sm font-light leading-7 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        {/* Stack chips */}
        {project.stack && (
          <ul className="mb-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((item) => (
              <li
                key={item}
                className="border border-zinc-200 px-2.5 py-1 text-[11px] text-zinc-600 dark:border-zinc-800 dark:text-zinc-500"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* CTA row */}
        <div className="flex items-center gap-2">
          <div className="h-px w-4 bg-zinc-300 transition-all duration-300 group-hover:w-6 group-hover:bg-zinc-700 dark:bg-zinc-700 dark:group-hover:bg-zinc-400" />
          <span
            className="text-[11px] uppercase tracking-[0.12em] text-zinc-500 transition-colors duration-200 group-hover:text-zinc-900 dark:text-zinc-500 dark:group-hover:text-zinc-200"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Bekijk details
          </span>
        </div>
      </div>
    </button>
  )
}

export default ProjectCard