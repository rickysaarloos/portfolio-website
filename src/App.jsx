import './App.css';
import About from './Pages/About';
import Navigation from './Pages/Navigation';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Discover from './Pages/discover';

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