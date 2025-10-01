import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const expertiseItems = [
    {
      icon: 'fas fa-code',
      title: 'Front-End Dev',
      description: 'Front-end dev includes creating the user interface and interactive elements of websites and apps.'
    },
    {
      icon: 'fas fa-palette',
      title: 'UI/UX Design',
      description: 'UI/UX design focuses on creating user-friendly interfaces and experiences that are visually appealing and intuitive.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Development',
      description: 'Mobile development involves creating applications for mobile devices, ensuring they are responsive and user-friendly.'
    },
    {
      icon: 'fas fa-server',
      title: 'Back-End Dev',
      description: 'Back-end dev involves server-side logic, database management, and ensuring smooth data flow between the server and client.'
    }
  ];

  return (
    <section id="about" className={isIntersecting ? 'active' : ''} ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>About <span>Me</span></h2>
          <p>My journey and expertise in web development</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="lead-text">
              I'm a passionate full-stack developer with over 5 years of experience creating
              modern web applications and mobile solutions.
            </p>

            <div className="expertise">
              {expertiseItems.map((item, index) => (
                <div key={index} className="expertise-item">
                  <div className="expertise-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="expertise-details">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p>
              My goal is to create applications that not only function flawlessly but also provide
              exceptional user experiences with clean code, modern design, and optimal performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
