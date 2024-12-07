import { useState, useEffect } from 'react';

const tabs = [
  {
    id: 'tab0',
    title: 'SALE',
    href: '#',
  },
  {
    id: 'tab1',
    title: 'НОВИНКИ',
    href: '#',
  },
  {
    id: 'tab2',
    title: 'LIMITED EDITION',
    href: '#',
  },
  {
    id: 'tab3',
    title: 'ОДЕЖДА',
    href: '#',
    subcategories: [
      {
        title: 'УНИСЕКС',
        href: '#',
        items: [
          { title: 'КУРТКИ', href: '#' },
          { title: 'БОМБЕРЫ', href: '#' },
          { title: 'ДЖЕРСИ', href: '#' },
          { title: 'ЗИП-ХУДИ', href: '#' },
          { title: 'ХУДИ', href: '#' },
          { title: 'ФУТБОЛКИ', href: '#' },
          { title: 'СВИТШОТЫ', href: '#' },
          { title: 'ЛОНГСЛИВЫ', href: '#' },
          { title: 'РУБАШКИ', href: '#' },
          { title: 'ШТАНЫ', href: '#' },
          { title: 'ШОРТЫ', href: '#' },
        ],
      },
      {
        title: 'МУЖСКОЕ',
        href: '#',
        items: [
          { title: 'ХУДИ', href: '#' },
          { title: 'БРЮКИ', href: '#' },
          { title: 'ЛОНГСЛИВЫ', href: '#' },
        ],
      },
      {
        title: 'ЖЕНСКОЕ',
        href: '#',
        items: [
          { title: 'ТОПЫ', href: '#' },
        ],
      },
    ],
  },
  {
    id: 'tab4',
    title: 'КОЛЛЕКЦИИ',
    href: '#',
    subcategories: [
      {
        title: 'ANIME MOOD',
        href: '#',
        items: [
          { title: 'ЕВАГЕЛИОН', href: '#' },
          { title: 'ВАН ПИС', href: '#' },
          { title: 'КЛИНОК РАССЕКАЮЩИЙ ДЕМОНОВ', href: '#' },
          { title: 'ВАНПАНЧМЕН', href: '#' },
          { title: 'ГЕРОЙСКАЯ АКАДЕМИЯ', href: '#' },
          { title: 'БЛИЧ', href: '#' },
          { title: 'БЕРСЕРК', href: '#' },
          { title: 'ХЕЛЛСИНГ', href: '#' },
          { title: 'ТЕТРАДЬ СМЕРТИ', href: '#' },
          { title: 'ЧЕЛОВЕК БЕНЗОПИЛА', href: '#' },
          { title: 'МАГИЧЕСКАЯ БИТВА', href: '#' },
          { title: 'ХАНТЕР Х ХАНТЕР', href: '#' },
        ],
      },
      {
        title: 'UNIQUE',
        href: '#',
        items: [
          { title: 'STONE WASHED', href: '#' },
          { title: 'GLOW', href: '#' },
          { title: 'CUSTOM', href: '#' },
          { title: 'NAMED', href: '#' },
        ],
      },
      {
        title: 'КОЛЛАБОРАЦИИ',
        href: '#',
        items: [
          { title: 'NIKIFILINI', href: 'https://nikifilini.com/' },
          { title: 'ZAGON', href: 'https://zagonbrand.com/' },
          { title: 'Skvoff', href: 'https://skvoff.ru/' },
          { title: 'kiyotaka', href: 'https://www.kiyotaka.ru/' },
          { title: 'hronika', href: 'https://hronikawear.ru/' },
          { title: 'snkv', href: 'https://snkv.store/' },
        ],
      },
    ],
  },
  {
    id: 'tab5',
    title: 'ДРУГОЕ',
    href: '#',
    subcategories: [
      {
        title: 'АКСЕССУАРЫ',
        href: '#',
        items: [
          { title: 'КЕПКИ', href: '#' },
          { title: 'ШАРФЫ', href: '#' },
          { title: 'НОСКИ', href: '#' },
          { title: 'СУМКИ', href: '#' },
        ],
      },
      {
        title: 'КОВРЫ',
        href: '#',
        items: [
          { title: 'ПРИДВЕРНЫЕ КОВРИКИ', href: '#' },
        ],
      },
    ],
  },
];
const Dropdown = ({ currentTheme }) => {
    const [openTab, setOpenTab] = useState(null);
    const [showOnScroll, setShowOnScroll] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setShowOnScroll(true);
        } else {
          setShowOnScroll(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div
        className={`w-full relative ${
          showOnScroll ? 'sticky top-16 left-0 bg-white  z-10' : ''
        }`}
        style={{ fontFamily: 'Ubuntu', fontSize: '12px'}}
        onMouseLeave={() => setOpenTab(null)}
      >
        {/* Tabs */}
        <div
            className={`flex justify-center space-x-8 shadow-lg font-semibold ${currentTheme.cardsBackground} ${currentTheme.textSecondary}`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`my-1 hover:${currentTheme.textHover} ${
                openTab === tab.id ? `font-semibold ${currentTheme.textHover}` : ''
              }`}
              onMouseEnter={() => setOpenTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
  
        {/* Dropdown Content */}
        {openTab &&
          tabs.find((tab) => tab.id === openTab)?.subcategories?.length > 0 && (
            <div
              className={`px-[25%] shadow-md z-20 flex w-full absolute top-full left-0 ${currentTheme.cardsBackground}`}
            >
              {tabs
                .find((tab) => tab.id === openTab)
                .subcategories.map((subcategory) => (
                  <div
                    key={subcategory.title}
                    className="py-6 px-16"
                  >
                    {/* Subcategory Title */}
                    <a
                      href={subcategory.href}
                      className={`${currentTheme.textSecondary} hover:${currentTheme.textHover} font-semibold`}
                    >
                      {subcategory.title}
                    </a>
                    <hr className={`my-2 w-[5vw] mx-left  ${currentTheme.border}`} />
                    {/* Subcategory Items */}
                    <ul>
                      {subcategory.items.map((item) => (
                        <li key={item.title} className="py-1">
                          <a
                            href={item.href}
                            className={` hover:${currentTheme.textHover} font-semibold ${currentTheme.textSecondary}`}
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