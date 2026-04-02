import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6 bg-black text-white border-t border-white/10">
      
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter uppercase font-sans">
          Selected <span className="text-white/30">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;