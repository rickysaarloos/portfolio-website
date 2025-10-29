import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <h2>{project.name}</h2>
      <img src={project.image} alt={project.name} />
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;
