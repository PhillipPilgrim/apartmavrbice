"use client";

import { useRef, useState, useEffect } from "react";
import { PoppinsSemiBold, PoppinsRegular } from "@/lib/fonts";
import "@/utils/i18n";

import {
  IoStar,
  IoStarHalf,
  IoStarOutline,
  IoArrowDown,
  IoAdd,
  IoCheckmark,
  IoBicycle,
  IoFastFoodOutline,
  IoBasketballOutline,
  IoWalk,
  IoStorefrontOutline,
  IoMapSharp,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Image from "next/image";

export default function Home() {
  const { t } = useTranslation();
  const aboutRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Set mounted true only on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure that the component renders only on the client
  if (!mounted) return null;

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`${PoppinsRegular.className} text-black`}>
      {/* Banner Section */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center">
        <Image
          src="/assets/pictures/background-1.jpeg"
          alt="Banner"
          fill
          className="z-0 bg-black object-cover shadow-lg shadow-black blur-[6px]"
          priority={true}
        />
        <div className="z-10 flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <p
              className={`text-center text-2xl text-white md:text-5xl lg:text-7xl ${PoppinsSemiBold.className}`}
            >
              {t("banner.title")}
            </p>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          onClick={scrollToAbout}
        >
          <IoArrowDown className="text-primary-white h-8 w-8 md:h-12 md:w-12" />
          <span className="sr-only">{t("banner.scroll")}</span>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="mx-auto mt-12 flex min-h-screen w-full flex-col items-center justify-center gap-6 px-6 md:flex-row"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex w-full flex-col px-4 lg:w-1/2"
        >
          <p
            className={`${PoppinsSemiBold.className} text-center text-2xl text-[#e94629] md:text-3xl lg:text-4xl`}
          >
            {t("about.title")}
          </p>
          <p className="mt-4 text-justify text-sm md:text-base lg:text-lg">
            {t("about.description")}
          </p>
          <p className={`${PoppinsSemiBold.className} mt-4 text-lg text-[#e94629] md:text-xl lg:text-2xl`}>
            {t("about.offersTitle")}
          </p>
          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-2 space-y-1 text-justify text-[14px] md:text-[15px] lg:text-base"
          >
            {(t("about.offers", { returnObjects: true }) as string[]).map((item: string, idx: number) => (
              <li key={idx} className="flex gap-2">
                <IoCheckmark className="shrink-0 text-[#e94629]" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className={`${PoppinsSemiBold.className} mt-4 text-lg text-[#e94629] md:text-xl lg:text-2xl`}
            >
              {t("about.whyTitle")}
            </p>
            <ul className="mt-2 space-y-1 text-justify text-[14px] md:text-[15px] lg:text-base">
              {(t("about.reasons", { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                <li key={idx} className="flex gap-2">
                  <IoAdd className="shrink-0 text-[#e94629]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className={`${PoppinsSemiBold.className} mt-4 text-[#e94629]`}>{t("about.reserve")}</p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 hidden h-[500px] w-[1px] bg-black md:block"
        />

        {/* Image collage */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          viewport={{ once: true }}
          className="relative mt-12 ml-4 flex flex-col items-center justify-center gap-4 xl:flex-col"
        >
          <Image
            src="/assets/pictures/image-3.jpg"
            alt="Banner"
            width={1000}
            height={1000}
            className="h-full w-fit shadow-lg md:w-md"
          />
          <Image
            src="/assets/pictures/image-5.jpg"
            alt="Banner"
            width={1000}
            height={1000}
            className="h-full w-fit shadow-lg md:ml-10 md:w-md"
          />
        </motion.div>
      </section>

      {/* Activities Section */}
      <section className="mt-24 w-full gap-24 px-4 pb-36 md:px-12 lg:px-24">
        <p className={`${PoppinsSemiBold.className} text-center text-2xl md:text-3xl`}>
          {t("activities.title")}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(
            t("activities.items", { returnObjects: true }) as { title: string; description: string }[]
          ).map((item: { title: string; description: string }, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
              viewport={{ once: true }}
              className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={`/assets/grids/${
                    idx === 0
                      ? "castle"
                      : idx === 1
                      ? "cyklo"
                      : idx === 2
                      ? "gastro"
                      : idx === 3
                      ? "walking"
                      : idx === 4
                      ? "shopping"
                      : "sport"
                  }.jpg`}
                  alt="Banner"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
                <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-[#e94629]">
                  {idx === 0 ? (
                    <IoMapSharp className="h-6 w-6" />
                  ) : idx === 1 ? (
                    <IoBicycle className="h-6 w-6" />
                  ) : idx === 2 ? (
                    <IoFastFoodOutline className="h-6 w-6" />
                  ) : idx === 3 ? (
                    <IoWalk className="h-6 w-6" />
                  ) : idx === 4 ? (
                    <IoStorefrontOutline className="h-6 w-6" />
                  ) : (
                    <IoBasketballOutline className="h-6 w-6" />
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className={`${PoppinsSemiBold.className} mb-2 text-xl`}>{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
