import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Prevent touch move on mobile
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    };
  }, [isMenuOpen]);

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("chrisnufirmans30@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Gallery", href: "#gallery" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    <nav
      className={`fixed top-0 left-0 w-full z-[1010] transition-all duration-500 px-6 py-5 ${
        isScrolled ? "bg-[#080910]/90 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
      }`}
    >
        <div className="max-w-6xl mx-auto flex justify-between items-center relative z-[1002]">
          
          {/* LOGO */}
          <a href="#home" className="text-lg sm:text-xl font-bold tracking-tighter flex items-center gap-2 group shrink-0">
            <span className="bg-white text-black px-2 py-0.5 rounded text-lg transition-transform group-hover:scale-110">C</span>
            <span className="opacity-80 group-hover:opacity-100 transition-opacity xs:hidden">Portfolio</span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-gray-400 hover:text-white transition-all hover:translate-y-[-1px]"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleCopy}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all duration-300 relative overflow-hidden group ${
                copied ? 'bg-green-600 text-white' : 'bg-white/10 border border-white/10 text-white hover:bg-white hover:text-black uppercase tracking-wider'
              }`}
            >
              <span className={copied ? 'opacity-0' : 'opacity-100 transition-opacity'}>
                Copy Email
              </span>
              {copied && (
                <span className="absolute inset-0 flex items-center justify-center text-[10px] animate-in fade-in zoom-in duration-300 uppercase">
                  Copied!
                </span>
              )}
            </button>
          </div>

          {/* MOBILE MENU TOGGLE (Animated Hamburger) */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none z-[1003]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY - FULLY OPAQUE BLACK TO PREVENT BLEEDING */}
      <div
        className={`fixed inset-0 bg-[#080910] z-[1001] flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-6 text-center">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-3xl sm:text-5xl font-black tracking-tighter text-white/80 hover:text-white transition-all duration-300 uppercase ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          
          <div className={`mt-8 transition-all duration-500 delay-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={handleCopy}
              className={`px-12 py-5 rounded-2xl text-lg font-black transition-transform active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)] relative overflow-hidden group uppercase tracking-widest ${
                copied ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              <span className={copied ? 'opacity-0' : 'opacity-100 transition-opacity'}>
                Copy Email
              </span>
              {copied && (
                <span className="absolute inset-0 flex items-center justify-center text-sm animate-in fade-in zoom-in duration-300">
                  Email Copied!
                </span>
              )}
            </button>
          </div>
        </div>

        {/* FOOTER IN MENU */}
        <div className={`absolute bottom-12 flex flex-col items-center gap-4 transition-all duration-700 delay-500 ${isMenuOpen ? 'opacity-40' : 'opacity-0'}`}>
           <p className="font-mono text-[10px] uppercase tracking-widest italic text-white/50">Yogyakarta, Indonesia</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
