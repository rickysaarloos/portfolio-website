import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${project.id}`)}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      {/* Afbeelding */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Inhoud */}
      <div className="p-5 flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-gray-800">
          {project.name}
        </h2>
        <p className="text-sm text-gray-600">{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
