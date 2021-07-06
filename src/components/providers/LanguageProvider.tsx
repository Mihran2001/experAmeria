import React, { useContext, createContext, useState } from "react";

export const languageContext = createContext({});

export default function LanguageProvider({ children }: any) {
  const [language, setLanguage] = useState("ARM");
  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  );
}

export const useLanguageContext = () => {
  const { language, setLanguage } = useContext<any>(languageContext);

  return { language, setLanguage };
};
