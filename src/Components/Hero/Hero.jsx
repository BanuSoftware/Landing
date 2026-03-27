import Navbar from '../../Layout/Navbar';
import Line2 from '../../Assets/Images/Line 2.svg';
import Image from '../../Assets/Images/BanuMonkey.svg'
import Rock1 from '../../Assets/Images/RocaDer.svg'
import Rock2 from '../../Assets/Images/RocaIzq.svg'
import HeroCarousel from './HeroCarousel.jsx';
import ScrollDownIndicator from './ScrollDownIndicator.jsx';
import './Hero.css';

function Hero({ onContactClick }) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* FONDO SUPERIOR */}
      <div className="absolute inset-0 bg-[rgb(var(--bg-primary-card))]" />
      
      {/* AGUA */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-[rgb(var(--bg-hero-secondary))]" />
      
      {/* LÍNEA */}
      <img
        src={Line2}
        alt="Divider"
        className="absolute bottom-[30%] left-0 w-full max-h-[8px] object-cover z-20 pointer-events-none"
      />
      
      {/* NAV */}
      <div className="relative z-30 pt-2">
        <Navbar onContactClick={onContactClick} />
      </div>
      
      {/* TEXTO - Con escalado fluido usando clamp */}
      <div className="relative z-30 flex flex-col items-center text-center pt-20 px-4 mb-24">
        <h1 
          className="text-white font-bold mb-4"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
        >
          BANU
        </h1>
        <p 
          className="text-white font-medium tracking-[-0.07em] leading-none max-w-150"
          style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2.25rem)' }}
        >
          Diseño y desarrollo de software a medida para empresas en crecimiento.
        </p>
      </div>
      
      {/* MONO (CLAVE) - Con escalado fluido usando clamp y vw */}
      <img
        src={Image}
        alt="Banu Monkey"
        style={{ 
          width: 'clamp(300px, 50vw, 750px)',
          maxWidth: '70%'
        }}
        className="
          absolute
          left-1/2
          -translate-x-1/2
          z-30
          bottom-[30%]
          translate-y-[24%]
        "
      />
      
      {/* ROCA IZQUIERDA - Móvil */}
      <img 
        src={Rock2}
        className="
          absolute 
          z-10
          w-20
          bottom-[18%]
          left-[5%]
          md:hidden
        "
      />
      
      {/* ROCA IZQUIERDA - Desktop */}
      <img 
        src={Rock2}
        className="
          absolute 
          z-10
          hidden
          md:block
        "
        style={{ 
          width: 'clamp(80px, 12vw, 196px)',
          bottom: 'clamp(40px, 4vw, 60px)',
          left: 'clamp(24px, 3vw, 48px)'
        }}
      />
      
      {/* ROCA DERECHA - Móvil */}
      <img 
        src={Rock1}
        className="
          absolute 
          z-10
          w-16
          bottom-[15%]
          right-[5%]
          md:hidden
        "
      />
      
      {/* ROCA DERECHA - Desktop */}
      <img 
        src={Rock1}
        className="
          absolute 
          z-10
          hidden
          md:block
        "
        style={{ 
          width: 'clamp(96px, 9vw, 128px)',
          bottom: 'clamp(80px, 8vw, 140px)',
          right: 'clamp(36px, 4.5vw, 74px)'
        }}
      />
      
      <HeroCarousel />
      <ScrollDownIndicator />
    </section>
  );
}

export default Hero;