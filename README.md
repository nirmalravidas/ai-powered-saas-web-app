# AI Course Generator SaaS

Generate structured courses using IBM watsonx.ai and store them in IBM Cloudant. Built with Next.js, TypeScript, Tailwind, shadcn/ui, and Clerk.

## Features
- AI-generated course outlines with modules and lessons
- Clerk authentication
- Persistence in IBM Cloudant
- Modern UI with shadcn/ui and Tailwind

## Tech Stack
- Frontend: Next.js 15, TypeScript, Tailwind, shadcn/ui
- Auth: Clerk
- AI: IBM watsonx.ai via `@ibm-cloud/watsonx-ai`
- DB: IBM Cloudant via `@ibm-cloud/cloudant`

## Copy github repo
```bash
git clone https://github.com/IBM/ai-powered-saas-web-app.git
```

## Setup
1. Install dependencies
```bash
yarn install
```

2. Create `.env.local` with the following variables
```bash
# app
NEXT_PUBLIC_APP_DOMAIN=
NEXT_PUBLIC_APP_NAME=SmartSyllabus

#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

#WatsonX
WATSONX_AI_AUTH_TYPE=
WATSONX_AI_APIKEY=
WATSONX_AI_PROJECT_ID=
WATSONX_AI_URL=

# Cloudant
CLOUDANT_URL=
CLOUDANT_API_KEY=
```

3. Ensure Cloudant databases exist
Create databases named `users` in your Cloudant instance.

4. Run the app
```bash
yarn dev
```

## Notes
- The API route `src/app/api/generate-course/route.ts` calls watsonx.ai
- Update the `modelId` in the route if you prefer a different model.
