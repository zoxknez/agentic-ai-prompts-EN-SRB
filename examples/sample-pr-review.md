# Sample PR Review (Prompt 07)

> Fictional PR `feature/export-csv` — format reference only.

---

## 1. Summary

Adds CSV export for admin users on `/dashboard/users`. Implementation follows existing API patterns. One **MAJOR** finding: missing backend role check on new endpoint. Overall: **REQUEST CHANGES**.

---

## 2. Change Map

| File | What Changed | Risk |
|------|--------------|------|
| `src/app/dashboard/users/page.tsx` | Export button + client handler | Low |
| `src/app/api/users/export/route.ts` | New GET endpoint | **High** — auth |
| `tests/export.test.ts` | New tests | Low |

---

## 3. Findings

| # | Severity | File | Issue | Suggestion |
|---|----------|------|-------|------------|
| 1 | MAJOR | `api/users/export/route.ts:12` | No `ADMIN` role check | Add `requireRole('ADMIN')` |
| 2 | MINOR | `page.tsx:45` | Button visible to all users briefly | Hide via server-side role prop |
| 3 | NIT | `route.ts:8` | Variable name `data` | Rename to `users` |

---

## 4. Tests & Verification

| Check | Status | Notes |
|-------|--------|-------|
| lint | ✅ Pass | — |
| build | ✅ Pass | — |
| unit tests | ⚠️ Pass | Missing negative test for non-admin |
| manual | [NOT RUN] | Reviewer did not run locally |

---

## 5. Questions for Author

- Should export include soft-deleted users? [ASSUMPTION] No — not documented.

---

## 6. Verdict

**REQUEST CHANGES** — MAJOR #1 must be fixed before merge; add non-admin test case.
