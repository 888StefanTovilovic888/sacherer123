import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const gridCards = [
  {
    number: "01",
    title: "Signalbasierte Kandidatenansprache",
    body: "KI LENI durchsucht und strukturiert große Mengen relevanter Daten aus öffentlichen und weiteren nutzbaren Quellen. So entsteht ein deutlich breiteres Bild potenziell passender Kandidatinnen und Kandidaten – auch außerhalb klassischer Bewerbermärkte. Wir erkennen frühzeitig, wo relevante Profile sitzen, wie sich Zielgruppen bewegen und welche Personen für eine Ansprache grundsätzlich interessant sein können.",
  },
  {
    number: "02",
    title: "Validierung und Einordnung",
    body: "Die technologische Vorauswahl ersetzt nicht die menschliche Beurteilung – sie macht sie besser. Relevante Profile werden von uns eingeordnet, überprüft und im Hinblick auf Erfahrung, Laufbahn, Umfeld und tatsächliche Eignung bewertet. So verbinden wir Datenintelligenz mit dem, was am Ende entscheidend ist: Erfahrung, Urteilsvermögen und ein realistischer Blick auf Passung.",
  },
  {
    number: "03",
    title: "Präzisere Passungsbewertung",
    body: "Noch vor dem ersten Kontakt hilft KI LENI dabei, Profile nach fachlichen Anforderungen und struktureller Passung zu priorisieren. Dadurch wird der Suchprozess fokussierter und die Auswahl belastbarer. Das Ergebnis ist kein unpersönlicher Algorithmus-Vorschlag, sondern eine fundierte Grundlage für bessere Entscheidungen.",
  },
];

export default function AILeadsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-[#080808] text-white">

        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-[38vh] flex items-center px-6 py-24 overflow-hidden border-b border-white/5">
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="max-w-screen-xl mx-auto relative z-10">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/30 mb-6 block">
              KI-Leads — Sacherer & Partner
            </span>
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-inter-display)] font-semibold leading-[1.05] tracking-tight max-w-4xl mb-6">
              Intelligenz jenseits der<br />
              <span className="text-white/40">traditionellen Personalbeschaffung.</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl font-light">
              Wir setzen künstliche Intelligenz dort ein, wo Netzwerke an ihre Grenzen stoßen – und decken so Kandidaten auf, die Ihre Mitbewerber niemals zu Gesicht bekommen würden.
            </p>
          </div>
        </section>

        {/* ─── SECTION 1: SPLIT — THE AI ──────────────────────── */}
        <section className="px-6 py-28 border-b border-white/5">
          <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — Text */}
            <div>
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/25 mb-8 block">
                Die zusätzliche Intelligenzebene
              </span>
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-inter-display)] font-semibold leading-tight tracking-tight mb-8">
                Mehr als klassische Rekrutierung
              </h2>
              <div className="w-8 h-px bg-white/20 mb-8" />
              <p className="text-white/55 text-base leading-8 mb-6 text-justify">
                Klassische Rekrutierung orientiert sich oft daran, wer verfügbar ist oder sich aktiv zeigt. Unser Ansatz geht einen Schritt weiter: Wir analysieren, wer fachlich, persönlich und strukturell passen könnte – auch dann, wenn diese Personen noch gar nicht aktiv suchen.
              </p>
              <p className="text-white/55 text-base leading-8 mb-6 text-justify">
                Durch die Verbindung aus künstlicher Intelligenz, Marktverständnis und menschlicher Einschätzung erschließen wir eine zusätzliche Ebene der Kandidatenidentifikation. So entstehen neue Zugänge zu Fachkräften, Spezialisten und Leistungsträgern in Blue Collar wie White Collar.
              </p>
              <p className="text-white/40 text-sm leading-7 text-justify">
                Unsere Modelle greifen auf Muster aus erfolgreichen Such- und Besetzungsprozessen zurück und helfen uns dabei, relevante Profile schneller, gezielter und fundierter einzugrenzen – noch bevor der erste persönliche Austausch stattfindet.
              </p>
            </div>

            {/* Right — Abstract visual */}
            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-white/8">
              {/* Dark base */}
              <div className="absolute inset-0 bg-[#0d0d0d]" />

              {/* Neural network SVG illustration */}
              <svg
                className="absolute inset-0 w-full h-full opacity-30"
                viewBox="0 0 600 420"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Connection lines */}
                {[
                  [80,80,220,140],[80,80,220,210],[80,80,220,280],
                  [80,180,220,140],[80,180,220,210],[80,180,220,280],
                  [80,300,220,140],[80,300,220,210],[80,300,220,280],[80,300,220,350],
                  [220,140,380,100],[220,140,380,180],[220,140,380,260],
                  [220,210,380,100],[220,210,380,180],[220,210,380,260],[220,210,380,340],
                  [220,280,380,180],[220,280,380,260],[220,280,380,340],
                  [220,350,380,260],[220,350,380,340],
                  [380,100,520,160],[380,100,520,250],
                  [380,180,520,160],[380,180,520,250],
                  [380,260,520,160],[380,260,520,250],[380,260,520,340],
                  [380,340,520,250],[380,340,520,340],
                ].map(([x1,y1,x2,y2], i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#goldGrad)" strokeWidth="0.6" />
                ))}

                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d4a843" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#d4a843" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#c0c0c0" stopOpacity="0.2" />
                  </linearGradient>
                  <radialGradient id="nodeGold" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#d4a843" stopOpacity="1" />
                    <stop offset="100%" stopColor="#d4a843" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Nodes */}
                {[
                  [80,80],[80,180],[80,300],
                  [220,140],[220,210],[220,280],[220,350],
                  [380,100],[380,180],[380,260],[380,340],
                  [520,160],[520,250],[520,340],
                ].map(([cx,cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="14" fill="url(#nodeGold)" opacity="0.15" />
                    <circle cx={cx} cy={cy} r="4" fill="#d4a843" opacity="0.8" />
                    <circle cx={cx} cy={cy} r="2" fill="#fff" opacity="0.9" />
                  </g>
                ))}
              </svg>

              {/* Gold glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#d4a843]/5 blur-3xl" />

              {/* Corner label */}
              <div className="absolute bottom-6 right-6 text-right">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-white/20">KI LENI</p>
                <p className="text-[10px] text-white/15 tracking-wider">Intelligenzebene aktiv</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2: THE VERIFICATION GRID ──────────────── */}
        <section className="relative px-6 py-28 border-b border-white/5 overflow-hidden">
          {/* Background texture — dark marble at 10% */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=60)",
            }}
          />
          <div className="absolute inset-0 bg-[#080808]/90" />

          <div className="relative z-10 max-w-screen-xl mx-auto">
            {/* Headline */}
            <div className="text-center mb-20">
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/25 mb-6 block">
                KI LENI im Einsatz
              </span>
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-inter-display)] font-semibold leading-tight tracking-tight mb-6">
                KI LENI im Einsatz
              </h2>
              <div className="w-8 h-px bg-white/20 mx-auto mb-6" />
              <p className="text-white/40 text-base leading-relaxed max-w-xl mx-auto">
                Drei Ebenen, die zusammen dafür sorgen, dass Suchprozesse präziser, effizienter und belastbarer werden.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-5">
              {gridCards.map((card) => (
                <div
                  key={card.number}
                  className="bg-white/[0.03] backdrop-blur-sm border border-white/8 rounded-2xl p-8 hover:bg-white/[0.06] transition-colors duration-300"
                >
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-white/20 mb-6">
                    {card.number}
                  </p>
                  <h3 className="font-[family-name:var(--font-inter-display)] font-semibold text-white text-xl mb-4 leading-snug">
                    {card.title}
                  </h3>
                  <div className="w-6 h-px bg-white/15 mb-5" />
                  <p className="text-white/45 text-sm leading-7 text-justify">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: THE EDGE / RESULTS ─────────────────── */}
        <section className="px-6 py-32 text-center">
          <div className="max-w-screen-xl mx-auto">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/25 mb-8 block">
              Der Vorsprung
            </span>

            {/* Bold result statement */}
            <div className="mb-6">
              <p className="text-7xl md:text-9xl font-[family-name:var(--font-inter-display)] font-semibold text-white/10 leading-none tracking-tighter select-none">
                50%
              </p>
              <p className="text-2xl md:text-3xl font-[family-name:var(--font-inter-display)] font-semibold text-white -mt-6 md:-mt-10 relative z-10 tracking-tight">
                Schnellere Personalbeschaffung.<br />
                <span className="text-white/40 font-light">Ohne Abstriche bei der Qualität.</span>
              </p>
            </div>

            <div className="w-8 h-px bg-white/15 mx-auto my-10" />

            <p className="text-white/40 text-base leading-relaxed max-w-lg mx-auto mb-16">
              Unser KI-gestützter Prozess übertrifft herkömmliche Suchverfahren durchweg – und liefert Ihnen bereits vor Ihrem ersten Gespräch eine Vorauswahl, die drei Überprüfungsstufen durchlaufen hat.
            </p>

            {/* Stats row */}
            <div className="flex justify-center gap-16 mb-20">
              {[
                { value: "3×", label: "Mehr passive Kandidaten erreicht" },
                { value: "94%", label: "Zufriedenheitsrate bei Vermittlungen" },
                { value: "18 Tage", label: "Durchschnittliche Shortlist-Lieferung" },
              ].map((s) => (
                <div key={s.value} className="text-center">
                  <p className="text-3xl font-[family-name:var(--font-inter-display)] font-semibold text-white mb-1">
                    {s.value}
                  </p>
                  <p className="text-white/30 text-xs tracking-wider uppercase">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <a
              href="https://calendly.com/nicolas-sacherer-sacherer-partner/beratungsgesprach-personalstrategie-30m?month=2026-03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-gray-100 text-[#080808] px-10 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Unsere Methodik erleben – Termin buchen
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
