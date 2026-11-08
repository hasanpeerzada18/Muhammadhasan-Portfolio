import React from "react";
import Card5 from "@/components/Card5";
import GreenParot from "../assets/Embroidery-design-2/GreenParot.png";
import Marcedes from "../assets/Embroidery-design-2/Marcedes.png";
import MikeyMouse from "../assets/Embroidery-design-2/MikeyMouse.png";
import SDoll from "../assets/Embroidery-design-2/SDoll.png";
import Skeleton from "../assets/Embroidery-design-2/Skeleton.png";
import WEagle from "../assets/Embroidery-design-2/WEagle.png";
import Goat from "../assets/Embroidery-design-2/Goat.png";

const ImageLightbox = () => {
  return (
    <section className="px-5 py-12 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {/* First Card - Full Width */}
        <div className="col-span-full">
          <Card5 image={Marcedes} />
        </div>

        {/* Remaining Cards */}
        <Card5 image={GreenParot} />
        <Card5 image={MikeyMouse} />
        <Card5 image={SDoll} />
        <Card5 image={Skeleton} />
        <Card5 image={WEagle} />
        <Card5 image={Goat} />
      </div>
    </section>
  );
};

export default ImageLightbox;
