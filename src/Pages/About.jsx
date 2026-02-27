

import { Link } from 'react-router-dom'
import Layout from '../Components/Layout'
import useScrollReveal from '../hooks/useScrollReveal'

const imageBase = `${import.meta.env.BASE_URL}images/`

const profileImages = {
  main: `${imageBase}IMG_7049.jpg`,
  side: `${imageBase}IMG_5580.jpg`,
}

const highlights = [
  { label: 'Opleiding',     value: 'MBO 4',    sub: 'Techniek College Rotterdam' },
  { label: 'Specialisatie', value: 'Frontend', sub: '+ UX / UI Design' },
  { label: 'Status',        value: 'Open',     sub: 'Voor projecten & stages' },
]

const expertise = [
  {
    index: '01',
    title: 'Frontend Development',
    description: 'Ik bouw schaalbare interfaces met aandacht voor performance, herbruikbare componenten en heldere code-architectuur.',
    stack: ['React', 'JavaScript', 'Vite'],
  },
  {
    index: '02',
    title: 'UI/UX Design',
    description: 'Ik vertaal ideeën naar intuïtieve user flows en visuele interfaces die zowel strak ogen als logisch werken.',
    stack: ['Design systems', 'Accessibility', 'UX thinking'],
  },
  {
    index: '03',
    title: 'Samenwerking',
    description: 'Ik werk gestructureerd met feedback, deadlines en duidelijke communicatie om projecten soepel op te leveren.',
    stack: ['Git workflow', 'Iteratief werken', 'Documentatie'],
  },
]

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Electron.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Figma']

const About = () => {
  useScrollReveal() // activates IntersectionObserver for all .reveal* elements on this page

  return (
    <Layout>
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-zinc-400/5 blur-[120px] dark:bg-white/4" />
        <div className="absolute top-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-zinc-400/4 blur-[100px] dark:bg-white/3" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl space-y-28 px-6 py-20">

        {/* HERO — above the fold, uses page-load animation not scroll */}
        <section className="grid items-center gap-16 lg:grid-cols-2">
          <div style={{ animation: 'fade-up 0.7s ease 0.2s both' }}>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-zinc-900 dark:bg-zinc-100" />
              <span
                className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                About Me
              </span>
            </div>

            <h1
              className="mb-2 leading-[0.9] tracking-tight text-zinc-950 dark:text-zinc-50"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(52px, 6.5vw, 92px)', fontWeight: 600 }}
            >
              Ricky
            </h1>
            <h1
              className="mb-10 leading-[0.9] tracking-tight text-zinc-950 dark:text-zinc-50"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(52px, 6.5vw, 92px)',
                fontWeight: 300,
                fontStyle: 'italic',
               
                WebkitTextStroke: '1.5px currentColor',
              }}
            >
              Saarloos
            </h1>

            <p className="mb-5 max-w-md text-base font-light leading-8 text-zinc-600 dark:text-zinc-400">
              Ik ben software development student aan het{' '}
              <span className="font-medium text-zinc-900 dark:text-zinc-200">Techniek College Rotterdam</span>{' '}
              en specialiseer me in het ontwerpen en bouwen van moderne webinterfaces.
            </p>
            <p className="mb-10 max-w-md text-base font-light leading-8 text-zinc-600 dark:text-zinc-400">
              Ik combineer{' '}
              <span className="font-medium text-zinc-900 dark:text-zinc-200">technische precisie</span>{' '}
              met visuele kwaliteit: van componentstructuur en performance tot typografie,
              spacing en gebruikservaring.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/discover"
                className="border border-zinc-300 px-6 py-3 text-sm text-zinc-800 transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-400"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', letterSpacing: '0.06em' }}
              >
                BEKIJK MIJN WERK →
              </Link>
              <Link
                to="/contact"
                className="border border-zinc-300 px-6 py-3 text-sm text-zinc-800 transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-400"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', letterSpacing: '0.06em' }}
              >
                CONTACT
              </Link>
            </div>
          </div>

          <div
            className="relative mx-auto h-[440px] w-full max-w-[380px]"
            style={{ animation: 'fade-up 0.7s ease 0.4s both' }}
          >
            <div className="absolute left-0 top-0 overflow-hidden shadow-2xl shadow-zinc-900/20 dark:shadow-black/40" style={{ transform: 'rotate(1 deg)' }}>
              <div className="absolute -top-2 -left-2 z-10 h-6 w-6 border-t-2 border-l-2 border-zinc-900 dark:border-zinc-200" />
              <div className="absolute inset-0 z-10 ring-1 ring-inset ring-white/10" />
              <img src={profileImages.side} alt="Ricky portrait 2" className="h-60 w-48 object-cover grayscale-[20%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />
              <span className="absolute bottom-3 right-3 z-10 bg-zinc-950/80 px-2 py-1 text-[10px] text-zinc-300 backdrop-blur-sm" style={{ fontFamily: "'DM Mono', monospace" }}>
                02 / PORTRAIT
              </span>
            </div>

            <div className="absolute bottom-0 right-0 overflow-hidden shadow-2xl shadow-zinc-900/25 dark:shadow-black/50" style={{ transform: 'rotate(-1 deg)' }}>
              <div className="absolute -bottom-2 -right-2 z-10 h-6 w-6 border-b-2 border-r-2 border-zinc-900 dark:border-zinc-200" />
              <div className="absolute inset-0 z-10 ring-1 ring-inset ring-white/10" />
              <img src={profileImages.main} alt="Ricky portrait" className="h-64 w-52 object-cover grayscale-[10%] transition-all duration-500 hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 z-10 bg-zinc-950/80 px-2 py-1 text-[10px] text-zinc-300 backdrop-blur-sm" style={{ fontFamily: "'DM Mono', monospace" }}>
                01 / PORTRAIT
              </span>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS — each card fades up with staggered delay */}
        <section className="grid gap-px border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 md:grid-cols-3">
          {highlights.map((item, i) => (
            <div
              key={item.label}
              className={`reveal reveal-delay-${i + 1} bg-white px-8 py-10 dark:bg-zinc-950`}
            >
              <div className="mb-1 flex items-center gap-2">
                <div className="h-px w-4 bg-zinc-300 dark:bg-zinc-700" />
                <span
                  className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {item.label}
                </span>
              </div>
              <p
                className="mt-3 text-zinc-950 dark:text-zinc-50"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '42px', fontWeight: 600, lineHeight: 1 }}
              >
                {item.value}
              </p>
              <p className="mt-2 text-sm font-light text-zinc-500 dark:text-zinc-500">{item.sub}</p>
            </div>
          ))}
        </section>

        {/* EXPERTISE — header fades up, then each card staggers */}
        <section>
          <div className="reveal mb-12 flex items-end justify-between border-b border-zinc-200 pb-6 dark:border-zinc-800">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px w-6 bg-zinc-900 dark:bg-zinc-100" />
                <span
                  className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Expertise
                </span>
              </div>
              <h2
                className="text-zinc-950 dark:text-zinc-50"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600, lineHeight: 1 }}
              >
                Waar ik waarde toevoeg
              </h2>
            </div>
          </div>

          <div className="grid gap-px border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 md:grid-cols-3">
            {expertise.map((item, i) => (
              <div
                key={item.title}
                className={`reveal reveal-delay-${i + 1} group bg-white px-8 py-10 transition-colors duration-300 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900/80`}
              >
                <span className="mb-6 block text-[11px] tracking-[0.15em] text-zinc-400 dark:text-zinc-600" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {item.index}
                </span>
                <h3
                  className="mb-4 text-zinc-900 dark:text-zinc-100"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 600, lineHeight: 1.1 }}
                >
                  {item.title}
                </h3>
                <p className="mb-6 text-sm font-light leading-7 text-zinc-600 dark:text-zinc-400">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-zinc-200 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-500"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK — block scales up, each chip staggers in */}
        <section className="reveal-scale relative overflow-hidden bg-zinc-950 p-10 dark:bg-black">
          <div
            className="pointer-events-none absolute -bottom-6 -right-4 select-none text-zinc-900 dark:text-zinc-950"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '120px', fontWeight: 700, lineHeight: 1 }}
          >
            STACK
          </div>

          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-6 bg-zinc-600" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500" style={{ fontFamily: "'DM Mono', monospace" }}>
                Tech Stack
              </span>
            </div>

            <ul className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <li
                  key={skill}
                  className={`reveal reveal-delay-${Math.min(i + 1, 5)} border border-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-colors duration-200 hover:border-zinc-500 hover:text-zinc-100`}
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px' }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </Layout>
  )
}

export default About