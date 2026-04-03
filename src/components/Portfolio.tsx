import { AnimateOnScroll } from "./AnimateOnScroll";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const projects = [
  { title: "RYBALSKY", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" },
  { title: "AMERICAN", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
  { title: "LOFT 1", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" },
  { title: "BELLAGGO", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
];

export const Portfolio = () => {
  const { lang } = useLanguage();
  const p = translations.portfolio;

  return (
    <section className="section-padding bg-elevated" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium tracking-wider uppercase">{t(p.label, lang)}</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-4">
              {t(p.title1, lang)} <span className="gradient-gold-text">{t(p.titleHighlight, lang)}</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{t(p.categories[i], lang)}</span>
                  <h3 className="font-heading text-xl md:text-2xl mt-2">{project.title}</h3>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};
