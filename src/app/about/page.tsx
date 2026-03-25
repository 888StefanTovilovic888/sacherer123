import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "5+", label: "Jahre Erfahrung", sub: "Aufbau von Führungspipelines in allen Branchen" },
  { value: "1.000+", label: "Erfolgreiche Vermittlungen", sub: "Führungskräfte und Spezialisten europaweit vermittelt" },
  { value: "100+", label: "Partnerunternehmen", sub: "Vertraut von Marktführern in 3 Ländern" },
];

const values = [
  {
    title: "Menschenzentriert",
    description:
      "Wir glauben, dass großartige Organisationen von großartigen Menschen aufgebaut werden. Jedes Mandat beginnt damit, die Menschen im Mittelpunkt zu verstehen.",
  },
  {
    title: "Langfristiges Denken",
    description:
      "Wir optimieren nicht für den schnellen Erfolg. Wir helfen Ihnen, Führungskapazitäten aufzubauen, die sich über Jahre, nicht Quartale, entwickeln.",
  },
  {
    title: "Tiefgreifende Expertise",
    description:
      "Unsere Berater bringen jahrzehntelange Branchenerfahrung in verschiedenen Sektoren, Regionen und Führungsherausforderungen mit.",
  },
  {
    title: "Vertrauensvolle Partnerschaft",
    description:
      "Wir arbeiten an Ihrer Seite – nicht nur für Sie. Unser Erfolg misst sich an Ihrem.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-[#080808] text-white">

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="relative px-6 py-32 border-b border-white/5 overflow-hidden">
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="max-w-screen-xl mx-auto relative z-10 text-center">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/25 mb-8 block">
              Über uns — Sacherer & Partner
            </span>
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-inter-display)] font-semibold leading-[1.05] tracking-tight max-w-4xl mx-auto mb-8">
              Den Maßstab der Personalvermittlung<br />
              <span className="text-white/35">neu definieren.</span>
            </h1>
            <div className="w-8 h-px bg-white/15 mx-auto mb-8" />
            <p className="text-white/45 text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Sacherer & Partner wurde auf einer einzigen Überzeugung gegründet – dass die richtige Person in der richtigen Rolle alles verändert. Wir existieren, um diese Übereinstimmung mit Präzision, Diskretion und nachhaltiger Wirkung herzustellen.
            </p>
          </div>
        </section>

        {/* ── Statistics Grid ─────────────────────────────────── */}
        <section className="px-6 py-24 border-b border-white/5">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.value} className="bg-[#0d0d0d] px-10 py-14 text-center">
                <p
                  className="font-[family-name:var(--font-inter-display)] font-semibold leading-none tracking-tight mb-4"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    background: "linear-gradient(135deg, #d4a843 0%, #c0c0c0 60%, #ffffff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </p>
                <p className="text-white font-semibold text-base mb-2">{s.label}</p>
                <p className="text-white/35 text-xs leading-relaxed">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── AI Feature — Split Screen ────────────────────────── */}
        <section className="px-6 py-28 border-b border-white/5">
          <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — Text */}
            <div>
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/25 mb-8 block">
                Unser Vorsprung
              </span>
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-inter-display)] font-semibold leading-tight tracking-tight mb-8">
                Menschliche Intuition,<br />verstärkt durch Intelligenz
              </h2>
              <div className="w-8 h-px bg-white/15 mb-8" />
              <p className="text-white/55 text-base leading-8 mb-6 text-justify">
                Unsere Berater bringen unersetzliches menschliches Urteilsvermögen in jede Suche ein – die Fähigkeit, Kontext, Kultur und Charakter zu lesen, die kein Algorithmus replizieren kann. Wir haben dieses Urteilsvermögen jedoch durch KI ergänzt, die passive Talente aus Tausenden von Datenquellen kartiert, für das menschliche Auge unsichtbare Muster erkennt und Kandidatenlisten liefert, die bereits durch mehrere Verifikationsebenen gefiltert wurden.
              </p>
              <p className="text-white/35 text-sm leading-7 text-justify">
                Das Ergebnis ist ein Prozess, der gleichzeitig schneller, tiefgreifender und präziser ist als eine klassische Suche – ohne die Qualität der menschlichen Verbindung zu opfern, die großartige Vermittlungen nachhaltig macht.
              </p>
            </div>

            {/* Right — Neural network visual */}
            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-white/8">
              <div className="absolute inset-0 bg-[#0d0d0d]" />
              <svg
                className="absolute inset-0 w-full h-full opacity-35"
                viewBox="0 0 600 420"
                xmlns="http://www.w3.org/2000/svg"
              >
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
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#goldGrad2)" strokeWidth="0.7" />
                ))}
                <defs>
                  <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d4a843" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#d4a843" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#c0c0c0" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {[
                  [80,80],[80,180],[80,300],
                  [220,140],[220,210],[220,280],[220,350],
                  [380,100],[380,180],[380,260],[380,340],
                  [520,160],[520,250],[520,340],
                ].map(([cx,cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="14" fill="#d4a843" opacity="0.06" />
                    <circle cx={cx} cy={cy} r="4" fill="#d4a843" opacity="0.85" />
                    <circle cx={cx} cy={cy} r="2" fill="#fff" opacity="0.9" />
                  </g>
                ))}
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#d4a843]/5 blur-3xl" />
              <div className="absolute bottom-6 right-6 text-right">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-white/20">Intelligenzschicht</p>
                <p className="text-[10px] text-white/15 tracking-wider">KI-gestützte Suche</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What we stand for ───────────────────────────────── */}
        <section className="px-6 py-28 border-b border-white/5">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/25 mb-6 block">
                Unsere Werte
              </span>
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-inter-display)] font-semibold leading-tight tracking-tight">
                Wofür wir stehen
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:bg-white/[0.06] transition-colors duration-300"
                >
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-white/20 mb-5">
                    0{i + 1}
                  </p>
                  <h3 className="font-[family-name:var(--font-inter-display)] font-semibold text-white text-lg mb-4 leading-snug">
                    {v.title}
                  </h3>
                  <div className="w-5 h-px bg-white/15 mb-4" />
                  <p className="text-white/45 text-sm leading-7">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────── */}
        <section className="px-6 py-32 text-center">
          <div className="max-w-screen-xl mx-auto">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/25 mb-8 block">
              Arbeiten Sie mit uns
            </span>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-inter-display)] font-semibold leading-tight tracking-tight mb-6">
              Bereit, Ihren Maßstab<br />
              <span className="text-white/35">anzuheben?</span>
            </h2>
            <div className="w-8 h-px bg-white/15 mx-auto my-8" />
            <p className="text-white/35 text-base leading-relaxed max-w-md mx-auto mb-12">
              Vereinbaren Sie eine vertrauliche 20-minütige Beratung und erfahren Sie, wie wir Ihre wichtigste Besetzung angehen.
            </p>
            <a
              href="https://calendly.com/nicolas-sacherer-sacherer-partner/beratungsgesprach-personalstrategie-30m?month=2026-03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-gray-100 text-[#080808] px-10 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Termin buchen
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
