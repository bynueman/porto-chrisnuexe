const Ticker = () => {
  const items = [
    "Graphic Design",
    "UI/UX Design",
    "Web Development",
    "Vector Art",
    "Laravel",
    "Figma",
    "Adobe Photoshop",
    "Illustrator",
    "Social Media Visual",
    "Brand Identity",
    "PHP / JavaScript",
    "Creative Direction",
  ];

  return (
    <div className="py-4 border-y border-white/10 bg-[#0d0f1a] overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {/* First Set */}
        <div className="flex gap-16 px-8 items-center">
          {items.map((item, index) => (
            <span
              key={index}
              className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/30 flex items-center gap-4"
            >
              {item}
              <span className="text-[6px] text-blue-500 opacity-50">◆</span>
            </span>
          ))}
        </div>
        {/* Second Set for seamless loop */}
        <div className="flex gap-16 px-8 items-center">
          {items.map((item, index) => (
            <span
              key={`dup-${index}`}
              className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/30 flex items-center gap-4"
            >
              {item}
              <span className="text-[6px] text-blue-500 opacity-50">◆</span>
            </span>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
          width: max-content;
        }
      `}} />
    </div>
  );
};

export default Ticker;
