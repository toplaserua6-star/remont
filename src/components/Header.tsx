import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const navKeys = ["about", "services", "portfolio", "reviews", "faq", "contacts"] as const;
const navHrefs = ["#about", "#services", "#portfolio", "#reviews", "#faq", "#contacts"];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-heading text-lg md:text-xl tracking-[0.3em] text-foreground">
          UMAN REMONT
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navKeys.map((key, i) => (
            <a
              key={key}
              href={navHrefs[i]}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {t(translations.nav[key], lang)}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 border border-border rounded-md px-3 py-1.5 font-medium"
          >
            {lang === "uk" ? "RU" : "UA"}
          </button>
          <a
            href="tel:+380933657844"
            className="flex items-center gap-2 gradient-gold text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            {t(translations.nav.call, lang)}
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleLang}
            className="text-sm text-muted-foreground border border-border rounded-md px-2.5 py-1 font-medium"
          >
            {lang === "uk" ? "RU" : "UA"}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-2"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <nav className="flex flex-col px-5 py-6 gap-4">
            {navKeys.map((key, i) => (
              <a
                key={key}
                href={navHrefs[i]}
                onClick={() => setIsOpen(false)}
                className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {t(translations.nav[key], lang)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
