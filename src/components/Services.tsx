import { AnimateOnScroll } from "./AnimateOnScroll";
import bathroomImg from "@/assets/bathroom.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const images = [kitchenImg, bathroomImg, bedroomImg];

export const Services = () => {
  const { lang } = useLanguage();
  const s = translations.services;

  return (
    <section className="section-padding" id="services">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium tracking-wider uppercase">{t(s.label, lang)}</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-4">
              {t(s.title1, lang)} <span className="gradient-gold-text">{t(s.titleHighlight, lang)}</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="space-y-8">
          {s.items.map((service, i) => (
            <AnimateOnScroll key={i} delay={i * 150}>
              <div className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-500`}>
                <div className="lg:w-1/2 h-64 lg:h-auto min-h-[300px]">
                  <img src={images[i]} alt={t(service.title, lang)} className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="font-heading text-xl md:text-2xl mb-4">{t(service.title, lang)}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{t(service.description, lang)}</p>
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((f, j) => (
                      <span key={j} className="bg-secondary text-secondary-foreground text-sm px-4 py-1.5 rounded-full">
                        {t(f, lang)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
