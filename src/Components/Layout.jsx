
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
      className="
        relative min-h-screen
        bg-[var(--wine)] text-[var(--offwhite)]
        font-[var(--sans)]
        flex flex-col
      "
    >
     
      <a
        href="https://github.com/rickysaarloos"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed top-6 right-6 z-50
          w-10 h-10
          opacity-70 hover:opacity-100
          transition
        "
      >
        <img
          src="/images/pngimg.com - github_PNG40.png"
          alt="GitHub"
          className="w-full h-full object-contain"
        />
      </a>

      {/* Page content */}
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
