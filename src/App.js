import React, { useRef } from 'react';
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
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const pricePlanRef = useRef(null);
  const teamRef = useRef(null);
  const customersRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref, duration = 500) => {
    const targetPosition = ref.current.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, targetPosition);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar handleScroll={handleScroll} refs={{
          aboutRef,
          servicesRef,
          experienceRef,
          projectsRef,
          pricePlanRef,
          teamRef,
          customersRef,
          blogRef,
          contactRef
        }} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <div ref={aboutRef}><About /></div>
        <div ref={servicesRef}><Services /></div>
        <div ref={experienceRef}><Experience /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={pricePlanRef}><PricePlan /></div>
        <div ref={teamRef}><Team /></div>
        <div ref={customersRef}><Customers /></div>
        <div ref={blogRef}><Blog /></div>
        <div ref={contactRef}><Contact /></div>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
