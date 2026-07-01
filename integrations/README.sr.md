# 🔌 Integracije za AI agente

Gotovi template-i za kopiranje u tvoj projekat.

🇬🇧 [English guide](./README.md)

---

## Brzi setup (bilo koji projekat)

1. Kopiraj folder **`prompts/`** (i opciono **`examples/`**) u svoj projekat.
2. Izaberi agenta ispod i kopiraj odgovarajuće fajlove.
3. Počni sesiju sa **`prompts/sr/00-quick-context.md`** ili task promptom (01–07).

**Cross-tool osnova (preporučeno za sve):**

```bash
cp integrations/templates/AGENTS.md ./AGENTS.md
```

`AGENTS.md` nativno čitaju **Codex**, **Cursor**, **GitHub Copilot**, **Windsurf**, **Cline**, **Roo Code**, **Aider**, **Gemini CLI**, **Zed** i drugi.

---

## Matrica agenata

| Agent | Kopiraj iz | Odredište u projektu |
|-------|------------|----------------------|
| **Svi / Codex** | `templates/AGENTS.md` | `AGENTS.md` |
| **Cursor** | `cursor/*.mdc` | `.cursor/rules/` |
| **Cursor (legacy)** | `cursor/cursorrules-legacy` | `.cursorrules` |
| **Claude Code** | `templates/CLAUDE.md` + `AGENTS.md` | `CLAUDE.md` + `AGENTS.md` |
| **Claude Projects** | Upload `prompts/` u Project Knowledge | claude.ai UI |
| **Windsurf** | `windsurf/windsurfrules` | `.windsurfrules` |
| **GitHub Copilot** | `github-copilot/copilot-instructions.md` | `.github/copilot-instructions.md` |
| **Cline** | `cline/*.md` | `.clinerules/` |
| **Roo Code** | `cline/*.md` | `.clinerules/` (+ opciono `.roorules-*`) |
| **Aider** | `aider/CONVENTIONS.md` + `aider/aider.conf.yml` | koren projekta |
| **Continue.dev** | `continue/rules.md` | Continue config / Rules UI |
| **Gemini CLI** | `templates/GEMINI.md` + `AGENTS.md` | `GEMINI.md` + `AGENTS.md` |
| **ChatGPT / Custom GPT** | `openai/custom-gpt-instructions.md` | GPT Instructions polje |
| **JetBrains AI** | `jetbrains/ai-assistant-rules.md` | Project Rules UI |
| **Amazon Q** | `templates/AGENTS.md` | `.amazonq/rules/` |

---

## Po agentu

### Cursor

```bash
mkdir -p .cursor/rules
cp integrations/cursor/global-safety.mdc .cursor/rules/
cp integrations/cursor/prompt-routing.mdc .cursor/rules/
cp integrations/templates/AGENTS.md ./AGENTS.md
```

U chatu: `@prompts/sr/03-safe-refactor.md` + kontekst sesije.

### Claude Code

```bash
cp integrations/templates/AGENTS.md ./AGENTS.md
cp integrations/templates/CLAUDE.md ./CLAUDE.md
```

### Claude Projects (web)

1. Uploaduj `prompts/sr/*.md` u **Project Knowledge**.
2. Custom Instructions → nalepi indeks promptova iz `openai/custom-gpt-instructions.md`.

### Windsurf

```bash
cp integrations/windsurf/windsurfrules ./.windsurfrules
cp integrations/templates/AGENTS.md ./AGENTS.md
```

### GitHub Copilot

```bash
mkdir -p .github
cp integrations/github-copilot/copilot-instructions.md .github/copilot-instructions.md
```

### Cline / Roo Code

```bash
mkdir -p .clinerules
cp integrations/cline/*.md .clinerules/
```

Roo modovi: [roo-code/README.md](./roo-code/README.md).

### Aider

```bash
cp integrations/aider/CONVENTIONS.md ./CONVENTIONS.md
cp integrations/aider/aider.conf.yml ./.aider.conf.yml
```

Po zadatku: `aider --read prompts/sr/03-safe-refactor.md`

### Continue.dev

Pravila iz [continue/rules.md](./continue/rules.md) u Continue config.

### Gemini CLI

```bash
cp integrations/templates/GEMINI.md ./GEMINI.md
cp integrations/templates/AGENTS.md ./AGENTS.md
```

### ChatGPT / Custom GPT

Instructions → [openai/custom-gpt-instructions.md](./openai/custom-gpt-instructions.md). Knowledge → upload `prompts/sr/`.

### JetBrains AI

Nalepi [jetbrains/ai-assistant-rules.md](./jetbrains/ai-assistant-rules.md) u **Project Rules**.

### Amazon Q

```bash
mkdir -p .amazonq/rules
cp integrations/templates/AGENTS.md .amazonq/rules/universal-prompts.md
```

---

## Windows (PowerShell)

```powershell
Copy-Item integrations\templates\AGENTS.md .\AGENTS.md
New-Item -ItemType Directory -Force .cursor\rules
Copy-Item integrations\cursor\*.mdc .cursor\rules\
New-Item -ItemType Directory -Force .github
Copy-Item integrations\github-copilot\copilot-instructions.md .github\
New-Item -ItemType Directory -Force .clinerules
Copy-Item integrations\cline\*.md .clinerules\
```

---

Nazad na [glavni README](../README.sr.md).
