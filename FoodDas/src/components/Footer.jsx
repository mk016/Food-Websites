import React from 'react'

function Footer() {
  return (
 
      <footer className=' text-orange-900 py-8'style={{ backgroundColor: '#FFEFE6' }}>
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between '>
        <div className='mb-8 md:mb-0 flex flex-col space-y-4'>
            <h1 className='text-2xl text-ornage-300 font-bold'>FOOD DASH</h1>
            <p className='mt-2'>Food Dash @2024 All Rights Reserved </p>
            <p> By : Mahendra kumawat</p>
            <h1 className='font-bold text-2xl text-orange-500'>Follow Us On</h1>
            <div className='flex space-x-4 mt-2'>
            <a href="#" className="hover:text-orange-00"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-orange-700"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-orange-700"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-orange-700"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-orange-700"><i className="fab fa-dribbble"></i></a>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:space-x-12 '>
            <div className='mb-8 md:mb-0 '>
                <h1 className='font-bold  text-2xl text-orange-500'>Menu</h1>
                <ul className='flex flex-col space-y-4'>
                    <li><a href='#' className='hover:text-orange-700'>Home</a></li>
                    <li><a href='#' className='hover:text-orange-700'>Offers</a></li>
                    <li><a href='#' className='hover:text-orange-700'>Service</a></li>
                    <li><a href='#' className='hover:text-orange-700'>About Us</a></li>
                </ul>
            </div>
            <div className='mb-8 md:mb-0 '>
              <h2 className='font-bold text-2xl text-orange-500'>Informaton</h2>
              <ul className='flex flex-col space-y-4'>
                <li><a href="#" className='hover:text-orange-700 font-'>Menu</a></li>
                <li><a href="#" className='hover:text-orange-700 font-'>Quality</a></li>
                <li><a href="#" className='hover:text-orange-700'>Make A Choie</a></li>
                <li><a href="#" className='hover:text-orange-700'>Fast Delivery</a></li>
              </ul>
            </div>
            <div>
            <h2 className="font-bold text-2xl text-orange-500">Contact</h2>
            <ul className="flex flex-col space-y-4">
              <li><a href="#" className="hover:text-orange-700">+123456789</a></li>
              <li><a href="#" className="hover:text-orange-700">Explore</a></li>
              <li><a href="mailto:info@fooddash.com" className="hover:text-orange-700">info@fooddash.com</a></li>
              <li><a href="#" className="hover:text-orange-700">12, Maharashtra, India</a></li>
            </ul>
          </div>
        </div>
      </div>
      </footer>
  
  )
}

export default Footer
