import '../App.css';
import Header from '../components/Header';
import Layout from '../components/Layout';




function Home() {
    return (

      <main className="home">
   
      <div className="photo-box">foto</div>

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
  );
}
        <>
        <Header />
      <Layout>
      
      
      </Layout> 

        </>
   

export default Home;