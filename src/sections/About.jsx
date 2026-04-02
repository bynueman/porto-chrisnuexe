const About = () => {
  return (
    <section id="about" className="py-28 px-6 bg-black text-white border-t border-white/10">
      
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tighter uppercase font-sans">
          About <span className="text-white/30">Me</span>
        </h2>

        <div className="space-y-6 lowercase">
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            i am a <span className="text-white font-bold">creative-technical hybrid</span> with over 5+ years of commercial experience spanning from international freelance production to high-level digital leadership.
          </p>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            having served as a <span className="text-white">creative chief officer (cco)</span>, i bridge the gap between aesthetics and function: building robust web systems using <span className="text-white">PHP/JavaScript</span> while maintaining a sharp, unified brand identity across all platforms.
          </p>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            from automating manual billing workflows to lead-creative direction for organizations, i build systems that are not just "features" — but cohesive, functional solutions for real-world operational challenges.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;