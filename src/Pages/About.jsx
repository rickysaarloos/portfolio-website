
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="about-page">
        <section className="about-section">
 
          <div className="about-left">
            <h2>Ricky Saarloos</h2>
            <p>
              Ik ben Ricky Saarloos, een software development student aan het
              Techniek College Rotterdam. Tijdens mijn opleiding ontwikkel ik
              kennis en vaardigheden op het gebied van webontwikkeling, waarbij ik
              me richt op zowel de technische als de visuele kant van software.
            </p>
            <p>
              Mijn interesse ligt in het creëren van gebruiksvriendelijke, goed
              presterende en visueel aantrekkelijke websites en applicaties. Ik
              werk graag aan projecten waarin techniek en design samenkomen om een
              optimale gebruikerservaring te bieden.
            </p>
            <p>
              Binnen mijn studie en persoonlijke projecten besteed ik veel
              aandacht aan frontend development, UX/UI-design en het toepassen
              van moderne webtechnologieën. Mijn doel is om mezelf te blijven
              ontwikkelen als veelzijdige developer met oog voor detail.
            </p>
          </div>

          <div className="about-right">
            <div className="photo-stack">
              <div className="photo photo1">
                <img src="./images/IMG_7049.jpg" alt="Me 1" />
              </div>
              <div className="photo photo2">
                <img src="./images/IMG_5580.jpg" alt="Me 2" />
                <span className="photo-label">me</span>
              </div>
            </div>
          </div>
        </section>

       
<section className="skills-section">
  <h3 className="skills-title">vaardigheden</h3>
  <div className="skills-grid">
    <div className="skill-item html">HTML</div>
    <div className="skill-item css">CSS</div>
    <div className="skill-item js">JavaScript</div>
    <div className="skill-item react">React</div>
    <div className="skill-item electron">Electron.js</div>
  </div>
</section>

        
        <section className="interests-section">
          <h3 className="interests-title">hobby///interests</h3>

          <div className="interests-grid">
            <div className="interest-block dark">
              <img src="./images/IMG_7372.jpg" alt="Daft Punk" />
              <div className="interest-text">
                <h4>Muziek</h4>
                <p>
                  Ik heb een brede interesse in muziek en luister graag naar
                  verschillende stijlen en artiesten. Daft Punk behoort tot mijn
                  favorieten vanwege hun vernieuwende geluid en creatieve
                  benadering van elektronische muziek.
                </p>
                <span className="credit">Daft Punk</span>
              </div>
            </div>

            <div className="interest-block dark">
              <div className="interest-text">
                <h4>Fashion</h4>
                <p>
                  Ik volg met interesse de wereld van fashion, in het bijzonder
                  couture. De combinatie van vakmanschap, detail en artistieke
                  expressie binnen de mode-industrie spreekt me aan en inspireert
                  mijn waardering voor esthetiek en design.
                </p>
                <span className="credit">Vetements FW16</span>
              </div>
              <img src="./images/IMG_7371.webp" alt="Fashion" />
            </div>

            <div className="interest-block light">
              <img src="./images/IMG_7375.jpg" alt="The Thinker" />
              <div className="interest-text">
                <h4>Philosophy</h4>
                <p>
                  Filosofie boeit me door de manier waarop het aanzet tot kritisch
                  denken en reflectie. Het helpt me vraagstukken vanuit
                  verschillende perspectieven te bekijken en bewuster om te gaan
                  met ideeën en beslissingen.
                </p>
                <span className="credit">The Thinker</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
