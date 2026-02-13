import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Navigation = () => {
  const location = useLocation()

  useEffect(() => {
    document.title = `Ricky Saarloos | ${location.pathname === '/' ? 'Home' : location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2)}`
  }, [location])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Me' },
    { to: '/contact', label: 'Contact' },
    { to: '/discover', label: 'Discover' },
  ]

  return (
    <div>
      <nav className="sticky top-0 z-40 border-b border-zinc-200 bg-zinc-100/90 backdrop-blur">
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-6 py-4">
          {links.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive ? 'bg-zinc-900 text-white' : 'text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navigation
