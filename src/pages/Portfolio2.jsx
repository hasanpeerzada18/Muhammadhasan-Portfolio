import React from "react";
import GridScan from "@/components/GridScan.jsx";
import TechText from "../components/TechText.jsx";
import PortfolioCards from "@/sections/PortfolioCards.jsx";
import Ps from "../sections/Ps.jsx";
import PortfolioFAQ from "@/sections/PortfolioFAQ.jsx";
import ImageLightbox from "@/sections/ImageLightbox.jsx";

const Portfolio2 = () => {
  return (
    <>
      <div>
        <div className="Hero">
          <div style={{ width: "100%", height: "480px", position: "absolute" }}>
            <TechText
              text="PORTFOLIO"
              fontWeight={600}
              fontSize={150}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              intro="none"
              introDuration={2}
              clickKick
              guides={false}
              fontFamily="Inter"
              letterSpacing={-0.05}
              accentColor="currentColor"
              reach={200}
              softness={0.7}
              lineStyle="dashed"
              strokeWidth={1.5}
              speed={1}
              bounce={0.4}
              selection
              labels
              color="currentColor"
              align="center"
              draggable
              sweep
            />
          </div>
          <div style={{ width: "100%", height: "600px", position: "relative" }}>
            <GridScan
              linesColor="#4d4757"
              scanColor="#105271"
              cells={8}
              depth={3}
              scanDuration={2.4}
              scanDelay={1.6}
              clickEffect="ping"
              lineThickness={1}
              lineStyle="solid"
              depthFade={0.6}
              shading={0.7}
              reflection={0.35}
              points
              scanDirection="forward"
              scanWidth={1}
              trail={0.5}
              glow={0.6}
              parallax={1}
              autoScan
              interactive
              enableWebcam={false}
              showPreview
              intro
              lightMode={false}
            />
          </div>
        </div>

        <div>
          <PortfolioCards />
        </div>

        <div>
          <Ps />
        </div>

        <ImageLightbox />

        <div>
          <PortfolioFAQ />
        </div>
      </div>
    </>
  );
};

export default Portfolio2;
