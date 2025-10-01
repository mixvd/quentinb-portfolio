import React, { useEffect, useRef, useState } from 'react';
import { projectData } from '../data/projectData';

const ProjectModal = ({ projectId, onClose }) => {
  const modalRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projectData[projectId];

  const getProjectTechStack = (projectId) => {
    const techStacks = {
      'project-resonance': ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Discord API', 'PHP', 'MySQL'],
      'mxd-portfolio': ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      'coming-soon': ['TBA', 'TBA', 'TBA']
    };
    return techStacks[projectId] || ['HTML', 'CSS', 'JavaScript'];
  };


  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && e.target === modalRef.current) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const nextImage = () => {
    if (project && project.images) {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project && project.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [projectId]);

  if (!project) return null;

  const techStack = getProjectTechStack(projectId);

  return (
    <div className="modal active" ref={modalRef}>
      <div className="modal-content enhanced">
        <span className="modal-close" onClick={onClose}>&times;</span>
        
        <div className="modal-header">
          <div className="project-title-section">
            <h3>{project.title}</h3>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-image-container">
            <div className="image-slider">
              <div className="slider-main">
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="slider-image"
                />
                {project.images.length > 1 && (
                  <>
                    <button 
                      className="slider-btn prev-btn"
                      onClick={prevImage}
                      aria-label="Previous image"
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button 
                      className="slider-btn next-btn"
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </>
                )}
              </div>
              {project.images.length > 1 && (
                <div className="slider-thumbnails">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => goToImage(index)}
                    >
                      <img 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="project-details-grid">
            <div className="project-description">
              <h4>Project Overview</h4>
              <div 
                className="modal-description"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>

            <div className="project-info-sidebar">
              <div className="project-tech-stack">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <h4>Project Links</h4>
                <div className="link-buttons">
                  <a 
                    href={project.githubUrl || "#"} 
                    className="link-btn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                    View Code
                  </a>
                  <a 
                    href={project.demoUrl || "#"} 
                    className="link-btn secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
