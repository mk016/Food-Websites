import React from 'react';

// Importing images
 import vegetablePulao from '../img/biryani.png';
import paneerBhunaMasala from '../img/panner.png';
 import vermicelliUpma from '../img/food2.png';
 import indianDessert from '../img/Dessert.png';
// import indianTeaSnacks from '../img/indian-tea-snacks.png';
// import southIndianMasalaDosa from '../img/south-indian-masala-dosa.png';
// import gujaratiPavBhaji from '../img/gujarati-pav-bhaji.png';
// import rajasthanDalBati from '../img/rajasthan-dal-bati.png';

function Menu() {
  return (
    <div className="py-8 bg-white-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold ">Our <a className='text-orange-500'>Best Delivered</a></h2>
        <h2 className='text-3xl font-bold '> Indian Dish</h2>
        <p className='text-gray-300 text-end'>It’s Not Just About Bringing You Good Food</p>
        <p className='text-gray-300 text-end'> From Restaurants, We Deliver You Experience</p>
        <div className="flex justify-around flex-wrap">
          {/* Repeat this block for each dish */}
          <div className="text-center m-4">
            <img src={vegetablePulao} alt="Indian Vegetable Pulao" className="w-60 h-60 mx-auto mb-2 rounded-full " />
            <h3 className="text-lg font-bold">Indian Vegetable Pulao</h3>
            <button className="mt-2 text-orange-500 font-bold">Order Now </button>
          </div>
          <div className="text-center m-4">
            <img src={paneerBhunaMasala} alt="Paneer Bhuna Masala" className="w-60 h-60 mx-auto mb-2 rounded-full " />
            <h3 className="text-lg font-bold">Paneer Bhuna Masala</h3>
            <button className="mt-2 text-orange-500 font-bold">Order Now </button>
          </div>
          <div className="text-center m-4">
            <img src={vermicelliUpma} alt="Vermicelli Upma" className="w-60 h-60 mx-auto mb-2 rounded-full " />
            <h3 className="text-lg font-bold">Vermicelli Upma</h3>
            <button className="mt-2 text-orange-500 font-bold">Order Now  </button>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">Our Regular Menu</h2>
        <div className="flex justify-around flex-wrap">
          <div className="text-center m-4 bg-white p-4 rounded-lg shadow-lg">
            <img src={indianDessert} alt="Indian Dessert Angoori Rasmalai" className="w-40 h-40 mx-auto mb-2 rounded-full " />
            <h3 className="text-lg font-bold">Indian Dessert Angoori Rasmalai</h3>
            <div className="flex justify-center items-center">
              <span className="text-lg font-bold">₹250</span>
              <button className="ml-4 py-2 px-4 text-white bg-orange-500 rounded-full">Buy Now</button>
            </div>
          </div>
          <div className="text-center m-4 bg-white p-4 rounded-lg shadow-lg">
            <img  alt="Indian Tea Time Snacks" className="w-40 h-40 mx-auto mb-2 rounded-full " />
            <h3 className="text-lg font-bold">Indian Tea Time Snacks</h3>
            <div className="flex justify-center items-center">
              <span className="text-lg font-bold">₹250</span>
              <button className="ml-4 py-2 px-4 text-white bg-orange-500 rounded-full">Buy Now</button>
            </div>
          </div>
          <div className="text-center m-4 bg-white p-4 rounded-lg shadow-lg">
            <img  alt="South Indian Masala Dosa" className="w-40 h-40 mx-auto mb-2 rounded-full " />
            <h3 className="text-lg font-bold">South Indian Masala Dosa</h3>
            <div className="flex justify-center items-center">
              <span className="text-lg font-bold">₹150</span>
              <button className="ml-4 py-2 px-4 text-white bg-orange-500 rounded-full">Buy Now</button>
            </div>
          </div>
          <div className="text-center m-4 bg-white p-4 rounded-lg shadow-lg">
            <img alt="Gujarati Pav Bhaji" className="w-40 h-40 mx-auto mb-2 rounded-full " />
            <h3 className="text-lg font-bold">Gujarati Pav Bhaji</h3>
            <div className="flex justify-center items-center">
              <span className="text-lg font-bold">₹250</span>
              <button className="ml-4 py-2 px-4 text-white bg-orange-500 rounded-full">Buy Now</button>
            </div>
          </div>
          <div className="text-center m-4 bg-white p-4 rounded-lg shadow-lg">
            <img  alt="Rajasthan Dal Bati Churma" className="w-40 h-40 mx-auto mb-2 rounded-full " />
            <h3 className="text-lg font-bold">Rajasthan Dal Bati Churma</h3>
            <div className="flex justify-center items-center">
              <span className="text-lg font-bold">₹450</span>
              <button className="ml-4 py-2 px-4 text-white bg-orange-500 rounded-full">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
