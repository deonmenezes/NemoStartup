import React from 'react';
import { ShoppingBag, Gift, Zap, Crown } from 'lucide-react';
import { Button } from '../Button';
import { redirectToCheckout } from '../../lib/stripe';

const products = [
	{
		icon: Zap,
		name: "AI Power Pack",
		description: "Get 3 additional AI employees at a discounted bundle price",
		price: 199,
		originalPrice: 297,
		badge: "Best Value",
		stripePriceId: "price_ai_power_pack",
	},
	{
		icon: Crown,
		name: "Premium Templates",
		description: "50+ pre-built automation templates for common business tasks",
		price: 49,
		originalPrice: null,
		badge: null,
		stripePriceId: "price_premium_templates",
	},
	{
		icon: Gift,
		name: "Setup Consultation",
		description: "1-hour session with our AI implementation expert",
		price: 149,
		originalPrice: 249,
		badge: "Popular",
		stripePriceId: "price_setup_consultation",
	},
	{
		icon: ShoppingBag,
		name: "White-Label License",
		description: "Rebrand and resell Nemo's AI solutions to your clients",
		price: 999,
		originalPrice: null,
		badge: "Enterprise",
		stripePriceId: "price_white_label_license",
	}
];

const addons = [
	{ name: "Priority Support", price: 29, period: "/mo", stripePriceId: "price_addon_priority_support" },
	{ name: "Advanced Analytics", price: 19, period: "/mo", stripePriceId: "price_addon_advanced_analytics" },
	{ name: "API Access", price: 49, period: "/mo", stripePriceId: "price_addon_api_access" },
	{ name: "Custom Training", price: 199, period: "one-time", stripePriceId: "price_addon_custom_training" },
];

export const ShopPage: React.FC = () => {
	const handleProductPurchase = (stripePriceId: string) => {
		redirectToCheckout(stripePriceId, 'payment');
	};

	const handleAddonPurchase = (addon: typeof addons[number]) => {
		const mode = addon.period === '/mo' ? 'subscription' : 'payment';
		redirectToCheckout(addon.stripePriceId, mode);
	};

	return (
		<section className="bg-white py-16 lg:py-24 min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="bg-pop-yellow border-3 border-black p-4 shadow-pop mb-8 inline-block transform rotate-1">
						<span className="font-bold text-xl uppercase tracking-widest font-headings">Shop</span>
					</div>
					<h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase leading-none">
						Power Up Your<br />
						<span
							className="bg-pop-yellow border-black border-2 px-2 shadow-[4px_4px_0px_black] inline-block mt-2"
							style={{ transform: 'skew(-5deg) rotate(-1deg)' }}
						>
							AI Workforce
						</span>
					</h1>
					<p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto text-gray-900">
						Add-ons, bundles, and premium services to supercharge your AI team
					</p>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
					{products.map((product) => {
						const Icon = product.icon;
						return (
							<div
								key={product.name}
								className="relative bg-white border-3 border-black shadow-pop p-8 hover:shadow-pop-hover transition-all hover:translate-x-[2px] hover:translate-y-[2px]"
							>
								{product.badge && (
									<div className="absolute -top-3 -right-3 bg-black text-white font-bold text-sm uppercase px-3 py-1 border-2 border-black transform rotate-3">
										{product.badge}
									</div>
								)}

								<div className="flex gap-6">
									<div className="bg-pop-yellow border-3 border-black p-4 h-fit">
										<Icon size={32} strokeWidth={2.5} />
									</div>
									<div className="flex-1">
										<h3 className="font-headings text-2xl font-bold uppercase mb-2">
											{product.name}
										</h3>
										<p className="text-gray-700 font-semibold mb-4">
											{product.description}
										</p>
										<div className="flex items-center gap-3 mb-6">
											<span className="text-3xl font-bold">${product.price}</span>
											{product.originalPrice && (
												<span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
											)}
										</div>
										<Button
											variant="primary"
											onClick={() => handleProductPurchase(product.stripePriceId)}
										>
											Add to Cart
										</Button>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Add-ons Section */}
				<div className="mb-16">
					<h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 text-center">Monthly Add-ons</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
						{addons.map((addon) => (
							<div
								key={addon.name}
								className="bg-white border-3 border-black p-6 text-center hover:bg-pop-yellow transition-colors cursor-pointer"
							>
								<h3 className="font-headings text-xl font-bold uppercase mb-2">
									{addon.name}
								</h3>
								<div className="mb-4">
									<span className="text-2xl font-bold">${addon.price}</span>
									<span className="text-gray-600 font-semibold">{addon.period}</span>
								</div>
								<button
									onClick={() => handleAddonPurchase(addon)}
									className="font-bold uppercase text-sm border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
								>
									Add
								</button>
							</div>
						))}
					</div>
				</div>

				{/* CTA */}
				<div className="bg-black text-white border-3 border-black p-8 md:p-12 text-center">
					<h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">
						Need Something Custom?
					</h2>
					<p className="text-xl font-semibold mb-8 max-w-2xl mx-auto opacity-90">
						Contact our sales team for enterprise solutions and custom implementations
					</p>
					<Button variant="dark" size="lg" href="/get-started">
						Contact Sales
					</Button>
				</div>
			</div>
		</section>
	);
};
