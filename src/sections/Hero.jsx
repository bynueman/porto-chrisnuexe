import { useState } from "react";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("chrisnufirmans30@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black text-white px-6 overflow-hidden py-28 lowercase">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] top-[-100px] right-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] bottom-[-100px] left-[-100px]" />
      </div>

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-6xl mx-auto w-full">

        {/* AVAILABILITY & LOCATION TAG */}
        <div className="mb-8 flex flex-wrap gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-mono text-gray-400 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
            Open to On-site, Remote, & Hybrid
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-mono text-gray-400 bg-white/5 backdrop-blur-sm">
            <svg className="w-3 h-3 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Bantul, Yogyakarta
          </div>
        </div>

        {/* HEADLINE */}
        <h1 className="text-[clamp(48px,10vw,110px)] font-black tracking-tighter leading-[0.9] mb-8 uppercase font-sans">
          Creative <br />
          <span className="text-white/30">Developer &</span> <br />
          Product <span className="text-white/30">Builder.</span>
        </h1>

        {/* SUBHEADLINE */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed lowercase font-sans">
          creative-technical hybrid specializing in building internal business systems and high-impact visual branding — from functional dashboards to strategic digital content.
        </p>
        
        {/* CTA BUTTONS */}
        <div className="flex flex-wrap gap-5">
          <a
            href="#projects"
            className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all duration-300 active:scale-95 font-sans uppercase text-[10px] tracking-[0.2em] shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
          >
            View Projects
          </a>
          <button
            onClick={handleCopy}
            className={`border border-white/10 px-8 py-4 rounded-xl font-bold transition-all duration-300 active:scale-95 font-sans uppercase text-[10px] tracking-[0.2em] backdrop-blur-sm relative overflow-hidden group ${
              copied ? 'bg-green-600 text-white border-green-600' : 'bg-white/5 text-white hover:bg-white/10'
            }`}
          >
            <span className={copied ? 'opacity-0' : 'opacity-100 transition-opacity'}>
              Contact Me
            </span>
            {copied && (
              <span className="absolute inset-0 flex items-center justify-center text-[8px] animate-in fade-in zoom-in duration-300">
                Email Copied!
              </span>
            )}
          </button>
        </div>

        {/* QUICK STATS */}
        <div className="grid grid-cols-2 sm:flex sm:gap-12 gap-8 mt-16 opacity-80 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
          <div>
            <span className="block text-3xl font-bold text-white mb-1">5+</span>
            Years Experience
          </div>
          <div>
            <span className="block text-3xl font-bold text-white mb-1">5+</span>
            Projects
          </div>
           <div>
            <span className="block text-3xl font-bold text-white mb-1">5+</span>
            Social Media Management
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
