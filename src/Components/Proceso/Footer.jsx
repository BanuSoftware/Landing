import React from 'react'
import logofooter  from '../../Assets/Images/logofooter.svg'

const Footer = () => {
  return (
    <footer className="sticky bottom-0 h-screen bg-[#CE5368] flex flex-col text-white justify-between">
        <div className='w-full flex'>
            <div className='w-112.5 h-max ml-10 mt-22 mr-64'>
                <p className='text-white font-medium text-6xl tracking-[-0.07em] leading-none'>
                    Hagamos tu proyecto realidad
                </p>
                <p className='mt-9 text-white font-medium text-2xl tracking-[-0.07em] leading-none'>Contactanos</p>
            </div>
            <div className=' flex gap-12 mt-12'>
                <div className='border-l pl-4 pt-1.5'>
                    <p>Navegacion</p>
                    <p className='mt-4'>Home</p>
                    <p>Servicios</p>
                    <p>Proyectos</p>
                    <p>Nosotros</p>
                    <p>Contactanos</p>
                </div>
                <div className='border-l  border-white pl-4 pt-1.5'>   
                    <p>Social</p>
                    <p className='mt-4'>LinkedIn</p>
                    <p>Instagram</p>
                    <p>X</p>
                </div>
                <div className='pl-6 pt-1.5'>   
                    <p>FAQs</p>
                    <p>Ayuda</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-baseline'>
            <img src={logofooter} alt="" />
            <p className='text-[#BD3148] font-bold text-[350px] tracking-[-0.07em] leading-none'>BANU</p>
        </div>

    </footer>
  )
}

export default Footer