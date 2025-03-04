"use client";

import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent } from "react";
import { PoppinsSemiBold, PoppinsMedium, PoppinsRegular, PoppinsLight, PoppinsThin } from "@/lib/fonts";
import { EMAIL, CISLO } from "@/utils/constant";
import "@/i18n";

import { IoCallOutline, IoMailOutline, IoArrowDown, IoBookmarkOutline, IoCheckmark } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import "i18next";

export default function Home() {
	return (
		<div className={`${PoppinsSemiBold.className} text-black`}>
			<section className="flex min-h-screen w-full flex-col items-center justify-center">
				<Image
					src="/assets/pictures/background-1.jpeg"
					alt="Banner"
					fill={true}
					className="z-0 bg-black object-cover shadow-lg shadow-black blur-[2px]"
					priority={true}
				/>
				<div className="z-10 flex flex-col items-center gap-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="flex items-center gap-4"
					>
						<p className={`text-center text-2xl text-white md:text-7xl ${PoppinsSemiBold.className}`}>
							Apartma Vrbice
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<a
							href={`tel:${CISLO}`}
							className="mt-6 flex w-fit items-center justify-center border-4 border-[#e94629] p-2 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:border-[#e94629] hover:text-[#e94629]"
						>
							<p>Naše apartmány</p>
						</a>
					</motion.div>
				</div>
			</section>

			<section className="flex min-h-screen w-full flex-row items-center justify-center gap-24 bg-white">
				<motion.div
					className="w-1/3 text-black"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					<p className="text-center text-2xl md:text-2xl">Proč si vybrat náš Apartmán?</p>
					<p className="text-md mt-4 text-justify">
						Hledáte místo, kde si odpočinete v klidu, ale zároveň oceníte skvělou dopravní dostupnost?
						Apartmá Vrbice se nachází v ideální lokalitě přímo u dálnice mezi Ostravou a Bohumínem.
						Perfektní volba pro cestovatele, pracovní pobyty i delší dovolené!
					</p>
					<ul className="mt-4">
						<li className="flex items-center gap-2">
							<IoCheckmark className="text-[#e94629]" />
							<span>Moderní a útulné apartmány – Plně vybavené pro vaše maximální pohodlí.</span>
						</li>
						<li className="flex items-center gap-2">
							<IoCheckmark className="text-[#e94629]" />
							<span>Tichá a klidná lokalita – Relaxujte mimo rušné centrum měst.</span>
						</li>
						<li className="flex items-center gap-2">
							<IoCheckmark className="text-[#e94629] shrink-0" />
							<p>Výborná dostupnost – Nacházíme se jen pár minut od sjezdu z dálnice D1 mezi Ostravou a Bohumínem.</p>
						</li>
						<li className="flex items-center gap-2">
							<IoCheckmark className="text-[#e94629]" />
							<span>Vlastní kuchyňka – Ideální pro přípravu jídel během vašeho pobytu.</span>
						</li>
						<li className="flex items-center gap-2">
							<IoCheckmark className="text-[#e94629]" />
							<span>Wi-Fi zdarma – Zůstaňte online pro práci nebo zábavu.</span>
						</li>
						<li className="flex items-center gap-2">
							<IoCheckmark className="text-[#e94629]" />
							<span>Blízko přírody – Skvělý výchozí bod pro výlety a relaxaci.</span>
						</li>
					</ul>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className="relative flex flex-row items-center justify-center"
				>
					<Image
						src="/assets/pictures/image-1.jpg"
						alt="Banner"
						width={1000}
						height={1000}
						className="h-fit w-72 shadow-lg"
						priority={true}
					/>
					<Image
						src="/assets/pictures/image-2.jpg"
						alt="Banner"
						width={1000}
						height={1000}
						className="absolute right-0 mb-12 h-fit w-72 translate-x-68 shadow-lg"
						priority={true}
					/>
				</motion.div>
			</section>
		</div>
	);
}
