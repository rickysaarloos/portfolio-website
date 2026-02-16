import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-14 border-t border-zinc-300 bg-zinc-900 text-zinc-200">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 text-left md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        
        {/* Brand */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Portfolio
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-100">
            Ricky Saarloos
          </h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-zinc-400">
            Frontend developer met focus op design, performance en
            gebruiksvriendelijke interfaces. Ik bouw moderne websites en
            digitale ervaringen die professioneel en betrouwbaar aanvoelen.
          </p>
        </section>

   

        {/* Contact */}
        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-300">
            Contact
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            <li>
              <a
                href="mailto:rickysaarloos@gmail.com"
                className="transition hover:text-zinc-100"
              >
                rickysaarloos@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+31612101710"
                className="transition hover:text-zinc-100"
              >
                +31 612101710
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rickysaarloos"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-zinc-100"
              >
                GitHub profiel
              </a>
            </li>
          </ul>
        </section>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-4 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} Ricky Saarloos. Alle rechten voorbehouden.</p>
          <p>
            Built with{' '}
            <span className="font-medium text-zinc-300">
              React + Vite
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
