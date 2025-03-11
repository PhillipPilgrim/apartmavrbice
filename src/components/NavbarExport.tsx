"use client";

import { PoppinsMedium} from "@/lib/fonts";
import { CISLO } from "@/utils/constant";
import "@/utils/i18n";

import { IoCallOutline } from "react-icons/io5";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoArrowDown, IoGlobeOutline } from "react-icons/io5";
import { AnimatePresence } from "motion/react";
import Image from "next/image";

export default function NavbarExport() {
	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [0, 100], [1, 0]);

	const dropdownRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const { t, i18n } = useTranslation();

	const handleClickOutside = (event: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	};

	const toggleDropdown = () => setIsOpen(!isOpen);

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<motion.nav
			style={{ opacity }}
			className={`fixed top-0 left-0 z-20 w-full px-16 py-4 ${PoppinsMedium.className}`}
		>
			<div className="relative flex items-center justify-between">
				<motion.a
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
					href={`tel:${CISLO}`}
					className="flex items-center p-1 text-[#e94629]"
				>
					<IoCallOutline className="p-1 text-4xl" />
					<span className="ml-2 text-lg">731 155 158</span>
				</motion.a>

				<div ref={dropdownRef} className="relative flex w-full items-center justify-center lg:w-auto">
					<span
						onClick={toggleDropdown}
						aria-expanded={isOpen}
						className="flex w-40 cursor-pointer items-center px-4 py-2 font-[family-name:var(--font-coahce-regular)] text-sm font-bold text-[#e94629] lg:text-base"
					>
						<div className="gap-1.5 flex items-center">
							<IoGlobeOutline className="text-3xl" />
							<p>{t("navbar.jazyk")}</p>
						</div>
						<motion.div
							animate={{ rotate: isOpen ? 180 : 0 }}
							transition={{ duration: 0.3 }}
							className="ml-1.5"
						>
							<IoArrowDown />
						</motion.div>
					</span>

					<AnimatePresence>
						{isOpen && (
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.2 }}
								className="absolute top-full z-10 mb-2 w-full bg-zinc-300/20 p-2 rounded-xl text-black shadow-md"
							>
								<button
									onClick={() => changeLanguage("cs")}
									className="flex items-center justify-start gap-2 hover:scale-105 transition-all duration-300 cursor-pointer"
								>
									<Image src={"/assets/czech-flag.png"} alt="Czech" width={35} height={35} className="opacity-80" />

									<span className="rounded-xl px-4 py-2 font-[family-name:var(--font-coahce-regular)] hover:text-[#e94629]  text-sm lg:text-base">
										{t("navbar.cz")}
									</span>
								</button>

								<button
									onClick={() => changeLanguage("en_us")}
									className="flex items-center justify-start gap-2 hover:scale-105 transition-all duration-300 cursor-pointer"
								>
									<Image src={"/assets/english-flag.png"} alt="English" width={35} height={35} className="opacity-80" />

									<span className="rounded-xl px-4 py-2 font-[family-name:var(--font-coahce-regular)] hover:text-[#e94629]  text-sm lg:text-base">
										{t("navbar.en")}
									</span>
								</button>
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				<motion.div
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
				>
					<div className="flex items-center space-x-12">
						<a
							href="/apartmany"
							className="text-white underline-offset-3 transition-all duration-300 hover:scale-110 hover:text-[#e94629] hover:underline"
						>
							<span>{t("navbar.home")}</span>
						</a>
						<a
							href="/"
							className="flex flex-col items-center justify-center transition-all duration-300 hover:scale-110"
						>
							<Image
								className="h-16 w-16"
								width={64}
								height={64}
								src="/assets/logo-small.png"
								alt="Logo"
							/>
						</a>
						<a
							href="https://www.booking.com/hotel/cz/apartma-vrbice.cs.html"
							target="_blank"
							rel="noreferrer noopener"
							className="text-white underline-offset-3 transition-all duration-300 hover:scale-110 hover:text-[#e94629] hover:underline"
						>
							{t("navbar.rezervace")}
						</a>
					</div>
				</motion.div>
			</div>
		</motion.nav>
	);
}
