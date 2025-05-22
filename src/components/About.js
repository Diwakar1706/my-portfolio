import React, { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/About.css'; // Styles for About section

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const robotRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%', // When the top of the trigger hits 80% of the viewport height
        toggleActions: 'play none none none', // Play animation on enter
      }
    });

    tl.fromTo(sectionRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
    
    // Optional: Animate elements within the About section if desired
    // For example, stagger animation for text, image, and robot
    if (contentRef.current && imageRef.current && robotRef.current) {
        gsap.from([contentRef.current, imageRef.current, robotRef.current], {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
            }
        });
    }


  }, []);

  return (
    <Element name="about" className="section about-section" ref={sectionRef}>
      <div className="about-main-section"> {/* This mirrors your original .main-section for layout */}
        {/* Text Content */}
        <main className="about-content" ref={contentRef}>
          <div className="tag-box-about">
            <div className="tag-about">Hi, I am Diwakar Shaw</div>
          </div>
          <h1 className="about-h1">FULL STACK <br />DEVELOPER</h1>
          <p className="description-about">
            I'm a full-stack developer with strong DSA problem-solving skills,
            passionate about building scalable and efficient web applications.
            I enjoy turning ideas into real-world projects using modern technologies.
          </p>
          <div className="buttons-about">
            <a href="#resume" className="btn btn-secondary">Get Resume &gt;</a> {/* Placeholder link */}
            <a href="#hire" className="btn btn-primary">Hire me &gt;</a> {/* Placeholder link */}
          </div>
        </main>

        {/* Profile Image */}
        <div className="profile-image-about" ref={imageRef}>
          <img src="/diwakar pro2.jpg" alt="Diwakar Shaw" />
        </div>

        {/* Robot - Ensure Spline Viewer script is in public/index.html */}
        <div className="robot-wrapper-about" ref={robotRef}>
          <spline-viewer url="https://prod.spline.design/BOiX4unPLVofAfEz/scene.splinecode"></spline-viewer>
        </div>
      </div>
    </Element>
  );
};

export default About;
