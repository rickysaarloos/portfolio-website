import { useState } from 'react'
import Layout from '../Components/Layout'

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
        setResult('Message sent successfully.')
        event.target.reset()
      } else {
        setResult('Something went wrong, Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setResult('⚠️ Error sending message. Try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <div className="mx-auto flex min-h-[calc(100vh-140px)] w-full max-w-3xl flex-col items-center justify-center px-6 py-12">
        <h1 className="mb-2 text-4xl font-semibold text-zinc-900">Ricky Saarloos</h1>
        <h2 className="mb-8 text-xl text-zinc-700">Contact Me</h2>

        <form className="w-full rounded-2xl bg-white p-8 shadow-xl" onSubmit={onSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">First Name</label>
              <input className="rounded-lg border border-zinc-300 px-3 py-2" type="text" id="firstName" name="first_name" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-sm font-medium text-zinc-700">Last Name</label>
              <input className="rounded-lg border border-zinc-300 px-3 py-2" type="text" id="lastName" name="last_name" required />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email</label>
            <input className="rounded-lg border border-zinc-300 px-3 py-2" type="email" id="email" name="email" required />
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-zinc-700">Message</label>
            <textarea className="min-h-28 rounded-lg border border-zinc-300 px-3 py-2" id="message" name="message" required />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-lg bg-zinc-900 px-4 py-2 font-medium text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>

          {result && <p className="mt-4 text-sm text-zinc-700">{result}</p>}
        </form>
      </div>
    </Layout>
  )
}

export default Contact
