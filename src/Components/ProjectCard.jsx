import { useNavigate } from 'react-router-dom'

function ProjectCard({ project }) {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      onClick={() => navigate(`/projects/${project.id}`)}
      aria-label={`Open project ${project.name}`}
      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.name}
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        {project.category && (
          <span className="absolute left-3 top-3 rounded-full bg-black/75 px-2.5 py-1 text-xs font-medium text-white">
            {project.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
            {project.name}
          </h2>

          {project.year && (
            <span className="rounded-full border border-zinc-300 bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">
              {project.year}
            </span>
          )}
        </div>

        <p className="text-sm leading-7 text-zinc-600">
          {project.description}
        </p>

        {project.stack && (
          <ul className="flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((item) => (
              <li
                key={item}
                className="rounded-full border border-zinc-300 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        <p className="text-sm font-semibold text-zinc-800 transition group-hover:text-zinc-950">
          Bekijk details →
        </p>
      </div>
    </button>
  )
}

export default ProjectCard
