import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import projects from "./Projects";
import Layout from "../components/Layout";
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
        <Link to="/Discover">Terug</Link>
      </div>
    );
  }

  return (
    <Layout>
    <div className="detail-page">
      <Link className="back-button" to="/Discover">terug</Link>
      <h1>{project.name}</h1>
      <p className="main-description">{project.description}</p>

     
      <div className="details-section">
        {project.details?.map((detail, index) => (
          <div key={index} className="detail-block">
            <img src={detail.image} alt={`detail-${index}`} />
            <p>{detail.text}</p>
          </div>
        ))}
      </div>

      
    </div>
    </Layout>
  );
}

export default DetailPage;
