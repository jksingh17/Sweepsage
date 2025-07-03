import React from 'react';

const AboutUs = () => {
    return (
        <div className="w-10/12 sm:flex items-center max-w-screen-xl mx-auto bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            {/* Image Section */}
            <div className="sm:w-1/2 p-3">
                <div className="image object-center text-center">
                    <img 
                        src="https://i.imgur.com/WbQnbas.png" 
                        alt="About Us" 
                        className="rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
                    />
                </div>
            </div>

            {/* Text Section */}
            <div className="sm:w-1/2 p-8">
                <div className="text">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 transition-transform duration-500 transform hover:scale-110 text-white hover:cursor-pointer tracking-wide">
                        <span className="text-red-600 drop-shadow-lg">ABOUT</span>&nbsp; <span className="text-gray-200">SweepSage</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 font-light italic leading-relaxed text-justify">
                        At <span className="font-semibold text-red-400">SweepSage</span>, we believe every moment is a story waiting to be told. Specializing in 
                        <span className="text-red-300 font-medium"> wedding videography, pre-wedding shoots, destination weddings, commercial projects,</span> 
                        and <span className="text-red-300 font-medium">birthday celebration videography</span>, we capture your most precious memories with creativity and passion.
                    </p>

                    <br />

                    <p className="text-lg md:text-xl text-gray-300 font-light italic leading-relaxed text-justify">
                        With a team of skilled professionals and <span className="text-red-400 font-medium">cutting-edge technology</span>, we deliver high-quality videos that bring emotions to life. 
                        Whether it&apos;s a romantic love story, a grand celebration, or a compelling brand shoot, we craft <span className="text-red-300 font-medium">visually stunning</span> and 
                        <span className="text-red-300 font-medium"> emotionally engaging films</span> tailored to your vision.
                    </p>

                    <br />

                    <p className="text-lg md:text-xl text-gray-300 font-light italic leading-relaxed text-justify">
                        Our commitment to <span className="font-semibold text-red-400">quality, storytelling, and timely delivery</span> makes us the perfect choice for your videography needs. 
                        At <span className="text-red-400 font-medium">SweepSage</span>, we don’t just record videos—<span className="font-semibold text-red-300">we create timeless experiences.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
