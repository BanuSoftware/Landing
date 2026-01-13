// ContenidoValores.jsx
import defaultIcon from "../../../Assets/Images/maybe 3.svg";

function Valores({title, content_left, content_right, icon}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl p-4 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(214,214,214,0.5)]">
      {/* Animación*/}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-b from-transparent via-transparent to-gray-400/30 -rotate-45 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-full pointer-events-none"></div>
      
      {/* Contenido */}
      <div className="relative z-10">
        {/* Title Content */}
        <div className="flex items-end gap-[15px] mb-[10px]">
          <img
            src={icon || defaultIcon}
            alt="Icon"
            className="w-[41px] h-[41px]"
          />
          <h1 className="font-medium text-[36px] leading-[95%] tracking-[-0.04em]">
            {title}
          </h1>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-2 gap-[34px] w-max relative left-[57px] text-[16px]">
          <p className="font-medium leading-[95%] tracking-[-0.08em] w-[151px]">
            {content_left}
          </p>
          <p className="font-normal leading-[95%] tracking-[-0.08em] w-[151px]">
            {content_right}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Valores;