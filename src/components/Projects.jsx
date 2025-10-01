import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { projects } from '../data/projectData';

const Projects = ({ onViewDetails }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const handleProjectClick = (project) => {
    if (project.status === 'coming-soon') {
      return; // Don't open modal for coming soon projects
    }
    onViewDetails(project.id);
  };

  const getProjectStatus = (project) => {
    switch (project.category) {
      case 'frontend':
        return { label: 'Frontend', color: '#10b981' };
      case 'fullstack':
        return { label: 'Full Stack', color: '#3b82f6' };
      case 'mobile':
        return { label: 'Mobile', color: '#8b5cf6' };
      case 'upcoming':
        return { label: 'Coming Soon', color: '#6b7280' };
      default:
        return { label: 'Project', color: '#6b7280' };
    }
  };

  return (
    <section id="projects" className={isIntersecting ? 'active' : ''} ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Recent <span>Projects</span></h2>
          <p>A showcase of my web development work and personal projects</p>
        </div>

        <div className="projects-grid-simple">
          {projects.map((project) => {
            const status = getProjectStatus(project);
            const isComingSoon = project.status === 'coming-soon';
            
            return (
              <div 
                key={project.id} 
                className={`project-card-simple ${isComingSoon ? 'coming-soon' : ''}`}
                onClick={() => handleProjectClick(project)}
                style={{ cursor: isComingSoon ? 'default' : 'pointer' }}
              >
                <div className="project-image-simple">
                  <div className={`project-thumbnail-dynamic project-thumbnail-${project.category}`}>
                    <div className="project-thumbnail-content">
                      <div className="project-thumbnail-icon"></div>
                      <div className="project-thumbnail-title">{project.title}</div>
                      <div className="project-thumbnail-category">{status.label}</div>
                    </div>
                    {!isComingSoon && (
                      <div className="project-hover-overlay">
                        <div className="view-project-btn">
                          <i className="fas fa-eye"></i>
                          <span>View Project</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="project-status-badge" style={{ '--status-color': status.color }}>
                    {status.label}
                  </div>
                </div>
                
                <div className="project-info-simple">
                  <h3>{project.title}</h3>
                  <div className="project-date">{project.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;