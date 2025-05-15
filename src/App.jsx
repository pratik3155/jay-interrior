import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (includes Popper.js)
import Header from './pages/Headerpage';
import Aboutuspage from './pages/Aboutuspage';
import Whatwedopage from './pages/Whatwedopage';
import Getinvolvepage from './pages/Getinvolvepage';
import Contactpage from './pages/Contactpage';

// ScrollToTop Component
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<Aboutuspage />} />
        <Route path="/what-we-do" element={<Whatwedopage />} />
        <Route path="/projects" element={<Getinvolvepage />} />
        <Route path="/contact" element={<Contactpage />} />
        {/* Fallback route */}
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
