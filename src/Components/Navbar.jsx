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
          <link to="/">
            <h1 className="font-bold text-xl">
              Skill <span className="text-purple-500">Mine</span>
            </h1>
          </link>
        </span>
        <div
          className="relative hidden lg:block"
          onMouseEnter={() => setIsCategoryOpen(true)}
          onMouseLeave={() => setIsCategoryOpen(false)}
        >
          <button className="flex items-center gap-2 text-[1em] cursor-pointer">
            <RiMenuLine />
            Category
          </button>
          <div
            className={`absolute z-20 left-0 w-[250px] mt-3 bg-[#fff] shadow-lg rounded-md p-3 transition-all duration-300 ease-in-out ${
              isCategoryOpen
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-5 invisible"
            }`}
          >
            <ul></ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
