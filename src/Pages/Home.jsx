import { Link } from 'react-router-dom'
import Layout from '../Components/Layout'

const profileImage = `${import.meta.env.BASE_URL}images/IMG_6842.jpg`

const proofPoints = ['React / Vite / UX', 'Open voor projecten']

function Home() {
  return (
    <Layout>
      <main className="mx-auto grid min-h-[calc(100vh-140px)] w-full max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[320px_1fr]">
        <div className="home-photo-reveal mx-auto w-fit rounded-[1.4rem] bg-gradient-to-br from-zinc-200 to-zinc-400 p-[6px] shadow-[0_18px_40px_rgba(24,24,27,0.18)] transition-transform duration-300 hover:-translate-y-1">
          <div className="rounded-[1.2rem] bg-zinc-300/75 p-2 backdrop-blur-sm">
            <img
              src={profileImage}
              alt="Ricky"
              className="h-[360px] w-[255px] rounded-[1rem] object-cover"
            />
          </div>
        </div>

        <div className="home-content-reveal text-left">
      
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-zinc-950 md:text-6xl">Ricky Saarloos</h1>

          <h2 className="mt-4 flex flex-wrap items-center gap-3 text-2xl font-medium md:text-3xl">
            <span className="text-zinc-900">software</span>
            <span className="rounded-lg bg-zinc-900 px-4 py-3 text-zinc-100">developer</span>
 
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-700">
            Frontend developer met passie voor design, UX en moderne webtechnologieën.
          </p>
          <h1 className="mt-8 text-5xl font-semibold tracking-tight text-zinc-950 md:text-6xl">Ricky Saarloos</h1>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/discover"
              className="rounded-full border border-zinc-400 bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-200"
            >
              Bekijk projecten
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-zinc-400 bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-200"
            >
              Contact opnemen
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {proofPoints.map((point) => (
              <li
                key={point}
                className="rounded-full border border-zinc-300 bg-white/70 px-3 py-1.5 text-sm font-medium text-zinc-700"
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