import React from 'react';

const Hero = ({ onNavClick }) => {

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '10+', label: 'Web Projects' },
    { number: '20+', label: 'Technologies' }
  ];

  return (
    <section id="home" className="active">
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <h1>Full-Stack <span>Developer</span></h1>
            <p>Creating modern, responsive, and user-friendly web applications with cutting-edge technologies.</p>
            <div className="hero-cta">
              <a 
                href="#projects" 
                className="btn primary"
                onClick={(e) => { e.preventDefault(); onNavClick('projects'); }}
              >
                View My Projects
              </a>
              <a 
                href="#contact" 
                className="btn secondary"
                onClick={(e) => { e.preventDefault(); onNavClick('contact'); }}
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat">
                <span className="number">{stat.number}</span>
                <span className="label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div 
        className="scroll-indicator"
        onClick={() => onNavClick('projects')}
      >
        <span>Scroll Down</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default Hero;
