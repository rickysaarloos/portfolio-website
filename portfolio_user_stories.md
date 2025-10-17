# User Stories – Portfolio Website

Gebruik deze user stories om je GitHub issues aan te maken. Elke user story bevat een beschrijving en taken die je kunt afvinken tijdens het bouwen van je portfolio.

## Instructies:
- Maak 6 kolommen aan in de juiste volgorde: Product Backlog, Sprint Backlog, Todo, In Progress, Testing, Done
- Maak elke user story als **issue** in je GitHub Projects board en plaats deze in 'product backlog'

---

## User Story 1: Navigatie
**Als bezoeker wil ik een navigatiebalk bovenaan de website, zodat ik gemakkelijk kan schakelen tussen de verschillende pagina's.**

### Taken:
- [ ] **Navbar component structuur maken**
  - Maak `components/Navbar.jsx` bestand
  - Basis HTML structuur (nav, ul, li elementen)
  - Component exporteren en importeren in App.jsx
  - *Acceptance: Navbar toont zonder styling*

- [ ] **React Router setup en navigatielinks**
  - Installeer react-router-dom package
  - Setup BrowserRouter in App.jsx
  - Maak basis pagina components (Home, Projects, About, Contact)
  - Implementeer Link componenten in Navbar
  - *Acceptance: Navigatie werkt tussen alle pagina's*

- [ ] **Navbar styling**
  - Tailwind CSS classes toevoegen of zelf stylen
  - *Acceptance: Navbar ziet eruit zoals het design*

---

## User Story 2: Homepagina
**Als bezoeker wil ik op de homepage een korte introductie zien over de maker van de website, zodat ik weet met wie ik te maken heb.**

### Taken:
- [ ] **Home component basis structuur**
  - Maak `pages/Home.jsx` component
  - Setup route voor homepage ("/")
  - Basis layout met hero sectie
  - *Acceptance: Homepage laadt correct via routing*

- [ ] **Introductie content toevoegen**
  - Voeg naam, studie/beroep en korte bio toe
  - Beschrijf persoonlijke interesses of specialisaties
  - Voeg professionele foto of avatar toe
  - *Acceptance: Bezoeker krijgt duidelijk beeld van wie je bent*

- [ ] **Hero sectie styling en layout**
  - Responsive grid of flexbox layout
  - Typography styling voor headers en tekst
  - Call-to-action buttons naar projecten/contact
  - *Acceptance: Homepage ziet er visueel aantrekkelijk uit*

---

## User Story 3: Projectenpagina
**Als bezoeker wil ik een overzicht zien van projecten, zodat ik het werk van de maker kan bekijken.**

### Taken:
- [ ] **Projects pagina en data setup**
  - Maak `pages/Projects.jsx` component
  - Maak `data/projects.js` met projects array
  - Setup route voor projectenpagina ("/projects")
  - *Acceptance: Projectenpagina is bereikbaar via navigatie*

- [ ] **ProjectCard component maken**
  - Maak herbruikbare `components/ProjectCard.jsx`
  - Props voor titel, beschrijving, afbeelding, technologieën
  - Basis card layout en styling
  - *Acceptance: Individuele projectkaarten tonen correct*

- [ ] **Projecten lijst weergeven**
  - Gebruik .map() om alle projecten te renderen
  - Correcte key props voor elk ProjectCard
  - *Acceptance: Alle projecten worden getoond in grid layout*

- [ ] **Zoek- en filterfunctionaliteit**
  - Zoekbalk component toevoegen
  - Filter projecten op titel of technologie
  - useState voor search query en gefilterde resultaten
  - *Acceptance: Gebruiker kan projecten zoeken en filteren*

---

## User Story 4: Projectdetailpagina
**Als bezoeker wil ik meer informatie kunnen bekijken over een project, zodat ik weet wat er is gemaakt en waarom.**

### Taken:
- [ ] **Dynamic routing setup**
  - Maak route met parameter (`/projects/:id`)
  - Setup useParams hook in ProjectDetail component
  - Maak `pages/ProjectDetail.jsx` component
  - *Acceptance: URLs zoals /projects/1 werken correct*

- [ ] **Project data ophalen en weergeven**
  - Gebruik useParams om project ID te krijgen
  - Find juiste project uit data array
  - Toon uitgebreide projectinformatie
  - Error handling als project niet bestaat
  - *Acceptance: Juiste projectdetails worden getoond*

- [ ] **Navigatie naar projectdetails**
  - Voeg useNavigate toe aan ProjectCard component
  - Click handler om naar projectdetail te navigeren
  - "Terug naar projecten" knop op detail pagina
  - *Acceptance: Smooth navigatie tussen overzicht en details*

- [ ] **Uitgebreide project content**
  - Screenshots of demo links
  - Gebruikte technologieën met badges
  - GitHub repository link
  - Live demo link (indien beschikbaar)
  - *Acceptance: Bezoeker krijgt volledig beeld van het project*

---

## User Story 5: Over mij pagina
**Als bezoeker wil ik meer weten over de maker en zijn/haar vaardigheden kunnen bekijken, zodat ik een goed beeld krijg van hun profiel.**

### Taken:
- [ ] **About pagina basis setup**
  - Maak `pages/About.jsx` component
  - Setup route voor about pagina ("/about")
  - Basis layout met profielsectie
  - *Acceptance: About pagina is bereikbaar via navigatie*

- [ ] **Persoonlijke informatie sectie**
  - Uitgebreide persoonlijke beschrijving
  - Opleiding en werkervaring
  - Hobby's en interesses
  - Professionele doelen
  - *Acceptance: Bezoeker leert je beter kennen*

- [ ] **Vaardigheden lijst met interactiviteit**
  - Maak array van skills in data bestand
  - Render skills met .map() functie
  - useState voor geselecteerde skill
  - Toon extra info bij klik op skill
  - *Acceptance: Interactieve skills sectie werkt*

- [ ] **Links en contactinformatie**
  - Links naar GitHub, LinkedIn profiel
  - Download link voor CV (optioneel)
  - Social media links
  - *Acceptance: Bezoekers kunnen je makkelijk vinden online*

---

## User Story 6: Contactpagina
**Als bezoeker wil ik contact kunnen opnemen met de maker, zodat ik vragen kan stellen of samenwerking kan voorstellen.**

### Taken:
- [ ] **Contact pagina setup**
  - Maak `pages/Contact.jsx` component
  - Setup route voor contact pagina ("/contact")
  - Basis layout met contactinformatie
  - *Acceptance: Contact pagina bereikbaar via navigatie*

- [ ] **Contactinformatie weergeven**
  - Email adres en/of telefoonnummer
  - Sociale media links
  - Locatie informatie (stad/land)
  - *Acceptance: Duidelijke contactmogelijkheden zichtbaar*

- [ ] **Contact formulier (optioneel)**
  - Formulier met naam, email, bericht velden
  - useState voor form data
  - Basic form validatie
  - Submit handler (kan console.log voor nu)
  - *Acceptance: Werkend contactformulier*

