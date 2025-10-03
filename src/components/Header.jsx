import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Header = ({ activeSection, onNavClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const scrollPosition = useScrollPosition();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId) => {
    onNavClick(sectionId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('no-scroll');
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <>
      <header className={scrollPosition > 100 ? 'scrolled' : ''}>
        <div className="logo">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            Quentin <span>B.</span>
          </a>
        </div>
        
        <nav className="desktop-nav">
          <ul>
            {navItems.map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="theme-toggle" onClick={toggleTheme}>
          <i className={`fas fa-sun ${!isDarkMode ? 'active' : ''}`}></i>
          <i className={`fas fa-moon ${isDarkMode ? 'active' : ''}`}></i>
        </div>

        <div 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          {navItems.map(item => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-social">
          <a href="mailto:quentin.b@example.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://linkedin.com/in/quentinb" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/quentinb" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://discord.com/users/mixvd" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
