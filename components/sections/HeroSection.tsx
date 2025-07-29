"use client";

import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
	// Handle smooth scroll to committees section
	const handleExploreCommittees = () => {
		const targetElement = document.getElementById("committees");
		if (targetElement) {
			// Get the element's position relative to the document
			const elementTop =
				targetElement.getBoundingClientRect().top + window.scrollY;

			// Account for the fixed navbar height (approximately 120px including margins)
			const offset = 120;
			const targetPosition = elementTop - offset;

			// Use Lenis for smooth scrolling if available, fallback to native
			const lenis = window.lenis;
			if (lenis && typeof lenis.scrollTo === "function") {
				lenis.scrollTo(targetPosition, {
					duration: 1.2,
					easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
				});
			} else {
				// Fallback to native scrolling with better iOS support
				window.scrollTo({
					top: targetPosition,
					behavior: "smooth",
				});
			}
		}
	};

	return (
		<section className="relative min-h-screen flex flex-col p-4 sm:p-6 lg:p-8">
			{/* Hero Card Container */}
			<div className="relative flex-1 rounded-2xl sm:rounded-3xl overflow-hidden film-grain">
				{/* Background Image */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/hero-bg.png"
						alt="Maritime background"
						fill
						className="object-cover object-top-right lg:object-top"
						priority
					/>
				</div>

				{/* Overlay with Silk color */}
				<div
					className="absolute inset-0 z-6"
					style={{ backgroundColor: "rgba(1, 74, 170, 0.7)" }}
				></div>

				{/* Content */}
				<div className="relative z-10 flex-1 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
					{/* Headline */}
					<div>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight tracking-wide drop-shadow-lg">
							<span className="italic text-slate-200">Building</span>{" "}
							<span className="font-medium text-slate-100">Tomorrow's</span>{" "}
							<span className="font-semibold text-white">Maritime</span>{" "}
							<span className="text-slate-100">Leaders</span>
						</h1>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Button size="lg" className="text-lg min-w-[200px] h-12" asChild>
								<Link
									href="https://docs.google.com/forms/d/e/1FAIpQLSdDukINYILSvkRdH1vkeLvVq-hoiKIKjVom_i92Swtj3uRGvQ/viewform"
									target="_blank"
									rel="noopener noreferrer"
								>
									Join now
								</Link>
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="text-lg min-w-[200px] h-12 border-white text-white hover:bg-white hover:text-primary"
								onClick={handleExploreCommittees}
							>
								Explore committees
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
