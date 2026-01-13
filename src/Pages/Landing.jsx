import VisionMision from "../Components/VisionMision/VisionMision.jsx";
import Carousel from "../Components/Servicios/Servicios.jsx";
import Proceso from "../Components/Proceso/Proceso.jsx";

function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <VisionMision />
      <Carousel />
      <Proceso />

    </div>
  );
}

export default Landing;