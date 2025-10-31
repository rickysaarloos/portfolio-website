import './App.css';
import About from './pages/About';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Discover from './pages/discover';

function App() {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Navigation />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/Discover" element={<Discover />} />
                    </Route >


                </Routes>
            </BrowserRouter>




        </>
    );
}

export default App;