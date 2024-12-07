import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { darkThemeColors, lightThemeColors } from './theme';

const banners = [
  { id: 1, image: '/images/banners/banner1.jpg', title: 'Banner 1' },
  { id: 2, image: '/images/banners/banner2.jpg', title: 'Banner 2' },
  { id: 3, image: '/images/banners/banner3.jpg', title: 'Banner 3' },
  { id: 4, image: '/images/banners/banner4.jpg', title: 'Banner 4' },
];

const Banner = ({ darkTheme }) => {
  const currentTheme = darkTheme ? darkThemeColors : lightThemeColors;
  const [activeBanner, setActiveBanner] = useState(0);

  const handleNext = () => {
    setActiveBanner((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setActiveBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 6000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-screen md:h-96 overflow-hidden rounded-2xl my-5">
      {/* Banners */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute  top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === activeBanner ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between px-4">
        <button
          onClick={handlePrev}
          className={`text-2xl p-2 rounded-full bg-opacity-50 bg-white transition-colors ${currentTheme.input.text} hover:${currentTheme.textHover}`}
        >
          <AiOutlineLeft className="text-3xl" />
        </button>
        <button
          onClick={handleNext}
          className={`text-2xl p-2 rounded-full bg-opacity-50 bg-white transition-colors ${currentTheme.input.text} hover:${currentTheme.textHover}`}
        >
          <AiOutlineRight className="text-3xl" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center space-x-2">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeBanner
                ? `${currentTheme.backgroundSecondary} border-2 border-white`
                : `${currentTheme.textSecondary} bg-opacity-50 bg-gray-500`
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
