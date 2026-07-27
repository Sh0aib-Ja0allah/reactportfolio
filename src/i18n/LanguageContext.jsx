import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export const LANGUAGES = {
  en: { code: 'en', dir: 'ltr', label: 'English', short: 'EN' },
  ar: { code: 'ar', dir: 'rtl', label: 'العربية', short: 'AR' },
};

/* The inline script in index.html resolves the language before first paint,
   so read it back off the element rather than deciding a second time. */
const getInitialLanguage = () => {
  const applied = document.documentElement.getAttribute('lang');
  return applied === 'ar' ? 'ar' : 'en';
};

/* Walks a dot path such as "about.p1" and returns whatever sits there —
   a string for copy, an array for lists. Falls back to English so a key
   that is missing a translation still renders real text, then to the key
   itself so a typo is visible rather than silent. */
const resolve = (language, path) => {
  const walk = (tree) =>
    path.split('.').reduce((node, key) => (node == null ? undefined : node[key]), tree);

  const value = walk(translations[language]);
  if (value !== undefined) return value;

  const fallback = walk(translations.en);
  return fallback !== undefined ? fallback : path;
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);
  const dir = LANGUAGES[language].dir;

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', dir);
    try {
      window.localStorage.setItem('language', language);
    } catch (e) {
      /* Storage can be unavailable in private mode — the language still applies. */
    }
  }, [language, dir]);

  const toggleLanguage = useCallback(
    () => setLanguage((current) => (current === 'en' ? 'ar' : 'en')),
    []
  );

  /* Interpolates {token} placeholders, e.g. t('footer.rights', { year: 2026 }). */
  const t = useCallback(
    (path, vars) => {
      const value = resolve(language, path);
      if (!vars || typeof value !== 'string') return value;
      return Object.keys(vars).reduce(
        (text, key) => text.replace(new RegExp(`\\{${key}\\}`, 'g'), vars[key]),
        value
      );
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, dir, t, toggleLanguage, isArabic: language === 'ar' }),
    [language, dir, t, toggleLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside a LanguageProvider');
  }
  return context;
}
