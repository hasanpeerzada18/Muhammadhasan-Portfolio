import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/Ul.css";

const Ul = () => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Portfolio", path: "/portfolio2" },
    { name: "Services", path: "/#services" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <div className="radio-input">
      {links.map((link) => {
        const active =
          link.path === "/"
            ? location.pathname === "/" && !location.hash
            : link.path === "/portfolio2"
              ? location.pathname === "/portfolio2"
              : location.hash === link.path.replace("/", "");

        return (
          <label className={`label ${active ? "active" : ""}`} key={link.name}>
            <Link to={link.path} className="text">
              {link.name}
            </Link>
          </label>
        );
      })}
    </div>
  );
};

export default Ul;
