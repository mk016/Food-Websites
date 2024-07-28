import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../img/Rectangle.png";
import logoImage from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Home from '../components/Home'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div
        className="w-full md:w-1/2 h-48 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Image on the left */}
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="flex justify-center">
            <Link to="/Home">
              <img
                src={logoImage}
                alt="Food Dash Logo"
                className="mx-auto w-24 md:w-40"
              />{" "}
            </Link>
          </div>
          <div>
            <p className="font-bold text-2xl md:text-4xl mt-2 text-gray-600 text-center">
              Login to your account!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="flex items-center px-6 py-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 w-full sm:w-auto">
              <FontAwesomeIcon icon={faGoogle} className="mr-2 text-red-500" />
              Login with Google
            </button>
            <button className="flex items-center px-6 py-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 w-full sm:w-auto">
              <FontAwesomeIcon
                icon={faFacebook}
                className="mr-2 text-blue-500"
              />
              Login with Facebook
            </button>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border-0 border-b-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Youraddress@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full px-3 py-2 border-0 border-b-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-3xl text-lg shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Login to Continue
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-orange-600 hover:text-orange-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
