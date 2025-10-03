import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { experiencesData, experienceTypes } from '../data/experiencesData';

const Experiences = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const [activeType, setActiveType] = useState('work');

  const handleTypeChange = (type) => {
    setActiveType(type);
  };

  const filteredExperiences = experiencesData.filter(exp => exp.type === activeType);
  const currentTypeInfo = experienceTypes[activeType];

  return (
    <section id="experiences" className={isIntersecting ? 'active' : ''} ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>My <span>Experiences</span></h2>
          <p>Professional journey and educational background</p>
        </div>

        <div className="experiences-content">
          {/* Type Filter */}
          <div className="experience-types">
            {Object.entries(experienceTypes).map(([type, info]) => (
              <button
                key={type}
                className={`experience-type-btn ${activeType === type ? 'active' : ''}`}
                onClick={() => handleTypeChange(type)}
                style={{ '--type-color': info.color }}
              >
                <i className={info.icon}></i>
                <span>{info.title}</span>
              </button>
            ))}
          </div>

          {/* Experiences Timeline */}
          <div className="experiences-timeline">
            <div className="timeline-header">
              <h3>{currentTypeInfo.title}</h3>
              <p>{filteredExperiences.length} {filteredExperiences.length === 1 ? 'experience' : 'experiences'} found</p>
            </div>

            <div className="timeline-container">
              {filteredExperiences.map((experience, index) => (
                <div 
                  key={experience.id} 
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                >
                  <div className="timeline-marker">
                    <i className={currentTypeInfo.icon}></i>
                  </div>
                  
                  <div className="timeline-content">
                    <div className="experience-card">
                      <div className="experience-header">
                        <h4 className="experience-title">{experience.title}</h4>
                        <div className="experience-company">{experience.company}</div>
                        <div className="experience-period">
                          <i className="fas fa-calendar-alt"></i>
                          {experience.period}
                        </div>
                        <div className="experience-location">
                          <i className="fas fa-map-marker-alt"></i>
                          {experience.location}
                        </div>
                      </div>
                      
                      <div className="experience-description">
                        <p>{experience.description}</p>
                      </div>
                      
                      <div className="experience-technologies">
                        <h5>Technologies Used:</h5>
                        <div className="tech-tags">
                          {experience.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
