'use client';
import React from 'react';

const Ad: React.FC = () => {
  return (
    <div className="w-10/12 bg-gray-900 overflow-hidden relative mx-auto rounded-xl shadow-2xl">
      <div className="text-start w-full md:w-2/3 lg:w-1/2 py-8 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-red-900">
          <span className="block transition-transform duration-500 transform hover:scale-105 hover:text-red-700">
            Looking to grow your startup?
          </span>
          <span className="block text-white transition-transform duration-500 transform hover:scale-105 hover:cursor-pointer hover:text-gray-300">
            Sweepsage is here to amplify your brand.
          </span>
        </h2>
        <p className="text-lg sm:text-xl mt-4 text-gray-400 transition-colors duration-500 hover:text-gray-200">
          We create custom promotion strategies to boost your brand, reach more people, and turn your ideas into a successful business. Let Sweepsage be your partner in growth!
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-8 sm:mt-10 lg:mt-12 inline-flex rounded-md shadow">
            <button
              onClick={() => window.open("https://wa.me/9555826615", "_blank")}
              type="button"
              className="py-3 px-5 sm:py-4 sm:px-6 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg transform hover:scale-105"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      {/* Image visible from medium screens onward */}
      <img
        src="rb_234.png"
        alt="Decorative object"
        className="hidden md:block md:mt-12 absolute top-0 right-0 h-auto md:w-1/3 lg:w-1/2 transition-transform duration-500 transform hover:scale-105"
      />
    </div>
  );
};

export default Ad;
