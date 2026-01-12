import defaultIcon from "../../../Assets/Images/maybe 3.svg";

function Valores({title, content_left, content_right, icon}) {
  return (
    <div>
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
  );
}

export default Valores;