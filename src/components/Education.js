import React from 'react'; 
import { Element } from 'react-scroll';
import '../styles/Education.css';

const Education = () => {
  const educationData = [
    {
      id: 'btech-edu-id-edu', 
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Lakshmi Narain College of Technology and Science',
      year: '2023 - 2027',
      details: 'Relevant coursework: Data Structures, Algorithms, Web Development, Database Management, Operating Systems. CGPA: 8/10',
    },
    {
      id: 'hsc-edu-id-edu',
      degree: 'Higher Secondary Education (XII)',
      institution: 'Kendriya Vidyalaya Sangathan',
      year: '2020 - 2022',
      details: 'Stream: Science (Physics, Chemistry, Mathematics, Computer Science). Percentage: 73%',
    },
     {
      id: 'ssc-edu-id-edu',
      degree: 'Secondary Education (X)',
      institution: 'Kendriya Vidyalaya Sangathan',
      year: '2020',
      details: 'Percentage: 86%',
    },
  ];

  return (
    <Element name="education" className="section education-section-react"> {/* Added specific class */}
      <h2>Education</h2>
      <div className="education-timeline-react"> {/* Added specific class */}
        {educationData.map((edu) => (
          <div key={edu.id} className="timeline-item-react">  {/* Added specific class */}
            <div className="timeline-content-react"> {/* Added specific class */}
              <h3 className="education-degree-react">{edu.degree}</h3>
              <p className="education-institution-react">{edu.institution}</p>
              <span className="education-year-react">{edu.year}</span>
              <p className="education-details-react">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Education;
