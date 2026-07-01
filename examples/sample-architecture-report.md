# Sample Architecture Scan Report

> **Purpose:** Reference output for prompt `01-architecture-scan`. Shows expected depth, tagging, and structure.
> **Note:** Fictional project — illustrates format, not a real codebase.

---

## 1. Project Overview

**TaskFlow** is a B2B SaaS for small teams to manage projects and tasks. It provides a web dashboard, REST API, and email notifications. The stack is **Next.js 16 (App Router)**, **TypeScript**, **Prisma 7**, **PostgreSQL**, **Auth.js v5**, and **Tailwind 4**. [ASSUMPTION] Primary users are team leads and members in Serbian and English locales.

---

## 2. Architecture Map

```
Browser (Next.js App Router)
    │
    ├── Server Components / Client Components (src/app/)
    ├── API Routes (src/app/api/)
    └── Auth.js middleware (src/middleware.ts)
            │
            ▼
    Prisma Client (src/lib/prisma.ts)
            │
            ▼
    PostgreSQL
            │
            ├── Resend (transactional email) [ASSUMPTION: configured via RESEND_API_KEY]
            └── [DOES NOT EXIST] — no payment integration observed
```

---

## 3. Routes & API Map

| Type | Path | Method | Auth | Description |
|------|------|--------|------|-------------|
| Page | `/` | — | No | Marketing landing |
| Page | `/login` | — | No | Sign-in form |
| Page | `/dashboard` | — | Yes | Main task board |
| Page | `/dashboard/projects/[id]` | — | Yes | Project detail |
| Page | `/settings` | — | Yes | User settings |
| Page | `/admin` | — | Yes (role) | Admin panel |
| API | `/api/auth/[...nextauth]` | GET/POST | — | Auth.js handlers |
| API | `/api/projects` | GET, POST | Yes | List/create projects |
| API | `/api/projects/[id]` | GET, PATCH, DELETE | Yes | Project CRUD |
| API | `/api/tasks` | GET, POST | Yes | List/create tasks |
| API | `/api/tasks/[id]` | PATCH, DELETE | Yes | Task update/delete |

---

## 4. Auth & Permissions Map

- **Mechanism:** Auth.js v5 with credentials provider + JWT session strategy.
- **Session storage:** HTTP-only cookie (`authjs.session-token`).
- **Roles:** `USER`, `ADMIN` (enum in `prisma/schema.prisma`).
- **Guards:**
  - `src/middleware.ts` — protects `/dashboard/*` and `/settings`.
  - `/admin` — frontend hides nav link for non-admins; [COVERAGE GAP] backend role check on `/admin` page route not confirmed in middleware alone.
  - API routes — `getServerSession()` check in each handler; no shared wrapper observed.

---

## 5. Data Model Summary

| Model | Key Fields | Relations |
|-------|------------|-----------|
| User | id, email, passwordHash, role | projects (owner), tasks (assignee) |
| Project | id, name, ownerId | owner → User, tasks → Task[] |
| Task | id, title, status, projectId, assigneeId | project → Project, assignee → User |

Defined in: `prisma/schema.prisma`. Migrations in `prisma/migrations/`.

---

## 6. Existing Tests

| Area | Framework | Coverage |
|------|-----------|----------|
| API utilities | Vitest | `src/lib/__tests__/dates.test.ts` (1 file) |
| E2E | [DOES NOT EXIST] | No Playwright/Cypress config found |
| Component tests | [DOES NOT EXIST] | — |

**[COVERAGE GAP]:** Auth flows, API routes, and RBAC are untested.

---

## 7. Dependency Health

| Check | Result |
|-------|--------|
| Lockfile | `pnpm-lock.yaml` present, matches `package.json` |
| `pnpm audit` | [NOT RUN] — sandbox without network; recommended: `pnpm audit` |
| Notable | Next.js 16.0.1, Prisma 7.2.0 — appear current per package.json [ASSUMPTION] |

---

## 8. Risk Areas

| # | Area | Risk | Why |
|---|------|------|-----|
| 1 | `/admin` route | High | Role check may be UI-only |
| 2 | API handlers | High | Duplicated session checks; easy to miss on new endpoints |
| 3 | `tasks` PATCH | Medium | No Zod schema; accepts arbitrary JSON |
| 4 | Password reset | Medium | [DOES NOT EXIST] — no reset flow found |
| 5 | Error handling | Medium | Some API routes return raw Prisma errors in dev |

---

## 9. Quick Wins

1. Add shared `requireAuth()` / `requireRole()` helper for API routes.
2. Create `.env.example` with all required variables documented.
3. Add Zod validation to `POST /api/tasks` and `PATCH /api/tasks/[id]`.
4. Add middleware role check for `/admin`.

---

## 10. Suggested Next Steps

1. **Run prompt 02 (Post-Vibe Audit)** — full security and UX review.
2. Fix P0/P1 from audit using **prompt 03 (Safe Refactor)**.
3. Add E2E smoke tests before **prompt 05 (Deep Scan)**.
4. Schedule **prompt 06 (Tech Debt Triage)** if onboarding remains slow after quick wins.

---

More sample reports: [examples/README.md](./README.md)

---

*Generated as a format reference for Universal AI Engineering Prompts.*
