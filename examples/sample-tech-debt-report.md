# Sample Tech Debt Triage Report (Prompt 06)

> Fictional project — format reference only. **No code changes.**

---

## 1. Executive Summary

Debt health: **moderate**. Onboarding friction comes from duplicated auth checks and missing `.env.example`. Focus next sprint on shared `requireAuth()` helper (NOW) and test gaps on API routes (NEXT).

---

## 2. Debt Register

| # | Category | Location | Description | Impact | Effort | Priority | Risk if Ignored |
|---|----------|----------|-------------|--------|--------|----------|-----------------|
| 1 | Duplication | `src/app/api/**` | Session check copy-pasted | 4 | 2 | NOW | High — new routes miss checks |
| 2 | Test gaps | `src/app/api/` | No API integration tests | 4 | 3 | NEXT | Medium |
| 3 | Config | project root | No `.env.example` | 3 | 1 | NOW | Medium — onboarding |
| 4 | Dead code | `src/lib/legacy/` | Unused exports | 2 | 2 | LATER | Low |
| 5 | Documentation | README | Stale setup steps | 2 | 1 | LATER | Low |

---

## 3. Quick Wins (≤ 1 day)

1. Add `.env.example` with all required vars documented.
2. Remove `src/lib/legacy/` after confirming zero imports.

---

## 4. Do Not Touch Yet

`src/components/TaskBoard.tsx` — large component but stable; refactor only after E2E coverage exists.

---

## 5. Suggested Sequencing

1. `.env.example` (no dependencies)
2. `requireAuth()` / `requireRole()` helpers
3. Migrate API routes to helpers one-by-one
4. Add API tests per route

---

## 6. Handoff Prompts

| Item | Next prompt |
|------|-------------|
| Shared auth helper | 04 Feature Implementation |
| Fix specific route bug | 03 Safe Refactor |
| Pre-deploy validation | 05 Deep Scan |

---

## 7. Residual Unknowns

[COVERAGE GAP] Celery job queue mentioned in README [ASSUMPTION] but [DOES NOT EXIST] in codebase — verify with team.
