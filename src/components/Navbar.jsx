import { useState } from "react";
import Ul from "../components/Ul.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Portfolio", path: "/portfolio2" },
    { name: "Services", path: "/#services" },
    { name: "Contact", path: "/#contact" },
  ];
  const metallic =
    "bg-gradient-to-b from-[#484848] via-[#252525] to-[#101010] border-t border-[#666] shadow-[inset_0_1px_2px_#ffffff25,0_4px_8px_#00000080]";

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 flex h-[60px] w-full items-center justify-between border-b border-[#414141] bg-[#F5F4F0] px-4 shadow-[0_5px_15px_ #F5F4F0,inset_0_1px_1px_#F5F4F0] md:h-[90px] lg:h-[90px] lg:px-10">
        {/* Logo */}
        <div className="text-white">
          <Link to="/">
            <h1 className="text-xl font-medium text-[#000000]">
              Muhammad Hasan
            </h1>
          </Link>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden rounded-xl p-[5px] shadow-[inset_0_2px_5px_#000,0_3px_8px_#00000080] md:flex">
          <Ul />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className={`relative flex h-[42px] w-[42px] flex-col items-center justify-center gap-[5px] rounded-xl border border-[#555] ${metallic} transition-all duration-200 active:translate-y-[2px] md:hidden`}
        >
          <span
            className={`h-[2px] w-[19px] rounded-full bg-white transition-all duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-[2px] w-[19px] rounded-full bg-white transition-all duration-300 ${
              open ? "scale-0 opacity-0" : ""
            }`}
          />

          <span
            className={`h-[2px] w-[19px] rounded-full bg-white transition-all duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed right-0 top-[60px] z-40 h-[calc(100vh-60px)] w-[280px] border-l border-[#454545] bg-[#F5F4F0] p-5 shadow-[-10px_15px_35px_#00000090,inset_1px_0_2px_#ffffff15] backdrop-blur-xl transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-3">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-5 py-4 text-[15px] text-[#c5c5c5] transition-all duration-200 hover:bg-gradient-to-b hover:from-[#111] hover:to-[#242424] hover:text-white hover:shadow-[inset_0_3px_7px_#000,0_0_8px_#ffffff15] ${metallic}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
