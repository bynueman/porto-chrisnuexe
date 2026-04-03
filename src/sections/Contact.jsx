import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("chrisnufirmans30@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 bg-black text-white border-t border-white/10"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >

        {/* HEADLINE */}
        <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase font-sans">
          Let’s build <span className="text-white/30">something real.</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed lowercase font-sans">
          Open to on-site, remote, and hybrid opportunities — building web systems, dashboards, and digital products that drive real operational impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={handleCopy}
            className={`w-full sm:w-auto px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all duration-300 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)] relative overflow-hidden group ${
              copied ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            <span className={copied ? 'opacity-0' : 'opacity-100 transition-opacity'}>
              Copy Email Address
            </span>
            {copied && (
              <span className="absolute inset-0 flex items-center justify-center text-[10px] animate-in fade-in zoom-in duration-300">
                Email Copied!
              </span>
            )}
          </button>
        </div>

      </motion.div>
    </section>
  );
};

export default Contact;