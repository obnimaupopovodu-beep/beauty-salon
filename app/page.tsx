import Image from "next/image";
import { SectionTitle } from "@/components/section-title";
import { BookingForm } from "@/components/booking-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { AdvantagesSection } from "@/components/advantages-section";
import salonLogo from "@/imgs/icon.png";
import {
  advantages,
  business,
  faqs,
  jsonLd,
  popularServices,
  prices,
  promos,
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
        <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-stone-50/85 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
            <a href="#top" className="flex min-w-0 items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm shadow-stone-200/60">
                <Image
                  src={salonLogo}
                  alt="Логотип салона Шарм"
                  className="h-10 w-10 object-contain"
                  priority
                />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-2xl leading-none text-stone-900">
                  {business.name}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-stone-500">
                  {business.shortLocation}
                </span>
              </span>
            </a>

            <nav
              aria-label="Основная навигация"
              className="hidden items-center gap-6 text-sm text-stone-600 lg:flex"
            >
              <a href="#services" className="transition hover:text-stone-900">Услуги</a>
              <a href="#prices" className="transition hover:text-stone-900">Цены</a>
              <a href="#reviews" className="transition hover:text-stone-900">Отзывы</a>
              <a href="#contacts" className="transition hover:text-stone-900">Контакты</a>
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
            <div aria-hidden className="ornament-blob absolute -left-16 top-16 h-56 w-56 opacity-70" />
            <div aria-hidden className="ornament-wave absolute right-[-6rem] top-8 h-56 w-[24rem] opacity-45" />
            <div aria-hidden className="ornament-rings absolute bottom-0 right-[8%] h-40 w-40 opacity-40" />
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
              <div className="max-w-3xl">
                <div className="inline-flex items-center rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-xs font-medium text-stone-600 shadow-sm shadow-stone-200/40">
                  Метро «{business.metro}» • {business.schedule.today}
                </div>

                <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] text-stone-900 sm:text-6xl lg:text-7xl">
                  Салон красоты «Шарм» на ВДНХ
                </h1>

                {/* Подзаголовок под H1 */}
                <p className="mt-4 max-w-2xl text-lg font-normal leading-snug text-stone-400 sm:text-xl">
                  Стрижки, барбер-услуги и маникюр с заботой о каждом клиенте
                </p>

                <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
                  Женские и детские стрижки, барбер-зал, ногтевой сервис, массаж и эпиляция — всё рядом с метро. Можно быстро позвонить, выбрать время или оставить заявку на сайте.
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
                    <dt className="text-xs uppercase tracking-[0.22em] text-stone-500">Рейтинг</dt>
                    <dd className="mt-2 text-2xl font-semibold text-stone-900">{business.ratingDisplay} / 5</dd>
                  </div>
                  <div className="rounded-3xl border border-stone-200/80 bg-white/80 p-5 shadow-sm shadow-stone-200/50">
                    <dt className="text-xs uppercase tracking-[0.22em] text-stone-500">Оценок</dt>
                    <dd className="mt-2 text-2xl font-semibold text-stone-900">{business.ratingCount}</dd>
                  </div>
                  <div className="rounded-3xl border border-stone-200/80 bg-white/80 p-5 shadow-sm shadow-stone-200/50">
                    <dt className="text-xs uppercase tracking-[0.22em] text-stone-500">Яндекс Карты</dt>
                    <dd className="mt-2 text-2xl font-semibold text-stone-900">4,9 / 5</dd>
                  </div>
                </dl>
              </div>

              <aside className="relative lg:pl-6">
                <div aria-hidden className="ornament-mesh absolute -left-2 top-12 h-28 w-28 opacity-30" />
                <div className="relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white/90 p-6 shadow-soft">
                  <div aria-hidden className="ornament-wave absolute -right-10 bottom-2 h-40 w-56 opacity-25" />
                  <div className="rounded-[1.5rem] bg-stone-900 px-5 py-4 text-white">
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-300">Сейчас выгодно</p>
                    <p className="mt-2 text-xl font-semibold">Позвонить или оставить заявку ниже</p>
                  </div>
                  <div className="mt-5 space-y-3">
                    {trustPoints.map((point) => (
                      <div key={point} className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 text-sm leading-6 text-stone-700">
                        {point}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-[1.5rem] border border-dashed border-stone-300 px-4 py-5">
                    <p className="text-sm font-semibold text-stone-900">Режим работы</p>
                    <p className="mt-2 text-sm text-stone-600">{business.schedule.weekdays}</p>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          {/* Блок доверия */}
          <section aria-label="Доверие" className="relative overflow-hidden border-y border-stone-200/80 bg-white/70">
            <div aria-hidden className="ornament-mesh absolute -right-12 top-1/2 h-36 w-36 -translate-y-1/2 opacity-35" />
            <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-stone-200/80 bg-stone-50 px-4 py-4 text-sm text-stone-700">
                  {point}
                </div>
              ))}
            </div>
          </section>

          {/* Акции */}
          <section aria-label="Акции" className="relative overflow-hidden bg-stone-900 text-stone-100">
            <div aria-hidden className="ornament-wave ornament-wave-dark absolute left-[-4rem] top-0 h-48 w-[22rem] opacity-30" />
            <div aria-hidden className="ornament-rings absolute bottom-[-3rem] right-[-1rem] h-48 w-48 opacity-25" />
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
              <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Акции сейчас</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {promos.map((promo) => (
                  <div key={promo.label} className="relative overflow-hidden rounded-2xl border border-stone-700 bg-stone-800 px-5 py-5">
                    <div aria-hidden className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-stone-500 to-transparent" />
                    <p className="text-xl font-semibold text-white">{promo.label}</p>
                    <p className="mt-2 text-sm text-stone-400">{promo.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Популярные услуги */}
          <section id="services" className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div aria-hidden className="ornament-rings absolute right-4 top-10 h-36 w-36 opacity-35" />
            <SectionTitle
              eyebrow="Популярные услуги"
              title="То, за чем к нам чаще всего приходят"
              text="Стартовые цены помогают быстро сориентироваться. Если нужен точный расчёт, администратор подскажет по телефону."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {popularServices.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(140,120,97,0.12)]"
                >
                  <div aria-hidden className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(231,221,210,0.8)_0%,_rgba(255,255,255,0)_70%)]" />
                  <p className="text-sm text-stone-500">{service.price}</p>
                  <h3 className="mt-3 text-xl font-semibold text-stone-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{service.text}</p>
                  <a
                    href="#booking"
                    className="mt-4 inline-block text-sm font-medium text-stone-900 underline-offset-2 hover:underline"
                  >
                    Записаться →
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Все направления */}
          <section className="relative overflow-hidden bg-white/75">
            <div aria-hidden className="ornament-blob absolute right-[-6rem] top-10 h-64 w-64 opacity-40" />
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
              <SectionTitle
                eyebrow="Все направления"
                title="Парикмахерские, барбер, ногти и дополнительные услуги в одном месте"
                text="Каждое направление — своя команда мастеров."
              />
              <div className="mt-10 grid gap-5 lg:grid-cols-2">
                {serviceGroups.map((group) => (
                  <section key={group.title} className="relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-stone-50 p-6">
                    <div aria-hidden className="absolute -right-10 -top-12 h-32 w-32 rounded-full border border-stone-200/70" />
                    <h3 className="text-2xl font-semibold text-stone-900">{group.title}</h3>
                    <ul className="mt-5 grid gap-3 text-sm leading-7 text-stone-600 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li key={item} className="rounded-2xl bg-white px-4 py-3">{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </section>

          {/* Преимущества — клиентский компонент с декорацией */}
          <AdvantagesSection advantages={advantages} />

          {/* О салоне */}
          <section className="relative overflow-hidden bg-stone-900 text-stone-100">
            <div aria-hidden className="ornament-wave ornament-wave-dark absolute right-[-4rem] top-6 h-48 w-[24rem] opacity-20" />
            <div aria-hidden className="absolute left-[8%] top-10 h-24 w-24 rounded-full border border-stone-700/70" />
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">О салоне</p>
                <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                  Красота рядом, с заботой о каждом клиенте
                </h2>
              </div>
              <div className="space-y-5 text-sm leading-8 text-stone-300 sm:text-base">
                <p>
                  Салон «Шарм» на проспекте Мира, 180 объединяет парикмахерский зал, барбер-зал, ногтевой сервис, массаж и эпиляцию в одной локации.
                </p>
                <p>
                  Гости высоко оценивают мастеров, качество стрижки и атмосферу — 4,9 из 5 на Яндекс Картах.
                </p>
              </div>
            </div>
          </section>

          {/* Цены */}
          <section id="prices" className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div aria-hidden className="ornament-mesh absolute left-0 top-16 h-28 w-28 opacity-30" />
            <SectionTitle
              eyebrow="Цены"
              title="Базовые цены, с которых удобно начать"
              text="Точная стоимость зависит от объёма работы и выбранного мастера. Администратор рассчитает перед записью."
            />
            <div className="mt-10 overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white">
              <div className="grid grid-cols-[1fr_auto] border-b border-stone-200/80 px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 sm:px-8">
                <span>Услуга</span>
                <span>Цена</span>
              </div>
              {prices.map(([name, value]) => (
                <div key={name} className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-stone-100 px-5 py-5 last:border-b-0 sm:px-8">
                  <span className="text-sm font-medium text-stone-800 sm:text-base">{name}</span>
                  <span className="text-sm font-semibold text-stone-900 sm:text-base">{value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Отзывы */}
          <section id="reviews" className="relative overflow-hidden bg-white/75">
            <div aria-hidden className="ornament-wave absolute left-[-5rem] bottom-0 h-44 w-[22rem] opacity-30" />
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
              <SectionTitle
                eyebrow="Отзывы"
                title="Что чаще всего отмечают гости"
                text="Короткий пересказ того, что повторяется в отзывах на Яндекс Картах чаще всего."
              />
              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {reviews.map((review, index) => (
                  <article key={review} className="relative rounded-[2rem] border border-stone-200/80 bg-stone-50 p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Отзыв {index + 1}</p>
                    <p className="mt-4 text-sm leading-7 text-stone-700">{review}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ — клиентский компонент с анимацией */}
          <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div aria-hidden className="ornament-rings absolute right-0 top-8 h-40 w-40 opacity-30" />
            <SectionTitle
              eyebrow="FAQ"
              title="Коротко о важном перед записью"
              text="Ответы на вопросы, которые обычно помогают принять решение быстрее."
            />
            <FaqAccordion items={faqs} />
          </section>

          {/* Форма записи */}
          <section id="booking" className="relative overflow-hidden bg-stone-900 text-stone-100">
            <div aria-hidden className="ornament-blob absolute left-[-5rem] bottom-[-5rem] h-72 w-72 opacity-20" />
            <div aria-hidden className="ornament-wave ornament-wave-dark absolute right-[-2rem] top-8 h-52 w-[24rem] opacity-20" />
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Форма записи</p>
                <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                  Запишитесь — администратор подтвердит удобное время
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-8 text-stone-300 sm:text-base">
                  Если удобнее решить всё быстрее, можно сразу позвонить по номеру{" "}
                  {business.phoneDisplay}.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Выберите услугу и удобное время",
                    "Администратор перезвонит для подтверждения",
                    "Ваша запись подтверждена",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-stone-300">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-stone-600 text-xs font-semibold text-stone-400">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <BookingForm
                phoneDisplay={business.phoneDisplay}
                phoneHref={business.phoneHref}
              />
            </div>
          </section>

          {/* Контакты */}
          <section id="contacts" className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div aria-hidden className="ornament-mesh absolute right-4 top-16 h-28 w-28 opacity-35" />
            <SectionTitle
              eyebrow="Контакты"
              title="Как нас найти"
              text="Проспект Мира, 180 — рядом с метро ВДНХ."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <address className="not-italic rounded-[2rem] border border-stone-200/80 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Адрес</p>
                <p className="mt-3 text-xl font-semibold text-stone-900">{business.address}</p>
                <p className="mt-1 text-sm text-stone-500">{business.addressHint}</p>
                <div className="mt-6 space-y-3 text-sm leading-7 text-stone-600">
                  <p>Метро «{business.metro}» — {business.metroDistance}.</p>
                  <p>{business.schedule.weekdays}.</p>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href={business.phoneHref} className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-stone-800">
                    Позвонить
                  </a>
                  <a href={business.routeHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-4 text-sm font-semibold text-stone-900 transition hover:border-stone-400">
                    Построить маршрут
                  </a>
                </div>
              </address>

              <div className="overflow-hidden rounded-[2rem] border border-stone-200/80 bg-stone-100 shadow-sm">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20%D0%9C%D0%B8%D1%80%D0%B0%2C%20180&z=16"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowFullScreen
                  title="Салон Красоты «Шарм» на Яндекс.Картах"
                  className="block w-full"
                  style={{ minHeight: "360px", border: "none" }}
                />
              </div>
            </div>
          </section>
        </main>

        <footer className="relative overflow-hidden border-t border-stone-200/80 bg-white/80">
          <div aria-hidden className="ornament-wave absolute left-[-4rem] top-0 h-36 w-[18rem] opacity-20" />
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-stone-600 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[1.25rem] border border-stone-200 bg-white shadow-sm shadow-stone-200/60">
                <Image
                  src={salonLogo}
                  alt="Логотип салона Шарм"
                  className="h-11 w-11 object-contain"
                />
              </span>
              <div>
                <p className="font-display text-2xl text-stone-900">{business.name}</p>
              <p className="mt-2 max-w-xl leading-7">{business.tagline}</p>
              </div>
            </div>
            <div className="space-y-1 text-sm lg:text-right">
              <p>{business.address}</p>
              <p className="text-stone-400">{business.addressHint}</p>
              <p>{business.phoneDisplay}</p>
              <p>{business.schedule.weekdays}</p>
            </div>
          </div>
        </footer>

        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(28,25,23,0.08)] backdrop-blur sm:hidden">
          <div className="grid grid-cols-3 gap-2">
            <a href={business.phoneHref} className="inline-flex items-center justify-center rounded-full bg-stone-900 px-3 py-3 text-xs font-semibold text-white">Позвонить</a>
            <a href="#booking" className="inline-flex items-center justify-center rounded-full border border-stone-300 px-3 py-3 text-xs font-semibold text-stone-900">Записаться</a>
            <a href={business.routeHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-stone-300 px-3 py-3 text-xs font-semibold text-stone-900">Маршрут</a>
          </div>
        </div>
      </div>
    </>
  );
}
