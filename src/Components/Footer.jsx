const Footer = () => {
  return (
    <footer className="border-t border-zinc-700 bg-zinc-800 py-5 text-center text-sm text-zinc-300">
      <div className="mx-auto flex max-w-3xl flex-col gap-1 px-4">
        <p className="text-base font-medium">Neem contact op</p>
        <a href="mailto:rickysaarloos@gmail.com" className="transition hover:text-white">
          rickysaarloos@gmail.com
        </a>
        <p>+31 612101710</p>
        <p className="pt-1 text-xs text-zinc-400">
          © 2025 Ricky Saarloos <span className="italic">let&apos;s create</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
