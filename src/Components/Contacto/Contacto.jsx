import React from 'react'
import gorilaContactanos from "../../Assets/Images/gorilaContactanos.svg";

const Contacto = () => {
  return (
    <section className='w-full flex justify-center'>
        <div className='flex w-2/5 items-center justify-end'>
            <div className='h-screen sticky top-0 flex items-end mb-22'>
                <img src={gorilaContactanos} alt="" className='w-auto' />
            </div>
        </div>
        <div className='w-3/5 flex flex-col items-center mb-22 pt-70'>
            <form action="" className='p-10 flex flex-col min-w-189.25'>
                <div className='flex flex-col gap-14'>

                    <h2 className='font-medium text-[88px] tracking-[-0.03em] leading-[0.94] text-center'>Hola, Mucho gusto!</h2>
                    <div className='flex gap-12'>

                        <div className='flex flex-col w-1/2 gap-3'>
                            <label className='font-medium text-2xl tracking-[-0.07em] leading-[0.94] '>
                                Nombre
                            </label>
                            <input type="text" className='border-b'/>
                        </div>

                        <div className='flex flex-col w-1/2 gap-3'>
                            <label className='font-medium text-2xl tracking-[-0.07em] leading-[0.94]'>
                                Apellido
                            </label>
                            <input type="text" className='border-b'/>
                        </div>

                    </div>

                    <div className='flex flex-col w-full gap-3'>
                        <label className='font-medium text-2xl tracking-[-0.07em] leading-[0.94] '>
                            Correo Electronico
                        </label>
                        <input type="text" className='border-b'/>
                    </div>

                    <div className='flex flex-col w-full gap-3'>
                        <label className='font-medium text-2xl tracking-[-0.07em] leading-[0.94] '>
                            Nombre de tu negocio
                        </label>
                        <input type="text" className='border-b'/>
                    </div>

                </div>

                <div className='flex flex-col gap-20 mt-34'>
                    <div className='w-183.5'>
                        <h2 className='font-medium text-[88px] tracking-[-0.03em] leading-[0.94] text-center'>Cuentanos sobre tu proyecto</h2>
                    </div>

                    <div className='flex flex-col w-full gap-3'>
                        <label className='font-medium text-2xl tracking-[-0.07em] leading-[0.94] '>
                            Tu Mensaje (Proyecto, Tiempos, Presupuesto, etc.)*
                        </label>
                        <input type="text" className='border-b'/>
                    </div>

                    <button className='font-medium text-4xl tracking-[-0.07em] leading-[0.94] underline self-start'>
                        Enviar Mensaje →
                    </button>
                </div>

            </form>
        </div>
        
    </section>
  )
}

export default Contacto