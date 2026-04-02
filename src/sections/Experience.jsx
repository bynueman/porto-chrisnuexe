const Experience = () => {
  const experiences = [
    {
      company: "Hubungins",
      period: "MEI 2025 – JAN 2026",
      role: "WEB DEVELOPER",
      points: [
        "Membangun landing page dari nol menggunakan JavaScript — fokus pada arsitektur, desain responsif, dan optimasi performa.",
        "Mengembangkan sistem invoice internal (PHP) yang menggantikan proses penagihan manual sepenuhnya.",
        "Mengelola 2 repositori GitHub aktif dengan codebase yang bersih dan mudah dipelihara."
      ]
    },
    {
      company: "Unteyo Journey",
      period: "OKT 2024 – JAN 2026",
      role: "CREATIVE CHIEF OFFICER (CCO)",
      points: [
        "Menetapkan standar visual seluruh organisasi, pedoman desain, dan kebijakan kualitas konten.",
        "Menyetujui setiap aset kreatif sebelum publikasi — menjaga identitas brand yang konsisten di semua saluran.",
        "Turut mendesain dan merancang arsitektur website Unteyo Journey dari konsep hingga implementasi visual."
      ]
    },
    {
      company: "Indokonveksi",
      period: "FEB 2025 – JUL 2025",
      role: "GRAPHIC DESIGNER (FREELANCE)",
      points: [
        "Mengirimkan aset desain garmen siap produksi secara remote dengan siklus revisi minimal."
      ]
    },
    {
      company: "International Freelance",
      period: "DES 2019 – JAN 2025",
      role: "GRAPHIC DESIGNER · 5 TAHUN",
      points: [
        "Membangun praktik desain independen selama 5 tahun melayani klien internasional melalui platform kreatif global.",
        "Menerapkan strategi SEO pada aset kreatif — menghasilkan akuisisi klien organik yang konsisten selama bertahun-tahun.",
        "Memberikan desain media sosial, materi pemasaran, dan file siap cetak di berbagai industri dan negara."
      ]
    },
    {
      company: "Indokonveksi",
      period: "AGU 2019 – OKT 2021",
      role: "GRAPHIC DESIGNER (FULL-TIME)",
      points: [
        "Mendesain grafis garmen di berbagai lini produk — berkontribusi langsung pada efisiensi produksi.",
        "Menerjemahkan brief klien ke dalam file siap cetak dengan revisi minimal, meminimalkan kesalahan produksi."
      ]
    }
  ];

  return (
    <section id="experience" className="py-28 px-6 lg:px-20 bg-[#080910] border-t border-white/5 relative overflow-hidden">
      
      {/* SECTION LABEL */}
      <div className="flex items-center gap-3 font-mono text-[10px] text-blue-500 uppercase tracking-[0.2em] mb-14">
        <span className="w-5 h-[1px] bg-blue-500 shadow-[0_0_10px_rgba(79,142,255,0.5)]"></span>
        05 — Rekam Jejak
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.6fr] gap-20 items-start">
        
        {/* LEFT CONTENT */}
        <div className="opacity-0 animate-[fadeSlideUp_0.8s_ease_forwards]">
          <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.05] tracking-tight mb-8">
            Real work.<br /> <span className="text-grad">Real delivery.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-sm">
            Bukan sekadar project sampingan — 
            <strong>peran profesional, klien nyata, deadline nyata.</strong> 
            Lima tahun di berbagai bidang desain, development, dan kepemimpinan kreatif.
          </p>
        </div>

        {/* RIGHT CONTENT: EXPERIENCE LIST */}
        <div className="flex flex-col gap-[2px] opacity-0 animate-[fadeSlideUp_0.8s_0.2s_ease_forwards]">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group relative bg-white/[0.03] border border-white/5 p-8 rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-500/[0.02] hover:border-blue-500/10">
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
