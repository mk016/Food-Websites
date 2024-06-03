import React from 'react'

function Hero() {
  return (
    <div className="bg-orange-50 p-10 text-center ">
      <h1 className='font-bold text-4xl'>
        Quick and Tasty Food Delivered with a Dash of Speed
      </h1>
      <div>
        <button className='rounded-full bg-orange-500 px-4 py-2 text-white mr-2'>Order Now</button>
        <button className='border border-orange-500 rounded-full px-4 py-2 text-orange-500'>Track Order</button>
        <img src="food-image.png" alt="Food" className="mx-auto mt-6 w-64" />
      </div>
    </div>
  )
}

export default Hero;
