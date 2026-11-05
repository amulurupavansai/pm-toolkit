import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export const CATEGORIES: Record<string, { label: string; description: string; order: number }> = {
  requirements: { label: 'Requirements', description: 'BRD, PRD, user stories, and interview question bank', order: 1 },
  process: { label: 'Process mapping', description: 'As-is / to-be maps and gap analysis', order: 2 },
  testing: { label: 'Testing and acceptance', description: 'Test cases, plans, reports, defects, UAT sign-off', order: 3 },
  delivery: { label: 'Delivery', description: 'Implementation plan and payroll go-live checklist', order: 4 },
  communication: { label: 'Communication', description: 'Meeting notes and weekly status reports', order: 5 },
  governance: { label: 'Governance', description: 'RACI, risk register, change requests', order: 6 },
  prompts: { label: 'Prompt library', description: 'Ready-to-use prompts for Claude', order: 7 },
};

export type Template = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  tags: string[];
  /** Markdown of the whole file without front matter */
  content: string;
  howToUse: string;
  /** Text to copy: the blank template/prompt (outer code fence stripped) */
  copyText: string;
  searchText: string;
};

const ROOT = path.join(process.cwd(), '..', 'templates');
const FENCE_OPEN = /^\s*(`{3,}|~{3,})/;

function isCloser(line: string, open: string) {
  const t = line.trim();
  return t.length >= open.length && t[0] === open[0] && /^(`+|~+)$/.test(t);
}

/** Split into level-2 sections, ignoring "## " lines inside code fences. */
export function splitSections(md: string): Record<string, string> {
  const sections: Record<string, string[]> = {};
  let current: string | null = null;
  let fence: string | null = null;
  for (const line of md.split('\n')) {
    if (fence) {
      if (isCloser(line, fence)) fence = null;
    } else {
      const m = FENCE_OPEN.exec(line);
      if (m) fence = m[1];
      else {
        const h = /^##\s+(.+?)\s*$/.exec(line);
        if (h) {
          current = h[1].toLowerCase();
          sections[current] = [];
          continue;
        }
      }
    }
    if (current) sections[current].push(line);
  }
  return Object.fromEntries(Object.entries(sections).map(([k, v]) => [k, v.join('\n').trim()]));
}

/** If the body is exactly one fenced block, return its inside; else return body. */
export function stripOuterFence(body: string): string {
  const lines = body.trim().split('\n');
  const m = FENCE_OPEN.exec(lines[0] ?? '');
  if (!m) return body.trim();
  const open = m[1];
  for (let i = 1; i < lines.length; i++) {
    if (isCloser(lines[i], open)) {
      return i === lines.length - 1 ? lines.slice(1, i).join('\n') : body.trim();
    }
  }
  return body.trim();
}

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

let cache: Template[] | null = null;

export function getTemplates(): Template[] {
  if (cache) return cache;
  const files = walk(ROOT).filter((f) => f.endsWith('.md') && path.basename(f).toLowerCase() !== 'readme.md');
  const items = files.map((file): Template => {
    const raw = fs.readFileSync(file, 'utf8');
    const { data, content } = matter(raw);
    const sections = splitSections(content);
    const category = path.basename(path.dirname(file));
    const slug = path.basename(file, '.md');
    const body = sections['template'] ?? sections['prompt'] ?? '';
    const title = String(data.title ?? slug);
    const summary = String(data.summary ?? '');
    const tags: string[] = Array.isArray(data.tags) ? data.tags.map(String) : [];
    return {
      slug,
      category,
      title,
      summary,
      tags,
      content: content.trim(),
      howToUse: sections['how to use'] ?? '',
      copyText: stripOuterFence(body),
      searchText: [title, summary, tags.join(' '), category, content].join(' ').toLowerCase(),
    };
  });
  items.sort(
    (a, b) =>
      (CATEGORIES[a.category]?.order ?? 99) - (CATEGORIES[b.category]?.order ?? 99) ||
      a.title.localeCompare(b.title),
  );
  cache = items;
  return items;
}

export function getTemplate(category: string, slug: string) {
  return getTemplates().find((t) => t.category === category && t.slug === slug);
}
