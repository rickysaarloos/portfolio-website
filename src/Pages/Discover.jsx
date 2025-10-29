import ProjectCard from "../components/projectCard";
import projects from "../components/Projects";
import '../App.css';

function Discover() {
  return (
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
  );
}

export default Discover;