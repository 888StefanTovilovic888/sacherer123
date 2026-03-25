import { Users, TrendingUp, Crown, LayoutGrid, Heart, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Executive Search",
    description:
      "Wir identifizieren und gewinnen außergewöhnliche Führungskräfte, die nachhaltige Veränderungen bewirken – präzise abgestimmt auf die Kultur und Strategie Ihrer Organisation.",
  },
  {
    icon: TrendingUp,
    title: "Führungskräfteentwicklung",
    description:
      "Maßgeschneiderte Programme, die das volle Potenzial Ihres Führungsteams entfalten und Kompetenzen auf jeder Ebene Ihrer Organisation stärken.",
  },
  {
    icon: Crown,
    title: "CEO- & Nachfolgeplanung",
    description:
      "Wir helfen Ihnen, die Führungskräfte zu identifizieren, zu entwickeln und in ihre Rollen zu überführen, die die Zukunft Ihrer Organisation gestalten werden – bevor Sie sie brauchen.",
  },
  {
    icon: LayoutGrid,
    title: "Board-Beratung",
    description:
      "Stärkung der Unternehmensführung durch durchdachte Board-Zusammensetzung, Bewertung und Entwicklung – zugeschnitten auf Ihre strategische Ausrichtung.",
  },
  {
    icon: Lightbulb,
    title: "Organisationstransformation",
    description:
      "Von der Restrukturierung bis zum Kulturwandel – wir begleiten Organisationen durch komplexe Übergänge mit Klarheit und Zuversicht.",
  },
  {
    icon: Heart,
    title: "Kultur & Sinn",
    description:
      "Wir helfen Führungskräften, Organisationen aufzubauen, in denen Menschen aufblühen – indem wir Werte, Verhaltensweisen und Zweck aufeinander abstimmen, um nachhaltige Wirkung zu erzielen.",
  },
];

export default function ServicesSection() {
  return (
    <section id="our-services" className="py-24 px-6 bg-[#F7F7F8]">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="inline-block bg-gray-100 text-[#1a1a1a] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Unsere Leistungen
          </span>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-inter-display)] font-semibold text-[#0A0A0A] tracking-tight leading-tight mb-4">
            So unterstützen wir Ihre Führung
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Ob die Suche nach Ihrem nächsten CEO oder die Transformation Ihrer Unternehmenskultur – unsere Leistungen verfolgen ein einziges Ziel: die Führung aufzubauen, die Ihre Zukunft erfordert.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center mb-5 group-hover:bg-[#1a1a1a] transition-colors duration-300">
                <s.icon
                  size={20}
                  className="text-[#1a1a1a] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-[family-name:var(--font-inter-display)] font-bold text-[#0A0A0A] text-lg mb-2">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
