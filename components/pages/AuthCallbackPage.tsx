import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

export const AuthCallbackPage: React.FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		supabase.auth.onAuthStateChange((event) => {
			if (event === 'SIGNED_IN') {
				navigate('/', { replace: true });
			}
		});

		// Fallback: if no auth event fires within 5s, redirect home
		const timeout = setTimeout(() => navigate('/', { replace: true }), 5000);
		return () => clearTimeout(timeout);
	}, [navigate]);

	return (
		<section className="min-h-screen bg-white flex items-center justify-center">
			<div className="text-center">
				<div className="w-12 h-12 border-4 border-black border-t-pop-yellow rounded-full animate-spin mx-auto mb-4" />
				<p className="font-bold text-xl uppercase">Completing sign in...</p>
			</div>
		</section>
	);
};
