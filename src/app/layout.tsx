import type { Metadata } from "next";
import {
	PoppinsThin,
	PoppinsExtraLight,
	PoppinsLight,
	PoppinsRegular,
	PoppinsMedium,
	PoppinsSemiBold,
	PoppinsBold,
	PoppinsExtraBold,
	PoppinsBlack,
} from "@/lib/fonts";
import "../../public/styles/globals.css";
import NavbarExport from "@/components/NavbarExport";
import FooterExport from "@/components/FooterExport";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.apartmavrbice.cz"),
	title: "Apartmán Vrbice",
	description:
		"Hledáte místo, kde si odpočinete v klidu, ale zároveň oceníte skvělou dopravní dostupnost? Apartmá Vrbice se nachází v ideální lokalitě přímo u dálnice mezi Ostravou a Bohumínem. Perfektní volba pro cestovatele, pracovní pobyty i delší dovolené!",
	applicationName: "Apartmán Vrbice",
	keywords: ["apartman vrbice", "apartma", "vrbice", "ostrava apartma", "apartmán", "pronájem apartmánu ostrava"],
	generator: "Next.js",
	twitter: {
		card: "summary",
		title: "Apartmán Vrbice",
		description:
			"Hledáte místo, kde si odpočinete v klidu, ale zároveň oceníte skvělou dopravní dostupnost? Apartmá Vrbice se nachází v ideální lokalitě přímo u dálnice mezi Ostravou a Bohumínem. Perfektní volba pro cestovatele, pracovní pobyty i delší dovolené!",
		images: `/assets/logo.png`,
	},
	appleWebApp: {
		title: "Apartmán Vrbice",
		statusBarStyle: "black-translucent",
	},
	openGraph: {
		title: "Apartmán Vrbice",
		description:
			"Hledáte místo, kde si odpočinete v klidu, ale zároveň oceníte skvělou dopravní dostupnost? Apartmá Vrbice se nachází v ideální lokalitě přímo u dálnice mezi Ostravou a Bohumínem. Perfektní volba pro cestovatele, pracovní pobyty i delší dovolené!",
		type: "website",
		locale: "cs_CZ",
		images: [
			{
				url: `/assets/logo.png`,
				width: 512,
				height: 512,
				alt: "Logo-Apartma",
				type: "image/png",
			},
		],
	},
	category: "Apartman Vrbice",
	icons: [
		{
			rel: "shortcut icon",
			type: "images/x-icon",
			url: "/assets/favicons/favicon.ico",
		},
		{
			rel: "apple-touch-icon",
			type: "images/png",
			sizes: "57x57",
			url: "/assets/favicons/apple-touch-icon-57x57.png",
		},
		{
			rel: "apple-touch-icon",
			type: "images/png",
			sizes: "60x60",
			url: "/assets/favicons/apple-touch-icon-60x60.png",
		},
		{
			rel: "apple-touch-icon",
			type: "images/png",
			sizes: "72x72",
			url: "/assets/favicons/apple-touch-icon-72x72.png",
		},
		{
			rel: "apple-touch-icon",
			type: "images/png",
			sizes: "76x76",
			url: "/assets/favicons/apple-touch-icon-76x76.png",
		},
		{
			rel: "apple-touch-icon",
			type: "images/png",
			sizes: "114x114",
			url: "/assets/favicons/apple-touch-icon-114x114.png",
		},
		{
			rel: "apple-touch-icon",
			type: "images/png",
			sizes: "120x120",
			url: "/assets/favicons/apple-touch-icon-120x120.png",
		},
		{
			rel: "apple-touch-icon",
			type: "images/png",
			sizes: "144x144",
			url: "/assets/favicons/apple-touch-icon-144x144.png",
		},
		{
			rel: "apple-touch-icon",
			type: "images/png",
			sizes: "152x152",
			url: "/assets/favicons/apple-touch-icon-152x152.png",
		},
		{
			rel: "apple-touch-icon",
			type: "images/png",
			sizes: "180x180",
			url: "/assets/favicons/apple-touch-icon-180x180.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "96x96",
			url: "/assets/favicons/favicon-96x96.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/assets/favicons/favicon-16x16.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/assets/favicons/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "192x192",
			url: "/assets/favicons/android-icon-192x192.png",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={` ${PoppinsThin.className} ${PoppinsExtraLight.className} ${PoppinsLight.className} ${PoppinsRegular.className} ${PoppinsMedium.className} ${PoppinsSemiBold.className} ${PoppinsBold.className} ${PoppinsExtraBold.className} ${PoppinsBlack.className} antialiased bg-[#f0f0f0]`}
			>
				<NavbarExport />
				{children}
				<FooterExport />
			</body>
		</html>
	);
}
