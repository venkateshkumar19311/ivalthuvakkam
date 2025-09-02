import './App.css';
import Header from './Components/Header';
import Home from './Page/Home';
import About from './Page/About';
import Services from './Page/Services';
import Gallery from './Page/gallery';
import Testimonials from './Page/Testimonials';
import Contact from './Page/Contact';
import Footer from './Components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} /> {/* corrected */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
