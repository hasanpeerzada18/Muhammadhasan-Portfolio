import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Card2 from "../components/Card2.jsx";
import Wage from "../assets/Embroidery-Designs/WAGE.png";
import Chills from "../assets/Embroidery-Designs/CHILLIS.png";
import Time from "../assets/custom- designs/time.png";
import WaterDot from "../assets/custom- designs/waterdot.png";
import UpSetting from "../assets/Embroidery-Designs/UPSETTING-HIM.png";
import Princess from "../assets/3d-puff-designes/PRINCESS.png";
import MomLove from "../assets/3d-puff-designes/MOMLOVE.png";
import EveryBody from "../assets/3d-puff-designes/EVERYBODY.png";
import NoNinja from "../assets/Embroidery-Designs/NO-NINJA.png";
import Car1 from "../assets/Embroidery-Designs/CAR.png";
import Hands1 from "../assets/Embroidery-Designs/HANDS.png";
import House from "../assets/Embroidery-Designs/HOUSE.png";
import Shoes2 from "../assets/Embroidery-Designs/SHOES.png";
import Baby from "../assets/custom- designs/baby.png";

const Portfolio = () => {
  const carouselRef = useRef(null);

  const display = [
    Time,
    WaterDot,
    Baby,
    Wage,
    Princess,
    House,
    MomLove,
    Hands1,
    Car1,
    Shoes2,
    EveryBody,
    Chills,
    NoNinja,
    UpSetting,
  ];

  const scroll = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "right" ? 340 : -340,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-[#F5F4F0] px-2 md:px-3 lg:px-5 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Heading */}
      <div className="flex flex-col gap-4 mb-10 sm:mb-12 lg:mb-14">
        <div className="flex items-center justify-center gap-3 mb-3 sm:mb-5">
          <h2
            data-aos="fade-up"
            className="text-sm underline underline-offset-7 font-semibold uppercase tracking-[3px]"
          >
            Portfolio
          </h2>
        </div>
      </div>

      {/* Portfolio Cards */}
      <div
        ref={carouselRef}
        className="
          flex flex-row
          gap-2 sm:gap-3 md:gap-4
          lg:gap-16
          overflow-x-auto
          scroll-smooth
          snap-x snap-mandatory
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          px-2 sm:px-3 lg:px-4
        "
      >
        {display.map((image, index) => (
          <div
            key={index}
            className="
              shrink-0
              w-[260px]
              sm:w-[280px]
              md:w-[300px]
              lg:w-[320px]
              snap-start
            "
          >
            <Card2 image={image} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-row px-0 items-center justify-between mt-8">
        <div className="flex flex-row gap-3 sm:gap-4">
          <button
            data-aos="zoom-out-right"
            onClick={() => scroll("left")}
            aria-label="Previous portfolio items"
            className="
              w-11 h-11 sm:w-12 sm:h-12
              rounded-xl
              bg-[#F5F4F0]
              border border-white
              shadow-[inset_2px_2px_5px_#fff,inset_-2px_-2px_5px_#ccc,4px_4px_8px_#0002]
              flex items-center justify-center
              text-[#222]
              active:scale-95
              transition-transform duration-200
            "
          >
            <ArrowLeft size={23} />
          </button>

          <button
            data-aos="zoom-out-left"
            onClick={() => scroll("right")}
            aria-label="Next portfolio items"
            className="
              w-11 h-11 sm:w-12 sm:h-12
              rounded-xl
              bg-[#151515]
              text-white
              border border-gray-600
              shadow-[inset_1px_1px_3px_#777,3px_4px_8px_#0004]
              flex items-center justify-center
              active:scale-95
              transition-transform duration-200
            "
          >
            <ArrowRight size={23} />
          </button>
        </div>

        <Link to="/portfolio2">
          <p
            data-aos="zoom-out-left"
            className="text-xs sm:text-sm uppercase cursor-pointer underline underline-offset-7 tracking-[3px] sm:tracking-[4px] text-gray-500 font-semibold"
          >
            View All
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
