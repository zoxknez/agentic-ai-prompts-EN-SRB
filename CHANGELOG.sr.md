# CHANGELOG

Sve značajne promene na projektu **Universal AI Engineering Prompts** biće dokumentovane u ovom fajlu.

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

