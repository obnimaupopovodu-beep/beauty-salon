"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/section-title";
import imgResult from "@/imgs/result.png";

type AdvantageItem = {
  title: string;
  text: string;
};

export function AdvantagesSection({
  advantages,
}: {
  advantages: readonly AdvantageItem[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* Шапка: заголовок + картинка в правом углу на одном уровне */}
      <div className="flex items-start justify-between gap-6">
        <SectionTitle
          eyebrow="Почему здесь удобно"
          title="Салон, где важны не обещания, а результат"
          text="Рейтинг 4,9 — не случайность."
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: -8 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="hidden shrink-0 lg:block"
        >
          <Image
            src={imgResult}
            alt="Результат работы мастера"
            width={160}
            height={160}
            className="rounded-[1.5rem] border border-stone-200/80 object-cover shadow-sm"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Карточки преимуществ */}
      <div ref={ref} className="mt-10 grid gap-5 md:grid-cols-2">
        {advantages.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.09,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="rounded-[2rem] border border-stone-200/80 bg-white p-6"
          >
            <h3 className="text-xl font-semibold text-stone-900">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              {item.text}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
