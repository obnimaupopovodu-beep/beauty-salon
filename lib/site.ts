export const business = {
  name: "Парикмахерская",
  shortLocation: "Авиамоторная",
  seoTitle:
    "Салон красоты на Авиамоторной: стрижки, маникюр и косметология рядом с метро",
  description:
    "Парикмахерская на Авиамоторной — в 124 м от метро: женские и мужские стрижки, маникюр, гель-лак, косметология. Запись: +7 (903) 687-78-58.",
  tagline:
    "Стрижки, ногтевой сервис и косметология рядом с метро Авиамоторная.",
  phoneDisplay: "+7 (903) 687-78-58",
  phoneHref: "tel:+79036877858",
  address: "Москва, ул. Авиамоторная, 8, стр. 1",
  metro: "Авиамоторная",
  metroDistance: "124 м",
  busStop: "Метро Авиамоторная",
  busDistance: "134 м",
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
  "4,3 из 5 на Яндекс Картах",
  `${business.ratingCount} оценки и ${business.reviewCount} отзыва`,
  `${business.metroDistance} от метро «${business.metro}»`,
  "Запись по телефону или приходите без записи",
] as const;

export const popularServices = [
  {
    title: "Женская стрижка",
    price: "от 350 ₽",
    text: "Обновление формы или полноценная стрижка под длину и тип волос.",
  },
  {
    title: "Мужская стрижка",
    price: "от 150 ₽",
    text: "Аккуратный результат без очереди.",
  },
  {
    title: "Покрытие гель-лаком",
    price: "от 1 150 ₽",
    text: "Маникюр с покрытием для аккуратного повседневного образа.",
  },
  {
    title: "Укладка / вечерняя причёска",
    price: "от 800 ₽",
    text: "Когда нужно явиться на встречу, праздник или мероприятие.",
  },
] as const;

export const serviceGroups = [
  {
    title: "Женский зал",
    items: [
      "Женские стрижки",
      "Укладка",
      "Вечерние причёски",
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
    items: ["Маникюр", "Педикюр", "Покрытие гель-лаком"],
  },
  {
    title: "Косметология",
    items: [
      "Уход за лицом",
      "Пилинг",
      "Очищение кожи",
      "Оформление бровей и ресниц",
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
    text: "На Авиамоторной улице, 124 м от выхода из метро и несколько минут пешеходом.",
  },
  {
    title: "Прозрачные цены",
    text: "На сайте сразу видны стартовые цены, чтобы быстро ориентироваться по базовым услугам.",
  },
  {
    title: "Удобная запись",
    text: "По телефону, через форму на сайте или просто зайди в любое удобное время.",
  },
  {
    title: "Проверенный рейтинг",
    text: "4,3 балла на основе 137 оценок. Гости отмечают персонал, атмосферу и качество стрижки.",
  },
] as const;

export const prices = [
  ["Женская стрижка", "350– 1 000 ₽"],
  ["Мужская стрижка", "150–500 ₽"],
  ["Укладка / вечерняя причёска", "от 800 ₽"],
  ["Депиляция ног (до колена / до бедра)", "от 900 ₽"],
  ["Покрытие ногтей гель-лаком", "от 1 150 ₽"],
] as const;

export const reviews = [
  "Посетители отмечают приветливый персонал и быстрое обслуживание — без долгого ожидания.",
  "Часто пишут об аккуратной работе мастеров и спокойной, уютной атмосфере.",
  "Удобно, что можно записаться по телефону или прийти без записи — в живую очередь.",
] as const;

export const faqs = [
  {
    q: "Как записаться?",
    a: `Позвоните по номеру ${business.phoneDisplay} или оставьте заявку на сайте. Администратор свяжется для подтверждения.`,
  },
  {
    q: "Сколько идти от метро?",
    a: `Около ${business.metroDistance} от метро ${business.metro}. Рядом есть остановка «${business.busStop}».`,
  },
  {
    q: "Можно прийти без записи?",
    a: "Да. Если хотите выбрать время заранее, лучше позвонить.",
  },
  {
    q: "От чего зависит итоговая стоимость?",
    a: "От длины волос, объёма работы и выбранного мастера. Точную цену сообщит администратор.",
  },
  {
    q: "Доступен ли вход для маломобильных граждан?",
    a: "К сожалению, вход в салон недоступен для инвалидных колясок.",
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
