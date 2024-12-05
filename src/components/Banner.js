import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const banners = [
  { id: 1, image: 'https://via.placeholder.com/1200x400', title: 'Banner 1' },
  { id: 2, image: 'https://via.placeholder.com/1200x400', title: 'Banner 2' },
  { id: 3, image: 'https://via.placeholder.com/1200x400', title: 'Banner 3' },
];

const Banner = () => {
  const [activeBanner, setActiveBanner] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleNext = () => {
    setActiveBanner((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setActiveBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
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
          className={`text-2xl p-2 rounded-full ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
        >
          <AiOutlineLeft />
        </button>
        <button
          onClick={handleNext}
          className={`text-2xl p-2 rounded-full ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;