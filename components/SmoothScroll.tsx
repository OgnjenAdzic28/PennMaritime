"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

interface SmoothScrollProps {
	children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
	useEffect(() => {
		// Detect if we're on a mobile device
		const isMobile =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent,
			);

		// Initialize Lenis with mobile-optimized settings
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: !isMobile, // Disable smooth wheel on mobile for better performance
			wheelMultiplier: 1,
			syncTouch: isMobile, // Enable touch sync on mobile devices
			touchMultiplier: isMobile ? 1.5 : 2, // Adjust touch sensitivity for mobile
			infinite: false,
		});

		// Make Lenis instance globally accessible for navbar smooth scrolling
		window.lenis = lenis;

		// Animation frame function
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		// Cleanup
		return () => {
			lenis.destroy();
			// Clean up global reference
			delete window.lenis;
		};
	}, []);

	return <>{children}</>;
};

export default SmoothScroll;
