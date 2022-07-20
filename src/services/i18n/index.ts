import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
.use(I18nextBrowserLanguageDetector)
.use(initReactI18next) // passes i18n down to react-i18next
.init({
    resources: {
    en: {
        translation: {
        "Welcome to React": "En"
        }
    },
    vi: {
        translation: {
        "Welcome to React": "Vn"
        }
    }
    },
    detection:{
        order:['path'], 
        lookupFromPathIndex: 1,
    },

    fallbackLng: "en",

    interpolation: {
    escapeValue: false 
    }
});


