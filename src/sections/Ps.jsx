import React from "react";
import Card3 from "../components/Card3.jsx";

const clients = [
  {
    h1: "Commercial Embroidery Businesses",
    h2: "I work with commercial embroidery businesses, providing accurate digitizing for Tajima, Brother, Barudan, Happy and other embroidery machines. Every design is carefully digitized with a strong focus on design precision, machine compatibility and production-ready formats.",
  },
  {
    h1: "Uniform & Workwear Brands",
    h2: "From left-chest logos to cap designs and detailed jacket backs, I create clean, production-ready embroidery files for uniform and workwear brands across corporate, healthcare, hospitality and other industries.",
  },
  {
    h1: "Sports Teams & Schools",
    h2: "I digitize team logos, 3D puff cap designs, jersey lettering, appliqué and school crests with a strong focus on detail, ensuring each design is ready for smooth and consistent embroidery production.",
  },
  {
    h1: "Promotional Product Businesses",
    h2: "I provide embroidery digitizing and vector artwork for promotional product businesses, helping turn logos and custom artwork into embroidery-ready designs suitable for caps, apparel and other promotional items.",
  },
  {
    h1: "Custom Embroidery",
    h2: "I work with individuals, small businesses and brands looking for custom embroidery designs. From personalized logos and lettering to unique artwork and custom apparel designs, I deliver professionally digitized files tailored to each project's specific needs.",
  },
];

const WhoIWorkWith = () => {
  return (
    <section
      data-aos="fade-up"
      className="w-full bg-[#F5F4F0] flex flex-col gap-15 border-t border-black px-5 py-16 font-Inter sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-24"
    >
      {/* Section Heading */}
      <div>
        <span
          data-aos="fade-up"
          className="text-sm font-semibold uppercase tracking-[3px] text-gray-500 text-center underline underline-offset-7"
        >
          Who I Work With
        </span>
      </div>

      {/* Cards Grid */}
      <div
        data-aos="fade-up"
        className="mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {clients.map((client, index) => (
          <div
            data-aos="fade-up"
            key={client.h1}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#182E28]/10 bg-gradient-to-br from-[#F5F4F0] to-[#EAE8DF] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#182E28]/30 hover:shadow-[0_12px_30px_rgba(24,46,40,0.08)] sm:p-6 lg:p-7"
          >
            {/* Card Content */}
            <div className="flex flex-1 flex-col">
              <h2 className="mb-4 text-xl font-bold leading-snug tracking-tight text-[#000000] sm:text-2xl lg:text-2xl">
                {client.h1}
              </h2>

              <p className="text-sm font-normal leading-7 text-[#000000] sm:text-[15px]">
                {client.h2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoIWorkWith;
