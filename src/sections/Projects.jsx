import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#080910]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="inline-block py-1 px-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-6">
            Featured Works
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4 font-sans leading-none">
            Selected <span className="text-white/20">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-lg lowercase font-sans">
            A small selection of business-critical systems and creative digital solutions developed for various commercial needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;