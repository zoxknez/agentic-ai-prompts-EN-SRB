# Contributing Guidelines

Thank you for your interest in contributing to **Universal AI Engineering Prompts**! Your contributions help make AI coding agents more precise, secure, and productive for developers worldwide.

Here are the guidelines on how to contribute:

---

## 🛠️ How to Contribute

### 1. Reporting Issues
If you notice that a prompt causes AI agents to hallucinate, carry out excessive rewrites, or fail to follow guidelines:
1. Open an **Issue** on GitHub.
2. Describe the problem, specifying which AI tool and LLM model/version you used.
3. Provide a code example or snippet of the conversation where the prompt failed, and propose a solution.

### 2. Proposing Changes (Pull Requests)
If you want to improve an existing prompt:
1. Fork this repository.
2. Create a new branch for your changes (e.g., `git checkout -b feature/improve-safe-refactor`).
3. Modify the prompt and **test it** in actual interactions with an AI agent to ensure it works as expected.
4. Open a **Pull Request** (PR) to the `main` branch and describe in detail what was changed and why.

---

## 📐 Prompt Standards

When editing or adding new prompts, please adhere to these standards:
- **Global Safety Rules**: Every prompt must incorporate and follow our safety guidelines (prompt-injection defense, secrets redaction, no-fake-pass).
- **Clear Structure**: Use standard separators (`════` and `───`) and clear XML/Markdown headings to help LLMs parse the instructions easily.
- **Compact Mode**: Every prompt (including new ones) must end with a **Compact Mode** section — a single short block usable when context is limited.
- **Bilingual Parity**: New prompts require both `prompts/en/` and `prompts/sr/` versions with equivalent structure.
- **Agent Integrations**: New agent configs go under `integrations/<agent>/` and must be documented in `integrations/README.md`.
- **Language Consistency**: Keep translations natural. English versions should use standard technical English terminology, while Serbian versions should balance local phrasing with standard industry terms.
- **No Assumptions**: Enforce that the AI marks gaps and uncertainties using tags like `[ASSUMPTION]`, `[NOT RUN]`, or `[COVERAGE GAP]`.
- **Sample Outputs**: Significant report-format changes should update `examples/sample-architecture-report.md` or add new examples under `examples/`.

---

Thank you for your help, and happy coding! 🚀

