const roles = [
  {
    label: "Industriemechaniker",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80",
  },
  {
    label: "Ingenieur",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
  },
  {
    label: "Produktionsleiter",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
  },
  {
    label: "Maschinenbediener",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
  },
  {
    label: "Qualitätssicherung",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    label: "Bauwesen",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    label: "Einkauf",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
  {
    label: "Techniker",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
  },
  {
    label: "Vertrieb",
    image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&q=80",
  },
  {
    label: "Schweißer",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80",
  },
  {
    label: "CNC-Spezialist",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
  },
  {
    label: "Projektleiter",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80",
  },
];

export default function ConsultantsSection() {
  return (
    <section className="bg-[#0e0e0e] py-24 px-6">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/25 mb-4 block">
            Gewerbliche Expertise
          </span>
          <h2 className="font-[family-name:var(--font-inter-display)] font-semibold text-white text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight max-w-xl">
            Branchenrollen, die wir<br />
            <span className="text-white/35">präzise besetzen.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {roles.map((role) => (
            <div
              key={role.label}
              className="group relative rounded-2xl overflow-hidden cursor-default aspect-video sm:aspect-[4/3] lg:aspect-[5/3]"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.07]"
                style={{ backgroundImage: `url(${role.image})` }}
              />

              {/* Bottom gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Label tag */}
              <div className="absolute bottom-4 left-4">
                <span className="inline-block bg-[#1a1f2e]/80 group-hover:bg-[#b8860b]/90 backdrop-blur-sm text-white text-xs font-semibold tracking-wide px-3 py-1.5 rounded-md transition-colors duration-300">
                  {role.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
