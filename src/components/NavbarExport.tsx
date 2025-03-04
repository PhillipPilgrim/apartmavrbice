"use client";

import { PoppinsSemiBold, PoppinsMedium, PoppinsRegular } from "@/lib/fonts";
import { CISLO } from "@/utils/constant";

import { IoCallOutline, IoBookmarkOutline } from "react-icons/io5";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export default function NavbarExport() {
	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [0, 100], [1, 0]);

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

				<motion.a
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 120, damping: 10 }}
					whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
					rel="noopener noreferrer"
					target="_blank"
					href="https://www.booking.com/hotel/cz/apartma-vrbice.cs.html"
					className="flex items-center rounded-md text-[#e94629]"
				>
					<IoBookmarkOutline className="p-1 text-4xl" />
					<span className="ml-2 text-lg">Rezervace</span>
				</motion.a>

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
							<span>Apartmány</span>
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
							href="/kontakt"
							className="text-white underline-offset-3 transition-all duration-300 hover:scale-110 hover:text-[#e94629] hover:underline"
						>
							<span>Kontakt</span>
						</a>
					</div>
				</motion.div>
			</div>
		</motion.nav>
	);
}
