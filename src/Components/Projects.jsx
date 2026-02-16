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
        text:
          "Weergave van het startscherm met de donkere kasteelstijl. Vanuit hier registreert de speler een team of start direct de game-flow.",
        image: `${imageBase}Screenshot_2025-10-07_151352.png`,
      },
      {
        title: "2D challenge resultaat",
        text:
          "NPC-interactie na het voltooien van mijn JavaScript-parkour challenge. Dit moment vormt de overgang naar de laatste fase van de game.",
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
      "Een klassieke game om Python fundamentals te oefenen, inclusief input-handling, wincondities en rendering via Pygame.",
    details: [
      {
        title: "Gameplay interface",
        text:
          "Hier plaatsen spelers om de beurt een X of O met de muis. Dit was mijn basis voor event-handling en game-state beheer.",
        image: `${imageBase}Schermafbeelding 2025-11-04 082123.png`,
      },
      {
        title: "Resultaatcontrole",
        text:
          "Automatische checks voor winst of gelijkspel. Dit project hielp me sterk in logica-opbouw, controle-flow en debuggen.",
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
      "Samenwerkingsproject waarin we een educatieve webgame met maatschappelijke impact bouwden. Mijn focus lag op de Tetris-game in JavaScript.",
    details: [
      {
        title: "Projectmotivatie",
        text:
          "Games for Good laat zien hoe gamification kan bijdragen aan bewustwording en maatschappelijke thema’s op een toegankelijke manier.",
        image: `${imageBase}Schermafbeelding 2025-11-04 085103.png`,
      },
      {
        title: "Tetris implementatie",
        text:
          "Ik bouwde de Tetris-game inclusief scorelogica, vallende blokken en pauzefuncties. Hiermee verbeterde ik mijn game-loop en DOM-vaardigheden.",
        image: `${imageBase}Schermafbeelding 2025-11-04 085321.png`,
      },
    ],
  },
]

export default projects