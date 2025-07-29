"use client";

import type React from "react";
import { useIsMobileDevice } from "@/hooks/useIsMobileDevice";

interface MobileOptimizedVideoProps {
	src: string;
	type?: string;
	className?: string;
	containerClassName?: string;
	autoPlay?: boolean;
	loop?: boolean;
	muted?: boolean;
	playsInline?: boolean;
}

/**
 * Client component that conditionally renders videos based on device type
 * Prevents heavy 3D videos from loading on mobile devices
 */
export const MobileOptimizedVideo: React.FC<MobileOptimizedVideoProps> = ({
	src,
	type = "video/webm",
	className = "",
	containerClassName = "",
	autoPlay = true,
	loop = true,
	muted = true,
	playsInline = true,
}) => {
	const isMobileDevice = useIsMobileDevice();

	// Don't render on mobile devices
	if (isMobileDevice) {
		return null;
	}

	return (
		<div className={containerClassName}>
			<video
				autoPlay={autoPlay}
				loop={loop}
				muted={muted}
				playsInline={playsInline}
				className={className}
			>
				<source src={src} type={type} />
			</video>
		</div>
	);
};
