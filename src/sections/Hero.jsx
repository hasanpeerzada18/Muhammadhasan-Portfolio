import React from "react";
import { useNavigate } from "react-router-dom";
import HalftoneReveal from "@/components/HalftoneReveal.jsx";
import cristiano from "../assets/cristiano.png";
import { CircleCheckBig } from "lucide-react";
import Button from "@/components/Button.jsx";
import { Link } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full pb-10 lg:py-0 md:py-10 sm:px-8 md:px-10  font-Inter">
      <div className=" flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-8 lg:gap-12 max-w-[1440px] mx-auto">
        {/* LEFT SIDE */}
        <div
          data-aos="fade-up"
          className="hero-leftSide px-4 sm:px-2 lg:px-0 md:px-0  w-full md:w-1/2 flex flex-col items-start gap-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
            Embroidery Digitizer
          </h1>

          <p className="text-sm sm:text-base md:text-base lg:text-lg leading-relaxed max-w-[600px]">
            Manual embroidery digitizing using Wilcom V9 and E2 software. DST,
            PES and EMB file formats delivered within 2 to 4 hours, compatible
            with Tagima, Brother, Barudan and other embroidery machines.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-8 text-sm sm:text-base font-medium">
            <div className="flex flex-row items-center gap-2">
              <CircleCheckBig size={24} />
              Detail Focused
            </div>
            <div className="flex flex-row items-center gap-2">
              <CircleCheckBig size={24} />
              Quality Checked
            </div>
          </div>
          <div>
            <Link to="/portfolio2">
              <Button />
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-rightSide w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-[800px] h-[440px] sm:h-[450px] md:h-[480px] lg:h-[800px] xl:h-[800px] relative">
            <HalftoneReveal
              src={cristiano}
              mode="mono"
              shape="dot"
              cellSize={6}
              angle={45}
              inkColor="#F5F4F0"
              paperColor="#120f17"
              revealRadius={160}
              dotScale={1}
              contrast={1.1}
              brightness={0}
              invert={false}
              roughness={0}
              misregistration={0}
              fit="cover"
              softness={0.6}
              linger={1.2}
              reverse={false}
              wander={false}
              clickBurst
              intro
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
