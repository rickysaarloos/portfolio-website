import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './Layout'
import projects from './Projects'

function DetailPage() {
  const { id } = useParams()
  const project = projects.find((proj) => proj.id === Number(id))

  useEffect(() => {
    if (!project) return

    document.title = `${project.name} | Ricky Saarloos`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [project])

  if (!project) {
    return (
      <Layout>
        <main className="mx-auto max-w-xl px-6 py-20 text-center">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Project niet gevonden
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Het project bestaat niet of is verplaatst.
          </p>
          <Link
            to="/discover"
            className="mt-6 inline-flex rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Terug naar projecten
          </Link>
        </main>
      </Layout>
    )
  }

  return (
    <Layout>
      <main className="mx-auto w-full max-w-5xl px-6 py-14">

        {/* Back button */}
        <Link
          to="/discover"
          className="inline-flex rounded-full border border-zinc-300 bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
        >
          ← Terug naar projecten
        </Link>

        {/* Hero section */}
        <section className="mt-6 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <img
            src={project.image}
            alt={project.name}
            className="h-64 w-full object-cover md:h-80"
          />

          <div className="space-y-4 p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white dark:bg-zinc-100 dark:text-zinc-900">
                {project.category}
              </span>
              <span className="rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                {project.year}
              </span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              {project.name}
            </h1>

            <p className="max-w-3xl leading-8 text-zinc-700 dark:text-zinc-300">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2">
              {project.stack?.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Detail sections */}
        {project.details && (
          <section className="mt-10 space-y-6">
            {project.details.map((detail, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <img
                  src={detail.image}
                  alt={`${project.name} detail ${index + 1}`}
                  className="h-60 w-full object-cover md:h-72"
                />

                <div className="p-6">
                  {detail.title && (
                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                      {detail.title}
                    </h2>
                  )}
                  <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                    {detail.text}
                  </p>
                </div>
              </article>
            ))}
          </section>
        )}

      </main>
    </Layout>
  )
}

export default DetailPage
