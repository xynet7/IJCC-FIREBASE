
"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';

type TranslateContextType = {
  selectedLanguage: string;
  changeLanguage: (lang: string) => void;
};

const TranslateContext = createContext<TranslateContextType>({
  selectedLanguage: 'en',
  changeLanguage: () => {},
});

const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
};

export const TranslateProvider = ({ children }: { children: ReactNode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const changeLanguage = useCallback((lang: string) => {
    if (typeof window === 'undefined' || !document.body) return;

    if (lang === 'ja') {
        document.body.classList.add('show-translate-bar');
    } else {
        document.body.classList.remove('show-translate-bar');
    }
      
    const googleTranslateElement = document.getElementById('google_translate_element');
    if (googleTranslateElement) {
      const select = googleTranslateElement.querySelector('select');
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
        document.cookie = `googtrans=/en/${lang}; path=/`;
        setSelectedLanguage(lang);
      }
    }
  }, []);
  
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,ja',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element');

      const langCookie = getCookie('googtrans');
      const initialLang = langCookie ? langCookie.split('/')[2] : 'en';
      setSelectedLanguage(initialLang);
        
      if (initialLang === 'ja') {
        document.body.classList.add('show-translate-bar');
      } else {
        document.body.classList.remove('show-translate-bar');
      }
    };

    if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }
    
  }, []);

  return (
    <TranslateContext.Provider value={{ selectedLanguage, changeLanguage }}>
      {children}
    </TranslateContext.Provider>
  );
};

export const useTranslate = () => useContext(TranslateContext);
