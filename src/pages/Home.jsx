import React from "react";
import About from "../sections/About.jsx";
import Services from "../sections/Services.jsx";
import Portfolio from "../sections/Portfolio.jsx";
import Hero from "@/sections/Hero.jsx";
import FAQs from "@/sections/Faqs.jsx";

const Home = () => {
  return (
    <>
      <section id="home" className="scroll-mt-0">
        {/* Hero Section */}
      </section>

      <section id="hero" className="scroll-mt-0">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-[90px]">
        <About />
      </section>

      <section id="portfolio" className="scroll-mt-[90px]">
        <Portfolio />
      </section>

      <section id="services" className="scroll-mt-[90px]">
        <Services />
      </section>

      <section id="about" className="scroll-mt-[90px]">
        <FAQs />
      </section>

      <section id="contact" className="scroll-mt-[90px]">
        {/* Contact Section */}
      </section>
    </>
  );
};

export default Home;
