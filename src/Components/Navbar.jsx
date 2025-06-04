import { React, useState } from "react";
import { Link } from "react-router-dom";
import { RiSearch2Line, RiShoppingCartLine, RiMenuLine } from "react-icons/ri";
import { FaTimes, FaChevronDown } from "react-icons/fa";

const CourseCategories = [
  "Art & Design",
  "Business",
  "Computer Science",
  "Data Science",
  "Finance",
  "Health & Fitness",
  "Lifestyle",
  "Marketing",
  "Music",
  "Photography",
  "Programming",
  "Social Media",
  "Writing",
  "Language",
  "Math",
  "Science",
  "Social Science",
  "Technology",
  "Web Design",
  "Web Development",
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  return (
    <div className="flex items-center justify-center sticky top-0 z-100 bg-[#fff] shadow-md w-full">
      <nav className="flex items-center w-full max-w-[1400px] justify-between gap-3 px-5 md:px-10 py-4">
        <span className="flex items-center lg:border-r border-gray-300 min-h-[40px] pr-7">
          <Link to="/">
            <h1 className="font-bold text-xl">
              Skill <span className="text-purple-500">Mine</span>
            </h1>
          </Link>
        </span>
        <div
          className="relative hidden lg:block"
          onMouseEnter={() => setIsCategoryOpen(true)}
          onMouseLeave={() => setIsCategoryOpen(false)}
        >
          <button className="flex items-center gap-2 text-[1em] cursor-pointer">
            <RiMenuLine size={20} />
            Category
          </button>
          <div
            className={`absolute z-20 left-0 w-[250px] mt-3 bg-[#fff] shadow-lg rounded-md p-3 transition-all duration-300 ease-in-out ${
              isCategoryOpen
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-5 invisible"
            }`}
          >
            <ul className="flex flex-col gap-3 pl-4 mt-2 max-h-[200px] overflow-auto scrollbar">
              {CourseCategories.map((category, index) => (
                <li key={index}>
                  <Link
                    className="hover:text-purple-500 text-gray-600 cursor-pointer"
                    to="#"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <form action="submit" className="hidden lg:flex w-[500px] relative">
          <input
            type="text"
            className="border border-1 border-gray-300 text-gray-700 outline-none w-full p-4 pr-10 rounded-[8px]"
            placeholder="Search Courses..."
          />
          <button className="absolute right-4 h-full transition-ease-in-out duration-0.3s cursor-pointer">
            <RiSearch2Line color="#7d0ed2" size={22} />
          </button>
        </form>
        <Link
          className="hidden lg:block whitespace-nowrap hover-text-purple-500 "
          to="#"
        >
          Become a Instructor
        </Link>
        <div className="flex items-center gap-4 min-h-[40px]">
          <Link to="#" className="cursor-pointer relative p-2">
            <RiShoppingCartLine color="#000" size={25} />
            <span className="flex items-center justify-center absolute top-[-2px] right-[-5px] bg-purple-600 text-white text-sm font-medium p-1.5 rounded-full h-[20px] w-fit">
              10
            </span>
          </Link>
          <button
            className="lg:hidden cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          >
            <RiMenuLine color="#000" size={25} />
          </button>
          <span className="hidden lg:flex items-center gap-8 lg:border-1 border-gray-100 pl-5 ml-5 whitespace-nowrap">
            <Link to=" " className="text-lg font-medium hover:text-purple-500">
              Log In
            </Link>
            <Link
              to=" "
              className="text-lg font-medium bg-purple-600 text-white px-6 py-2 rounded-md text-center"
            >
              Sign Up
            </Link>
          </span>
        </div>
      </nav>
      <div
        className={`fixed inset-0 backdrop-blur-sm top-0 left-0 h-[100vh] w-full bg-[#0000001b] bg-opacity-50 z-40 transition-opacity duration-400 ${
          isSidebarOpen ? "opacity-200 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      <div
        className={`fixed top-0 left-0 h-[100vh] w-[80%] sm:w-[350px] bg-gray-900 shadow-lg z-50 p-5 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link to="/">
          <h1 className="font-bold text-xl">
            Skill <span className="text-purple-500">Mine</span>
          </h1>
          <button
            className="absolute top-6 right-6 cursor-pointer "
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes size={25} color="#fff" />
          </button>
          <nav className="relative h-full mt-10 flex flex-col gap-1 text-white">
            <form action="submit" className="flex w-full relative">
              <input
                type="text"
                className="border border-1 border-gray-300  outline-none w-full p-4 pr-17 rounded-[8px]"
                placeholder="Search Courses..."
              />
              <button className="absolute right-0 text-[1em] bg-purple-500 px-5 rounded-tr-[8px] rounded-br-[8px] h-full transition-ease-in-out duration-0.3s cursor-pointer">
                <RiSearch2Line color="#fff" size={22} />
              </button>
            </form>
            <div className="flex flex-col gap-2 mt-10">
              <button
                onClick={() =>
                  setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                }
                className="flex justify-between items-center text-lg font-medium w-full text-left"
              >
                Category
                <FaChevronDown
                  color="#fff"
                  size={20}
                  className={`transition-transform duration-300 ${
                    isCategoryDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ${
                  isCategoryDropdownOpen ? "max-height-[300px]" : "max-h-0"
                }`}
              >
                <ul className="flex flex-col gap-3 pl-4 mt-2 max-h-[200px] overflow-auto">
                  {CourseCategories.map((category, index) => (
                    <li key={index}>
                      <Link
                        className="hover:text-purple-500 text-white cursor-pointer"
                        to="#"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="#"
                className="text-lg font-medium hover:text-purple-500"
              >
                Become an Instructor
              </Link>
            </div>
            <div className="absolute bottom-20 flex flex-col items-center gap-2 w-full ">
              <Link
                to="#"
                className="w-full text-lg font-medium bg-purple-600 text-white px-6 py-3 rounded-md text-center"
              >
                Login
              </Link>
              <Link
                to="#"
                className="w-full text-lg font-medium bg-purple-600 text-white px-6 py-3 rounded-md text-center"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
