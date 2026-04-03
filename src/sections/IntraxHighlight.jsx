import intraxCover from "../assets/projects/intrax/intrax.png";

const IntraxHighlight = () => {
  return (
    <section id="intrax" className="py-28 px-6 lg:px-20 bg-[#080910] border-t border-white/5 relative overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 -z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-3 font-mono text-[10px] text-blue-500 uppercase tracking-[0.2em] mb-10">
            <span className="w-5 h-[1px] bg-blue-500 shadow-[0_0_10px_rgba(79,142,255,0.5)]"></span>
            Featured Project
          </div>

          <h2 className="text-[clamp(40px,5vw,64px)] font-black tracking-tighter leading-[0.95] mb-8 uppercase">
            Intrax <br />
            <span className="text-grad">System</span>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl">
            AI-powered smart financial bookkeeping system integrated with Telegram. 
            <strong> Eliminates manual input hassle</strong> with automatic detection from receipts, text messages, and voice notes.
          </p>

          <div className="flex flex-col gap-6 mb-12">
            {[
              { title: "AI-Powered Parsing", desc: "Automatically detects amounts, categories, and wallets." },
              { title: "Real-time Dashboard", desc: "Deep expense analysis with a highly responsive UI." },
              { title: "Multi-Platform Input", desc: "Log transactions via Telegram from anywhere, anytime." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(79,142,244,1)]" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-wider">{item.title}</h4>
                  <p className="text-white/30 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a 
            href="https://intrax.web.id" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-lg font-bold text-sm hover:bg-blue-500 hover:border-blue-500 transition-all group"
          >
            Explore This System <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>

        {/* RIGHT CONTENT: MOCKUP UI */}
        <div className="order-1 lg:order-2 relative group">
          <div className="absolute inset-0 bg-blue-500/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative border border-white/10 rounded-2xl overflow-hidden bg-[#0d0f1a] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
            <div className="h-8 bg-white/5 flex items-center gap-1.5 px-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
            </div>
            
            {/* MOCKUP IMAGE */}
            <div className="aspect-video relative overflow-hidden group">
              <img 
                src={intraxCover} 
                alt="Intrax Dashboard Mockup" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1a] via-transparent to-transparent opacity-60" />
              
              {/* ACCENT SHAPES */}
              <div className="absolute top-10 right-10 w-24 h-1 bg-blue-500 rounded shadow-[0_0_15px_rgba(79,142,255,0.8)]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IntraxHighlight;