import React from "react";

const Button = () => {
  return (
    <button
      className="
        px-[0.25em]
        py-[0.1em]
        w-[13em]
        h-[4.2em]
        bg-[#212121]
        border-[0.08em]
        border-white
        rounded-[0.3em]
        text-[12px]
        cursor-pointer
        group
      "
    >
      <span
        className="
          relative
          flex
          justify-center
          items-center
          bottom-[0.4em]
          w-[8.25em]
          h-[2.5em]
          bg-[#212121]
          rounded-[0.2em]
          text-[1.5em]
          text-white
          border-[0.08em]
          border-white
          shadow-[0_0.4em_0.1em_0.019em_#fff]
          transition-all
          duration-500
          ease-in-out
          group-hover:translate-y-[0.4em]
          group-hover:shadow-none
        "
      >
        Explore
      </span>
    </button>
  );
};

export default Button;
