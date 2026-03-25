const stats = [
  { value: "1000+", label: "Vermittelte Fachkräfte" },
  { value: "100+", label: "Partnerunternehmen" },
  { value: "3", label: "Länder" },
];

export default function WhyChooseSection() {
  return (
    <section id="about-us" className="py-24 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto text-center">
            <span className="inline-block bg-gray-100 text-[#1a1a1a] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Über uns
            </span>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-inter-display)] font-semibold text-[#0A0A0A] tracking-tight leading-tight mb-6">
              Warum Sacherer & Partner?
            </h2>
            <p className="text-lg font-semibold text-[#1a1a1a] mb-4 leading-snug">
              In einer Welt voller Fragen liefern wir menschenzentrierte Lösungen.
            </p>
            <p className="text-gray-500 leading-relaxed text-base mb-8 max-w-2xl mx-auto">
              Wir wissen, was es braucht, um eine herausragende Führungskraft zu sein. Unser Expertenteam ist darauf ausgerichtet, das volle Potenzial Ihrer Organisation zu entfalten und Ihre Wirkung zu maximieren. Welche Herausforderungen auch immer auf Sie zukommen – wir stehen Ihnen mit den nötigen Einblicken, Perspektiven und Fachkräften zur Seite, damit Sie diese mit Überzeugung meistern.
            </p>
            <button className="bg-[#1a1a1a] hover:bg-[#333333] text-white px-9 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
              Mehr erfahren
            </button>

            {/* Stats row */}
            <div className="flex justify-between mt-10 pt-8 border-t border-gray-100 max-w-2xl mx-auto">
              {stats.map((s) => (
                <div key={s.value} className="text-center">
                  <p className="text-3xl font-[family-name:var(--font-inter-display)] font-semibold text-[#1a1a1a]">
                    {s.value}
                  </p>
                  <p className="text-xs font-medium text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
      </div>
    </section>
  );
}
