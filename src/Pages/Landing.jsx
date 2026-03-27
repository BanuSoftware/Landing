import VisionMision from "../Components/VisionMision/VisionMision.jsx";
import Carousel from "../Components/Servicios/Servicios.jsx";
import Proceso from "../Components/Proceso/Proceso.jsx";
import Hero from "../Components/Hero/Hero.jsx";
import Footer from "../Layout/Footer.jsx";

function Landing({ onContactClick }) {
  return (<>
    <div className="min-h-screen bg-white z-10 relative">
      <Hero onContactClick={onContactClick} />
      <VisionMision />
      <Carousel />
      <Proceso onContactClick={onContactClick}/>
    </div>
    <Footer onContactClick={onContactClick}></Footer>
  </>
  );
}
export default Landing;