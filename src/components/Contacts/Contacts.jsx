import React, { useRef } from 'react';
import './Contacts.css';
import { useLanguage } from '../../i18n/LanguageContext';

function Contacts() {
  const { t } = useLanguage();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('massage');

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:shoib.jadallah@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact ambient" id="contact">
      <div className="contact__container section">
        <div className="contact__header">
          <span className="section-label">{t('contact.label')}</span>
          <h2 className="section-title">
            {t('contact.titleLead')}{' '}
            <span className="gradient-text">{t('contact.titleAccent')}</span>
          </h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__info-card glow-border">
              <div className="contact__info-icon">&#9993;</div>
              <div>
                <h4 className="contact__info-title">{t('contact.email')}</h4>
                <a href="mailto:shoib.jadallah@gmail.com" className="contact__info-value">
                  shoib.jadallah@gmail.com
                </a>
              </div>
            </div>

            <div className="contact__info-card glow-border">
              <div className="contact__info-icon">&#9742;</div>
              <div>
                <h4 className="contact__info-title">{t('contact.phone')}</h4>
                <a href="https://api.whatsapp.com/send?phone=972512060643" className="contact__info-value">
                  +972 512 060 643
                </a>
              </div>
            </div>

            <div className="contact__info-card glow-border">
              <div className="contact__info-icon">&#9906;</div>
              <div>
                <h4 className="contact__info-title">{t('contact.location')}</h4>
                <span className="contact__info-value">{t('contact.locationValue')}</span>
              </div>
            </div>

            <div className="contact__socials">
              <a href="https://github.com/Sh0aib-Ja0allah" className="contact__social glow-border" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://ps.linkedin.com/in/shoaib-jadallah-0a1595230" className="contact__social glow-border" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100082226078414" className="contact__social glow-border" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.upwork.com/freelancers/~01d242296dda304529" className="contact__social glow-border" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>
              </a>
              <a href="https://t.me/Shoaib_Ja0allah" className="contact__social glow-border" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>
          </div>

          <form ref={form} className="contact__form" onSubmit={sendEmail}>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="name">{t('contact.formName')}</label>
                {/* Wrapper carries the glow — inputs cannot host pseudo-elements. */}
                <span className="contact__form-field glow-border">
                  <input
                    className="contact__form-input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t('contact.formNamePlaceholder')}
                    required
                  />
                </span>
              </div>
              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="email">{t('contact.formEmail')}</label>
                <span className="contact__form-field glow-border">
                  <input
                    className="contact__form-input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t('contact.formEmailPlaceholder')}
                    required
                  />
                </span>
              </div>
            </div>
            <div className="contact__form-group">
              <label className="contact__form-label" htmlFor="massage">{t('contact.formMessage')}</label>
              <span className="contact__form-field contact__form-field--area glow-border">
                <textarea
                  className="contact__form-input contact__form-textarea"
                  id="massage"
                  name="massage"
                  rows="6"
                  placeholder={t('contact.formMessagePlaceholder')}
                  required
                ></textarea>
              </span>
            </div>
            <button type="submit" className="contact__form-btn">
              {t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
