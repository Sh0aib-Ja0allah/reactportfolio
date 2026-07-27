import React from 'react';
import './About.css';
import AboutImage from '../assets/chip.jpg';
import CountUp from '../CountUp/CountUp';

/* Feather-style stroke icons, drawn inside a shared 24px viewBox. */
const infoItems = [
  {
    label: 'Name',
    value: 'Shoaib Jadallah',
    icon: (
      <>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
  },
  {
    label: 'Role',
    value: 'Full Stack Developer',
    icon: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  },
  {
    label: 'Experience',
    value: (
      <>
        <CountUp end={3} suffix="+" /> years, <CountUp end={5} delay={150} /> apps shipped
      </>
    ),
    icon: (
      <>
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <polyline points="17 6 23 6 23 12" />
      </>
    ),
  },
  {
    label: 'Location',
    value: 'Nablus, Palestine',
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    label: 'Email',
    value: 'shoib.jadallah@gmail.com',
    href: 'mailto:shoib.jadallah@gmail.com',
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
  {
    label: 'Degree',
    value: 'B.Sc. Computer Systems Engineering',
    icon: (
      <>
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
      </>
    ),
  },
];

function About() {
  return (
    <section className="about ambient" id="about">
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
            Full Stack Developer with a Computer Systems Engineering background, building
            cross-platform mobile and web applications end to end. I hold a B.Sc. in Computer
            Systems Engineering from the Arab American University.
          </p>
          <p className="about__text">
            At MENA Talents and aba agency I've shipped production apps to the App Store and
            Google Play — a golf social platform, a creative agency's internal operations app,
            and a mentor–mentee marketplace — along with the React admin portals behind them.
            I work mainly in React Native, ReactJS, and TypeScript, and contribute across the
            stack in ASP.NET Core and Laravel.
          </p>
          <p className="about__text">
            Alongside client work I'm building Custvice, my own two-sided marketplace product.
            I thrive in Agile teams and care most about shipping software people actually use.
          </p>

          <div className="about__info-grid">
            {infoItems.map((item) => {
              const Row = item.href ? 'a' : 'div';
              return (
                <Row
                  key={item.label}
                  className="about__info-item"
                  {...(item.href ? { href: item.href } : {})}
                >
                  <span className="about__info-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {item.icon}
                    </svg>
                  </span>
                  <span className="about__info-text">
                    <span className="about__info-label">{item.label}</span>
                    <span className="about__info-value">{item.value}</span>
                  </span>
                </Row>
              );
            })}
          </div>

          <div className="about__actions">
            <a href="#contact" className="about__cta">
              Let's Work Together
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#projects" className="about__cta about__cta--ghost">
              See my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
