import React from 'react';

// Importing images
 import vegetablePulao from '../img/biryani.png';
import paneerBhunaMasala from '../img/panner.png';
 import vermicelliUpma from '../img/food2.png';
 import indianDessert from '../img/Dessert.png';
 import indiaPoha from '../img/poha.png';
 import indiasamosha from '../img/samosha.png';
 import gujaratiPavBhaji from '../img/pavbhaji.png';
 import rajasthanDalBati from '../img/DAL-BAATI-CHURMA.png';
 import Dosha from '../img/dosha.png'
 import Coupan1 from '../img/Coupan1.png'
 import Coupan2 from '../img/Coupan2.png'
 import Coupan3 from '../img/Coupan3.png'
import { Link } from 'react-router-dom';

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

        {/* the second menu start */}

          <div className='flex justify-between items-center mb-8'>
          <h2 className="text-3xl w-1/2  font-bold text-center mb-7 ml-4 text-start ">Our <a className='text-orange-500'>Regular</a> Menu</h2>
            <Link to='/Menu' className=' text-white bg-orange-500 border rounded-full py-2 px-4 text-end '>See All</Link>
          </div>
        <div className="flex justify-center flex-wrap">
          <div className="text-center m-4  p-4 rounded-lg w-64 relative" style={{ backgroundColor: '#FFEFE6' }}>
            <img src={indianDessert} alt="Indian Dessert Angoori Rasmalai" className="w-40 h-40 mx-auto mb-2 rounded-full " />
            <h3 className="text-lg font-bold">Indian Dessert Angoori Rasmalai</h3>
            <div className=" justify-center items-center">
            <div className="flex items-center justify-center mt-2 mb-4">
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
              <span className="text-lg font-bold">₹250</span>
              <button className="ml-4 py-2 px-4 text-white bg-orange-500 rounded-full">Buy Now</button>
            </div>
          </div>
          <div className="text-center m-4 p-4 rounded-lg w-64 relative"style={{ backgroundColor: '#FFEFE6' }}>
            <img src={indiaPoha}  alt="Indian Tea Time Snacks" className="w-40 h-40 mx-auto mb-2 rounded-full " />
            <h3 className="text-lg font-bold">Indian Tea Time Snacks</h3>
            <div className=" justify-center items-center">
            <div className="flex items-center justify-center mt-2 mb-4">
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
              <span className="text-lg font-bold  ">₹250</span>
              <button className="ml-4 py-2 px-4 text-white bg-orange-500 rounded-full">Buy Now</button>
            </div>
          </div>
          <div className="text-center m-4 p-4 rounded-lg w-64 relative" style={{ backgroundColor: '#FFEFE6' }}>
            <img src={indiasamosha} alt="South Indian Masala Dosa" className="w-40 h-40 mx-auto mb-2 rounded-full " />
            <h3 className="text-lg font-bold"> Indian Morning Snacks</h3>
            <div className=" justify-center items-center">
            <div className="flex items-center justify-center mt-2 mb-4">
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
              <span className="text-lg font-bold">₹150</span>
              <button className="ml-4 py-2 px-4 text-white bg-orange-500 rounded-full">Buy Now</button>
            </div>
          </div>
          <div className="text-center m-4 p-4 rounded-lg w-64 relative" style={{ backgroundColor: '#FFEFE6' }}>
            <img src={gujaratiPavBhaji} alt="Gujarati Pav Bhaji" className="w-40 h-40 mx-auto mb-2 rounded-full " />
            <h3 className="text-lg font-bold">Gujarati Pav Bhaji</h3>
            <div className=" justify-center items-center">
            <div className="flex items-center justify-center mt-2 mb-4">
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
              <span className="text-lg font-bold">₹250</span>
              <button className="ml-4 py-2 px-4 text-white bg-orange-500 rounded-full">Buy Now</button>
            </div>
          </div>
          <div className="text-center m-4 p-4 rounded-lg w-64 relative" style={{ backgroundColor: '#FFEFE6' }}>
            <img src={rajasthanDalBati} alt="Rajasthan Dal Bati Churma" className="w-40 h-40 mx-auto mb-2 rounded-full " />
            <h3 className="text-lg font-bold">Rajasthan Dal Bati Churma</h3>
            <div className=" justify-center items-center">
            <div className="flex items-center justify-center mt-2 mb-4">
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
              <span className="text-lg font-bold">₹450</span>
              <button className="ml-4 py-2 px-4 text-white bg-orange-500 rounded-full">Buy Now</button>
            </div>
         
          </div>
          <div className="text-center m-4 p-4 rounded-lg w-64 relative" style={{ backgroundColor: '#FFEFE6' }}>
              <img src={Dosha} className='w-40 h-40 mx-auto mb-2 rounded-full'/>
              <h3 className='text-lg font-bold'>South indian masala Dosa</h3>
              <div className=' justify-center items-center'>
              <div className="flex items-center justify-center mt-2 mb-4">
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
                <span className='text-lg font-bold'>₹450</span>
                <button className='ml-4 py-2 px-4 text-white bg-orange-500 rounded-full'>Buy Now</button>
              </div>
            </div>
            
        </div>
       <div className='w-full f-full grid sm:grid-cols-2 gap-4 mt-5'>
        <div className='flex-1 flex flex-col'>
          <img src={Coupan1} alt='Coupan1' className='w-full mb-3' />
        </div>
        <div className=' grid sm:grid-rows-2 gap-6'>
          <img src={Coupan2} alt='Coupan2'className='h-34 ' />
          <img src={Coupan3} alt='Coupan3'className=' h-53'  />
        </div>
       </div>

      </div>
    </div>
  );
}

export default Menu;
