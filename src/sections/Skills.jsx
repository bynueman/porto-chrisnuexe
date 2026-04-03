import { motion } from "framer-motion";

const Skills = () => {
  const skillGroups = [
    {
      title: "Graphic Design",
      color: "text-blue-400",
      bar: "bg-blue-500",
      skills: [
        { name: "Adobe Photoshop", icon: "adobephotoshop" },
        { name: "CorelDraw", icon: "coreldraw" },
        { name: "Canva", icon: "canva" },
        { name: "Figma", icon: "figma" }
      ]
    },
    {
      title: "Web Development",
      color: "text-purple-400",
      bar: "bg-purple-500",
      skills: [
        { name: "React", icon: "react" },
        { name: "Laravel", icon: "laravel" },
        { name: "Filament", icon: "filamentphp" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "Vite", icon: "vite" },
        { name: "PHP", icon: "php" },
        { name: "JavaScript", icon: "javascript" },
        { name: "WordPress", icon: "wordpress" },
        { name: "Ubuntu", icon: "ubuntu" },
        { name: "Termius", icon: "termius" },
        { name: "GitHub", icon: "github" }
      ]
    },
    {
      title: "Video & Media",
      color: "text-red-400",
      bar: "bg-red-500",
      skills: [
        { name: "Adobe Premiere", icon: "adobepremierepro" },
        { name: "CapCut", icon: "capcut" }
      ]
    },
    {
      title: "Digital Marketing",
      color: "text-green-400",
      bar: "bg-green-500",
      skills: [
        { name: "SEO", icon: "google" },
        { name: "Content Strategy", icon: "instagram" },
        { name: "Visual Branding", icon: "behance" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-28 px-6 bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black mb-16 tracking-tighter uppercase font-sans"
        >
          Skills & <span className="text-white/30">Focus</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-10 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300 group"
            >
              <h3 className={`text-xl font-bold mb-8 flex items-center gap-3 ${group.color} uppercase tracking-widest font-sans`}>
                <span className={`w-1.5 h-6 ${group.bar} rounded-full`}></span>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-white hover:border-white/30 transition-colors group/item"
                  >
                    <img 
                      src={`https://cdn.simpleicons.org/${skill.icon}/ffffff`} 
                      alt={skill.name}
                      className="w-4 h-4 opacity-40 group-hover/item:opacity-100 transition-opacity"
                      onError={(e) => { e.target.style.display = 'none'; }} 
                    />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;