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
import Banner from './components/Banner';
import ScalableWebApp from "./components/ScalableWebApp";
import ResponsiveDesign from "./components/ResponsiveDesign";
import OptimizingWebPerformance from "./components/OptimizingWebPerformance";
import IntroToTailwindCSS from "./components/IntroToTailwindCSS";

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
            <Route path="/" element={
              <>
                <Home handleScroll={handleScroll} refs={{ contactRef }} />
                <div ref={aboutRef}><About handleScroll={handleScroll} refs={{ projectsRef }} /></div>
                <div ref={servicesRef}><Services /></div>
                <div>
                  <Banner
                    handleScroll={handleScroll}
                    refs={{ teamRef }}
                    sideHeading={'Welcome to My Creative Space'}
                    heading={<span>Turning <span className="text-black">Ideas</span><span> into Digital Art.</span></span>}
                    desc={`Welcome to my digital playground, where creativity meets technology. I'm Hamdan Raza, a developer dedicated to weaving together design and code to craft unforgettable digital experiences. My mission is to transform innovative concepts into stunning, functional solutions that captivate and engage. From designing sleek interfaces to building robust applications, I’m here to make your vision a reality. Ready to embark on a journey of creativity and tech? Let’s create something remarkable together!`}
                    buttonText={'Meet My Team'}
                  />
                </div>
                <div ref={experienceRef}><Experience /></div>
                <div ref={projectsRef}><Projects /></div>
                <div>
                  <Banner
                    handleScroll={handleScroll}
                    refs={{ teamRef }}
                    sideHeading={'Transforming Ideas into Reality'}
                    heading={<span>Crafting<span className="text-black"> Code </span>with Creativity</span>}
                    desc={'Passionate about developing immersive and engaging experiences, I seamlessly blend design with functionality to create impactful digital solutions. With a keen eye for detail and a love for innovation, I strive to push the boundaries of what’s possible and bring unique visions to life. Whether it’s building dynamic web applications or crafting intuitive user interfaces, my goal is to deliver exceptional results that make a difference. Let’s collaborate and build something extraordinary together!'}
                    buttonText={'Meet My Team'}
                  />
                </div>
                <div ref={pricePlanRef}><PricePlan /></div>
                <div ref={teamRef}><Team /></div>
                <div ref={customersRef}><Customers /></div>
                <div ref={blogRef}><Blog /></div>
                <div ref={contactRef}><Contact /></div>
              </>
            } />
            <Route path="/ScalableWebApp" element={<ScalableWebApp />} />
            <Route path="/ResponsiveDesign" element={<ResponsiveDesign />} />
            <Route path="/OptimizingWebPerformance" element={<OptimizingWebPerformance />} />
            <Route path="/IntroToTailwindCSS" element={<IntroToTailwindCSS />} />
          </Routes>
        </div>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
