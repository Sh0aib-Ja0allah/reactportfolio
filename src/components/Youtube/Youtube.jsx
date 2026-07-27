import React from 'react';
import './Youtube.css';
import { YoutubeData } from './YoutubeData';
import { useLanguage } from '../../i18n/LanguageContext';

function Youtube() {
  const { t } = useLanguage();

  return (
    <section className="tutorials" id="tutorials">
      <div className="tutorials__container section">
        <div className="tutorials__header">
          <span className="section-label">{t('tutorials.label')}</span>
          <h2 className="section-title">
            {t('tutorials.titleLead')}{' '}
            <span className="gradient-text">{t('tutorials.titleAccent')}</span>
          </h2>
          <p className="section-subtitle">{t('tutorials.subtitle')}</p>
        </div>

        <div className="tutorials__grid">
          {YoutubeData.map((video, i) => (
            <div className="tutorials__card glow-border" key={i}>
              <div className="tutorials__card-thumb">
                <img src={video.image} alt={video.alt} />
                <a
                  href={video.playSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tutorials__card-play"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
              <div className="tutorials__card-content">
                <span className="tutorials__card-date">{video.date}</span>
                <h3 className="tutorials__card-title">{video.title}</h3>
                {video.description && (
                  <p className="tutorials__card-desc">{video.description}</p>
                )}
                <div className="tutorials__card-techs">
                  {video.technologies.map((tech, j) => (
                    <span className="tutorials__card-tech" key={j}>{tech}</span>
                  ))}
                </div>
                <div className="tutorials__card-actions">
                  <a
                    href={video.playSource}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tutorials__card-link"
                  >
                    {t('tutorials.watch')}
                  </a>
                  <a
                    href={video.githubSource}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tutorials__card-link tutorials__card-link--secondary"
                  >
                    {video.githubButton}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tutorials__channel">
          <a
            href="https://www.youtube.com/@Shoaib.Ja0allah"
            target="_blank"
            rel="noopener noreferrer"
            className="tutorials__channel-link"
          >
            {t('tutorials.channel')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Youtube;
