import { useState } from 'react';

const NavigationPanel = () => {
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  return (

    
    <div className="bg-gray-100 w-full ">
<nav className="container mx-auto flex justify-center space-x-4 w-full relative">
  {tabs.map((tab) => (
    <div
      key={tab.id}
      className="relative"
      onMouseEnter={() => {
        setHoveredTab(tab.id);
        setIsDropdownOpen(true);
      }}
      onMouseLeave={() => {
        setHoveredTab(null);
        setIsDropdownOpen(false);
      }}
    >
      {/* Top navigation tab */}
      <a
        href={tab.href}
        className={`text-lg ${
          hoveredTab === tab.id ? 'text-gray-700 font-medium' : 'text-gray-600'
        }`}
      >
        {tab.title}
      </a>

      {/* Dropdown menu */}
      {isDropdownOpen && hoveredTab === tab.id && (
        <div className="absolute top-full -left-[47vw] w-[100vw] z-20">
          <div className="bg-white shadow-md p-6">
            {/* Content inside dropdown */}
            <div className="flex flex-row flex-wrap justify-start">
              {tab.subcategories.map((subcategory) => (
                <div
                  key={subcategory.title}
                  className="w-auto md:w-1/4 lg:w-1/5 xl:w-1/6 p-4"
                >
                  <h5 className="text-sm font-medium text-gray-700 mb-2 uppercase border-b-2 border-gray-300 pb-2">
                    {subcategory.title}
                  </h5>
                  <ul className="mt-2">
                    {subcategory.items.map((item) => (
                      <li key={item.title} className="py-1">
                        <a
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-gray-800"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  ))}
</nav>



    </div>
  );
};

export default NavigationPanel;