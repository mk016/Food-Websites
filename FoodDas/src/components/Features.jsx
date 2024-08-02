import React from "react";
import fastDeliveryIcon from '../img/fast-delivery.png';
import boxIcon from '../img/boxIcon.png';
import freshIcon from '../img/freshIcon.png';

function Features() {
  return (
    <div className="flex justify-center items-center py-2 overflow-x-auto">
      <div className="flex justify-around bg-white rounded-xl shadow-lg max-w-5xl w-full min-w-[300px] gap-4 sm:min-w-full">
        <div className="flex items-center space-x-6 m-4">
          <img src={fastDeliveryIcon} alt="Fast Delivery" className="w-16 h-16" />
          <div className="text-left">
            <h1 className="text-xl font-bold mb-1">Fast Delivery</h1>
            <p className="text-gray-500 hidden sm:block">Promise To Deliver</p>
            <p className="text-gray-500 hidden sm:block">Within 30 Mins</p>
          </div>
        </div>
        <div className="flex items-center space-x-6 m-4">
          <img src={freshIcon} alt="Fresh Food" className="w-16 h-16" />
          <div className="text-left">
            <h1 className="text-xl font-bold mb-1">Fresh Food</h1>
            <p className="text-gray-500 hidden sm:block">Your Food Will Be Delivered</p>
            <p className="text-gray-500 hidden sm:block">100% Fresh To Your Home.</p>
          </div>
        </div>
        <div className="flex items-center space-x-6 m-4">
          <img src={boxIcon} alt="Free Delivery" className="w-16 h-16" />
          <div className="text-left">
            <h1 className="text-xl font-bold mb-1">Free Delivery</h1>
            <p className="text-gray-500 hidden sm:block">Your Food Delivery Is</p>
            <p className="text-gray-500 hidden sm:block">Absolutely Free. No Cost Just Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
