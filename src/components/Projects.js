import React, { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);
  projectsRef.current = [];

  // Placeholder project data - Replace with your actual projects
  const projectData = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform with user authentication, product listings, cart functionality, and payment integration.',
      imageUrl: 'https://placehold.co/600x400/333/fff?text=Project+1', // Replace with actual image path or URL
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      liveLink: '#',
      repoLink: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool allowing users to create, assign, and track tasks within teams.',
      imageUrl: 'https://placehold.co/600x400/444/fff?text=Project+2',
      techStack: ['Vue.js', 'Firebase', 'Vuetify'],
      liveLink: '#',
      repoLink: '#',
    },
    {
      title: 'Portfolio Website V1',
      description: 'My previous personal portfolio website built with HTML, CSS, and vanilla JavaScript, showcasing earlier projects.',
      imageUrl: 'https://placehold.co/600x400/555/fff?text=Project+3',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      liveLink: '#',
      repoLink: '#',
    },
  ];
  
  useEffect(() => {
    gsap.fromTo(sectionRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );

    projectsRef.current.forEach((el, index) => {
        gsap.fromTo(el,
            { opacity: 0, scale: 0.9, y: 30 },
            { opacity: 1, scale: 1, y: 0, duration: 0.6, delay: index * 0.2, ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%', // Start animation when 85% of the element is visible
                    toggleActions: 'play none none none'
                }
            }
        );
    });

  }, []);

  const addToRefs = el => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  return (
    <Element name="projects" className="section projects-section" ref={sectionRef}>
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card" ref={addToRefs}>
            <div className="project-image-container">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="project-image"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/777/eee?text=Image+Error"; }}
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.liveLink !== '#' && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-btn">View Live</a>}
                {project.repoLink !== '#' && <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary project-btn">View Code</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Projects;
