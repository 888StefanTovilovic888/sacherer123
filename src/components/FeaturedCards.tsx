import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    tag: "Leadership Insights",
    title: "Expert answers to guide your leadership future",
    description:
      "In partnership with Harvard Business Review, our consultants tackle the most pressing questions facing today's C-suite executives.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&q=80",
  },
  {
    tag: "CEO Research",
    title: "The CEO Response: Insights from 1,235 global leaders",
    description:
      "Our landmark global study reveals how today's top CEOs are navigating uncertainty, digital disruption, and stakeholder complexity.",
    image:
      "https://images.unsplash.com/photo-1553484771-047a44eee27b?w=600&h=400&fit=crop&q=80",
  },
  {
    tag: "AI & Technology",
    title: "How to identify the best AI leader for your organization",
    description:
      "As AI reshapes every industry, finding a leader who can harness its potential while managing its risks has never been more critical.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80",
  },
];

export default function FeaturedCards() {
  return (
    <section className="bg-white py-16 px-6 border-b border-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <a
              key={card.title}
              href="#"
              className="group flex flex-col rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#1a1a1a] mb-3">
                  {card.tag}
                </span>
                <h3 className="font-[family-name:var(--font-inter-display)] font-bold text-[#0A0A0A] text-lg leading-snug mb-3 group-hover:text-[#1a1a1a] transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[#1a1a1a] text-sm font-semibold">
                  Read more
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
