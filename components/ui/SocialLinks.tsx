import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const socialLinks = [
	{ name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
	{ name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
	{ name: 'GitHub', icon: Github, url: 'https://github.com' },
];

interface SocialLinksProps {
	className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
	return (
		<div className={`flex space-x-4 ${className}`}>
			{socialLinks.map((social) => {
				const Icon = social.icon;
				return (
					<a
						key={social.name}
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10 bg-black hover:bg-white border-2 border-black cursor-pointer transition-all flex items-center justify-center group"
						aria-label={social.name}
					>
						<Icon
							size={20}
							className="text-white group-hover:text-black transition-colors"
						/>
					</a>
				);
			})}
		</div>
	);
};
