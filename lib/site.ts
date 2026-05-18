export const business = {
  name: "Парикмахерская",
  shortLocation: "Авиамоторная",
  seoTitle:
    "Салон красоты на Авиамоторной: стрижки, маникюр и косметология рядом с метро",
  description:
    "Парикмахерская на Авиамоторной, 124 м от метро: женские и мужские стрижки, маникюр, гель-лак, косметология. Телефон для записи: +7 (903) 687-78-58.",
  tagline:
    "Салон красоты на Авиамоторной: стрижки, ногтевой сервис и косметология рядом с метро.",
  phoneDisplay: "+7 (903) 687-78-58",
  phoneHref: "tel:+79036877858",
  address: "Москва, Авиамоторная ул., 8, стр. 1",
  metro: "Авиамоторная",
  metroDistance: "около 124 м",
  busStop: "Метро Авиамоторная",
  busDistance: "около 134 м",
  schedule: {
    weekdays: "Пн–Сб: 09:00–21:00",
    sunday: "Вс: 10:00–19:00",
    today: "открыто до 21:00",
  },
  routeHref:
    "https://yandex.ru/maps/?text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%90%D0%B2%D0%B8%D0%B0%D0%BC%D0%BE%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F%20%D1%83%D0%BB.%2C%208%20%D1%81%D1%82%D1%80.%201",
  rating: "4.3",
  ratingDisplay: "4,3",
  ratingCount: 137,
  reviewCount: 58,
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

export const metadataConfig = {
  title: business.seoTitle,
  description: business.description,
  keywords: [
    "салон красоты авиамоторная",
    "парикмахерская авиамоторная",
    "маникюр авиамоторная",
    "косметология авиамоторная",
  ],
  openGraph: {
    title: "Салон красоты на Авиамоторной",
    description:
      "Стрижки, ногтевой сервис и косметология рядом с метро Авиамоторная.",
    siteName: business.name,
    locale: "ru_RU",
  },
} as const;

export const trustPoints = [
  "4,3 из 5 на Яндекс Картах",
  `${business.ratingCount} оценок и ${business.reviewCount} отзывов`,
  `${business.metroDistance} от метро ${business.metro}`,
  "Запись по телефону и возможность зайти по живой очереди",
] as const;

export const popularServices = [
  {
    title: "Женская стрижка",
    price: "от 350 ₽",
    text: "Короткое обновление формы или полноценная стрижка под длину и задачу.",
  },
  {
    title: "Мужская стрижка",
    price: "от 150 ₽",
    text: "Быстрый аккуратный результат без лишнего ожидания.",
  },
  {
    title: "Покрытие гель-лак",
    price: "от 1150 ₽",
    text: "Маникюр с покрытием для повседневного аккуратного образа.",
  },
  {
    title: "Укладка / вечерняя прическа",
    price: "от 800 ₽",
    text: "Когда нужно собраться на встречу, праздник или мероприятие.",
  },
] as const;

export const serviceGroups = [
  {
    title: "Женский зал",
    items: [
      "Женские стрижки",
      "Укладка",
      "Вечерние прически",
      "Окрашивание",
      "Мелирование",
      "Шатуш",
      "Кератиновое выпрямление",
    ],
  },
  {
    title: "Мужской зал",
    items: ["Мужские стрижки", "Детские стрижки"],
  },
  {
    title: "Ногтевой сервис",
    items: ["Маникюр", "Педикюр", "Покрытие гель-лак"],
  },
  {
    title: "Косметология",
    items: [
      "Уход за лицом",
      "Пилинг",
      "Очищение кожи",
      "Брови и ресницы",
      "Эпиляция",
      "Массаж лица",
      "Anti-age",
      "Мезотерапия",
    ],
  },
] as const;

export const advantages = [
  {
    title: "Рядом с метро",
    text: "Салон находится на Авиамоторной улице, примерно в 124 метрах от метро и в нескольких минутах от остановки.",
  },
  {
    title: "Понятные стартовые цены",
    text: "На странице сразу видны цены от, чтобы можно было быстро сориентироваться по базовым услугам.",
  },
  {
    title: "Удобно записаться",
    text: "Можно позвонить, оставить форму или зайти по живой очереди, если это удобно именно вам.",
  },
  {
    title: "Локальное доверие",
    text: "У салона рейтинг 4,3 на основе 137 оценок, а в отзывах часто отмечают персонал, атмосферу и качество стрижки.",
  },
] as const;

export const prices = [
  ["Женская стрижка", "350–1000 ₽"],
  ["Мужская стрижка", "150–500 ₽"],
  ["Укладка / вечерняя прическа", "от 800 ₽"],
  ["Депиляция ног до колена / бедра", "от 900 ₽"],
  ["Покрытие ногтей гель-лак", "от 1150 ₽"],
] as const;

export const reviews = [
  "Клиенты часто пишут, что в салоне приветливый персонал и можно быстро решить вопрос со стрижкой без долгого ожидания.",
  "В отзывах регулярно отмечают аккуратную работу мастеров и спокойную, уютную атмосферу внутри.",
  "Для многих удобно, что записаться можно просто по телефону, а в некоторых случаях помогает и живая очередь.",
] as const;

export const faqs = [
  {
    q: "Как записаться?",
    a: `Проще всего позвонить по номеру ${business.phoneDisplay} или оставить форму на сайте. Администратор свяжется для подтверждения.`,
  },
  {
    q: "Сколько идти от метро?",
    a: `От метро ${business.metro} примерно ${business.metroDistance}. Рядом также есть остановка «${business.busStop}».`,
  },
  {
    q: "Можно прийти без записи?",
    a: "Да, по отзывам клиенты отмечают возможность визита по живой очереди. Но для удобного времени лучше заранее позвонить.",
  },
  {
    q: "От чего зависит итоговая стоимость?",
    a: "Точная стоимость зависит от длины волос, объёма работы и выбранного мастера.",
  },
  {
    q: "Есть ли доступ для инвалидной коляски?",
    a: "Важно учесть, что вход недоступен для инвалидной коляски.",
  },
] as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: business.name,
  description: business.tagline,
  telephone: business.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Москва",
    streetAddress: business.address,
    addressCountry: "RU",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: String(business.reviewCount),
    ratingCount: String(business.ratingCount),
    bestRating: "5",
  },
  areaServed: "Москва",
  hasMap: business.routeHref,
  url: siteUrl,
} as const;
