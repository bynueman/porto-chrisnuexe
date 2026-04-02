const Gallery = () => {
  const items = [
    { id: 1, title: "Foodie Journey", category: "Social Media Management", image: null },
    { id: 2, title: "Tech Gear Insider", category: "Content Strategy", image: null },
    { id: 3, title: "Travel Bliss", category: "Community Management", image: null },
    { id: 4, title: "Fitness Pro", category: "Visual Content", image: null },
    { id: 5, title: "Eco Glow", category: "Engagement Growth", image: null },
    { id: 6, title: "Urban Pulse", category: "Brand Voice", image: null },
  ];

  // Duplicate items for infinite loop
  const displayItems = [...items, ...items];

  return (
    <section id="gallery" className="py-28 bg-black overflow-hidden border-t border-white/10">
      <div className="px-6 lg:px-20 mb-12">
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-sans">
          Visual <span className="text-white/30">Showcase</span>
        </h2>
        <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">
          Seksi ini fokus pada Social Media Management & Brand Strategy
        </p>
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="relative flex overflow-hidden group/marquee">
        <div className="flex animate-marquee group-hover/marquee:[animation-play-state:paused] whitespace-nowrap gap-6 py-4">
          {displayItems.map((item, idx) => (
            <div 
              key={idx} 
              className="w-[260px] md:w-[320px] aspect-[9/16] bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-end p-8 overflow-hidden relative group/item hover:border-blue-500/50 transition-all duration-500 shrink-0"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              {/* PLACEHOLDER ICON/ART */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 group-hover/item:opacity-20 group-hover/item:scale-110 transition-all duration-700">
                <svg className="w-40 h-40 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <div className="relative z-10">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-500 mb-2">{item.category}</p>
                <h3 className="text-xl font-bold tracking-tighter text-white uppercase">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Gallery;
