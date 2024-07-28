import React from "react";
import { NavLink, Link } from "react-router-dom";
import Cart from "./Cart";
import logoImage from "../img/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Login from "./login";
import Menu from "./menu";

function Navbar() {
  return (
    <nav
      className="bg-ornage-100 p-4 flex flex-wrap justify-between items-center"
      style={{ backgroundColor: "#FFEFE6" }}
    >
      <div className="flex items-center">
      <Link to="/Home">
              <img
                src={logoImage}
                alt="Food Dash Logo"
                className="mx-auto w-24 md:w-40"
              />{" "}
            </Link>
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
      <div className="bg-orange-500 h-8 w-8 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faSearch} className="h-3 w-3 text-white" />
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
