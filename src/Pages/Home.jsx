import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <main className="min-h-screen bg-[#e2e2e2] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-6 py-16">
        
        {/* Photo */}
        <div className="w-[240px] h-[340px] bg-[#a9a5a5] shadow-md flex items-center justify-center">
          <img
            src="./images/IMG_6842.jpg"
            alt="Ricky"
            className="w-[250px] rounded-lg object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-start relative text-center md:text-left">

          {/* Developer title */}
          <div className="flex flex-col items-start">
            <h2 className="flex items-center gap-2 text-5xl font-serif">
              <span className="text-black">software</span>
              <span className="bg-[#2b2b32] text-white px-6 py-4">
                developer
              </span>
            </h2>

            <p className="mt-3 max-w-[220px] text-sm leading-snug text-black md:ml-24">
              Frontend developer met passie voor design, UX en moderne
              webtechnologieën.
            </p>
          </div>

          {/* Name */}
          <h1 className="mt-12 text-5xl font-serif text-black md:-ml-20">
            Ricky Saarloos
          </h1>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
