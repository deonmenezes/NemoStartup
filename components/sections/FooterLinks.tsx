import React from 'react';
import { Link } from 'react-router-dom';

const footerColumns = [
	{
		title: "Product",
		links: [
			{ name: "Features", to: "/#features" },
			{ name: "Pricing", to: "/pricing" },
			{ name: "Integrations", to: "/#integrations" },
			{ name: "Changelog", to: "/#changelog" },
		]
	},
	{
		title: "Company",
		links: [
			{ name: "About Us", to: "/#about" },
			{ name: "Careers", to: "/#careers" },
			{ name: "Blog", to: "/#blog" },
			{ name: "Contact", to: "/#contact" },
		]
	},
	{
		title: "Resources",
		links: [
			{ name: "Community", to: "/#community" },
			{ name: "Help Center", to: "/#help" },
			{ name: "Partners", to: "/#partners" },
			{ name: "Status", to: "/#status" },
		]
	},
	{
		title: "Legal",
		links: [
			{ name: "Privacy Policy", to: "/#privacy" },
			{ name: "Terms of Service", to: "/#terms" },
			{ name: "Security", to: "/#security" },
		]
	},
];

interface FooterLinksProps {
	className?: string;
}

export const FooterLinks: React.FC<FooterLinksProps> = ({ className = '' }) => {
	return (
		<div className={`grid grid-cols-2 md:grid-cols-4 gap-8 font-bold ${className}`}>
			{footerColumns.map((col) => (
				<div key={col.title}>
					<h3 className="font-headings text-xl mb-4 uppercase border-b-2 border-black inline-block pb-1">
						{col.title}
					</h3>
					<ul className="space-y-2">
						{col.links.map((link) => (
							<li key={link.name}>
								<Link
									to={link.to}
									className="hover:underline hover:text-gray-800 transition-colors"
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};
