import React from 'react'
import backgroundImage from '../img/Rectangle.png'
import logoImage from '../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
function Signup() {
  return (
    <div className='min-h-screen flex'>
        <div  className='w-full md:w-1/2 bg-cover bg-center' style={{backgroundImage : `url(${backgroundImage})`}}></div>
        <div className='w-full md:w-1/2 flex itmes-center justify-center p-8'>
            <div className='max-w-md w-full space-y-8'>
                <div className='flex jusitfy-center'>
                    <img src={logoImage} alt="Food Dash Logo" className='mx-auto w-40'></img>

                </div>
                <div className='mt-9'>
                    <p className='font-bold  text-3xl mt-2'>Create Account</p>
                </div>
                <form>
                    <div>
                        <label htmlFor='username' className='block text-sm font-medium text-black-400'>Username</label>
                        <input type='text' name='username' id='username' autoComplete='' required  className='mt-3  block w-full border-0 border-b-2   placeholder-black-600 focus:outline-none hover:border-orange-500 sm-text-sm' placeholder='Enter your username'/>
                    </div>
                    <div>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700 mt-8'>Email Address</label>
                        <input type='email' name='eamil' id='email' autoComplete='email' required className='mt-3 block w-full border-0 border-b-2 placholder-black-400 focus:outline-none  hover:border-orange-500' placeholder='Youraddress@email.com'/>
                    </div>
                    <div>
                        <label htmlFor='Password' className='mt-8 block text-sm font-medium text-black-400'>Password</label>
                        <input type='password' name='password' id='password' className='mt-3 block w-full border-0 border-b-2 placeholder-300 focus:outline-none foucs:rind-ornage-500 hover:border-orange-500' placeholder='Enter your password'/>
                    </div>
                    <div>
                    <button type='sumit' className=' w-full flex justify-center py-5 px-3  border border-transparent rounded-3xl shadow-sm text-md font-medium text-white font-bold hover:bg-orange-700 foucs:outline-none-offset-2 focus:ring-orange-500  mt-8 bg-orange-600'>Signup to Continue</button>
                    </div>
                    <div className=' mt-4'>
                        <p className='text-sm text-gray-600'>Already have an account?<a className='font-medium text-orange-600 hover:text-orange-500'>Log in</a> </p>
                        
                    </div>
                    <div className="flex justify-center space-x-4 mt-9">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <FontAwesomeIcon icon={faGoogle} className="mr-2 text-red-500" />
              Login with Google
            </button>
            <button className="flex items-center px-6 py-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <FontAwesomeIcon icon={faFacebook} className="mr-2 text-blue-500" />
              Login with Facebook
            </button>
          </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup
