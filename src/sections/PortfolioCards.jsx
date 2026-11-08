import React, { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Ui2 from "@/components/Ui2";
import Card2 from "../components/Card2.jsx";

// applique designs
import Bedford from "../assets/applique-designs/1936.png";

// puff images

import MadeBalance from "../assets/3d-puff-designes/MadeBALANCED.png";
import HomeGirls from "../assets/3d-puff-designes/HOMEGIRLS.png";
import Shoe from "../assets/3d-puff-designes/shoe.png";
import Sports from "../assets/3d-puff-designes/sports.png";

// new designs

import VA from "../assets/3d-puff-designes/32-VA.png";
import Arms from "../assets/3d-puff-designes/ARMS.png";
import BeKind from "../assets/3d-puff-designes/BEKIND.png";
import BraveSoul from "../assets/3d-puff-designes/BRAVESOUL.png";
import Car from "../assets/3d-puff-designes/CAR.png";
import Carling from "../assets/3d-puff-designes/CARLING.png";
import ChefMade from "../assets/3d-puff-designes/CHEFMADE.png";
import CrossStreet from "../assets/3d-puff-designes/CrossStreet.png";
import Dolphin from "../assets/3d-puff-designes/DOLPHIN.png";
import EggRollKing from "../assets/3d-puff-designes/EggRollKing.png";
import EveryBody from "../assets/3d-puff-designes/EVERYBODY.png";
import Falcon from "../assets/3d-puff-designes/FALCON.png";
import Fantasma from "../assets/3d-puff-designes/FANTASMA.png";
import Flower from "../assets/3d-puff-designes/FLOWER.png";
import FootBall from "../assets/3d-puff-designes/FOOTBALL.png";
import FootBall2 from "../assets/3d-puff-designes/FOOTBALL2.png";
import GreenElectricity from "../assets/3d-puff-designes/GREENELECTRICITY.png";
import HandTree from "../assets/3d-puff-designes/HANDTREE.png";
import Legends from "../assets/3d-puff-designes/LEGENDS.png";
import Memory from "../assets/3d-puff-designes/MEMORY.png";
import MomLove from "../assets/3d-puff-designes/MOMLOVE.png";
import Peace from "../assets/3d-puff-designes/PEACE.png";
import Polo from "../assets/3d-puff-designes/POLOGO.png";
import Princess from "../assets/3d-puff-designes/PRINCESS.png";
import Rose from "../assets/3d-puff-designes/ROSE.png";
import Rose2 from "../assets/3d-puff-designes/ROSE2.png";
import Royalty from "../assets/3d-puff-designes/ROYALTY.png";
import Star from "../assets/3d-puff-designes/STAR.png";
import TREE from "../assets/3d-puff-designes/TREE.png";
import Worriors from "../assets/3d-puff-designes/WARRIORS.png";
import Xbar from "../assets/3d-puff-designes/XBAR.png";

// Embroidery designs
import Bird from "../assets/Embroidery-Designs/BIRD.png";
import Bubble from "../assets/Embroidery-Designs/BUBBLE-HEAD.png";
import Car1 from "../assets/Embroidery-Designs/CAR.png";
import Carpe from "../assets/Embroidery-Designs/CARPE-DIEM.png";
import Catering from "../assets/Embroidery-Designs/CATERING-HAT.png";
import Chills from "../assets/Embroidery-Designs/CHILLIS.png";
import ColorBrush from "../assets/Embroidery-Designs/COLOR-BRUSH.png";
import Crown from "../assets/Embroidery-Designs/CROWN.png";
import Deer from "../assets/Embroidery-Designs/DEER-SKULL.png";
import Fear from "../assets/Embroidery-Designs/FEAR.png";
import Hands1 from "../assets/Embroidery-Designs/HANDS.png";
import HorseGirl from "../assets/Embroidery-Designs/HORSE-GIRL.png";
import House from "../assets/Embroidery-Designs/HOUSE.png";
import LadyHorse from "../assets/Embroidery-Designs/LADY-HORSE.png";
import LifeLine from "../assets/Embroidery-Designs/LIFE-LINE.png";
import Love from "../assets/Embroidery-Designs/LOVE.png";
import NoBullShakes from "../assets/Embroidery-Designs/NO-BULL-SHAKES.png";
import NoNinja from "../assets/Embroidery-Designs/NO-NINJA.png";
import NotYourBabe from "../assets/Embroidery-Designs/NOT-YOUR-BABE.png";
import PapaGang from "../assets/Embroidery-Designs/PAPA-GANG.png";
import Peace3 from "../assets/Embroidery-Designs/PEACE3.png";
import Rich from "../assets/Embroidery-Designs/RICH.png";
import Jeans from "../assets/Embroidery-Designs/RIFLE-JEANS.png";
import Shoes2 from "../assets/Embroidery-Designs/SHOES.png";
import Smiley from "../assets/Embroidery-Designs/SMILEY.png";
import Star2 from "../assets/Embroidery-Designs/STAR2.png";
import Strawberry from "../assets/Embroidery-Designs/STRAWBERRY.png";
import Thumbs from "../assets/Embroidery-Designs/THUMBS.png";
import UpSetting from "../assets/Embroidery-Designs/UPSETTING-HIM.png";
import Wage from "../assets/Embroidery-Designs/WAGE.png";
import WoodWork from "../assets/Embroidery-Designs/WOODWORX.png";
import RING from "../assets/Embroidery-Designs/94RING.png";
import LilyFlower from "../assets/Embroidery-Designs/LILY-FLOWER.png";
import Robot from "../assets/Embroidery-Designs/ROBOT.png";
import Pencil from "../assets/Embroidery-Designs/PENCIL.png";
import Kaptin from "../assets/Embroidery-Designs/KAPTN.png";
import SummerCamp from "../assets/Embroidery-Designs/SUMMER-CAMP.png";
import GrandEvents from "../assets/Embroidery-Designs/GRAND-EVENTS.png";
import Style from "../assets/Embroidery-Designs/STYLE.png";

// custom designs

import Baby from "../assets/custom- designs/baby.png";
import Heart from "../assets/custom- designs/heart.png";
import Rider from "../assets/custom- designs/rider.png";
import Time from "../assets/custom- designs/time.png";
import WaterDot from "../assets/custom- designs/waterdot.png";

const PortfolioCards = () => {
  const carouselRef = useRef(null);

  const [active, setActive] = useState("All");

  const categories = {
    All: [
      Bubble,
      Carpe,
      Catering,
      Chills,
      ColorBrush,
      Deer,
      Hands1,
      HorseGirl,
      House,
      LadyHorse,
      LifeLine,
      Love,
      NoBullShakes,
      NoNinja,
      NotYourBabe,
      PapaGang,
      Peace3,
      Rich,
      Jeans,
      Car1,
      Shoes2,
      Smiley,
      Star2,
      Strawberry,
      Thumbs,
      UpSetting,
      Wage,
      Princess,
      MomLove,
      Flower,
      Fantasma,
      EveryBody,
      Rose2,
      Dolphin,
      FootBall,
      TREE,
      Xbar,
      Royalty,
      Legends,
      HandTree,
      Worriors,
      Polo,
      Rose,
      Star,
      Peace,
      Memory,
      GreenElectricity,
      FootBall2,
      Falcon,
      EggRollKing,
      Car,

      CrossStreet,
      VA,
      Arms,
      BeKind,
      BraveSoul,
      Sports,
      Shoe,
      MadeBalance,
      HomeGirls,
    ],

    "Jacket Back": [
      EveryBody,
      Car1,
      Rose2,
      Carpe,
      Bird,
      Dolphin,
      TREE,
      HandTree,
      Rose,
      Princess,
      Star2,
      LilyFlower,
      Robot,
      MomLove,
      Star,
      Memory,
      GrandEvents,
      FootBall2,
      Falcon,
      Car,
      Arms,
      BraveSoul,
      Shoe,
      HomeGirls,
    ],

    Custom: [
      Baby,
      Car,
      Chills,
      Bird,
      Bubble,
      Car1,
      WaterDot,
      House,
      Hands1,
      Time,
      Rider,
      Heart,
      Shoes2,
      EveryBody,
      Wage,
      Star2,
      Rose2,
      Rose,
      HandTree,
      Fear,
      Deer,
      Crown,
      FootBall,
      HomeGirls,
      Dolphin,
      TREE,
      Xbar,
      Smiley,
    ],
    "Left Chest": [
      SummerCamp,
      RING,
      WoodWork,
      EggRollKing,
      Dolphin,
      Smiley,
      LadyHorse,
      Style,
      LifeLine,
      Love,
      Flower,
      ColorBrush,
      VA,
      Arms,
      Sports,
      NoBullShakes,
      Rose2,
      Princess,
      MomLove,
      NoNinja,
      NotYourBabe,
      Worriors,
      Bubble,
      PapaGang,
      Carling,
      ChefMade,
      HorseGirl,
      Polo,
      GreenElectricity,
      Fantasma,
      Kaptin,
      Pencil,
      Xbar,
      Peace,
      Rich,
      Jeans,
      Bedford,
    ],
  };

  const activeImages = categories[active];

  const scroll = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "right" ? 300 : -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="
    w-full
    flex flex-col
    justify-start
    gap-3
    overflow-hidden
    py-6
    px-4
    sm:gap-4 sm:py-8 sm:px-5
    md:gap-5 md:py-10 md:px-6
    lg:gap-6 lg:py-10 lg:px-10
  "
    >
      {/* Category Navigation */}
      <Ui2 active={active} setActive={setActive} />

      {/* Single Carousel */}
      <div
        ref={carouselRef}
        key={active}
        className="
          flex flex-row
          gap-4 md:gap-5 lg:gap-6
          overflow-x-auto
          scroll-smooth
          snap-x snap-mandatory
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          px-4 md:px-6 lg:px-10
        "
      >
        {activeImages.map((image, index) => (
          <div key={index} className="shrink-0 snap-start">
            <Card2 image={image} />
          </div>
        ))}
      </div>

      {/* Carousel Navigation */}
      <div
        className="
        flex flex-row
        items-center justify-between
        mt-5 md:mt-7
      "
      >
        <div className="flex flex-row gap-3 md:gap-4">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous portfolio items"
            data-aos="zoom-out-right"
            className="
              w-10 h-10 md:w-12 md:h-12
              rounded-xl
              bg-[#F5F4F0]
              border border-black
              shadow-[inset_2px_2px_5px_#fff,inset_-2px_-2px_5px_#ccc,4px_4px_8px_#0002]
              flex items-center justify-center
              text-[#222]
              active:scale-95
              transition-transform duration-200
            "
          >
            <ArrowLeft size={21} />
          </button>

          <button
            data-aos="zoom-out-left"
            onClick={() => scroll("right")}
            aria-label="Next portfolio items"
            className="
              w-10 h-10 md:w-12 md:h-12
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
            <ArrowRight size={21} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCards;
