# Welfare Scheme Platform Implementation Plan

This document tracks the step-by-step implementation of the platform. We will implement these tasks one by one to ensure you understand and learn from each stage.

## Phase 1: Project Setup & Turborepo
- [x] Initialize Turborepo.
- [x] Scaffold Next.js in `apps/frontend`.
- [x] Scaffold basic Express.js boilerplate in `apps/backend`.
- [x] Configure basic workspace dependencies.

## Phase 2: Database & Models Setup
- [x] Connect Express to MongoDB (`apps/backend/src/config/db.ts`).
- [x] Create `User` Domain Model with DDD pattern (Entity, Repo Interface, Mongo Implementation, Zod).
- [ ] Create `Scheme` Mongoose Schema (eligibility rules, benefits) (`apps/backend/src/models/Scheme.ts`).
- [ ] Create `Application` Mongoose Schema (tracking user scheme applications) (`apps/backend/src/models/Application.ts`).

## Phase 3: Core API Endpoints & Authentication
- [ ] Setup User Authentication API (Register, Login, JWT tokens).
- [ ] Setup Scheme Management API (CRUD operations for Admin, listing for Citizen).
- [ ] Setup Mock Government API Service (to fetch mock schemas).
- [ ] Setup Applications API (Apply for scheme, check status).

## Phase 4: Frontend Fundamentals
- [ ] Configure Tailwind CSS & `shadcn/ui` components.
- [ ] Build Authentication Pages (Login / Signup).
- [ ] Implement state management for User Session.

## Phase 5: Dashboards & UI
- [ ] Build Citizen Dashboard (Profile management, available schemes).
- [ ] Build Admin Dashboard (Manage schemes, view applications).

## Phase 6: AI Integration (OpenRouter)
- [ ] Setup LLM Service in the backend (using OpenRouter / Llama 3).
- [ ] Create tool-calling logic to fetch eligible schemes based on chat context.
- [ ] Add AI Chat Interface on the frontend.
