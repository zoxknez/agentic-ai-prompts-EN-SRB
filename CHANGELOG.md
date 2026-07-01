# Changelog

All notable changes to the **Universal AI Engineering Prompts** project will be documented in this file.

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

