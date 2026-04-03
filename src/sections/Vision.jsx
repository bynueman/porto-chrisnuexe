const Vision = () => {
  const futureCards = [
    {
      icon: "🎨",
      title: "Motion & 3D design",
      desc: "Exploring the world of motion graphics and 3D — the next layer of high-value visual work rarely touched by traditional designers."
    },
    {
      icon: "⛓️",
      title: "Blockchain & Web3",
      desc: "Decentralized platforms need designers who also understand code. I position myself at that intersection — where creation value is highest."
    },
    {
      icon: "🚀",
      title: "Fullstack product builder",
      desc: "Evolving from feature building to product architecture — mastering deeper tech stacks from database schemas to polished interfaces."
    },
    {
      icon: "🌏",
      title: "Global creative-tech roles",
      desc: "Remote-first, globally connected. Having worked with international clients — I am designed for cross-border collaboration."
    }
  ];

  return (
    <section id="vision" className="py-28 px-6 lg:px-20 bg-[#0d0f1a] border-t border-white/5 relative overflow-hidden">
      
      {/* SECTION LABEL */}
      <div className="flex items-center gap-3 font-mono text-[10px] text-blue-500 uppercase tracking-[0.2em] mb-14">
        <span className="w-5 h-[1px] bg-blue-500 shadow-[0_0_10px_rgba(79,142,255,0.5)]"></span>
        06 — Vision
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div className="opacity-0 animate-[fadeSlideUp_0.8s_ease_forwards]">
          <h2 className="text-[clamp(40px,5vw,64px)] font-black leading-tight tracking-[calc(-0.04em)] mb-8">
            Building toward <br />
            <span className="font-serif italic font-normal text-blue-500 pr-4 lowercase">what's next.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-8">
            I don't follow trends — I build a future where 
            <strong> design and technology unite</strong> in ways that haven't been fully explored yet. 
            My roadmap is intentional: deepening technical skills, exploring decentralized platforms, and building meaningful products.
          </p>
        </div>

        {/* RIGHT CONTENT: VISION CARDS */}
        <div className="grid gap-3 opacity-0 animate-[fadeSlideUp_0.8s_0.2s_ease_forwards]">
          {futureCards.map((card, idx) => (
            <div key={idx} className="group bg-white/[0.03] border border-white/5 p-6 rounded-lg flex gap-6 items-start transition-all duration-300 hover:bg-blue-500/[0.04] hover:border-blue-500/20">
              <div className="w-12 h-12 shrink-0 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-xl shadow-[inset_0_0_15px_rgba(79,142,255,0.1)] group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-2 tracking-tight uppercase tracking-wider">{card.title}</h4>
                <p className="text-white/30 text-xs leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Vision;
