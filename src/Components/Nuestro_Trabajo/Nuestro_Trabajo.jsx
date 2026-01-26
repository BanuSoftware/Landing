import Trabajo from "./Trabajo";
import FlowerBanner from "../../Assets/Images/FlowerBanner.png";

function Nuestro_Trabajo() {
  const trabajos = [
    {
      id: 1,
      title: "Branding", 
      subtitle: "Picase",
      description: "Adaptandola marca al entorno e-commerces sin perder su personalidad.",
      image: FlowerBanner,
      reverse: true,
    },
    {
      id: 2,
      title: "Rediseño Web", 
      subtitle: "La Molienda",
      description: "Renovando la presencia digital para una mejor experiencia de usuario.",
      image: FlowerBanner,
      textRight: true,
    },
    {
      id: 3,
      title: "Campaña Digital", 
      subtitle: "Cerveza Antu",
      description: "Estrategias creativas para aumentar la visibilidad y el engagement.",
      image: FlowerBanner,
      reverse: true,
    }
    ,
    {
      id: 4,
      title: "Fotografía de Producto", 
      subtitle: "Santiago Coffee",
      description: "Capturando la esencia del producto para destacar en el mercado.",
      image: FlowerBanner,
      textRight: true,
    }

  ];
  return(
    <div className="nuestro-trabajo-container">
      {trabajos.map((trabajo) => (
        <Trabajo 
          key={trabajo.id} 
          title={trabajo.title}
          subtitle={trabajo.subtitle}
          description={trabajo.description} 
          image={trabajo.image}
          reverse={trabajo.reverse}
          textRight={trabajo.textRight}
        />
      ))}
    </div>
  );
}

export default Nuestro_Trabajo;