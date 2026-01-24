import VisionMision from "../Components/VisionMision/VisionMision.jsx";
import Carousel from "../Components/Servicios/Servicios.jsx";
import Proceso from "../Components/Proceso/Proceso.jsx";
import Valores from "../Components/Valores/Valores.jsx";
import Hero from "../Components/Hero/Hero.jsx";

function Landing({ onContactClick }) {
  return (
    <div className="min-h-screen bg-white">
      <Hero onContactClick={onContactClick} />
      <VisionMision />
      <Carousel />
      <Proceso />
      <Valores />
    </div>
  );
}
export default Landing;