import { Subtitles } from "lucide-react";

const Trabajo = ({title,subtitle,description, image, reverse, textRight}) => {
  return (
    <div className={`flex w-full md:w-[875px] lg:w-[1166px] mx-auto ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className={`texto flex-1 pl-[18px] md:pl-[27px] lg:pl-[36px] pr-[18px] md:pr-[27px] lg:pr-[36px] ${textRight ? 'text-right' : 'text-left'}`}>
        <h2 className="text-[24px] font-normal leading-[94%] tracking-[-0.07em] pt-[6px] md:pt-[9px] lg:pt-[12px] pb-[4px] md:pb-[5px] lg:pb-[7px]"> {title} </h2>
        <h1 className="text-[48px] font-medium leading-[94%] tracking-[-0.07em] pb-[100px] md:pb-[200px] lg:pb-[301px]"> {subtitle} </h1>
        <p className="text-[16px] font-medium leading-[120%] tracking-[-0.07em] max-w-[209px] inline-block">{description}</p>
      </div>
      <div className="imagen pb-[50px] md:pb-[80px] lg:pb-[119px]">
        <img className="w-full max-w-[687px] aspect-[687/471] rounded-[20px] object-cover " src={image} alt={title} />  
      </div>
    </div>
  );
};

export default Trabajo;