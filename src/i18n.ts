import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translationEN.json";
import translationHY from "./locales/hy/translationHY.json";

const resources = {
  en: {
    translation: translationEN,
  },
  arm: {
    translation: translationHY,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "arm",
  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
