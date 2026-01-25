import React from 'react'
import gorilaContactanos from "../../Assets/Images/gorilaContactanos.svg";
import Footer from '../../Layout/Footer';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

const Contacto = ({ onClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_6t0v12b', 'template_5mervac', form.current, '9URu9cC6T7EMrFzcH').then(
        () => {
            alert("Mensaje enviado con exito")
            form.current.reset();
        },
        (error) => {
            alert("Failer to send message, please try again later", error.text)
        }
    )
  }

  return (<>
    <style>{`
      @keyframes flotar {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }
      
      .gorila-flotante {
        animation: flotar 3s ease-in-out infinite;
      }
    `}</style>
    
    <section className='w-full flex justify-center relative z-10 bg-white'>
        {/* Imagen del gorila - oculta en móvil */}
        <div className='hidden lg:flex w-2/5 items-center justify-end'>
            <div className='h-screen sticky top-0 flex items-end mb-22'>
                <img 
                  src={gorilaContactanos} 
                  alt="" 
                  className='w-auto gorila-flotante' 
                />
            </div>
        </div>
        
        {/* Formulario - 100% width en móvil, 3/5 en desktop */}
        <div className='w-full lg:w-3/5 flex flex-col items-center mb-10 lg:mb-22 pt-10 lg:pt-70 px-4 lg:px-0'>
            <form ref={form} onSubmit={sendEmail} className='p-4 lg:p-10 flex flex-col w-full lg:min-w-189.25 max-w-4xl'>

                <input type="hidden" name='apikey' value=''/>

                <div className='flex flex-col gap-8 lg:gap-14'>
                    {/* Título responsive */}
                    <h2 className='font-medium text-4xl md:text-6xl lg:text-[88px] tracking-[-0.03em] leading-[0.94] text-center'>
                        Hola, Mucho gusto!
                    </h2>
                    
                    {/* Nombre y Apellido - stack en móvil, lado a lado en desktop */}
                    <div className='flex flex-col md:flex-row gap-6 lg:gap-12'>
                        <div className='flex flex-col w-full md:w-1/2 gap-3'>
                            <label className='font-medium text-lg lg:text-2xl tracking-[-0.07em] leading-[0.94]'>
                                Nombre
                            </label>
                            <input type="text" className='border-b py-2 outline-none' name='Nombre'/>
                        </div>
                        <div className='flex flex-col w-full md:w-1/2 gap-3'>
                            <label className='font-medium text-lg lg:text-2xl tracking-[-0.07em] leading-[0.94]'>
                                Apellido
                            </label>
                            <input type="text" className='border-b py-2 outline-none'name='Apellido'/>
                        </div>
                    </div>
                    
                    <div className='flex flex-col w-full gap-3'>
                        <label className='font-medium text-lg lg:text-2xl tracking-[-0.07em] leading-[0.94]'>
                            Correo Electrónico
                        </label>
                        <input type="email" className='border-b py-2 outline-none' name='Email'/>
                    </div>
                    
                    <div className='flex flex-col w-full gap-3'>
                        <label className='font-medium text-lg lg:text-2xl tracking-[-0.07em] leading-[0.94]'>
                            Nombre de tu negocio
                        </label>
                        <input type="text" className='border-b py-2 outline-none'name='Company'/>
                    </div>
                </div>
                
                <div className='flex flex-col gap-10 lg:gap-20 mt-16 lg:mt-34'>
                    {/* Segundo título responsive */}
                    <div className='w-full lg:w-183.5'>
                        <h2 className='font-medium text-4xl md:text-6xl lg:text-[88px] tracking-[-0.03em] leading-[0.94] text-center'>
                            Cuéntanos sobre tu proyecto
                        </h2>
                    </div>
                    
                    <div className='flex flex-col w-full gap-3'>
                        <label className='font-medium text-lg lg:text-2xl tracking-[-0.07em] leading-[0.94]'>
                            Tu Mensaje (Proyecto, Tiempos, Presupuesto, etc.)*
                        </label>
                        <textarea
                            name='Mensaje'
                            className='border-b py-2 outline-none min-h-25 resize-none'
                            rows="4"
                        />
                    </div>
                    
                    {/* Botón responsive */}
                    <button 
                        type='submit'
                        className='font-medium text-2xl lg:text-4xl tracking-[-0.07em] leading-[0.94] underline self-start hover:opacity-70 transition-opacity'>
                        Enviar Mensaje →
                    </button>
                </div>
            </form>
        </div>
    </section>
    <Footer onContactClick={onClose} onNavigate={onClose}></Footer>
  </>
  )
}

export default Contacto