import React from 'react';

const Contact = () => {
  return (
    <section className="w-10/12 mx-auto mt-10">
      <div className="py-12 bg-gray-900 rounded-xl">
        <div className="max-w-7xl mx-auto  md:px-6 lg:px-8">
          <div className="lg:text-center mt-5">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 transition-transform duration-500 transform hover:scale-105 text-white hover:text-blue-500 hover:cursor-pointer">
      <span className="text-red-900">CONTACT</span>&nbsp;US ?
      </h2>
          </div>

          <section className="text-center pb-16 px-6">
    <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400 transition-transform duration-500 transform hover:scale-110">
        Get In Touch
    </h2>
    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto transition-colors duration-300 hover:text-gray-100">
        We are here to help you. Reach out to us via any of the following methods.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {/* Call Us */}
        <div className="p-6 rounded-xl bg-gray-900 bg-opacity-70 backdrop-blur-md shadow-lg hover:shadow-blue-500 transition-all duration-500 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white transition-colors duration-300 hover:text-blue-400">
                Call Us
            </h3>
            <p className="text-lg text-gray-300 mt-2 transition-colors duration-300 hover:text-red-400">
                +91 9555826615
            </p>
        </div>

        {/* Email Us */}
        <div className="p-6 rounded-xl bg-gray-900 bg-opacity-70 backdrop-blur-md shadow-lg hover:shadow-red-500 transition-all duration-500 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white transition-colors duration-300 hover:text-blue-400">
                Email Us
            </h3>
            <p className="text-lg text-gray-300 mt-2 transition-colors duration-300 hover:text-red-400">
                dubeyutkarsh461@gmail.com
            </p>
        </div>

        {/* Visit Us */}
        <div className="p-6 rounded-xl bg-gray-900 bg-opacity-70 backdrop-blur-md shadow-lg hover:shadow-yellow-500 transition-all duration-500 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white transition-colors duration-300 hover:text-blue-400">
                Visit Us
            </h3>
            <p className="text-lg text-gray-300 mt-2 transition-colors duration-300 hover:text-red-400">
                N-52, Delta-3, Greater Noida, UP
            </p>
        </div>
    </div>
</section>

        </div></div>
        </section>
      
  );
};

export default Contact;
