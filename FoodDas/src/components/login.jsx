import React from 'react'
import backgroundImage from '../img/Rectangle.png';

function login() {
  return (
    <div className='min-h-screen flex'>
      <div className='w-full md:w-1/2 bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
        { }
      </div>
      <div className='w-full md:w-1/2 flex items-center justify-center p-8'>
        <div className='max-w-md w-full space-y-8'>
            <h2 className='font-bold text-3xl text-orange-500'>Food Dash</h2>
            <p className='font-bold text-4xl mt-2 text-gray-600'>Login to your account!</p>
        </div>
        <button className='w-full flex justify-center py-4 border border-gray-300 rounded-md shadow-sm tex-sm font-medium text-gray-700 bg-white hover:bg-gray-50'><i>Login with Google</i></button>
        <button className="w-full flex justify-center py-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"><i>Login with Facebook</i></button>
        </div>
    </div>
  )
}

export default login