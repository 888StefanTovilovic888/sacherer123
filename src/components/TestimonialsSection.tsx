const testimonials = [
  {
    quote:
      "Sacherer & Partner helped us find a transformational CEO who has completely reshaped how our organization thinks about leadership. Their process was thorough, human, and deeply insightful.",
    name: "Sandra Müller",
    title: "Chair of the Board",
    company: "Global Financial Group",
    initials: "SM",
    color: "bg-blue-100 text-blue-700",
  },
  {
    quote:
      "The leadership development program they designed for our top 50 executives was unlike anything we had experienced. It created genuine alignment and a shared sense of purpose across the organization.",
    name: "James Okafor",
    title: "Chief People Officer",
    company: "International Technology Corp",
    initials: "JO",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    quote:
      "Their board advisory team brought incredible rigor and perspective to our succession process. We went from uncertainty to confidence in just a few months — with the right person in place.",
    name: "Yuki Tanaka",
    title: "CEO",
    company: "Asia Pacific Holdings",
    initials: "YT",
    color: "bg-violet-100 text-violet-700",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-[#F7F7F8]">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-gray-100 text-[#1a1a1a] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-inter-display)] font-semibold text-[#0A0A0A] tracking-tight leading-tight">
            What our clients say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Quote mark */}
              <span className="text-5xl text-[#1a1a1a] font-serif leading-none mb-4 select-none">
                &ldquo;
              </span>
              <p className="text-[#1a1a1a] text-base leading-relaxed flex-1 mb-7">
                {t.quote}
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-xs font-bold shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0A0A0A]">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.title} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
