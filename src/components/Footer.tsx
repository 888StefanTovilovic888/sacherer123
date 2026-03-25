"use client";

import { Linkedin, Facebook, Instagram, ArrowUp } from "lucide-react";
import Image from "next/image";

const col3Links = [
  { label: "Impressum", href: "/imprint" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#111111] text-white relative">
      {/* ── Mobile layout ── */}
      <div className="sm:hidden max-w-screen-xl mx-auto px-6 py-12 flex flex-col items-center gap-8">
        {/* Logo + copyright */}
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/logo.png"
            alt="Sacherer & Partner"
            width={140}
            height={48}
            className="h-9 w-auto object-contain brightness-0 invert"
          />
          <p className="text-gray-600 text-xs text-center leading-relaxed">
            &copy; 2026 Sacherer & Partner · Alle Rechte vorbehalten.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500 text-[10px] font-medium uppercase tracking-wider">Folgen Sie uns</p>
          <div className="flex gap-2">
            {[
              { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/sachererundpartner/" },
              { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1ArjJar8id/?mibextid=wwXIfr" },
              { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/sachererpartner/" },
            ].map(({ Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                aria-label={label}>
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav links — horizontal wrapping row */}
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3">
          {[
            { label: "Über uns", href: "/about" },
            { label: "Leistungen", href: "/services" },
            { label: "KI-Leads", href: "/ai-leads" },
            { label: "Referenzen", href: "/testimonials" },
            { label: "Kontakt", href: "/contact" },
          ].map((item) => (
            <a key={item.label} href={item.href}
              className="text-gray-500 text-sm hover:text-gray-300 transition-colors duration-200">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Legal links — horizontal */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {col3Links.map((item) => (
            <a key={item.label} href={item.href}
              className="text-gray-600 text-xs hover:text-gray-400 transition-colors duration-200">
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <button className="bg-white hover:bg-gray-100 text-[#1a1a1a] px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 active:scale-95 whitespace-nowrap">
          Kontakt aufnehmen
        </button>
      </div>

      {/* ── Desktop layout (sm+) ── */}
      <div className="hidden sm:grid max-w-screen-xl mx-auto px-6 py-16 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Logo + Social */}
        <div className="lg:col-span-1">
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="Sacherer & Partner"
              width={160}
              height={55}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-gray-500 text-xs mb-6 leading-relaxed">
            Copyright &copy; 2026 Sacherer & Partner.
            <br />
            Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-col items-center w-fit">
            <p className="text-gray-400 text-xs font-medium mb-3 uppercase tracking-wider">
              Folgen Sie uns
            </p>
            <div className="flex gap-2">
              {[
                { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/sachererundpartner/" },
                { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1ArjJar8id/?mibextid=wwXIfr" },
                { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/sachererpartner/" },
              ].map(({ Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                  aria-label={label}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2 — Nav links */}
        <div className="flex flex-col items-center">
          <ul className="space-y-3 text-center">
            {[
              { label: "Über uns", href: "/about" },
              { label: "Leistungen", href: "/services" },
              { label: "KI-Leads", href: "/ai-leads" },
              { label: "Referenzen", href: "/testimonials" },
              { label: "Kontakt", href: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href}
                  className="text-gray-500 text-sm hover:text-gray-300 transition-colors duration-200">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — legal + CTA */}
        <div className="flex flex-col items-end gap-4">
          <ul className="space-y-3 text-right">
            {col3Links.map((item) => (
              <li key={item.label}>
                <a href={item.href}
                  className="text-gray-500 text-sm hover:text-gray-300 transition-colors duration-200">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="bg-white hover:bg-gray-100 text-[#1a1a1a] px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap">
            Kontakt aufnehmen
          </button>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-t border-white/5 mx-6" />

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
}
