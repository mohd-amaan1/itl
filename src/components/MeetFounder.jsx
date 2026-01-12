import React from "react";
import leslie from "../assets/leslie.png";
import ParallelDottedLines from "./ParallelDottedLines";

const MeetFounder = () => {
  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden bg-[#020c12]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,#155E5A_0%,#083B3E_40%,#000000_100%)] pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-[1fr_1fr] flex-grow border-t border-b border-white/10">
          {/* ───── TOP LEFT (TITLE) ───── */}
          <div className="flex flex-col justify-center px-8 md:px-16 border-b border-white/10 lg:border-r">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-white/90" />
              <span className="text-xs tracking-[0.2em] uppercase text-white/80 font-semibold">
                Meet Our Founder
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] leading-tight">
              Leslie Martinich
            </h2>
          </div>

          {/* ───── TOP RIGHT (IMAGE) ───── */}
          <div className="relative border-b border-white/10 flex items-center justify-center overflow-hidden ">
            <img
              src={leslie}
              alt="Leslie Martinich"
              className="w-full h-full object-contain"
            />
          </div>

          {/* ───── BOTTOM LEFT (DESCRIPTION) ───── */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:border-r border-white/10 bg-white/[0.04] backdrop-blur-[1px] pt-3 pb-3">
            <div className="max-w-xl text-white/70 text-lg md:text-xl leading-relaxed space-y-8 font-light">
              <p>
                Leslie Martinich is a leadership expert with 20+ years of
                experience who founded the Institute of Trusted Leadership to
                address the global crisis of trust in organizations.
              </p>
              <p>
                Through evidence-based, practical approaches, her work develops
                leaders, transforms cultures, and scales trusted leadership
                worldwide.
              </p>
            </div>
          </div>

          {/* ───── BOTTOM RIGHT (CTA) ───── */}
          <div className="relative px-8 md:px-16 pt-16 pb-16">
            <a
              href="#meet-leslie"
              className="inline-flex items-center gap-4 group"
            >
              <span className="font-serif text-4xl md:text-5xl underline-offset-8 group-hover:underline">
                Meet Leslie
              </span>

              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ===== PAGINATION ===== */}
        <div className="flex items-center gap-8 text-white/40 font-serif text-lg mt-6 mb-6 justify-center px-4">
          <span className="text-white text-2xl">01</span>

          <ParallelDottedLines />

          <span className="text-2xl">02</span>

          <ParallelDottedLines />
          <span className="text-2xl">03</span>
        </div>
      </div>
    </section>
  );
};

export default MeetFounder;
