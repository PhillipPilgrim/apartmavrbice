"use client"

import { PoppinsSemiBold } from "@/lib/fonts";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Image from "next/image";

export default function NotFound() {
    const { t } = useTranslation();

    return (
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
            className="flex items-center gap-4 flex-col"
          >
            <p
              className={`text-center text-6xl text-white lg:text-9xl ${PoppinsSemiBold.className}`}
            >
              {t("error.num")}
            </p>
            <p
              className={`text-center text-3xl text-[#e94629] lg:text-5xl ${PoppinsSemiBold.className}`}
            >
              {t("error.title")}
            </p>
          </motion.div>
        </div>
        </section>
    );
}