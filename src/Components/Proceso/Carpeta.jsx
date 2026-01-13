import React from 'react'
import { useState } from 'react';

const Carpeta = ({ title, step, description, color, textColor, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <>
      {/* Versión Desktop/Tablet (hidden en móvil) */}
      <div 
        className="hidden md:block absolute w-full transition-all duration-500 ease-out cursor-pointer"
        style={{
          top: `${index * 170}px`,
          zIndex: index + 1
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg 
          width="100%" 
          height="auto" 
          viewBox="0 0 1308 668" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-500 ease-out ${
            isHovered ? 'md:-translate-y-20 lg:-translate-y-35' : ''
          }`}
          preserveAspectRatio="xMidYMid meet"
        >
          <path 
            d="M12.5797 96.9296C9.61613 73.0658 28.2277 52 52.2748 52H1262.54C1286.65 52 1305.28 73.1729 1302.22 97.0882L1233.48 633.088C1230.92 653.049 1213.93 668 1193.8 668H118.84C98.6546 668 81.6323 652.961 79.1447 632.93L12.5797 96.9296Z" 
            className={color}
          />
          <path 
            d="M6.43489 44.8156C3.5454 20.9891 22.1429 0 46.144 0H340.329C354.149 0 366.99 7.13392 374.291 18.8679L445.776 133.754C460.993 158.209 446.153 190.247 417.659 194.456L72.1121 245.501C49.8553 248.789 29.2662 233.08 26.5576 210.746L6.43489 44.8156Z" 
            className={color}
          />
        </svg>
        
        <div 
          className={`absolute left-0 w-full transition-all duration-500 ${
            isHovered ? 'md:-translate-y-20 lg:-translate-y-35' : ''
          }`}
          style={{ top: '52px' }}
        >
          <div className="flex justify-between items-center px-8 md:px-12 lg:px-20 mt-6 md:mt-10 lg:mt-14">
            <h3 
              className={`text-4xl md:text-6xl lg:text-8xl font-medium tracking-[-0.07em] transition-colors duration-500 ${
                isHovered ? 'text-white' : textColor
              }`}
            >
              {title}
            </h3>
            
            <span 
              className={`text-4xl md:text-6xl lg:text-8xl font-medium tracking-[-0.07em] transition-colors duration-500 ${
                isHovered ? 'text-white' : textColor
              }`}
            >
              {step}
            </span>
          </div>

          <div 
            className={`transition-opacity duration-700 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full px-8">
              <div className="ml-[50%]">
                <p className="text-white font-medium text-sm md:text-base lg:text-lg tracking-[-0.07em] max-w-xs md:max-w-sm lg:max-w-81 leading-tight mt-4 md:mt-6 indent-5">
                  {description}
                </p>
                
                {index === 3 && (
                  <a 
                    href="mailto:studio@banu.com.mx" 
                    className="inline-block text-white font-medium text-sm md:text-base tracking-[-0.07em] underline hover:opacity-80 transition-opacity mt-4 md:mt-6"
                  >
                    Cuéntanos tu idea →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Versión Móvil (solo visible en móvil) - Siempre expandida con SVG */}
      <div className="md:hidden mb-8 relative">
        {/* SVG de la carpeta */}
        <svg 
          width="100%" 
          height="auto" 
          viewBox="0 0 1308 668" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path 
            d="M12.5797 96.9296C9.61613 73.0658 28.2277 52 52.2748 52H1262.54C1286.65 52 1305.28 73.1729 1302.22 97.0882L1233.48 633.088C1230.92 653.049 1213.93 668 1193.8 668H118.84C98.6546 668 81.6323 652.961 79.1447 632.93L12.5797 96.9296Z" 
            className={color}
          />
          <path 
            d="M6.43489 44.8156C3.5454 20.9891 22.1429 0 46.144 0H340.329C354.149 0 366.99 7.13392 374.291 18.8679L445.776 133.754C460.993 158.209 446.153 190.247 417.659 194.456L72.1121 245.501C49.8553 248.789 29.2662 233.08 26.5576 210.746L6.43489 44.8156Z" 
            className={color}
          />
        </svg>
        
        {/* Contenido encima del SVG */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 pt-2">
          {/* Título y paso */}
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl font-medium tracking-[-0.07em] text-white leading-none">
              {title}
            </h3>
            <span className="text-3xl font-medium tracking-[-0.07em] text-white leading-none">
              {step}
            </span>
          </div>
          
          {/* Descripción */}
          <p className="text-white font-medium text-sm tracking-[-0.07em] leading-tight indent-4 max-w-xs mx-auto">
            {description}
          </p>
          
          {index === 3 && (
            <a 
              href="mailto:studio@banu.com.mx" 
              className="inline-block text-white font-medium text-sm tracking-[-0.07em] underline mt-4"
            >
              Cuéntanos tu idea →
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Carpeta