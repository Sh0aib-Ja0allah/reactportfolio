import React from 'react';
import './Hero.css';
import BgImage from '../assets/Background.jpg';
import CountUp from '../CountUp/CountUp';
import { useLanguage } from '../../i18n/LanguageContext';

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="hero__bg-image" style={{ backgroundImage: `url(${BgImage})` }}></div>
      <div className="hero__bg-grid"></div>
      <div className="hero__glow hero__glow--1"></div>
      <div className="hero__glow hero__glow--2"></div>

      <div className="hero__content">
        <span className="hero__greeting">{t('hero.greeting')}</span>
        <h1 className="hero__name">
          {t('about.valueName').split(' ')[0]}{' '}
          <span className="gradient-text">
            {t('about.valueName').split(' ').slice(1).join(' ')}
          </span>
        </h1>
        <h2 className="hero__title">{t('hero.title')}</h2>
        <p className="hero__description">{t('hero.description')}</p>
        <div className="hero__actions">
          <a href="#contact" className="hero__btn hero__btn--primary">
            {t('hero.getInTouch')}
          </a>
          <a href="#projects" className="hero__btn hero__btn--secondary">
            {t('hero.viewWork')}
          </a>
        </div>
        {/* Staggered so the three figures land one after another rather
            than ticking in unison. */}
        <div className="hero__stats">
          <div className="hero__stat">
            <CountUp className="hero__stat-number" end={3} suffix="+" delay={200} />
            <span className="hero__stat-label">{t('hero.statYears')}</span>
          </div>
          <div className="hero__stat">
            <CountUp className="hero__stat-number" end={5} suffix="+" delay={350} />
            <span className="hero__stat-label">{t('hero.statApps')}</span>
          </div>
          <div className="hero__stat">
            <CountUp className="hero__stat-number" end={3} delay={500} />
            <span className="hero__stat-label">{t('hero.statCompanies')}</span>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll">
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-dot"></div>
        </div>
        <span>{t('hero.scroll')}</span>
      </a>
    </section>
  );
}

export default Hero;
