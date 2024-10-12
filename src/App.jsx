import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="relative max-w-8xl max-auto pt-20 px-6 ">
        <HeroSection />
      </div>
    </>
  );
};

export default App;
