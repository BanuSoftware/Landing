import React from 'react'
import { InlineWidget } from "react-calendly";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contacto = () => {
  return (
    <div className='bg-[#CE5368] min-h-200 flex justify-center items-center'>
        <div className='w-90 items-center p-8 text-white flex-col'>
            <h2 className='font-medium text-5xl'>Contactanos</h2>
            <p className='font-medium mt-4'>¿Listo para llevar tu proyecto al siguiente nivel? Escríbenos y uno de nuestros expertos se pondrá en contacto contigo para ofrecerte una solución personalizada. ¡Estamos aquí para ayudarte a crecer con tecnología!</p>
            <div className='flex gap-2 items-center mt-4'>
                <FaPhone className='text-xl'/>
                <p className='font-medium text-xl mt-1'>442 123 1212</p>
            </div>
            
            <div className='flex gap-2 items-center mt-2'>
                <IoMail className='text-xl' />
                <a href="mailto:studio@banu.com.mx" className='font-medium text-xl'>studio@banu.com.mx</a>
            </div>
        </div>
        <InlineWidget
            url="https://calendly.com/sebastian-oso03/30min"
            className='h-165 w-250 ml-16 p-0 bg-[#CE5368]'
            prefill={{
                name: 'Jane Doe',
                email: 'jane@example.com'
            }}
        />
    </div>
  )
}

export default Contacto