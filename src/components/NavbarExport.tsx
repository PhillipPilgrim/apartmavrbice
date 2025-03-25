"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { PoppinsMedium } from "@/lib/fonts";
import { CISLO } from "@/utils/constant";
import Link from "next/link";
import "../utils/i18n";

import { IoCallOutline, IoArrowDown, IoGlobeOutline, IoClose, IoMenu } from "react-icons/io5";
import { motion, useScroll, useTransform } from "motion/react";
import { AnimatePresence } from "motion/react";
import Image from "next/image";

export default function NavbarExport() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const [mounted, setMounted] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const { t, i18n } = useTranslation();

	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [0, 100], [1, 0]);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(prev => !prev);
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleClickOutside = (event: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const changeLanguageAndReload = (language: string) => {
		i18n.changeLanguage(language);  // Change the language
		window.location.reload();  // Reload the page to apply the language change
	  };

	const toggleDropdown = () => setIsOpen(!isOpen);
	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	if (!mounted) return null;

	return (
		<>
			<motion.nav
				style={{ opacity }}
				className={`fixed top-0 left-0 z-20 hidden w-full px-16 py-4 lg:block ${PoppinsMedium.className}`}
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
						<motion.button
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							onClick={toggleDropdown}
							aria-expanded={isOpen}
							role="menu"
							className="flex w-40 cursor-pointer items-center px-4 py-2 font-[family-name:var(--font-coahce-regular)] text-sm font-bold text-[#e94629] lg:text-base"
						>
							<div className="flex items-center gap-1.5">
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
						</motion.button>

						<AnimatePresence>
							{isOpen && (
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.2 }}
									className="absolute top-full z-10 mb-2 w-full rounded-xl bg-zinc-300/20 p-2 text-black shadow-md"
								>
									<button
										onClick={() => changeLanguageAndReload("cs")}
										className="flex cursor-pointer items-center justify-start gap-2 transition-all duration-300 hover:scale-105"
									>
										<Image
											src={"/assets/czech-flag.png"}
											alt="Czech"
											width={35}
											height={35}
											className="opacity-80"
										/>
										<span className="rounded-xl px-4 py-2 font-[family-name:var(--font-coahce-regular)] text-sm hover:text-[#e94629] lg:text-base">
											{t("navbar.cz")}
										</span>
									</button>

									<button
										onClick={() => changeLanguageAndReload("en_us")}
										className="flex cursor-pointer items-center justify-start gap-2 transition-all duration-300 hover:scale-105"
									>
										<Image
											src={"/assets/english-flag.png"}
											alt="English"
											width={35}
											height={35}
											className="opacity-80"
										/>
										<span className="rounded-xl px-4 py-2 font-[family-name:var(--font-coahce-regular)] text-sm hover:text-[#e94629] lg:text-base">
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

			<motion.nav style={{ opacity }} className="fixed top-0 left-0 z-20 w-full px-4 py-4 lg:hidden">
				<motion.button
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					onClick={toggleMobileMenu}
					aria-label="Open Mobile Menu"
					className={`fixed top-3 right-1 z-20 px-4 py-4 lg:hidden ${isMobileMenuOpen ? "hidden" : ""}`}
				>
					<IoMenu className="text-[#e94629]" size={30} />
				</motion.button>

				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<Link href="/" className={`flex items-center gap-2 ${isMobileMenuOpen ? "hidden" : ""}`}>
						<Image
							src="/assets/logo.png"
							alt="Logo"
							priority
							style={{ width: "auto", height: "auto" }}
							width={140}
							height={140}
						/>
					</Link>
				</motion.div>
			</motion.nav>

			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: "-100%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-100%" }}
						transition={{ duration: 0.3 }}
						className="bg-primary-background fixed inset-x-0 top-0 z-50 h-screen w-full bg-black/90"
					>
						<div className="flex h-full flex-col px-4 py-6">
							<div className="flex items-center justify-between">
								<Link href="/" className="flex flex-row items-center gap-2">
									<Image
										src="/assets/logo.png"
										alt="Logo"
										priority
										style={{ width: "auto", height: "auto" }}
										width={140}
										height={140}
									/>
								</Link>

								<button onClick={toggleMobileMenu}>
									<IoClose className="absolute top-8 right-4 text-white" size={36} />
									<span className="sr-only">Close Menu</span>
								</button>
							</div>

							<div className="mt-10">
								<div className="flex flex-col gap-4">
									<motion.div
										initial={{ opacity: 0, x: -30 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: 0.2 }}
									>
										<Link
											href="/apartmany"
											className="mb-1.5 font-[family-name:var(--font-generalsans-medium)] text-2xl text-white uppercase transition-transform duration-300 focus:scale-110"
											onClick={toggleMobileMenu}
										>
											{t("navbar.home")}
										</Link>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, x: -30 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: 0.5 }}
									>
										<Link
											href="https://www.booking.com/hotel/cz/apartma-vrbice.cs.html"
											rel="noreferrer noopener"
											target="_blank"
											className="mb-1.5 font-[family-name:var(--font-generalsans-medium)] text-2xl text-white uppercase transition-transform duration-300 focus:scale-110"
											onClick={toggleMobileMenu}
										>
											{t("navbar.rezervace")}
										</Link>
									</motion.div>
								</div>
							</div>

							<div className="mt-auto flex flex-col">
								<div className="flex flex-row justify-between">
									<motion.button
										initial={{ opacity: 0, x: -30 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: 0.7 }}
										onClick={() => changeLanguageAndReload("cs")}
										className="flex cursor-pointer items-center justify-start gap-2 "
									>
										<Image
											src={"/assets/czech-flag.png"}
											alt="Czech"
											width={55}
											height={55}
											className="opacity-80"
										/>
									</motion.button>

									<motion.button
										initial={{ opacity: 0, x: 30 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: 0.7 }}
										onClick={() => changeLanguageAndReload("en_us")}
										className="flex cursor-pointer items-center justify-start gap-2"
									>
										<Image
											src={"/assets/english-flag.png"}
											alt="English"
											width={55}
											height={55}
											className="opacity-80"
										/>
									</motion.button>
								</div>

								<div className="mx-auto mt-4 w-full">
									<motion.a
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: 1 }}
										whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
										href={`tel:${CISLO}`}
										className="flex w-full items-center justify-center rounded-lg border-2 border-[#e94629] bg-black/70 p-1 text-[#e94629] transition-none focus:scale-110 focus:transition-transform focus:duration-300"
									>
										<IoCallOutline className="p-1 text-4xl" />
										<span className="ml-2 text-lg">731 155 158</span>
									</motion.a>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
