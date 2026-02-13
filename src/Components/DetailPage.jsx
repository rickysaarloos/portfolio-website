import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import projects from './Projects'
import Layout from './Layout'

function DetailPage() {
  const { id } = useParams()
  const project = projects.find((proj) => proj.id === parseInt(id, 10))

  useEffect(() => {
    if (project) {
      document.title = `${project.name} | Ricky Saarloos`
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [project])

  if (!project) {
    return (
      <Layout>
        <div className="mx-auto max-w-xl px-6 py-20 text-center">
          <h2 className="text-2xl font-semibold text-zinc-900">Project not found</h2>
          <Link to="/discover" className="mt-4 inline-block rounded bg-zinc-900 px-4 py-2 text-white">
            Terug
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="mx-auto w-full max-w-4xl px-6 py-14 text-left">
        <Link className="mb-5 inline-block rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white" to="/discover">
          terug
        </Link>
        <h1 className="mb-4 text-4xl font-bold text-zinc-900">{project.name}</h1>
        <p className="mb-8 text-zinc-700">{project.description}</p>

        <div className="space-y-6">
          {project.details?.map((detail, index) => (
            <div key={index} className="rounded-2xl bg-white p-5 shadow-md">
              <img src={detail.image} alt={`detail-${index}`} className="mb-4 h-64 w-full rounded-xl object-cover" />
              <p className="text-sm leading-relaxed text-zinc-700">{detail.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default DetailPage
