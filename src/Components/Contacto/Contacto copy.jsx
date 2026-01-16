import React, { useEffect, useRef, useState } from 'react'
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import MONKEY5 from "../../assets/Images/gorila.svg"

const Contacto = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Comienza la animación antes de que el componente esté en vista
      const startPoint = windowHeight * 1.2; // Comienza cuando está un 20% fuera de vista
      const endPoint = -sectionHeight * 0.3; // Termina cuando ya pasó un 30%
      
      if (rect.top <= startPoint && rect.bottom >= endPoint) {
        // Calcula el progreso con un rango más amplio para suavizar
        const totalDistance = startPoint - endPoint;
        const currentDistance = startPoint - rect.top;
        let progress = currentDistance / totalDistance;
        
        // Aplica una función de suavizado (ease-in-out)
        progress = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      } else if (rect.top > startPoint) {
        setScrollProgress(0);
      } else if (rect.bottom < endPoint) {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar una vez al montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interpola entre blanco (#FFFFFF) y rosa (#CE5368)
  const interpolateColor = (progress) => {
    const white = { r: 255, g: 255, b: 255 };
    const pink = { r: 206, g: 83, b: 104 };
    
    const r = Math.round(white.r + (pink.r - white.r) * progress);
    const g = Math.round(white.g + (pink.g - white.g) * progress);
    const b = Math.round(white.b + (pink.b - white.b) * progress);
    
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Interpola el color del texto de negro a blanco
  const interpolateTextColor = (progress) => {
    const threshold = 0.3; // Cambia el texto más rápido
    const textProgress = Math.min(progress / threshold, 1);
    
    const black = { r: 0, g: 0, b: 0 };
    const white = { r: 255, g: 255, b: 255 };
    
    const r = Math.round(black.r + (white.r - black.r) * textProgress);
    const g = Math.round(black.g + (white.g - black.g) * textProgress);
    const b = Math.round(black.b + (white.b - black.b) * textProgress);
    
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div 
      ref={sectionRef}
      className='min-h-dvh flex justify-center items-center transition-colors duration-100'
      style={{ backgroundColor: interpolateColor(scrollProgress) }}
    >
      <div 
        className='w-1/2 flex justify-center'
        style={{ color: interpolateTextColor(scrollProgress) }}
      >
        <div className='flex-col w-3/4 justify-center items-center'>
          <h2 className='font-medium text-8xl'>Contactanos</h2>
          <p className='font-medium text-2xl mt-8 tracking-[-0.07em] leading-none pl-1 indent-5 text-justify'>
            ¿Listo para llevar tu proyecto al siguiente nivel? Escríbenos y uno de nuestros expertos se pondrá en contacto contigo para ofrecerte una solución personalizada. ¡Estamos aquí para ayudarte a crecer con tecnología!
          </p>
          <div className='flex gap-2 items-center mt-6 pl-1'>
            <FaPhone className='text-2xl'/>
            <p className='font-medium text-xl mt-1'>442 123 1212</p>
          </div>
          
          <div className='flex gap-2 items-center mt-2 pl-0.5'>
            <IoMail className='text-2xl' />
            <a href="mailto:studio@banu.com.mx" className='font-medium text-xl'>
              studio@banu.com.mx
            </a>
          </div>
        </div>
      </div>
      
      <div className='w-1/2 flex justify-center items-center'>
        <div 
          className='w-3/4 aspect-square rounded-lg flex items-center justify-center'
          style={{ 
            opacity: scrollProgress,
            transform: `scale(${0.8 + scrollProgress * 0.2})`
          }}
        >
          {/* Placeholder para la imagen del gorila */}
          <span style={{ color: interpolateTextColor(scrollProgress) }}>
            <img src={MONKEY5} alt=""/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Contacto