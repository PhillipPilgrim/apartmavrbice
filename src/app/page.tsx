"use client";

import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent } from "react";
import { PoppinsRegular, PoppinsSemiBold } from "@/lib/fonts";
import { EMAIL, CISLO } from "@/utils/constant";
import "@/i18n";

import { IoCallOutline, IoMailOutline, IoArrowDown, IoBookmarkOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import "i18next";

export default function Home() {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);

		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	if (!mounted) return null;

	const toggleDropdown = () => {
		setIsOpen(prev => !prev);
	};

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div
			className={`${PoppinsSemiBold.className} flex min-h-screen flex-col items-center justify-center gap-16 px-6 text-white`}
		>
			<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
				<Image
					src="/assets/logo.png"
					alt="logo"
					width={400}
					height={400}
					priority={true}
					className="h-auto w-auto md:h-auto md:w-auto"
				/>
			</motion.div>

			{/* Grouping language-dependent animations inside one parent */}
			<AnimatePresence mode="wait">
				<motion.div
					key={`lang-${i18n.language}`}
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -30 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<div className="text-center text-2xl md:text-4xl">{t("title")}</div>
					<div className="mt-16 text-start">
						<p className={`${PoppinsRegular.className} text-md md:text-lg`}>{t("desc")}</p>
					</div>
					<div className={`${PoppinsRegular.className} mt-4 flex flex-col items-start gap-6 md:flex-col`}>
						<Link
							href={`tel:${CISLO}`}
							className="group flex items-center justify-center gap-2 transition-all duration-300 hover:scale-110"
						>
							<IoCallOutline
								size={45}
								className="rounded-full border-2 border-white p-2 text-white group-hover:border-[#e84435] group-hover:text-[#e84435]"
							/>
							<p className="text-center group-hover:text-[#e84435]">731 155 158</p>
						</Link>
						<Link
							href={`mailto:${EMAIL}`}
							className="group flex items-center justify-center gap-2 transition-all duration-300 hover:scale-110"
						>
							<IoMailOutline
								size={45}
								className="rounded-full border-2 border-white p-2 text-white group-hover:border-[#e84435] group-hover:text-[#e84435]"
							/>
							<p className="text-center group-hover:text-[#e84435]">apatrmavrbice@gmail.com</p>
						</Link>
						<Link
							href="https://www.booking.com/hotel/cz/apartma-vrbice.cs.html"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center justify-center gap-2 transition-all duration-300 hover:scale-110"
						>
							<IoBookmarkOutline
								size={45}
								className="rounded-full border-2 border-white p-2 text-white group-hover:border-[#e84435] group-hover:text-[#e84435]"
							/>
							<p className="text-center group-hover:text-[#e84435]">{t("booking")}</p>
						</Link>
					</div>
				</motion.div>
			</AnimatePresence>

			{/* Language dropdown remains outside the grouped animations */}
			<motion.div
				key="dropdown"
				ref={dropdownRef}
				className="absolute bottom-5 left-25 flex w-45 items-center justify-center rounded-xl bg-[#383838] px-2 hover:bg-zinc-800/80 md:bottom-6 md:left-20 md:w-48"
			>
				<span
					onClick={toggleDropdown}
					aria-expanded={isOpen}
					className="flex cursor-pointer items-center px-4 py-2 font-[family-name:var(--font-coahce-regular)] text-sm font-bold text-white lg:text-base"
				>
					<Image
						src={"/assets/globe.png"}
						priority={true}
						alt="Globe"
						width={28}
						height={28}
						className="mr-1.5"
					/>
					<motion.p
						key={`${i18n.language}-lng-trigger`}
						initial={{ opacity: 0, scale: 0.7 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.7 }}
						transition={{ duration: 0.5 }}
					>
						{t("lng")}
					</motion.p>
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
							key="language-switcher"
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.5 }}
							className="absolute bottom-full z-10 mb-2 w-full rounded-xl bg-[#383838] p-2 shadow-md"
						>
							<button
								onClick={() => changeLanguage("cs")}
								className="flex w-full cursor-pointer items-center justify-start gap-2 rounded-xl px-2 hover:bg-zinc-800/80"
							>
								<Image src={"/assets/czech-flag.png"} alt="Czech" width={35} height={35} />
								<span className="rounded-xl px-4 py-2 font-[family-name:var(--font-coahce-regular)] text-sm lg:text-base">
									Čeština
								</span>
							</button>
							<button
								onClick={() => changeLanguage("en_us")}
								className="flex w-full cursor-pointer items-center justify-start gap-2 rounded-xl px-2 hover:bg-zinc-800/80"
							>
								<Image src={"/assets/english-flag.png"} alt="English" width={35} height={35} />
								<span className="rounded-xl px-4 py-2 font-[family-name:var(--font-coahce-regular)] text-sm lg:text-base">
									English
								</span>
							</button>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	);
}
