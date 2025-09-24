import React from 'react';
import { useRouter } from 'next/navigation';

const Service = () => {
  const router = useRouter();

  const handleServiceClick = (serviceName: string) => {
    localStorage.setItem('selectedService', serviceName);
    if(serviceName === 'Wedding') router.push('/Wedding');
    if(serviceName === 'pre') router.push('/pre');
    if(serviceName === 'dest') router.push('/dest');
    if(serviceName === 'Form') router.push('/Form');

  };

  const services = [
    {
      id: 1,
      image: "/wedding.jpg",
      alt: "Wedding",
      title: "Wedding",
      description: "Capture the magic of your special day with cinematic storytelling, preserving every emotion and moment beautifully.",
      serviceName: "Wedding",
      imageStyle: {}
    },
    {
      id: 2,
      image: "/wed.jpg",
      alt: "Pre-Wedding",
      title: "Pre-Wedding",
      description: "A romantic visual journey showcasing your love story before the big day, set against stunning backdrops.",
      serviceName: "pre",
      imageStyle: { height: '230px' }
    },
    {
      id: 3,
      image: "/pre-wedding.jpg",
      alt: "Destination Wedding",
      title: "Destination Wedding",
      description: "Immortalize your dream wedding in breathtaking locations with a cinematic touch that reflects the essence of your love.",
      serviceName: "dest",
      imageStyle: {}
    },
    {
      id: 4,
      image: "/add.jpg",
      alt: "Commercial Shoot",
      title: "Commercial Shoot",
      description: "Elevate your brand with high-quality promotional videos that engage your audience and enhance your business presence.",
      serviceName: "Form",
      imageStyle: { height: '230px' }
    },
    {
      id: 5,
      image: "/bday.jpg",
      alt: "Birthday Celebration",
      title: "Birthday Celebration Videography",
      description: "Relive the joy of your special day with beautifully captured moments, from heartfelt wishes to fun-filled celebrations.",
      serviceName: "Form",
      imageStyle: { height: '230px' }
    },
    {
      id: 6,
      image: "/web.jpg",
      alt: "Web & App Development",
      title: "Web & App Development",
      description: "Build dynamic websites and apps that blend creativity with functionality, helping your business thrive in the digital space.",
      serviceName: "Form",
      imageStyle: { height: '230px' }
    }
  ];

  return (
    <div className="container mx-auto p-6 w-11/12">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 transition-transform duration-500 transform hover:scale-105 text-gray-700 hover:cursor-pointer">
        <span className="text-red-900">OUR</span>&nbsp;SERVICES
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="rounded-lg overflow-hidden shadow-lg flex flex-col transform transition duration-300 hover:scale-105" 
            onClick={() => handleServiceClick(service.serviceName)}
          >
            <div className="relative">
              <a href={`/${service.serviceName}`}>
                <img
                  src={service.image}
                  alt={service.alt}
                  width={500}
                  height={300}
                  className="w-full rounded-t-lg"
                  style={service.imageStyle}
                />
                <div className="absolute inset-0 bg-gray-900 opacity-30 hover:opacity-10 transition duration-300"></div>
              </a>
            </div>
            <div className="px-6 py-5 mb-auto bg-white">
              <a href={`/${service.serviceName}`} className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition duration-500 ease-in-out">
                {service.title}
              </a>
              <p className="text-gray-600 text-md mt-2 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
            <div onClick={() => handleServiceClick(service.serviceName)} className="px-6 py-4 flex flex-row items-center justify-end bg-gray-100">
              <p className="text-md font-medium text-gray-700 hover:cursor-pointer bg-gray-200 px-4 py-2 rounded-full inline-flex items-center transition duration-300 hover:bg-red-700 hover:text-white shadow-md">
                Price Detail <span className="ml-1">➜</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;