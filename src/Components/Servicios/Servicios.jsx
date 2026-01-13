import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Components_Services/Card.jsx";

function Carousel() {
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);

  // Datos de las tarjetas
  const cards = [
    {
      id: 1,
      title: "Diseño UX/UI",
      description: "Creamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario.",
      icon: new URL("../../Assets/Images/Banana.png", import.meta.url).href,
      banner: new URL("../../Assets/Images/FlowerBanner.png", import.meta.url).href,
      category: "Diseño"
    },
    {
      id: 2,
      title: "Desarrollo Web",
      description: "Construimos experiencias web completas, desde páginas que venden hasta productos web interactivos.",
      icon: new URL("../../Assets/Images/Banana.png", import.meta.url).href,
      banner: new URL("../../Assets/Images/FlowerBanner.png", import.meta.url).href,
      category: "Desarrollo"
    },
    {
      id: 3,
      title: "Desarrollo Móvil",
      description: "Construimos experiencias web completas, desde páginas que venden hasta productos web interactivos.",
      icon: new URL("../../Assets/Images/Banana.png", import.meta.url).href,
      banner: new URL("../../Assets/Images/Habitree.png", import.meta.url).href,
      category: "Mobile"
    },
    {
      id: 4,
      title: "Marketing Digital",
      description: "Estrategias digitales efectivas para hacer crecer tu negocio en línea.",
      icon: new URL("../../Assets/Images/Banana.png", import.meta.url).href,
      banner: new URL("../../Assets/Images/FlowerBanner.png", import.meta.url).href,
      category: "Marketing"
    },
    {
      id: 5,
      title: "SEO & Analytics",
      description: "Optimización y análisis de datos para mejorar tu presencia en buscadores.",
      icon: new URL("../../Assets/Images/Banana.png", import.meta.url).href,
      banner: new URL("../../Assets/Images/FlowerBanner.png", import.meta.url).href,
      category: "Analytics"
    }
  ];

  const anglePerCard = 360 / cards.length; // Calcular ángulo por tarjeta 72 grados 

  // Botón IZQUIERDO va a girar hacia la izquierda o hacia la anterior
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const newIndex = (selectedCategory - 1 + cards.length) % cards.length;
    setSelectedCategory(newIndex);
    setRotation(prev => prev - anglePerCard);
    setTimeout(() => setIsAnimating(false), 1200);
  };

  // Botón DERECHO va a girar hacia la derecha o hacia la siguiente
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const newIndex = (selectedCategory + 1) % cards.length;
    setSelectedCategory(newIndex);
    setRotation(prev => prev + anglePerCard);
    setTimeout(() => setIsAnimating(false), 1200);
  };

  // Click en categoría del toggle
  const handleCategoryClick = (idx) => {
    if (isAnimating || idx === selectedCategory) return;
    setIsAnimating(true);
    setSelectedCategory(idx);
    
    // Calcular la rotación para ir a esa categoría
    const targetRotation = anglePerCard * idx;
    setRotation(targetRotation);
    
    setTimeout(() => setIsAnimating(false), 1200);
  };

  // Determinar posición de tarjeta según ángulo
  const getCardPosition = (cardAngle) => {
    let normalizedAngle = ((cardAngle % 360) + 360) % 360;
    if (normalizedAngle > 180) normalizedAngle -= 360;

    if (Math.abs(normalizedAngle) < anglePerCard / 2) {
      return 'center';
    } else if (normalizedAngle >= anglePerCard / 2 && normalizedAngle <= anglePerCard * 1.5) {
      return 'right';
    } else if (normalizedAngle <= -anglePerCard / 2 && normalizedAngle >= -anglePerCard * 1.5) {
      return 'left';
    } else {
      return 'hidden';
    }
  };

  // Calcular posición en el arco XD
  const getCardStyle = (cardAngle, position) => {
    const radius = 500;
    const angleInRadians = (cardAngle * Math.PI) / 180;
    
    const circleX = Math.sin(angleInRadians) * radius;
    const circleY = -Math.cos(angleInRadians) * radius + 60;

    if (position === 'hidden') {
      return {
        transform: `translate(${circleX}px, ${circleY}px) scale(0.7)`,
        opacity: 0,
        zIndex: 1,
        pointerEvents: 'none'
      };
    }

    const positions = {
      left: {
        x: -400,
        y: 60,
        rotate: -15,
        scale: 0.85,
        zIndex: 10,
        opacity: 0.9
      },
      center: {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        zIndex: 30,
        opacity: 1
      },
      right: {
        x: 400,
        y: 60,
        rotate: 15,
        scale: 0.85,
        zIndex: 10,
        opacity: 0.9
      }
    };

    const pos = positions[position];
    
    return {
      transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotate}deg) scale(${pos.scale})`,
      opacity: pos.opacity,
      zIndex: pos.zIndex,
      pointerEvents: 'auto'
    };
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-16">

        {/* Encabezado de la sección*/}
      <div >
        <h2 className="text-lg font-normal mb-6">Define el objetivo y nosotros lo construimos contigo</h2>
      </div>
      
      {/* Toggle de Categorías */}
      <div 
        className="flex gap-2 p-2 rounded-full mb--4"
        style={{ backgroundColor: 'rgb(249, 249, 249)' }}
      >
        {cards.map((card, idx) => (
          <button
            key={card.id}
            onClick={() => handleCategoryClick(idx)}
            disabled={isAnimating}
            className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 disabled:cursor-not-allowed"
            style={{
              backgroundColor: idx === selectedCategory ? 'rgb(0, 0, 0)' : 'transparent',
              color: idx === selectedCategory ? 'white' : 'rgb(147, 147, 147)'
            }}
          >
            {card.category}
          </button>
        ))}
      </div>

      {/* Carrusel */}
      <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Contenedor de tarjetas */}
        <div className="relative w-full h-full flex items-center justify-center">
          {cards.map((card, index) => {
            const angle = anglePerCard * index;
            const currentAngle = angle - rotation;
            const position = getCardPosition(currentAngle);

            return (
              <div
                key={card.id}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  ...getCardStyle(currentAngle, position),
                  transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                <Card 
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  banner={card.banner}
                  position={position}
                />
              </div>
            );
          })}
        </div>

        {/* Botón Izquierdo */}
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className="absolute left-12 top-1/2 -translate-y-1/2 w-16 h-16 bg-black/5 hover:bg-black/10 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center text-gray-700 transition-all duration-300 z-50 shadow-lg hover:scale-110 active:scale-95"
        >
          <ChevronLeft size={36} strokeWidth={2.5} />
        </button>

        {/* Botón Derecho */}
        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="absolute right-12 top-1/2 -translate-y-1/2 w-16 h-16 bg-black/5 hover:bg-black/10 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center text-gray-700 transition-all duration-300 z-50 shadow-lg hover:scale-110 active:scale-95"
        >
          <ChevronRight size={36} strokeWidth={2.5} />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-50">
          {cards.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => handleCategoryClick(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === selectedCategory ? 'bg-black w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;