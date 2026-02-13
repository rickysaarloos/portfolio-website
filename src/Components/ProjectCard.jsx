import { useNavigate } from 'react-router-dom'

function ProjectCard({ project }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/projects/${project.id}`)
  }

  return (
    <button
      type="button"
      className="overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      onClick={handleClick}
    >
      <img src={project.image} alt={project.name} className="h-44 w-full object-cover" />
      <div className="space-y-2 p-4">
        <h2 className="text-lg font-semibold text-zinc-900">{project.name}</h2>
        <p className="text-sm text-zinc-600">{project.description}</p>
      </div>
    </button>
  )
}

export default ProjectCard
