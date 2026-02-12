import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <a href="#home" className="footer__logo">
            <span className="footer__logo-path">~/</span>
            <span className="footer__logo-name">sj</span>
            <span className="footer__logo-prompt"> $</span>
            <span className="footer__logo-cursor"></span>
          </a>
          <nav className="footer__nav">
            <a href="#home" className="footer__nav-link">Home</a>
            <a href="#about" className="footer__nav-link">About</a>
            <a href="#experience" className="footer__nav-link">Experience</a>
            <a href="#skills" className="footer__nav-link">Skills</a>
            <a href="#projects" className="footer__nav-link">Projects</a>
            <a href="#contact" className="footer__nav-link">Contact</a>
          </nav>
        </div>
        <div className="footer__divider"></div>
        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Shoaib Jadallah. All rights reserved.
          </p>
          <p className="footer__credit">
            Built with React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
