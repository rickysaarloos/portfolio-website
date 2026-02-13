import Layout from '../Components/Layout'

function Home() {
  return (
    <Layout>
      <main className="mx-auto grid min-h-[calc(100vh-140px)] w-full max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[280px_1fr]">
        <div className="mx-auto w-fit rounded-2xl bg-zinc-300 p-2 shadow-xl">
          <img src="./images/IMG_6842.jpg" alt="Ricky" className="h-[340px] w-[240px] rounded-xl object-cover" />
        </div>

        <div className="text-left">
          <h2 className="mb-5 flex flex-wrap items-center gap-3 text-4xl font-medium md:text-5xl">
            <span className="text-zinc-900">software</span>
            <span className="rounded-lg bg-zinc-900 px-4 py-3 text-zinc-100">developer</span>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-zinc-700">
            Frontend developer met passie voor design, UX en moderne webtechnologieën.
          </p>
          <h1 className="mt-8 text-5xl font-semibold tracking-tight text-zinc-950 md:text-6xl">Ricky Saarloos</h1>
        </div>
      </main>
    </Layout>
  )
}

export default Home
