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
			className={`${PoppinsSemiBold.className} flex min-h-screen flex-col items-center justify-center max-w-7xl mx-auto gap-16 px-6 text-black`}
		>
			<div className="flex flex-row items-center gap-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="flex-rwo flex w-1/2 items-center gap-4"
				>
					<Image
						src="/assets/logo-small.png"
						alt="logo"
						width={300}
						height={300}
						priority={true}
						className="h-auto w-auto md:h-auto md:w-auto"
					/>
					<p className="text-center text-2xl md:text-7xl">Vrbice</p>
				</motion.div>
				<motion.div className="w-1/3">
					<p className="text-center text-2xl md:text-2xl">Proč si vybrat náš Apartmán?</p>
					<p className="text-md text-center">
						Hledáte místo, kde si odpočinete v klidu, ale zároveň oceníte skvělou dopravní dostupnost?
						Apartmá Vrbice se nachází v ideální lokalitě přímo u dálnice mezi Ostravou a Bohumínem.
						Perfektní volba pro cestovatele, pracovní pobyty i delší dovolené!
					</p>
				</motion.div>
			</div>
		</div>
	);
}
