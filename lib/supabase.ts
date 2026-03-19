import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey && !supabaseUrl.startsWith('your-'));

if (!isSupabaseConfigured) {
	console.warn(
		'Supabase environment variables are missing or placeholder. Auth features will use stub mode.\n' +
		'Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env.local file.'
	);
}

export const supabase: SupabaseClient = isSupabaseConfigured
	? createClient(supabaseUrl, supabaseAnonKey)
	: (null as unknown as SupabaseClient);
