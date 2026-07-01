# Changelog

All notable changes to the **Universal AI Engineering Prompts** project will be documented in this file.

---

## [1.2.2] - 2026-07-01

### Added
- **CI badge** in README (EN/SR).
- **Stricter validator**: Compact Mode must be last section, EN/SR heading parity, markdown link checks, workflow file check, CHANGELOG ↔ VERSION sync (both EN/SR changelogs).

### Changed
- **GitHub Actions** workflow renamed to `Validate Prompts`, Node 22; validation consolidated in `validate-prompts.js`.
- **README repository structure** fixed — `integrations/` no longer listed under `prompts/`.

### Fixed
- Validator CRLF handling on Windows.
- Duplicate `## Prompt` check removed.

---

## [1.2.1] - 2026-07-01

### Added
- **Compact Mode** on `00-quick-context` (EN/SR) — closes parity gap with CONTRIBUTING standard.
- **Sample reports** for prompts 02, 03, 05, 06, 07 in `examples/`.
- **`examples/README.md`** — index linking samples to prompts.
- **`prompts/VERSION`** — semantic versioning for the prompt library.
- **`scripts/validate-prompts.js`** — validates EN/SR parity, Compact Mode, safety rules, examples.
- **GitHub Actions** workflow `.github/workflows/validate-prompts.yml`.
- **FAQ** section in README (EN/SR).

### Changed
- **SECURITY.md / SECURITY.sr.md** — threat model, maintainer guidelines, supported versions.

---

## [1.2.0] - 2026-07-01

### Added
- **`integrations/`** — Ready-to-copy agent configs for Cursor, Claude Code, Windsurf, GitHub Copilot, Cline, Roo Code, Aider, Continue, Gemini CLI, ChatGPT/Custom GPT, JetBrains AI, Amazon Q.
- **`AGENTS.md`** at repo root — cross-tool standard (Codex, Copilot, Cursor, Windsurf, Cline, Aider, etc.).
- Integration guides: `integrations/README.md` and `integrations/README.sr.md`.
- **00 Quick Context**: Lightweight session starter with Global Safety Rules and context template (EN/SR).
- **06 Tech Debt Triage**: Prioritize technical debt without code changes — scored backlog and sequencing (EN/SR).
- **07 PR Review**: Diff-scoped pull request review with BLOCKER/MAJOR/MINOR/NIT and verdict (EN/SR).
- **Compact Mode**: Shortened prompt variant at the bottom of every prompt file (00-07).
- **APPROVAL_MODE** on prompt 04: `autonomous | plan-only | step-by-step`.
- **Sample report**: `examples/sample-architecture-report.md` as quality reference for prompt 01.
- **Stack Adaptations** appendix in README (API-only, CLI, mobile, monorepo).

### Changed
- README workflow diagram now includes Tech Debt Triage (06) and PR Review (07).
- Cursor integration docs updated for `.cursor/rules/` (recommended) alongside legacy `.cursorrules`.
- Context template extended with `Approval Mode` field.
- Collection size updated from 5 to 8 prompts.

---

## [1.1.0] - 2026-07-01

### Added
- **Global Agent Safety Rules**: Integrated safety directives into all prompts.
- **Prompt-Injection Defense**: Protection against malicious instructions found in code, README files, or test data.
- **NOT RUN / No-Fake-Pass Rule**: Prevents AI agents from claiming commands ran successfully without executing them.
- **Secrets Redaction**: Directives banning agents from printing API keys, tokens, or credentials in chat outputs.
- **Package Manager Auto-Detect**: Pre-flight lockfile detection (npm, pnpm, yarn, bun) to ensure consistency.
- **Residual Risk** sections in Deep Scan and Post-Vibe Audit report templates.
- Added repository documents: `LICENSE`, `CONTRIBUTING.md`, `SECURITY.md`, and `CHANGELOG.md` (and their Serbian `.sr.md` counterparts).
- Full English translation of all 5 prompts in `prompts/en/`.

### Changed
- **Next-Gen Tech Stack**: Updated references and examples to modern stable versions (Next.js 16, Prisma 7, Tailwind 4, Auth.js v5, TypeScript 7).
- **Pre-flight Summary**: Replaced long internal "Thinking" phases in prompts 01 and 02 with a structured, concise Pre-flight Summary.
- **Deep Scan Goals**: Replaced the unattainable "find ALL problems" phrasing with a realistic focus on available tools, coverage gaps, and residual risks.

---

## [1.0.0] - 2026-07-01
- Initial release of 5 core prompts (Architecture Scan, Post-Vibe Audit, Safe Refactor, Feature Implementation, Deep Scan) in Serbian.


