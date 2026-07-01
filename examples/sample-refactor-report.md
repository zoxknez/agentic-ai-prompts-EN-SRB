# Sample Safe Refactor Report (Prompt 03)

> Fictional project — format reference only.

---

## Problem

Non-admin users could access `/admin` by navigating directly to the URL.

**Reproduction:**
1. Log in as `user@test.com` (role: USER)
2. Navigate to `http://localhost:3000/admin`
3. **Expected:** 403 or redirect to dashboard
4. **Actual:** Admin page renders

---

## Root Cause

**File:** `src/middleware.ts`, lines 12–22  
**Function:** `middleware()`  
**Why:** Middleware only checks `session` existence for `/dashboard/*`, not role for `/admin`.

---

## Changes Made

| File | Change |
|------|--------|
| `src/middleware.ts` | Added `ADMIN` role check for `/admin` paths |
| `tests/middleware.test.ts` | Added test: USER → /admin returns redirect |

---

## Tests

- `middleware.test.ts` — `rejects non-admin from /admin` (fails before fix, passes after)
- Edge cases: unauthenticated user, expired session [ASSUMPTION: covered by existing auth tests]

---

## Verification Results

| Command | Result |
|---------|--------|
| pnpm run lint | ✅ Pass |
| pnpm run build | ✅ Pass |
| pnpm run test | ✅ Pass (15/15) |
| pnpm run test:e2e | [NOT RUN] — no Playwright in CI sandbox |

---

## Assumptions

- [ASSUMPTION] Admin users have `role: ADMIN` in JWT session token.

---

## Risks & Follow-up

- Verify `/api/admin/*` routes also enforce role (separate audit item).
- Manual check: admin user can still access `/admin`.
