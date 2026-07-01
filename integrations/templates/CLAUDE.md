# Claude Code — Project Instructions

@AGENTS.md

## Claude-specific

- Read the full task prompt from `prompts/en/` (or `prompts/sr/`) before acting.
- For read-only tasks (01, 02, 06, 07 review-only): do not use Edit/Write tools.
- For prompt 04: respect `APPROVAL_MODE` — stop after plan if `plan-only` or `step-by-step`.
- Prefer `prompts/en/00-quick-context.md` Compact Mode when context is tight.
- Subagents: use Architect persona for 01/06, Reviewer for 02/07, Implementer for 03/04.

Prompt routing: see **Which Prompt to Use** in `AGENTS.md`.
