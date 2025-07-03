

import React from 'react';
import { useRouter } from 'next/navigation';

const Service = () => {
  const router = useRouter();

  const handleServiceClick = (serviceName: string) => {
    // Save the service name to localStorage or any other state management solution
    localStorage.setItem('selectedService', serviceName);
    // Navigate to the Form page
    if(serviceName=='Wedding') router.push('/Wedding');
    if(serviceName=='pre') router.push('/pre');
    if(serviceName=='dest') router.push('/dest');

  };

  return (
    <div className="container mx-auto p-6 w-11/12">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 transition-transform duration-500 transform hover:scale-105 text-gray-700 hover:cursor-pointer">
        <span className="text-red-900">OUR</span>&nbsp;SERVICES
      </h2>
      
     
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      
      {/* CARD 1 */}
      <div className="rounded-lg overflow-hidden shadow-lg flex flex-col transform transition duration-300 hover:scale-105" onClick={() => handleServiceClick('Wedding')}>
  <div className="relative">
    <a href="">
      <img
        src="/wedding.jpg"
        alt="Wedding"
        width={500}
        height={300}
        className="w-full rounded-t-lg"
      />
      <div className="absolute inset-0 bg-gray-900 opacity-30 hover:opacity-10 transition duration-300"></div>
    </a>
  </div>
  <div className="px-6 py-5 mb-auto bg-white">
    <a href="" className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition duration-500 ease-in-out">
      Wedding
    </a>
    <p className="text-gray-600 text-md mt-2 leading-relaxed font-light">
      Capture the magic of your special day with, cinematic storytelling, preserving every emotion and moment beautifully.
    </p>
  </div>
  <div className="px-6 py-4 flex flex-row items-center justify-end bg-gray-100">
    <p className="text-md font-medium text-gray-700 hover:cursor-pointer bg-gray-200 px-4 py-2 rounded-full inline-flex items-center transition duration-300 hover:bg-red-700 hover:text-white shadow-md">
      Price Detail <span className="ml-1">➜</span>
    </p>
  </div>
</div>


      {/* CARD 2 */}
      <div className="rounded-lg overflow-hidden shadow-lg flex flex-col transform transition duration-300 hover:scale-105" onClick={() => handleServiceClick('pre')}>
  <div className="relative">
    <a href="">
      <img
        src="/wed.jpg"
        alt="Wedding"
        width={500}
        height={180}
        className="w-full rounded-t-lg" style={{height:'230px'}}
      />
      <div className="absolute inset-0 bg-gray-900 opacity-30 hover:opacity-10 transition duration-300"></div>
    </a>
  </div>
  <div className="px-6 py-5 mb-auto bg-white">
    <a href="" className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition duration-500 ease-in-out">
    Pre-Wedding
    </a>
    <p className="text-gray-600 text-md mt-2 leading-relaxed font-light">
    A romantic visual journey showcasing your love story before the big day, set against stunning backdrops.
    </p>
  </div>
  <div className="px-6 py-4 flex flex-row items-center justify-end bg-gray-100">
    <p className="text-md font-medium text-gray-700 hover:cursor-pointer bg-gray-200 px-4 py-2 rounded-full inline-flex items-center transition duration-300 hover:bg-red-700 hover:text-white shadow-md">
      Price Detail <span className="ml-1">➜</span>
    </p>
  </div>
</div>

      {/* CARD 3 */}
      <div className="rounded-lg overflow-hidden shadow-lg flex flex-col transform transition duration-300 hover:scale-105" onClick={() => handleServiceClick('dest')}>
  <div className="relative">
    <a href="">
      <img
        src="/pre-wedding.jpg"
        alt="Wedding"
        width={500}
        height={300}
        className="w-full rounded-t-lg"
      />
      <div className="absolute inset-0 bg-gray-900 opacity-30 hover:opacity-10 transition duration-300"></div>
    </a>
  </div>
  <div className="px-6 py-5 mb-auto bg-white">
    <a href="" className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition duration-500 ease-in-out">
    Destination Wedding
    </a>
    <p className="text-gray-600 text-md mt-2 leading-relaxed font-light">
    Immortalize your dream wedding in breathtaking locations with a cinematic touch that reflects the essence of your love.
    </p>
  </div>
  <div className="px-6 py-4 flex flex-row items-center justify-end bg-gray-100">
    <p className="text-md font-medium text-gray-700 hover:cursor-pointer bg-gray-200 px-4 py-2 rounded-full inline-flex items-center transition duration-300 hover:bg-red-700 hover:text-white shadow-md">
      Price Detail <span className="ml-1">➜</span>
    </p>
  </div>
</div>


<div className="rounded-lg overflow-hidden shadow-lg flex flex-col transform transition duration-300 hover:scale-105" onClick={() => handleServiceClick('pre')}>
  <div className="relative">
    <a href="">
      <img
        src="/add.jpg"
        alt="Wedding"
        width={500}
        height={180}
        className="w-full rounded-t-lg" style={{height:'230px'}}
      />
      <div className="absolute inset-0 bg-gray-900 opacity-30 hover:opacity-10 transition duration-300"></div>
    </a>
  </div>
  <div className="px-6 py-5 mb-auto bg-white">
    <a href="" className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition duration-500 ease-in-out">
    Commercial Shoot 
    </a>
    <p className="text-gray-600 text-md mt-2 leading-relaxed font-light">
    Elevate your brand with high-quality promotional videos that engage your audience and enhance your business presence.
    </p>
  </div>
  <div className="px-6 py-4 flex flex-row items-center justify-end bg-gray-100">
    <p className="text-md font-medium text-gray-700 hover:cursor-pointer bg-gray-200 px-4 py-2 rounded-full inline-flex items-center transition duration-300 hover:bg-red-700 hover:text-white shadow-md">
      Price Detail <span className="ml-1">➜</span>
    </p>
  </div>
</div>
<div className="rounded-lg overflow-hidden shadow-lg flex flex-col transform transition duration-300 hover:scale-105" onClick={() => handleServiceClick('pre')}>
  <div className="relative">
    <a href="">
      <img
        src="/bday.jpg"
        alt="Wedding"
        width={500}
        height={180}
        className="w-full rounded-t-lg" style={{height:'230px'}}
      />
      <div className="absolute inset-0 bg-gray-900 opacity-30 hover:opacity-10 transition duration-300"></div>
    </a>
  </div>
  <div className="px-6 py-5 mb-auto bg-white">
    <a href="" className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition duration-500 ease-in-out">
    Birthday Celebration Videography 
    </a>
    <p className="text-gray-600 text-md mt-2 leading-relaxed font-light">
    Relive the joy of your special day with beautifully captured moments, from heartfelt wishes to fun-filled celebrations.
    </p>
  </div>
  <div className="px-6 py-4 flex flex-row items-center justify-end bg-gray-100">
    <p className="text-md font-medium text-gray-700 hover:cursor-pointer bg-gray-200 px-4 py-2 rounded-full inline-flex items-center transition duration-300 hover:bg-red-700 hover:text-white shadow-md">
      Price Detail <span className="ml-1">➜</span>
    </p>
  </div>
</div>
<div className="rounded-lg overflow-hidden shadow-lg flex flex-col transform transition duration-300 hover:scale-105" onClick={() => handleServiceClick('pre')}>
  <div className="relative">
    <a href="">
      <img
        src="/web.jpg"
        alt="Wedding"
        width={500}
        height={180}
        className="w-full rounded-t-lg" style={{height:'230px'}}
      />
      <div className="absolute inset-0 bg-gray-900 opacity-30 hover:opacity-10 transition duration-300"></div>
    </a>
  </div>
  <div className="px-6 py-5 mb-auto bg-white">
    <a href="" className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition duration-500 ease-in-out">
    Web & App Development
    </a>
    <p className="text-gray-600 text-md mt-2 leading-relaxed font-light">
    Build dynamic websites and apps that blend creativity with functionality, helping your business thrive in the digital space.
    </p>
  </div>
  <div className="px-6 py-4 flex flex-row items-center justify-end bg-gray-100">
    <p className="text-md font-medium text-gray-700 hover:cursor-pointer bg-gray-200 px-4 py-2 rounded-full inline-flex items-center transition duration-300 hover:bg-red-700 hover:text-white shadow-md">
      Price Detail <span className="ml-1">➜</span>
    </p>
  </div>
</div>

      
    </div>

    </div>
  );
};

export default Service;
