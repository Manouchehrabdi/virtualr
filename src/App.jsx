import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Courses from "./components/Courses";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="relative max-w-8xl max-auto pt-20 px-6 ">
        <HeroSection />
        <Courses/>
      </div>
    </>
  );
};

export default App;
