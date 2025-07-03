import React from 'react';
import { IoArrowBack } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
const DestWeddingPage = () => {
  return (

<div className='w-11/12 md:w-5/6 mx-auto mb-32'>
<div className="container mx-auto px-4 py-8 ">
<div className="flex items-center space-x-4 py-6 px-8 mt-12 bg-white ">

  <IoArrowBack  onClick={() => window.history.back()} className="text-gray-700 hover:text-gray-900 transition duration-300 text-4xl"/>
   
  <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 tracking-wide" >
   Destination Wedding
  </h1>
</div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
           
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Nature" className="w-full h-full object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-2xl font-bold text-white">Explore Nature</h3>
                        <p className="text-white">Discover the beauty of the natural world</p>
                    </div>
                </div>
            </div>

         
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Food" className="w-full h-48 object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-xl font-bold text-white">Culinary Delights</h4>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Technology" className="w-full h-48 object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-xl font-bold text-white">Tech Innovations</h4>
                    </div>
                </div>
            </div>

           
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0cmF2ZWx8ZW58MHwwfHx8MTcyMTA0MjY0MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Travel" className="w-full h-48 object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-xl font-bold text-white">Travel Adventures</h4>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MHwwfHx8MTcyMTA0MjY5Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Art" className="w-full h-48 object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-xl font-bold text-white">Artistic Expressions</h4>
                    </div>
                </div>
            </div>
</div></div>

    <div className="relative flex flex-col md:flex-row items-center  mt-10 mb-10 md:items-stretch bg-white border-2 border-orange-400 rounded-lg shadow-lg">
    <div className="md:w-1/4 p-6 flex items-center justify-center">
        <div className="text-center">
          
            <span className="flex items-center gap-1 px-4 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r from-orange-600 to-red-600 justify-center">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>           Ultra Visibility
            </span>
            <h3 className="text-2xl font-semibold text-gray-900 mt-2">Wedding</h3>
            <p className="mt-2 text-gray-600">Starting price</p>
            <div className="mt-4">
                <span className="text-4xl font-bold">₹140,000</span>
                
            </div>
        </div>
    </div>

    <div className="md:w-1/2 p-6 border-t md:border-t-0 md:border-l border-gray-200">
        <ul className="mt-2 space-y-3">
            <li className="flex items-center gap-2">
                <svg className="shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                </svg>
                <span>Traditional Photos Traditional Videos</span>
            </li>
            <li className="flex items-center gap-2">
                <svg className="shrink-0  h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                </svg>
                <span>Cinematic video </span>
            </li>
            <li className="flex items-center gap-2">
                <svg className="shrink-0  h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                </svg>
                <span>Candid photos</span>
            </li><li className="flex items-center gap-2">
                <svg className="shrink-0  h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                </svg>
                <span>Haldi & Mehendi </span>
            </li><li className="flex items-center gap-2">
                <svg className="shrink-0  h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                </svg>
                <span>E- Invitation </span>
            </li><li className="flex items-center gap-2">
                <svg className="shrink-0  h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                </svg>
                <span>2 Instagram Reels </span>
            </li><li className="flex items-center gap-2">
                <svg className="shrink-0  h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                </svg>
                <span>16x24 Photo Frame </span>
            </li><li className="flex items-center gap-2">
                <svg className="shrink-0  h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                </svg>
                <span>25 sheets Album (12x36) </span>
            </li><li className="flex items-center gap-2">
                <svg className="shrink-0  h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                </svg>
                <span>Cinematic Highlights & Teaser </span>
            </li>

             
        </ul>
    </div>

    <div className="flex flex-col my-auto items-center space-y-4 p-6 border-t md:border-t-0 md:border-l border-gray-200 w-full md:w-1/4">
  {/* WhatsApp Chat Button */}
  <button 
    data-listing-plan-name="ultimate" 
    onClick={() => window.open("https://wa.me/9555826615", "_blank")}
    className="flex items-center justify-center w-full px-6 py-3 font-medium text-center text-white transition-colors rounded-lg openModalButton bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800"
  >
    <FaWhatsapp className="w-5 h-5 mr-2" />
    Chat Us
  </button>

  {/* Call Now Button */}
  <button 
    data-listing-plan-name="ultimate" 
    onClick={() => window.location.href = "tel:9555826615"}
    className="flex items-center justify-center w-full px-6 py-3 font-medium text-center text-white transition-colors rounded-lg openModalButton bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
  >
    <IoMdCall className="w-5 h-5 mr-2" />
    Call Now
  </button>
</div>

</div></div>
  );
};

export default DestWeddingPage;