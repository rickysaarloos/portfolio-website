import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useTheme } from '../Components/themeContext'

const Navigation = () => {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

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
      <nav className="sticky top-0 z-40 border-b border-zinc-200 bg-zinc-100/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-6 py-4">
          {links.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  aria-current={isActive ? 'page' : undefined}
                  style={isActive ? { color: '#f8fafc' } : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-zinc-800 text-zinc-50 shadow-sm ring-1 ring-zinc-700/30 dark:bg-zinc-100 dark:text-zinc-900 dark:ring-zinc-200/40'
                      : 'text-zinc-700 hover:bg-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-800'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}

          <li className="ml-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
              aria-label="Wissel tussen lichte en donkere modus"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navigation
