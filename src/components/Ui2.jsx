import React from "react";
import "../components/Ul.css";

const Ui2 = ({ active, setActive }) => {
  const links = ["All", "Jacket Back", "Custom", "Left Chest"];

  return (
    <div
      className="
      w-fit
      mb-5 md:mb-7
    "
    >
      <div
        className="
        w-full sm:w-fit
        max-w-full
        rounded-xl
        p-[5px]
        overflow-x-auto
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
        shadow-[inset_0_2px_5px_#000,0_3px_8px_#00000080]
      "
      >
        <div
          className="
          radio-input
          flex flex-nowrap
          w-max
          min-w-full
        "
        >
          {links.map((item) => (
            <label
              key={item}
              className={`
                label
                shrink-0
                whitespace-nowrap
                cursor-pointer
                ${active === item ? "active" : ""}
              `}
              onClick={() => setActive(item)}
            >
              <input
                type="radio"
                name="design"
                value={item}
                checked={active === item}
                onChange={() => setActive(item)}
              />

              <span className="text">{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ui2;
