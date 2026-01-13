import React from "react";

function Card({ title, description, icon, banner, position }) {
  // Colores según posición
  const getColor = (pos) => {
    const colors = {
      left: 'rgb(143, 52, 67)',      // secondary
      center: 'rgb(206, 83, 104)',    // primary
      right: 'rgb(247, 130, 149)'     // thirdary
    };
    return colors[pos];
  };

  return (
    <div
      className="
        w-[348px]
        h-[450px]
        flex
        flex-col
        items-center
        justify-center
        px-8
        py-4
        rounded-2xl
        shadow-2xl
      "
      style={{ 
        backgroundColor: getColor(position),
        transition: 'background-color 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {/* Icono */}
      <img
        src={icon}
        alt="Icon"
        className="w-[58px] h-[58px]"
        onError={(e) => {
          console.error('Error loading icon:', icon);
          e.target.style.display = 'none';
        }}
      />

      {/* Título */}
      <h2
        className="
          text-[36px]
          font-medium
          text-white
          text-center
          mt-4
        "
      >
        {title}
      </h2>

      {/* Texto */}
      <p
        className="
          text-[14px]
          font-light
          text-white
          text-center
          mt-2
          mb-9
        "
      >
        {description}
      </p>

      {/* Banner */}
      <div
        className="
          w-[110%]
          flex
          items-center
          justify-center
          rounded-2xl
        "
      >
        <img
          src={banner}
          alt="Banner"
          className="w-full rounded-2xl"
          onError={(e) => {
            console.error('Error loading banner:', banner);
            e.target.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
}

export default Card;