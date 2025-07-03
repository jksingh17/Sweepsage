import React from 'react';

const Reviews: React.FC = () => {
  return (
    <section className="w-10/12 mx-auto mt-10">
    <div className="py-12 bg-gray-900 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 transition-transform duration-500 transform hover:scale-105 text-white hover:cursor-pointer">
      <span className="text-red-900">CLIENT</span>&nbsp; REVIEWS 
      </h2>
      
            
          </div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 relative">
          <div className="bg-gray-800 rounded-lg p-8 text-center md:w-1/3">
            <p className="font-bold uppercase text-white text-2xl mb-2">Keshav Chaudhary</p>
            <p className="text-xl font-light italic text-gray-300">
            Sweepsage really helped us level up our marketing! Their ideas and attention to detail made our campaign a success. Totally recommend them!
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    className="text-yellow-500 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 text-center md:w-1/3">
            <p className="font-bold uppercase text-white text-2xl mb-2">Jayendra Singh</p>
            <p className="text-xl font-light italic text-gray-300">
            Working with Sweepsage was a total game-changer for us. The video they made was fantastic, and they really got our vision. We saw results right away!
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    className="text-yellow-500 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 text-center md:w-1/3">
            <p className="font-bold uppercase text-white text-2xl mb-2">Kushagra Shukla</p>
            <p className="text-xl font-light italic text-gray-300">
            I had a great experience with Sweepsage! They walked us through the whole process and delivered an awesome final product that we loved.
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    className="text-yellow-500 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Reviews;
