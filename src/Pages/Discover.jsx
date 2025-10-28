import projects from "../components/Projects.jsx";
import ProjectCard from "../components/projectCard.jsx";


function Discover() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-6">
      {/* Titel */}
      <h1 className="text-4xl font-light uppercase tracking-wide mb-4">
        Discover
      </h1>

      {/* Subtitel */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-medium mb-1">Check out my work.</h2>
        <p className="text-lg text-gray-600 italic">Bekijk mijn projecten.</p>
      </div>

      {/* Projectsectie */}
      <section className="w-full max-w-6xl">
        <h3 className="text-left text-lg font-semibold mb-6 text-gray-800">
          Mijn Projecten // Projecten waar ik aan heb gewerkt
        </h3>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
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
          ))}
        </div>
      </section>
    </div>
  );
}

export default Discover;

