import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
	to: string;
	children: React.ReactNode;
	className?: string;
	variant?: 'default' | 'mobile';
	onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
	to,
	children,
	className = '',
	variant = 'default',
	onClick
}) => {
	const location = useLocation();
	const isActive = location.pathname === to;

	const baseStyles = variant === 'mobile'
		? "block text-black hover:bg-pop-yellow hover:border-black border-2 border-transparent px-3 py-2 text-xl font-bold font-headings uppercase"
		: "text-black hover:bg-pop-yellow hover:border-black hover:border-2 px-2 py-1 font-bold text-lg transition-all border-2 border-transparent uppercase";

	const activeStyles = isActive ? "bg-pop-yellow border-black border-2" : "";

	return (
		<Link
			to={to}
			className={`${baseStyles} ${activeStyles} ${className}`}
			onClick={onClick}
		>
			{children}
		</Link>
	);
};
