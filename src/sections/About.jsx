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
          className="space-y-6 lowercase"
        >
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            i am a <span className="text-white font-bold">creative-technical hybrid</span> with over 5+ years of commercial experience spanning from international freelance production to high-level digital leadership.
          </p>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            having served as a <span className="text-white">creative chief officer (cco)</span>, i bridge the gap between aesthetics and function: building robust web systems using <span className="text-white">PHP/JavaScript</span> while maintaining a sharp, unified brand identity across all platforms.
          </p>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            from automating manual billing workflows to lead-creative direction for organizations, i build systems that are not just "features" — but cohesive, functional solutions for real-world operational challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;