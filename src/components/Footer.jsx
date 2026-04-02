const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-black text-white border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* SOCIAL & LOCATION */}
        <div className="mb-10 flex flex-col gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-gray-500">
          <p>
            social media <span className="text-white">@chrisnuexe</span>   |   Bantul, DI Yogyakarta
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="https://linkedin.com/in/chrisnu-firmansyah" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-[10px] font-mono text-white/50 hover:text-white hover:border-white/30 transition-all active:scale-95 flex items-center gap-3 group/link"
            >
              <img 
                src="https://unpkg.com/simple-icons@v11/icons/linkedin.svg" 
                alt="LinkedIn"
                className="w-4 h-4 opacity-40 group-hover/link:opacity-100 transition-opacity invert"
              />
              LinkedIn
            </a>
            <a 
              href="https://github.com/bynueman" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-[10px] font-mono text-white/50 hover:text-white hover:border-white/30 transition-all active:scale-95 flex items-center gap-3 group/link"
            >
              <img 
                src="https://unpkg.com/simple-icons@v11/icons/github.svg" 
                alt="GitHub"
                className="w-4 h-4 opacity-40 group-hover/link:opacity-100 transition-opacity invert"
              />
              GitHub
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="text-gray-600 text-[10px] font-sans tracking-widest uppercase font-bold">
          &copy; {new Date().getFullYear()} Chrisnu Firmansyah. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
