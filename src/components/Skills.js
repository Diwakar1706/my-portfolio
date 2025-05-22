import React, { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const skillItemsRef = useRef([]);
  skillItemsRef.current = []; // Reset on re-render

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
    
    skillItemsRef.current.forEach((el, index) => {
        gsap.fromTo(el,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.5, delay: index * 0.1, ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            }
        );
        // Animate progress bar
        const progressBar = el.querySelector('.skill-level-bar');
        if(progressBar) {
            gsap.fromTo(progressBar,
                { width: '0%' },
                { width: progressBar.style.width, duration: 1, delay: index * 0.1 + 0.3, ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }
    });

  }, [skillsData]); // Rerun if skillsData changes, though it's static here

  const addToRefs = el => {
    if (el && !skillItemsRef.current.includes(el)) {
      skillItemsRef.current.push(el);
    }
  };

  return (
    <Element name="skills" className="section skills-section" ref={sectionRef}>
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item" ref={addToRefs}>
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-level-container">
              <div 
                className="skill-level-bar" 
                style={{ width: `${skill.level}%` }} // Set target width for GSAP
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Skills;
