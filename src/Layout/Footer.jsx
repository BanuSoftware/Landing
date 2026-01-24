import React from 'react'
import logofooter from '../assets/Images/logofooter.svg'

const Footer = ({onContactClick}) => {
  return (
    <footer className="sticky bottom-0 min-h-screen bg-[#CE5368] flex flex-col text-white justify-between py-8 lg:py-0">
        {/* Contenido superior */}
        <div className='w-full flex flex-col lg:flex-row px-4 lg:px-0'>
            {/* Sección de CTA */}
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
            
            {/* Sección de navegación */}
            <div className='flex flex-wrap gap-8 lg:gap-12 mt-8 lg:mt-12'>
                {/* Navegación */}
                <div className='border-l border-white pl-4 pt-1.5'>
                    <p className='font-semibold mb-2 lg:mb-0'>Navegación</p>
                    <p className='mt-2 lg:mt-4 hover:underline cursor-pointer'>Home</p>
                    <p className='hover:underline cursor-pointer'>Servicios</p>
                    <p className='hover:underline cursor-pointer'>Proyectos</p>
                    <p className='hover:underline cursor-pointer'>Nosotros</p>
                    <p className='hover:underline cursor-pointer'>Contáctanos</p>
                </div>
                
                {/* Social */}
                <div className='border-l border-white pl-4 pt-1.5'>   
                    <p className='font-semibold mb-2 lg:mb-0'>Social</p>
                    <p className='mt-2 lg:mt-4 hover:underline cursor-pointer'>LinkedIn</p>
                    <p className='hover:underline cursor-pointer'>Instagram</p>
                    <p className='hover:underline cursor-pointer'>X</p>
                </div>
                
                {/* FAQs */}
                <div className='border-l border-white pl-4 pt-1.5 lg:pl-6 lg:border-l-0'>   
                    <p className='font-semibold mb-2 lg:mb-0'>FAQs</p>
                    <p className='mt-2 lg:mt-0 hover:underline cursor-pointer'>Ayuda</p>
                </div>
            </div>
        </div>
        
        {/* Logo grande inferior */}
        <div className='flex justify-center items-center mt-auto overflow-hidden py-8 lg:py-0'>
            {/* Logo SVG para móvil */}
            <img 
                src={logofooter} 
                alt="Banu Logo" 
                className='block lg:hidden w-48 md:w-64 h-auto'
            />
            
            {/* Logo SVG + Texto para desktop */}
            <div className='hidden lg:flex items-baseline'>
                <img 
                    src={logofooter} 
                    alt="Banu Logo" 
                    className='w-auto h-auto'
                />
                <p className='text-[#BD3148] font-bold text-[350px] tracking-[-0.07em] leading-none'>
                    BANU
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer