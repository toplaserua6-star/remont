import { Facebook, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const navKeys = ["about", "services", "portfolio", "reviews", "faq", "contacts"] as const;
const navHrefs = ["#about", "#services", "#portfolio", "#reviews", "#faq", "#contacts"];

export const Footer = () => {
  const { lang } = useLanguage();
  const f = translations.footer;

  return (
    <>
      <footer className="border-t border-border px-5 md:px-10 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <span className="font-heading text-xl tracking-[0.3em] text-foreground">UMAN REMONT</span>
              <p className="text-muted-foreground text-sm mt-4 leading-relaxed max-w-xs">{t(f.description, lang)}</p>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-4 text-foreground">{t(f.navigation, lang)}</h4>
              <nav className="flex flex-col gap-2">
                {navKeys.map((key, i) => (
                  <a key={key} href={navHrefs[i]} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t(translations.nav[key], lang)}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-4 text-foreground">{t(f.contactsTitle, lang)}</h4>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                <a href="tel:+380933657844" className="hover:text-foreground transition-colors">+38 (093) 365-78-44</a>
                <a href="mailto:info@remont-uman.com.ua" className="hover:text-foreground transition-colors">info@remont-uman.com.ua</a>
                <span>{t(f.location, lang)}</span>
                <a href="https://www.facebook.com/uman.remont/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                  <Facebook className="w-4 h-4" />Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} UMAN REMONT. {t(f.rights, lang)}</span>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-3 bg-background/90 backdrop-blur-xl border-t border-border">
        <a href="tel:+380933657844" className="gradient-gold text-primary-foreground w-full py-3.5 rounded-lg font-medium flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" />{t(translations.nav.call, lang)}
        </a>
      </div>
    </>
  );
};
