import React from "react";

const Card = ({ number, title, description, image }) => {
  return (
    <div
      className="
        stats group
        w-full h-[120px]
        sm:w-[220px] sm:h-[140px]
        md:w-[280px] md:h-[160px]
        lg:w-[320px] lg:h-[180px]
        p-[5px]
        rounded-[10px]
        border border-white
        bg-[#212121]
        text-[12px]
        cursor-pointer
      "
    >
      <div
        className="
          stats-content
          relative bottom-[8px]
          flex flex-col items-center justify-center
          text-center
          w-full h-full
          rounded-[7px]
          border border-white
          bg-[#212121]
          text-white
          shadow-[0_8px_3px_0.4px_#fff]
          transition-all duration-500
          group-hover:translate-y-[8px]
          group-hover:shadow-none
        "
      >
        {image && (
          <img
            src={image}
            alt={title}
            className="w-10 h-10 object-contain mb-2"
          />
        )}

        <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
          {number}
        </span>

        <span className="text-2xl font-medium">{title}</span>
      </div>
    </div>
  );
};

export default Card;
