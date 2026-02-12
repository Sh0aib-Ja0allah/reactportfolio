import React from 'react';
import './Hero.css';
import BgImage from '../assets/Background.jpg';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg-image" style={{ backgroundImage: `url(${BgImage})` }}></div>
      <div className="hero__bg-grid"></div>
      <div className="hero__glow hero__glow--1"></div>
      <div className="hero__glow hero__glow--2"></div>

      <div className="hero__content">
        <span className="hero__greeting">Hello world, I'm</span>
        <h1 className="hero__name">
          Shoaib <span className="gradient-text">Jadallah</span>
        </h1>
        <h2 className="hero__title">Computer Systems Engineer & Front-End Developer</h2>
        <p className="hero__description">
          Skilled in ReactJS & React Native, with hands-on experience building
          scalable, user-centric web and mobile applications. Passionate about
          creating clean, performant, and accessible digital experiences.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="hero__btn hero__btn--primary">
            Get In Touch
          </a>
          <a href="#experience" className="hero__btn hero__btn--secondary">
            View My Work
          </a>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">3+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">9+</span>
            <span className="hero__stat-label">Projects Built</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">3</span>
            <span className="hero__stat-label">Companies</span>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll">
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-dot"></div>
        </div>
        <span>Scroll down</span>
      </a>
    </section>
  );
}

export default Hero;
