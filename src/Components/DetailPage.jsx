import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import projects from "./Projects";
import "../App.css";

function DetailPage() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

 
  useEffect(() => {
    if (project) {
     
      document.title = `${project.name} | Ricky Saarloos`;

    
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [project]); 

  if (!project) {
    return (
      <div className="detail-page">
        <h2>Project not found</h2>
        <Link to="/Discover">Back</Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Link to="/Discover">Back</Link>
      <h1>{project.name}</h1>
      {project.image && <img src={project.image} alt={project.name} />}
      <p>{project.description}</p>
    </div>
  );
}

export default DetailPage;
