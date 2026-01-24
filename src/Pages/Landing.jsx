import VisionMision from "../Components/VisionMision/VisionMision.jsx";
import Carousel from "../Components/Servicios/Servicios.jsx";
import Proceso from "../Components/Proceso/Proceso.jsx";
import Valores from "../Components/Valores/Valores.jsx";
import Hero from "../Components/Hero/Hero.jsx";
import Footer from "../Components/Proceso/Footer.jsx";

function Landing() {
  return (<>
    <div className="min-h-screen bg-white z-10 relative">
      <Hero />
      <VisionMision />
      <Carousel />
      <Proceso />
    </div>
    <Footer></Footer>
  </>
  );
}

export default Landing;