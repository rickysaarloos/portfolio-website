import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout'

const contactHighlights = [
  { label: 'Zuid-Holland', value: 'Locatie' },

]

const quickLinks = [
  {
    title: 'Bekijk projecten',
    description: 'Zie recente cases en technische keuzes.',
    to: '/discover',
  },
  {
    title: 'Over mij',
    description: 'Lees meer over mijn aanpak en expertise.',
    to: '/about',
  },
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
        setResult('Bericht succesvol verzonden. Ik neem snel contact op.')
        event.target.reset()
      } else {
        setResult('Er ging iets mis. Probeer het opnieuw.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setResult('⚠️ Er ging iets mis bij het verzenden.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <main className="mx-auto w-full max-w-6xl px-6 py-14">
        <section className="grid gap-10 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_1.1fr]">

          {/* LEFT SIDE */}
          <div>
            <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
              Contact
            </span>

            <h1 className="mt-4 text-4xl font-semibold text-zinc-950 md:text-5xl">
              Laten we samenwerken
            </h1>

            <p className="mt-6 max-w-xl text-zinc-700 leading-8">
              Werk je aan een website of productidee en zoek je een developer
              die design en techniek combineert? Stuur me een bericht
              en ik kom snel bij je terug.
            </p>

            <ul className="mt-8 flex flex-wrap gap-3">
              {contactHighlights.map((item) => (
                <li
                  key={item.value}
                  className="rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1.5 text-sm"
                >
                  <span className="font-semibold">{item.value}</span> · {item.label}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition hover:bg-zinc-100"
                >
                  <p className="text-sm font-semibold text-zinc-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-zinc-900">
              Stuur een bericht
            </h2>
      
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
                First Name
                <input
                  type="text"
                  name="first_name"
                  required
                  className="rounded-xl border border-zinc-300 bg-white px-3 py-2.5 outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-300"
                  placeholder="Ricky"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
                Last Name
                <input
                  type="text"
                  name="last_name"
                  required
                  className="rounded-xl border border-zinc-300 bg-white px-3 py-2.5 outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-300"
                  placeholder="Saarloos"
                />
              </label>
            </div>

            <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-zinc-700">
              Email
              <input
                type="email"
                name="email"
                required
                className="rounded-xl border border-zinc-300 bg-white px-3 py-2.5 outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-300"
                placeholder="you@company.com"
              />
            </label>

            <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-zinc-700">
              Message
              <textarea
                name="message"
                required
                className="min-h-36 rounded-xl border border-zinc-300 bg-white px-3 py-2.5 outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-300"
                placeholder="Vertel kort over je project, planning en doelen..."
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:opacity-70"
            >
              {isSubmitting ? 'Bezig met verzenden...' : 'Verstuur bericht'}
            </button>

            {result && (
              <p className="mt-4 text-sm font-medium text-zinc-700">
                {result}
              </p>
            )}
          </form>

        </section>
      </main>
    </Layout>
  )
}

export default Contact
