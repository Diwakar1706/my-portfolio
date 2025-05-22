import React from 'react'; 
import { Element } from 'react-scroll'; // For react-scroll navigation target
import '../styles/Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'React & Redux', level: 85 },
    { name: 'Node.js & Express', level: 80 },
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'Python', level: 75 },
    { name: 'SQL & NoSQL (MongoDB)', level: 70 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'RESTful APIs', level: 80 },
    { name: 'DSA', level: 70 },
  ];

  return (
    // The 'name' prop here ("skills") is the target for the ScrollLink in Header.js
    <Element name="skills" className="section skills-section-react"> 
      <h2>My Skills</h2>
      <div className="skills-grid-react"> 
        {skillsData.map((skill) => (
          <div key={skill.name} className="skill-item-react"> 
            <h3 className="skill-name-react">{skill.name}</h3>
            <div className="skill-level-container-react">
              <div 
                className="skill-level-bar-react" 
                style={{ width: `${skill.level}%` }} 
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span className="skill-percentage-react">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Skills;
