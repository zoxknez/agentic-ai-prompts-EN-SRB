# Sample Post-Vibe Audit Report (Prompt 02)

> Fictional project — format reference only.

---

## 1. Executive Summary

TaskFlow is a functional MVP with solid UI structure but **not production-ready**. Auth role checks are inconsistent, API validation is partial, and test coverage is minimal. Top risks: unprotected admin route (P0), missing input validation on tasks API (P1), no password reset (P1).

---

## 2. Architecture Observations

**Good:** Clear `src/app/` + `src/lib/` separation, Prisma schema is readable.  
**Problematic:** Session checks duplicated per API route; no shared auth helper.

---

## 3. Security Findings

| Severity | Location | Issue |
|----------|----------|-------|
| P0 | `src/middleware.ts` | `/admin` not role-guarded in middleware |
| P1 | `src/app/api/tasks/route.ts` | POST accepts unvalidated body |
| P2 | `src/app/api/projects/[id]/route.ts` | Error responses leak Prisma messages in dev |

No hardcoded secrets found. `.env.example` [DOES NOT EXIST] — [COVERAGE GAP].

---

## 4. P0–P3 Findings Table

| # | Severity | Category | File / Location | Issue | Risk | Proposed Fix |
|---|----------|----------|-----------------|-------|------|--------------|
| 1 | P0 | Auth | middleware.ts:18 | Admin route unprotected | Auth bypass | Add role check for `/admin` |
| 2 | P1 | API | api/tasks/route.ts:34 | No Zod validation | Injection / bad data | Add schema validation |
| 3 | P2 | UX | dashboard/page.tsx | Missing empty state | Poor UX | Add EmptyState component |
| 4 | P3 | A11y | login/page.tsx | Missing form labels | Accessibility | Add `aria-label` |

---

## 5. Recommended Fix Order

1. P0 middleware fix → prompt **03 Safe Refactor**
2. P1 API validation → prompt **03**
3. Add `.env.example` → quick win
4. P2/P3 in next sprint

---

## 6. What NOT to Change Yet

`src/lib/dates.ts` — messy but stable; used in 12 places. Refactor only with tests.

---

## 7. Residual Risk

[COVERAGE GAP] Payment flows — [DOES NOT EXIST]. Email delivery (Resend) not tested without API key.
