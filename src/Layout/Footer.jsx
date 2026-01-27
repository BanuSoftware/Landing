import React from 'react'
import logofooter from '../assets/Images/logofooter.svg'

const Footer = ({onContactClick, onNavigate}) => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    // si pasamos el onNavigate estamos en contacto
    if (onNavigate) {
      onNavigate();
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 600);
    } else {
      // si no esta onNavigate = estamos en la página principal
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="sticky bottom-0 min-h-screen bg-[#CE5368] flex flex-col text-white justify-between py-8 lg:py-0">
        <div className='w-full flex flex-col lg:flex-row px-4 lg:px-0'>
            <div className='w-full lg:w-112.5 h-max lg:ml-10 mt-8 lg:mt-22 lg:mr-64 mb-8 lg:mb-0'>
                <p className='text-white font-medium text-3xl md:text-4xl lg:text-6xl tracking-[-0.07em] leading-none'>
                    Hagamos tu proyecto realidad
                </p>
                <button 
                    onClick={onContactClick} 
                    className='mt-6 lg:mt-9 text-white font-medium text-xl lg:text-2xl tracking-[-0.07em] leading-none underline cursor-pointer hover:opacity-80 transition-opacity'
                >
                    Contáctanos →
                </button>
            </div>
            
            <div className='flex flex-wrap gap-8 lg:gap-12 mt-8 lg:mt-12'>
                <ul className='border-l border-white pl-4 pt-1.5'>
                    <li className='font-semibold mb-2 lg:mb-0'>Navegación</li>
                    <li className='mt-2 lg:mt-4 hover:underline cursor-pointer'>
                        <a href="#Home" onClick={(e) => handleNavClick(e, '#Home')}>Home</a>
                    </li>
                    <li className='hover:underline cursor-pointer'>
                        <a href="#Proyectos" onClick={(e) => handleNavClick(e, '#Proyectos')}>Proyectos</a>
                    </li>
                    <li className='hover:underline cursor-pointer'>
                        <a href="#Servicios" onClick={(e) => handleNavClick(e, '#Servicios')}>Servicios</a>
                    </li>
                    <li className='hover:underline cursor-pointer'>
                        <a href="#Procesos" onClick={(e) => handleNavClick(e, '#Procesos')}>Proceso</a>
                    </li>
                    <li className='hover:underline cursor-pointer'>
                        <a onClick={onContactClick}>Contáctanos</a>
                    </li>
                </ul>
                
                <ul className='border-l border-white pl-4 pt-1.5'>   
                    <li className='font-semibold mb-2 lg:mb-0'>Social</li>
                    <li className='mt-2 lg:mt-4 hover:underline cursor-pointer'>LinkedIn</li>
                    <li className='hover:underline cursor-pointer'>Instagram</li>
                    <li className='hover:underline cursor-pointer'>X</li>
                </ul>
                
                <ul className='border-l border-white pl-4 pt-1.5 lg:pl-6 lg:border-l-0'>   
                    <p className='font-semibold mb-2 lg:mb-0'>FAQs</p>
                    <p className='mt-2 lg:mt-0 hover:underline cursor-pointer'>Ayuda</p>
                </ul>
            </div>
        </div>
        
        <div className='flex justify-center items-center mt-auto overflow-hidden py-8 lg:py-0'>
            {/* Solo logo en mobile y tablet - escala con viewport */}
            <img 
                src={logofooter} 
                alt="Banu Logo" 
                className='block lg:hidden h-auto'
                style={{ width: 'min(80vw, 332px)' }}
            />
            
            {/* Logo + texto BANU en desktop - escala con viewport */}
            <div className='hidden lg:flex items-baseline gap-2'>
                <img 
                    src={logofooter} 
                    alt="Banu Logo" 
                    className='h-auto'
                    style={{ width: 'min(25vw, 400px)' }}
                />
                <p 
                    className='text-[#BD3148] font-bold tracking-[-0.07em] leading-none whitespace-nowrap'
                    style={{ fontSize: 'min(20vw, 350px)' }}
                >
                    BANU
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer