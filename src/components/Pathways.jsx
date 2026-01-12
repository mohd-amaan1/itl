import lucaImage from "../assets/luca.png"; 

const FourPathways = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#020817] via-[#011c38] to-[#005c4b] text-white py-16 px-6 md:px-12 md:py-24 overflow-hidden font-sans">
      
      {/* Subtle bottom overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#00e096]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-white" />
            <span className="text-[10px] md:text-xs tracking-[0.25em] text-white/80 uppercase font-sans font-bold">
              Built on Solid Ground
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-6">
            One Vision. <br />
            Four Pathways to Impact.
          </h2>
          <p className="text-white/70 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto font-light">
            The Institute of Trusted Leadership operates through an integrated
            ecosystem of specialized divisions, each designed to address
            different aspects of leadership development and organizational
            transformation.
          </p>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          
          {/* === CARD 1: LUCA */}
          <div className="col-span-1 lg:col-span-2 bg-[#03111d]/60 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 flex flex-col group hover:border-white/20 transition-colors">
            {/* Header Tag */}
            <div className="bg-[#0c3b6d] w-fit py-2 px-4 flex items-center gap-2 rounded-br-lg">
              <div className="w-1 h-1 bg-white" />
              <span className="text-[10px] tracking-[0.15em] font-bold text-white uppercase">
                Open to All
              </span>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col h-full">
              <div className="w-full aspect-video bg-white rounded-lg overflow-hidden mb-6 relative shadow-lg">
                 <img
                  src={lucaImage}
                  alt="Luca The Leader Interface"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-auto">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-2xl md:text-3xl">LUCA The Leader</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-white/80"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
                <p className="text-white/90 text-base md:text-lg mb-4">
                  Where Leadership Awareness Begins
                </p>
                <p className="text-white/60 text-sm leading-relaxed max-w-md">
                  Our flagship CSR initiative bringing trusted leadership
                  awareness to communities, organizations, and emerging leaders.
                </p>
              </div>
            </div>
          </div>

          {/* === CARD 2: CONSULTING === */}
          <div className="col-span-1 lg:col-span-1 bg-[#03111d]/60 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 flex flex-col group hover:border-white/20 transition-colors min-h-[200px] lg:h-auto">
            <div className="bg-[#0c3b6d] w-full py-3 px-4 flex flex-col gap-1 border-b border-white/5">
              <div className="w-1 h-1 bg-white mb-1" />
              <span className="text-[10px] tracking-[0.15em] font-bold text-white uppercase leading-tight">
                For <br className="hidden lg:block"/> Organizations
              </span>
            </div>
            
            <div className="flex-grow flex items-center justify-center p-8 lg:p-0">
              <div className="flex flex-col items-center gap-2 text-center lg:[writing-mode:vertical-rl] lg:rotate-180">
                <h3 className="font-serif text-xl md:text-2xl tracking-wide text-white">
                  MARTINICH CONSULTING
                </h3>
                <p className="text-[10px] tracking-[0.25em] text-white/60 uppercase font-sans">
                  Strategic Leadership Partnerships
                </p>
              </div>
            </div>
          </div>

          {/* === CARD 3: INSTITUTE === */}
          <div className="col-span-1 lg:col-span-1 bg-[#03111d]/60 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 flex flex-col group hover:border-white/20 transition-colors min-h-[200px] lg:h-auto">
             <div className="bg-[#0c3b6d] w-full py-3 px-4 flex flex-col gap-1 border-b border-white/5">
              <div className="w-1 h-1 bg-white mb-1" />
              <span className="text-[10px] tracking-[0.15em] font-bold text-white uppercase leading-tight">
                For Individuals <br className="hidden lg:block"/> & Teams
              </span>
            </div>
            
            <div className="flex-grow flex items-center justify-center p-8 lg:p-0">
              <div className="flex flex-col items-center gap-2 text-center lg:[writing-mode:vertical-rl] lg:rotate-180">
                <h3 className="font-serif text-xl md:text-2xl tracking-wide text-white">
                  MARTINICH INSTITUTE
                </h3>
                <p className="text-[10px] tracking-[0.25em] text-white/60 uppercase font-sans">
                  Learning That Transforms
                </p>
              </div>
            </div>
          </div>

          {/* === CARD 4: R&D === */}
          <div className="col-span-1 lg:col-span-1 bg-[#03111d]/60 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 flex flex-col group hover:border-white/20 transition-colors min-h-[200px] lg:h-auto">
             <div className="bg-[#0c3b6d] w-full py-3 px-4 flex flex-col gap-1 border-b border-white/5">
              <div className="w-1 h-1 bg-white mb-1" />
              <span className="text-[10px] tracking-[0.15em] font-bold text-white uppercase leading-tight">
                For Research & <br className="hidden lg:block"/> Innovation
              </span>
            </div>
            
            <div className="flex-grow flex items-center justify-center p-8 lg:p-0">
              <div className="flex flex-col items-center gap-2 text-center lg:[writing-mode:vertical-rl] lg:rotate-180">
                <h3 className="font-serif text-xl md:text-2xl tracking-wide text-white">
                  MARTINICH R&D
                </h3>
                <p className="text-[10px] tracking-[0.25em] text-white/60 uppercase font-sans">
                  Innovation Meets Insight
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FourPathways;