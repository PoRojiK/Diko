import { useState } from 'react';

const tabs = [
  {
    id: 'tab1',
    title: 'Категории',
    href: '#',
    subcategories: [
      {
        title: 'Унисекс',
        href: '#',
        items: [
          { title: 'Куртки', href: '#' },
          { title: 'Бомберы', href: '#' },
          { title: 'Бомберы', href: '#' },
          { title: 'Бомберы', href: '#' },
          { title: 'Бомберы', href: '#' },
        ],
      },
      {
        title: 'Женское',
        href: '#',
        items: [
          { title: 'Штаны', href: '#' },
          { title: 'Боди', href: '#' },
        ],
      },
      {
        title: 'Мужское',
        href: '#',
        items: [
          { title: 'Худи', href: '#' },
          { title: 'Брюки', href: '#' },
        ],
      },
    ],
  },
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative" onMouseLeave={() => setIsOpen(false)}>
      <button
        className="w-full bg-gray-100 py-2 px-4 text-left text-gray-700 hover:bg-gray-200 flex justify-center"
        onMouseOver={() => setIsOpen(true)}
      >
        {tabs[0].title}
      </button>
      {isOpen && (
        <div className="bg-white shadow-md px-[25%] z-20 flex w-full absolute" >
          {tabs[0].subcategories.map((subcategory) => (
            <div key={subcategory.title} className="py-2 px-4 border-b border-gray-200">
              <a
                href={subcategory.href}
                className="text-gray-700 hover:text-gray-900"
              >
                {subcategory.title}
              </a>
              <hr className="my-2 border-gray-200" />
              <ul>
                {subcategory.items.map((item) => (
                  <li key={item.title} className="py-1">
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;