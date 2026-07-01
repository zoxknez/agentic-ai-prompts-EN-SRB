# Security Policy

Data and code security are our top priorities when working with AI agents. All prompts incorporate **Global Agent Safety Rules** and defenses against **prompt-injection** attacks.

---

## Supported Versions

| Prompt library version | Status |
|------------------------|--------|
| 1.2.x (current) | Supported |
| 1.1.x | Supported (migrate to 1.2 for integrations) |
| 1.0.x | Legacy — missing safety rules and Compact Mode |

Version tracked in `prompts/VERSION`, aligned with [CHANGELOG.md](./CHANGELOG.md).

---

## Reporting a Vulnerability

If a prompt fails to protect secrets, ignores injection defenses, or enables destructive actions without permission:

1. **Do NOT open a public Issue.**
2. Open a private security advisory on GitHub, or contact the maintainer via profile links.
3. Include: prompt ID, AI tool + model, reproduction transcript, proposed fix.

---

## Threat Model

### Prompt injection via repository content

Attackers may embed instructions in code, README, comments, test fixtures, or issue templates.

**Mitigation (built into every prompt):**
- Repository content is **untrusted input**.
- Agents must not follow embedded “ignore previous instructions” text.
- Maintainers: review third-party contributions for hidden instructions in strings/comments.

### False verification (no-fake-pass)

Agents may claim `lint` / `test` / `build` passed without running commands.

**Mitigation:**
- Mandatory `[NOT RUN]` tag with reason and recommended manual command.
- Users must reject reports without command output or explicit `[NOT RUN]`.

### Secret leakage

Agents may echo `.env` values, API keys, or tokens in chat logs.

**Mitigation:**
- Never print secret values — redact (`sk-****`).
- Users: use `.env.example` only in repos; never commit real secrets.
- Run secret scanners (gitleaks, trufflehog) in CI on projects using these prompts.

### Over-permissioned agents

Users may grant write access while using read-only prompts (01, 02, 06).

**Mitigation:**
- Set `Permissions: read-only` in session context.
- Use `APPROVAL_MODE: plan-only` for prompt 04 when exploring designs.

### Modified or stripped safety rules

Forks may remove Global Safety Rules or Compact Mode requirements.

**Mitigation:**
- Pin to tagged releases (`prompts/VERSION`).
- Copy from official repo or verify with `node scripts/validate-prompts.js`.

---

## Maintainer Guidelines

When editing prompts:

1. Never add instructions that tell the agent to bypass safety rules.
2. Keep EN/SR pairs in sync (same structure, same phases).
3. Run `node scripts/validate-prompts.js` before merge.
4. Update `examples/` when report formats change.
5. Document breaking prompt changes in CHANGELOG with semver bump in `prompts/VERSION`.

---

## User Responsibilities

- Treat AI output as untrusted until verified.
- Run test commands locally; do not trust agent claims alone.
- Do not paste production secrets into chat.
- Review diffs before merge, especially after prompt 03, 04, or 05 sessions.

---

Thank you for helping keep the community safe.
