import React from 'react'
import Carpeta from './Carpeta';

const Proceso = ({ onContactClick }) => {
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
  
  const containerHeight = (carpetas.length - 1) * 170 + 600;
  
  return (
    <div className="w-full px-4 md:px-8">
      <p className='font-medium text-3xl md:text-5xl lg:text-6xl max-w-4xl mx-auto tracking-[-0.07em] text-center mt-16 md:mt-24 lg:mt-28'>
        Así llevamos tu idea a la realidad
      </p>
      
      <div className='max-w-lg mx-auto'>
        <div className='max-w-xs md:max-w-sm lg:max-w-58 font-medium text-sm md:text-base tracking-[-0.07em] mt-8 md:mt-10 lg:mt-12 mx-auto md:ml-auto lg:ml-70 indent-5 leading-tight mb-12 md:mb-20 lg:mb-24'>
          Cuatro pasos claros para avanzar contigo de forma cercana y eficiente, cuidando cada detalle a lo largo del camino.
        </div>
      </div>
      
      {/* Contenedor Desktop/Tablet */}
      <div 
        className="hidden md:block relative w-full bg-white p-4 md:p-6 lg:p-8" 
        style={{ height: `${containerHeight}px` }}
      >
        <div className="relative w-full max-w-7xl mx-auto">
          {carpetas.map((carpeta, index) => (
            <Carpeta
              key={index}
              title={carpeta.title}
              step={carpeta.step}
              color={carpeta.color}
              textColor={carpeta.textColor}
              description={carpeta.description}
              index={index}
              onContactClick={onContactClick}
            />
          ))}
        </div>
      </div>
      {/* Contenedor Móvil */}
      <div className="md:hidden pb-2">
        {carpetas.map((carpeta, index) => (
          <Carpeta
            key={index}
            title={carpeta.title}
            step={carpeta.step}
            color={carpeta.color}
            textColor={carpeta.textColor}
            description={carpeta.description}
            index={index}
            onContactClick={onContactClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Proceso