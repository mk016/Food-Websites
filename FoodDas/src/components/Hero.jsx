import React from 'react';
import FoodImage from '../img/Food.png';


function Hero() {
  return (
    <div className="min- flex flex-col md:flex-row" style={{ backgroundColor: '#FFEFE6' }}>
      <div className="w-full md:w-1/2 mt-9 ml-4 flex flex-col justify-center p-4">
        {/* Left side content */}
        <div className='ml-9'>
          <h1 className="text-4xl font-bold mb-2">
            <a className='text-orange-500 font-lexend '>Quick</a> and <a className='text-orange-500'>Tasty</a>
          </h1>
          <h1 className="text-4xl font-bold mb-2">
            <a className='text-orange-500'>Food Delivered</a> with <a className='text-orange-500'>a</a>
          </h1>
          <h1 className="text-4xl font-bold mb-4">
            <a className='text-orange-500'>Dash of</a> Speed
          </h1>
        </div>
        <div className='mt-4 ml-9'>
          <button className='block  py-2 px-9 border-2 rounded-3xl border-orange-500 text-white bg-orange-500 mb-4'>
            Order Now
          </button>
          <button className='block  py-2 px-8 border-2 rounded-3xl border-orange-500 text-orange-500'>
            Track Order
          </button>
        </div>
      </div>
      
      <div className='w-full md:w-1/2 mt-4 ml-6 flex items-center justify-center'>
        <div className='w-80 h-80 bg-cover bg-center mb-20' style={{ backgroundImage: `url(${FoodImage})` }}>
          {/* Smaller image container */}
        </div>
      </div>
      
    </div>
    
  );
}

export default Hero;
