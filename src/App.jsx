import React, { useState, useEffect, useRef } from "react";
import Landing from "./Pages/Landing.jsx";
import Contacto from "./Components/Contacto/Contacto.jsx";
import BackgroundMusic from './BackgroundMusic.jsx';

function App() {
  const [showContacto, setShowContacto] = useState(false);
  const contactoRef = useRef(null);
  
  useEffect(() => {
    if (showContacto) {
      document.body.style.overflow = 'hidden';
      // Scroll al inicio cuando se abre
      if (contactoRef.current) {
        contactoRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showContacto]);

  const handleCloseContacto = () => setShowContacto(false);

  return (
    <div>
      <Landing onContactClick={() => setShowContacto(true)} />
      
      <div 
        ref={contactoRef}
        className={`fixed inset-0 z-50 transform transition-transform duration-500 ease-in-out overflow-y-auto ${
          showContacto ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={handleCloseContacto}
          className="absolute top-8 right-8 text-4xl font-light hover:text-gray-600 transition-colors z-[60] cursor-pointer"
        >
          ✕
        </button>
        
        <div className="w-full h-full bg-white">
          <Contacto onClose={handleCloseContacto} />
        </div>
      </div>
    </div>
  );
}

export default App;