import React from 'react';
import { Element } from 'react-scroll';
import '../styles/About.css'; 

const About = () => {
  return (
    <Element name="about" className="section about-section-react">
        {/* This div contains the main textual and image content */}
        <div className="about-main-content-wrapper">
            <img 
                src="/diwakar-pro2.jpg" 
                alt="Diwakar Shaw" 
                className="about-profile-image-react" 
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/240x240/333/fff?text=Profile+Img"; }}
            /> 
            
            <div className="about-text-details-react">
                <div className="about-tag-box-react">
                    <div className="about-tag-react">Hi, I am Diwakar Shaw</div>
                </div>
                <h1>FULL STACK <br/>DEVELOPER</h1>
                <p className="about-description-react">
                    I'm a full-stack developer with strong DSA problem-solving skills,
                    passionate about building scalable and efficient web applications.
                    I enjoy turning ideas into real-world projects using modern technologies.
                </p>
                <div className="about-buttons-react">
                    <a 
                        href="/resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-secondary" 
                    >
                        Get Resume &gt;
                    </a>
                    <a 
                        href="#contact" // Scrolls to contact section
                        className="btn btn-primary" 
                    >
                        Hire me &gt;
                    </a>
                </div>
            </div>
        </div>
      
        {/* Robot viewer is a direct child of about-section-react for absolute positioning context */}
        <spline-viewer 
            class="about-robot-3d-react" // This class will have the absolute positioning
            url="https://prod.spline.design/BOiX4unPLVofAfEz/scene.splinecode"
        ></spline-viewer>
    </Element>
  );
};

export default About;
