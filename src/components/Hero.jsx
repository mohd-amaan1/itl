const scrollToBottomAccelerated = () => {
  const start = window.scrollY;
  const end = document.documentElement.scrollHeight - window.innerHeight;
  const distance = end - start;

  const duration = 1400; 
  let startTime = null;

  // Ease-in (slow → fast)
  const easeInCubic = (t) => t * t * t;

  const animation = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + distance * easeInCubic(progress));

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-black via-[#0B2E1E] to-[#0A4E7A] text-white">
      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span
              className="font-serif italic font-bold text-white leading-none"
              style={{ fontSize: "28px", width: "65px" }}
            >
              I.T.L
            </span>

            <span
              className="font-serif text-white leading-tight"
              style={{ fontSize: "14px", width: "137px" }}
            >
              Institute for
              <br />
              Trusted Leadership
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#" className="text-white transition">
              The Institute
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Our Approach
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Ecosystem
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Insights
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Contact Us
            </a>
          </nav>
        </div>
        <div className="border-t border-white/10 max-w-7xl mx-auto" />
      </header>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <p className="text-xs tracking-widest text-gray-300 mb-6 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-white font-extrabold" />
              BUILT ON SOLID GROUND
            </p>

            <h1 className="font-serif text-white leading-tight ">
              <span className="block text-5xl md:text-6xl">
                Building Leaders&nbsp;–
              </span>

              <span className="block text-5xl md:text-6xl">
                <span className="italic font-normal text-[#525252] mr-2">
                  the
                </span>
                World Can Trust.
              </span>
            </h1>
          </div>

          {/* Mobile paragraph */}
          <p className="mt-6 mb-6 text-base text-white/80 leading-relaxed md:hidden max-w-sm">
            Where purpose meets people. Where organizations transform through
            trusted leadership, continuous learning, & human responsibility.
          </p>

          {/* Right Diagonal Text */}
          <div className="relative hidden md:block">
            <p className="absolute right-0 top-32 max-w-lg text-lg text-gray-200 leading-relaxed transform  translate-x-12 translate-y-36">
              Where purpose meets people. Where organizations transform through
              trusted leadership, continuous learning, & human responsibility.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Divider + Scroll */}
      <div className="absolute bottom-12 left-0 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full h-px bg-white/15 mb-6" />

          {/* Scroll row */}
          <div className="flex items-center justify-between text-sm text-gray-300">
            <span>Scroll to Discover</span>
            <button
              onClick={scrollToBottomAccelerated}
              aria-label="Scroll to bottom"
              className="text-lg transition-transform hover:translate-y-1 hover:text-white focus:outline-none"
            >
              ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
