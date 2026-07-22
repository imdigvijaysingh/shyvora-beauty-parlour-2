import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import DirectorMessage from './pages/DirectorMessage';
import HappyClients from './pages/HappyClients';
import Contact from './pages/Contact';
import Membership from './pages/Membership';
import Services from './pages/Services';

function RouteTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsTransitioning(false);
      }, 300); // 0.3s delay
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation.pathname]);

  return (
    <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
      {React.cloneElement(children, { location: displayLocation })}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <Navbar />
        <main className="flex-grow">
          <RouteTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/director" element={<DirectorMessage />} />
              <Route path="/clients" element={<HappyClients />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/membership" element={<Membership />} />
            </Routes>
          </RouteTransition>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
