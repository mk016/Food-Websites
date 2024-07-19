import React from 'react';
import dosha from '../img/dosha.png'

const Card = () => {
  return (
    <div className="bg-pink-100 p-4 rounded-lg w-64 relative">
      <div className="absolute -top-16 right-4 w-32 h-32 rounded-full border-4 border-dashed border-orange-400 overflow-hidden">
        <img 
          src="./img/dosha.png" 
          alt="Masala Dosa" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-20 text-center">
        <h2 className="text-orange-500 text-lg font-bold">South Indian</h2>
        <p className="text-gray-700">Masala Dosa</p>
        <div className="flex items-center justify-center mt-2">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((star, index) => (
              <svg 
                key={index} 
                className="w-5 h-5 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.431 8.207 1.193-5.931 5.774 1.401 8.175L12 18.897l-7.345 3.863 1.401-8.175-5.931-5.774 8.207-1.193z"/>
              </svg>
            ))}
          </div>
          <span className="ml-2 text-gray-600">(120)</span>
        </div>
        <div className="mt-4">
          <p className="text-gray-800 text-xl font-bold">₹150</p>
        </div>
        <button className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-full">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
