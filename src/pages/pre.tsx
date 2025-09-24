import React from 'react';
import { IoArrowBack } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
const PreWeddingPage = () => {
    const packages = [
    {
      tier: "Premium",
      title: "Pre-Wedding Shoot",
      price: "₹50,000",
      borderColor: "border-yellow-400",
      gradientFrom: "from-yellow-100",
      gradientVia: "via-yellow-50",
      gradientTo: "to-white",
      badgeGradient: "from-yellow-600 to-orange-600",
      priceColor: "text-yellow-600",
      buttonGradient: "from-yellow-600 to-orange-600",
      features: [
        "8 Hours of Shoot Duration",
        "2 Premium Locations",
        "100+ High-Resolution Edited Photos",
        "5 Min Cinematic Video",
        "2 Instagram Reels/Trending Edits",
        "1 Photo Album (20 pages)",
        "Drone Shots Included",
        "Couple Makeup & Styling Assistance",
        "All Raw Photos & Videos",
        "Online Gallery Access"
      ]
    },
    {
      tier: "Gold",
      title: "Pre-Wedding Shoot",
      price: "₹40,000",
      borderColor: "border-amber-400",
      gradientFrom: "from-amber-100",
      gradientVia: "via-amber-50",
      gradientTo: "to-white",
      badgeGradient: "from-amber-600 to-orange-500",
      priceColor: "text-amber-600",
      buttonGradient: "from-amber-600 to-orange-500",
      features: [
        "6 Hours of Shoot Duration",
        "1 Premium Location",
        "60+ High-Resolution Edited Photos",
        "3 Min Cinematic Video",
        "1 Instagram Reel",
        "Digital Photo Album",
        "Selected Drone Shots",
        "Basic Makeup Assistance",
        "Selected Raw Photos",
        "Online Gallery Access"
      ]
    },
    {
      tier: "Silver",
      title: "Pre-Wedding Shoot",
      price: "₹30,000",
      borderColor: "border-gray-400",
      gradientFrom: "from-gray-100",
      gradientVia: "via-gray-50",
      gradientTo: "to-white",
      badgeGradient: "from-gray-500 to-gray-400",
      priceColor: "text-gray-600",
      buttonGradient: "from-gray-600 to-blue-600",
      features: [
        "4 Hours of Shoot Duration",
        "1 Location",
        "40+ High-Resolution Edited Photos",
        "2 Min Highlight Video",
        "Social Media Edits",
        "Digital Copies Only",
        "Basic Photography",
        "Natural Look Styling",
        "10 Best Selected Raw Photos",
        "WhatsApp Delivery"
      ]
    }
  ];
  return (

<div className='w-11/12 md:w-5/6 mx-auto mb-32'>
<div className="container mx-auto px-4 py-8 ">
<div className="flex items-center space-x-4 py-6  mt-12 bg-white ">

  <IoArrowBack  onClick={() => window.history.back()} className="text-gray-700 hover:text-gray-900 transition duration-300 text-4xl"/>
   
  <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 tracking-wide" >
    Pre-Wedding
  </h1>
  </div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
           
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden object-cover rounded-2xl shadow-lg group">
                <img src="/pre3.jpg"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      
                       
                    </div>
                </div>
            </div>

         
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/pre5.jpg" alt="Food" className="w-full h-48 object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/pre3.jpg" alt="Technology" className="w-full h-48 object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                     
                    </div>
                </div>
            </div>

           
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/pre4.jpg" alt="Travel" className="w-full h-48 object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                       
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/pre2.jpg" alt="Art" className="w-full h-48 object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
               
                    </div>
                </div>
            </div>
</div></div>


    <div className="space-y-8">
      {packages.map((pkg, index) => (
        <div 
          key={index}
          className={`relative flex flex-col md:flex-row items-center mt-10 mb-10 md:items-stretch bg-white border-2 ${pkg.borderColor} rounded-lg shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105`}
        >
          {/* Left Section */}
          <div className={`md:w-1/4 p-6 flex items-center justify-center bg-gradient-to-br ${pkg.gradientFrom} ${pkg.gradientVia} ${pkg.gradientTo}`}>
            <div className="text-center">
              <span className={`flex items-center gap-1 px-4 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r ${pkg.badgeGradient} justify-center shadow-md`}>
                {pkg.tier}
              </span>
              <h3 className="text-2xl font-semibold text-gray-900 mt-2 transition-transform duration-500 hover:scale-105">
                {pkg.title}
              </h3>
              <p className="mt-2 text-gray-600">Starting price</p>
              <div className="mt-4">
                <span className={`text-4xl font-bold ${pkg.priceColor}`}>{pkg.price}</span>
                <p className="mt-2 text-gray-600">(Travel & food expense excluded)</p>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="md:w-1/2 p-6 border-t md:border-t-0 md:border-l border-gray-200">
            <ul className="mt-2 space-y-3">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 transition-all duration-300 hover:text-gray-800">
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
                  <span className="text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex flex-col my-auto items-center space-y-4 p-6 border-t md:border-t-0 md:border-l border-gray-200 w-full md:w-1/4">
            {/* WhatsApp Chat Button */}
            <button 
              onClick={() => window.open("https://wa.me/9555826615", "_blank")}
              className="flex items-center justify-center w-full px-6 py-3 font-medium text-white transition-transform rounded-lg bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transform duration-300 hover:scale-105 shadow-lg"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Chat Us
            </button>

            {/* Call Now Button */}
            <button 
              onClick={() => window.location.href = "tel:9555826615"}
              className={`flex items-center justify-center w-full px-6 py-3 font-medium text-white transition-colors rounded-lg bg-gradient-to-r ${pkg.buttonGradient} hover:scale-105 transform duration-300 shadow-lg`}
            >
              <IoMdCall className="w-5 h-5 mr-2" />
              Call Now
            </button>
          </div>
        </div>
      ))}
    </div>
        
    
    </div>

  );
};

export default PreWeddingPage;