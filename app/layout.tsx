import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		"Ambulance Service",
		"Medical Transport",
		"SCB Medical College",
		"Emergency Services",
		"Patient Transfer",
		"Medical Care",
		"Healthcare Transport",
		"Cuttack Ambulance",
		"healthcare transport"
	],
};

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" }
	]
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="flex-grow">
							{children}
						</main>
						<Footer />
					</div>
				</Providers>
				<Toaster position="top-center" />
			</body>
		</html>
	);
}
