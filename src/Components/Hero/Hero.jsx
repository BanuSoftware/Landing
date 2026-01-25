import Navbar from '../../Layout/Navbar';
import Line2 from '../../Assets/Images/Line 2.svg';
import Image from '../../Assets/Images/BanuMonkey.svg'
import Rock1 from '../../Assets/Images/RocaDer.svg'
import Rock2 from '../../Assets/Images/RocaIzq.svg'
import HeroCarousel from './HeroCarousel.jsx';
import './Hero.css';

function Hero({ onContactClick }) {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* 70% superior */}
      <div className="absolute top-0 left-0 w-full h-[70%] bg-[rgb(var(--bg-primary-card))]" />

      {/* 30% inferior */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-[rgb(var(--bg-hero-secondary))]" />

      {/* Línea SVG como imagen normal */}
      <img
        src={Line2}
        alt="Divider line"
        className="
          absolute
          top-[70%]
          left-0
          w-full
          max-h-[8px]
          h-auto
          object-cover
          z-10
          pointer-events-none
        "
      />

      {/* Contenido */}
      <div className="relative z-20 pt-2">
        <Navbar onContactClick={onContactClick}/>
      </div>

      <div className='MainSection'>
        <div className='Text-Section'>
            <p className='MainSection-Title'>BANU</p>
            <p className='MainSection-Description'>Diseño y desarrollo de software a medida para empresas en crecimiento.</p>
        </div>

        <img src={Image} alt="" className='Hero-Image'/>
        <img src={Rock1} alt=""  className='Rock1-Hero'/>
        <img src={Rock2} alt="" className='Rock2-Hero' />
        
      </div>

      <HeroCarousel />
    </section>
  );
}

export default Hero;
