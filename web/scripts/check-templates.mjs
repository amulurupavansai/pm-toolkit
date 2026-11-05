// Validates every template: front matter + required sections (fence-aware).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, '..', 'templates');

const CATEGORIES = ['requirements', 'process', 'testing', 'delivery', 'communication', 'governance', 'prompts'];
const errors = [];
let count = 0;

function sections(md) {
  const out = {};
  let cur = null, fence = null;
  for (const line of md.split('\n')) {
    const t = line.trim();
    if (fence) {
      if (t.length >= fence.length && t[0] === fence[0] && /^(`+|~+)$/.test(t)) fence = null;
    } else {
      const f = /^\s*(`{3,}|~{3,})/.exec(line);
      if (f) fence = f[1];
      else {
        const h = /^##\s+(.+?)\s*$/.exec(line);
        if (h) { cur = h[1].toLowerCase(); out[cur] = ''; continue; }
      }
    }
    if (cur) out[cur] += line + '\n';
  }
  return out;
}

for (const cat of fs.readdirSync(root, { withFileTypes: true })) {
  if (!cat.isDirectory()) continue;
  if (!CATEGORIES.includes(cat.name)) errors.push(`Unknown category folder: ${cat.name}`);
  for (const f of fs.readdirSync(path.join(root, cat.name))) {
    if (!f.endsWith('.md') || f.toLowerCase() === 'readme.md') continue;
    const rel = `${cat.name}/${f}`;
    const { data, content } = matter(fs.readFileSync(path.join(root, cat.name, f), 'utf8'));
    count++;
    for (const k of ['title', 'summary']) if (!data[k]) errors.push(`${rel}: missing front matter "${k}"`);
    if (!Array.isArray(data.tags) || !data.tags.length) errors.push(`${rel}: missing tags`);
    if (data.category !== cat.name) errors.push(`${rel}: front matter category "${data.category}" != folder "${cat.name}"`);
    const s = sections(content);
    const body = s['template'] ?? s['prompt'];
    if (!s['how to use']?.trim()) errors.push(`${rel}: missing "## How to use"`);
    if (!body?.trim()) errors.push(`${rel}: missing "## Template" or "## Prompt"`);
    if (!s['example (fictional)']?.trim()) errors.push(`${rel}: missing "## Example (fictional)"`);
  }
}

if (errors.length) {
  console.error('Template check failed:\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log(`Template check passed: ${count} templates.`);
