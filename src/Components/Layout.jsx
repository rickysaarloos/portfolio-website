import { GithubLogoIcon } from '@phosphor-icons/react'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-100 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      <a
        href="https://github.com/rickysaarloos"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profiel"
        className="group fixed right-6 top-6 z-50 flex size-10 items-center justify-center border border-zinc-300 bg-zinc-100/70 text-zinc-700 outline-none backdrop-blur transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] hover:translate-x-[1px] hover:border-zinc-900 hover:bg-zinc-900 hover:text-white focus-visible:ring-2 focus-visible:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-950/70 dark:text-zinc-300 dark:hover:border-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 dark:focus-visible:ring-zinc-100"
      >
        <GithubLogoIcon
          size={18}
          weight="fill"
          className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        />
      </a>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
