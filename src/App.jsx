import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

import Navbar from './Navbar/Navbar';
import About from './About/About';
import Projects from './Projects/Projects';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import NotFound from './404/404';

function AnimatedRoutes() {
  const location = useLocation(); // Hook to get the current location

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}  // Ensure animation is tied to route changes
        classNames="fade"   // Class name for CSS transitions
        timeout={300}       // Animation duration
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
