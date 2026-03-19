import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { User, Session } from '@supabase/supabase-js';

interface AuthContextType {
	user: User | null;
	session: Session | null;
	loading: boolean;
	signInWithGoogle: () => Promise<void>;
	signInWithEmail: (email: string, password: string) => Promise<{ error: string | null }>;
	signUp: (email: string, password: string, metadata?: Record<string, string>) => Promise<{ error: string | null }>;
	signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [session, setSession] = useState<Session | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!isSupabaseConfigured) {
			setLoading(false);
			return;
		}

		// Get initial session
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
			setUser(session?.user ?? null);
			setLoading(false);
		});

		// Listen for auth changes
		const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
			setUser(session?.user ?? null);
			setLoading(false);
		});

		return () => subscription.unsubscribe();
	}, []);

	const signInWithGoogle = async () => {
		if (!isSupabaseConfigured) {
			alert('Supabase is not configured. Set your env vars in .env.local to enable auth.');
			return;
		}
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `${window.location.origin}/auth/callback`,
			},
		});
		if (error) {
			console.error('Google sign-in error:', error.message);
		}
	};

	const signInWithEmail = async (email: string, password: string) => {
		if (!isSupabaseConfigured) {
			return { error: 'Supabase is not configured. Set your env vars in .env.local to enable auth.' };
		}
		const { error } = await supabase.auth.signInWithPassword({ email, password });
		return { error: error?.message ?? null };
	};

	const signUp = async (email: string, password: string, metadata?: Record<string, string>) => {
		if (!isSupabaseConfigured) {
			return { error: 'Supabase is not configured. Set your env vars in .env.local to enable auth.' };
		}
		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: { data: metadata },
		});
		return { error: error?.message ?? null };
	};

	const signOut = async () => {
		if (!isSupabaseConfigured) return;
		await supabase.auth.signOut();
	};

	return (
		<AuthContext.Provider value={{ user, session, loading, signInWithGoogle, signInWithEmail, signUp, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
}
