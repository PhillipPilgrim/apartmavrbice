"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { PoppinsSemiBold, PoppinsRegular, PoppinsMedium } from "@/lib/fonts";
import {
  IoClose,
  IoChevronBack,
  IoChevronForward,
  IoWifi,
  IoWater,
  IoBonfire,
  IoTv,
  IoCar,
  IoLogoNoSmoking,
  IoAlbums,
} from "react-icons/io5";
import Image from "next/image";
import { motion } from "motion/react";
import { CISLO } from "@/utils/constant";

interface SlideshowModalProps {
  images: string[];
  onClose: () => void;
}

function SlideshowModal({ images, onClose }: SlideshowModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={handleOverlayClick}
    >
      <div className="relative" onClick={handleContentClick}>
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={1200}
          height={100}
          className="h-full w-4xl rounded-2xl px-2"
        />
        <IoChevronBack
          onClick={prevImage}
          className="absolute top-1/2 left-0 -translate-y-1/2 cursor-pointer text-4xl text-white transition-transform duration-300 hover:scale-105 md:text-6xl"
        />
        <IoChevronForward
          onClick={nextImage}
          className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer text-4xl text-white transition-transform duration-300 hover:scale-105 md:text-6xl"
        />
        <IoClose
          onClick={onClose}
          className="absolute top-0 right-0 m-2 cursor-pointer text-4xl transition-transform duration-300 hover:scale-105 md:text-5xl"
        />
      </div>
    </div>
  );
}

export default function Apartmany() {
  // Always call hooks at the top level
  const { t } = useTranslation();
  const [activeSlideshow, setActiveSlideshow] = useState<string | null>(null);

  // Client mount flag
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const oneBedroomImages = [
    "/assets/pictures/image-5.jpg",
    "/assets/pictures/image-6.jpg",
    "/assets/pictures/image-7.jpg",
    "/assets/pictures/image-8.jpg",
  ];
  const deluxeImages = [
    "/assets/pictures/image-4.jpg",
    "/assets/pictures/image-2.jpg",
    "/assets/pictures/image-3.jpg",
    "/assets/pictures/image-1.jpg",
  ];
  const vPripravImages = [
    "/assets/pictures/vpriprav-1.jpg",
    "/assets/pictures/vpriprav-2.jpg",
    "/assets/pictures/vpriprav-3.jpg",
  ];

  let modalImages: string[] = [];
  if (activeSlideshow === "oneBedroom") {
    modalImages = oneBedroomImages;
  } else if (activeSlideshow === "deluxe") {
    modalImages = deluxeImages;
  } else if (activeSlideshow === "vpriprav") {
    modalImages = vPripravImages;
  }

  // Render nothing until mounted to ensure consistency between SSR and client
  if (!mounted) return null;

  return (
    <div className={`${PoppinsRegular.className} relative bg-black`}>
      <div className="absolute inset-0">
        <Image
          src="/assets/pictures/background-1.jpeg"
          alt="Background"
          fill
          className="object-cover object-center blur-[4px] brightness-75"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <section className="flex flex-col items-center gap-4 pt-20 pb-12 text-center md:pt-44 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${PoppinsSemiBold.className} mt-12 mb-4 text-4xl text-white md:text-6xl`}
          >
            {t("apartments.title")}
          </motion.p>

          <div className="relative mx-auto w-full max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3 rounded-md bg-zinc-300/25 p-4 text-justify text-sm md:text-base"
            >
              <div className="space-y-3" dangerouslySetInnerHTML={{ __html: t("apartments.description") }} />
            </motion.div>

            <div className="mt-4 grid grid-cols-3 gap-4 lg:hidden">
              <div className="flex flex-col items-center">
                <IoWifi
                  size={50}
                  className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 hover:scale-105"
                />
                <span className="text-md mt-1 text-black">{t("about.wifi")}</span>
              </div>
              <div className="flex flex-col items-center">
                <IoWater
                  size={50}
                  className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 hover:scale-105"
                />
                <span className="text-md mt-1 text-black">{t("about.bathroom")}</span>
              </div>
              <div className="flex flex-col items-center">
                <IoBonfire
                  size={50}
                  className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 hover:scale-105"
                />
                <span className="text-md mt-1 text-black">{t("about.kitchen")}</span>
              </div>
              <div className="flex flex-col items-center">
                <IoTv
                  size={50}
                  className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 hover:scale-105"
                />
                <span className="text-md mt-1 text-black">{t("about.tv")}</span>
              </div>
              <div className="flex flex-col items-center">
                <IoCar
                  size={50}
                  className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 hover:scale-105"
                />
                <span className="text-md mt-1 text-black">{t("about.parking")}</span>
              </div>
              <div className="flex flex-col items-center">
                <IoLogoNoSmoking
                  size={50}
                  className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 hover:scale-105"
                />
                <span className="text-md mt-1 text-black">{t("about.smoking")}</span>
              </div>
            </div>

            {/* Tooltips for larger screens */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-1/2 left-[-68px] hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex"
            >
              <div className="group relative flex flex-col items-center">
                <IoWifi
                  size={70}
                  className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-md absolute right-full mr-2 hidden rounded w-24 bg-gray-300 px-2 py-1 text-black group-hover:block">
                  {t("about.wifi")}
                </span>
              </div>
              <div className="group relative flex flex-col items-center">
                <IoWater
                  size={70}
                  className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-md absolute right-full mr-2 hidden rounded bg-gray-300 px-2 py-1 text-black group-hover:block">
                  {t("about.bathroom")}
                </span>
              </div>
              <div className="group relative flex flex-col items-center">
                <IoBonfire
                  size={70}
                  className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-md absolute right-full mr-2 hidden rounded bg-gray-300 px-2 py-1 text-black group-hover:block">
                  {t("about.kitchen")}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-1/2 right-[-68px] hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex"
            >
              <div className="group relative flex flex-col items-center">
                <IoTv
                  size={70}
                  className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-md absolute left-full ml-2 hidden rounded bg-gray-300 px-2 py-1 w-28 text-black group-hover:block">
                  {t("about.tv")}
                </span>
              </div>
              <div className="group relative flex flex-col items-center">
                <IoCar
                  size={70}
                  className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-md absolute left-full ml-2 hidden rounded bg-gray-300 px-2 py-1 text-black group-hover:block">
                  {t("about.parking")}
                </span>
              </div>
              <div className="group relative flex flex-col items-center">
                <IoLogoNoSmoking
                  size={70}
                  className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-md absolute left-full ml-2 hidden rounded bg-gray-300 w-32 px-2 py-1 text-black group-hover:block">
                  {t("about.smoking")}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:items-start">
          {/* Apartmán s 1 ložnicí */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex w-full flex-col items-center justify-center rounded-md bg-zinc-300/85 p-4 sm:w-[400px]"
          >
            <div className="relative transition-all duration-300 hover:scale-105">
              <Image
                onClick={() => setActiveSlideshow("oneBedroom")}
                src="/assets/pictures/image-7.jpg"
                alt="apartmany"
                width={400}
                height={400}
                className="h-fit w-fit cursor-pointer rounded-lg"
              />
              <IoAlbums
                size={40}
                className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 p-2 text-[#e94629]"
              />
            </div>
            <div className="mt-4 flex flex-col justify-center">
              <div className="flex items-center justify-center">
                <h1 className={`${PoppinsSemiBold.className} mb-6 text-2xl text-[#e94629] xl:text-3xl`}>
                  {t("apartments.oneBedroom.title")}
                </h1>
              </div>
              <p className="mb-4 w-80 text-sm md:text-base">{t("apartments.oneBedroom.description")}</p>
              <p className={`${PoppinsSemiBold.className} mb-2 text-lg`}>
                {t("apartments.equipment.title")}
              </p>
              <ul className="ml-6 list-disc text-xs md:text-sm">
                {(t("apartments.oneBedroom.features", { returnObjects: true }) as string[]).map(
                  (feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  )
                )}
              </ul>
            </div>
          </motion.div>

          {/* Apartmán Deluxe */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex w-full flex-col items-center justify-center rounded-md bg-zinc-300/85 p-4 sm:w-[400px]"
          >
            <div className="relative transition-all duration-300 hover:scale-105">
              <Image
                onClick={() => setActiveSlideshow("deluxe")}
                src="/assets/pictures/image-4.jpg"
                alt="apartmany"
                width={400}
                height={400}
                className="h-fit w-96 cursor-pointer rounded-lg"
              />
              <IoAlbums
                size={40}
                className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 p-2 text-[#e94629]"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <div className="flex items-center justify-center">
                <h1 className={`${PoppinsSemiBold.className} mb-6 text-2xl text-[#e94629] xl:text-3xl`}>
                  {t("apartments.deluxe.title")}
                </h1>
              </div>
              <p className="mb-4 w-80 text-sm md:text-base">{t("apartments.deluxe.description")}</p>
              <p className={`${PoppinsSemiBold.className} mb-2 text-lg`}>
                {t("apartments.equipment.title")}
              </p>
              <ul className="ml-6 list-disc text-xs md:text-sm">
                {(t("apartments.deluxe.features", { returnObjects: true }) as string[]).map(
                  (feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  )
                )}
              </ul>
            </div>
          </motion.div>

          {/* V přípravě */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex w-full flex-col items-center justify-center rounded-md bg-zinc-300/85 p-4 sm:w-[400px]"
          >
            <div className="relative transition-all duration-300 hover:scale-105">
              <Image
                onClick={() => setActiveSlideshow("vpriprav")}
                src="/assets/pictures/image-8.jpg"
                alt="apartmany"
                width={400}
                height={400}
                className="h-fit w-96 cursor-pointer rounded-lg"
              />
              <IoAlbums
                size={40}
                className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 p-2 text-[#e94629]"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <div className="flex items-center justify-center">
                <h1 className={`${PoppinsSemiBold.className} mb-6 text-2xl text-[#e94629] xl:text-3xl`}>
                  {t("apartments.vpriprav.title")}
                </h1>
              </div>
              <p className="mb-4 w-80 text-sm md:text-base">{t("apartments.vpriprav.description")}</p>
              <p className={`${PoppinsSemiBold.className} mb-2 text-lg`}>
                {t("apartments.equipment.title")}
              </p>
              <ul className="ml-6 list-disc text-xs md:text-sm">
                {(t("apartments.vpriprav.features", { returnObjects: true }) as string[]).map(
                  (feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  )
                )}
              </ul>
            </div>
          </motion.div>
        </section>

        <section className="pb-12 pt-8">
          <div className="flex w-full flex-col items-start justify-center gap-12 md:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center justify-center gap-8 rounded-md bg-zinc-300/85 p-4"
            >
              <div className="flex flex-col items-start justify-center">
                <h1 className={`${PoppinsSemiBold.className} mb-6 text-3xl text-[#e94629]`}>
                  {t("apartments.package.title")}
                </h1>
                <p className={`${PoppinsSemiBold.className} mb-4 w-80 text-lg`}>
                  {t("apartments.package.description")}
                </p>
                <ul className="ml-6 list-disc">
                  {(t("apartments.package.details", { returnObjects: true }) as string[]).map(
                    (detail: string, index: number) => (
                      <li key={index}>{detail}</li>
                    )
                  )}
                </ul>

                <p className="mt-4 text-lg">
                  <strong>{t("apartments.package.priceDiscounted")}</strong>
                </p>
                <p className="text-sm">{t("apartments.package.priceRegular")}</p>
                <p className="mt-4">
                  <strong>
                    {t("apartments.package.reservation")}{" "}
                    <a href={`tel:${CISLO}`} className="text-[#e94629]">
                      {CISLO}
                    </a>
                  </strong>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {activeSlideshow && (
        <SlideshowModal
          images={modalImages}
          onClose={() => setActiveSlideshow(null)}
        />
      )}
    </div>
  );
}
