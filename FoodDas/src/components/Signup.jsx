import React from 'react';
import backgroundImage from '../img/Rectangle.png';
import logoImage from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="flex justify-center">
            <img src={logoImage} alt="Food Dash Logo" className="mx-auto w-40" />
          </div>
          <div className="mt-9">
            <p className="font-bold text-3xl mt-2">Create Account</p>
          </div>
          <form>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" name="username" id="username" autoComplete="username" required className="mt-1 block w-full border-0 border-b-2 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 sm:text-sm" placeholder="Enter your username" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-8">Email Address</label>
              <input type="email" name="email" id="email" autoComplete="email" required className="mt-1 block w-full border-0 border-b-2 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 sm:text-sm" placeholder="Youraddress@email.com" />
            </div>
            <div>
              <label htmlFor="password" className="mt-8 block text-sm font-medium text-gray-700">Password</label>
              <input type="password" name="password" id="password" required className="mt-1 block w-full border-0 border-b-2 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 sm:text-sm" placeholder="Enter your password" />
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-3xl shadow-sm text-md font-medium text-white font-bold hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 mt-8 bg-orange-600">Signup to Continue</button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Already have an account? <Link to="/login" className="font-medium text-orange-600 hover:text-orange-500">Log in</Link></p>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              <button type="button" className="flex items-center px-6 py-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <FontAwesomeIcon icon={faGoogle} className="mr-2 text-red-500" />
                Login with Google
              </button>
              <button type="button" className="flex items-center px-6 py-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <FontAwesomeIcon icon={faFacebook} className="mr-2 text-blue-500" />
                Login with Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
