import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home">Quentin <span>B.</span></a>
          </div>
          <div className="social-links">
            <a href="mailto:mxd.dev.contact@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/mixvd" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://discord.com/users/mixvd" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord"></i>
            </a>
          </div>
          <p>&copy; 2025 Quentin B. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
