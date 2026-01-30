import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Trabajo from "./Trabajo";
import FlowerBanner from "../../Assets/Images/FlowerBanner.png";
import Habitree from "../../Assets/Images/HabitreePink.png";
import Flowit from "../../Assets/Images/Flowit.png";

function Nuestro_Trabajo() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  
  const trabajos = [
    {
      id: 1,
      title: "Branding", 
      subtitle: "Picase",
      description: "Adaptandola marca al entorno e-commerces sin perder su personalidad.",
      image: FlowerBanner,
      reverse: true,
    },
    {
      id: 2,
      title: "App Development", 
      subtitle: "Habitree",
      description: "Convirtiendo tus ideas en aplicaciones de alto impacto",
      image: Habitree,
      textRight: true,
    },
    {
      id: 3,
      title: "Software a medida", 
      subtitle: "Flowit",
      description: "Software personalizado que impulsa tu negocio",
      image: Flowit,
      reverse: true,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return(
    <motion.div 
      ref={containerRef}
      className="flex flex-col align items-center nuestro-trabajo-container"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex gap-4 mb-24 w-4/5 items-center overflow-hidden">
        <h2 
          className={`text-[48px] font-medium leading-[94%] tracking-[-0.07em] transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
          }`}
        >
          Nuestro Trabajo
        </h2>
        <p 
          className={`text-[16px] font-normal leading-[94%] tracking-[-0.08em] max-w-[398px] transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
          }`}
        >
          Una selección de nuestros trabajos más cuidados, creados a lo largo de los años junto a clientes y amigos que piensan a futuro.
        </p>
      </div>
      
      <div className="w-full">
        {trabajos.map((trabajo) => (
          <Trabajo 
            key={trabajo.id} 
            title={trabajo.title}
            subtitle={trabajo.subtitle}
            description={trabajo.description} 
            image={trabajo.image}
            reverse={trabajo.reverse}
            textRight={trabajo.textRight}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Nuestro_Trabajo;