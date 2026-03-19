import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Check } from 'lucide-react';
import { Button } from '../Button';
import { Logo } from '../ui/Logo';
import { useAuth } from '../../context/AuthContext';

const planFeatures = {
	starter: ["1 AI Employee", "Email Management", "Basic Analytics", "8/5 Support"],
	growth: ["5 AI Employees", "Advanced Analytics", "Social Media", "24/7 Support"],
	enterprise: ["Unlimited AI", "Custom Integrations", "Priority Support", "Dedicated Manager"]
};

export const GetStartedPage: React.FC = () => {
	const navigate = useNavigate();
	const { signUp, signInWithGoogle } = useAuth();
	const [step, setStep] = useState(1);
	const [showPassword, setShowPassword] = useState(false);
	const [selectedPlan, setSelectedPlan] = useState<'starter' | 'growth' | 'enterprise'>('growth');
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		company: '',
		phone: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (step < 3) {
			setStep(step + 1);
			return;
		}

		setIsLoading(true);
		setError(null);

		const { error } = await signUp(formData.email, formData.password, {
			first_name: formData.firstName,
			last_name: formData.lastName,
			full_name: `${formData.firstName} ${formData.lastName}`,
			company: formData.company,
			phone: formData.phone,
			plan: selectedPlan,
		});

		if (error) {
			setError(error);
			setIsLoading(false);
		} else {
			navigate('/');
		}
	};

	const handleGoogleSignUp = async () => {
		setError(null);
		await signInWithGoogle();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section className="min-h-screen bg-pop-yellow py-12 px-4">
			<div className="max-w-2xl mx-auto">
				{/* Logo */}
				<div className="text-center mb-8">
					<Logo size="lg" className="justify-center" />
				</div>

				{/* Progress Bar */}
				<div className="flex items-center justify-center mb-8 gap-4">
					{[1, 2, 3].map((s) => (
						<React.Fragment key={s}>
							<div
								className={`w-10 h-10 rounded-full border-3 border-black flex items-center justify-center font-bold text-lg transition-colors ${step >= s ? 'bg-black text-white' : 'bg-white text-black'
									}`}
							>
								{step > s ? <Check size={20} /> : s}
							</div>
							{s < 3 && (
								<div className={`w-16 h-1 border-2 border-black ${step > s ? 'bg-black' : 'bg-white'}`} />
							)}
						</React.Fragment>
					))}
				</div>

				{/* Form Card */}
				<div className="bg-white border-3 border-black shadow-pop p-8">
					{error && (
						<div className="mb-6 p-3 bg-red-50 border-2 border-red-500 text-red-700 font-semibold text-sm">
							{error}
						</div>
					)}

					<form onSubmit={handleSubmit}>
						{/* Step 1: Account Info */}
						{step === 1 && (
							<>
								<h1 className="font-headings text-4xl font-bold uppercase mb-2 text-center">
									Create Account
								</h1>
								<p className="text-gray-700 font-semibold text-center mb-8">
									Start your 14-day free trial
								</p>

								{/* Google Sign Up */}
								<button
									type="button"
									onClick={handleGoogleSignUp}
									className="w-full flex items-center justify-center px-4 py-3 border-3 border-black bg-white hover:bg-gray-100 transition-colors font-bold mb-6"
								>
									<svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
										<path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
										<path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
										<path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
										<path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
									</svg>
									Sign up with Google
								</button>

								<div className="relative mb-6">
									<div className="absolute inset-0 flex items-center">
										<div className="w-full border-t-2 border-gray-300" />
									</div>
									<div className="relative flex justify-center text-sm">
										<span className="px-4 bg-white font-bold uppercase text-gray-500">Or with email</span>
									</div>
								</div>

								<div className="space-y-4">
									<div className="grid grid-cols-2 gap-4">
										<div>
											<label htmlFor="firstName" className="block font-bold uppercase text-sm mb-2">
												First Name
											</label>
											<input
												id="firstName"
												name="firstName"
												type="text"
												required
												value={formData.firstName}
												onChange={handleChange}
												className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-2 focus:ring-pop-yellow font-semibold"
											/>
										</div>
										<div>
											<label htmlFor="lastName" className="block font-bold uppercase text-sm mb-2">
												Last Name
											</label>
											<input
												id="lastName"
												name="lastName"
												type="text"
												required
												value={formData.lastName}
												onChange={handleChange}
												className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-2 focus:ring-pop-yellow font-semibold"
											/>
										</div>
									</div>

									<div>
										<label htmlFor="email" className="block font-bold uppercase text-sm mb-2">
											Work Email
										</label>
										<input
											id="email"
											name="email"
											type="email"
											required
											value={formData.email}
											onChange={handleChange}
											className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-2 focus:ring-pop-yellow font-semibold"
											placeholder="you@company.com"
										/>
									</div>

									<div>
										<label htmlFor="password" className="block font-bold uppercase text-sm mb-2">
											Password
										</label>
										<div className="relative">
											<input
												id="password"
												name="password"
												type={showPassword ? 'text' : 'password'}
												required
												value={formData.password}
												onChange={handleChange}
												className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-2 focus:ring-pop-yellow font-semibold pr-12"
												placeholder="Min. 8 characters"
											/>
											<button
												type="button"
												onClick={() => setShowPassword(!showPassword)}
												className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
											>
												{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
											</button>
										</div>
									</div>
								</div>
							</>
						)}

						{/* Step 2: Company Info */}
						{step === 2 && (
							<>
								<h1 className="font-headings text-4xl font-bold uppercase mb-2 text-center">
									Company Details
								</h1>
								<p className="text-gray-700 font-semibold text-center mb-8">
									Tell us about your business
								</p>

								<div className="space-y-4">
									<div>
										<label htmlFor="company" className="block font-bold uppercase text-sm mb-2">
											Company Name
										</label>
										<input
											id="company"
											name="company"
											type="text"
											required
											value={formData.company}
											onChange={handleChange}
											className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-2 focus:ring-pop-yellow font-semibold"
										/>
									</div>

									<div>
										<label htmlFor="phone" className="block font-bold uppercase text-sm mb-2">
											Phone Number (Optional)
										</label>
										<input
											id="phone"
											name="phone"
											type="tel"
											value={formData.phone}
											onChange={handleChange}
											className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-2 focus:ring-pop-yellow font-semibold"
										/>
									</div>
								</div>
							</>
						)}

						{/* Step 3: Choose Plan */}
						{step === 3 && (
							<>
								<h1 className="font-headings text-4xl font-bold uppercase mb-2 text-center">
									Choose Your Plan
								</h1>
								<p className="text-gray-700 font-semibold text-center mb-8">
									All plans include 14-day free trial
								</p>

								<div className="space-y-4">
									{(['starter', 'growth', 'enterprise'] as const).map((plan) => (
										<button
											key={plan}
											type="button"
											onClick={() => setSelectedPlan(plan)}
											className={`w-full p-4 border-3 border-black text-left transition-all ${selectedPlan === plan
													? 'bg-pop-yellow shadow-pop'
													: 'bg-white hover:bg-gray-50'
												}`}
										>
											<div className="flex items-center justify-between mb-2">
												<span className="font-headings text-2xl font-bold uppercase">{plan}</span>
												<div className={`w-6 h-6 rounded-full border-3 border-black flex items-center justify-center ${selectedPlan === plan ? 'bg-black' : 'bg-white'
													}`}>
													{selectedPlan === plan && <Check size={14} className="text-white" />}
												</div>
											</div>
											<ul className="flex flex-wrap gap-2">
												{planFeatures[plan].map((feature) => (
													<li key={feature} className="text-sm font-semibold bg-white px-2 py-1 border border-black">
														{feature}
													</li>
												))}
											</ul>
										</button>
									))}
								</div>
							</>
						)}

						{/* Navigation */}
						<div className="mt-8 flex gap-4">
							{step > 1 && (
								<Button
									type="button"
									variant="secondary"
									onClick={() => setStep(step - 1)}
									className="flex-1"
								>
									Back
								</Button>
							)}
							<Button
								type="submit"
								className="flex-1"
								disabled={isLoading}
							>
								{isLoading ? 'Creating Account...' : step < 3 ? 'Continue' : 'Start Free Trial'}
							</Button>
						</div>
					</form>

					<div className="mt-6 text-center">
						<p className="font-semibold text-gray-700">
							Already have an account?{' '}
							<Link to="/login" className="font-bold text-black hover:underline">
								Log In
							</Link>
						</p>
					</div>
				</div>

				{/* Trust Badge */}
				<div className="mt-8 text-center">
					<p className="font-bold text-sm">
						🔒 Your data is secure. We never share your information.
					</p>
				</div>
			</div>
		</section>
	);
};
