import React from "react";
import { NavLink, Link } from "react-router-dom";
import Cart from "./Cart";
import logoImage from "../img/logo1.png";
import Login from "./login";
import Menu from "./menu";

function Navbar() {
  return (
    <nav
      className="bg-ornage-100 p-4 flex flex-wrap justify-between items-center"
      style={{ backgroundColor: "#FFEFE6" }}
    >
      <div className="flex items-center">
        <img src={logoImage} alt="logo" className="w-24 md:w-40" />
      </div>
      <ul className="flex flex-wrap gap-5 mt-4 md:mt-0">
        <li className="text-gray-400 font-bold hover:text-orange-500">
          <NavLink
            to="/"
            className={(e) => {
              e.isActive ? "text-gray-300" : "text-black";
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="text-gray-400 font-bold hover:text-orange-500">
          <NavLink
            to="/Menu"
            className={(e) => {
              e.isActive ? "text-gray-300 font-bold" : "text-black";
            }}
          >
            Menu
          </NavLink>
        </li>
        <li className="text-gray-400 font-bold hover:text-orange-500">
          <NavLink
            to="/"
            className={(e) => {
              e.isActive ? "text-gray-300" : "text-black";
            }}
          >
            Offers
          </NavLink>
        </li>
        <li className="text-gray-400 font-bold hover:text-orange-500">
          <NavLink
            to="/"
            className={(e) => {
              e.isActive ? "text-gray-300" : "text-black";
            }}
          >
            Service
          </NavLink>
        </li>
        <li className="text-gray-400 font-bold hover:text-orange-500">
          <NavLink
            to="/Login"
            className={(e) => {
              e.isActive ? "text-gray-300" : "text-black";
            }}
          >
            Login
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center mt-4 md:mt-0">
        <div className="bg-orange-500 p-4 rounded-full">
          {/* <SearchIcon className="h-8 w-8 text-white" /> */}
        </div>
        <Link
          to="/Cart"
          className="w-8 h-8 rounded-full bg-pink-200 ml-2"
        ></Link>
      </div>
    </nav>
  );
}

export default Navbar;
