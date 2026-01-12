import React from 'react'
import Carpeta from './Carpeta';

const Proceso = () => {
  const carpetas = [
    {
      title: 'Entender',
      step: '01',
      color: 'fill-[#CE5368]',
      textColor: 'text-[#B34558]',
      description: 'En esta fase nos enfocamos en conocer a fondo tu empresa y entender realmente lo que necesitas. Queremos conectar contigo para crear una solución que se sienta hecha a tu medida.'
    },
    {
      title: 'Diseñar',
      step: '02',
      color: 'fill-[#D1455C]',
      textColor: 'text-[#BD3148]',
      description: 'Despues de entender tus necesidades diseñamos la solución que mejor se adapta a tus objetivos, definiendo cada parte de la experiencia, desde lo que incluirá hasta cómo se verá y se sentirá.'
    },
    {
      title: 'Ejecutar',
      step: '03',
      color: 'fill-[#F78295]',
      textColor: 'text-[#E36E81]',
      description: 'En esta etapa llevamos la idea a la vida real. Tomamos todo lo definido para que lo que imaginamos juntos se convierta en algo concreto y listo para usarse.'
    },
    {
      title: 'Entregar',
      step: '04',
      color: 'fill-[#E3536B]',
      textColor: 'text-[#D33E57]',
      description: 'En esta estapa te entregamos el resultado final, listo para acompañarte en el siguiente paso de tu proyecto.'
    }
  ];
  
  return (
    <>
      <p className='font-medium text-6xl max-w-114 m-auto tracking-[-0.07em] text-center'>Asi llevamos tu idea a la realidad</p>
      <div className='max-w-lg m-auto'>
        <div className='w-1/2'></div>
        <div className='max-w-58 font-medium text-[16px] tracking-[-0.07em] mt-12 m-auto ml-70 indent-5 leading-none mb-24'>Cuatro pasos claros para avanzar contigo de forma cercana y eficiente, cuidando cada detalle a lo largo del camino.</div>
      </div>
      
      <div className="relative w-full bg-white p-8 h-275">
      <div className="relative w-full max-w-327 mx-auto">
        {carpetas.map((carpeta, index) => (
          <Carpeta
            key={index}
            title={carpeta.title}
            step={carpeta.step}
            color={carpeta.color}
            textColor={carpeta.textColor}
            description={carpeta.description}
            index={index}
          />
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Proceso