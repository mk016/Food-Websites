import React from 'react';
import FoodImage from '../img/Food.png';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row md:mb-4 " style={{ backgroundColor: '#FFEFE6' }}>
      <div className="w-full md:w-1/2 mt-9 md:mt-0 md:ml-4 flex flex-col justify-center p-4">
        {/* Left side content */}
        <div className='ml-4 sm:ml-9'>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className='text-orange-500 font-lexend'>Quick</span> and <span className='text-orange-500'>Tasty</span>
          </h1>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className='text-orange-500'>Food Delivered</span> with <span className='text-orange-500'>a</span>
          </h1>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className='text-orange-500'>Dash of</span> Speed
          </h1>
        </div>
        <div className='mt-4 ml-4 sm:ml-9 flex flex-col sm:flex-row gap-4'>
          <button className='py-2 px-9 border-2 rounded-3xl border-orange-500 text-white bg-orange-500'>
            Order Now
          </button>
          <button className='py-2 px-8 border-2 rounded-3xl border-orange-500 text-orange-500'>
            Track Order
          </button>
        </div>
      </div>
      
      <div className='w-full md:w-1/2 mt-4 md:mt-0 mb-8 flex items-center justify-center'>
        <div className='w-60 sm:w-80 h-60 sm:h-80 bg-cover bg-center' style={{ backgroundImage: `url(${FoodImage})` }}>
          {/* Image container */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
