'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import CopyButton from './CopyButton';

export type Item = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  tags: string[];
  copyText: string;
  searchText: string;
};
export type Cat = { id: string; label: string; description: string };

export default function TemplateBrowser({ items, categories }: { items: Item[]; categories: Cat[] }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('all');

  const filtered = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    return items.filter(
      (i) => (cat === 'all' || i.category === cat) && terms.every((t) => i.searchText.includes(t)),
    );
  }, [items, q, cat]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="search">Search templates</label>
        <input
          id="search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search templates, e.g. “retro”, “RACI”, “go-live”"
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
        />
        <label className="sr-only" htmlFor="category">Category</label>
        <select
          id="category"
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
        >
          <option value="all">All categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.label}</option>
          ))}
        </select>
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400" role="status">
        {filtered.length} of {items.length} templates
      </p>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-slate-600 dark:text-slate-400">No templates match your search.</p>
      )}

      {categories.map((c) => {
        const group = filtered.filter((i) => i.category === c.id);
        if (!group.length) return null;
        return (
          <section key={c.id} className="mt-8" aria-labelledby={`cat-${c.id}`}>
            <h2 id={`cat-${c.id}`} className="text-xl font-semibold text-slate-900 dark:text-slate-100">{c.label}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">{c.description}</p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {group.map((i) => (
                <li
                  key={`${i.category}/${i.slug}`}
                  className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                >
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                      <Link href={`/t/${i.category}/${i.slug}/`} className="hover:text-indigo-600 hover:underline">
                        {i.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{i.summary}</p>
                    <p className="mt-2 flex flex-wrap gap-1">
                      {i.tags.map((t) => (
                        <span key={t} className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                          {t}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <CopyButton text={i.copyText} label="Copy template" />
                    <Link href={`/t/${i.category}/${i.slug}/`} className="text-sm text-indigo-600 hover:underline dark:text-indigo-400">
                      View with example
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
