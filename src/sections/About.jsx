import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-black text-white relative overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-white/40 mb-4">
            Professional Profile
          </h2>
          <div className="h-px w-20 bg-blue-600 mb-8" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-white text-2xl md:text-4xl font-bold leading-tight tracking-tighter max-w-4xl italic">
            I build business systems that <span className="text-blue-500">solve real operational problems.</span>
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <p className="text-gray-400 text-lg leading-relaxed">
              With <span className="text-white">5+ years of experience</span> across freelance projects and digital production, I work across both design and development, creating systems that are not only functional, but <span className="text-white font-bold">actually used.</span>
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I’ve led creative direction and built web-based systems using <span className="text-white font-bold">PHP and JavaScript</span>, focusing on financial tracking, dashboards, and workflow automation.
            </p>
          </div>

          <div className="h-px w-full bg-white/5 my-4" />

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            From automating manual billing processes to structuring internal tools, I focus on building solutions that <span className="text-white">improve clarity, efficiency, and day-to-day operations.</span> Beyond development, I manage the <span className="text-white">full deployment lifecycle on Ubuntu VPS</span> using <span className="text-white font-bold">Termius</span>, ensuring every system I build is production-ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;