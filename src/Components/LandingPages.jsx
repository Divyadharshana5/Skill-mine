import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";

import heroBg from "../assets/backgrounds/school-bg.jpg";

import skillImg1 from "../assets/icons/essential-skills.png";
import skillImg2 from "../assets/icons/certificate.png";
import skillImg3 from "../assets/icons/career-upgrade.png";
import skillImg4 from "../assets/icons/career-master.png";

const requirements = [
  {
    img: skillImg1,
    title: "Learn the Essential Skills",
  },
  {
    img: skillImg2,
    title: "Earn Certificate And Degree",
  },
  {
    img: skillImg3,
    title: "Get Ready for the Next Career",
  },
  {
    img: skillImg4,
    title: "Master at Different Areas",
  },
];
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
              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white font-bold max-w-full lg:max-w-[800px] text-balance leading-[50px] md:leading-[80px]"
                style={{ fontFamily: "poppins,sans-serif" }}
              >
                <span className="text-[#b958f5]">7,200+</span> Courses Taught By
                {""}
                <span className="text-[#b958f5]"> 720</span> Top Instructors And
                Institutions
                {""}
              </h1>
              <p className="md:text-2xl text-xl text-gray-50">
                Elevate your educational institution to new heights,
              </p>
              <form action="" className="flex lg:w-fit w-full relative mt-5">
                <input
                  type="text"
                  className="bg-white border border-gray-300 text-gray-500 outline-none w-full lg:min-w-[600px] pr-19 pl-4 py-5 rounded-[8px] placeholder:text-sm lg:placeholder:text-lg"
                  placeholder="Search Courses...."
                />
                <button className="absolute right-0 h-full bg-purple-600 px-5 rounded-tr-[8px] rounded-br-[8px] text-[1em] transition-ease-in-out duration-0.3s cursor-pointer">
                  <RiSearch2Line color="white" size={25} />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start w-full h-full bg-purple-600 p-10">
          <span className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start gap-10 md:gap-20 max-w-[1400px] mx-auto w-full">
            {requirements.map((requirements, index) => {
              <div key={index} className=""></div>;
            })}
          </span>
        </div>
      </main>
    </div>
  );
};

export default LandingPages;
