import React, { useState, useEffect } from 'react';
import './Navbar.css';
import CV from '../assets/ShoaibJadallah\'s-CV.pdf';
import { useLanguage } from '../../i18n/LanguageContext';

/* No "Home" entry — the logo links to #home. */
const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
];

function Navbar({ theme, onToggleTheme }) {
  const { t, language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#home" className="navbar__logo" aria-label={t('nav.home')} onClick={closeMenu}>
          <span className="navbar__logo-path">~/</span>
          <span className="navbar__logo-name">sj</span>
          <span className="navbar__logo-prompt"> $</span>
          <span className="navbar__logo-cursor"></span>
        </a>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="navbar__link"
              onClick={closeMenu}
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <a href={CV} download className="navbar__cta" title={t('nav.downloadCv')}>
            <svg className="navbar__cta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="navbar__cta-label">{t('nav.cv')}</span>
          </a>
        </div>

        {/* Outside the links pill so they stay reachable on mobile without
            opening the drawer. */}
        <button
          type="button"
          className="navbar__lang"
          onClick={toggleLanguage}
          aria-label={t('common.switchLanguage')}
          title={t('common.switchLanguage')}
        >
          {/* Material "translate" glyph — a CJK character beside a Latin A. */}
          <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
          </svg>
          <span className="navbar__lang-label">{language === 'en' ? 'AR' : 'EN'}</span>
        </button>

        <button
          type="button"
          className="navbar__theme"
          onClick={onToggleTheme}
          aria-label={t(theme === 'dark' ? 'common.switchToLight' : 'common.switchToDark')}
          title={t(theme === 'dark' ? 'common.switchToLight' : 'common.switchToDark')}
        >
          {theme === 'dark' ? (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4.5" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
            </svg>
          )}
        </button>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={toggleMenu}
          aria-label={t('nav.toggleMenu')}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && <div className="navbar__overlay" onClick={closeMenu}></div>}
    </nav>
  );
}

export default Navbar;
