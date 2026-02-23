import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout'

const quickLinks = [
  {
    index: '01',
    title: 'Bekijk projecten',
    description: 'Zie recente cases en technische keuzes.',
    to: '/discover',
  },
  {
    index: '02',
    title: 'Over mij',
    description: 'Lees meer over mijn aanpak en expertise.',
    to: '/about',
  },
]

const contactInfo = [
  { label: 'EMAIL', value: 'rickysaarloos@gmail.com' },
  { label: 'LOCATIE', value: 'Zuid-Holland, NL' },
  { label: 'STATUS', value: 'Open voor projecten', pulse: true },
]

const Contact = () => {
  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult('')

    const formData = new FormData(event.target)
    formData.append('access_key', 'd683d353-491e-4323-8763-2db65ceb245c')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setResult('success')
        event.target.reset()
      } else {
        setResult('error')
      }
    } catch {
      setResult('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      {/* ── Background atmosphere ── */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-zinc-400/5 blur-[120px] dark:bg-white/4" />
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-zinc-400/4 blur-[100px] dark:bg-white/3" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <main className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">

          {/* ══════════════════════════════
              LEFT COLUMN
          ══════════════════════════════ */}
          <div style={{ animation: 'fade-up 0.7s ease 0.2s both' }}>

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-zinc-900 dark:bg-zinc-100" />
              <span
                className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Contact
              </span>
            </div>

            {/* Heading */}
            <h1
              className="mb-2 leading-[0.9] tracking-tight text-zinc-950 dark:text-zinc-50"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(48px, 5.5vw, 80px)',
                fontWeight: 600,
              }}
            >
              Laten we samenwerken
            </h1>
   

            <p className="mb-10 max-w-sm text-base font-light leading-8 text-zinc-600 dark:text-zinc-400">
              Werk je aan een website of productidee en zoek je een developer
              die <span className="font-medium text-zinc-900 dark:text-zinc-200">design en techniek</span> combineert?
              Stuur me een bericht ik kom snel bij je terug.
            </p>

            {/* Contact info rows */}
            <div className="mb-12 space-y-0 border-t border-zinc-200 dark:border-zinc-800">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-zinc-200 py-4 dark:border-zinc-800"
                >
                  <span
                    className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-600"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {item.label}
                  </span>
                  <div className="flex items-center gap-2">
                    {item.pulse && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span
                          className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                          style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
                        />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </span>
                    )}
                    <span
                      className="text-sm text-zinc-700 dark:text-zinc-300"
                      style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px' }}
                    >
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div className="space-y-px border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800">
              {quickLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex items-center justify-between bg-white px-6 py-5 transition-colors duration-200 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                >
                  <div>
                    <span
                      className="mb-1 block text-[10px] tracking-[0.15em] text-zinc-400 dark:text-zinc-600"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {item.index}
                    </span>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs font-light text-zinc-500 dark:text-zinc-500">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-zinc-400 transition-transform duration-200 group-hover:translate-x-1 dark:text-zinc-600">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════
              RIGHT COLUMN — FORM
          ══════════════════════════════ */}
          <div style={{ animation: 'fade-up 0.7s ease 0.4s both' }}>
            {/* Form header */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-6 bg-zinc-900 dark:bg-zinc-100" />
              <span
                className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Stuur een bericht
              </span>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">

              {/* Name row */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Voornaam
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="Ricky"
                    className="border border-zinc-200 bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-500 dark:border-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-700 dark:focus:border-zinc-500"
                    style={{ fontFamily: "'DM Mono', monospace", fontSize: '13px' }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Achternaam
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    placeholder="Saarloos"
                    className="border border-zinc-200 bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-500 dark:border-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-700 dark:focus:border-zinc-500"
                    style={{ fontFamily: "'DM Mono', monospace", fontSize: '13px' }}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="border border-zinc-200 bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-500 dark:border-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-700 dark:focus:border-zinc-500"
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: '13px' }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Bericht
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Vertel kort over je project, planning en doelen..."
                  className="resize-none border border-zinc-200 bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-500 dark:border-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-700 dark:focus:border-zinc-500"
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: '13px' }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-zinc-950 px-6 py-4 text-sm text-white transition-colors duration-200 hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', letterSpacing: '0.08em' }}
              >
                {isSubmitting ? 'VERZENDEN...' : 'VERSTUUR BERICHT →'}
              </button>

              {/* Result feedback */}
              {result === 'success' && (
                <div className="flex items-center gap-3 border border-emerald-200 bg-emerald-50 px-4 py-3 dark:border-emerald-900 dark:bg-emerald-950/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <p
                    className="text-xs text-emerald-700 dark:text-emerald-400"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Bericht verzonden — ik neem snel contact op.
                  </p>
                </div>
              )}
              {result === 'error' && (
                <div className="flex items-center gap-3 border border-red-200 bg-red-50 px-4 py-3 dark:border-red-900 dark:bg-red-950/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  <p
                    className="text-xs text-red-700 dark:text-red-400"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Er ging iets mis. Probeer het opnieuw.
                  </p>
                </div>
              )}

            </form>
          </div>

        </div>
      </main>
    </Layout>
  )
}

export default Contact