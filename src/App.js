import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Experience from './components/Experience';
import PricePlan from './components/PricePlan';
import Sorry from './components/Sorry';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Sorry />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/about" element={<Sorry />} /> */}
          </Routes>
        </div>
        {/* <About />
        <Services />
        <Experience />
        <Projects />
        <PricePlan />
        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

