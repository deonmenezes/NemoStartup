import React from 'react';
import { Button } from '../Button';

interface CTABannerProps {
	title: React.ReactNode;
	buttonText?: string;
	buttonLink?: string;
	className?: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({
	title,
	buttonText = "Start Scaling Now",
	buttonLink = "/get-started",
	className = ''
}) => {
	return (
		<div className={`text-center ${className}`}>
			<h2 className="text-4xl md:text-6xl font-bold uppercase leading-none mb-8">
				{title}
			</h2>
			<Button variant="dark" size="lg" href={buttonLink}>
				{buttonText}
			</Button>
		</div>
	);
};
