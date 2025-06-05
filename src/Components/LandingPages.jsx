import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import heroBg from "../assets/backgrounds/school-bg.jpg";
const LandingPages = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="flex flex-col items-center justify-center relative min-h-[600px] sm:h-[100vh]">
          <img
            className="absolute h-full w-full z-10 object-cover"
            src={heroBg}
            alt=""
          />
          <div className="absolute z-20 w-full h-full bg-[#00000093]"></div>
        </div>
      </main>
    </div>
  );
};

export default LandingPages;
