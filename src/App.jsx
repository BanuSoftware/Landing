import React, { useState, useEffect } from "react";
import Landing from "./Pages/Landing.jsx";
import Contacto from "./Components/Contacto/Contacto.jsx";
import BackgroundMusic from './BackgroundMusic.jsx';

function App() {
  const [showContacto, setShowContacto] = useState(false);

  // Bloquear scroll del body cuando el overlay está abierto
  useEffect(() => {
    if (showContacto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showContacto]);

  return (
    <div>
      <Landing onContactClick={() => setShowContacto(true)} />
      
      {/* Overlay de Contacto con animación */}
      <div 
        className={`fixed inset-0 z-50 bg-white transform transition-transform duration-500 ease-in-out overflow-y-auto ${
          showContacto ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Botón de cerrar */}
        <button
          onClick={() => setShowContacto(false)}
          className="absolute top-8 right-8 text-4xl font-light hover:text-gray-600 transition-colors z-11 cursor-pointer"
        >
          ✕
        </button>
        
        {showContacto && <Contacto />}
      </div>
    </div>
  );
}
export default App;