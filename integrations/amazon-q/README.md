# Amazon Q Developer — Project Context

Amazon Q reads context from **`.amazonq/rules/`** (workspace) or project documentation in the IDE.

## Setup

```bash
mkdir -p .amazonq/rules
cp integrations/templates/AGENTS.md .amazonq/rules/universal-prompts.md
```

Or in VS Code with Amazon Q: **Amazon Q → Preferences → Include project context** — ensure `AGENTS.md` is at repo root.

## Inline chat

Paste Compact Mode from the relevant `prompts/en/0X-*.md` file plus session context (Stack, Permissions, Test Commands).

## Safety

Same Global Agent Safety Rules as `AGENTS.md` — required for all Q sessions on this project.
