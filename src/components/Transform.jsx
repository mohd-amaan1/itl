import React from "react";

const TransformLeadership = () => {
  const items = [
    {
      title: "Research & Insights",
      points: [
        "Evidence-based leadership models",
        "Continuous innovation",
        "Data-driven understanding",
      ],
      containerClass: "mt-0",
      barHeight: "h-[400px]", 
    },
    {
      title: "Training & Development",
      points: [
        "Practical skill-building",
        "Certification programs",
        "Organizational transformation",
      ],
      containerClass: "mt-12 md:mt-48",
      barHeight: "h-[350px]",
    },
    {
      title: "Consulting & Implementation",
      points: [
        "Strategic partnership",
        "Custom solutions",
        "Measurable impact",
      ],
      containerClass: "mt-12 md:mt-96",
      barHeight: "h-[300px]",
    },
  ];

  return (
    <section className="relative w-full min-h-screen text-white py-24 md:py-32 overflow-hidden">
      {/* BACKGROUND GRADIENT: */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_10%,#020609_30%,#0A1A33_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* --- HEADER SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-12 items-start">
          
          {/* Left: Tag + Title */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 bg-white " />
              <span className="text-[10px] md:text-xs tracking-[0.25em] text-white/80 uppercase font-sans">
                Our Methodology
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              How We Transform Leadership
            </h2>
          </div>

          {/* Right: Description Paragraph */}
          <div className="md:pt-14">
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
              Trusted leadership isn't built on theory alone. Our integrated
              approach combines rigorous research, practical training to create
              lasting organizational change.
            </p>
          </div>
        </div>

        {/* --- STAGGERED COLUMNS SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 min-h-[800px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-row gap-6 ${item.containerClass}`}
            >
              {/* Dark Bar / Pillar */}
              <div
                className={`w-16 md:w-20 lg:w-24 shrink-0 rounded-sm bg-gradient-to-b from-white/5 to-transparent ${item.barHeight}`}
              />

              {/* Text Content */}
              <div className="pt-2">
                <h3 className="font-serif text-2xl md:text-3xl mb-6 leading-tight text-white/90">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-white/60 text-sm leading-relaxed"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/40 mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformLeadership;