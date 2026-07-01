# 🔌 Agent Integrations

Ready-to-copy configuration templates for popular AI coding agents.

🇷🇸 [Srpski vodič](./README.sr.md)

---

## Quick setup (any project)

1. Copy the **`prompts/`** folder (and optionally **`examples/`**) into your project.
2. Pick your agent below and copy the matching files.
3. Start sessions with **`prompts/en/00-quick-context.md`** or a task prompt (01–07).

**Cross-tool baseline (recommended for all projects):**

```bash
cp integrations/templates/AGENTS.md ./AGENTS.md
```

`AGENTS.md` is read natively by **OpenAI Codex**, **Cursor**, **GitHub Copilot**, **Windsurf**, **Cline**, **Roo Code**, **Aider**, **Gemini CLI**, **Zed**, and others.

---

## Agent matrix

| Agent | Copy from | Destination in your project |
|-------|-----------|------------------------------|
| **All / Codex** | `templates/AGENTS.md` | `AGENTS.md` |
| **Cursor** | `cursor/*.mdc` | `.cursor/rules/` |
| **Cursor (legacy)** | `cursor/cursorrules-legacy` | `.cursorrules` |
| **Claude Code** | `templates/CLAUDE.md` + `AGENTS.md` | `CLAUDE.md` + `AGENTS.md` |
| **Claude Projects** | Upload `prompts/` to Project Knowledge | claude.ai UI |
| **Windsurf** | `windsurf/windsurfrules` | `.windsurfrules` |
| **GitHub Copilot** | `github-copilot/copilot-instructions.md` | `.github/copilot-instructions.md` |
| **Cline** | `cline/*.md` | `.clinerules/` |
| **Roo Code** | `cline/*.md` | `.clinerules/` (+ optional `.roorules-*`) |
| **Aider** | `aider/CONVENTIONS.md` + `aider/aider.conf.yml` | project root |
| **Continue.dev** | `continue/rules.md` | Continue config / Rules UI |
| **Gemini CLI** | `templates/GEMINI.md` + `AGENTS.md` | `GEMINI.md` + `AGENTS.md` |
| **ChatGPT / Custom GPT** | `openai/custom-gpt-instructions.md` | GPT Instructions field |
| **JetBrains AI** | `jetbrains/ai-assistant-rules.md` | Project Rules UI |
| **Amazon Q** | `templates/AGENTS.md` | `.amazonq/rules/` |

---

## Per-agent instructions

### Cursor

```bash
mkdir -p .cursor/rules
cp integrations/cursor/global-safety.mdc .cursor/rules/
cp integrations/cursor/prompt-routing.mdc .cursor/rules/
cp integrations/templates/AGENTS.md ./AGENTS.md
```

In chat: `@prompts/en/03-safe-refactor.md` + session context.

### Claude Code

```bash
cp integrations/templates/AGENTS.md ./AGENTS.md
cp integrations/templates/CLAUDE.md ./CLAUDE.md
```

Run with task prompt: `claude --add-dir prompts/`

### Claude Projects (web)

1. Upload all `prompts/en/*.md` to **Project Knowledge**.
2. Custom Instructions → paste from `openai/custom-gpt-instructions.md` (prompt index section).

### Windsurf

```bash
cp integrations/windsurf/windsurfrules ./.windsurfrules
cp integrations/templates/AGENTS.md ./AGENTS.md
```

### GitHub Copilot (VS Code / agent mode)

```bash
mkdir -p .github
cp integrations/github-copilot/copilot-instructions.md .github/copilot-instructions.md
cp integrations/templates/AGENTS.md ./AGENTS.md
```

Scoped rules (optional): `.github/instructions/*.instructions.md` per folder.

### Cline / Roo Code

```bash
mkdir -p .clinerules
cp integrations/cline/*.md .clinerules/
cp integrations/templates/AGENTS.md ./AGENTS.md
```

Roo mode files: see [roo-code/README.md](./roo-code/README.md).

### Aider

```bash
cp integrations/aider/CONVENTIONS.md ./CONVENTIONS.md
cp integrations/aider/aider.conf.yml ./.aider.conf.yml
cp integrations/templates/AGENTS.md ./AGENTS.md
```

Task-specific: `aider --read prompts/en/03-safe-refactor.md`

### Continue.dev

1. Copy rules from [continue/rules.md](./continue/rules.md) into Continue config.
2. `@prompts/en/...` in chat for full prompts.

### Gemini CLI

```bash
cp integrations/templates/AGENTS.md ./AGENTS.md
cp integrations/templates/GEMINI.md ./GEMINI.md
```

### ChatGPT / Custom GPT

1. Create GPT → **Instructions** → paste [openai/custom-gpt-instructions.md](./openai/custom-gpt-instructions.md).
2. **Knowledge** → upload `prompts/en/*.md`.

### JetBrains AI Assistant

Paste [jetbrains/ai-assistant-rules.md](./jetbrains/ai-assistant-rules.md) into **Project Rules**.

### Amazon Q Developer

```bash
mkdir -p .amazonq/rules
cp integrations/templates/AGENTS.md .amazonq/rules/universal-prompts.md
```

See [amazon-q/README.md](./amazon-q/README.md).

---

## Windows (PowerShell)

```powershell
# Cross-tool baseline
Copy-Item integrations\templates\AGENTS.md .\AGENTS.md

# Cursor
New-Item -ItemType Directory -Force .cursor\rules
Copy-Item integrations\cursor\*.mdc .cursor\rules\

# Copilot
New-Item -ItemType Directory -Force .github
Copy-Item integrations\github-copilot\copilot-instructions.md .github\

# Cline
New-Item -ItemType Directory -Force .clinerules
Copy-Item integrations\cline\*.md .clinerules\
```

---

## Submodule (keep prompts updated)

```bash
git submodule add https://github.com/YOUR_ORG/univerzalniprompt.git .prompts-lib
ln -s .prompts-lib/prompts prompts
ln -s .prompts-lib/integrations integrations
```

---

## Folder structure

```
integrations/
├── README.md / README.sr.md
├── templates/
│   ├── AGENTS.md          ← cross-tool standard
│   ├── CLAUDE.md
│   └── GEMINI.md
├── cursor/
├── windsurf/
├── github-copilot/
├── cline/
├── roo-code/
├── aider/
├── continue/
├── openai/
├── jetbrains/
└── amazon-q/
```

---

Back to [main README](../README.md).
