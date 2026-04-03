import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

// Import Gallery Images
import intraxImg from "../assets/gallery/intrax.web.jpg";
import unteyoImg from "../assets/gallery/unteyojourney.jpg";
import artbynueImg from "../assets/gallery/artbynue.jpg";
import insignaImg from "../assets/gallery/insigna.id.jpg";
import nuestoreImg from "../assets/gallery/nue.storeid.jpg";

const Gallery = () => {
  const controls = useAnimationControls();
  const [isDragging, setIsDragging] = useState(false);

  const items = [
    { id: 1, title: "Intrax.web", category: "Financial Tracking", image: intraxImg, link: "https://www.instagram.com/intrax.web/" },
    { id: 2, title: "Unteyojourney", category: "Creative Digital Media", image: unteyoImg, link: "https://www.instagram.com/unteyojourney/" },
    { id: 3, title: "Artbynue", category: "Personal Artwork", image: artbynueImg, link: "https://www.instagram.com/artbynue" },
    { id: 4, title: "Insigna", category: "Personal Gift & Decoration", image: insignaImg, link: "https://www.instagram.com/insigna.id/" },
    { id: 5, title: "Nue.storeid", category: "Social Media Services", image: nuestoreImg, link: "https://www.instagram.com/nue.storeid/" },
  ];

  // Duplicate items for infinite seamless loop
  const displayItems = [...items, ...items, ...items];

  const startAnimation = async () => {
    await controls.start({
      x: "-33.33%",
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (!isDragging) {
      startAnimation();
    }
  }, [isDragging]);

  return (
    <section id="gallery" className="py-28 bg-black overflow-hidden border-t border-white/10 relative">
      
      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="px-6 lg:px-20 mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-sans">
          Visual <span className="text-white/30">Showcase</span>
        </h2>
        <p className="text-gray-400 font-mono text-sm uppercase tracking-widest lowercase max-w-2xl leading-relaxed">
          Selected visual work spanning social content, creative direction, and design execution across digital platforms.
        </p>
      </motion.div>

      {/* HYBRID SLIDER CONTAINER */}
      <div className="relative cursor-grab active:cursor-grabbing px-6 lg:px-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex"
        >
          <motion.div
            animate={controls}
            drag="x"
            dragConstraints={{ left: -2000, right: 0 }} // Constraints are loose to allow freedom
            onDragStart={() => {
              setIsDragging(true);
              controls.stop();
            }}
            onDragEnd={() => {
              setIsDragging(false);
            }}
            className="flex gap-6 py-8"
          >
            {displayItems.map((item, idx) => (
              <div 
                key={idx} 
                className="w-[280px] md:w-[350px] aspect-[9/16] bg-white/5 border border-white/10 rounded-3xl flex flex-col justify-end p-8 overflow-hidden relative group/item hover:border-blue-500/50 transition-all duration-500 shrink-0 select-none"
              >
                {/* ACTUAL SOCIAL MEDIA IMAGE */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover/item:opacity-80 group-hover/item:scale-105 transition-all duration-700" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
                
                <div className="relative z-10 pointer-events-none">
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-500 mb-2">{item.category}</p>
                  <h3 className="text-2xl font-black tracking-tighter text-white uppercase font-sans italic mb-6">{item.title}</h3>
                  
                  {/* VISIT BUTTON */}
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full text-[10px] font-mono text-white uppercase tracking-wider hover:bg-white hover:text-black transition-all pointer-events-auto opacity-0 group-hover/item:opacity-100 translate-y-4 group-hover/item:translate-y-0 duration-300"
                  >
                    <img 
                      src="https://unpkg.com/simple-icons@v11/icons/instagram.svg" 
                      alt="Instagram" 
                      className="w-3 h-3 invert group-hover/btn:invert-0" 
                    />
                    Visit Profile
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Gallery;
