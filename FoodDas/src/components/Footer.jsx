import React from 'react'

function Footer() {
  return (
 
      <footer>
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between'>
        <div className='mb=8 md:mb-0'>
            <h1 className='text-2xl font-bold'>FOOD DASH</h1>
            <p className='mt-2'>Food Dash @2024 All Rights Reserved </p>
            <h1 className='mt-2'>Follow Us on</h1>
            <div>
            <a href="#" className="hover:text-orange-700"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-orange-700"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-orange-700"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-orange-700"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-orange-700"><i className="fab fa-dribbble"></i></a>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:space-x-12'>
            <div className='mb-8 md:mb-0'>
                <h1 className='font-bold text-orange-500'>Menu</h1>
                <ul>
                    <li><a href='#' className='hover:text-orange-700'>Home</a></li>
                    <li><a href='#' className='hover:text-orange-700'>Offers</a></li>
                    <li><a href='#' className='hover:text-orange-700'>Service</a></li>
                    <li><a href='#' className='hover:text-orange-700'>About Us</a></li>
                </ul>
            </div>
            <div>
              <h2>Informaton</h2>
              <ul>
                <li><a href="#" className='hover:text-orange-700'>Menu</a></li>
                <li><a href="#" className='hover:text-orange-700'>Quality</a></li>
                <li><a href="#" className='hover:text-orange-700'>Make A Choie</a></li>
                <li><a href="#" className='hover:text-orange-700'>Fast Delivery</a></li>
              </ul>
            </div>
        </div>
      </div>
      </footer>
  
  )
}

export default Footer
