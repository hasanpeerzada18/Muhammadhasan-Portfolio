import React from "react";
import Card from "@/components/Card.jsx";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#F5F4F0] text-[#111111] px-5 sm:px-8 lg:px-12 py-20 lg:py-28 border-t border-black/20"
    >
      <div className="max-w-[1450px] mx-auto">
        <div className="flex flex-col gap-8 mb-20">
          <div>
            <span
              data-aos="fade-up"
              className="text-sm uppercase underline underline-offset-7 tracking-[4px] text-gray-500 font-semibold"
            >
              ABOUT ME
            </span>
          </div>

          <div className="lg:w-[45%]">
            <p
              data-aos="fade-up"
              className="text-lg sm:text-xl leading-relaxed text-gray-700"
            >
              I'm an experienced Embroidery Digitizer with hands-on expertise in
              logo digitizing, transforming creative artwork into high-quality,
              production-ready embroidery files.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center items-center gap-5"
        >
          <Card number="97%" title="Satisfied Clients" />
          <Card number="3Years+" title="Experience" />
          <Card number="7000+" title="Designes delivered" />
        </div>
      </div>
    </section>
  );
};

export default About;
