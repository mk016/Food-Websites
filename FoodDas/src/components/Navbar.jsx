import React from "react";
import logoImage from '../img/logo1.png';

function Navbar() {
  return (
    <nav className="bg-ornage-100 p-4 flex flex-wrap justify-between items-center" style={{ backgroundColor: '#FFEFE6' }}>
      <div className="flex items-center">
        <img src={logoImage} alt="logo" className="w-24 md:w-40" />
      </div>
      <ul className="flex flex-wrap gap-5 mt-4 md:mt-0">
        <li className="font-bold hover:text-orange-500">Home</li>
        <li className="font-bold hover:text-orange-500">Menu</li>
        <li className="font-bold hover:text-orange-500">Service</li>
        <li className="font-bold hover:text-orange-500">About Us</li>
      </ul>
      <div className="flex items-center mt-4 md:mt-0">
        
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

