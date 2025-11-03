import ProjectCard from "../components/ProjectCard";
import projects from "../components/Projects";
import Layout from "../components/Layout";
import "../App.css";

function Discover() {
  return (
    <Layout>
      <div className="discover-page">
        <h2 className="text-2xl font-bold mb-2">Discover Page</h2>
        <p>Checkout my work</p>
        <p>Bekijk mijn werk</p>

        <div className="card-container">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Discover;
