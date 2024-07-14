import React from 'react';

const Logi = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
        {/* Image on the left */}
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-orange-700">Food Dash.</h2>
            <p className="mt-2 text-gray-600">Login to your account!</p>
          </div>
          <div>
            <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <i className="fab fa-google mr-2"></i>
              Login with Google
            </button>
            <button className="mt-4 w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <i className="fab fa-facebook mr-2"></i>
              Login with Facebook
            </button>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" name="email" id="email" autoComplete="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Youraddress@email.com" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" name="password" id="password" autoComplete="current-password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Enter your password" />
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Login to Continue</button>
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

export default Ln;
