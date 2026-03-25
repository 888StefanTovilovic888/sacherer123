"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Über uns", href: "/about" },
  { label: "Leistungen", href: "/services" },
  { label: "KI-Leads", href: "/ai-leads" },
  { label: "Referenzen", href: "/testimonials" },
  { label: "Kontakt", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex items-center h-14 sm:h-16 gap-4">
        {/* Logo — left */}
        <div className="flex items-center shrink-0">
          <a href="/">
            <Image
              src="/logo-prva-izbira.png"
              alt="Prva Izbira"
              width={180}
              height={60}
              className="h-9 sm:h-11 w-auto object-contain"
              priority
            />
          </a>
        </div>

        {/* Nav links — centered, equal spacing */}
        <ul className="hidden sm:flex items-center justify-center gap-1 flex-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="px-3 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 whitespace-nowrap"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — right, always visible */}
        <div className="flex items-center shrink-0 ml-auto sm:ml-0">
          <a
            href="https://calendly.com/nicolas-sacherer-sacherer-partner/beratungsgesprach-personalstrategie-30m?month=2026-03"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-[#E63200] hover:text-white text-[#E63200] border border-[#E63200] px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            Termin buchen
          </a>
        </div>

        {/* Hamburger — only on xs screens */}
        <button
          className="sm:hidden w-9 h-9 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown — only on xs */}
      {mobileOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-3">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 rounded-2xl text-gray-700 hover:text-gray-900 hover:bg-gray-100 font-medium text-sm transition-all duration-200"
                >
                  {item.label}
                  <ChevronRight size={14} className="text-gray-400" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
