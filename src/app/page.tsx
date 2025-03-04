"use client";

import { useState, useRef, useEffect } from "react";
import { PoppinsSemiBold, PoppinsMedium, PoppinsRegular, PoppinsLight, PoppinsThin } from "@/lib/fonts";
import { EMAIL, CISLO } from "@/utils/constant";
import "@/i18n";

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
import { AnimatePresence, motion, useScroll } from "motion/react";
import Image from "next/image";
import "i18next";

export default function Home() {
	const aboutRef = useRef<HTMLDivElement>(null);

	const scrollToAbout = () => {
		if (aboutRef.current) {
			aboutRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className={`${PoppinsRegular.className} text-black`}>
			{/* Hero Section */}
			<section className="relative flex min-h-screen w-full flex-col items-center justify-center">
				<Image
					src="/assets/pictures/background-1.jpeg"
					alt="Banner"
					fill={true}
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
						<p className={`text-center text-2xl text-white md:text-7xl ${PoppinsSemiBold.className}`}>
							Apartmá Vrbice
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
					<span className="sr-only">Scroll Down</span>
				</motion.div>
			</section>

			{/* About Section */}
			<section
				ref={aboutRef}
				className={`${PoppinsRegular.className} md:0 mx-auto mt-12 flex min-h-screen w-full flex-col items-center justify-center gap-6 pr-0 md:flex-row md:pr-72`}
			>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className="flex w-full flex-col px-4 md:w-1/2"
				>
					<p className={`${PoppinsSemiBold.className} text-center text-2xl text-[#e94629]`}>Proč si vybrat náš Apartmán?</p>
					<p className="md:text-md mt-4 text-justify text-sm">
						Hledáte místo, kde si odpočinete v klidu, ale zároveň oceníte skvělou dopravní dostupnost?
						Apartmá Vrbice se nachází v ideální lokalitě přímo u dálnice mezi Ostravou a Bohumínem.
						Perfektní volba pro cestovatele, pracovní pobyty i delší dovolené!
					</p>
					<p className={`${PoppinsSemiBold.className} mt-4 text-lg text-[#e94629]`}>Co vám Apartmá Vrbice nabízí:</p>
					<motion.ul
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
						viewport={{ once: true }}
						className="mt-2 items-start space-y-1 text-justify text-[14px]"
					>
						<li className="flex gap-2">
							<IoCheckmark className="shrink-0 text-[#e94629]" />
							<span>Moderní a útulné apartmány – Plně vybavené pro vaše maximální pohodlí.</span>
						</li>
						<li className="flex gap-2">
							<IoCheckmark className="shrink-0 text-[#e94629]" />
							<span>Tichá a klidná lokalita – Relaxujte mimo rušné centrum měst.</span>
						</li>
						<li className="flex gap-2">
							<IoCheckmark className="shrink-0 text-[#e94629]" />
							<p>
								Výborná dostupnost – Nacházíme se jen pár minut od sjezdu z dálnice D1 mezi Ostravou a
								Bohumínem.
							</p>
						</li>
						<li className="flex gap-2">
							<IoCheckmark className="shrink-0 text-[#e94629]" />
							<span>Vlastní kuchyňka – Ideální pro přípravu jídel během vašeho pobytu.</span>
						</li>
						<li className="flex gap-2">
							<IoCheckmark className="shrink-0 text-[#e94629]" />
							<span>Wi-Fi zdarma – Zůstaňte online pro práci nebo zábavu.</span>
						</li>
						<li className="flex gap-2">
							<IoCheckmark className="shrink-0 text-[#e94629]" />
							<span>Blízko přírody – Skvělý výchozí bod pro výlety a relaxaci.</span>
						</li>
					</motion.ul>
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						viewport={{ once: true }}
					>
						<p className={`${PoppinsSemiBold.className} mt-4 text-lg text-[#e94629]`}>Proč zvolit Apartmá Vrbice:</p>
						<ul className="mt-2 items-start space-y-1 text-justify text-[14px]">
							<li className="flex gap-2">
								<IoAdd className="shrink-0 text-[#e94629]" />
								<span>
									Strategická poloha – Perfektní spojení mezi Ostravou a Bohumínem, s rychlým
									přístupem na dálnici.
								</span>
							</li>
							<li className="flex gap-2">
								<IoAdd className="shrink-0 text-[#e94629]" />
								<span>Snadné parkování – Pohodlné parkování přímo u apartmánu.</span>
							</li>
							<li className="flex gap-2">
								<IoAdd className="shrink-0 text-[#e94629]" />
								<p>
									Klid a soukromí – Užijte si pobyt daleko od městského ruchu, a přitom na dosah všem
									důležitým místům.
								</p>
							</li>
							<li className="flex gap-2">
								<IoAdd className="shrink-0 text-[#e94629]" />
								<span>
									Blízkost aktivit – Kousek od přírody, městských center i kulturních památek.
								</span>
							</li>
							<li className="flex gap-2">
								<IoAdd className="shrink-0 text-[#e94629]" />
								<span>
									Ideální poloha: Apartmá Vrbice se nachází přímo u dálnice D1, mezi Ostravou a
									Bohumínem – ideální volba pro ty, kteří hledají pohodlí a rychlou dostupnost.
								</span>
							</li>
						</ul>
						<p className={`${PoppinsSemiBold.className} mt-4 text-[#e94629]`}>
							Rezervujte si svůj pobyt ještě dnes a zažijte kombinaci komfortu, klidu a skvělé polohy v
							Apartmá Vrbice!
						</p>
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 1 }}
					viewport={{ once: true }}
					className="mt-12 hidden h-[500px] w-[1px] bg-black md:block"
				/>
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 1 }}
					viewport={{ once: true }}
					className="relative mt-12 flex flex-col items-center justify-center md:flex-row"
				>
					<Image
						src="/assets/pictures/image-8.jpg"
						alt="Banner"
						width={1000}
						height={1000}
						className="h-fit w-full px-4 shadow-lg md:w-84 md:px-0"
						priority={true}
					/>
					<Image
						src="/assets/pictures/image-7.jpg"
						alt="Banner"
						width={1000}
						height={1000}
						className="absolute right-0 mb-12 hidden h-fit w-full translate-x-76 shadow-lg md:flex md:w-84"
						priority={true}
					/>
				</motion.div>
			</section>

			{/* What You Can Do Section */}
			<section
				className={`${PoppinsRegular.className} w-full items-center justify-center gap-24 mt-24 px-4 pb-36 md:px-48`}
			>
				<p className={`${PoppinsSemiBold.className} text-center text-2xl`}>A co u nás lze dělat?</p>

				<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
						className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
					>
						<div className="relative h-48 w-full">
							<Image
								src="/assets/grids/castle.jpg"
								alt="Banner"
								layout="fill"
								objectPosition="bottom"
								objectFit="cover"
								className="rounded-t-lg"
							/>
							<div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#000000]/30 text-[#e94629]">
								<IoMapSharp className="h-6 w-6 text-[#e94629]" />
							</div>
						</div>
						<div className="p-6">
							<h3 className={`${PoppinsSemiBold.className} mb-2 text-xl`}>Kulturní památky</h3>
							<p className="text-gray-600">
								Objevte bohatou historii regionu návštěvou blízkých kulturních památek, muzeí a galerií
								v Ostravě a okolí.
							</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
					>
						<div className="relative h-48 w-full">
							<Image
								src="/assets/grids/cyklo.jpg"
								alt="Banner"
								layout="fill"
								objectPosition="center"
								objectFit="cover"
								className="rounded-t-lg"
							/>
							<div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#000000]/30 text-[#e94629]">
								<IoBicycle className="h-6 w-6 text-[#e94629]" />
							</div>
						</div>
						<div className="p-6">
							<h3 className={`${PoppinsSemiBold.className} mb-2 text-xl`}>Cykloturistika</h3>
							<p className="text-gray-600">
								Projeďte se po četných cyklostezkách v okolí. Oblast nabízí trasy různé obtížnosti pro
								začátečníky i zkušené cyklisty.
							</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						viewport={{ once: true }}
						className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
					>
						<div className="relative h-48 w-full">
							<Image
								src="/assets/grids/gastro.jpg"
								alt="Banner"
								layout="fill"
								objectPosition="center"
								objectFit="cover"
								className="rounded-t-lg"
							/>
							<div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#000000]/30 text-[#e94629]">
								<IoFastFoodOutline className="h-6 w-6 text-[#e94629]" />
							</div>
						</div>
						<div className="p-6">
							<h3 className={`${PoppinsSemiBold.className} mb-2 text-xl`}>Gastronomie</h3>
							<p className="text-gray-600">
								Ochutnejte místní speciality v okolních restauracích a hospůdkách. Region je známý svou
								bohatou kulinářskou tradicí.
							</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}
						className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
					>
						<div className="relative h-48 w-full">
							<Image
								src="/assets/grids/walking.jpg"
								alt="Banner"
								layout="fill"
								objectPosition="center"
								objectFit="cover"
								className="rounded-t-lg"
							/>
							<div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#000000]/30 text-[#e94629]">
								<IoWalk className="h-6 w-6 text-[#e94629]" />
							</div>
						</div>

						<div className="p-6">
							<h3 className={`${PoppinsSemiBold.className} mb-2 text-xl`}>Pěší turistika</h3>
							<p className="text-gray-600">
								Vydejte se na procházky přírodou v okolí Vrbice. Objevte krásné stezky a vyhlídky s
								panoramatickými výhledy na krajinu.
							</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						viewport={{ once: true }}
						className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
					>
						<div className="relative h-48 w-full">
							<Image
								src="/assets/grids/shopping.jpg"
								alt="Banner"
								layout="fill"
								objectPosition="center"
								objectFit="cover"
								className="rounded-t-lg"
							/>
							<div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#000000]/30 text-[#e94629]">
								<IoStorefrontOutline className="h-6 w-6 text-[#e94629]" />
							</div>
						</div>
						<div className="p-6">
							<h3 className={`${PoppinsSemiBold.className} mb-2 text-xl`}>Nákupy</h3>
							<p className="text-gray-600">
								Navštivte nákupní centra v Ostravě nebo místní obchůdky s regionálními produkty. Ideální
								pro milovníky nakupování.
							</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						viewport={{ once: true }}
						className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
					>
						<div className="relative h-48 w-full">
							<Image
								src="/assets/grids/sport.jpg"
								alt="Banner"
								layout="fill"
								objectPosition="center"
								objectFit="cover"
								className="rounded-t-lg"
							/>
							<div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#000000]/30 text-[#e94629]">
								<IoBasketballOutline className="h-6 w-6 text-[#e94629]" />
							</div>
						</div>
						<div className="p-6">
							<h3 className={`${PoppinsSemiBold.className} mb-2 text-xl`}>Sportovní aktivity</h3>
							<p className="text-gray-600">
								Využijte blízká sportovní zařízení - tenisové kurty, bazény, fitness centra a další
								možnosti pro aktivní odpočinek.
							</p>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
