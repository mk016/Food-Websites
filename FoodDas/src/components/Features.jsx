import React from "react";
import fastDeliveryIcon from '../img/fast-delivery.png';
import boxIcon from '../img/boxIcon.png';
import freshIcon from '../img/freshIcon.png';

function Features() {
  return (
    <div className='flex justify-center items-center py-full'>
      <div className='flex justify-around bg-white rounded-xl shadow-lg mx-w-5xl w-full'>
        <div className='flex items-center space-x-6 mx-6'>
        <img src={fastDeliveryIcon} alt="Fast Delivery" className="w-16 h-16" />
          <div className="text-left">
            <h1 className="text-xl font-bold mb-1 sm:text-sm ">Fast Delivery</h1>
            <p className="text-gray-500">Promise To Deliver</p>
            <p className="text-gray-500">Within 30 Mins</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 mx-2">
          <img src={freshIcon} alt="Fresh Food" className="w-16 h-16" />
          <div className="text-left">
            <h1 className="text-xl font-bold mb-1 sm:text-sm">Fresh Food</h1>
            <p className="text-gray-500">Your Food Will Be Delivered</p>
            <p className="text-gray-500">100% Fresh To Your Home.</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 mx-2">
          <img src={boxIcon} alt="Free Delivery" className="w-16 h-16" />
          <div className="text-left">
            <h1 className="text-xl font-bold mb-1 sm:text-sm">Free Delivery</h1>
            <p className="text-gray-500">Your Food Delivery Is</p>
            <p className="text-gray-500">Absolutely Free. No Cost Just Order</p>
            <p className="text-gray-500"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
