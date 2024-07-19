import React from 'react'

function Cart() {
  return (
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className='flex  md md:w-1/2'>

     
      <div className='bg-yellow-400 h-44 w-full rounded-xl'>page1</div>
      <div className='bg-red-400 h-40 w-full rounded-xl'>
        <div className='h-33 w-22 shadow rounded-xl'>
          USER 
        </div>
      </div>
      </div>
      <div className='flex md:w-1/2'>
        <div className='flex justify-center items-center h-6 md:h-full w-70 rounded-xl shadow bg-orange-500'>
          <h1 className='font-bold text-lg'>Card Details</h1>
        </div>
      </div>
    </div>
  )
}

export default Cart
