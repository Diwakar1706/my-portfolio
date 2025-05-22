import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './styles/App.css'; // Main App styles

function App() {
  return (
    <div className="app-container">
      {/* Background elements: These should be behind all other content. */}
      {/* Ensure 'gradient.png' is in your 'public' folder and the path is correct. */}
      <img className="image-gradient-app" src="/gradient.png" alt="gradient background" />
      <div className="layer-blur-app"></div>

      <Header />
      
      {/* Main content container */}
      {/* If the screen is black, it's highly probable that the sections below (About, Skills, etc.)
          are being rendered with opacity: 0 due to their initial CSS state in App.css 
          and their respective GSAP animations (responsible for changing opacity to 1) 
          are not firing correctly. 
          Please double-check the GSAP and ScrollTrigger setup in each child component 
          (About.js, Skills.js, Projects.js, Education.js, Contact.js) 
          and ensure there are no console errors originating from them.
      */}
      <div className="container-app"> 
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
