import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "uk",
  toggleLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("site-lang");
    return saved === "ru" ? "ru" : "uk";
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "uk" ? "ru" : "uk";
      localStorage.setItem("site-lang", next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
