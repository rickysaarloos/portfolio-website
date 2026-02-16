import Footer from './Footer'


const githubLogo = `${import.meta.env.BASE_URL}images/pngimg.com - github_PNG40.png`


const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-100">
      <a
        href="https://github.com/rickysaarloos"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 top-6 z-50 rounded-full bg-white/80 p-2 shadow-md backdrop-blur transition hover:scale-105 hover:bg-white"
        aria-label="GitHub profiel"
      >
            <img src={githubLogo} alt="GitHub" className="h-9 w-9" />
      </a>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
