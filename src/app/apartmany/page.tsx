"use client";

import { useState } from "react";
import { PoppinsSemiBold, PoppinsRegular } from "@/lib/fonts";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import Image from "next/image";

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
					width={800}
					height={600}
					className="rounded-lg w-fit h-screen"
				/>
				<IoChevronBack
					size={55}
					onClick={prevImage}
					className="absolute top-1/2 left-0 -translate-y-1/2 transform cursor-pointer text-white transition-transform duration-300 hover:scale-105"
				/>
				<IoChevronForward
					size={55}
					onClick={nextImage}
					className="absolute top-1/2 right-0 -translate-y-1/2 transform cursor-pointer text-white transition-transform duration-300 hover:scale-105"
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
	const [showSlideshow, setShowSlideshow] = useState(false);

	const deluxeImages = [
		"/assets/pictures/image-4.jpg",
		"/assets/pictures/image-2.jpg",
		"/assets/pictures/image-3.jpg",
	];

	return (
		<div className={`${PoppinsRegular.className} relative bg-black text-black`}>
			<div className="absolute inset-0">
				<Image
					src="/assets/background.webp"
					alt="Background"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					className="blur-[4px] brightness-75 filter"
				/>
			</div>

			<div className="relative z-10">
				<section className="mx-auto flex max-w-7xl flex-col gap-4 pt-44 text-center">
					<p className={`${PoppinsSemiBold.className} mb-4 text-4xl`}>Naše apartmány</p>
					<div className="mx-auto flex w-3xl flex-col items-center space-y-4 rounded-md bg-zinc-300/20 p-4 text-center">
						<p>
							Apartmá Vrbice se nachází v Bohumíně a nabízí bezplatné Wi-Fi, neplacené soukromé parkoviště
							a výhled do zahrady. Ostrava hlavní nádraží se nachází 6,5 km odtud.
						</p>
						<p>
							Všechny ubytovací jednotky mají posezení s rozkládací pohovkou, TV s plochou obrazovkou s
							kabelovými programy, kuchyň s dobrým vybavením a jídelní částí a vlastní koupelnu s
							bezplatnými toaletními potřebami. K dispozici je také lednice, trouba, mikrovlnná trouba a
							varná konvice.
						</p>
						<p>
							Národní kulturní památka Dolní oblast Vítkovice se nachází 13 km od ubytování Apartmá Vrbice
							a ZOO Ostrava 8,1 km. Letiště Leoše Janáčka Ostrava leží 29 km daleko.
						</p>
					</div>
				</section>

				<section className="flex min-h-screen w-full flex-row items-center justify-center gap-12">
					<div className="flex flex-col items-center justify-center gap-8 rounded-md bg-zinc-300/85 p-4">
						<Image
							src="/assets/pictures/apartma-1.jpg"
							alt="apartmany"
							width={400}
							height={400}
							className="h-fit w-96 rounded-lg"
						/>
						<div className="flex flex-col items-start justify-center">
							<h1 className={`${PoppinsSemiBold.className} mb-6 text-4xl`}>Apartmán s 1 ložnicí</h1>
							<p className="mb-4 w-80">
								Nabízíme ubytování v krásných apartmánech v klidné části Bohumína.
							</p>
							<p className="mb-2 text-lg">Vybavení apartmánů:</p>
							<ul className="ml-6 list-disc">
								<li>Wi-Fi</li>
								<li>TV s plochou obrazovkou</li>
								<li>Vlastní koupelna s vanou</li>
								<li>Rodinné pokoje</li>
								<li>Možnost parkování</li>
								<li>Rodinné pokoje</li>
							</ul>
						</div>
					</div>

					<div className="flex flex-col items-center justify-center gap-8 rounded-md bg-zinc-300/85 p-4">
						<Image
							onClick={() => setShowSlideshow(true)}
							src="/assets/pictures/apartma-2.jpg"
							alt="apartmany"
							width={400}
							height={400}
							className="h-fit w-96 cursor-pointer rounded-lg transition-all duration-300 hover:scale-105"
						/>
						<div className="flex flex-col items-start justify-center">
							<h1 className={`${PoppinsSemiBold.className} mb-6 text-4xl`}>Apartmán Deluxe</h1>
							<p className="mb-4 w-80">
								Nabízíme ubytování v krásných apartmánech v klidné části Bohumína.
							</p>
							<p className="mb-2 text-lg">Vybavení apartmánů:</p>
							<ul className="ml-6 list-disc">
								<li>Wi-Fi</li>
								<li>TV s plochou obrazovkou</li>
								<li>Vlastní koupelna s vanou</li>
								<li>Rodinné pokoje</li>
								<li>Možnost parkování</li>
								<li>Rodinné pokoje</li>
							</ul>
						</div>
					</div>

					<div className="flex flex-col items-center justify-center gap-8 rounded-md bg-zinc-300/85 p-4">
						<Image
							src="/assets/pictures/background-1.jpeg"
							alt="apartmany"
							width={400}
							height={400}
							className="h-64 w-fit rounded-lg"
						/>
						<div className="flex flex-col items-start justify-center">
							<h1 className={`${PoppinsSemiBold.className} mb-6 text-4xl`}>V přípravě</h1>
							<p className="mb-4 w-80">
								Nabízíme ubytování v krásných apartmánech v klidné části Bohumína.
							</p>
							<p className="mb-2 text-lg">Vybavení apartmánů:</p>
							<ul className="ml-6 list-disc">
								<li>Wi-Fi</li>
								<li>TV s plochou obrazovkou</li>
								<li>Vlastní koupelna s vanou</li>
								<li>Rodinné pokoje</li>
								<li>Možnost parkování</li>
								<li>Rodinné pokoje</li>
							</ul>
						</div>
					</div>
				</section>
			</div>



			{showSlideshow && (
				<SlideshowModal images={deluxeImages} onClose={() => setShowSlideshow(false)} />
			)}
		</div>
	);
}
