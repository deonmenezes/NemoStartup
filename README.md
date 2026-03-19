# NemoCompany

NemoCompany is a multi-agent automation platform built to run entire company workflows with AI.

This project is powered by **nMotron models** and designed as an end-to-end automation layer for business operations. Instead of one assistant doing one task, NemoCompany coordinates specialized AI agents across departments so work moves automatically from one stage to the next.

## What NemoCompany Automates

- Lead capture and qualification
- Sales follow-up and pipeline updates
- Customer support triage and response drafting
- Internal operations and task routing
- Reporting workflows and status summaries

## Multi-Agent Workflow Architecture

NemoCompany uses a multi-agent workflow where each AI agent owns a specific business function:

- **Intake Agent**: receives requests, forms, and messages
- **Routing Agent**: decides which team or process should handle the task
- **Execution Agent**: completes core actions based on workflow rules
- **Quality Agent**: validates outputs before handoff
- **Reporting Agent**: tracks outcomes and sends summaries

Together, these agents create full-company automation loops so tasks can be handled with minimal manual intervention.

## Model Stack

This implementation uses **nMotron models** for language reasoning, decision support, and workflow orchestration.

## Tech Stack

- React
- TypeScript
- Vite
- Supabase (auth and backend integration)
- Stripe (commerce and billing flows)

## Local Development

Install dependencies:

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

Run the app:

```bash
npm run dev
```

Default local URL:

`http://localhost:3000`

## Vision

NemoCompany is built around one core idea: an AI-first operating model where multi-agent workflows automate the full lifecycle of company execution, from incoming demand to completed outcomes.
