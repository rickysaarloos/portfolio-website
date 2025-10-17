import { Link, useParams } from "react-router-dom";
import projects from "./Projects";

function DetailPage() {
    const { id } = useParams();
    const project = projects.find((proj) => proj.id === parseInt(id));
    
    if (!project) {
            return <div>Project not found
        <Link to="/projects">Back</Link>
        </div>;
    };


    return (
        <div className="detail-page">

            <Link to="/">Back</Link>
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <p>{project.description}</p>
        </div>
    );
}

export default DetailPage;