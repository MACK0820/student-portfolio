import React, { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle.jsx'
import './Navigation.css'

function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
      const offset = 110; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'background', 'achievements', 'projects', 'references'];
      const scrollPosition = window.scrollY + 200; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <ThemeToggle />
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="nav-logo">
            <span className="logo-text">PORTFOLIO</span>
            <span className="logo-accent">.</span>
          </a>
        </div>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#background"
              onClick={(e) => scrollToSection(e, 'background')}
              className={`nav-link ${activeSection === 'background' ? 'active' : ''}`}
            >
              BACKGROUND
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#achievements"
              onClick={(e) => scrollToSection(e, 'achievements')}
              className={`nav-link ${activeSection === 'achievements' ? 'active' : ''}`}
            >
              ACHIEVEMENTS
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            >
              PROJECTS
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#references"
              onClick={(e) => scrollToSection(e, 'references')}
              className={`nav-link ${activeSection === 'references' ? 'active' : ''}`}
            >
              REFERENCES
            </a>
          </li>
        </ul>

        <div className="social-links">
          <a
            href="https://www.facebook.com/kei.ash"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            f
          </a>
          <a
            href="https://www.linkedin.com/in/kerstein-ashby-san-pedro-b4b8a2360/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            in
          </a>
        </div>

        <button 
          className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navigation