import React from 'react'; 
import { Element } from 'react-scroll';
import '../styles/Projects.css';

const Projects = () => {
  const projectData = [
    {
      id: 'proj1-id-projects', 
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform with user authentication, product listings, cart functionality, and payment integration.',
      imageUrl: 'https://placehold.co/600x400/333/fff?text=Project+Alpha', 
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      liveLink: '#', 
      repoLink: '#', 
    },
    {
      id: 'proj2-id-projects',
      title: 'My Portfolio',
      description: '"A responsive and visually appealing personal portfolio website built using React, CSS, and JavaScript to showcase my skills, projects, and Education',
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.47WiAu3aBCrS3iBPO1Fd8gHaGS&pid=Api&P=0&h=180',
      techStack: ['React', 'css', 'javascript'],
      liveLink: '#',
      repoLink: '#',
    },
    {
      id: 'proj3-id-projects',
      title: 'Portfolio Website V1',
      description: 'My previous personal portfolio website built with HTML, CSS, and vanilla JavaScript, showcasing earlier projects.',
      imageUrl: 'https://placehold.co/600x400/555/fff?text=Project+Gamma',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      liveLink: '#',
      repoLink: '#',
    },
  ];
  
  return (
    <Element name="projects" className="section projects-section-react"> {/* Added specific class */}
      <h2>My Projects</h2>
      <div className="projects-grid-react"> {/* Added specific class */}
        {projectData.map((project) => (
          <div key={project.id} className="project-card-react"> {/* Added specific class */}
            <div className="project-image-container-react">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="project-image-react"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/777/eee?text=Image+Error"; }}
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
              <div className="project-links-react">
                {project.liveLink && project.liveLink !== '#' && 
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-btn-react">View Live</a>}
                {project.repoLink && project.repoLink !== '#' && 
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary project-btn-react">View Code</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Projects;
