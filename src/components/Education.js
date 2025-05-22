import React, { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Education.css';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  // Placeholder education data
  const educationData = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'XYZ University of Engineering & Management',
      year: '2020 - 2024',
      details: 'Relevant coursework: Data Structures, Algorithms, Web Development, Database Management, Operating Systems. CGPA: 8.5/10',
    },
    {
      degree: 'Higher Secondary Education (XII)',
      institution: 'ABC Senior Secondary School',
      year: '2018 - 2020',
      details: 'Stream: Science (Physics, Chemistry, Mathematics, Computer Science). Percentage: 90%',
    },
     {
      degree: 'Secondary Education (X)',
      institution: 'DEF High School',
      year: '2018',
      details: 'Percentage: 88%',
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

    // Animate timeline items
    const items = timelineRef.current.children;
    gsap.from(items, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });

  }, []);

  return (
    <Element name="education" className="section education-section" ref={sectionRef}>
      <h2>Education</h2>
      <div className="education-timeline" ref={timelineRef}>
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <span className="education-year">{edu.year}</span>
              <p className="education-details">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Education;
