import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col h-full shadow-2xl"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
      </div>

      {/* CONTENT */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono uppercase tracking-widest text-white/50">
            {project.subtitle}
          </span>
        </div>

        <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 font-sans italic group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow lowercase font-sans">
          {project.description}
        </p>
        
        {/* LINKS */}
        <div className="flex gap-3 items-center">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/50 hover:bg-white/5 hover:text-white transition-all active:scale-95 bg-white/5 group/btn"
          >
            <img 
              src="https://unpkg.com/simple-icons@v11/icons/github.svg" 
              alt="GitHub"
              className="w-3.5 h-3.5 opacity-40 group-hover/btn:opacity-100 transition-opacity invert"
            />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-900/20 group/btn"
          >
            <svg className="w-3.5 h-3.5 opacity-80 group-hover/btn:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Launch
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;