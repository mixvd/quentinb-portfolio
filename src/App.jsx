import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { useScrollPosition } from './hooks/useScrollPosition';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import Particles from './components/Particles';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const sections = ['home', 'projects', 'skills', 'about', 'contact'];
    const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
    
    let currentSection = 'home';
    
    for (let i = sectionElements.length - 1; i >= 0; i--) {
      const section = sectionElements[i];
      const sectionTop = section.offsetTop - 100;
      
      if (scrollPosition >= sectionTop) {
        currentSection = section.id;
        break;
      }
    }
    
    setActiveSection(currentSection);
  }, [scrollPosition, isLoading]);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewDetails = (projectId) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Particles />
        <Header 
          activeSection={activeSection} 
          onNavClick={handleNavClick}
        />
        <main>
          <Hero onNavClick={handleNavClick} />
          <Projects 
            onViewDetails={handleViewDetails}
          />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
        
        {selectedProject && (
          <ProjectModal 
            projectId={selectedProject}
            onClose={closeModal}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
