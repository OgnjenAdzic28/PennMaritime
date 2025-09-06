import type { Metadata, Viewport } from "next";
import { Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StructuredData from "@/components/StructuredData";

const raleway = Raleway({
	variable: "--font-raleway",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://pennmaritime.club"),
	title: "Maritime@Penn | First Maritime Club at UPenn",
	description:
		"Maritime@Penn (MAP) is the first maritime club at the University of Pennsylvania. We unite students from diverse fields to tackle real maritime challenges and develop future industry leaders in Philadelphia.",
	keywords: [
		"Maritime@Penn",
		"MAP",
		"Maritime at Penn",
		"University of Pennsylvania maritime club",
		"UPenn maritime club",
		"Penn maritime club",
		"University of Pennsylvania maritime",
		"Penn maritime club",
		"Philadelphia maritime",
		"maritime student organization",
		"Penn maritime innovation",
		"UPenn maritime",
		"Philadelphia maritime industry",
		"maritime education Philadelphia",
		"Penn blue economy",
		"maritime technology Philadelphia",
		"naval architecture Penn",
		"marine engineering UPenn",
		"maritime law Penn",
		"maritime finance Philadelphia",
		"ocean conservation Penn",
		"maritime entrepreneurship",
		"Delaware River maritime",
		"Philadelphia ports",
		"Penn maritime leaders",
	],
	authors: [{ name: "Maritime@Penn" }],
	creator: "Maritime@Penn",
	publisher: "Maritime@Penn",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://pennmaritime.club",
		title: "Maritime@Penn | First Maritime Club at UPenn",
		description:
			"Maritime@Penn (MAP) is the first maritime club at the University of Pennsylvania. Join us in shaping the future of the maritime industry in Philadelphia.",
		siteName: "Maritime@Penn",
		images: [
			{
				url: "/hero-bg.png",
				width: 1200,
				height: 630,
				alt: "Maritime@Penn - University of Pennsylvania Maritime Organization",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Maritime@Penn | First Maritime Club at UPenn",
		description:
			"The first maritime club at University of Pennsylvania. Developing maritime leaders and innovation in Philadelphia.",
		images: ["/hero-bg.png"],
	},
	alternates: {
		canonical: "https://pennmaritime.club",
	},
	category: "education",
	classification: "Maritime Education Organization",
	other: {
		"geo.region": "US-PA",
		"geo.placename": "Philadelphia",
		"geo.position": "39.952584;-75.165222",
		ICBM: "39.952584, -75.165222",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			style={{
				scrollbarWidth: "thin",
				scrollbarColor: "var(--muted) transparent",
			}}
		>
			<head>
				<link rel="canonical" href="https://pennmaritime.club" />
				<link rel="preload" href="/Dissolve_noise.jpg" as="image" />
				<meta name="geo.region" content="US-PA" />
				<meta name="geo.placename" content="Philadelphia" />
				<meta name="geo.position" content="39.952584;-75.165222" />
				<meta name="ICBM" content="39.952584, -75.165222" />
			</head>
			<body
				className={`${raleway.variable} ${geistMono.variable} antialiased bg-background`}
			>
				<StructuredData />
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
