import React from "react";

const IconStyle = {
  fill: "none",
  stroke: "#D99000",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// 01 - Logo Digitizing
const LogoIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className=" w-14 h-14 sm:w-16 sm:h-16"
    {...IconStyle}
  >
    <g fill="" stroke="#000000">
      <path d="M8 8L13 3L29 19L24 24Z" />
      <path d="M4 15L9 10L25 26L20 31Z" />
      <path d="M24 26L43 7L49 13L30 32Z" />
      <path d="M28 32L48 52L54 46L34 26" />
      <path d="M36 24L52 8L60 16L44 32" />
      <path d="M39 38L55 54L49 60L33 44" />
      <path d="M7 47L25 29L35 39L17 57Z" />
      <path d="M13 50L18 55M18 45L23 50M23 40L28 45" />
      <circle cx="54" cy="11" r="2" />
      <path d="M44 12L48 16" />
    </g>
  </svg>
);

// 02 - Cap & Hat Digitizing
const CapIcon = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14 sm:w-16 sm:h-16" {...IconStyle}>
    <g fill="" stroke="#000000">
      <rect x="7" y="7" width="48" height="42" rx="2" />
      <rect x="13" y="13" width="36" height="24" />
      <path d="M13 19H49M13 32H49" />
      <circle cx="31" cy="25" r="5" />
      <path d="M23 33L28 29L33 33L39 28L44 33" />
      <path d="M17 17H20M24 17H27" />
      <path d="M25 49V55M38 49V55M20 55H44" />
      <path d="M17 60H47" />
      <circle cx="31" cy="44" r="1.5" />
      <path d="M7 13H3V44H7M55 13H59V44H55" />
    </g>
  </svg>
);

// 03 - 3D Puff Digitizing
const PuffIcon = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14 sm:w-16 sm:h-16" {...IconStyle}>
    <g fill="" stroke="#000000">
      <path d="M25 5H39L41 11L47 13L53 9L59 20L55 25L57 32L63 35L59 47L52 47L47 53L48 60H16L17 53L11 47L5 47L1 35L7 32L9 25L5 20L11 9L17 13L23 11Z" />
      <circle cx="32" cy="30" r="17" />
      <path d="M32 17V43M32 21C25 16 19 24 24 29C17 34 24 43 32 38" />
      <path d="M32 21C39 16 45 24 40 29C47 34 40 43 32 38" />
      <path d="M25 47H39M26 51H38M28 55H36" />
      <path d="M23 59H41" />
    </g>
  </svg>
);

// 04 - Jacket Back Digitizing
const JacketIcon = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14 sm:w-16 sm:h-16" {...IconStyle}>
    <g fill="" stroke="#000000">
      <path d="M35 5C25 5 20 13 20 23C20 29 23 34 27 38V44H41V38C45 34 48 29 48 23C48 13 43 5 35 5Z" />
      <path d="M27 44H41M28 49H40M30 53H38" />
      <path d="M34 12L31 24L38 21L34 35" />
      <circle cx="14" cy="42" r="10" />
      <circle cx="14" cy="42" r="5" />
      <path d="M14 28V31M14 53V56M0 42H3M25 42H28" />
      <path d="M4 32L7 35M21 49L24 52M4 52L7 49M21 35L24 32" />
      <circle cx="27" cy="58" r="3" />
      <path d="M27 53V51M27 63V61M22 58H20M34 58H32" />
    </g>
  </svg>
);

const services = [
  {
    icon: LogoIcon,
    title: "Logo Digitizing",
    description:
      "High-quality logo digitizing with clean detailing, perfect for branding and apparel embroidery.",
    number: "01",
  },
  {
    icon: CapIcon,
    title: "Cap & Hat Digitizing",
    description:
      "Expert digitizing for caps and hats, including flat and structured designs.",
    number: "02",
  },
  {
    icon: PuffIcon,
    title: "3D Puff Digitizing",
    description:
      "Raised embroidery effects for caps and headwear with bold and premium appearance.",
    number: "03",
  },
  {
    icon: JacketIcon,
    title: "Jacket Back Digitizing",
    description:
      "Large and complex digitizing for jacket backs with proper stitch balance.",
    number: "04",
  },
];

const Services = () => {
  return (
    <section className="w-full bg-[#F5F4F0] border-t border-black px-5 py-16 font-Inter sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-24">
      {/* Heading */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-[3px] text-gray-500 text-center underline underline-offset-7">
          Services
        </h2>
      </div>

      {/* Services List */}
      <div className="w-full">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              data-aos="fade-up"
              key={service.number}
              className="
                flex flex-col gap-5
                py-8
                sm:flex-row sm:items-center sm:gap-8
                md:py-10
                lg:gap-10 lg:py-11
                 border-b border-[#000000]
              "
            >
              {/* Icon */}
              <div
                data-aos="zoom-out-right"
                className="flex shrink-0  items-center lg:justify-center sm:w-[75px]"
              >
                <Icon />
              </div>

              {/* Content */}
              <div data-aos="fade-up" className="flex-1">
                <h3
                  data-aos="fade-up"
                  className="mb-2 text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-[34px]"
                >
                  {service.title}
                </h3>

                <p
                  data-aos="fade-up"
                  className="max-w-[750px] text-sm leading-6 text-[#7c7d7e] sm:text-base md:text-lg md:leading-7"
                >
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
