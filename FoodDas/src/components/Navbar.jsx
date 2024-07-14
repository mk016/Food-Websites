import React from "react";
import logoImage from '../img/logo.png';
function Navbar() {
  return (
    <>
      <nav className="orange-100 p-4 flex justify-between items-center" style={{ backgroundColor: '#FFEFE6' }}>
        <div>
        <img src={logoImage} alt="logo" className="mx-auto  md:w-40"></img>
        </div>
        <ul className="flex : space-x-5">
          <li className=" font-bold hover:text-orange-300">Home</li>
          <li className="font-bold hover:text-orange-300">Menu</li>
          <li className="font-bold hover:text-orange-300">Service</li>
          <li className="font-bold hover:text-orange-300">About Us</li>
        </ul>
        <div className="flex items-center space-x-2">
            <input type="text" placeholder="" className="p-1 "/>
            <img src="profile-icon.png" alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
