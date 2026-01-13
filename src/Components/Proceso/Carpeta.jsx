import React from 'react'
import { useState } from 'react';

const Carpeta = ({ title, step, description, color, textColor, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="absolute w-full transition-all duration-500 ease-out cursor-pointer"
      style={{
        top: `${index * 170}px`,
        zIndex: index + 1
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* SVG solo con las formas (sin texto) */}
      <svg 
        width="1308" 
        height="668" 
        viewBox="0 0 1308 668" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-500 ease-out ${
          isHovered ? '-translate-y-30' : ''
        }`}
      >
        {/* Path principal */}
        <path 
          d="M12.5797 96.9296C9.61613 73.0658 28.2277 52 52.2748 52H1262.54C1286.65 52 1305.28 73.1729 1302.22 97.0882L1233.48 633.088C1230.92 653.049 1213.93 668 1193.8 668H118.84C98.6546 668 81.6323 652.961 79.1447 632.93L12.5797 96.9296Z" 
          className={color}
        />
        
        {/* Path secundario */}
        <path 
          d="M6.43489 44.8156C3.5454 20.9891 22.1429 0 46.144 0H340.329C354.149 0 366.99 7.13392 374.291 18.8679L445.776 133.754C460.993 158.209 446.153 190.247 417.659 194.456L72.1121 245.501C49.8553 248.789 29.2662 233.08 26.5576 210.746L6.43489 44.8156Z" 
          className={color}
        />
      </svg>
      
      {/* Todo el contenido HTML encima */}
      <div 
        className={`absolute left-0 w-full transition-all duration-500 ${
          isHovered ? '-translate-y-30' : ''
        }`}
        style={{ top: '52px' }}
      >
        {/* Título y Step */}
        <div className="flex justify-between items-center px-20 mt-14">
          <h3 
            className={`text-8xl font-medium tracking-[-0.07em] transition-colors duration-500 ${
              isHovered ? 'text-white' : textColor
            }`}
          >
            {title}
          </h3>
          
          <span 
            className={`text-8xl font-medium tracking-[-0.07em] transition-colors duration-500 ${
              isHovered ? 'text-white' : textColor
            }`}
          >
            {step}
          </span>
        </div>

        {/* Descripción y Link */}
        <div 
          className={`transition-opacity duration-700 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Contenedor para posicionar a 3/4 */}
          <div className="relative w-full px-8">
            <div className="ml-[50%]">
              <p className="text-white font-medium text-[18px] tracking-[-0.07em] max-w-81 leading-none mt-6 indent-5">
                {description}
              </p>
              
              {/* Link justo abajo del texto */}
              {index === 3 && (
                <a 
                  href="mailto:studio@banu.com.mx" 
                  className="inline-block text-white font-medium tracking-[-0.07em] underline hover:opacity-80 transition-opacity mt-6"
                >
                  Cuéntanos tu idea →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carpeta