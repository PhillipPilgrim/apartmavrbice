"use client";

import { useState } from "react";
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

	const nextImage = () => setCurrentIndex(prev => (prev + 1) % images.length);
	const prevImage = () => setCurrentIndex(prev => (prev - 1 + images.length) % images.length);

	const handleOverlayClick = () => {
		onClose();
	};

	const handleContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={handleOverlayClick}>
			<div className="relative" onClick={handleContentClick}>
				<Image
					src={images[currentIndex]}
					alt={`Slide ${currentIndex + 1}`}
					width={800}
					height={600}
					className="h-screen w-fit rounded-lg"
				/>
				<IoChevronBack
					size={55}
					onClick={prevImage}
					className="absolute top-1/2 left-0 -translate-y-1/2 cursor-pointer text-white transition-transform duration-300 hover:scale-105"
				/>
				<IoChevronForward
					size={55}
					onClick={nextImage}
					className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer text-white transition-transform duration-300 hover:scale-105"
				/>
				<IoClose
					size={40}
					onClick={onClose}
					className="absolute top-0 right-0 m-2 cursor-pointer transition-transform duration-300 hover:scale-105"
				/>
			</div>
		</div>
	);
}

export default function Apartmany() {
	const [activeSlideshow, setActiveSlideshow] = useState<string | null>(null);

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

	return (
		<div className={`${PoppinsRegular.className} relative bg-black`}>
			<div className="absolute inset-0">
				<Image
					src="/assets/pictures/background-1.jpeg"
					alt="Background"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					className="blur-[4px] brightness-75 filter"
				/>
			</div>

			<div className="relative z-10">
				<section className="relative mx-auto flex max-w-7xl flex-col gap-4 px-4 pt-20 pb-12 text-center md:pt-44 md:pb-24">
					<motion.p
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className={`${PoppinsSemiBold.className} mt-12 mb-4 text-4xl text-white md:text-6xl`}
					>
						Naše apartmány
					</motion.p>
					<div className="relative mx-auto w-full max-w-3xl">
						<motion.div
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="space-y-3 rounded-md bg-zinc-300/25 p-4 text-justify text-sm md:text-base"
						>
							<p>
								<strong>Apartmá Vrbice se</strong> nachází v Bohumíně a nabízí bezplatné Wi-Fi,
								neplacené soukromé parkoviště a výhled do zahrady. Ostrava hlavní nádraží se nachází 6,5
								km odtud.
							</p>
							<p>
								<strong>Všechny ubytovací jednotky mají posezení s rozkládací pohovkou</strong>, TV s
								plochou obrazovkou s kabelovými programy, kuchyň s dobrým vybavením a jídelní částí a
								vlastní koupelnu s bezplatnými toaletními potřebami.{" "}
								<strong>K dispozici je také lednice, trouba, mikrovlnná trouba a varná konvice.</strong>
							</p>
							<p>
								Národní kulturní památka Dolní oblast Vítkovice se nachází 13 km od ubytování Apartmá
								Vrbice a ZOO Ostrava 8,1 km.{" "}
								<strong>Letiště Leoše Janáčka Ostrava leží 29 km daleko.</strong>
							</p>
						</motion.div>

						<div>
							<div className="mt-4 grid grid-cols-3 gap-4 md:hidden">
								<div className="flex flex-col items-center">
									<IoWifi
										size={50}
										className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 hover:scale-105"
									/>
									<span className="mt-1 text-md text-black">Wi-Fi Zdarma</span>
								</div>
								<div className="flex flex-col items-center">
									<IoWater
										size={50}
										className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 hover:scale-105"
									/>
									<span className="mt-1 text-md text-black">Koupelna s vanou</span>
								</div>
								<div className="flex flex-col items-center">
									<IoBonfire
										size={50}
										className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 hover:scale-105"
									/>
									<span className="mt-1 text-md text-black">Kuchyň s troubou</span>
								</div>
								<div className="flex flex-col items-center">
									<IoTv
										size={50}
										className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 hover:scale-105"
									/>
									<span className="mt-1 text-md text-black">TV s plochou</span>
								</div>
								<div className="flex flex-col items-center">
									<IoCar
										size={50}
										className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 hover:scale-105"
									/>
									<span className="mt-1 text-md text-black">Parkování</span>
								</div>
								<div className="flex flex-col items-center">
									<IoLogoNoSmoking
										size={50}
										className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 hover:scale-105"
									/>
									<span className="mt-1 text-md text-black">Nekuřácké</span>
								</div>
							</div>

							<motion.div
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.6 }}
								className="absolute top-1/2 left-[-68px] hidden -translate-y-1/2 flex-col items-center gap-4 md:flex"
							>
								<div className="group relative flex flex-col items-center">
									<IoWifi
										size={70}
										className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 group-hover:scale-105"
									/>
									<span className="absolute right-full mr-2 hidden rounded bg-gray-300 px-2 py-1 text-md text-black group-hover:block">
										Wi-Fi Zdarma
									</span>
								</div>
								<div className="group relative flex flex-col items-center">
									<IoWater
										size={70}
										className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 group-hover:scale-105"
									/>
									<span className="absolute right-full mr-2 hidden rounded bg-gray-300 px-2 py-1 text-md text-black group-hover:block">
										Koupelna s vanou
									</span>
								</div>
								<div className="group relative flex flex-col items-center">
									<IoBonfire
										size={70}
										className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 group-hover:scale-105"
									/>
									<span className="absolute right-full mr-2 hidden rounded bg-gray-300 px-2 py-1 text-md text-black group-hover:block">
										Kuchyň s troubou
									</span>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.6 }}
								className="absolute top-1/2 right-[-68px] hidden -translate-y-1/2 flex-col items-center gap-4 md:flex"
							>
								<div className="group relative flex flex-col items-center">
									<IoTv
										size={70}
										className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 group-hover:scale-105"
									/>
									<span className="absolute left-full ml-2 hidden rounded bg-gray-300 px-2 py-1 text-md text-black group-hover:block">
										TV s plochou
									</span>
								</div>
								<div className="group relative flex flex-col items-center">
									<IoCar
										size={70}
										className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 group-hover:scale-105"
									/>
									<span className="absolute left-full ml-2 hidden rounded bg-gray-300 px-2 py-1 text-md text-black group-hover:block">
										Parkování
									</span>
								</div>
								<div className="group relative flex flex-col items-center">
									<IoLogoNoSmoking
										size={70}
										className="border-3 border-[#e94629] p-1 text-[#e94629] transition-transform duration-300 group-hover:scale-105"
									/>
									<span className="absolute left-full ml-2 hidden rounded bg-gray-300 px-2 py-1 text-md text-black group-hover:block">
										Nekuřácké
									</span>
								</div>
							</motion.div>
						</div>
					</div>
				</section>

				<section className="flex w-full flex-col items-start justify-center gap-12 px-4 pb-12 md:flex-row">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="flex flex-col items-center justify-center rounded-md bg-zinc-300/85 p-4"
					>
						<div className="relative transition-all duration-300 hover:scale-105">
							<Image
								onClick={() => setActiveSlideshow("oneBedroom")}
								src="/assets/pictures/apartma-1.jpg"
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
						<div className="mt-4 flex flex-col items-start justify-center">
							<h1 className={`${PoppinsSemiBold.className} mb-6 text-2xl text-[#e94629] md:text-4xl`}>
								Apartmán s 1 ložnicí
							</h1>
							<p className="mb-4 w-80 text-sm md:text-base">
								Nabízíme ubytování v krásných apartmánech v klidné části Bohumína.
							</p>
							<p className={`${PoppinsSemiBold.className} mb-2 text-lg`}>Vybavení apartmánů:</p>
							<ul className="ml-6 list-disc text-xs md:text-sm">
								<li>
									<strong>Ložnice</strong>: 2 jednolůžkové postele
								</li>
								<li>
									<strong>Obývací pokoj</strong>: Rozkládací pohovka
								</li>
								<li>
									<strong>Velikost apartmánu</strong>: 45m²
								</li>
								<li>Pohodlné postele</li>
							</ul>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
						className="flex flex-col items-center justify-center rounded-md bg-zinc-300/85 p-4"
					>
						<div className="relative transition-all duration-300 hover:scale-105">
							<Image
								onClick={() => setActiveSlideshow("deluxe")}
								src="/assets/pictures/apartman-deluxe.jpeg"
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
						<div className="mt-4 flex flex-col items-start justify-center">
							<h1 className={`${PoppinsSemiBold.className} mb-6 text-2xl text-[#e94629] md:text-4xl`}>
								Apartmán Deluxe
							</h1>
							<p className="mb-4 w-80 text-sm md:text-base">
								Nabízíme ubytování v krásných apartmánech v klidné části Bohumína.
							</p>
							<p className={`${PoppinsSemiBold.className} mb-2 text-lg`}>Vybavení apartmánů:</p>
							<ul className="ml-6 list-disc text-xs md:text-sm">
								<li>
									<strong>Obývací pokoj</strong>: Rozkládací pohovka
								</li>
								<li>
									<strong>První ložnice</strong>: 2 jednolůžkové postele
								</li>
								<li>
									<strong>Druhá ložnice</strong>: 2 jednolůžkové postele
								</li>
								<li>
									<strong>Velikost apartmánu</strong>: 65 m²
								</li>
								<li>Pohodlné postele</li>
							</ul>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="flex flex-col items-center justify-center rounded-md bg-zinc-300/85 p-4"
					>
						<div className="relative transition-all duration-300 hover:scale-105">
							<Image
								onClick={() => setActiveSlideshow("vpriprav")}
								src="/assets/pictures/background-1.jpeg"
								alt="apartmany"
								width={400}
								height={400}
								className="h-64 w-fit cursor-pointer rounded-lg"
							/>
							<IoAlbums
								size={40}
								className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 p-2 text-[#e94629]"
							/>
						</div>
						<div className="mt-4 flex flex-col items-start justify-center">
							<h1 className={`${PoppinsSemiBold.className} mb-6 text-2xl text-[#e94629] md:text-4xl`}>
								V přípravě
							</h1>
							<p className="mb-4 w-80 text-sm md:text-base">
								Nabízíme ubytování v krásných apartmánech v klidné části Bohumína.
							</p>
							<p className={`${PoppinsSemiBold.className} mb-2 text-lg`}>Vybavení apartmánů:</p>
							<ul className="ml-6 list-disc text-xs md:text-sm">
								<li>V přípravě</li>
							</ul>
						</div>
					</motion.div>
				</section>
				<section className="px-4">
					<div className="flex w-full flex-col items-start justify-center gap-12 pb-12 md:flex-row">
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="flex flex-col items-center justify-center gap-8 rounded-md bg-zinc-300/85 p-4"
						>
							<div className="flex flex-col items-start justify-center">
								<h1 className={`${PoppinsSemiBold.className} mb-6 text-3xl text-[#e94629]`}>
									Pobytový balíček „Relax ve Vrbici“
								</h1>
								<p className={`${PoppinsSemiBold.className} mb-4 w-80 text-lg`}>Co balíček zahrnuje:</p>
								<ul className="ml-6 list-disc">
									<li>
										Ubytování na <strong>3 noci pro 2 osoby v Apartmán s 1 ložnicí</strong>
									</li>
									<li>
										Relaxační <strong>masáž pro dva</strong> (60 minut/osoba)
									</li>
									<li>
										<strong>20% sleva</strong> na jednu z aktivit:
									</li>
									<ul className="ml-6 list-decimal">
										<li>Vstup do Zoo Ostrava</li>
										<li>Prohlídka industriálního areálu Dolní oblast Vítkovice</li>
										<li>Alternativně jiná místní atrakce dle výběru</li>
									</ul>
								</ul>

								<p className="mt-4 text-lg">
									<strong>Cena balíčku po slevě: 5 242 Kč</strong>
								</p>
								<p className="text-sm">Běžná cena bez akčního balíčku: 6 380 Kč</p>
								<p className="mt-4">
									<strong>
										Máte-li zájem využívejte rezervace skrze telefon:{" "}
										<a href={`tel:${CISLO}`} className="text-[#e94629]">
											731 155 158
										</a>
									</strong>
								</p>
							</div>
						</motion.div>
					</div>
				</section>
			</div>

			{activeSlideshow && <SlideshowModal images={modalImages} onClose={() => setActiveSlideshow(null)} />}
		</div>
	);
}
