"use client";

import { IoLogoFacebook, IoBookmarks, IoLogoInstagram } from "react-icons/io5";
import { EMAIL, CISLO, CISLO2 } from "@/utils/constant";
import { useTranslation } from "react-i18next";
import { PoppinsSemiBold } from "@/lib/fonts";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function FooterExport() {
	const { t } = useTranslation();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<footer className={`bg-[#f5f5f5] px-4 py-4 shadow-md md:px-0 ${PoppinsSemiBold.className}`}>
			<div className="container mx-auto flex flex-col items-start justify-between gap-6 p-0 md:flex-row md:p-4">
				<div className="flex-1">
					<p className="text-md mb-2 font-semibold">{t("footer.watch")}</p>
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
							href="https://www.instagram.com/apartmavrbice/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:text-[#fd044d]"
						>
							<IoLogoInstagram className="text-2xl" />
							<span className="text-md">Instagram</span>
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
							{t("footer.made")}
						</a>
					</div>
				</div>

				<div className="flex-1">
					<p className="text-md mb-2 font-semibold">{t("footer.kontakt")}</p>
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
						<a href={`tel:${CISLO2}`} className="text-md text-zinc-800 transition-all hover:text-[#e94629]">
							• {CISLO2}
						</a>
						<p className="text-md text-zinc-800"> • Ostravská 83, Bohumín, Vrbice</p>
						<p className="text-md text-zinc-800"> • Ban.účet 1761182042/3030</p>
					</div>
				</div>

				<div className="flex-1">
					<p className="text-md mb-2 font-semibold">{t("footer.partners")}</p>
					<div className="flex flex-wrap gap-4">
						<a href="https://www.ostrava.cz/cs" target="_blank" rel="noopener noreferrer">
							<Image
								src="/assets/ostrava!!!.png"
								alt="Logo partnera"
								width={120}
								height={120}
								priority
								style={{ width: "auto", height: "auto" }}
								className="cursor-pointer transition-transform hover:scale-105"
							/>
						</a>
						<a href="https://www.kudyznudy.cz/" target="_blank" rel="noopener noreferrer">
							<Image
								src="/assets/kudyznudy.png"
								alt="Logo partnera"
								width={120}
								height={120}
								priority
								style={{ width: "auto", height: "auto" }}
								className="cursor-pointer transition-transform hover:scale-105"
							/>
						</a>
						<a href="https://www.tesinskeslezsko.cz/" target="_blank" rel="noopener noreferrer">
							<Image
								src="/assets/tesinskeslzesko.png"
								alt="Logo partnera"
								width={120}
								height={120}
								priority
								style={{ width: "auto", height: "auto" }}
								className="cursor-pointer transition-transform hover:scale-105"
							/>
						</a>
						<a
							href="https://www.navsi.cz/aktualne/aktuality/slevove-karty-tesinske-slezsko-region-card-2024-1585cs.html"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src="/assets/tesinskekarta.png"
								alt="Logo partnera"
								width={120}
								height={120}
								priority
								style={{ width: "auto", height: "auto" }}
								className="cursor-pointer transition-transform hover:scale-105"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
