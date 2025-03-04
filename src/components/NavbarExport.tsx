"use client";

import { PoppinsSemiBold, PoppinsMedium, PoppinsRegular } from "@/lib/fonts";
import { CISLO } from "@/utils/constant";

import { IoCallOutline, IoBookmarkOutline } from "react-icons/io5";
import { motion } from "motion/react";
import Image from "next/image";

export default function NavbarExport() {
	return (
		<nav className={`fixed z-20 w-full px-16 py-4 ${PoppinsMedium.className}`}>
			<div className="flex items-center justify-between">
				<motion.a
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 }}} 
                    exit={{ opacity: 0 }}
					href={`tel:${CISLO}`}
					className="flex items-center text-[#e94629]"
				>
					<IoCallOutline className="rounded-full border-2 p-1 text-4xl" />
					<span className="ml-2">Call us: 731 155 158</span>
				</motion.a>

				<motion.div
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="flex items-center space-x-12"
				>
					<a
						href="/apartmany"
						className="text-white transition-all duration-300 hover:scale-110 underline-offset-3 hover:underline hover:text-[#e94629]"
					>
						<span>Apartmány</span>
					</a>

					<a
						href="/"
						className="flex flex-col items-center justify-center transition-all duration-300 hover:scale-110"
					>
						<Image className="h-16 w-16" width={64} height={64} src="/assets/logo-small.png" alt="Logo" />
					</a>

					<a
						href="/kontakt"
						className="text-white transition-all duration-300 hover:scale-110 underline-offset-3 hover:underline hover:text-[#e94629]"
					>
						<span>Kontakt</span>
					</a>
				</motion.div>

				<motion.a
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 120, damping: 10 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 }}} 
					href="https://www.booking.com/hotel/cz/apartma-vrbice.cs.html"
					className="flex items-center p-2 text-[#e94629]"
				>
                    <IoBookmarkOutline className="rounded-full border-2 p-1 text-4xl mr-2" />
					<span>Rezervace</span>
				</motion.a>
			</div>
		</nav>
	);
}
