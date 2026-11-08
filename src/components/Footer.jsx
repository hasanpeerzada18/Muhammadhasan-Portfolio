import React from "react";
import { Link } from "react-router-dom";
import SocialDock from "./SocialDock";

const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio2" },
    { name: "About", path: "/#about" },
    { name: "Services", path: "/#services" },
    { name: "Contact", path: "/#contact" },
  ];
  return (
    <footer className="w-full border-t border-black bg-[#F5F4F0] text-black px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20 pt-12 sm:pt-14 md:pt-16 lg:pt-20 pb-6">
      {/* Main Footer */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-8 xl:gap-16">
        {/* Brand */}
        <div className="flex flex-col gap-3 items-start">
          <h1 className="text-2xl sm:text-4xl lg:text-2xl xl:text-5xl font-semibold tracking-tight">
            Muhammad Hasan<span>.</span>
          </h1>

          <p className="max-w-[750px] text-sm leading-6 text-[#7c7d7e] sm:text-base md:text-lg md:leading-7">
            Professional embroidery digitizing services for brands and
            businesses worldwide.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-start">
          <h3 className="text-xs sm:text-sm uppercase tracking-[3px] font-semibold mb-6">
            Navigation
          </h3>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="
        group relative inline-flex w-fit
        text-sm md:text-base
        after:content-['']
        after:absolute after:left-0 after:-bottom-1
        after:h-[1px] after:w-0
        after:bg-black
        after:transition-all after:duration-300
        after:ease-in-out
        hover:after:w-full
      "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4 items-start sm:col-span-2 lg:col-span-1">
          <h3 className="text-xs sm:text-sm uppercase tracking-[3px] font-semibold mb-6">
            Contact
          </h3>

          <SocialDock />

          <div className="group flex cursor-pointer items-center gap-2">
            {/* Custom Phone SVG */}
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="
      w-5 h-5
      stroke-black
      transition-transform duration-300
 
    "
            >
              <path
                d="M14 7L21 15L17 20C19 25 23 29 28 31L33 27L41 34L37 41C36 43 33 44 30 43C17 39 8 30 5 17C4 14 5 11 7 10L14 7Z"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Phone Number */}
            <a
              className="
      text-[18px] sm:text-[18px] md:text-[18px]
      font-medium tracking-tight
      relative w-fit
      after:absolute after:left-0 after:-bottom-1
      after:w-0 after:h-[1px]
      after:bg-black
      after:transition-all after:duration-300
      group-hover:after:w-full
    "
            >
              +92 0317 3331040
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        className="
        w-full max-w-[1400px] mx-auto
        mt-14 sm:mt-16 md:mt-20
        pt-6 border-t border-black
        flex flex-col sm:flex-row
        items-center justify-between
        gap-5 sm:gap-4
      "
      >
        <p className="text-xs text-center sm:text-left">
          © {new Date().getFullYear()} Muhammad Hasan.
        </p>

        <p className="group flex items-center gap-2 text-xs">
          Karachi,Pakistan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
