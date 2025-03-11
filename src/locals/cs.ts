const cs = {
	navbar: {
		home: "Apartmány",
		rezervace: "Rezervace",
		jazyk: "Jazyk",
		cz: "Čeština",
		en: "Angličtina",
	},

	banner: {
		title: "Apartmá Vrbice",
		scroll: "Posuň dolů",
	},
	about: {
		title: "Proč si vybrat náš Apartmán?",
		description:
			"Hledáte místo, kde si odpočinete v klidu, ale zároveň oceníte skvělou dopravní dostupnost? Apartmá Vrbice se nachází v ideální lokalitě přímo u dálnice mezi Ostravou a Bohumínem. Perfektní volba pro cestovatele, pracovní pobyty i delší dovolené!",
		offersTitle: "Co vám Apartmá Vrbice nabízí:",
		offers: [
			"Moderní a útulné apartmány – Plně vybavené pro vaše maximální pohodlí.",
			"Tichá a klidná lokalita – Relaxujte mimo rušné centrum měst.",
			"Výborná dostupnost – Nacházíme se jen pár minut od sjezdu z dálnice D1 mezi Ostravou a Bohumínem.",
			"Vlastní kuchyňka – Ideální pro přípravu jídel během vašeho pobytu.",
			"Wi‑Fi zdarma – Zůstaňte online pro práci nebo zábavu.",
			"Blízko přírody – Skvělý výchozí bod pro výlety a relaxaci.",
			"Zábava - U nás je i možnost pronajmout si skůtr, paddleboard nebo elektrickou koloběžku.",
		],
		whyTitle: "Proč zvolit Apartmá Vrbice:",
		reasons: [
			"Strategická poloha – Perfektní spojení mezi Ostravou a Bohumínem, s rychlým přístupem na dálnici.",
			"Snadné parkování – Pohodlné parkování přímo u apartmánu.",
			"Klid a soukromí – Užijte si pobyt daleko od městského ruchu, a přitom na dosah všech důležitých míst.",
			"Blízkost aktivit – Kousek od přírody, městských center i kulturních památek.",
			"Ideální poloha: Apartmá Vrbice se nachází přímo u dálnice D1, mezi Ostravou a Bohumínem – ideální volba pro ty, kteří hledají pohodlí a rychlou dostupnost.",
		],
		reserve:
			"Rezervujte si svůj pobyt ještě dnes a zažijte kombinaci komfortu, klidu a skvělé polohy v Apartmá Vrbice!",
		tv: "TV s plochou obrazovkou",
		wifi: "Wi-Fi zdarma",
		kitchen: "Kuchyň s troubou",
		parking: "Parkování zdarma",
		bathroom: "Koupelna s vanou",
		smoking: "Nekuřácké pokoje",
	},
	footer: {
		watch: "Sledujte nás:",
		kontakt: "Kontakt:",
		partners: "Partneři:",
		made: "© 2025 Vytvořil Filip Musálek",
	},
	activities: {
		title: "A co u nás lze dělat?",
		items: [
			{
				title: "Kulturní památky",
				description:
					"Objevte bohatou historii regionu návštěvou blízkých kulturních památek, muzeí a galerií v Ostravě a okolí.",
			},
			{
				title: "Cykloturistika",
				description:
					"Projeďte se po četných cyklostezkách v okolí. Oblast nabízí trasy různé obtížnosti pro začátečníky i zkušené cyklisty.",
			},
			{
				title: "Gastronomie",
				description:
					"Ochutnejte místní speciality v okolních restauracích a hospůdkách. Region je známý svou bohatou kulinářskou tradicí.",
			},
			{
				title: "Pěší turistika",
				description:
					"Vydejte se na procházky přírodou v okolí Vrbice. Objevte krásné stezky a vyhlídky s panoramatickými výhledy na krajinu.",
			},
			{
				title: "Nákupy",
				description:
					"Navštivte nákupní centra v Ostravě nebo místní obchůdky s regionálními produkty. Ideální pro milovníky nakupování.",
			},
			{
				title: "Sportovní aktivity",
				description:
					"Využijte blízká sportovní zařízení – tenisové kurty, bazény, fitness centra a další možnosti pro aktivní odpočinek.",
			},
		],
	},
	apartments: {
		title: "Naše apartmány",
		description:
			"<p><strong>Apartmá Vrbice se</strong> nachází v Bohumíně a nabízí bezplatné Wi‑Fi, neplacené soukromé parkoviště a výhled do zahrady. Ostrava hlavní nádraží se nachází 6,5 km odtud.</p>" +
			"<p><strong>Všechny ubytovací jednotky mají posezení</strong> s rozkládací pohovkou, TV s plochou obrazovkou s kabelovými programy, kuchyň s dobrým vybavením a jídelní částí a vlastní koupelnu s bezplatnými toaletními potřebami. <strong>K dispozici je také lednice, trouba, mikrovlnná trouba a varná konvice.</strong></p>" +
			"<p>Národní kulturní památka Dolní oblast Vítkovice se nachází 13 km od ubytování Apartmá Vrbice a ZOO Ostrava 8,1 km. <strong>Letiště Leoše Janáčka Ostrava leží 29 km daleko.</strong></p>",
		oneBedroom: {
			title: "Apartmán s 1 ložnicí",
			description: "Nabízíme ubytování v krásných apartmánech v klidné části Bohumína.",
			features: [
				"Ložnice: 2 jednolůžkové postele",
				"Obývací pokoj: Rozkládací pohovka",
				"Velikost apartmánu: 45m²",
				"Pohodlné postele",
			],
		},
		equipment: {
			title: "Vybavení apartmánů",
		},
		deluxe: {
			title: "Apartmán Deluxe",
			description: "Nabízíme ubytování v krásných apartmánech v klidné části Bohumína.",
			features: [
				"Obývací pokoj: Rozkládací pohovka",
				"První ložnice: 2 jednolůžkové postele",
				"Druhá ložnice: 2 jednolůžkové postele",
				"Velikost apartmánu: 65 m²",
				"Pohodlné postele",
			],
		},
		vpriprav: {
			title: "V přípravě",
			description: "Nabízíme ubytování v krásných apartmánech v klidné části Bohumína.",
			features: ["V přípravě"],
		},
		package: {
			title: "Pobytový balíček „Relax ve Vrbici“",
			description: "Co balíček zahrnuje:",
			details: [
				"Ubytování na 3 noci pro 2 osoby v Apartmán s 1 ložnicí",
				"Relaxační masáž pro dva (60 minut/osoba)",
				"20% sleva na jednu z aktivit:",
				"Vstup do Zoo Ostrava",
				"Prohlídka industriálního areálu Dolní oblast Vítkovice",
				"Alternativně jiná místní atrakce dle výběru",
			],
			priceDiscounted: "Cena balíčku po slevě: 5 242 Kč",
			priceRegular: "Běžná cena bez akčního balíčku: 6 380 Kč",
			reservation: "Máte-li zájem využívejte rezervace skrze telefon:",
		},
	},
};

export default cs;
