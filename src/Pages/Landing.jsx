import VisionMision from "../Components/VisionMision/VisionMision.jsx";
import Carousel from "../Components/Servicios/Servicios.jsx";
import Proceso from "../Components/Proceso/Proceso.jsx";
import Valores from "../Components/Valores/Valores.jsx";
import Contacto from "../Components/Contacto/Contacto.jsx";
function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <VisionMision />
      <Carousel />
      <Proceso />
      <Valores />
      <Contacto />
    </div>
  );
}

export default Landing;