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
                      ? 'bg-zinc-800 text-zinc-50 shadow-sm ring-1 ring-zinc-700/30 hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-400'
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
  className="ml-4 flex gap-2.5 border border-zinc-300 bg-transparent px-4 py-2 text-zinc-700 transition-all duration-200 hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-400 dark:hover:text-zinc-200"
  aria-label="Wissel tussen lichte en donkere modus"
  style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.08em' }}
>
  {/* Sun icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={theme === 'dark' ? 'block' : 'hidden'}
  >
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
  </svg>

  {/* Moon icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={theme === 'dark' ? 'hidden' : 'block'}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>

  {theme === 'dark' ? 'LIGHT' : 'DARK'}
</button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navigation
