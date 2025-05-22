import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/Header.css'; 

const Header = () => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' }, // Target for "Skills" section
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="app-header-react"> 
        <h1 className="logo-header-react">Diwakar Shaw</h1> 
        <nav className="main-nav-react"> 
          {navItems.map(item => (
            <ScrollLink
              key={item.id}
              to={item.id} // This 'to' prop matches the 'name' prop of the Element in each section
              spy={true} 
              smooth={true} 
              offset={-70} // Adjust if your header height changes or sticky behavior causes overlap
              duration={500} 
              className="nav-link-react" 
              activeClass="active" 
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>
        <div className="social-links-header-react"> 
          <a href="https://www.linkedin.com/in/diwakar-shaw-245567284/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="#0A66C2">
              <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.07 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7 0h4.78v2.53h.07c.66-1.25 2.28-2.53 4.7-2.53 5.04 0 5.97 3.3 5.97 7.58V24H17v-7.82c0-1.86-.03-4.25-2.59-4.25-2.6 0-3 2.04-3 4.14V24H7V8z"/>
            </svg>
          </a>
          <a href="https://github.com/Diwakar1706" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="#FFFFFF">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.02c-3.338.726-4.042-1.415-4.042-1.415-.546-1.388-1.334-1.757-1.334-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.24 1.838 1.24 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.467-1.334-5.467-5.933 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.403c1.02.005 2.045.138 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.63-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
    </header>
  );
};

export default Header;
