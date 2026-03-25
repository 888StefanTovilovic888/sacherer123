import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";

const caseStudies = [
  {
    companyInitials: "DG",
    companyName: "Diamond GmbH",
    headline: "Das gemeinsame Miteinander und Verständnis füreinander war der Schlüssel für unseren Erfolg",
    quote: "",
    challenge: "Die Anforderungen der Diamond GmbH waren hoch! Es wurde schon seit fast einem Jahr nach einem Vertriebsingenieur für Hochleistungsdüsen in Höchstdruckanwendungen und ein Vertriebsbeauftragter für Harsh-Environment gesucht. Klassische Wege lieferten keine Bewerbungen.",
    result: "Innerhalb von wenigen Monaten konnten für beide Stellen passende Kandidaten gefunden werden.",
    name: "Matthias Hedrich",
    title: "Vorstandsvorsitzender",
    logo: "/logos/diamond-gmbh.svg",
    videoThumb: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=900&q=80",
    videoSrc: "/videos/diamond-gmbh.mp4",
    flip: false,
  },
  {
    companyInitials: "OG",
    companyName: "Olymp GmbH",
    headline: "Wir hatten Bedenken, da man im Rahmen dieser Beratungen immer viel versprochen bekommt...",
    quote: "",
    challenge: "Die Olymp GmbH suchte schon seit Wochen nach einem geeigneten Servicetechniker. Da klassische Wege keinen qualifizierten Rücklauf geliefert haben, wurde ein Versuch mit Sacherer & Partner gewagt.",
    result: "Innerhalb von 10 Tagen konnten 33 Bewerbungen generiert werden, wovon ein Servicetechniker eingestellt wurde.",
    name: "Ludovic Weiss",
    title: "Werkleiter",
    videoThumb: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80",
    videoSrc: "/videos/olymp-gmbh.mp4",
    flip: true,
  },
  {
    companyInitials: "RG",
    companyName: "Remystahl GmbH & Co. KG",
    headline: "Nach wenigen Stunden ging es schon los und ich hab mich gefragt: wie macht ihr das?",
    quote: "",
    challenge: "Jobportale und Inserate lieferten sehr geringen Rücklauf. Es wurde sowohl in der Qualitätssicherung, in der Logistik, im Vertrieb als auch im Lager gesucht.",
    result: "Innerhalb von 8 Wochen konnten alle Stellen besetzt werden.",
    name: "Thomas Hlousek",
    title: "Geschäftsführer",
    videoThumb: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80",
    videoSrc: "/videos/remystahl-gmbh.mp4",
    flip: false,
  },
  {
    companyInitials: "JM",
    companyName: "Jooß Mechanik",
    headline: "Weil alles andere schon nicht funktioniert hat war ich sehr skeptisch und umso positiver überrascht, als es gut funktioniert hat",
    quote: "",
    challenge: "Jooß Mechanik konnte die letzten Jahre ein starkes Wachstum verzeichnen, dabei sind fähige Zerspaner der Wachstumsengpass. Aufgrund starker Konkurrenz in der Umgebung war der Zulauf durch klassische Wege sehr gering.",
    result: "Innerhalb von einem Monat konnten bereits 30 Bewerbungen generiert werden, wovon 5-7 in der engeren Auswahl stehen. Zwei Arbeitsverträge wurden bereits unterzeichnet.",
    name: "Philip Jooß",
    title: "Geschäftsführer",
    videoThumb: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=900&q=80",
    videoSrc: "/videos/joos-mechanik.mp4",
    flip: true,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-[#0a0a0a] text-white">

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="px-6 py-24 border-b border-white/5">
          <div className="max-w-screen-xl mx-auto">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/25 mb-6 block">
              Referenzberichte
            </span>
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-inter-display)] font-semibold leading-[1.05] tracking-tight max-w-3xl mb-6">
              Ergebnisse, die<br />
              <span className="text-white/35">für sich sprechen.</span>
            </h1>
            <p className="text-white/40 text-lg leading-relaxed max-w-xl font-light">
              Vier Fallstudien. Vier Unternehmen, die uns ihre wichtigsten Besetzungen anvertraut haben.
            </p>
          </div>
        </section>

        {/* ── Case Study Sections ─────────────────────────────────── */}
        {caseStudies.map((cs, i) => (
          <section
            key={cs.name}
            className="border-b border-white/5"
          >
            <div className={`flex flex-col lg:flex-row ${cs.flip ? "lg:flex-row-reverse" : ""}`}>

              {/* Video side — height defined solely by the video's aspect ratio */}
              <div className="lg:w-1/2 relative flex-shrink-0 bg-black self-start lg:self-stretch">
                {(cs as typeof cs & { videoSrc?: string }).videoSrc ? (
                  <>
                    <VideoPlayer
                      src={(cs as typeof cs & { videoSrc?: string }).videoSrc!}
                      thumb={cs.videoThumb}
                    />
                    {/* Case number */}
                    <div className="absolute top-4 left-4 pointer-events-none z-10">
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40 bg-black/40 px-2 py-1 rounded">
                        Case {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="relative overflow-hidden group" style={{ paddingBottom: "56.25%" }}>
                    {/* Static thumbnail */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]"
                      style={{ backgroundImage: `url(${cs.videoThumb})` }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                    <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                        <Play size={18} className="text-white ml-1" fill="white" />
                      </div>
                    </div>

                    {/* Case number */}
                    <div className="absolute top-8 left-8 pointer-events-none">
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30">
                        Case {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Text side — stretches to match video height, attribution pinned to bottom */}
              <div className={`lg:w-1/2 bg-[#111111] flex flex-col px-10 py-8`}>

                {/* Divider */}
                <div className="w-8 h-px bg-white/15 mb-5" />

                {/* Quote or structured content — flex-1 so it expands to fill available space */}
                <div className="flex-1 overflow-hidden">
                {(cs as typeof cs & { challenge?: string; result?: string }).challenge ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-2">Ausgangssituation</p>
                      <p className="text-white/50 text-sm leading-6 text-justify">
                        {(cs as typeof cs & { challenge?: string }).challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-2">Ergebnis</p>
                      <p className="text-white/50 text-sm leading-6 text-justify">
                        {(cs as typeof cs & { result?: string }).result}
                      </p>
                    </div>
                  </div>
                ) : (
                  <blockquote className="text-white/50 text-sm leading-7 text-justify italic">
                    &ldquo;{cs.quote}&rdquo;
                  </blockquote>
                )}
                </div>

                {/* Attribution — pinned to bottom via mt-auto */}
                <div className="flex items-center gap-3 mt-auto pt-5 border-t border-white/8">
                  <div className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/50 shrink-0">
                    {cs.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{cs.name}</p>
                    <p className="text-white/35 text-xs tracking-wide">{cs.title} · {cs.companyName}</p>
                  </div>
                </div>
              </div>

            </div>
          </section>
        ))}

        {/* ── CTA ────────────────────────────────────────────────── */}
        <section className="px-6 py-32 text-center">
          <div className="max-w-screen-xl mx-auto">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/25 mb-8 block">
              Ihre Geschichte als nächste
            </span>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-inter-display)] font-semibold leading-tight tracking-tight mb-6">
              Bereit für Ihre<br />
              <span className="text-white/35">Erfolgsgeschichte?</span>
            </h2>
            <div className="w-8 h-px bg-white/15 mx-auto my-8" />
            <p className="text-white/35 text-base leading-relaxed max-w-md mx-auto mb-12">
              Vereinbaren Sie eine vertrauliche Beratung und erfahren Sie, wie wir Ihre wichtigste Besetzung angehen.
            </p>
            <a
              href="https://calendly.com/nicolas-sacherer-sacherer-partner/beratungsgesprach-personalstrategie-30m?month=2026-03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-gray-100 text-[#0a0a0a] px-10 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Vertrauliches Gespräch buchen
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
