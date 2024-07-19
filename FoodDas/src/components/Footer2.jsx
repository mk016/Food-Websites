import React from 'react'
 import   logo1 from '../img/logo1.png'
function Footer2() {
  return (
    <div className=''style={{ backgroundColor: '#FFEFE6' }}>
      <div className='flex mx-9 justify-between'>
        <div className='ml-9 '>
        <img src={logo1} alt='Footer-logo' className='mb-7'/>
        <span className='text-gray-500 mt-4'>Food Dash ©2024 All Rights Reserved</span>
        </div>
        <div>
            <span className='text-gray-500 '> By- Mahendra Kumawat </span>
        </div>
      </div>
    </div>
  )
}

export default Footer2
