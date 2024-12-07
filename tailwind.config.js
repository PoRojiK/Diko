module.exports = {
  darkMode: 'class', // Тёмная тема активируется через класс
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'hover:text-custom-pastelPurple',
    'hover:text-custom-deepBlue',
    'fontColor:text-custom-black',
    'fontColor:text-custom-white',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
            veryDarkGray: "#212121",               // Очень тёмный серый (почти чёрный) || фон
            mixedSurfaceVeryDarkGray: "#313131",   // Смешанный тёмно-серый
            darkGray: "#363636",                   // Тёмно-серый || карточки товаров
            mediumGray: "#4c4c4c",                 // Средне-серый || кнопки
            mixedSurfaceDarkGray: "#454545",       // Смешанный серый
            mixedSurfaceMediumGray: "#595959",     // Смешанный средне-серый
            gray: "#636363",                       // Серый || обводка кнопок
            mixedGray: "#6f6f6f",                  // Смешанный серый || обводка поиска
            lightGray: "#7b7b7b",                  // Светло-серый || обводка при наведении
            mixedSurfacePaleGray: "#868686",                   // Бледно-серый || текст неактивных элементов
            lightSilver: "#949494",             // Смешанный светло-серый || текст в графе поиска
            paleGray: "#9d9d9d",              // Бледно-серый || для поверхностей


            mutedSilver: "#bbbbbb",           // Приглушённый серебристый
            offWhite: "#cccccc",              // Бледно-белый
            silverGray: "#e9e9e9",            // Серебристый светлый (вариант 1)
            veryLightGray: "#e2e2e2",         // Очень светлый серый || фон карточек
            paleSilver: "#dddddd",            // Бледный серебристо-голубой
            softSilver: "#f0f0f0",            // Мягкий серебристый (вариант 2)
            white: "#fafafa",            // Мягкий серебристый (вариант 2)



          
            // Blue and purple tones (Accents)
            deepBlue: "#2c2cc0",                   // Глубокий синий
            darkBlue: "#2F34CC",                   // Глубокий синий
            vibrantBlue: "#5042c8",                // Яркий синий
            strongBlue: "#4552D4",                 // Насыщенный синий
            indigo: "#5E71DA",                     // Индиго
            lightIndigo: "#778DE0",                // Светлый индиго
            mediumPeriwinkle: "#90A7E6",           // Средний перивинкл
            lightPeriwinkle: "#A9BFEB",            // Светлый перивинкл
            softBlue: "#6b58cf",                   // Мягкий синий || выделенный текст
            mutedBlue: "#836ed7",                  // Приглушённый синий || цвета иконок отдельных
            pastelPurple: "#9985de",               // Пастельный синий || цвета иконок рядом с текстом
            paleBlue: "#ae9ce5",                   // Бледно-синий || бэкграунд кнопок и заголовков
            softBlueAccent: "#C2D4F1",             // Мягкий голубой
            lightBlue: "#DBE7F7",                  // Светлый голубой
        },
      },
    },
  },
  plugins: [],
};