import React from 'react';
import { Element } from 'react-scroll';
import '../styles/Skills.css';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', logo: 'html5.svg' },
      { name: 'CSS3', logo: 'css3.svg' },
      { name: 'JavaScript', logo: 'javascript.svg' },
      { name: 'React', logo: 'react.svg' },
      { name: 'Redux', logo: 'redux.svg' },
      { name: 'Tailwind', logo: 'tailwindcss.svg' },
      { name: 'Next.js', logo: 'nextjs.svg' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', logo: 'nodejs.svg' },
      { name: 'MongoDB', logo: 'mongodb.svg' },
      { name: 'REST API', logo: 'api.svg' },
      { name: 'Firebase', logo: 'firebase.svg' },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'Python', logo: 'python.svg' },
      { name: 'C++', logo: 'cpp.svg' },
      { name: 'Java', logo: 'java.svg' },
      { name: 'JavaScript', logo: 'javascript.svg' },
      
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', logo: 'git.svg' },
      { name: 'GitHub', logo: 'github.svg' },
      { name: 'VS Code', logo: 'vscode.svg' },
      { name: 'SQL', logo: 'sql.svg' },
      { name: 'Postman', logo: 'postman.svg' },
      { name: 'Docker', logo: 'docker.svg' },
       { name: 'AWS', logo: 'aws.svg' },
    ],
  },
];

const Skills = () => {
  return (
    <Element name="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-ludo-grid">
        {skillsData.map((group, index) => (
          <div key={index} className="skill-box">
            <h3 className="category-title">{group.category}</h3>
            <div className="skills-matrix scrollable-matrix">
              {group.skills.map((skill, idx) => (
                <div key={idx} className="matrix-item">
                  <img
                    src={`/logos/${skill.logo}`}
                    alt={skill.name}
                    className="matrix-icon"
                  />
                  <span className="matrix-label">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Skills;
