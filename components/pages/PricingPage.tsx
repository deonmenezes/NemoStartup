import React, { useState } from 'react';
import { Check, X, Zap, Rocket, Crown } from 'lucide-react';
import { Button } from '../Button';
import { redirectToCheckout } from '../../lib/stripe';

const pricingPlans = [
	{
		name: "Starter",
		price: 49,
		description: "Perfect for small businesses just getting started",
		icon: Zap,
		features: [
			{ name: "1 AI Employee", included: true },
			{ name: "Email Management", included: true },
			{ name: "Basic Analytics", included: true },
			{ name: "8/5 Support", included: true },
			{ name: "Social Media Management", included: false },
			{ name: "Lead Generation", included: false },
			{ name: "Custom Integrations", included: false },
		],
		popular: false,
		cta: "Ignite Your Growth",
		ctaSub: "14 days free — no card needed",
		stripePriceIds: {
			monthly: "price_starter_monthly",
			yearly: "price_starter_yearly",
		}
	},
	{
		name: "Growth",
		price: 149,
		description: "For growing businesses ready to scale",
		icon: Rocket,
		features: [
			{ name: "5 AI Employees", included: true },
			{ name: "Email Management", included: true },
			{ name: "Advanced Analytics", included: true },
			{ name: "24/7 Support", included: true },
			{ name: "Social Media Management", included: true },
			{ name: "Lead Generation", included: true },
			{ name: "Custom Integrations", included: false },
		],
		popular: true,
		cta: "Launch My AI Team",
		ctaSub: "Most businesses start here",
		stripePriceIds: {
			monthly: "price_growth_monthly",
			yearly: "price_growth_yearly",
		}
	},
	{
		name: "Enterprise",
		price: 449,
		description: "Full AI team for maximum scaling",
		icon: Crown,
		features: [
			{ name: "Unlimited AI Employees", included: true },
			{ name: "Email Management", included: true },
			{ name: "Enterprise Analytics", included: true },
			{ name: "24/7 Priority Support", included: true },
			{ name: "Social Media Management", included: true },
			{ name: "Lead Generation", included: true },
			{ name: "Custom Integrations", included: true },
		],
		popular: false,
		cta: "Go Unlimited",
		ctaSub: "For teams that want it all",
		isEnterprise: true,
		stripePriceIds: {
			monthly: "price_enterprise_monthly",
			yearly: "price_enterprise_yearly",
		}
	}
];

export const PricingPage: React.FC = () => {
	const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
	const discount = billingCycle === 'yearly' ? 0.8 : 1; // 20% discount for yearly

	const handlePlanSelect = (plan: typeof pricingPlans[number]) => {
		if ('isEnterprise' in plan && plan.isEnterprise) {
			window.location.href = '/get-started';
			return;
		}
		const priceId = plan.stripePriceIds[billingCycle];
		redirectToCheckout(priceId, 'subscription');
	};

	return (
		<section className="bg-white py-16 lg:py-24 min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="bg-pop-yellow border-3 border-black p-4 shadow-pop mb-8 inline-block transform rotate-1">
						<span className="font-bold text-xl uppercase tracking-widest font-headings">Simple Pricing</span>
					</div>
					<h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase leading-none">
						Scale Without<br />
						<span
							className="bg-pop-yellow border-black border-2 px-2 shadow-[4px_4px_0px_black] inline-block mt-2"
							style={{ transform: 'skew(-5deg) rotate(-1deg)' }}
						>
							Breaking the Bank
						</span>
					</h1>
					<p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto text-gray-900 mb-8">
						Choose the plan that fits your business. No hidden fees, cancel anytime.
					</p>

					{/* Billing Toggle */}
					<div className="flex items-center justify-center gap-4 mb-12">
						<span className={`font-bold text-lg ${billingCycle === 'monthly' ? 'text-black' : 'text-gray-500'}`}>
							Monthly
						</span>
						<button
							onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
							className="relative w-16 h-8 bg-black rounded-full p-1 transition-colors border-2 border-black"
						>
							<div
								className={`w-6 h-6 bg-pop-yellow rounded-full transition-transform transform ${billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'
									}`}
							/>
						</button>
						<span className={`font-bold text-lg ${billingCycle === 'yearly' ? 'text-black' : 'text-gray-500'}`}>
							Yearly
							<span className="ml-2 bg-pop-yellow text-black text-sm px-2 py-1 border border-black font-bold">
								Save 20%
							</span>
						</span>
					</div>
				</div>

				{/* Pricing Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{pricingPlans.map((plan) => {
						const Icon = plan.icon;
						return (
							<div
								key={plan.name}
								className={`relative bg-white border-3 border-black shadow-pop p-8 flex flex-col ${plan.popular ? 'transform scale-105 z-10' : ''
									}`}
							>
								{plan.popular && (
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
										<span className="bg-black text-white font-bold text-sm uppercase px-4 py-2 border-2 border-black">
											Most Popular
										</span>
									</div>
								)}

								<div className="flex items-center gap-3 mb-2">
									<div className="bg-pop-yellow border-2 border-black p-2">
										<Icon size={24} strokeWidth={2.5} />
									</div>
									<h3 className="font-headings text-3xl font-bold uppercase">
										{plan.name}
									</h3>
								</div>
								<p className="text-gray-700 font-semibold mb-6">
									{plan.description}
								</p>

								<div className="mb-6">
									<span className="text-5xl font-bold">
										${Math.round(plan.price * discount)}
									</span>
									<span className="text-gray-600 font-semibold">/month</span>
									{billingCycle === 'yearly' && (
										<p className="text-sm text-gray-500 mt-1">
											billed annually (${Math.round(plan.price * discount * 12)}/year)
										</p>
									)}
								</div>

								<ul className="space-y-3 mb-8 flex-1">
									{plan.features.map((feature) => (
										<li key={feature.name} className="flex items-center gap-3">
											{feature.included ? (
												<Check className="text-black flex-shrink-0" size={20} strokeWidth={3} />
											) : (
												<X className="text-gray-400 flex-shrink-0" size={20} strokeWidth={3} />
											)}
											<span className={`font-semibold ${feature.included ? 'text-black' : 'text-gray-400'}`}>
												{feature.name}
											</span>
										</li>
									))}
								</ul>

								<div>
									<Button
										variant={plan.popular ? 'primary' : 'secondary'}
										className="w-full"
										size="lg"
										onClick={() => handlePlanSelect(plan)}
									>
										{plan.cta}
									</Button>
									<p className="text-center text-sm font-semibold text-gray-500 mt-3">
										{plan.ctaSub}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				{/* FAQ Section */}
				<div className="mt-24 text-center">
					<h2 className="text-4xl md:text-5xl font-bold uppercase mb-12">
						Frequently Asked Questions
					</h2>
					<div className="grid gap-6 max-w-3xl mx-auto text-left">
						{[
							{ q: "Can I switch plans anytime?", a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately." },
							{ q: "Is there a free trial?", a: "Absolutely! All plans come with a 14-day free trial. No credit card required." },
							{ q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and wire transfers for enterprise customers." },
						].map((faq, i) => (
							<div key={i} className="bg-white border-3 border-black p-6 shadow-pop-hover">
								<h4 className="font-headings text-xl font-bold uppercase mb-2">{faq.q}</h4>
								<p className="text-gray-700 font-semibold">{faq.a}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
