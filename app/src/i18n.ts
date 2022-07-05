import i18n from "i18next";
import Backend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        ns: ['common', 'header', 'menu', 'about'],
        defaultNS: 'common',
        debug: true,
        fallbackLng: 'en',

        interpolation: { escapeValue: false }
    });

i18n.on('languageChanged', (lng) => {
    console.log(' --> Langue changée pour : ' + lng);
});

export default i18n;