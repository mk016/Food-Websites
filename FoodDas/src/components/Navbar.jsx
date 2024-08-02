import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logoImage from "../img/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="bg-orange-100 p-4 flex flex-wrap justify-between items-center"
      style={{ backgroundColor: "#FFEFE6" }}
    >
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/Home">
          <img
            src={logoImage}
            alt="Food Dash Logo"
            className="w-24 md:w-40"
          />
        </Link>
        <button
          className="md:hidden text-gray-400 focus:outline-none"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="h-6 w-6" />
        </button>
      </div>
      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row gap-5 mt-4 md:mt-0 w-full md:w-auto`}
      >
        <li className="text-gray-400 font-bold hover:text-orange-500">
          <NavLink
            to="/"
            className={(e) => (e.isActive ? "text-orange-500" : "text-black")}
          >
            Home
          </NavLink>
        </li>
        <li className="text-gray-400 font-bold hover:text-orange-500">
          <NavLink
            to="/Menu"
            className={(e) => (e.isActive ? "text-gray-300 font-bold" : "text-black")}
          >
            Menu
          </NavLink>
        </li>
        <li className="text-gray-400 font-bold hover:text-orange-500">
          <NavLink
            to="/"
            className={(e) => (e.isActive ? "text-gray-300" : "text-black")}
          >
            Offers
          </NavLink>
        </li>
        <li className="text-gray-400 font-bold hover:text-orange-500">
          <NavLink
            to="/"
            className={(e) => (e.isActive ? "text-gray-300" : "text-black")}
          >
            Service
          </NavLink>
        </li>
        <li className="text-gray-400 font-bold hover:text-orange-500">
          <NavLink
            to="/Login"
            className={(e) => (e.isActive ? "text-gray-300" : "text-black")}
          >
            Login
          </NavLink>
        </li>
      </ul>
      <div className="hidden lg:flex items-center mt-4 md:mt-0 w-full md:w-auto justify-between">
        <div className="bg-orange-500 h-8 w-8 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faSearch} className="h-3 w-3 text-white" />
        </div>
        <Link to="/Cart" className="w-8 h-8 rounded-full bg-pink-200 ml-2"></Link>
      </div>
    </nav>
  );
}

export default Navbar;
