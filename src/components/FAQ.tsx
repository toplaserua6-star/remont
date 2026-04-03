import { AnimateOnScroll } from "./AnimateOnScroll";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { lang } = useLanguage();
  const f = translations.faq;

  return (
    <section className="section-padding bg-elevated" id="faq">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium tracking-wider uppercase">{t(f.label, lang)}</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-4">
              {t(f.title1, lang)} <span className="gradient-gold-text">{t(f.titleHighlight, lang)}</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="space-y-3">
          {f.items.map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/30 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">{t(faq.q, lang)}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{t(faq.a, lang)}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
