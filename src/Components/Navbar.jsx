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
    <div className="flex items-center justify-center sticky top-0 w-full"></div>
  );
};
export default Navbar;
