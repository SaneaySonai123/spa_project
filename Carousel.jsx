import React, { useEffect, useState } from 'react';
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import HomeBanner1 from '../Assets/Header-1.webp';
import HomeBanner2 from '../Assets/Header-2.webp';
import HomeBanner3 from '../Assets/Header-3.webp';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    const images = [HomeBanner1, HomeBanner2, HomeBanner3];

    return (
        <React.Fragment>
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in-out transform"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
                        </div>
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 focus:outline-none text-white animate-pulse">
                    <RiArrowLeftDoubleFill size={48} />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none text-white animate-pulse">
                    <RiArrowRightDoubleFill size={48} />
                </button>
            </div>
        </React.Fragment>
    )
}

export default Carousel