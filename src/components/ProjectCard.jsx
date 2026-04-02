const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 group flex flex-col">
      {/* IMAGE PLACEHOLDER */}
      <div className="aspect-[16/10] bg-white/10 overflow-hidden relative border-b border-white/5">
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
          <span className="font-mono text-[10px] uppercase tracking-widest mb-2">Project Preview</span>
          <div className="w-12 h-[1px] bg-white/20"></div>
        </div>
        {/* TECH OVERLAY */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
          {project.tech?.map((t, i) => (
            <span key={i} className="bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-white/70 border border-white/10 uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-black mb-3 group-hover:text-blue-400 transition-colors tracking-tighter">
          {project.title}
        </h3>
        <p className="text-white/40 text-sm mb-10 line-clamp-2 leading-relaxed flex-1">
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
    </div>
  );
};

export default ProjectCard;