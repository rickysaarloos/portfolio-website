
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#e5e5e5]">
      
      {/* GitHub floating logo */}
      <a
        href="https://github.com/rickysaarloos"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-6 right-6 z-50 w-12 h-12 hover:scale-105 transition"
      >
        <img
          src="./images/pngimg.com - github_PNG40.png"
          alt="GitHub"
          className="w-full h-full object-contain"
        />
      </a>

      {/* Optional header */}
      <Header />

      {/* Page content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
