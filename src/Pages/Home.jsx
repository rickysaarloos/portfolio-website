import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <main
        className="
          flex items-center justify-center
          gap-[5rem]
          min-h-screen
          relative
          bg-[#e2e2e2]
          px-8 py-16
          max-[900px]:flex-col
          max-[900px]:gap-12
          max-[900px]:text-center
        "
      >
        {/* Photo box */}
        <div
          className="
            w-[240px] h-[340px]
            bg-[#a9a5a5]
            flex items-center justify-center
            text-[1.3rem]
            text-[#222]
            shadow-[0_2px_6px_rgba(0,0,0,0.2)]
          "
        >
          <img
            src="/images/IMG_6842.jpg"
            alt="Ricky"
            className="
              w-[250px]
              h-auto
              rounded-[8px]
              object-cover
            "
          />
        </div>

        {/* Text area */}
        <div
          className="
            flex flex-col items-start
            relative
            max-[900px]:items-center
          "
        >
          {/* Dev section */}
          <div className="flex flex-col items-start max-[900px]:items-center">
            <h2
              className="
                flex items-center gap-2
                text-[3rem]
                font-medium
                font-[Georgia,serif]
                max-[768px]:text-[2rem]
              "
            >
              <span className="text-black">software</span>
              <span
                className="
                  bg-[#2b2b32]
                  text-white
                  px-[0.8em]
                  py-[1.2em]
                "
              >
                developer
              </span>
            </h2>

            <p
              className="
                text-[0.95rem]
                text-black
                max-w-[220px]
                leading-[1.4]
                mt-[0.7rem]
                ml-[6.2rem]
                max-[768px]:ml-0
                max-[768px]:max-w-[90%]
                max-[768px]:text-center
              "
            >
              Frontend developer met passie voor design, UX en moderne
              webtechnologieën.
            </p>
          </div>

          {/* Name */}
          <h1
            className="
              font-['Playfair_Display',serif]
              text-[3.4rem]
              text-[#111]
              mt-12
              ml-[-5rem]
              max-[900px]:mt-8
              max-[768px]:ml-0
              max-[768px]:text-[2.5rem]
            "
          >
            Ricky Saarloos
          </h1>
        </div>
      </main>
    </Layout>
  );
}
