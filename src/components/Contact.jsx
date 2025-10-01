import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const contactItems = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'mxd.dev.contact@gmail.com'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      content: 'View Profile',
      link: 'https://linkedin.com'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      content: 'View Profile',
      link: 'https://github.com/mixvd'
    },
    {
      icon: 'fab fa-discord',
      title: 'Discord',
      content: 'mixvd'
    }
  ];

  return (
    <section id="contact" className={isIntersecting ? 'active' : ''} ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Contact <span>Me</span></h2>
          <p>Interested in working together? Get in touch!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            {contactItems.map((item, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="contact-details">
                  <h3>{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.content}
                    </a>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
