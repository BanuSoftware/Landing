import Trabajo from "./Trabajo";
import FlowerBanner from "../../Assets/Images/FlowerBanner.png";
import Habitree from "../../Assets/Images/HabitreePink.png";
import Flowit from "../../Assets/Images/Flowit.png";

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
      title: "App Development", 
      subtitle: "Habitree",
      description: "Convirtiendo tus ideas en aplicaciones de alto impacto",
      image: Habitree,
      textRight: true,
    },
    {
      id: 3,
      title: "Software a  medida", 
      subtitle: "Flowit",
      description: "Software personalizado que impulsa tu negocio",
      image: Flowit,
      reverse: true,
    }
    ,

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