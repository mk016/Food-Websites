import React from 'react';
import FoodImage from '../img/Food.png';

function Hero() {
  return (
    <div className="min- flex flex-col md:flex-row" style={{ backgroundColor: '#FFEFE6' }}>
      <div className="w-full md:w-1/2 flex mt-9 ml-4 justify-center p-4">
        {/* Left side content */}
        <div>
          <h1 className="text-4xl font-bold mb-2"><a className='text-orange-500'>Quick</a> and<a className='text-orange-500'> Testy</a></h1>
          <h1 className="text-4xl font-bold mb-2"><a className='text-orange-500'>Food Delivered</a> with<a className='text-orange-500'> a</a></h1>
          <h1 className="text-4xl font-bold mb-4"><a className='text-orange-500'>Dash of</a> Speed</h1>
         
        </div>
        <div>
          <button className='block w-full py-4 px-10 border border-2xl rounded-3xl border-orange-500 text-white bg-orange-500'>
            Order Now
          </button>
          <button className='block w-full mt-4 py-4 px-10 border-2  rounded-3xl border-orange-500 text-orange-500'>
            Track Order
          </button>
        </div>
      </div>
      
      <div className='w-full md:w-1/2 mt-4 ml-6'>
        <div className=' items-center w-80 h-80 bg-cover bg-center' style={{ backgroundImage: `url(${FoodImage})` }}>
          {/* Smaller image container */}
        </div>

      </div>
    </div>
  );
}

export default Hero;
