import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home.jsx";
import Portfolio2 from "./pages/Portfolio2.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const ScrollToSection = () => {
  const location = useLocation();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  // Handle page and section scrolling
  useEffect(() => {
    AOS.refreshHard();

    if (location.hash) {
      const id = location.hash.substring(1);

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname, location.hash]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToSection />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio2" element={<Portfolio2 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
