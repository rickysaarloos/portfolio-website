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
    details: [
      {
        title: "Start- en menuscherm",
        text: "Weergave van het startscherm met de donkere kasteelstijl.",
        image: `${imageBase}Screenshot_2025-10-07_151352.png`,
      },
      {
        title: "2D challenge resultaat",
        text: "NPC-interactie na het voltooien van mijn JavaScript-parkour challenge.",
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
    details: [
      {
        title: "Gameplay interface",
        text: "Spelers plaatsen om de beurt een X of O met de muis.",
        image: `${imageBase}Schermafbeelding 2025-11-04 082123.png`,
      },
      {
        title: "Resultaatcontrole",
        text: "Automatische checks voor winst of gelijkspel.",
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
      "Samenwerkingsproject waarin we een educatieve webgame bouwden met maatschappelijke impact.",
    details: [
      {
        title: "Projectmotivatie",
        text: "Gamification inzetten voor maatschappelijke bewustwording.",
        image: `${imageBase}Schermafbeelding 2025-11-04 085103.png`,
      },
      {
        title: "Tetris implementatie",
        text: "Tetris-game gebouwd met scorelogica en game-loop.",
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
      "Een full-stack fashion marketplace app gebouwd met MERN.",
    repositoryUrl:
      "https://github.com/rickysaarloos/mern-stack-FITD-app",
    details: [
      {
        title: "Marketplace homepage",
        text: "Premium donkere homepage met duidelijke CTA’s.",
        image: `${imageBase}Schermafbeelding 2026-02-17 044106.png`,
      },
      {
        title: "MERN architectuur",
        text: "MongoDB + Express backend en React (Vite) + Tailwind frontend.",
        image: `${imageBase}Schermafbeelding 2026-02-17 043844.png`,
      },
    ],
  },
]

export default projects
