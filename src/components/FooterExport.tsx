"use client";

import { PoppinsSemiBold, PoppinsMedium } from "@/lib/fonts";
import { EMAIL, CISLO } from "@/utils/constant";
import { IoLogoFacebook, IoBookmarks } from "react-icons/io5";
import Image from "next/image";

export default function FooterExport() {
	return (
		<footer className={`bg-[#f5f5f5] py-1 shadow-md ${PoppinsSemiBold.className}`}>
			<div className="container mx-auto flex flex-col items-start justify-between gap-6 p-0 md:flex-row md:p-4">
				<div className="flex-1">
					<p className="text-md mb-2 font-semibold">Sledujte nás:</p>
					<div className="flex flex-col gap-2">
						<a
							href="https://www.facebook.com/profile.php?id=61558579918001"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:text-[#0866ff]"
						>
							<IoLogoFacebook className="text-2xl" />
							<span className="text-md">Facebook</span>
						</a>
						<a
							href="https://www.booking.com/Share-mz7jvW"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:text-[#003993]"
						>
							<IoBookmarks className="text-2xl" />
							<span className="text-md">Booking.com</span>
						</a>
					</div>
					<div className="mt-8 flex-1">
						<a
							href="https://phillippilgrim.xyz/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-md transition-all hover:scale-105 hover:text-[#e94629]"
						>
							© 2025 Vytvořil Filip Musálek
						</a>
					</div>
				</div>

				<div className="flex-1">
					<p className="text-md mb-2 font-semibold">Kontakt:</p>
					<div className="flex flex-col gap-1">
						<a
							href={`mailto:${EMAIL}`}
							className="text-md text-zinc-800 transition-all hover:text-[#e94629]"
						>
							• {EMAIL}
						</a>
						<a href={`tel:${CISLO}`} className="text-md text-zinc-800 transition-all hover:text-[#e94629]">
							• {CISLO}
						</a>
						<p className="text-md text-zinc-800"> • Ostravská 83, Bohumín, Vrbice</p>
						<p className="text-md text-zinc-800"> • Ban.účet 1761182042/3030</p>
					</div>
				</div>

				<div className="flex-1">
					<p className="text-md mb-2 font-semibold">Partneři:</p>
					<div className="flex flex-wrap gap-4">
						<a href="https://example.com" target="_blank" rel="noopener noreferrer">
							<Image
								src="/assets/ostrava!!!.png"
								alt="Logo partnera"
								width={120}
								height={120}
								className="cursor-pointer transition-transform hover:scale-105"
							/>
						</a>
						<a href="https://example.com" target="_blank" rel="noopener noreferrer">
							<Image
								src="/assets/kudyznudy.png"
								alt="Logo partnera"
								width={120}
								height={120}
								className="cursor-pointer transition-transform hover:scale-105"
							/>
						</a>
						<a href="https://example.com" target="_blank" rel="noopener noreferrer">
							<Image
								src="/assets/tesinskeslzesko.png"
								alt="Logo partnera"
								width={120}
								height={120}
								className="cursor-pointer transition-transform hover:scale-105"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
