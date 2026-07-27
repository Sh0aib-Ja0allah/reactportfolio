import React from 'react';
import './Footer.css';
import CV from '../assets/ShoaibJadallah\'s-CV.pdf';
import { useLanguage } from '../../i18n/LanguageContext';

const footerLinks = ['about', 'experience', 'skills', 'projects', 'contact'];

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <a href="#home" className="footer__logo" aria-label={t('nav.home')}>
            <span className="footer__logo-path">~/</span>
            <span className="footer__logo-name">sj</span>
            <span className="footer__logo-prompt"> $</span>
            <span className="footer__logo-cursor"></span>
          </a>
          <nav className="footer__nav">
            {footerLinks.map((key) => (
              <a key={key} href={`#${key}`} className="footer__nav-link">
                {t(`nav.${key}`)}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer__divider"></div>
        <div className="footer__bottom">
          <p className="footer__copy">
            {t('footer.rights', { year: new Date().getFullYear() })}
          </p>
          <a
            className="footer__upwork"
            href="https://www.upwork.com/freelancers/~01d242296dda304529"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>
            {t('footer.upwork')}
          </a>
          <a href={CV} download className="footer__cv" title={t('nav.downloadCv')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {t('footer.downloadCv')}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
