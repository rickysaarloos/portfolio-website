import Layout from '../Components/Layout'

const profileImage = `${import.meta.env.BASE_URL}images/IMG_6841.jpg`



function Home() {
  return (
    <Layout>
      {/* ── Background atmosphere ── */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Radial glow top-right */}
        <div className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-zinc-400/5 blur-[120px] dark:bg-white/4" />
        {/* Radial glow bottom-left */}
        <div className="absolute -bottom-20 left-1/4 h-[500px] w-[500px] rounded-full bg-zinc-400/5 blur-[100px] dark:bg-white/3" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <main className="relative mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl flex-col items-center justify-center px-6 py-20 lg:flex-row lg:gap-0 lg:px-16">

        {/* ── Photo column ── */}
        <div
          className="relative mb-12 shrink-0 lg:mb-0 lg:mr-20"
          style={{ animation: 'fade-up 0.8s ease 0.1s both' }}
        >
          {/* Decorative corner accents */}
          <div className="absolute -top-3 -left-3 h-8 w-8 border-t-2 border-l-2 border-zinc-900 dark:border-zinc-100" />
          <div className="absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-zinc-900 dark:border-zinc-100" />

          {/* Floating photo with rotation */}
          <div
            className="relative overflow-hidden shadow-2xl shadow-zinc-900/30 dark:shadow-black/50"
            style={{
             
              transform: 'rotate(-1deg)',
            }}
          >
            {/* Glow rim */}
            <div className="absolute inset-0 z-10 ring-1 ring-inset ring-white/10" />
            <img
              src={profileImage}
              alt="Ricky Saarloos"
              className="block h-[400px] w-[280px] object-cover grayscale-[15%] transition-all duration-500 hover:grayscale-0 lg:h-[460px] lg:w-[320px]"
            />
            {/* Subtle color wash overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
          </div>

          {/* Index number — editorial detail */}
          <span
            className="absolute -bottom-8 left-0 font-mono text-xs tracking-[0.2em] text-zinc-400 dark:text-zinc-600"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            01 / PORTRAIT
          </span>
        </div>

        {/* ── Content column ── */}
        <div className="flex flex-col text-left">

          {/* Eyebrow line */}
          <div
            className="mb-6 flex items-center gap-3"
            style={{ animation: 'fade-up 0.7s ease 0.3s both' }}
          >
            <div className="h-px w-8 bg-zinc-900 dark:bg-zinc-100" />
            <span
              className="text-[11px] tracking-[0.18em] text-zinc-500 dark:text-zinc-400 uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Frontend Developer
            </span>
          </div>

          {/* Name — massive editorial headline */}
          <h1
            className="mb-2 leading-[0.9] tracking-tight text-zinc-950 dark:text-zinc-50"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(64px, 8vw, 112px)',
              fontWeight: 600,
              animation: 'fade-up 0.7s ease 0.45s both',
            }}
          >
            Ricky
          </h1>
          <h1
            className="mb-8 leading-[0.9] tracking-tight text-zinc-950 dark:text-zinc-50"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(64px, 8vw, 112px)',
              fontWeight: 300,
              fontStyle: 'italic',
            
              WebkitTextStroke: '1.5px currentColor',
              animation: 'fade-up 0.7s ease 0.55s both',
            }}
          >
            Saarloos
          </h1>

          {/* Bio */}
          <p
            className="mb-10 max-w-md text-base font-light leading-7 text-zinc-600 dark:text-zinc-400"
            style={{ animation: 'fade-up 0.7s ease 0.7s both' }}
          >
            Frontend developer met passie voor{' '}
            <span className="font-medium text-zinc-900 dark:text-zinc-200">design</span>,{' '}
            <span className="font-medium text-zinc-900 dark:text-zinc-200">UX</span> en moderne
            webtechnologieën. Ik bouw snelle, elegante interfaces die mensen onthouden.
          </p>

          {/* Skill chips + status */}
          <div
            className="mb-10 flex flex-wrap items-center gap-2"
            style={{ animation: 'fade-up 0.7s ease 0.85s both' }}
          >
            {['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'UX/UI'].map((skill) => (
              <span
                key={skill}
                className="rounded-sm border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA row */}
          <div
            className="flex flex-wrap items-center gap-4"
            style={{ animation: 'fade-up 0.7s ease 1s both' }}
          >
       
       

            {/* Available badge */}
            <div className="flex items-center gap-2.5">
              <span
                className="relative flex h-2 w-2"
              >
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span
                className="text-xs text-zinc-500 dark:text-zinc-500"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Open voor projecten
              </span>
            </div>
          </div>

        </div>

    

      </main>
    </Layout>
  )
}

export default Home