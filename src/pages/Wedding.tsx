import React from 'react';
import { IoArrowBack } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
const WeddingPage = () => {
  return (

<div className='w-11/12 md:w-5/6 mx-auto mb-32'>
<div className="container mx-auto px-4 py-8 ">
<div className="flex items-center space-x-4 py-6  mt-12 bg-white ">

  <IoArrowBack  onClick={() => window.history.back()} className="text-gray-700 hover:text-gray-900 transition duration-300 text-4xl"/>
   
  <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 tracking-wide" >
    Wedding
  </h1>
</div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
           
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden object-cover rounded-2xl shadow-lg group">
                <img src="/w1.jpg"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      
                       
                    </div>
                </div>
            </div>

         
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/w5.jpg" alt="Food" className="w-full h-48 object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/w3.jpg" alt="Technology" className="w-full h-48 object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                     
                    </div>
                </div>
            </div>

           
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/w4.jpg" alt="Travel" className="w-full h-48 object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                       
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/w2.jpg" alt="Art" className="w-full h-48 object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
               
                    </div>
                </div>
            </div>
</div></div>

<div className="relative flex flex-col md:flex-row items-center mt-10 mb-10 md:items-stretch bg-white border-2 border-gray-400 rounded-lg shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
  {/* Left Section */}
  <div className="md:w-1/4 p-6 flex items-center justify-center bg-gradient-to-br from-gray-300 to-white">
    <div className="text-center">
      <span className="flex items-center gap-1 px-4 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r from-gray-700 to-gray-500 justify-center shadow-md">
        Premium
      </span>
      <h3 className="text-2xl font-semibold text-gray-900 mt-2 transition-transform duration-500 hover:scale-105">
        Haldi, Mehndi &amp; Wedding
      </h3>
      <p className="mt-2 text-gray-600">Starting price</p>
      <div className="mt-4">
        <span className="text-4xl font-bold text-gray-700">₹140,000</span><p className="mt-2 text-gray-600">(Travel & food expense excluded)</p>
      </div>
    </div>
  </div>

  {/* Middle Section */}
  <div className="md:w-1/2 p-6 border-t md:border-t-0 md:border-l border-gray-200">
    <ul className="mt-2 space-y-3">
      {[
        "Traditional Photos Traditional Videography",
        "Cinematic video",
        "Candid photos",
        "Haldi & Mehendi",
        "E- Invitation",
        "2 Instagram Reels",
        "16x24 Photo Frame",
        "25 sheets Album (12x36)",
        "Cinematic Highlights & Teaser",
      ].map((feature, index) => (
        <li key={index} className="flex items-center gap-2 transition-all duration-300 hover:text-gray-800">
          <svg
            className="shrink-0 h-5 w-5 text-green-600 transition-transform duration-300 hover:scale-110"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Right Section */}
  <div className="flex flex-col my-auto items-center space-y-4 p-6 border-t md:border-t-0 md:border-l border-gray-200 w-full md:w-1/4">
    {/* WhatsApp Chat Button */}
    <button 
      onClick={() => window.open("https://wa.me/9555826615", "_blank")}
      className="flex items-center justify-center w-full px-6 py-3 font-medium text-white transition-transform rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 transform duration-300 hover:scale-105 shadow-lg"
    >
      <FaWhatsapp className="w-5 h-5 mr-2" />
      Chat Us
    </button>

    {/* Call Now Button */}
    <button 
      onClick={() => window.location.href = "tel:9555826615"}
      className="flex items-center justify-center w-full px-6 py-3 font-medium text-white transition-colors rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-900 hover:to-gray-800 transform duration-300 hover:scale-105 shadow-lg"
    >
      <IoMdCall className="w-5 h-5 mr-2" />
      Call Now
    </button>
  </div>
</div>


        {/* Gold Section */}
        <div className="relative flex flex-col md:flex-row items-center mt-10 mb-10 md:items-stretch bg-white border-2 border-yellow-400 rounded-lg shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
          <div className="md:w-1/4 p-6 flex items-center justify-center bg-gradient-to-br from-yellow-100 via-yellow-50 to-white">
            <div className="text-center">
              <span className="flex items-center gap-1 px-4 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r from-yellow-600 to-orange-600 justify-center shadow-md">
                Gold
              </span>
              <h3 className="text-2xl font-semibold text-gray-900 mt-2 transition-transform duration-500 hover:scale-105">
                Haldi, Mehndi &amp; Wedding
              </h3>
              <p className="mt-2 text-gray-600">Starting price</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-yellow-600">₹80,000</span>
                <p className="mt-2 text-gray-600">(Travel & food expense excluded)</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-6 border-t md:border-t-0 md:border-l border-gray-200">
            <ul className="mt-2 space-y-3">
              {[
                "Traditional Photos Traditional Videos",
                "Candid photos",
                "Haldi & Mehendi",
                "E- Invitation",
                "16x24 Photo Frame",
                "25 sheets Album (12x36)",
                "1- Traditional Highlight",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2 transition-all duration-300 hover:text-yellow-600">
                  <svg
                    className="shrink-0 h-5 w-5 text-green-600 transition-all duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col my-auto items-center space-y-4 p-6 border-t md:border-t-0 md:border-l border-gray-200 w-full md:w-1/4">
            <button 
              onClick={() => window.open("https://wa.me/9555826615", "_blank")}
              className="flex items-center justify-center w-full px-6 py-3 font-medium text-white transition-transform rounded-lg bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transform transition-transform duration-300 hover:scale-105 shadow-lg"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Chat Us
            </button>

            <button 
              onClick={() => window.location.href = "tel:9555826615"}
              className="flex items-center justify-center w-full px-6 py-3 font-medium text-white transition-colors rounded-lg bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 transform transition-transform duration-300 hover:scale-105 shadow-lg"
            >
              <IoMdCall className="w-5 h-5 mr-2" />
              Call Now
            </button>
          </div>
        </div>

        {/* Silver Section */}
        <div className="relative flex flex-col md:flex-row items-center mt-10 mb-10 md:items-stretch bg-white border-2 border-gray-400 rounded-lg shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
          <div className="md:w-1/4 p-6 flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-white">
            <div className="text-center">
              <span className="flex items-center gap-1 px-4 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r from-gray-500 to-[#c4aead] justify-center shadow-md">
                Silver
              </span>
              <h3 className="text-2xl font-semibold text-gray-900 mt-2 transition-transform duration-500 hover:scale-105">
                Haldi, Mehndi &amp; Wedding
              </h3>
              <p className="mt-2 text-gray-600">Starting price</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-600">₹55,000</span>
              </div>
              <p className="mt-2 text-gray-600">(Travel & food expense excluded)</p>
            </div>
          </div>

          <div className="md:w-1/2 p-6 border-t md:border-t-0 md:border-l border-gray-200">
            <ul className="mt-2 space-y-3">
              {[
                "Traditional Photos Traditional Videos",
                "E- Invitation",
                "25 sheets Album (12x36)",
                "1- Traditional Highlight",
                "Full Event Video of All Events",
                "Couple Photo Frame",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2 transition-all duration-300 hover:text-gray-600">
                  <svg
                    className="shrink-0 h-5 w-5 text-green-600 transition-all duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col my-auto items-center space-y-4 p-6 border-t md:border-t-0 md:border-l border-gray-200 w-full md:w-1/4">
            <button 
              onClick={() => window.open("https://wa.me/9555826615", "_blank")}
              className="flex items-center justify-center w-full px-6 py-3 font-medium text-white transition-transform rounded-lg bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transform transition-transform duration-300 hover:scale-105 shadow-lg"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Chat Us
            </button>

            <button 
              onClick={() => window.location.href = "tel:9555826615"}
              className="flex items-center justify-center w-full px-6 py-3 font-medium text-white transition-colors rounded-lg bg-gradient-to-r from-gray-600 to-blue-600 hover:from-gray-700 hover:to-blue-700 transform transition-transform duration-300 hover:scale-105 shadow-lg"
            >
              <IoMdCall className="w-5 h-5 mr-2" />
              Call Now
            </button>
          </div>
        </div>
</div>
  );
};

export default WeddingPage;