import { AnimateOnScroll } from "./AnimateOnScroll";
import { Shield, Users, FileCheck, Headphones } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const icons = [Shield, Users, FileCheck, Headphones];
const nums = ["01", "02", "03", "04"];

export const Advantages = () => {
  const { lang } = useLanguage();
  const a = translations.advantages;

  return (
    <section className="section-padding bg-elevated" id="about">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium tracking-wider uppercase">{t(a.label, lang)}</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-4">
              {t(a.title1, lang)} <span className="gradient-gold-text">{t(a.titleHighlight, lang)}</span> {t(a.title2, lang)}
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {a.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group h-full">
                  <span className="font-heading text-5xl text-border/50 absolute top-6 right-6">{nums[i]}</span>
                  <Icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading text-base mb-3">{t(item.title, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(item.description, lang)}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};
