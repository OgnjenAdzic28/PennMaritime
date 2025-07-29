import Link from "next/link";
import type React from "react";
import { MobileOptimizedImage } from "@/components/MobileOptimizedImage";
import { Button } from "@/components/ui/button";

const CommitteesSection: React.FC = () => {
	return (
		<section
			id="committees"
			className="relative min-h-screen flex flex-col p-4 sm:p-6 lg:p-8"
		>
			{/* Committees Card Container */}
			<div className="relative flex-1 rounded-2xl sm:rounded-3xl bg-background overflow-hidden">
				{/* Noise/Grain Background */}
				<div className="absolute inset-0 pointer-events-none z-0 opacity-[0.08]">
					<div
						className="w-full h-full"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
							backgroundRepeat: "repeat",
							backgroundSize: "128px 128px",
						}}
					/>
				</div>

				{/* Content */}
				<div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 max-w-[98%] lg:max-w-[1600px] xl:max-w-[1800px] mx-auto py-20 min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
					<div className="text-left w-full">
						{/* Tagline */}
						<div className="mb-6">
							<span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
								Committees
							</span>
						</div>

						{/* Main Headline */}
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-12 leading-tight max-w-4xl">
							<span className="text-muted-foreground">
								Our committees are the
							</span>{" "}
							<span className="font-medium text-primary">integral links</span>{" "}
							<span className="text-muted-foreground">
								that connect ideas to action, creating lasting change in the
								maritime sector.
							</span>
						</h2>

						{/* Committees List */}
						<div className="max-w-4xl">
							<div className="space-y-8">
								<div className="flex items-center gap-6">
									<span className="text-2xl font-light text-primary/60 min-w-[3rem]">
										01
									</span>
									<h3 className="text-xl font-medium text-foreground">
										Maritime Innovation, Technology & Entrepreneurship
									</h3>
								</div>

								<div className="flex items-center gap-6">
									<span className="text-2xl font-light text-primary/60 min-w-[3rem]">
										02
									</span>
									<h3 className="text-xl font-medium text-foreground">
										Maritime Law, Policy & Governance
									</h3>
								</div>

								<div className="flex items-center gap-6">
									<span className="text-2xl font-light text-primary/60 min-w-[3rem]">
										03
									</span>
									<h3 className="text-xl font-medium text-foreground">
										Naval Architecture, Marine Engineering & Design
									</h3>
								</div>

								<div className="flex items-center gap-6">
									<span className="text-2xl font-light text-primary/60 min-w-[3rem]">
										04
									</span>
									<h3 className="text-xl font-medium text-foreground">
										Health, Safety & Well-Being
									</h3>
								</div>

								<div className="flex items-center gap-6">
									<span className="text-2xl font-light text-primary/60 min-w-[3rem]">
										05
									</span>
									<h3 className="text-xl font-medium text-foreground">
										Environmental Sustainability, Ocean Conservation & Marine
										Science
									</h3>
								</div>

								<div className="flex items-center gap-6">
									<span className="text-2xl font-light text-primary/60 min-w-[3rem]">
										06
									</span>
									<h3 className="text-xl font-medium text-foreground">
										Maritime Finance, Economics & Insurance
									</h3>
								</div>
							</div>
						</div>

						{/* Unchained Image - Absolute positioned, large screens only (Only load on non-mobile devices) */}
						<MobileOptimizedImage
							src="https://res.cloudinary.com/dhj0xjooz/image/upload/v1753822121/Unchained_1-1920x917_fhbzfy.png"
							alt="Unchained maritime design element"
							className="w-full h-full object-cover"
							containerClassName="hidden xl:block absolute top-0 aspect-[850/863] -right-64 w-[850px] h-full 2xl:z-0 -z-10 pointer-events-none"
						/>

						{/* CTA Section */}
						<div className="mt-16 pt-8 border-t border-border text-center">
							<div className="max-w-2xl mx-auto">
								<p className="text-lg text-muted-foreground leading-relaxed mb-8">
									<span className="font-medium text-foreground">
										Ready to make an impact?
									</span>{" "}
									Join one of our committees and help shape the future of the
									maritime industry through collaborative innovation and
									meaningful action.
								</p>
								<Button
									size="lg"
									className="text-lg min-w-[200px] h-12"
									asChild
								>
									<Link
										href="https://docs.google.com/forms/d/e/1FAIpQLSd_vhj-UDmEajw97hSEMuaDyn188mRaRDeVi0RMLoeotbwkpg/viewform"
										target="_blank"
										rel="noopener noreferrer"
									>
										Join Committees
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CommitteesSection;
