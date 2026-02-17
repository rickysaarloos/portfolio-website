import About from './Pages/About'
import Navigation from './Pages/Navigation'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Discover from './Pages/Discover'
import DetailPage from './Components/DetailPage'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './Components/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="discover" element={<Discover />} />
          <Route path="projects/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
