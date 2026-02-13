import Layout from '../Components/Layout'

const About = () => {
  return (
    <Layout>
      <div className="mx-auto w-full max-w-6xl space-y-16 px-6 py-14 text-left">
        <section className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold text-zinc-900">Ricky Saarloos</h2>
            <p className="text-zinc-700">
              Ik ben Ricky Saarloos, een software development student aan het Techniek College Rotterdam.
              Tijdens mijn opleiding ontwikkel ik kennis en vaardigheden op het gebied van webontwikkeling,
              waarbij ik me richt op zowel de technische als de visuele kant van software.
            </p>
            <p className="text-zinc-700">
              Mijn interesse ligt in het creëren van gebruiksvriendelijke, goed presterende en visueel
              aantrekkelijke websites en applicaties. Ik werk graag aan projecten waarin techniek en design
              samenkomen om een optimale gebruikerservaring te bieden.
            </p>
            <p className="text-zinc-700">
              Binnen mijn studie en persoonlijke projecten besteed ik veel aandacht aan frontend development,
              UX/UI-design en het toepassen van moderne webtechnologieën.
            </p>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-md">
            <img
              src="./images/IMG_7049.jpg"
              alt="Me 1"
              className="absolute left-0 top-0 h-64 w-52 rounded-xl object-cover shadow-2xl"
            />
            <div className="absolute bottom-0 right-0">
              <img src="./images/IMG_5580.jpg" alt="Me 2" className="h-64 w-52 rounded-xl object-cover shadow-2xl" />
              <span className="absolute right-3 top-3 rounded bg-black/60 px-2 py-1 text-xs text-white">me</span>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-8 shadow-lg">
          <h3 className="mb-5 text-center text-2xl font-bold uppercase tracking-wider text-zinc-800">Vaardigheden</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Electron.js'].map((skill) => (
              <span key={skill} className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-zinc-100 shadow">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-6 text-xl font-semibold uppercase tracking-wide text-zinc-800">Hobby / interests</h3>
          <div className="space-y-6">
            <article className="grid items-center gap-4 rounded-xl bg-zinc-900 p-5 text-zinc-100 md:grid-cols-[220px_1fr]">
              <img src="./images/IMG_7372.jpg" alt="Daft Punk" className="h-52 w-full rounded-lg object-cover" />
              <div>
                <h4 className="mb-2 text-lg font-semibold">Muziek</h4>
                <p className="text-sm text-zinc-300">
                  Ik heb een brede interesse in muziek en luister graag naar verschillende stijlen en artiesten.
                </p>
              </div>
            </article>
            <article className="grid items-center gap-4 rounded-xl bg-zinc-900 p-5 text-zinc-100 md:grid-cols-[1fr_220px]">
              <div>
                <h4 className="mb-2 text-lg font-semibold">Fashion</h4>
                <p className="text-sm text-zinc-300">
                  Ik volg met interesse de wereld van fashion, in het bijzonder couture.
                </p>
              </div>
              <img src="./images/IMG_7371.webp" alt="Fashion" className="h-52 w-full rounded-lg object-cover" />
            </article>
            <article className="grid items-center gap-4 rounded-xl bg-zinc-200 p-5 text-zinc-900 md:grid-cols-[220px_1fr]">
              <img src="./images/IMG_7375.jpg" alt="The Thinker" className="h-52 w-full rounded-lg object-cover" />
              <div>
                <h4 className="mb-2 text-lg font-semibold">Philosophy</h4>
                <p className="text-sm text-zinc-700">
                  Filosofie boeit me door de manier waarop het aanzet tot kritisch denken en reflectie.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default About
