"use client";

import { useState, useEffect, useRef } from "react";

const roles = [
  "Servicetechniker",
  "Projektleiter",
  "Zerspaner",
  "Monteur",
  "Fahrer",
  "Leistungsträger",
];

const SPARK_COLORS = ["#ff9500", "#ffb800", "#ff6500", "#ffcc00", "#ff7700", "#ffe066"];
const CYCLE_MS = 28000;

interface Spark {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  size: number; color: string;
}

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  // Text rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Sparks canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = (ts - startRef.current) % CYCLE_MS;
      const progress = elapsed / CYCLE_MS;

      const w = canvas.width;
      const h = canvas.height;

      // Beam center X: traverse from -20% to 120% of width over cycle
      const beamX = (-0.2 + progress * 1.4) * w;

      ctx.clearRect(0, 0, w, h);

      // Spawn sparks only when beam is on-screen
      if (beamX > 0 && beamX < w) {
        const count = 4 + Math.floor(Math.random() * 4);
        for (let i = 0; i < count; i++) {
          const angle = (-Math.PI / 5) + (Math.random() - 0.3) * (Math.PI * 0.7);
          const speed = 1.5 + Math.random() * 5.5;
          const maxLife = 25 + Math.floor(Math.random() * 45);
          sparksRef.current.push({
            x: beamX + (Math.random() - 0.5) * 20,
            y: h * 0.2 + Math.random() * h * 0.6,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: maxLife,
            maxLife,
            size: 0.6 + Math.random() * 2.2,
            color: SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
          });
        }
      }

      // Draw sparks
      sparksRef.current = sparksRef.current.filter((s) => s.life > 0);
      for (const s of sparksRef.current) {
        const alpha = (s.life / s.maxLife) * 0.9;
        const len = s.size * 3 + (1 - s.life / s.maxLife) * s.size * 2;

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(s.x, s.y);
        ctx.rotate(Math.atan2(s.vy, s.vx));

        const grad = ctx.createLinearGradient(-len, 0, len, 0);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.4, s.color);
        grad.addColorStop(0.6, "#fff9e6");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(0, 0, len, s.size * 0.35, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.12; // gravity
        s.vx *= 0.97;
        s.life--;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full h-[580px] overflow-hidden">

      {/* ── Heavily brushed dark steel ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#080809",
          backgroundImage: [
            // Ultra-fine grain (1px bands)
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 1px, rgba(255,255,255,0.028) 1px, rgba(255,255,255,0.028) 2px)",
            // Medium grain (4px)
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 4px, rgba(255,255,255,0.016) 4px, rgba(255,255,255,0.016) 5px)",
            // Coarse highlight bands (10px)
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 10px, rgba(255,255,255,0.036) 10px, rgba(255,255,255,0.036) 11px)",
            // Dark shadow grooves (20px)
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 20px, rgba(0,0,0,0.09) 20px, rgba(0,0,0,0.09) 21px)",
            // Slight diagonal ambient for depth
            "linear-gradient(172deg, #1e1e24 0%, #0c0c10 40%, #06060a 100%)",
          ].join(", "),
        }}
      />

      {/* Side vignettes */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.55) 100%)" }}
      />

      {/* ── Welding-arc beam — wide soft glow ── */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
        <div
          style={{
            position: "absolute",
            top: 0, left: 0,
            width: "22%",
            height: "100%",
            background: "linear-gradient(90deg, transparent 0%, rgba(255,245,200,0.04) 15%, rgba(255,245,200,0.18) 45%, rgba(255,255,255,0.32) 50%, rgba(255,245,200,0.18) 55%, rgba(255,245,200,0.04) 85%, transparent 100%)",
            animation: "metalShine 28s linear infinite",
            willChange: "transform",
            filter: "blur(2px)",
          }}
        />
        {/* Intense core — sharp bright line */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0,
            width: "5%",
            height: "100%",
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,240,0.5) 40%, rgba(255,255,255,0.95) 50%, rgba(255,255,240,0.5) 60%, transparent 100%)",
            animation: "metalShineCore 28s linear infinite",
            willChange: "transform",
            filter: "blur(0.5px)",
          }}
        />
      </div>

      {/* ── Sparks canvas ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 2 }}
      />

      {/* Top & bottom vignette — keeps text readable */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 22%, rgba(0,0,0,0.15) 72%, rgba(0,0,0,0.65) 100%)",
          zIndex: 3,
        }}
      />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
        style={{ zIndex: 4 }}
      >
        <span className="text-white text-xs font-semibold tracking-wider uppercase mb-6">
          Vorsorge &amp; Strategie
        </span>

        <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-inter-display)] font-semibold leading-[1.2] mb-5 max-w-3xl tracking-tight">
          Was, wenn morgen ein{" "}
          <span
            className="inline-block"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(-10px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
              color: "rgba(255, 255, 255, 0.55)",
            }}
          >
            {roles[index]}
          </span>
          {" "}kündigt?
        </h1>

        <p className="text-lg text-white/80 mb-9 max-w-md">
          Wir helfen Ihnen, für die Zukunft gerüstet zu sein.
        </p>

        <div className="flex items-center gap-3 flex-wrap justify-center">
          <a
            href="https://calendly.com/nicolas-sacherer-sacherer-partner/beratungsgesprach-personalstrategie-30m?month=2026-03"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-[#1a1a1a] px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Besetzungsbedarf klären
          </a>
        </div>
      </div>
    </div>
  );
}
