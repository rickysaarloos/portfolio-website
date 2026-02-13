import { useState } from 'react'
import ProjectCard from '../Components/ProjectCard'
import projects from '../Components/Projects'
import Layout from '../Components/Layout'

function Discover() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Layout>
      <div className="mx-auto min-h-[calc(100vh-140px)] w-full max-w-6xl px-6 py-14">
        <h2 className="mb-5 text-3xl font-semibold text-zinc-900">Check out my work</h2>
        <input
          type="text"
          placeholder="Zoek een project..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-8 w-full max-w-md rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-800 shadow-sm"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
          ) : (
            <p className="text-zinc-600">Geen projecten gevonden.</p>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Discover
