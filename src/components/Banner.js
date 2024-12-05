import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';


const banners = [
  { id: 1, image: '/images/banners/banner1.jpg', title: 'Banner 1' },
  { id: 2, image: '/images/banners/banner2.jpg', title: 'Banner 2' },
  { id: 3, image: '/images/banners/banner3.jpg', title: 'Banner 3' },
  { id: 4, image: '/images/banners/banner4.jpg', title: 'Banner 4' },
];

const Banner = ( {darkTheme} ) => {
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
    <div className="relative w-full h-[450px] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
            index === activeBanner ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between p-4">
        <button
          onClick={handlePrev}
          className={`text-2xl p-2 rounded-full ${darkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
        >
          <AiOutlineLeft className={`text-3xl ${darkTheme ? "text-gray-300" : "text-gray-700"}`}/>
        </button>
        <button
          onClick={handleNext}
          className={`text-2xl p-2 rounded-full ${darkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
        >
          <AiOutlineRight className={`text-3xl ${darkTheme ? "text-gray-300" : "text-gray-700"}`}/>
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center p-4">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`w-2 h-2 mx-2 rounded-full ${
              index === activeBanner ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;