import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  }

    return (
        <div className ="card" onClick={() => navigate(`/projects/${project.id}`)}>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{description}</p>
        </div>
    );
}

export default ProjectCard;