import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";

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
          <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-start gap-10 relative w-full h-full max-w-[1400px] p-3 sm:p-5 md:p-10">
            <div className="flex flex-col items-start text-start space-y-4 z-20">
              <p
                className="lg:text-2xl text-xl font-semibold text-white"
                style={{ fontFamily: "poppins,sans-serif" }}
              >
                Join Us today to get
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold max-w-full lg:max-w-[800px] text-balance leading-[50px]"></h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPages;
