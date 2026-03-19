import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
	count?: number;
	size?: number;
	className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
	count = 5,
	size = 28,
	className = ''
}) => {
	return (
		<div className={`flex text-pop-yellow space-x-1 ${className}`}>
			{Array.from({ length: count }, (_, i) => (
				<Star
					key={i}
					fill="currentColor"
					stroke="black"
					strokeWidth={1}
					size={size}
				/>
			))}
		</div>
	);
};
