import React from 'react'
import { useState } from 'react';

const Carpeta = ({ title, step, description, color, textColor, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const wrapText = (text, maxWidth) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    
    words.forEach((word) => {
      const testLine = currentLine + (currentLine ? ' ' : '') + word;
      if (testLine.length <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    });
    if (currentLine) lines.push(currentLine);
    
    return lines;
  };
  
  const textLines = wrapText(description || '', 50);
  
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
      <svg 
        width="1308" 
        height="668" 
        viewBox="0 0 1308 668" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-500 ease-out ${
          isHovered ? ' -translate-y-25' : ''
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
        
        {/* Título */}
        <text
          x="80"
          y="180"
          textAnchor="start"
          className={`text-8xl font-medium transition-colors tracking-[-0.07em] duration-500 ${
            isHovered ? 'fill-white' : textColor
          }`}
        >
          {title}
        </text>
        
        {/* Número de paso */}
        <text
          x="1240"
          y="180"
          textAnchor="end"
          className={`text-8xl font-medium transition-colors tracking-[-0.07em] duration-500 ${
            isHovered ? 'fill-white' : textColor
          }`}
        >
          {step}
        </text>
        
        {/* Descripcion*/}
        {textLines.map((line, idx) => (
          <text
            key={idx}
            x="800"
            y={220 + (idx * 15)}
            textAnchor="middle"
            className={`text-[16px] font-normal transition-opacity tracking-[-0.02em] duration-500 fill-white ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {line}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default Carpeta