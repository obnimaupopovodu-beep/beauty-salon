import { SectionTitle } from "@/components/section-title";
import {
  advantages,
  business,
  faqs,
  jsonLd,
  popularServices,
  prices,
  reviews,
  serviceGroups,
  trustPoints,
} from "@/lib/site";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(231,221,210,0.45),_transparent_32%),linear-gradient(180deg,_#faf8f5_0%,_#f4efe9_100%)]">
        <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-stone-50/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
            <a href="#top" className="min-w-0">
              <span className="block font-display text-2xl leading-none text-stone-900">
                {business.name}
              </span>
              <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-stone-500">
                {business.shortLocation}
              </span>
            </a>

            <nav
              aria-label="Основная навигация"
              className="hidden items-center gap-6 text-sm text-stone-600 lg:flex"
            >
              <a href="#services" className="transition hover:text-stone-900">
                Услуги
              </a>
              <a href="#prices" className="transition hover:text-stone-900">
                Цены
              </a>
              <a href="#reviews" className="transition hover:text-stone-900">
                Отзывы
              </a>
              <a href="#contacts" className="transition hover:text-stone-900">
                Контакты
              </a>
            </nav>

            <div className="hidden items-center gap-3 sm:flex">
              <a
                href={business.phoneHref}
                className="text-sm font-semibold text-stone-900 transition hover:text-stone-700"
              >
                {business.phoneDisplay}
              </a>
              <a
                href="#booking"
                className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
              >
                Записаться
              </a>
            </div>
          </div>
        </header>

        <main id="top">
          <section className="relative overflow-hidden">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
              <div className="max-w-3xl">
                <div className="inline-flex items-center rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-xs font-medium text-stone-600 shadow-sm shadow-stone-200/40">
                  {business.metroDistance} от метро {business.metro} •{" "}
                  {business.schedule.today}
                </div>

                <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] text-stone-900 sm:text-6xl lg:text-7xl">
                  Салон красоты на Авиамоторной для стрижки, маникюра и ухода без
                  долгой дороги по городу
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  Женский и мужской зал, ногтевой сервис и косметология рядом с
                  метро. Можно быстро позвонить, выбрать удобное время и
                  подтвердить запись через администратора.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#booking"
                    className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-stone-800"
                  >
                    Записаться
                  </a>
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-4 text-sm font-semibold text-stone-900 transition hover:border-stone-400"
                  >
                    Позвонить
                  </a>
                  <a
                    href={business.routeHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-transparent px-2 py-4 text-sm font-semibold text-stone-700 transition hover:text-stone-900"
                  >
                    Построить маршрут
                  </a>
                </div>

                <dl className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl border border-stone-200/80 bg-white/80 p-5 shadow-sm shadow-stone-200/50">
                    <dt className="text-xs uppercase tracking-[0.22em] text-stone-500">
                      Рейтинг
                    </dt>
                    <dd className="mt-2 text-2xl font-semibold text-stone-900">
                      {business.ratingDisplay} / 5
                    </dd>
                  </div>
                  <div className="rounded-3xl border border-stone-200/80 bg-white/80 p-5 shadow-sm shadow-stone-200/50">
                    <dt className="text-xs uppercase tracking-[0.22em] text-stone-500">
                      Оценок
                    </dt>
                    <dd className="mt-2 text-2xl font-semibold text-stone-900">
                      {business.ratingCount}
                    </dd>
                  </div>
                  <div className="rounded-3xl border border-stone-200/80 bg-white/80 p-5 shadow-sm shadow-stone-200/50">
                    <dt className="text-xs uppercase tracking-[0.22em] text-stone-500">
                      Отзывов
                    </dt>
                    <dd className="mt-2 text-2xl font-semibold text-stone-900">
                      {business.reviewCount}
                    </dd>
                  </div>
                </dl>
              </div>

              <aside className="relative lg:pl-6">
                <div className="rounded-[2rem] border border-stone-200/80 bg-white/90 p-6 shadow-soft">
                  <div className="rounded-[1.5rem] bg-stone-900 px-5 py-4 text-white">
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-300">
                      Сегодня удобно
                    </p>
                    <p className="mt-2 text-xl font-semibold">
                      Позвонить и уточнить ближайшее свободное окно
                    </p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {trustPoints.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 text-sm leading-6 text-stone-700"
                      >
                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-dashed border-stone-300 px-4 py-5">
                    <p className="text-sm font-semibold text-stone-900">
                      Режим работы
                    </p>
                    <p className="mt-2 text-sm text-stone-600">
                      {business.schedule.weekdays}
                    </p>
                    <p className="text-sm text-stone-600">{business.schedule.sunday}</p>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <section aria-label="Доверие" className="border-y border-stone-200/80 bg-white/70">
            <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-stone-200/80 bg-stone-50 px-4 py-4 text-sm text-stone-700"
                >
                  {point}
                </div>
              ))}
            </div>
          </section>

          <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <SectionTitle
              eyebrow="Популярные услуги"
              title="То, за чем к нам чаще всего приходят"
              text="Стартовые цены помогают быстро сориентироваться. Если нужен точный расчёт, администратор подскажет по телефону."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {popularServices.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-[2rem] border border-stone-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(140,120,97,0.12)]"
                >
                  <p className="text-sm text-stone-500">{service.price}</p>
                  <h3 className="mt-3 text-xl font-semibold text-stone-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{service.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-white/75">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
              <SectionTitle
                eyebrow="Все направления"
                title="Волосы, ногти, косметология и базовый уход в одной локации"
                text="Страница собрана вокруг понятных направлений, чтобы человек сразу видел нужную категорию и не искал её по длинному прайсу."
              />

              <div className="mt-10 grid gap-5 lg:grid-cols-2">
                {serviceGroups.map((group) => (
                  <section
                    key={group.title}
                    className="rounded-[2rem] border border-stone-200/80 bg-stone-50 p-6"
                  >
                    <h3 className="text-2xl font-semibold text-stone-900">{group.title}</h3>
                    <ul className="mt-5 grid gap-3 text-sm leading-7 text-stone-600 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li key={item} className="rounded-2xl bg-white px-4 py-3">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <SectionTitle
              eyebrow="Почему сюда удобно"
              title="Локальный салон, где важны не обещания, а понятный путь до записи"
              text="Лендинг делает акцент на том, что действительно влияет на решение: близость к метро, цена от, доверие по отзывам и быстрый контакт."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {advantages.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-stone-200/80 bg-white p-6"
                >
                  <h3 className="text-xl font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-stone-900 text-stone-100">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                  О салоне
                </p>
                <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                  Красота рядом, когда не хочется тратить полдня на дорогу и сложную
                  запись
                </h2>
              </div>
              <div className="space-y-5 text-sm leading-8 text-stone-300 sm:text-base">
                <p>
                  «Парикмахерская» на Авиамоторной объединяет женский и мужской
                  зал, ногтевой сервис и косметологические процедуры в одной
                  точке рядом с метро.
                </p>
                <p>
                  По отзывам гости часто отмечают персонал, качество стрижки,
                  быстрое обслуживание и спокойную атмосферу. Это не формат
                  громких обещаний, а место, куда удобно вернуться по понятной
                  цене и без лишней логистики.
                </p>
              </div>
            </div>
          </section>

          <section id="prices" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <SectionTitle
              eyebrow="Цены"
              title="Базовые цены, с которых удобно начать"
              text="Точная стоимость зависит от длины волос, объёма работы и выбранного мастера."
            />

            <div className="mt-10 overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white">
              <div className="grid grid-cols-[1fr_auto] border-b border-stone-200/80 px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 sm:px-8">
                <span>Услуга</span>
                <span>Цена</span>
              </div>
              {prices.map(([name, value]) => (
                <div
                  key={name}
                  className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-stone-100 px-5 py-5 last:border-b-0 sm:px-8"
                >
                  <span className="text-sm font-medium text-stone-800 sm:text-base">
                    {name}
                  </span>
                  <span className="text-sm font-semibold text-stone-900 sm:text-base">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section id="reviews" className="bg-white/75">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
              <SectionTitle
                eyebrow="Отзывы"
                title="Что чаще всего отмечают гости"
                text="Ниже не цитаты, а короткий пересказ того, что повторяется в отзывах чаще всего."
              />

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {reviews.map((review, index) => (
                  <article
                    key={review}
                    className="rounded-[2rem] border border-stone-200/80 bg-stone-50 p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                      Отзыв {index + 1}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-stone-700">{review}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <SectionTitle
              eyebrow="FAQ"
              title="Коротко о важном перед записью"
              text="Собрали ответы на вопросы, которые обычно помогают принять решение быстрее."
            />

            <div className="mt-10 space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-[1.75rem] border border-stone-200/80 bg-white p-6"
                >
                  <summary className="cursor-pointer list-none text-lg font-semibold text-stone-900">
                    {item.q}
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section id="booking" className="bg-stone-900 text-stone-100">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                  Форма записи
                </p>
                <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                  Оставьте контакт, и администратор поможет подобрать удобное время
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-8 text-stone-300 sm:text-base">
                  Если удобнее решить всё быстрее, можно сразу позвонить по номеру{" "}
                  {business.phoneDisplay}.
                </p>
              </div>

              <form className="rounded-[2rem] bg-stone-50 p-6 text-stone-900 shadow-[0_24px_80px_rgba(12,10,9,0.22)]">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="text-sm font-medium text-stone-700">
                      Имя
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition placeholder:text-stone-400 focus:border-stone-900"
                      placeholder="Как к вам обращаться"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="text-sm font-medium text-stone-700">
                      Телефон
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition placeholder:text-stone-400 focus:border-stone-900"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="service" className="text-sm font-medium text-stone-700">
                      Услуга
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-900"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Выберите направление
                      </option>
                      <option>Женская стрижка</option>
                      <option>Мужская стрижка</option>
                      <option>Маникюр / гель-лак</option>
                      <option>Косметология</option>
                      <option>Другая услуга</option>
                    </select>
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="time" className="text-sm font-medium text-stone-700">
                      Удобное время
                    </label>
                    <input
                      id="time"
                      name="time"
                      type="text"
                      className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition placeholder:text-stone-400 focus:border-stone-900"
                      placeholder="Например, сегодня после 18:00"
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-stone-800"
                  >
                    Отправить заявку
                  </button>
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-4 text-sm font-semibold text-stone-900 transition hover:border-stone-400"
                  >
                    Позвонить
                  </a>
                </div>

                <p className="mt-4 text-sm leading-6 text-stone-500">
                  Администратор свяжется с вами для подтверждения записи и
                  уточнения деталей.
                </p>
              </form>
            </div>
          </section>

          <section id="contacts" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <SectionTitle
              eyebrow="Контакты"
              title="Как добраться и когда лучше звонить"
              text="Сделали контактный блок максимально прикладным: адрес, часы, маршрут, телефон и важная информация о доступности."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <address className="not-italic rounded-[2rem] border border-stone-200/80 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                  Адрес
                </p>
                <p className="mt-3 text-xl font-semibold text-stone-900">
                  {business.address}
                </p>

                <div className="mt-6 space-y-3 text-sm leading-7 text-stone-600">
                  <p>
                    Метро {business.metro} — {business.metroDistance}.
                  </p>
                  <p>
                    Остановка «{business.busStop}» — {business.busDistance}.
                  </p>
                  <p>
                    {business.schedule.weekdays}, {business.schedule.sunday}.
                  </p>
                  <p>Вход недоступен для инвалидной коляски.</p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-stone-800"
                  >
                    Позвонить
                  </a>
                  <a
                    href={business.routeHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-4 text-sm font-semibold text-stone-900 transition hover:border-stone-400"
                  >
                    Построить маршрут
                  </a>
                </div>
              </address>

              <div className="overflow-hidden rounded-[2rem] border border-stone-200/80 bg-stone-100">
                <div className="flex h-full min-h-[360px] flex-col justify-between bg-[linear-gradient(135deg,_rgba(231,221,210,0.95),_rgba(244,239,233,0.85))] p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                      Карта и маршрут
                    </p>
                    <p className="mt-3 max-w-md text-sm leading-7 text-stone-700">
                      Здесь лучше разместить интерактивную карту Яндекс или 2ГИС,
                      чтобы посетитель сразу увидел вход и точку на маршруте от
                      метро.
                    </p>
                  </div>
                  <a
                    href={business.routeHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center justify-center rounded-full border border-stone-400 bg-white px-6 py-4 text-sm font-semibold text-stone-900 transition hover:border-stone-900"
                  >
                    Открыть маршрут
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-stone-200/80 bg-white/80">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-stone-600 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <div>
              <p className="font-display text-2xl text-stone-900">{business.name}</p>
              <p className="mt-2 max-w-xl leading-7">{business.tagline}</p>
            </div>
            <div className="space-y-1 text-sm lg:text-right">
              <p>{business.address}</p>
              <p>{business.phoneDisplay}</p>
              <p>
                Пн–Сб 09:00–21:00 • Вс 10:00–19:00
              </p>
            </div>
          </div>
        </footer>

        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(28,25,23,0.08)] backdrop-blur sm:hidden">
          <div className="grid grid-cols-3 gap-2">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-3 py-3 text-xs font-semibold text-white"
            >
              Позвонить
            </a>
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 px-3 py-3 text-xs font-semibold text-stone-900"
            >
              Записаться
            </a>
            <a
              href={business.routeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 px-3 py-3 text-xs font-semibold text-stone-900"
            >
              Маршрут
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
