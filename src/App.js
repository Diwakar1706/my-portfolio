import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './styles/App.css'; 

function App() {
  return (
    <div className="app-container">
      <img className="image-gradient-app" src="/gradient.png" alt="gradient background" />
      <div className="layer-blur-app"></div>

      <Header />
      
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
