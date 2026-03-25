import Image from "next/image";

const logos = [
  { src: "/logos/raiser.png", alt: "Raiser" },
  { src: "/logos/dlk.png", alt: "DLK" },
  { src: "/logos/iserv.png", alt: "Iserv" },
  { src: "/logos/duensing.png", alt: "Duensing" },
  { src: "/logos/sp.png", alt: "S+P" },
  { src: "/logos/evi.png", alt: "Evi" },
  { src: "/logos/janbode.webp", alt: "Jan Bode" },
  { src: "/logos/logo2.png", alt: "Partner" },
  { src: "/logos/logo6.png", alt: "Partner" },
  { src: "/logos/logo8.png", alt: "Partner" },
];

export default function LogoCarousel() {
  return (
    <section className="bg-[#1a1a1a] py-10 overflow-hidden">
      {/* Title */}
      <p className="text-center text-white text-xs font-semibold tracking-widest uppercase mb-8">
        Trusted by 100+ Market Leaders
      </p>


      {/* Scrolling track */}
      <div className="relative flex">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />

        {/* Animated strip — duplicated for seamless loop */}
        <div className="flex animate-logo-scroll">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-12 shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="h-10 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
