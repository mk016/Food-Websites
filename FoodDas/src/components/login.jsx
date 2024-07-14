import React from 'react';
import backgroundImage from '../img/Rectangle.png';
import logoImage from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Image on the left */}
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="flex justify-center">
            <img src={logoImage} alt="Food Dash Logo" className="h-16 w-16" />
          </div>
          <div>
            <h2 className="font-bold text-3xl text-orange-500">Food Dash</h2>
            <p className="font-bold text-4xl mt-2 text-gray-600">Login to your account!</p>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <FontAwesomeIcon icon={faGoogle} className="mr-2 text-red-500" />
              Login with Google
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <FontAwesomeIcon icon={faFacebook} className="mr-2 text-blue-500" />
              Login with Facebook
            </button>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" name="email" id="email" autoComplete="email" required className="mt-1 block w-full px-3 py-2 border-0 border-b-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Youraddress@email.com" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" name="password" id="password" autoComplete="current-password" required className="mt-1 block w-full px-3 py-2 border-0 border-b-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Enter your password" />
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-5 px-4 border border-transparent rounded-3xl text-xl shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Login to Continue</button>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">Don't have an account? <a href="#" className="font-medium text-orange-600 hover:text-orange-500">Sign up</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
