# Security Policy

Data and code security are our top priorities when working with AI agents. Because of this, all prompts in this repository incorporate strict **Global Agent Safety Rules** and defenses against **prompt-injection** attacks.

---

## 🛡️ Supported Versions

We maintain these prompts for current-generation AI coding agents and LLM-based development tools. If you detect security flaws when executing these prompts on supported tools, please report them.

---

## 🔒 Reporting a Vulnerability

If you find a security vulnerability (such as a scenario where a prompt fails to protect secrets, ignores prompt-injection defenses, or executes destructive file system commands without permission):

1. **Do NOT open a public Issue.**
2. Open a private security advisory on GitHub if available. If private advisories are not available, please contact the maintainer through the profile links.
3. Please include:
   - The prompt used.
   - The AI tool and LLM model used.
   - A detailed code example or transcript demonstrating the leak/exploit.
   - A proposed fix.

We will review your report as quickly as possible and publish a fix in a new version. Thank you for helping us keep the community safe!

