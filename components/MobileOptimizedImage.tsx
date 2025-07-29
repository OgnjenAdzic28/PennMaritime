"use client";

import Image from "next/image";
import type React from "react";
import { useIsMobileDevice } from "@/hooks/useIsMobileDevice";

interface MobileOptimizedImageProps {
	src: string;
	alt: string;
	className?: string;
	containerClassName?: string;
	priority?: boolean;
	fill?: boolean;
	width?: number;
	height?: number;
}

/**
 * Client component that conditionally renders images based on device type
 * Prevents heavy 3D renders from loading on mobile devices
 */
export const MobileOptimizedImage: React.FC<MobileOptimizedImageProps> = ({
	src,
	alt,
	className = "",
	containerClassName = "",
	priority = false,
	fill = true,
	width,
	height,
}) => {
	const isMobileDevice = useIsMobileDevice();

	// Don't render on mobile devices
	if (isMobileDevice) {
		return null;
	}

	return (
		<div className={containerClassName}>
			<div className="relative w-full h-full">
				<Image
					src={src}
					alt={alt}
					fill={fill}
					width={!fill ? width : undefined}
					height={!fill ? height : undefined}
					className={className}
					priority={priority}
				/>
			</div>
		</div>
	);
};
