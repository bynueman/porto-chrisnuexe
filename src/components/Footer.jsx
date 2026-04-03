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
            {[
              { name: "LinkedIn", icon: "https://unpkg.com/simple-icons@v11/icons/linkedin.svg", href: "https://www.linkedin.com/in/chrisnu-firmansyah" },
              { name: "GitHub", icon: "https://unpkg.com/simple-icons@v11/icons/github.svg", href: "https://github.com/bynueman" },
              { name: "Email", icon: "https://unpkg.com/simple-icons@v11/icons/gmail.svg", href: "mailto:chrisnufirmans30@gmail.com" },
              { name: "Instagram", icon: "https://unpkg.com/simple-icons@v11/icons/instagram.svg", href: "https://instagram.com/chrisnuexe" }
            ].map((social) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank" 
                rel="noreferrer" 
                className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-[10px] font-mono text-white/50 hover:text-black hover:bg-white hover:border-white transition-all active:scale-95 flex items-center gap-3 group/link"
              >
                <img 
                  src={social.icon} 
                  alt={social.name}
                  className="w-4 h-4 opacity-80 invert group-hover/link:invert-0 transition-all"
                />
                {social.name}
              </a>
            ))}
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
