const imageBase = `${import.meta.env.BASE_URL}images/`

const projects = [
  {
    id: 1,
    name: "Project: Darkcastle",
    category: "Webgame",
    year: "2025",
    stack: ["PHP", "SQL", "JavaScript"],
    image: `${imageBase}Schermafbeelding 2025-10-14 110248.png`,
    description:
      "Een web-based game gebouwd in teamverband. Ik ontwikkelde gameplay-scenes en het teamregistratiesysteem met PHP en SQL.",

    // ── Rich detail fields ──────────────────────────────
    overview:
      "Darkcastle is een browser-based roleplaying game die ik samen met klasgenoten heb gebouwd tijdens een schoolproject. Het doel was om samen een volledig werkend spel op te leveren met een eigen backend, gebruikersregistratie en gameplay-scenes.",
    role: "Mijn verantwoordelijkheid lag bij de JavaScript parkour-challenge (een 2D platformer-scene in de browser), het teamregistratiesysteem in PHP/SQL, en de algemene structuur van de game-loop.",
    challenge:
      "De grootste uitdaging was samenwerken met meerdere developers aan dezelfde codebase zonder versiebeheer-problemen. Daarnaast moest de PHP backend stabiel blijven terwijl de JavaScript frontend dynamisch reageerde op spelacties.",
    result:
      "We leverden een volledig speelbaar spel op met werkende login, NPC-interacties en meerdere challenges. Mijn parkour-scene werd positief ontvangen door zowel leraren als medestudenten.",

    details: [
      {
        title: "Start- en menuscherm",
        text: "Het startscherm zet meteen de toon met een donkere kasteelstijl. Ik ontwierp de navigatiestructuur en koppelde het menuscherm aan de PHP sessielogica zodat ingelogde spelers direct verder konden spelen.",
        image: `${imageBase}Screenshot_2025-10-07_151352.png`,
      },
      {
        title: "2D parkour challenge",
        text: "Mijn eigen bijdrage aan de gameplay: een volledig in JavaScript gebouwde 2D platformer-scene. De speler bestuurt een karakter met toetsenbordinput, vermijdt obstakels en bereikt een eindpunt. Na voltooiing triggert een NPC-interactie die de voortgang opslaat via een API-call naar de PHP backend.",
        image: `${imageBase}Schermafbeelding 2025-10-14 110457.png`,
      },
    ],
  },

  {
    id: 2,
    name: "Tic Tac Toe (Python + Pygame)",
    category: "Game development",
    year: "2025",
    stack: ["Python", "Pygame", "Game loops"],
    image: `${imageBase}Schermafbeelding 2025-11-04 082901.png`,
    description:
      "Een klassieke game om Python fundamentals te oefenen, inclusief input-handling en wincondities.",

    overview:
      "Dit project bouwde ik als oefening om Python te leren begrijpen: van variabelen en condities tot event loops en rendering met Pygame. Het eindresultaat is een volledig speelbaar 2-speler Tic Tac Toe spel.",
    role: "Solo project. Ik was verantwoordelijk voor het volledige ontwerp en de implementatie: game loop, input verwerking, win/draw detectie en de visuele interface.",
    challenge:
      "De grootste leercurve zat in het begrijpen van de Pygame event loop en hoe je de spelstatus bijhoudt over meerdere frames heen. Het correct detecteren van alle winscenario's (rijen, kolommen, diagonalen) vergde nauwkeurig redeneren.",
    result:
      "Een stabiel werkend spel dat ik kon gebruiken om Python fundamentals echt te begrijpen. De logica achter game loops, state management en conditionele rendering is direct toepasbaar op grotere projecten.",

    details: [
      {
        title: "Gameplay interface",
        text: "Spelers plaatsen om de beurt een X of O door op een vakje te klikken. De muispositie wordt omgezet naar een gridcoördinaat en de spelstatus wordt elke frame opnieuw gerenderd op het scherm.",
        image: `${imageBase}Schermafbeelding 2025-11-04 082123.png`,
      },
      {
        title: "Win- en gelijkspeldetectie",
        text: "Na elke zet controleert de logica alle acht wincondities. Bij winst wordt de winnende rij gemarkeerd; bij een vol bord zonder winnaar verschijnt een gelijkspelbericht. De spelstatus reset automatisch na een ronde.",
        image: `${imageBase}Schermafbeelding 2025-11-04 083742.png`,
      },
    ],
  },

  {
    id: 3,
    name: "Games for Good",
    category: "Maatschappelijk project",
    year: "2025",
    stack: ["JavaScript", "Web design", "Gamification"],
    image: `${imageBase}Schermafbeelding 2025-11-04 090148.png`,
    description:
      "Samenwerkingsproject waarbij we een educatieve webgame bouwden met maatschappelijke impact.",

    overview:
      "Games for Good was een schoolbreed project waarbij teams een game moesten ontwerpen rondom een maatschappelijk thema. Ons team koos voor bewustwording rondom klimaat en duurzaamheid, vertaald naar een Tetris-variant met educatieve elementen.",
    role: "Ik was verantwoordelijk voor de frontend structuur, de visuele opmaak van de webpagina en de implementatie van de Tetris game loop in JavaScript. Daarnaast heb ik de projectpresentatie mede vormgegeven.",
    challenge:
      "Het combineren van game mechanics met educatieve inhoud zonder dat het speelplezier verloren gaat was de kern van het ontwerpprobleem. Technisch was de Tetris-logica (rotaties, lijndetectie, scoretelling) de meest complexe component.",
    result:
      "Het project werd goed ontvangen tijdens de eindpresentatie. De combinatie van herkenbare gameplay met een duidelijke boodschap werd gewaardeerd. Het project leerde me hoe je design en techniek inzet voor een groter doel dan alleen esthetiek.",

    details: [
      {
        title: "Projectmotivatie & opzet",
        text: "We begonnen met een gezamenlijke brainstorm over welk maatschappelijk thema we wilden aankaarten. Na onderzoek kozen we voor klimaatbewustwording: een onderwerp dat urgent is maar ook goed te vertalen naar spelmechanics. De landingspagina legt de missie uit voordat de speler begint.",
        image: `${imageBase}Schermafbeelding 2025-11-04 085103.png`,
      },
      {
        title: "Tetris implementatie",
        text: "De game is een aangepaste Tetris-variant: vallende blokken stellen duurzame versus vervuilende keuzes voor. Ik bouwde de game loop van scratch in JavaScript, inclusief tetromino-rotaties, botsingsdetectie, lijnverwijdering en een oplopende score. De moeilijkheidsgraad neemt toe naarmate de speler verder komt.",
        image: `${imageBase}Schermafbeelding 2025-11-04 085321.png`,
      },
    ],
  },

  {
    id: 4,
    name: "FITD App (MERN stack)",
    category: "Full-stack web app",
    year: "2026",
    stack: ["MongoDB", "Express", "React", "Vite", "Tailwind CSS"],
    image: `${imageBase}Schermafbeelding 2026-02-11 115125.png`,
    description:
      "Een full-stack fashion marketplace app gebouwd met de MERN stack.",
    repositoryUrl: "https://github.com/rickysaarloos/mern-stack-FITD-app",

    overview:
      "FITD (Fashion Is The Destination) is een full-stack fashion marketplace die ik zelfstandig heb gebouwd als portfolio-project. Het platform stelt gebruikers in staat kleding te kopen en verkopen, geïnspireerd op platforms zoals Vinted maar met een premium, donker design.",
    role: "Solo full-stack developer. Ik ontwierp en bouwde zowel de backend (Node.js + Express + MongoDB) als de frontend (React + Vite + Tailwind CSS), inclusief authenticatie, productbeheer en de marketplace interface.",
    challenge:
      "De grootste uitdaging was het opzetten van een solide REST API architectuur met JWT-authenticatie en het koppelen van de MongoDB datamodellen aan een dynamische React frontend. State management en het consistent houden van de UI over meerdere pagina's vergde goede planning.",
    result:
      "Een volledig werkende marketplace met gebruikersregistratie, login, productupload en een browse-interface. Het project heeft me veel geleerd over full-stack architectuur, API design en hoe je een coherente gebruikerservaring bouwt van backend tot UI.",

    details: [
      {
        title: "Marketplace homepage",
        text: "De homepage is ontworpen met een premium, donker kleurenpalet en duidelijke CTA's. Het doel was een interface die aanvoelt als een high-end platform: strakke typografie, grote productfoto's en een intuïtieve navigatiestructuur. Gebouwd in React met Tailwind CSS voor responsiviteit.",
        image: `${imageBase}Schermafbeelding 2026-02-17 044106.png`,
      },
      {
        title: "MERN architectuur",
        text: "De backend draait op Node.js met Express en communiceert via een REST API met de MongoDB database. Gebruikers authenticeren via JWT tokens die opgeslagen worden in HTTP-only cookies. De React frontend (Vite) haalt data op via Axios en beheert de UI-state met React hooks. Alle routes zijn beveiligd met middleware.",
        image: `${imageBase}Schermafbeelding 2026-02-17 043844.png`,
      },
    ],
  },
]

export default projects










