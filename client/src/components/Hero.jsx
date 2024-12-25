import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const settings = {
        dots: true, // Enable navigation dots
        infinite: true, // Continuous sliding
        speed: 1000, // Transition speed
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable auto-sliding
        autoplaySpeed: 3000, // Slide duration (3 seconds)
        pauseOnHover: false, // Ensure continuous sliding
        arrows: false, // Remove arrows for a cleaner look
        dotsClass: "slick-dots custom-dots", // Custom styling for dots
    };

    return (
        <div className="w-full bg-white py-16"> {/* Removed full height and added padding */}
            <Slider {...settings} className="h-auto">
                {/* Slide 1 */}
                <div className="flex items-center justify-center px-6 py-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Master Bioinformatics
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700">
                            Learn bioinformatics concepts step by step, from basics to advanced.
                        </p>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className="flex items-center justify-center px-6 py-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Code for Bioinformatics
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700">
                            Explore bioinformatics programming tailored for beginners to pros.
                        </p>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="flex items-center justify-center px-6 py-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Guided Projects
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700">
                            Work on real-world bioinformatics projects to gain practical experience.
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Hero;
