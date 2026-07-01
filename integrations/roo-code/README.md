# Roo Code — Workspace Rules

Roo Code (fork of Cline) reads `.clinerules/` and optionally `.roorules` for mode-specific rules.

Copy the Cline integration:

```bash
mkdir -p .clinerules
cp integrations/cline/*.md .clinerules/
```

## Optional mode-specific rules

| Mode file | Prompt to load |
|-----------|----------------|
| `.roorules-architect` | Paste Compact Mode from `01-architecture-scan.md` or `06-tech-debt-triage.md` |
| `.roorules-code-reviewer` | Paste Compact Mode from `02-post-vibe-audit.md` or `07-pr-review.md` |
| `.roorules-debug` | Paste Compact Mode from `03-safe-refactor.md` |

Global safety: copy content from `integrations/cline/00-global-safety.md` into each mode file header.
