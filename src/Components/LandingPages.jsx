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
        <div>
          <img
            className="absolute h-full w-full z-10 object-cover"
            src={heroBg}
            alt=""
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPages;
