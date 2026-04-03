import { AnimateOnScroll } from "./AnimateOnScroll";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

export const CTA = () => {
  const { lang } = useLanguage();
  const c = translations.cta;
  const loc = translations.footer.location;

  return (
    <section className="section-padding" id="contacts">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <div className="bg-card border border-border rounded-3xl p-8 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
                {t(c.title1, lang)} <span className="gradient-gold-text">{t(c.titleHighlight, lang)}</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">{t(c.subtitle, lang)}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a href="tel:+380933657844" className="gradient-gold text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 group">
                  <Phone className="w-5 h-5" />
                  {t(c.callNow, lang)}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="mailto:info@remont-uman.com.ua" className="border border-border text-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-secondary transition-all flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  {t(c.email, lang)}
                </a>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-sm text-muted-foreground">
                <a href="tel:+380933657844" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" />+38 (093) 365-78-44
                </a>
                <a href="mailto:info@remont-uman.com.ua" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />info@remont-uman.com.ua
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />{t(loc, lang)}
                </span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
