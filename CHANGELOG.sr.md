# CHANGELOG

Sve značajne promene na projektu **Universal AI Engineering Prompts** biće dokumentovane u ovom fajlu.

---

## [1.2.3] - 2026-07-01

### Dodato
- **Workflow preview** SVG u README (EN/SR) za bolju vidljivost na GitHub-u.

### Izmenjeno
- GitHub **description**, **homepage** i dodatni **topics**.

---

## [1.2.2] - 2026-07-01

### Dodato
- **CI badge** u README (EN/SR).
- **Stroži validator**: Compact Mode mora biti poslednja sekcija, EN/SR paritet naslova, provera linkova, workflow fajl, CHANGELOG ↔ VERSION (EN + SR).

### Izmenjeno
- **GitHub Actions** — `Validate Prompts`, Node 22; validacija u jednom skriptu.
- **README struktura** — `integrations/` ispravno odvojen od `prompts/`.

### Ispravljeno
- Validator CRLF na Windows-u.
- Uklonjen duplikat provere `## Prompt`.

---

## [1.2.1] - 2026-07-01

### Dodato
- **Compact Mode** na `00-quick-context` (EN/SR).
- **Primeri izveštaja** za promptove 02, 03, 05, 06, 07 u `examples/`.
- **`examples/README.md`** — indeks primera.
- **`prompts/VERSION`** — semver biblioteke.
- **`scripts/validate-prompts.js`** — validacija strukture.
- **GitHub Actions** `.github/workflows/validate-prompts.yml`.
- **FAQ** u README (EN/SR).

### Izmenjeno
- **SECURITY.md / SECURITY.sr.md** — threat model, smernice za održavaoce.

---

## [1.2.0] - 2026-07-01

### Dodato
- **`integrations/`** — Gotovi config-i za Cursor, Claude Code, Windsurf, GitHub Copilot, Cline, Roo Code, Aider, Continue, Gemini CLI, ChatGPT/Custom GPT, JetBrains AI, Amazon Q.
- **`AGENTS.md`** u korenu repoa — cross-tool standard.
- Vodiči: `integrations/README.md` i `integrations/README.sr.md`.
- **00 Brzi Kontekst**: Lightweight starter sa Global Safety Rules i context template-om (EN/SR).
- **06 Tech Debt Triage**: Prioritizacija tehničkog duga bez izmena koda — scored backlog (EN/SR).
- **07 PR Review**: Diff-scoped pregled pull request-a sa BLOCKER/MAJOR/MINOR/NIT i verdict-om (EN/SR).
- **Compact Mode**: Skraćena verzija na dnu svakog prompt fajla (00-07).
- **APPROVAL_MODE** na promptu 04: `autonomous | plan-only | step-by-step`.
- **Primer izlaza**: `examples/sample-architecture-report.md` kao referenca kvaliteta za prompt 01.
- **Stack Adaptations** appendix u README (samo API, CLI, mobile, monorepo).

### Izmenjeno
- Workflow dijagram u README sada uključuje Tech Debt Triage (06) i PR Review (07).
- Cursor integracija ažurirana za `.cursor/rules/` (preporučeno) pored legacy `.cursorrules`.
- Context template proširen sa poljem `Režim odobrenja`.
- Kolekcija ažurirana sa 5 na 8 promptova.

---

## [1.1.0] - 2026-07-01

### Dodato
- **Global Agent Safety Rules**: Integrisana bezbednosna pravila direktno u sve promptove.
- **Prompt-injection zaštita**: Zaštita od malicioznih instrukcija unutar koda, README fajlova ili test podloga.
- **NOT RUN / no-fake-pass pravilo**: Pravilo koje sprečava AI agente da tvrde da su komande izvršene uspešno ako ih zapravo nisu pokrenuli.
- **Redakcija kredencijala**: Pravilo koje zabranjuje ispisivanje privatnih ključeva, secrets-a i API tokena u chat/logs.
- **Package Manager Auto-detect**: Ugrađeno pravilo za automatsko detektovanje package manager-a (npm, pnpm, yarn, bun) iz lockfile-a pre izvršavanja.
- **Residual Risk** sekcija u Deep Scan i Post-Vibe Audit izveštajima.
- Dodati repo fajlovi: `LICENSE`, `CONTRIBUTING.md`, `SECURITY.md`, i `CHANGELOG.md`.

### Izmenjeno
- **Next-gen Tech Stack**: Ažurirane sve reference tehnologija i primera na najnovije verzije (Next.js 16, Prisma 7, Tailwind 4, Auth.js v5, TypeScript 7).
- **Zamenjena "Thinking" sekcija**: Uveden **Pre-flight Summary** u promptovima 01 i 02 radi jasnijeg fokusa i manjeg obima internog razmišljanja LLM-a na početku.
- **Deep Scan rečnik**: Promenjena definicija cilja ("pronaći SVE probleme") u realističniju formulaciju zasnovanu na dostupnim alatima i residual risk-u.

---

## [1.0.0] - 2026-07-01
- Inicijalna verzija 5 univerzalnih promptova (Architecture Scan, Post-Vibe Audit, Safe Refactor, Feature Implementation, Deep Scan).


