import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";
import "./Layout.css";


const Layout = ({ children }) => {
  return (
    <div className="page-container">
      <Header />
<a 
  href="https://github.com/rickysaarloos"
  target="_blank"
  rel="noopener noreferrer"
  className="github-logo"
>
  <img 
    src="./images/pngimg.com - github_PNG40.png" 
    alt="GitHub" 
  />
</a>
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
