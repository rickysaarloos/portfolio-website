import { Link } from 'react-router-dom'
import Layout from '../Components/Layout'

const imageBase = `${import.meta.env.BASE_URL}images/`

const profileImages = {
  main: `${imageBase}IMG_7049.jpg`,
  side: `${imageBase}IMG_5580.jpg`,
}

const highlights = [
  { label: 'Techniek College Rotterdam', value: 'MBO 4' },
  { label: 'Focus', value: 'Frontend + UX' },
]

const expertise = [
  {
    title: 'Frontend Development',
    description:
      'Ik bouw schaalbare interfaces met aandacht voor performance, herbruikbare componenten en heldere code-architectuur.',
    stack: ['React', 'JavaScript', 'Vite'],
  },
  {
    title: 'UI/UX Design',
    description:
      'Ik vertaal ideeën naar intuïtieve user flows en visuele interfaces die zowel strak ogen als logisch werken.',
    stack: ['Design systems', 'Accessibility', 'UX thinking'],
  },
  {
    title: 'Samenwerking',
    description:
      'Ik werk gestructureerd met feedback, deadlines en duidelijke communicatie om projecten soepel op te leveren.',
    stack: ['Git workflow', 'Iteratief werken', 'Heldere documentatie'],
  },
]

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Electron.js, Vite', 'Tailwind CSS', 'Node.js', 'Figma']

const About = () => {
  return (
    <Layout>
      <div className="mx-auto w-full max-w-6xl space-y-16 px-6 py-14">

        {/* HERO */}
        <section className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              About Me
            </span>

            <h1 className="mt-4 text-4xl font-semibold text-zinc-950 dark:text-zinc-50 md:text-5xl">
              Ricky Saarloos
            </h1>

            <p className="mt-6 text-zinc-700 leading-8 dark:text-zinc-300">
              Ik ben software development student aan het Techniek College Rotterdam
              en specialiseer me in het ontwerpen en bouwen van moderne webinterfaces.
              Mijn doel is digitale producten te maken die snel, toegankelijk en professioneel aanvoelen.
            </p>

            <p className="mt-4 text-zinc-700 leading-8 dark:text-zinc-300">
              Ik combineer technische precisie met visuele kwaliteit: van componentstructuur
              en performance tot typografie, spacing en gebruikservaring.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/discover"
                className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                Bekijk mijn werk
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                Neem contact op
              </Link>
            </div>
          </div>

          {/* Images */}
          <div className="relative mx-auto h-[420px] w-full max-w-sm">
            <div className="absolute left-0 top-0  bg-gradient-to-br from-zinc-200 to-zinc-400 p-[5px] shadow-xl">
              <img
                src={profileImages.main}
                alt="Ricky portrait"
                className="h-64 w-52  object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-0  bg-gradient-to-br from-zinc-300 to-zinc-500 p-[5px] shadow-xl">
              <img
                src={profileImages.side}
                alt="Ricky portrait 2"
                className="h-64 w-52  object-cover"
              />
              <span className="absolute right-3 top-3 rounded bg-black/70 px-2 py-1 text-xs text-white">
                portfolio
              </span>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="text-3xl font-semibold text-zinc-950 dark:text-zinc-100">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        {/* Expertise */}
        <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Waar ik waarde toevoeg
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-800/50"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-700 leading-7 dark:text-zinc-300">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="rounded-3xl bg-zinc-900 p-8 text-white dark:bg-black">
          <h2 className="text-2xl font-semibold">Tech stack</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-zinc-800 px-4 py-1.5 text-sm dark:bg-zinc-700"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </Layout>
  )
}

export default About
