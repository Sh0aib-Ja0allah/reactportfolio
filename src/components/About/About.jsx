import React from 'react';
import './About.css';
import AboutImage from '../assets/chip.jpg';

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container section">
        <div className="about__image-wrapper">
          <div className="about__image-border"></div>
          <img className="about__image" src={AboutImage} alt="Shoaib Jadallah" />
        </div>

        <div className="about__content">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Turning ideas into <span className="gradient-text">digital reality</span>
          </h2>
          <p className="about__text">
            Motivated Computer Systems Engineer and Front-End Developer with a strong
            foundation in modern web and mobile technologies. I hold a Bachelor's degree
            in Computer Systems Engineering from Arab American University.
          </p>
          <p className="about__text">
            With hands-on experience at companies like GolfSnap and aba agency, I specialize
            in building cross-platform mobile apps with React Native and scalable web
            applications with ReactJS. I thrive in Agile environments and love collaborating
            with cross-functional teams to deliver user-centric solutions.
          </p>

          <div className="about__info-grid">
            <div className="about__info-item">
              <span className="about__info-label">Name</span>
              <span className="about__info-value">Shoaib Jadallah</span>
            </div>
            <div className="about__info-item">
              <span className="about__info-label">Location</span>
              <span className="about__info-value">Nablus, Palestine</span>
            </div>
            <div className="about__info-item">
              <span className="about__info-label">Email</span>
              <span className="about__info-value">shoib.jadallah@gmail.com</span>
            </div>
            <div className="about__info-item">
              <span className="about__info-label">Degree</span>
              <span className="about__info-value">B.Sc. Computer Systems Engineering</span>
            </div>
          </div>

          <a href="#contact" className="about__cta">
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
