"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PartnersClientWrapper() {
	return (
		<div className="mt-16 pt-8 border-t border-border text-center">
			<div className="max-w-2xl mx-auto">
				<p className="text-lg text-muted-foreground leading-relaxed mb-8">
					<span className="font-medium text-foreground">
						Ready to shape the future of maritime innovation?
					</span>{" "}
					Partner with us to support cutting-edge research, world-class events,
					and transformative educational experiences. Investment opportunities
					and tax-deductible donations available.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button size="lg" className="text-lg min-w-[180px] h-12" asChild>
						<Link href="/contact">Partner With Us</Link>
					</Button>
					<Button
						variant="outline"
						size="lg"
						className="text-lg min-w-[180px] h-12"
						onClick={() => {
							window.open(
								"https://donate.stripe.com/14AdR9fnA62Z7eF0LU4Rq06",
								"_blank",
								"noopener,noreferrer",
							);
						}}
					>
						Make a Donation
					</Button>
				</div>
			</div>
		</div>
	);
}
