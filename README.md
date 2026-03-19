# Nemo Company

AI-powered workforce platform. React + TypeScript + Vite.

## Quick Start

```bash
npm install
```

Copy `.env.local` and fill in your keys:

```env
# Gemini AI (for demo page)
GEMINI_API_KEY=your-gemini-api-key

# Supabase Auth (Google OAuth + email/password signup & login)
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Stripe Payments (pricing & shop checkout)
VITE_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

Run it:

```bash
npm run dev
```

App opens at **http://localhost:3000**.

## Where to Get Your Keys

| Key | Where |
|-----|-------|
| `GEMINI_API_KEY` | [Google AI Studio](https://aistudio.google.com/apikey) |
| `VITE_SUPABASE_URL` | [Supabase Dashboard](https://supabase.com/dashboard) → Project Settings → API → Project URL |
| `VITE_SUPABASE_ANON_KEY` | Same page → `anon` `public` key |
| `VITE_STRIPE_PUBLISHABLE_KEY` | [Stripe Dashboard](https://dashboard.stripe.com/apikeys) → Publishable key |

## Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Go to **Authentication → Providers → Google** and enable it (needs Google OAuth client ID/secret from [Google Cloud Console](https://console.cloud.google.com/apis/credentials))
3. Add `http://localhost:3000/auth/callback` to your Supabase **Redirect URLs** (Authentication → URL Configuration)

## Stripe Setup

1. Create products & prices in your [Stripe Dashboard](https://dashboard.stripe.com/products)
2. Replace the placeholder price IDs in `components/pages/PricingPage.tsx` and `ShopPage.tsx` with your real Stripe Price IDs (e.g. `price_1Abc123...`)

## Chat Widget

The floating chat widget (bottom-right) sends messages via the user's email client. Change the contact email in `components/ChatWidget.tsx` (line 5).
