import React from "react";
import Layout from "../components/Layout";
import "../App.css";

function Home() {
  return (
    <Layout>
      <main className="home">
        <div className="photo-box"><img src="./images/IMG_6842.jpg" alt="Ricky" /></div>
        <div className="text-area">
          <div className="dev-section">
            <h2 className="dev-title">
              <span className="light">software</span>{" "}
              <span className="dark">developer</span>
            </h2>
            <p className="description">
              Frontend developer met passie voor design, UX en moderne
              webtechnologieën.
            </p>
          </div>
          <h1 className="name">Ricky Saarloos</h1>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
