import { motion, useReducedMotion } from 'motion/react'
import Layout from '../Components/Layout'
import { Badge } from '@/Components/ui/badge'

const profileImage = `${import.meta.env.BASE_URL}images/IMG_6841.jpg`

const EASE = [0.16, 1, 0.3, 1]
const MotionDiv = motion.div
const MotionH1 = motion.h1
const MotionP = motion.p

const skills = ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'UX/UI']

function Home() {
  const reduce = useReducedMotion()

  // Shared staggered-entry helper - matches the Discover reveal language.
  const rise = (delay, duration = 0.7) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: reduce ? undefined : { opacity: 1, y: 0 },
    transition: { duration, ease: EASE, delay },
  })

  return (
    <Layout>
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-zinc-400/5 blur-[120px] dark:bg-white/[0.04]" />
        <div className="absolute -bottom-20 left-1/4 h-[500px] w-[500px] rounded-full bg-zinc-400/5 blur-[100px] dark:bg-white/[0.03]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <main className="relative mx-auto flex min-h-[calc(100dvh-80px)] w-full max-w-7xl flex-col items-center justify-center px-6 py-20 lg:flex-row lg:gap-0 lg:px-16">

        {/* Photo column */}
        <MotionDiv
          className="relative mb-12 shrink-0 lg:mb-0 lg:mr-20"
          {...rise(0.1, 0.8)}
        >
          {/* Decorative corner accents */}
          <div className="absolute -top-3 -left-3 h-8 w-8 border-t-2 border-l-2 border-zinc-900 dark:border-zinc-100" />
          <div className="absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-zinc-900 dark:border-zinc-100" />

          {/* Floating portrait with a slight editorial tilt */}
          <div className="relative overflow-hidden shadow-2xl shadow-zinc-900/30 rotate-[-0.5deg] dark:shadow-black/50">
            <div className="absolute inset-0 z-10 ring-1 ring-inset ring-white/10" />
            <img
              src={profileImage}
              alt="Ricky Saarloos"
              className="block h-[400px] w-[280px] object-cover grayscale-[15%] transition-all duration-500 hover:grayscale-0 lg:h-[460px] lg:w-[320px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
          </div>

          {/* Index label - editorial detail */}
          <span className="absolute -bottom-8 left-0 font-mono text-xs tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
            01 / PORTRAIT
          </span>
        </MotionDiv>

        {/* Content column */}
        <div className="flex flex-col text-left">

          {/* Eyebrow line */}
          <MotionDiv className="mb-6 flex items-center gap-3" {...rise(0.3)}>
            <div className="h-px w-8 bg-zinc-900 dark:bg-zinc-100" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Frontend Developer
            </span>
          </MotionDiv>

          {/* Name - editorial display headline */}
          <MotionH1
            className="mb-2 font-display font-semibold leading-[0.9] tracking-tight text-zinc-950 dark:text-zinc-50"
            style={{ fontSize: 'clamp(64px, 8vw, 112px)' }}
            {...rise(0.45)}
          >
            Ricky
          </MotionH1>
          <MotionH1
            className="mb-8 font-display font-light italic leading-[1.1] tracking-tight text-zinc-950 [-webkit-text-stroke:1.5px_currentColor] dark:text-zinc-50"
            style={{ fontSize: 'clamp(64px, 8vw, 112px)' }}
            {...rise(0.55)}
          >
            Saarloos
          </MotionH1>

          {/* Bio */}
          <MotionP
            className="mb-10 max-w-md text-base font-light leading-7 text-zinc-600 dark:text-zinc-400"
            {...rise(0.7)}
          >
            Frontend developer met passie voor{' '}
            <span className="font-medium text-zinc-900 dark:text-zinc-200">design</span>,{' '}
            <span className="font-medium text-zinc-900 dark:text-zinc-200">UX</span> en moderne
            webtechnologieën. Ik bouw snelle, elegante interfaces die mensen onthouden.
          </MotionP>

          {/* Skill chips */}
          <MotionDiv className="mb-10 flex flex-wrap items-center gap-2" {...rise(0.85)}>
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="rounded-none border-zinc-200 bg-transparent px-3 py-1 font-mono text-[11px] font-normal uppercase tracking-[0.1em] text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
              >
                {skill}
              </Badge>
            ))}
          </MotionDiv>

          {/* Availability status */}
          <MotionDiv className="flex flex-wrap items-center gap-4" {...rise(1)}>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden"
                  style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
                Open voor projecten
              </span>
            </div>
          </MotionDiv>

        </div>

      </main>
    </Layout>
  )
}

export default Home
