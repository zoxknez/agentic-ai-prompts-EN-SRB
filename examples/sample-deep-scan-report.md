# Sample Deep Scan Report (Prompt 05)

> `reports/deep-scan-2026-07-01.md` — fictional project, format reference.

---

## 1. Executive Summary

Scanned 6 pages, 8 API routes, 12 existing unit tests. Found: 1 P0 (fixed), 2 P1 (1 fixed, 1 unfixed), 4 P2. Build and lint pass. E2E partially blocked by missing admin test account for one route.

---

## 2. Route Map

| Route | Tested | Status | Notes |
|-------|--------|--------|-------|
| `/` | ✅ | Pass | — |
| `/login` | ✅ | Pass | — |
| `/dashboard` | ✅ | Pass | — |
| `/admin` | ✅ | Pass | Fixed P0 during scan |
| `/settings` | ✅ | P2 | Email field not validated |
| `/dashboard/projects/[id]` | ❌ | [COVERAGE GAP] | No test project seeded |

---

## 3. API / Server Action Map

| Endpoint | Tested | Status |
|----------|--------|--------|
| GET /api/projects | ✅ | Pass |
| POST /api/tasks | ✅ | P1 Finding | Missing validation → FIXED |
| PATCH /api/tasks/[id] | ✅ | Pass |
| DELETE /api/tasks/[id] | ❌ | [NOT RUN] | Blocked by auth token expiry in test run |

---

## 4. Verification Command Results

| Command | Result | Notes |
|---------|--------|-------|
| pnpm run lint | ✅ Pass | — |
| pnpm run build | ✅ Pass | — |
| pnpm run test | ✅ Pass | 15/15 |
| pnpm run test:e2e | ⚠️ 4/5 | 1 flaky login test |

---

## 5. All Findings (excerpt)

| # | Severity | Area | Location | Issue | Status |
|---|----------|------|----------|-------|--------|
| 1 | P0 | Auth | middleware.ts:18 | /admin unprotected | FIXED |
| 2 | P1 | API | tasks/route.ts | No validation | FIXED |
| 3 | P1 | API | invoices/route.ts | [DOES NOT EXIST] | N/A |

---

## 6. Cleanup Status

- QA_RUN_ID: `QA_a1b2c3`
- Test data created: 8
- Cleaned up: 8
- Remaining: 0

---

## 7. Residual Risk

[COVERAGE GAP] Resend email integration — mocked only. Production webhook endpoints not in scope.

---

## 8. P0/P1 Status Summary

| # | Severity | Issue | Status |
|---|----------|-------|--------|
| 1 | P0 | Auth bypass /admin | ✅ Fixed, re-tested |
| 2 | P1 | POST /api/tasks validation | ✅ Fixed, re-tested |
