import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../img/logo1.png";
import Login from './login'
import Menu from './menu'

function Navbar() {
  return (
    <nav className="bg-ornage-100 p-4 flex flex-wrap justify-between items-center" style={{ backgroundColor: '#FFEFE6' }}>
      <div className="flex items-center">
        <img src={logoImage} alt="logo" className="w-24 md:w-40" />
      </div>
      <ul className="flex flex-wrap gap-5 mt-4 md:mt-0">
        <li>
          <NavLink to="/" className={(e)=>{e.isActive?"text-gray-300": "text-black"}}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Menu" className={(e)=>{e.isActive?"text-gray-300": "text-black"}}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/Offers" className={(e)=>{e.isActive?"text-gray-300": "text-black"}}>
            Offers
          </NavLink>
        </li>
        <li>
          <NavLink to="" className={(e)=>{e.isActive?"text-gray-300": "text-black"}}>
            Service
          </NavLink>
        </li>
        <li>
          <NavLink to="/Login" className={(e)=>{e.isActive?"text-gray-300": "text-black"}}>
           Login
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center mt-4 md:mt-0">
        <div className="bg-orange-500 p-4 rounded-full">
          {/* <SearchIcon className="h-8 w-8 text-white" /> */}
        </div>
        <img
          src="profile-icon.png"
          alt="Profile"
          className="w-8 h-8 rounded-full ml-2"
        />
      </div>
    </nav>
  );
}

export default Navbar;
