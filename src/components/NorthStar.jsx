import eye from "../assets/eye.png";
import trophy from "../assets/trophy.png";
import target from "../assets/target.png";
import star from "../assets/star.png";

const OurNorthStar = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#023e36] via-[#062f35] to-[#031a29] text-white flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT – Circular Graphic */}
        <div className="relative flex justify-center lg:justify-start py-10">
          {/* Dashed circle container */}
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-white/20 flex items-center justify-center bg-white/[0.02] backdrop-blur-[1px]">
            
            {/* Center star */}
            <div className="relative z-10">
               <img
                src={star}
                alt="North Star"
                className="w-156 h-156 md:w-156 md:h-156 object-contain "
              />
            </div>

            {/* TOP – Eye (Active State) */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#007AFF] w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,122,255,0.4)] z-20">
              <img src={eye} alt="Vision" className="w-10 h-10 md:w-15 md:h-15 object-contain invert brightness-0 text-white" />
            </div>

            {/* BOTTOM LEFT – Target */}
            <div className="absolute bottom-6 left-0 md:bottom-12 md:-left-4 bg-white/10 backdrop-blur-md border border-white/5 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center z-20 transition-transform hover:scale-105">
              <img src={target} alt="Focus" className="w-10 h-10 md:w-15 md:h-15 object-contain opacity-90" />
            </div>

            {/* BOTTOM RIGHT – Trophy */}
            <div className="absolute bottom-6 right-0 md:bottom-12 md:-right-4 bg-white/10 backdrop-blur-md border border-white/5 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center z-20 transition-transform hover:scale-105">
              <img src={trophy} alt="Achievement" className="w-10 h-10 md:w-15 md:h-15 object-contain opacity-90" />
            </div>
          </div>
        </div>

        {/* RIGHT – Text Content */}
        <div className="flex flex-col justify-center">
          {/* Label */}
          <p className="text-xs font-bold tracking-[0.2em] text-white/80 mb-4 flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-white/90" />
            WHAT DRIVES US
          </p>

          {/* Main Heading */}
          <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
            Our North Star
          </h2>

          {/* Subheading */}
          <h3 className="font-serif italic text-3xl text-white mb-6">
            Vision
          </h3>

          {/* Description */}
          <p className="text-white/70 text-lg md:text-xl max-w-lg leading-relaxed mb-12">
            A world in which organizations are led by trust and committed to the
            continuous development of people and purpose.
          </p>

          {/* Progress Bar */}
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-white/80">1/3</span>
            <div className="w-40 h-1.5 bg-white/20 rounded-full relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-[#007AFF] rounded-full shadow-[0_0_10px_#007AFF]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurNorthStar;