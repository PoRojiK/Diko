import React from "react";

const categories = [
  { id: 1, title: "Men's Clothing", image: "https://via.placeholder.com/300", span: 1 },
  { id: 2, title: "Women's Clothing", image: "https://via.placeholder.com/600x300", span: 2 },
  { id: 3, title: "Kids' Clothing", image: "https://via.placeholder.com/300", span: 1 },
  { id: 4, title: "Shoes", image: "https://via.placeholder.com/600x300", span: 2 },
  { id: 5, title: "Accessories", image: "https://via.placeholder.com/300", span: 2 },
];

const CategoryCards = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Категории</h1>
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`relative ${
              category.span === 2 ? "col-span-2" : "col-span-1"
            } h-40 sm:h-60 md:h-80 bg-gray-100 overflow-hidden rounded-lg shadow-md`}
          >
            <img
              src={category.image}
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-lg md:text-2xl font-bold">{category.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
