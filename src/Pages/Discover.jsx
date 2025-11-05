import { useState } from "react";
import ProjectCard from "../components/projectCard";
import projects from "../components/Projects";
import Layout from "../components/Layout";
import "../App.css";

function Discover() {
 
  const [searchTerm, setSearchTerm] = useState("");

  
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="discover-page">
     

       <h2 className="comw">Check out my work:</h2>
        <input
          type="text"
          placeholder="Zoek een project..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />

        <div className="card-container">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p>Geen projecten gevonden.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Discover;
