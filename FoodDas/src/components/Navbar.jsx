import React from "react";

function Navbar() {
  return (
    <>
      <nav className="bg-orange-100 p-4 flex justify-between items-center">
        <div>
          <h1 className=" font-bold text-2xl text-orange-600 ml-6">Baby Food</h1>
        </div>
        <ul className="flex : space-x-5">
          <li className="hover:font-bold">Home</li>
          <li className="hover:font-bold">Menu</li>
          <li className="hover:font-bold">Service</li>
          <li className="hover:font-bold">About Us</li>
        </ul>
        <div className="flex items-center space-x-2">
            <input type="text" placeholder="" className="p-1 border rounded"/>
            <img src="profile-icon.png" alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
