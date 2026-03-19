import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
	console.warn(
		'Stripe publishable key is missing. Payment features will not work.\n' +
		'Set VITE_STRIPE_PUBLISHABLE_KEY in your .env.local file.'
	);
}

let stripePromise: Promise<Stripe | null> | null = null;

export function getStripe(): Promise<Stripe | null> {
	if (!stripePromise && stripePublishableKey) {
		stripePromise = loadStripe(stripePublishableKey);
	}
	return stripePromise || Promise.resolve(null);
}

export async function redirectToCheckout(priceId: string, mode: 'subscription' | 'payment') {
	const stripe = await getStripe();
	if (!stripe) {
		console.error('Stripe has not been initialized. Check your VITE_STRIPE_PUBLISHABLE_KEY.');
		alert('Payment is not configured yet. Please set up your Stripe keys.');
		return;
	}

	const { error } = await stripe.redirectToCheckout({
		lineItems: [{ price: priceId, quantity: 1 }],
		mode,
		successUrl: `${window.location.origin}/?checkout=success`,
		cancelUrl: `${window.location.origin}/?checkout=cancelled`,
	});

	if (error) {
		console.error('Stripe checkout error:', error.message);
		alert(`Checkout error: ${error.message}`);
	}
}
