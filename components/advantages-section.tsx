"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionTitle } from "@/components/section-title";

type AdvantageItem = {
  title: string;
  text: string;
};

const decorativeWords = [
  "Proficiency",
  "Expertise",
  "Craft",
  "Mastery",
  "Precision",
  "Quality",
];

export function AdvantagesSection({
  advantages,
}: {
  advantages: readonly AdvantageItem[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionTitle
        eyebrow="Почему здесь удобно"
        title="Салон, где важны не обещания, а результат"
        text="Рейтинг 4,9 — не случайность."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto]">
        {/* Карточки преимуществ */}
        <div className="grid gap-5 md:grid-cols-2">
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

        {/* Декоративная колонка — только десктоп */}
        <div
          ref={ref}
          className="relative hidden w-[180px] select-none overflow-hidden rounded-[2rem] border border-stone-200/80 bg-stone-50 lg:flex lg:flex-col lg:items-center lg:justify-center"
          aria-hidden
        >
          {/* Вертикальная линия */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ originY: 0 }}
            className="absolute inset-x-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-stone-300"
          />

          {/* Слова */}
          <div className="flex flex-col items-center gap-10 py-8">
            {decorativeWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: i === 0 ? 0.9 : 0.22 + i * 0.04, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-display text-sm tracking-[0.22em] text-stone-400"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  letterSpacing: "0.22em",
                  fontWeight: i === 0 ? 600 : 400,
                  color: i === 0 ? "#292524" : undefined,
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
