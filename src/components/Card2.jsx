import React from "react";

const Card2 = ({ image }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="200"
      data-aos-once="true"
      className="rounded-2xl bg-white bg-contain bg-center bg-no-repeat border border-black w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[370px] lg:h-[370px]"
      style={{
        backgroundImage: image ? `url(${image})` : "none",
      }}
    ></div>
  );
};

export default Card2;
<div
  className="

"
></div>;
