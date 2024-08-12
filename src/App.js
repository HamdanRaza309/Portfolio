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
import Customers from './components/Customers';
import Team from './components/Team';
import Blog from './components/Blog';
import BackToTopButton from './components/BackToTopButton';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <About />
        <Services />
        <Experience />
        <Projects />
        <PricePlan />
        <Team />
        <Customers />
        <Blog />
        <Contact />
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;

