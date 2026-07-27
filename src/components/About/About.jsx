import React from 'react';
import './About.css';
import AboutImage from '../assets/chip.jpg';
import CountUp from '../CountUp/CountUp';
import { useLanguage } from '../../i18n/LanguageContext';

/* Feather-style stroke icons, drawn inside a shared 24px viewBox. */
const infoItems = [
  {
    key: 'Name',
    icon: (
      <>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
  },
  {
    key: 'Role',
    icon: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  },
  {
    key: 'Experience',
    icon: (
      <>
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <polyline points="17 6 23 6 23 12" />
      </>
    ),
  },
  {
    key: 'Location',
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    key: 'Email',
    href: 'mailto:shoib.jadallah@gmail.com',
    /* An address is an address in any language. */
    literal: 'shoib.jadallah@gmail.com',
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
  {
    key: 'Degree',
    icon: (
      <>
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
      </>
    ),
  },
];

function About() {
  const { t } = useLanguage();

  /* The Experience row interleaves two animated counters with copy, so it
     is composed here rather than pulled from the dictionary as one string. */
  const renderValue = (item) => {
    if (item.literal) return item.literal;
    if (item.key === 'Experience') {
      return (
        <>
          <CountUp end={3} suffix="+" /> {t('about.valueExperienceYears')}{' '}
          <CountUp end={5} delay={150} /> {t('about.valueExperienceApps')}
        </>
      );
    }
    return t(`about.value${item.key}`);
  };

  return (
    <section className="about ambient" id="about">
      <div className="about__container section">
        <div className="about__image-wrapper">
          <div className="about__image-border"></div>
          <img className="about__image" src={AboutImage} alt={t('about.valueName')} />
        </div>

        <div className="about__content">
          <span className="section-label">{t('about.label')}</span>
          <h2 className="section-title">
            {t('about.titleLead')}{' '}
            <span className="gradient-text">{t('about.titleAccent')}</span>
          </h2>
          <p className="about__text">{t('about.p1')}</p>
          <p className="about__text">{t('about.p2')}</p>
          <p className="about__text">{t('about.p3')}</p>

          <div className="about__info-grid">
            {infoItems.map((item) => {
              const Row = item.href ? 'a' : 'div';
              return (
                <Row
                  key={item.key}
                  className="about__info-item"
                  {...(item.href ? { href: item.href } : {})}
                >
                  <span className="about__info-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {item.icon}
                    </svg>
                  </span>
                  <span className="about__info-text">
                    <span className="about__info-label">{t(`about.label${item.key}`)}</span>
                    <span className="about__info-value">{renderValue(item)}</span>
                  </span>
                </Row>
              );
            })}
          </div>

          <div className="about__actions">
            <a href="#contact" className="about__cta">
              {t('about.ctaContact')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#projects" className="about__cta about__cta--ghost">
              {t('about.ctaWork')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
