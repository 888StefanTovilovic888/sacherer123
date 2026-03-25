import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#1a1a1a] py-24 px-6 text-white">
          <div className="max-w-screen-xl mx-auto text-center">

            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-inter-display)] font-semibold leading-tight tracking-tight mb-6">
              Beginnen wir das Gespräch
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Ob Sie eine konkrete Herausforderung haben oder einfach erkunden möchten, was möglich ist – wir freuen uns, von Ihnen zu hören.
            </p>
          </div>
        </section>

        {/* Contact content */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16">
            {/* Left — info */}
            <div>
              <h2 className="text-3xl font-[family-name:var(--font-inter-display)] font-semibold text-[#0A0A0A] mb-8">
                Kontakt aufnehmen
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#1a1a1a]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0A0A0A] mb-1">E-Mail</p>
                    <a href="mailto:office@sacherer-partner.de" className="text-gray-500 text-sm hover:text-[#1a1a1a] transition-colors">
                      office@sacherer-partner.de
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#1a1a1a]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0A0A0A] mb-1">Telefon</p>
                    <p className="text-gray-500 text-sm">+49 162 6184066</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#1a1a1a]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0A0A0A] mb-1">Büro</p>
                    <p className="text-gray-500 text-sm">Stuttgart, Deutschland</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right — Calendly CTA */}
            <div className="flex items-center justify-center">
              <div className="bg-[#F7F7F8] rounded-2xl p-7 flex flex-col items-center text-center w-full">
                <h3 className="font-semibold text-[#0A0A0A] mb-5">Vereinbaren Sie eine kostenlose 20-minütige Strategieberatung.</h3>
                <a
                  href="https://calendly.com/nicolas-sacherer-sacherer-partner/beratungsgesprach-personalstrategie-30m?month=2026-03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#E63200] hover:bg-[#bf2b00] text-white px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Termin buchen
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
