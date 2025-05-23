import React, { useState } from 'react';
import { Element } from 'react-scroll';
import '../styles/Projects.css';

// Importing local images
import netflixImage from '../assets/netflix.png';
import portfolioImage from '../assets/portfolio.png';
import aiCropImage from '../assets/aicrop.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      id: 'proj1-id-projects',
      title: 'Netflix Clone',
      description: 'A fully responsive Netflix clone with authentication, movie browsing, search, and video streaming capabilities.',
      image: netflixImage,
      techStack: ['React', 'Firebase', 'TMDB API', 'CSS'],
      liveLink: '#',
      repoLink: '#',
    },
    {
      id: 'proj2-id-projects',
      title: 'My Portfolio',
      description: 'A responsive and visually appealing personal portfolio website built using React, CSS, and JavaScript to showcase my skills, projects, and education.',
      image: portfolioImage,
      techStack: ['React', 'CSS', 'JavaScript'],
      liveLink: 'https://my-portfolio-five-delta-52.vercel.app',
      repoLink: 'https://github.com/Diwakar1706/my-portfolio',
    },
    {
      id: 'proj3-id-projects',
      title: 'AI Crop Disease Prediction',
      description: 'An AI-powered tool that predicts plant diseases from leaf images using deep learning and provides recommendations.',
      image: aiCropImage,
      techStack: ['Python', 'Flask', 'TensorFlow', 'React'],
      liveLink: 'https://diwakar1706.github.io/AI-CropTECH/',
      repoLink: 'https://github.com/Diwakar1706/AI-CropTECH',
    },
  ];

  return (
    <Element name="projects" className="section projects-section-react">
      <h2>My Projects</h2>
      <div className="projects-grid-react">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="project-card-react"
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image-container-react">
              <img
                src={project.image}
                alt={project.title}
                className="project-image-react"
              />
            </div>
            <div className="project-info-react">
              <h3 className="project-title-react">{project.title}</h3>
              <p className="project-description-react">{project.description}</p>
              <div className="project-tech-stack-react">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag-react">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-popup-overlay">
          <div className="project-popup-card">
            <button className="project-popup-close" onClick={() => setSelectedProject(null)}>✕</button>
            <div className="project-image-container-react">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="project-image-react"
              />
            </div>
            <div className="project-info-react">
              <h3 className="project-title-react">{selectedProject.title}</h3>
              <p className="project-description-react">{selectedProject.description}</p>
              <div className="project-tech-stack-react">
                {selectedProject.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag-react">{tech}</span>
                ))}
              </div>
              <div className="project-links-react">
                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-btn-react">View Live</a>
                <a href={selectedProject.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary project-btn-react">View Code</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Element>
  );
};

export default Projects;
