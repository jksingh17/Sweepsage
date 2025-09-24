'use client';
import React from 'react';

const Main: React.FC = () => {
  return (
    <main className="">
  {/* Hero Section */}
  <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden">
    <div className="absolute inset-0 bg-white opacity-50"></div>
    <div
      className={`absolute inset-0 bg-cover bg-center mt-20 md:mt-2 pt-20`}
      style={{
        backgroundImage: `url('bgt.png')`,
        filter: 'blur(0px)',
      }}
    ></div>

    <div className="container mx-auto md:pb-32 lg:py-32 xl:pt-52 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-center h-96 relative">
        {/* Animated "Promotion" Text */}
        <div
  className="text-6xl md:text-8xl font-bold text-transparent 
             bg-gradient-to-r from-[#7c749b] via-[#ae5959] to-[#480420] 
             bg-clip-text animate-showup 
             border-none"
  style={{
    WebkitTextStroke: '2px white', // Creates a 2px white border around the text
    WebkitTextFillColor: 'transparent', // Keeps the gradient intact
  }}
>
  
</div>

        {/* Animated "Made Easy" Text */}
        <div className="mt-5 ml-6">
          <span className="text-6xl font-semibold text-transparent bg-gradient-to-r from-[#7c1128] via-[rgb(197,77,77)] to-[#cb8585] bg-clip-text animate-slidein ">
            
          </span>
        </div>
      </div>
    </div>

    {/* Decorative SVG Element */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
          fill="white"
        />
      </svg>
    </div>
  </section>

  <style jsx>{`
    @keyframes showup {
      0% {
        opacity: 0;
      }
      20% {
        opacity: 1;
      }
      80% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    @keyframes slidein {
      0% {
        margin-left: 0px;
        opacity: 0;
      }
      40% {
        margin-left: 0px;
        opacity: 0;
      }
      50% {
        margin-left: 0px;
        opacity: 1;
      }
      100% {
        margin-left: 0px;
        opacity: 1;
      }
    }

    @keyframes blurEffect {
      0% {
        filter: blur(0px);
      }
      100% {
        filter: blur(10px);
      }
    }

    .animate-showup {
      animation: showup 5s ;
      animation-delay: 2s;
    }

    .animate-slidein {
      animation: slidein 5s ;
      animation-delay: 2s;
    }

    .transition-blur {
      animation: blurEffect 2s forwards;
      animation-delay: 2s;
    }
  `}</style>
</main>

  );
};

export default Main;
