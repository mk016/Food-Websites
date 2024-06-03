import React from 'react';

function Features() {
  return (
    <div className='border rounded-full'>
    <div className="flex justify-around bg-white p-6">
      <div className="text-center">
        <img src="fast-delivery.png" alt="Fast Delivery" className="mx-auto" />
        <p className="font-bold">Fast Delivery</p>
        <p>Promise to deliver within 30 mins</p>
      </div>
      <div className="text-center">
        <img src="fresh-food.png" alt="Fresh Food" className="mx-auto" />
        <p className="font-bold">Fresh Food</p>
        <p>Your food will be delivered 100% fresh to your home</p>
      </div>
      <div className="text-center">
        <img src="free-delivery.png" alt="Free Delivery" className="mx-auto" />
        <p className="font-bold">Free Delivery</p>
        <p>Your food delivery is absolutely free. No cost just order</p>
      </div>
    </div>
    </div>
  );
}

export default Features;
