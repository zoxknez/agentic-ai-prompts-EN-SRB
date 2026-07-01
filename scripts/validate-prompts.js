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

const REQUIRED_IN_PROMPT = [
  'GLOBAL AGENT SAFETY',
  '## Compact Mode',
];

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

let errors = [];
let warnings = [];

function listMd(dir) {
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort();
}

function read(file) {
  return fs.readFileSync(file, 'utf8');
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
    errors.push(`EN/SR count mismatch: ${enFiles.length} vs ${srFiles.length}`);
  }
}

function checkPromptContent(lang, file) {
  const full = path.join(lang === 'en' ? EN : SR, file);
  const content = read(full);

  for (const needle of REQUIRED_IN_PROMPT) {
    if (!content.includes(needle)) {
      errors.push(`${lang}/${file}: missing "${needle}"`);
    }
  }

  if (!content.includes('## Prompt') && !content.includes('## Prompt')) {
    errors.push(`${lang}/${file}: missing "## Prompt" section`);
  }
}

function checkVersion() {
  const versionFile = path.join(PROMPTS, 'VERSION');
  if (!fs.existsSync(versionFile)) {
    errors.push('prompts/VERSION missing');
    return;
  }
  const v = read(versionFile).trim();
  if (!/^\d+\.\d+\.\d+$/.test(v)) {
    errors.push(`prompts/VERSION invalid semver: ${v}`);
  }
}

function checkExamples() {
  const index = path.join(EXAMPLES, 'README.md');
  if (!fs.existsSync(index)) {
    errors.push('examples/README.md missing');
    return;
  }
  const requiredSamples = [
    'sample-architecture-report.md',
    'sample-audit-report.md',
    'sample-refactor-report.md',
    'sample-deep-scan-report.md',
    'sample-tech-debt-report.md',
    'sample-pr-review.md',
  ];
  for (const sample of requiredSamples) {
    if (!fs.existsSync(path.join(EXAMPLES, sample))) {
      errors.push(`Missing example: examples/${sample}`);
    }
  }
}

function checkIntegrations() {
  const agents = ['cursor', 'github-copilot', 'cline', 'aider', 'templates'];
  for (const agent of agents) {
    const dir = path.join(ROOT, 'integrations', agent);
    if (!fs.existsSync(dir)) {
      warnings.push(`integrations/${agent}/ missing`);
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
checkVersion();
checkParity();
for (const file of EXPECTED_PROMPTS) {
  if (fs.existsSync(path.join(EN, file))) checkPromptContent('en', file);
  if (fs.existsSync(path.join(SR, file))) checkPromptContent('sr', file);
}
checkExamples();
checkIntegrations();

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
console.log(`  Version: ${read(path.join(PROMPTS, 'VERSION')).trim()}`);
