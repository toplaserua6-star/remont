import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-1.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

export const Hero = () => {
  const { lang } = useLanguage();
  const h = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Премиальный ремонт квартиры" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 w-full py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm border border-border rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full gradient-gold" />
            <span className="text-sm text-muted-foreground">{t(h.badge, lang)}</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6">
            {t(h.title1, lang)}
            <span className="gradient-gold-text block mt-2">{t(h.title2, lang)}</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
            {t(h.subtitle, lang)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contacts" className="gradient-gold text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group">
              {t(h.cta, lang)}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="border border-border text-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-secondary transition-all duration-300 text-center">
              {t(h.portfolio, lang)}
            </a>
          </div>

          <div className="flex gap-10 mt-14 pt-10 border-t border-border/50">
            <div>
              <div className="font-heading text-3xl md:text-4xl gradient-gold-text">22+</div>
              <div className="text-sm text-muted-foreground mt-1">{t(h.stat1label, lang)}</div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl gradient-gold-text">200+</div>
              <div className="text-sm text-muted-foreground mt-1">{t(h.stat2label, lang)}</div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl gradient-gold-text">50+</div>
              <div className="text-sm text-muted-foreground mt-1">{t(h.stat3label, lang)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
