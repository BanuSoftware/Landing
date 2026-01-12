import React from 'react'
import Carpeta from './Carpeta';

const Proceso = () => {
  const carpetas = [
    {
      title: 'Entender',
      step: '01',
      color: 'fill-[#CE5368]',
      textColor: 'fill-[#B34558]',
      description: 'En esta fase nos enfocamos en conocer a fondo tu empresa y entender realmente lo que necesitas. Queremos conectar contigo para crear una solución que se sienta hecha a tu medida.'
    },
    {
      title: 'Diseñar',
      step: '02',
      color: 'fill-[#D1455C]',
      textColor: 'fill-[#BD3148]',
      description: 'Despues de entender tus necesidades diseñamos la solución que mejor se adapta a tus objetivos, definiendo cada parte de la experiencia, desde lo que incluirá hasta cómo se verá y se sentirá.'
    },
    {
      title: 'Ejecutar',
      step: '03',
      color: 'fill-[#F78295]',
      textColor: 'fill-[#E36E81]',
      description: 'En esta etapa llevamos la idea a la vida real. Tomamos todo lo definido para que lo que imaginamos juntos se convierta en algo concreto y listo para usarse.'
    },
    {
      title: 'Entregar',
      step: '04',
      color: 'fill-[#E3536B]',
      textColor: 'fill-[#D33E57]',
      description: 'En esta estapa te entregamos el resultado final, listo para acompañarte en el siguiente paso de tu proyecto.'
    }
  ];
  
  return (
    <>
      <p></p>
      <div className="relative w-full bg-white p-8" style={{ height: '1100px' }}>
      <div className="relative w-full max-w-[1308px] mx-auto">
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