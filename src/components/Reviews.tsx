import { AnimateOnScroll } from "./AnimateOnScroll";
import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

export const Reviews = () => {
  const { lang } = useLanguage();
  const r = translations.reviews;

  return (
    <section className="section-padding" id="reviews">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium tracking-wider uppercase">{t(r.label, lang)}</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-4">
              {t(r.title1, lang)} <span className="gradient-gold-text">{t(r.titleHighlight, lang)}</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {r.items.map((review, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/20 transition-all duration-500 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1 italic">
                  «{t(review.text, lang)}»
                </p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="font-medium text-foreground">
                    {lang === "uk" ? review.name : review.nameRu}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {typeof review.source === "string" ? review.source : t(review.source, lang)}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
