import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultantsSection from "@/components/ConsultantsSection";
import { Swords, Search, Globe, Users, UserPlus, Shield } from "lucide-react";

const services = [
  {
    icon: Swords,
    title: "Unternehmerisches Sparring",
    description:
      "Wir begleiten Unternehmen als Sparringspartner bei Fragen, die personell und strategisch zugleich sind. Wenn sich Anforderungen verändern, Wachstum ansteht oder Strukturen weiterentwickelt werden sollen, helfen wir dabei, Klarheit zu schaffen und die richtigen nächsten Schritte abzuleiten. Es geht nicht um Theorie, sondern um praktikable Lösungen mit Blick auf Markt, Organisation und Menschen.",
    details: [
      "Sparring für Unternehmer, Geschäftsführung und Entscheider",
      "Einordnung personeller und organisatorischer Fragestellungen",
      "Blick von außen auf Wachstum, Struktur und Weiterentwicklung",
      "Unterstützung bei richtungsrelevanten Entscheidungen",
    ],
  },
  {
    icon: Search,
    title: "Personelle Bedarfe erkennen und richtig aufstellen",
    description:
      "Nicht jeder Personalbedarf ist sofort sichtbar. Oft zeigt sich erst im Wachstum, in Engpässen oder im Tagesgeschäft, welche Rollen fehlen, wo Überlastung entsteht oder welche Funktionen künftig entscheidend werden. Wir unterstützen dabei, personelle Bedarfe sauber zu analysieren, Rollen zu schärfen und realistische Wege für den Aufbau leistungsfähiger Teams zu entwickeln.",
    details: [
      "Analyse aktueller und zukünftiger Personalbedarfe",
      "Schärfung von Rollen und Anforderungsprofilen",
      "Unterstützung bei Teamaufbau und Weiterentwicklung",
      "Priorisierung kritischer Funktionen und Schlüsselpositionen",
    ],
  },
  {
    icon: Globe,
    title: "Arbeitgeberpositionierung im Markt",
    description:
      "Unternehmen konkurrieren heute nicht nur mit Gehalt oder Stellenanzeigen, sondern mit Klarheit, Glaubwürdigkeit und Sichtbarkeit. Wir unterstützen dabei, die eigene Arbeitgeberposition zu schärfen und im Markt so aufzutreten, dass passende Menschen sich angesprochen fühlen.\n\nDabei geht es nicht um austauschbare Employer-Branding-Floskeln, sondern um ein Profil, das zu Ihrem Unternehmen passt und in der Zielgruppe wirkt.",
    details: [
      "Schärfung der Arbeitgeberpositionierung",
      "Entwicklung eines glaubwürdigen Marktauftritts",
      "Klarheit über Zielgruppen und Ansprache",
      "Unterstützung bei Sichtbarkeit und Attraktivität als Arbeitgeber",
    ],
  },
  {
    icon: Users,
    title: "Leistungsträger finden – in Blue Collar und White Collar",
    description:
      "Wir unterstützen Unternehmen dabei, die Menschen zu finden, die in der Praxis den Unterschied machen: Fachkräfte, Spezialisten, kaufmännische Mitarbeitende, technische Profile, Leistungsträger in Produktion, Vertrieb, Verwaltung und vielen weiteren Bereichen.\n\nUnser Blick richtet sich dabei nicht nur auf Titel, sondern auf Verlässlichkeit, Können, Haltung und tatsächlichen Beitrag zum Unternehmenserfolg.",
    details: [
      "Besetzung von Fach- und Schlüsselpositionen",
      "Blue-Collar- und White-Collar-Profile",
      "Technische, gewerbliche und kaufmännische Rollen",
      "Fokus auf Menschen, die Wirkung im Unternehmen entfalten",
    ],
  },
  {
    icon: UserPlus,
    title: "Gewinnung passender Mitarbeitender",
    description:
      "Die richtige Besetzung entsteht nicht zufällig. Wir helfen dabei, passende Menschen gezielt anzusprechen, Suchprozesse wirksam aufzusetzen und die Chancen auf gute Besetzungen deutlich zu verbessern.\n\nJe nach Bedarf unterstützen wir punktuell oder entlang des gesamten Prozesses — von der Zieldefinition bis zur erfolgreichen Besetzung.",
    details: [
      "Unterstützung bei Suche und Ansprache",
      "Bessere Passung zwischen Rolle und Kandidatenprofil",
      "Strukturierte Begleitung von Besetzungsprozessen",
      "Unterstützung bei schwer zu gewinnenden Profilen",
    ],
  },
  {
    icon: Shield,
    title: "Schlüsselpositionen und sensible Besetzungen",
    description:
      "Wenn Rollen besonders relevant oder personelle Situationen sensibel sind, braucht es einen klaren, diskreten und belastbaren Prozess. In solchen Fällen begleiten wir Unternehmen mit der nötigen Vertraulichkeit und dem Blick für das Wesentliche.\n\nDas kann Führungsrollen betreffen, aber ebenso zentrale Fach- oder Schlüsselfunktionen, auf denen viel Verantwortung oder Know-how liegt.",
    details: [
      "Besetzung kritischer Schlüsselpositionen",
      "Diskrete Begleitung sensibler Situationen",
      "Unterstützung bei Rollen mit hoher Wirkung für das Unternehmen",
      "Bei Bedarf auch Nachfolge- und Übergangsthemen",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#0A0A0A] py-24 px-6 text-white">
          <div className="max-w-screen-xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4 block">
              Unsere Leistungen
            </span>
            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-inter-display)] font-semibold leading-tight tracking-tight mb-6">
              So unterstützen wir Ihre Führung
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Von der Suche nach Ihrer nächsten Fachkraft bis zur Transformation Ihrer Unternehmenskultur – jede unserer Leistungen verfolgt ein einziges Ziel: die Führung aufzubauen, die Ihre Zukunft erfordert.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-24 px-6 bg-[#F7F7F8]">
          <div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center mb-5">
                  <s.icon size={20} className="text-[#1a1a1a]" />
                </div>
                <h2 className="font-[family-name:var(--font-inter-display)] font-semibold text-[#0A0A0A] text-xl mb-3">
                  {s.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {s.description}
                </p>
                <ul className="space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Expertise Grid */}
        <ConsultantsSection />

        {/* CTA */}
        <section className="py-20 px-6 bg-white text-center">
          <h2 className="text-3xl font-[family-name:var(--font-inter-display)] font-semibold text-[#0A0A0A] mb-4">
            Sie wissen nicht, wo Sie anfangen sollen?
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Lassen Sie uns Ihre konkrete Situation besprechen und gemeinsam den richtigen Ansatz finden.
          </p>
          <a
            href="https://calendly.com/nicolas-sacherer-sacherer-partner/beratungsgesprach-personalstrategie-30m?month=2026-03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E63200] hover:bg-[#bf2b00] text-white px-9 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Termin buchen
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
