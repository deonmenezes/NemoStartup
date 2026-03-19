import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '../Button';
import { Logo } from '../ui/Logo';
import { useAuth } from '../../context/AuthContext';

export const LoginPage: React.FC = () => {
	const navigate = useNavigate();
	const { signInWithEmail, signInWithGoogle } = useAuth();
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError(null);

		const { error } = await signInWithEmail(formData.email, formData.password);
		if (error) {
			setError(error);
			setIsLoading(false);
		} else {
			navigate('/');
		}
	};

	const handleGoogleSignIn = async () => {
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
		<section className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
			<div className="max-w-md w-full">
				{/* Logo */}
				<div className="text-center mb-8">
					<Logo size="lg" className="justify-center" />
				</div>

				{/* Login Card */}
				<div className="bg-white border-3 border-black shadow-pop p-8">
					<h1 className="font-headings text-4xl font-bold uppercase mb-2 text-center">
						Welcome Back
					</h1>
					<p className="text-gray-700 font-semibold text-center mb-8">
						Log in to manage your AI team
					</p>

					{error && (
						<div className="mb-6 p-3 bg-red-50 border-2 border-red-500 text-red-700 font-semibold text-sm">
							{error}
						</div>
					)}

					{/* Google Sign In */}
					<button
						onClick={handleGoogleSignIn}
						className="w-full flex items-center justify-center px-4 py-3 border-3 border-black bg-white hover:bg-gray-100 transition-colors font-bold mb-6"
					>
						<svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
							<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
							<path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
							<path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
							<path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
						</svg>
						Continue with Google
					</button>

					<div className="relative mb-6">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t-2 border-gray-300" />
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-4 bg-white font-bold uppercase text-gray-500">Or with email</span>
						</div>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label htmlFor="email" className="block font-bold uppercase text-sm mb-2">
								Email Address
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
									placeholder="••••••••"
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

						<div className="flex items-center justify-between">
							<label className="flex items-center">
								<input type="checkbox" className="mr-2 w-4 h-4 border-2 border-black" />
								<span className="font-semibold text-sm">Remember me</span>
							</label>
							<Link to="/forgot-password" className="font-bold text-sm hover:underline">
								Forgot password?
							</Link>
						</div>

						<Button
							type="submit"
							className="w-full"
							disabled={isLoading}
						>
							{isLoading ? 'Logging in...' : 'Log In'}
						</Button>
					</form>

					<div className="mt-8 text-center">
						<p className="font-semibold text-gray-700">
							Don't have an account?{' '}
							<Link to="/get-started" className="font-bold text-black hover:underline">
								Get Started
							</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
