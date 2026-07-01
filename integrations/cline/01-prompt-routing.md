# Prompt routing — Universal AI Engineering Prompts

Before starting work, read the matching file from `prompts/en/` or `prompts/sr/`:

| # | When | File |
|---|------|------|
| 00 | Session start | `00-quick-context.md` |
| 01 | First repo visit | `01-architecture-scan.md` |
| 02 | Audit after vibe coding | `02-post-vibe-audit.md` |
| 03 | Bug fix | `03-safe-refactor.md` |
| 04 | New feature | `04-feature-implementation.md` |
| 05 | Pre-production QA | `05-deep-scan.md` |
| 06 | Tech debt triage | `06-tech-debt-triage.md` |
| 07 | PR review | `07-pr-review.md` |

Use **Compact Mode** at the bottom of each file when context is limited.

Read-only prompts (01, 02, 06): do not edit files unless user explicitly allows.

Prompt 04: honor `APPROVAL_MODE` — `plan-only` means stop after the plan.
