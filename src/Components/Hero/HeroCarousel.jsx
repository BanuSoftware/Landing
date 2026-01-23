import React from "react";
import GoogleLogo from "../../Assets/Images/Google.png";
import AmazonLogo from "../../Assets/Images/Amazon.png";

export default function HeroCarousel() {
  
  const logos = [
    GoogleLogo,
    AmazonLogo,
    GoogleLogo,
    AmazonLogo,
    GoogleLogo,
    AmazonLogo,
    
  ];

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[60px] w-[60%] z-20">
      <div className="overflow-hidden relative">
        <div className="flex carousel-track">
          
          {logos.map((logo, index) => (
            <img
              key={`first-${index}`}
              src={logo}
              alt={`Logo ${index}`}
              className="h-8 object-contain filter brightness-0 invert opacity-80 flex-shrink-0 mx-8"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`second-${index}`}
              src={logo}
              alt={`Logo ${index}`}
              className="h-8 object-contain filter brightness-0 invert opacity-80 flex-shrink-0 mx-8"
            />
          ))}
        </div>

        
        <div 
          className="absolute left-0 top-0 h-full w-40 pointer-events-none backdrop-blur-[3px]" 
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0) 0%, transparent 100%)',
            maskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 100%)'
          }}
        />
        
       
        <div 
          className="absolute right-0 top-0 h-full w-40 pointer-events-none backdrop-blur-[3px]"
          style={{
            background: 'linear-gradient(to left, rgba(0,0,0,0) 0%, transparent 100%)',
            maskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)'
          }}
        />
      </div>

      <style>
        {`
          @keyframes infiniteScroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          
          .carousel-track {
            animation: infiniteScroll 25s linear infinite;
          }
        `}
      </style>
    </div>
  );
}