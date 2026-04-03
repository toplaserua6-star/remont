import { AnimateOnScroll } from "./AnimateOnScroll";
import { AlertTriangle, Clock, DollarSign, HelpCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const icons = [AlertTriangle, Clock, DollarSign, HelpCircle];

export const Problems = () => {
  const { lang } = useLanguage();
  const p = translations.problems;

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium tracking-wider uppercase">{t(p.label, lang)}</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
              {t(p.title1, lang)}<br />
              <span className="gradient-gold-text">{t(p.title2, lang)}</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {p.items.map((problem, i) => {
            const Icon = icons[i];
            return (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group">
                  <Icon className="w-8 h-8 text-primary mb-5 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading text-lg mb-3">{t(problem.title, lang)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(problem.description, lang)}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};
