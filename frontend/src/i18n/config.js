import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    // lng: "en",
    resources: {
      en: {
        translations: require("./locales/en/translations.json"),
        dir: "ltr",
      },
      ar: {
        translations: require("./locales/ar/translations.json"),
        dir: "rtl",
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "path",
        "subdomain",
        "navigator",
      ],
      caches: ["cookie"],
    },
  });

i18n.languages = ["en", "ar"];

export default i18n;
