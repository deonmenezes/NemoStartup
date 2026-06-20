# NemoStartup (NemoCompany)

A multi-agent automation platform built to run entire company workflows with AI. Coordinates specialized AI agents (intake, routing, execution, quality, reporting) across business departments using nMotron models, presented as a pop-art landing page with React + Vite.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite 6, React Router 7
- **AI**: Google Gemini (`@google/genai`)
- **Auth/Backend**: Supabase (auth + database)
- **Payments**: Stripe (`@stripe/stripe-js`)
- **Icons**: Lucide React

## Setup

```bash
npm install
```

Create `.env.local`:

```env
GEMINI_API_KEY=your-gemini-api-key
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

## Build / Run / Test

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build (outputs to dist/)
npm run preview   # Preview production build locally
```

## Project Structure

```
App.tsx               Root app component with routing
index.tsx             Entry point
components/
  Header.tsx          Site navigation
  Hero.tsx            Hero/landing section
  ChatWidget.tsx      AI chat widget
  DemoSection.tsx     Product demo section
  SolutionSection.tsx Solution/features section
  ProblemSection.tsx  Problem statement section
  Testimonials.tsx    Testimonials section
  TeamGrid.tsx        Team display
  Footer.tsx          Site footer
  pages/              Page-level route components
  sections/           Additional section components
  ui/                 Shared UI primitives (Button, etc.)
lib/
  supabase.ts         Supabase client setup
  stripe.ts           Stripe client setup
context/
  AuthContext.tsx     Supabase auth context provider
public/               Static assets
vite.config.ts        Vite config (port 3000, @ alias, env vars)
metadata.json         Project metadata
```

## Architecture & Key Files

- **Entry**: `index.tsx` → `App.tsx` → route-based page components.
- **Auth**: Supabase auth wrapped in `context/AuthContext.tsx`; consume via `useAuth()` hook.
- **AI calls**: Use `@google/genai` with `process.env.GEMINI_API_KEY` (injected by Vite config).
- **Stripe**: Client-side setup in `lib/stripe.ts`; server-side webhook handling not present in this repo.
- **Path alias**: `@` maps to the project root (`vite.config.ts`).
- **Env vars**: Vite injects `GEMINI_API_KEY`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_STRIPE_PUBLISHABLE_KEY` — all must be set for full functionality.

## Conventions & Notes for Agents

- This is a **Vite + React** project (ESM, `"type": "module"`) — use ES imports throughout.
- Use the `@` alias for imports relative to the project root (e.g. `import { X } from '@/lib/supabase'`).
- Env vars prefixed `VITE_` are exposed to the browser; `GEMINI_API_KEY` is injected via `process.env.GEMINI_API_KEY` by the Vite define config.
- There is no test suite configured — verify changes by running `npm run dev`.
- Do not commit `.env.local` or any file containing API keys.
- The default branch is `main`.
