import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const Counter = ({ value, duration = 2, delay = 0 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { 
        duration, 
        delay,
        ease: "easeOut" 
      });
      return controls.stop;
    } else {
      count.set(0);
    }
  }, [inView, value, duration, delay, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

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

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto w-full"
      >

        {/* AVAILABILITY & LOCATION TAG */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 flex flex-wrap gap-4"
        >
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
        </motion.div>

        {/* HEADLINE */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(48px,10vw,110px)] font-black tracking-tighter leading-[0.9] mb-8 uppercase font-sans"
        >
          Creative <br />
          <span className="text-white/30">Design</span> <br />
          & Code
        </motion.h1>

        {/* SUBHEADLINE / BIO */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-sans"
        >
          <span className="text-white font-bold">Chrisnu Firmansyah</span> — Graphic Designer • Visual Content Creator • Web Developer. 5+ years of experience building visual assets and technically implementing them into digital products.
        </motion.p>

        {/* SOCIAL LINKS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-4 mb-14"
        >
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
              className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white hover:border-white transition-all group shadow-xl"
              title={social.name}
            >
              <img 
                src={social.icon} 
                alt={social.name}
                className="w-5 h-5 opacity-80 invert group-hover:opacity-100 group-hover:invert-0 transition-all"
              />
            </a>
          ))}
        </motion.div>
        
        {/* CTA BUTTONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap gap-5"
        >
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
        </motion.div>

        {/* QUICK STATS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-2 sm:flex sm:gap-12 gap-8 mt-16 opacity-80 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40"
        >
          <div>
            <span className="block text-3xl font-bold text-white mb-1 italic">
              <Counter value={3} delay={1} />+
            </span>
            Years Experience
          </div>
          <div>
            <span className="block text-3xl font-bold text-white mb-1 italic">
              <Counter value={5} delay={1.2} />+
            </span>
            Projects
          </div>
           <div>
            <span className="block text-3xl font-bold text-white mb-1 italic">
              <Counter value={5} delay={1.4} />+
            </span>
            Social Media Management
          </div>
          <div>
            <span className="block text-3xl font-bold text-white mb-1 italic">
              <Counter value={100} delay={1.6} />+
            </span>
            Designs Distributed
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
