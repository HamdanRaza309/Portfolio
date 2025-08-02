import React, { useRef, useState } from 'react';
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
import Alert from './components/Alert';
import Comment from "./components/Comment";
import useNode from "./hooks/useNode";
import Skills from './components/Skills';

const comments = {
  id: 1,
  items: [],
};

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

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

  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
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
        <Alert alert={alert} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Home handleScroll={handleScroll} refs={{ contactRef }} />
                <div ref={aboutRef}><About handleScroll={handleScroll} refs={{ projectsRef }} /></div>
                <div><Skills /></div>
                <div ref={servicesRef}><Services /></div>
                <Banner
                  handleScroll={handleScroll}
                  refs={{ contactRef }}
                  sideHeading={'Empowering Innovation Through Code'}
                  heading={<span>Engineering <span className="text-black">Digital</span> Excellence</span>}
                  desc={
                    'With a strong foundation in full-stack development, I specialize in crafting efficient, scalable, and user-focused web solutions. From pixel-perfect frontends to powerful backends, every line of code is a step toward innovation. I believe in solving real-world problems through technology, transforming abstract ideas into high-performing digital products. Let’s build something that’s not only functional, but unforgettable.'
                  }
                  buttonText={'Lets Connect'}
                />
                <div ref={experienceRef}><Experience /></div>
                <div ref={projectsRef}><Projects /></div>
                <Banner
                  handleScroll={handleScroll}
                  refs={{ contactRef }}
                  sideHeading={'A Journey of Code and Creativity'}
                  heading={
                    <span>Designing <span className="text-black">Impactful</span> Experiences</span>
                  }
                  desc={
                    `Hi, I'm Hamdan Raza — a creative developer passionate about bringing ideas to life through thoughtful design and purposeful code. This space is more than just a portfolio; it’s a reflection of my approach to digital storytelling. Whether you're a startup, a brand, or a fellow creative, I’m here to turn your concepts into elegant, user-centric digital experiences. Let's collaborate and turn bold ideas into reality.`
                  }
                  buttonText={'Lets Connect'}
                />

                {/* <div ref={pricePlanRef}><PricePlan /></div> */}
                {/* <div ref={teamRef}><Team /></div> */}
                {/* <div ref={customersRef}><Customers /></div> */}
                <div ref={blogRef}><Blog /></div>
                <div ref={contactRef}><Contact showAlert={showAlert} /></div>
              </>
            } />
            <Route path="/ScalableWebApp" element={
              <>
                <ScalableWebApp />
                <Comment
                  handleInsertNode={handleInsertNode}
                  handleEditNode={handleEditNode}
                  handleDeleteNode={handleDeleteNode}
                  comment={commentsData}
                />
              </>
            } />
            <Route path="/ResponsiveDesign" element={
              <>
                <ResponsiveDesign />
                <Comment
                  handleInsertNode={handleInsertNode}
                  handleEditNode={handleEditNode}
                  handleDeleteNode={handleDeleteNode}
                  comment={commentsData}
                />
              </>
            } />
            <Route path="/OptimizingWebPerformance" element={
              <>
                <OptimizingWebPerformance />
                <Comment
                  handleInsertNode={handleInsertNode}
                  handleEditNode={handleEditNode}
                  handleDeleteNode={handleDeleteNode}
                  comment={commentsData}
                />
              </>
            } />
            <Route path="/IntroToTailwindCSS" element={
              <>
                <IntroToTailwindCSS />
                <Comment
                  handleInsertNode={handleInsertNode}
                  handleEditNode={handleEditNode}
                  handleDeleteNode={handleDeleteNode}
                  comment={commentsData}
                />
              </>
            } />
          </Routes>
        </div>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
