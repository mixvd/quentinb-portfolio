import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { skillsData, skillCategories } from '../data/skillsData';

const Skills = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('frontend');

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const currentSkills = skillsData[activeCategory];

  return (
    <section id="skills" className={isIntersecting ? 'active' : ''} ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Skills & <span>Technologies</span></h2>
          <p>Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="skills-content">
          {/* Category Tabs */}
          <div className="skills-categories">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={`skill-category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
                style={{ '--category-color': category.color }}
              >
                <i className={category.icon}></i>
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            <div className="skills-header">
              <h3>{currentSkills.title}</h3>
              <p>{currentSkills.description}</p>
            </div>
            
            <div className="technologies-grid">
              {currentSkills.technologies.map((tech, index) => (
                <div 
                  key={tech.name} 
                  className="tech-card"
                  style={{ '--tech-color': tech.color }}
                >
                  <div className="tech-icon">
                    <i className={tech.icon}></i>
                  </div>
                  <div className="tech-info">
                    <h4>{tech.name}</h4>
                    <p className="tech-description">{tech.description}</p>
                    <div className="tech-level">
                      <span className={`level-badge level-${tech.level.toLowerCase()}`}>
                        {tech.level}
                      </span>
                    </div>
                  </div>
                  <div className="tech-glow"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
