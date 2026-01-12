
const DoubleDashedLine = () => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-[1400px] mx-auto opacity-40">
      <div className="w-full [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
        <div
          className="h-[2px] w-full mb-2"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.8) 50%, transparent 50%)",
            backgroundSize: "4px 100%",
            backgroundRepeat: "repeat-x",
          }}
        />
        <div
          className="h-[2px] w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.8) 50%, transparent 50%)",
            backgroundSize: "4px 100%",
            backgroundRepeat: "repeat-x",
          }}
        />
      </div>
    </div>
  );
};

const WhyWeExist = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#020504] text-white overflow-hidden flex flex-col">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#113a2f_0%,#041812_40%,#000000_80%)] pointer-events-none" />

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 md:pt-32 flex-grow flex flex-col justify-between">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-12">
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-1.5 h-1.5 bg-white " />
            <span className="text-[10px] md:text-xs tracking-[0.25em] text-white/80 uppercase font-sans">
              The Solution
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 font-light">
            <span className="italic text-white/60 font-medium pr-3 block md:inline">This is</span>
            <span>Why We Exist</span>
          </h2>

          <p className="text-white/50 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
            Trust transforms everything engagement, innovation, performance, &
            culture. The Institute of Trusted Leadership scales this impact
            through research-backed methods, turning trusted leadership into the
            global standard.
          </p>
        </div>

        {/* --- THREE COLUMNS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full max-w-5xl mx-auto items-center md:items-end pb-12 md:pb-0">
          
          {/* COLUMN 1: LEFT ALIGNED (Desktop) / CENTER (Mobile) */}
          <div className="flex flex-col justify-end items-center md:items-start text-center md:text-left">
            {/* Text Content */}
            <div className="pb-0 flex flex-col items-center md:items-start">
              <div className="font-serif text-8xl md:text-9xl leading-none mb-2 bg-gradient-to-b from-white via-white/40 to-transparent bg-clip-text text-transparent select-none">
                1
              </div>
              <h3 className="uppercase tracking-[0.15em] text-sm font-semibold mb-4 text-white/90">
                ITL Approach
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-[260px]">
                Evidence-based methodology combining research, training, and
                consulting to build trusted leaders.
              </p>
            </div>
            {/* Pole: HIDDEN on Mobile, Visible on Desktop */}
            <div className="hidden md:block w-[2px] h-24 bg-gradient-to-t from-white/40 via-white/40 to-transparent mt-2 md:ml-[2px]" />
          </div>

          {/* COLUMN 2: CENTER ALIGNED */}
          <div className="flex flex-col justify-end items-center text-center">
            {/* Text Content */}
            <div className="pb-0 flex flex-col items-center">
              <div className="font-serif text-8xl md:text-9xl leading-none mb-2 bg-gradient-to-b from-white via-white/40 to-transparent bg-clip-text text-transparent select-none">
                2
              </div>
              <h3 className="uppercase tracking-[0.15em] text-sm font-semibold mb-4 text-white/90">
                Our Ecosystem
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-[260px]">
                Four integrated divisions delivering comprehensive leadership
                solutions from awareness to transformation.
              </p>
            </div>
            {/* Pole: HIDDEN on Mobile, Visible on Desktop */}
            <div className="hidden md:block w-[2px] h-48 bg-gradient-to-t from-white/40 via-white/40 to-transparent mt-2" />
          </div>

          {/* COLUMN 3: RIGHT ALIGNED (Desktop) / CENTER (Mobile) */}
          <div className="flex flex-col justify-end items-center md:items-end text-center md:text-right">
            {/* Text Content */}
            <div className="pb-0 flex flex-col items-center md:items-end">
              <div className="font-serif text-8xl md:text-9xl leading-none mb-4 bg-gradient-to-b from-white via-white/40 to-transparent bg-clip-text text-transparent select-none">
                3
              </div>
              <h3 className="uppercase tracking-[0.15em] text-sm font-semibold mb-4 text-white/90">
                Global Impact
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-[260px]">
                UN SDG-aligned programs ensuring every initiative creates
                measurable social value.
              </p>
            </div>
            {/* Pole: HIDDEN on Mobile, Visible on Desktop */}
            <div className="hidden md:block w-[2px] h-24 bg-gradient-to-t from-white/40 via-white/40 to-transparent mt-2 md:mr-[2px]" />
          </div>

        </div>
      </div>

      {/* --- BOTTOM DASHED LINES --- */}
      <div className="relative z-10 px-6 pb-12 w-full">
         <DoubleDashedLine />
      </div>
    </section>
  );
};

export default WhyWeExist;