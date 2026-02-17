import Layout from '../Components/Layout'

const profileImage = `${import.meta.env.BASE_URL}images/IMG_6841.jpg`

const proofPoints = ['React / Vite / UX', 'Open voor projecten']

function Home() {
  return (
    <Layout>
      <main className="mx-auto grid min-h-[calc(100vh-140px)] w-full max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[320px_1fr]">
        <div className="home-photo-reveal mx-auto w-fit bg-gradient-to-br from-zinc-200 to-zinc-400 p-[6px] shadow-[0_18px_40px_rgba(24,24,27,0.18)] transition-transform duration-300 hover:-translate-y-1 dark:from-zinc-700 dark:to-zinc-900">
          <div className="bg-zinc-300/75 p-2 backdrop-blur-sm dark:bg-zinc-800/80">
            <img src={profileImage} alt="Ricky" className="h-[360px] w-[255px] object-cover" />
          </div>
        </div>

        <div className="home-content-reveal text-left">
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-6xl">
            Ricky Saarloos
          </h1>

          <h2 className="mt-4 flex flex-wrap items-center gap-3 text-2xl font-medium md:text-3xl">
            <span className="text-zinc-900 dark:text-zinc-200">software</span>
            <span className="rounded-lg bg-zinc-900 px-4 py-3 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900">developer</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-700 dark:text-zinc-300">
            Frontend developer met passie voor design, UX en moderne webtechnologieën.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {proofPoints.map((point) => (
              <li
                key={point}
                className="rounded-full border border-zinc-300 bg-white/70 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default Home
