import React from 'react';

const WhyUs = () => {
  return (
    <section className="w-10/12 mx-auto mt-10">
      <div className="py-12 bg-gray-900 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 transition-transform duration-500 transform hover:scale-105 text-white hover:cursor-pointer">
              <span className="text-red-900">WHY</span>&nbsp;US ?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-300 lg:mx-auto transition-colors duration-500 hover:text-gray-100">
              Capturing Moments, Creating Stories – Because Your Memories Deserve the Best!
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Card 1 */}
              <div className="relative group p-4 rounded-xl bg-gray-800 transition-all duration-500 hover:bg-gray-700">
                <dt className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-900 text-white transition-transform duration-500 group-hover:scale-110">
                      <img src="endtoend.png" alt="Powerful API" className="h-8 w-8" />
                    </div>
                  </div>
                  <p className="ml-4 text-lg leading-6 font-bold text-white transition-colors duration-500 group-hover:text-red-300">
                    Cinematic Storytelling with a Personal Touch
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400 transition-colors duration-500 group-hover:text-gray-200">
                  We don’t just record moments; we craft stories. Our approach to videography ensures that every wedding, pre-wedding shoot, or commercial project tells a unique and emotional narrative. We focus on capturing genuine expressions, raw emotions, and the essence of your special moments to make them truly unforgettable.
                </dd>
              </div>

              {/* Card 2 */}
              <div className="relative group p-4 rounded-xl bg-gray-800 transition-all duration-500 hover:bg-gray-700">
                <dt className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-900 text-white transition-transform duration-500 group-hover:scale-110">
                      <img src="enrichment.png" alt="Easy to integrate SDK" className="h-8 w-8" />
                    </div>
                  </div>
                  <p className="ml-4 text-lg leading-6 font-bold text-white transition-colors duration-500 group-hover:text-red-300">
                    Cutting-Edge Technology for Stunning Visuals
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400 transition-colors duration-500 group-hover:text-gray-200">
                  We use high-end cameras, drones, and advanced editing software to create visually stunning videos with crisp details and vibrant colors. From breathtaking aerial shots to seamless cinematic transitions, our technology ensures that your videos stand out with top-tier quality.
                </dd>
              </div>

              {/* Card 3 */}
              <div className="relative group p-4 rounded-xl bg-gray-800 transition-all duration-500 hover:bg-gray-700">
                <dt className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-900 text-white transition-transform duration-500 group-hover:scale-110">
                      <img src="digital-growth.png" alt="Low Transaction Cost" className="h-8 w-8" />
                    </div>
                  </div>
                  <p className="ml-4 text-lg leading-6 font-bold text-white transition-colors duration-500 group-hover:text-red-300">
                    Customized Solutions for Every Client
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400 transition-colors duration-500 group-hover:text-gray-200">
                  Whether it&apos;s a romantic pre-wedding shoot, a grand destination wedding, or a professional brand commercial, we tailor our services to match your vision. We take the time to understand your preferences and requirements, ensuring that the final video aligns perfectly with your expectations.
                </dd>
              </div>

              {/* Card 4 */}
              <div className="relative group p-4 rounded-xl bg-gray-800 transition-all duration-500 hover:bg-gray-700">
                <dt className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-900 text-white transition-transform duration-500 group-hover:scale-110">
                      <img src="on-time.png" alt="Powerful Dashboard" className="h-8 w-8" />
                    </div>
                  </div>
                  <p className="ml-4 text-lg leading-6 font-bold text-white transition-colors duration-500 group-hover:text-red-300">
                    Reliable &amp; Professional Service with On-Time Delivery
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400 transition-colors duration-500 group-hover:text-gray-200">
                  We value your time and understand the importance of deadlines. Our team is dedicated to delivering high-quality videos promptly without compromising on creativity and precision. With a structured workflow and professional commitment, we ensure a hassle-free experience from start to finish.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
