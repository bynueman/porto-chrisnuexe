const Experience = () => {
  const experiences = [
    {
      company: "Hubungins",
      period: "MAY 2025 – JAN 2026",
      role: "WEB DEVELOPER",
      points: [
        "Built landing pages from scratch using JavaScript — focusing on architecture, responsive design, and performance optimization.",
        "Developed an internal invoice system (PHP) that fully replaced manual billing processes.",
        "Managed 2 active GitHub repositories with a clean and maintainable codebase."
      ]
    },
    {
      company: "Unteyo Journey",
      period: "OCT 2024 – JAN 2026",
      role: "CREATIVE CHIEF OFFICER (CCO)",
      points: [
        "Established organization-wide visual standards, design guidelines, and content quality policies.",
        "Approved every creative asset before publication — maintaining a consistent brand identity across all channels.",
        "Co-designed and architected the Unteyo Journey website from concept to visual implementation."
      ]
    },
    {
      company: "Indokonveksi",
      period: "FEB 2025 – JUL 2025",
      role: "GRAPHIC DESIGNER (FREELANCE)",
      points: [
        "Delivered production-ready garment design assets remotely with minimal revision cycles."
      ]
    },
    {
      company: "International Freelance",
      period: "DEC 2019 – JAN 2025",
      role: "GRAPHIC DESIGNER · 5 YEARS",
      points: [
        "Built an independent design practice for 5 years serving international clients through global creative platforms.",
        "Implemented SEO strategies on creative assets — resulting in consistent organic client acquisition over the years.",
        "Provided social media designs, marketing materials, and print-ready files across various industries and countries."
      ]
    },
    {
      company: "Indokonveksi",
      period: "AUG 2019 – OCT 2021",
      role: "GRAPHIC DESIGNER (FULL-TIME)",
      points: [
        "Designed garment graphics across various product lines — directly contributing to production efficiency.",
        "Translated client briefs into print-ready files with minimal revisions, minimizing production errors."
      ]
    }
  ];

  return (
    <section id="experience" className="py-28 px-6 lg:px-20 bg-[#080910] border-t border-white/5 relative overflow-hidden">
      
      {/* SECTION LABEL */}
      <div className="flex items-center gap-3 font-mono text-[10px] text-blue-500 uppercase tracking-[0.2em] mb-14">
        <span className="w-5 h-[1px] bg-blue-500 shadow-[0_0_10px_rgba(79,142,255,0.5)]"></span>
        05 — Track Record
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.6fr] gap-20 items-start">
        
        {/* LEFT CONTENT */}
        <div className="opacity-0 animate-[fadeSlideUp_0.8s_ease_forwards]">
          <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.05] tracking-tight mb-8">
            Real work.<br /> <span className="text-grad">Real delivery.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-sm">
            Not just side projects — 
            <strong>professional roles, real clients, real deadlines.</strong> 
            Five years across design, development, and creative leadership fields.
          </p>
        </div>

        {/* RIGHT CONTENT: EXPERIENCE LIST */}
        <div className="flex flex-col gap-2 md:gap-[2px] opacity-0 animate-[fadeSlideUp_0.8s_0.2s_ease_forwards]">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group relative bg-white/[0.03] border border-white/5 p-6 md:p-8 rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-500/[0.02] hover:border-blue-500/10">
              {/* HOVER ACCENT */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-blue-500 transition-colors duration-300"></div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-black text-white tracking-tight">{exp.company}</h3>
                <span className="font-mono text-[10px] text-white/20 tracking-wider uppercase mt-1">{exp.period}</span>
              </div>
              
              <div className="font-mono text-[11px] text-blue-500 tracking-[0.15em] uppercase mb-6">{exp.role}</div>
              
              <ul className="space-y-3">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-3 text-sm text-white/40 leading-relaxed">
                    <span className="text-blue-500 mt-1 shrink-0">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
