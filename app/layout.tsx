import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: "Adidev Tours And Travels",
		template: `%s - ${siteConfig.name}`,
	},
	description: "Professional ambulance service provider in partnership with SCB Medical College, Cuttack. Specialized in patient transfers from government medical facilities.",
	keywords: [
		"ambulance service",
		"medical transfer",
		"SCB Medical College",
		"Cuttack",
		"Odisha",
		"patient transport",
		"emergency medical service",
		"healthcare transport"
	],
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
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
			</body>
		</html>
	);
}
