import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
	title: {
		default: "De Sigaar",
		template: "%s | De Sigaar",
	},
	abstract: "De Sigaar",
	creator: "De Sigaar",
	authors: [
		{
			name: "De Sigaar",
			url: "https://github.com/DeSigaar",
		},
		{
			name: "Max Altena",
			url: "https://github.com/MaxAltena",
		},
		{
			name: "Bart van de Klundert",
			url: "https://github.com/bartvdklu",
		},
		{
			name: "Dylano Hartman",
			url: "https://github.com/DylanoH",
		},
		{
			name: "Mark Hendriks",
			url: "https://github.com/MariusHendriks",
		},
		{
			name: "Mike Hendriks",
			url: "https://github.com/mike-hendriks",
		},
	],
	keywords: ["De Sigaar", "Sigaar"],
};

export default function Layout({ children }: React.PropsWithChildren) {
	return (
		<html>
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
