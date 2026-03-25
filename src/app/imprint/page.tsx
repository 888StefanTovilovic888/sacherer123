import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ImprintPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-[family-name:var(--font-inter-display)] font-semibold text-[#0A0A0A] mb-10">
            Impressum
          </h1>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-[#0A0A0A] mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sacherer Recruiting-Partner GmbH<br />
              Rebhalde 16<br />
              73760 Ostfildern
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-4 italic">
              (zuvor Permoser & Partner GmbH)
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Geschäftsführer: Nicolas Sacherer
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-2">
              Umsatzsteuer-Ident.: DE352853921
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-[#0A0A0A] mb-3">
              Kontakt
            </h2>
            <p className="text-gray-600 text-sm">
              E-Mail:{" "}
              <a
                href="mailto:office@sacherer-partner.de"
                className="text-[#E63200] hover:underline"
              >
                office@sacherer-partner.de
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-[#0A0A0A] mb-3">
              Hinweis auf EU-Streitschlichtung
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="http://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E63200] hover:underline"
              >
                http://ec.europa.eu/consumers/odr
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-[#0A0A0A] mb-3">
              Haftung für Inhalte
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-[#0A0A0A] mb-3">
              Haftung für Links
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-[#0A0A0A] mb-3">
              Urheberrecht
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
