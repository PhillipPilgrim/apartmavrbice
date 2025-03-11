import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import en from "../locals/en";
import cs from "../locals/cs";

const isServer = typeof window === "undefined";
const detectionOptions = {
	order: isServer ? [] : ["cookie", "localStorage", "navigator"],
	caches: isServer ? [] : ["cookie"],
};

i18n.use(initReactI18next);

if (!isServer) {
	i18n.use(LanguageDetector);
}

i18n.init({
	resources: {
		en_us: { translation: en },
		cs: { translation: cs },
	},
	supportedLngs: ["en_us", "cs"],
	fallbackLng: "cs",
	debug: false,
	detection: detectionOptions,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
