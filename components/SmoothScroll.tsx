"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

interface SmoothScrollProps {
	children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
	useEffect(() => {
		// Initialize Lenis
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			wheelMultiplier: 1,
			syncTouch: false,
			touchMultiplier: 2,
			infinite: false,
		});

		// Animation frame function
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		// Cleanup
		return () => {
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
};

export default SmoothScroll;
