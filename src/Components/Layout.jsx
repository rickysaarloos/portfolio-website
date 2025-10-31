import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";

const Layout = ({ children }) => {
  return (
    <div className="page-container">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
