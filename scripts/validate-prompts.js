#!/usr/bin/env node
/**
 * Validates prompt library structure and CONTRIBUTING standards.
 * Run: node scripts/validate-prompts.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PROMPTS = path.join(ROOT, 'prompts');
const EN = path.join(PROMPTS, 'en');
const SR = path.join(PROMPTS, 'sr');
const EXAMPLES = path.join(ROOT, 'examples');

const EXPECTED_PROMPTS = [
  '00-quick-context.md',
  '01-architecture-scan.md',
  '02-post-vibe-audit.md',
  '03-safe-refactor.md',
  '04-feature-implementation.md',
  '05-deep-scan.md',
  '06-tech-debt-triage.md',
  '07-pr-review.md',
];

const SECTION_ALIASES = {
  'Primer korišćenja': 'Usage Example',
};

let errors = [];
let warnings = [];

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function listMd(dir) {
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort();
}

function normalizeSection(name) {
  return SECTION_ALIASES[name] || name;
}

/** ## headings outside markdown code fences */
function headingsOutsideFences(content) {
  const lines = content.split('\n');
  const headings = [];
  let inFence = false;
  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (!inFence) {
      const m = line.trim().match(/^## (.+)$/);
      if (m) headings.push(m[1].trim());
    }
  }
  return headings;
}

function checkParity() {
  const enFiles = listMd(EN);
  const srFiles = listMd(SR);

  for (const expected of EXPECTED_PROMPTS) {
    if (!enFiles.includes(expected)) errors.push(`Missing EN: ${expected}`);
    if (!srFiles.includes(expected)) errors.push(`Missing SR: ${expected}`);
  }

  const enExtra = enFiles.filter((f) => !EXPECTED_PROMPTS.includes(f));
  const srExtra = srFiles.filter((f) => !EXPECTED_PROMPTS.includes(f));
  if (enExtra.length) warnings.push(`Unexpected EN files: ${enExtra.join(', ')}`);
  if (srExtra.length) warnings.push(`Unexpected SR files: ${srExtra.join(', ')}`);

  if (enFiles.length !== srFiles.length) {
    errors.push(`EN/SR file count mismatch: ${enFiles.length} vs ${srFiles.length}`);
  }

  for (const file of EXPECTED_PROMPTS) {
    const enPath = path.join(EN, file);
    const srPath = path.join(SR, file);
    if (!fs.existsSync(enPath) || !fs.existsSync(srPath)) continue;

    const enHeadings = headingsOutsideFences(read(enPath)).map(normalizeSection);
    const srHeadings = headingsOutsideFences(read(srPath)).map(normalizeSection);

    if (enHeadings.length !== srHeadings.length) {
      errors.push(
        `${file}: EN/SR section count mismatch (${enHeadings.length} vs ${srHeadings.length})`
      );
    }
    for (let i = 0; i < Math.min(enHeadings.length, srHeadings.length); i++) {
      if (enHeadings[i] !== srHeadings[i]) {
        errors.push(
          `${file}: section mismatch at #${i + 1}: EN "${enHeadings[i]}" vs SR "${srHeadings[i]}"`
        );
        break;
      }
    }
  }
}

function checkPromptContent(lang, file) {
  const full = path.join(lang === 'en' ? EN : SR, file);
  const content = read(full);

  if (!content.includes('GLOBAL AGENT SAFETY')) {
    errors.push(`${lang}/${file}: missing GLOBAL AGENT SAFETY rules`);
  }

  const headings = headingsOutsideFences(content);
  if (!headings.includes('Prompt')) {
    errors.push(`${lang}/${file}: missing "## Prompt" section`);
  }
  if (!headings.includes('Compact Mode')) {
    errors.push(`${lang}/${file}: missing "## Compact Mode" section`);
  }
  if (headings[headings.length - 1] !== 'Compact Mode') {
    errors.push(`${lang}/${file}: "## Compact Mode" must be the last section (found: "${headings[headings.length - 1]}")`);
  }

  const compactIdx = content.lastIndexOf('## Compact Mode');
  const afterCompact = content.slice(compactIdx);
  if (!afterCompact.includes('```')) {
    errors.push(`${lang}/${file}: Compact Mode section must contain a fenced code block`);
  }
}

function getVersion() {
  const versionFile = path.join(PROMPTS, 'VERSION');
  if (!fs.existsSync(versionFile)) {
    errors.push('prompts/VERSION missing');
    return null;
  }
  const v = read(versionFile).trim();
  if (!/^\d+\.\d+\.\d+$/.test(v)) {
    errors.push(`prompts/VERSION invalid semver: ${v}`);
    return null;
  }
  return v;
}

function checkChangelogVersion(version) {
  if (!version) return;
  const changelog = read(path.join(ROOT, 'CHANGELOG.md'));
  const changelogSr = read(path.join(ROOT, 'CHANGELOG.sr.md'));
  const needle = `[${version}]`;
  if (!changelog.includes(needle)) {
    errors.push(`CHANGELOG.md missing section ${needle}`);
  }
  if (!changelogSr.includes(needle)) {
    errors.push(`CHANGELOG.sr.md missing section ${needle}`);
  }
}

function extractMarkdownLinks(content, baseDir) {
  const links = [];
  const re = /\[([^\]]*)\]\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const target = m[2].trim();
    if (
      target.startsWith('http://') ||
      target.startsWith('https://') ||
      target.startsWith('#') ||
      target.startsWith('mailto:')
    ) {
      continue;
    }
    const clean = target.split('#')[0].split('?')[0];
    if (!clean) continue;
    links.push({ text: m[1], target: clean, baseDir });
  }
  return links;
}

function checkMarkdownLinks(filePath) {
  const content = read(filePath);
  const baseDir = path.dirname(filePath);
  const links = extractMarkdownLinks(content, baseDir);

  for (const { text, target, baseDir: dir } of links) {
    const resolved = path.normalize(path.join(dir, target));
    if (!fs.existsSync(resolved)) {
      errors.push(`Broken link in ${path.relative(ROOT, filePath)}: [${text}](${target}) → ${path.relative(ROOT, resolved)}`);
    }
  }
}

function checkExamplesIndex() {
  const indexPath = path.join(EXAMPLES, 'README.md');
  if (!fs.existsSync(indexPath)) {
    errors.push('examples/README.md missing');
    return;
  }
  const links = extractMarkdownLinks(read(indexPath), EXAMPLES);
  if (links.length === 0) {
    errors.push('examples/README.md: no sample file links found');
  }
  for (const { target } of links) {
    const resolved = path.join(EXAMPLES, target);
    if (!fs.existsSync(resolved)) {
      errors.push(`examples/README.md: missing linked file ${target}`);
    }
  }
}

function checkWorkflowExists() {
  const workflow = path.join(ROOT, '.github', 'workflows', 'validate-prompts.yml');
  if (!fs.existsSync(workflow)) {
    errors.push('.github/workflows/validate-prompts.yml missing');
  }
}

function checkIntegrations() {
  const required = ['cursor', 'github-copilot', 'cline', 'aider', 'templates', 'windsurf'];
  for (const agent of required) {
    const dir = path.join(ROOT, 'integrations', agent);
    if (!fs.existsSync(dir)) {
      errors.push(`integrations/${agent}/ missing`);
    }
  }
  if (!fs.existsSync(path.join(ROOT, 'integrations', 'README.md'))) {
    errors.push('integrations/README.md missing');
  }
  if (!fs.existsSync(path.join(ROOT, 'AGENTS.md'))) {
    errors.push('AGENTS.md missing');
  }
}

// --- run ---
const version = getVersion();
checkChangelogVersion(version);
checkParity();
for (const file of EXPECTED_PROMPTS) {
  if (fs.existsSync(path.join(EN, file))) checkPromptContent('en', file);
  if (fs.existsSync(path.join(SR, file))) checkPromptContent('sr', file);
}
checkExamplesIndex();
checkIntegrations();
checkWorkflowExists();

for (const doc of ['README.md', 'README.sr.md', 'CONTRIBUTING.md', 'integrations/README.md', 'integrations/README.sr.md', 'examples/README.md']) {
  const full = path.join(ROOT, doc);
  if (fs.existsSync(full)) checkMarkdownLinks(full);
}

if (warnings.length) {
  console.log('Warnings:');
  warnings.forEach((w) => console.log('  ⚠', w));
}

if (errors.length) {
  console.error('Validation failed:');
  errors.forEach((e) => console.error('  ✗', e));
  process.exit(1);
}

console.log('✓ Prompt library validation passed');
console.log(`  ${EXPECTED_PROMPTS.length} prompts × 2 languages`);
console.log(`  Version: ${version}`);
console.log('  Checks: parity, Compact Mode placement, changelog, links, workflow, integrations');
