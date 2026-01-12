import Carousel from "../Components/Servicios/Servicios.jsx";
import Valores from "../Components/Valores/Valores.jsx";

function Landing() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Carousel />
      </div>
      <div className="min-h-screen bg-white">
        <Valores />
      </div>
    </>
  );
}

export default Landing;